import os
import json
import requests

import fitz
from supabase import create_client, Client
import spacy
import pandas as pd
from sentence_transformers import SentenceTransformer, util
from transformers import logging
logging.set_verbosity_error()

URL = "https://iuyewcdcpqxnbvkjyhtj.supabase.co"
KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1eWV3Y2RjcHF4bmJ2a2p5aHRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNDU0NDMsImV4cCI6MjAxMTkyMTQ0M30\
.SS-3bMpGlEIZSDf9BRNmb_u8XvCzm-5J_1WfBtpZOXg"
supabase: Client = create_client(URL, KEY)

PATH = os.path.join(os.getcwd(), "backend", "matching")
HERE_API_KEY = '3kO1RrqyZDXf8hUQLAnU6PIHT2BXN1sd_5EWg1pqOaM'
NLP_MODEL = spacy.load("en_pipeline")
SENTENCE_MODEL = SentenceTransformer("eliot-hub/sentence_transformer")  # SentenceTransformer("all-MiniLM-L6-v2")


def pdf_to_text(fpath):
    """
    Convert a PDF file to text.

    Parameters
    ----------
    fpath (str): The file path to the PDF document.

    Returns
    -------
    str: The text extracted from the PDF, with line breaks replaced by spaces.
    """
    doc = fitz.open(os.path.join(PATH, fpath))
    txt = ""
    for page in doc:
        txt = txt + str(page.get_text()).replace("\n", " ")
    return txt



def geocode_address(address):
    """
    Geocode the provided address using the HERE Geocoding API.

    Parameters
    ----------
        address (str): The address to be geocoded.

    Returns
    -------
        dict: A dictionary containing geocoding information.
            - 'address' (str): The geocoded address.
            - 'city' (str): The city associated with the address.
            - 'zipcode' (str): The postal code associated with the address.
            - 'lat' (float): The latitude coordinate of the geocoded location.
            - 'lon' (float): The longitude coordinate of the geocoded location.
            - 'score' (str): The query score for the geocoding result.

    If an error occurs during the geocoding process, empty strings are returned for all fields.
    
    Note
    ----
    - This function is tailored to work with the HERE Geocoding API and may require appropriate API key and endpoint.
    - Error handling is in place to handle cases where geocoding fails.

    See HERE Geocoding API documentation for more details: https://developer.here.com/documentation/geocoding-search-api
    """
    params = {
        "q": address,
        "apiKey": HERE_API_KEY,
    }
    try:
        response = requests.get("https://geocode.search.hereapi.com/v1/geocode", params=params).json()
        address = response['items'][0]['address']['label']
        city = response['items'][0]['address']['city']
        zipcode = response['items'][0]['address']['postalCode']
        lat, lon = response['items'][0]['position']['lat'], response['items'][0]['position']['lng']
        score = response['items'][0]['scoring']['queryScore']
    except:
        address = ""
        city = ""
        zipcode = ""
        lat, lon = "", ""
        score = "" 
    # result = {
    #     "address" : address,
    #     "city" : city,
    #     "zipcode" : zipcode,
    #     "lat" : lat,
    #     "lon" : lon,
    #     "score" : score
    # }
    return {"lat":lat, "lon":lon}


def calculate_distance(address_orig, address_dest):
    """
    Calculate the driving duration between two addresses using the HERE Routing API.

    Parameters
    ----------
        address_orig (str): The origin address.
        address_dest (str): The destination address.

    Returns
    -------
        str: A string indicating the estimated driving duration category.
        
    Categories:
        - 'Under 30 mins'
        - 'Under 45 mins'
        - 'Under 1 hour'
        - 'Under 1.5 hours'
        - 'Under 2 hours'
        - 'Over 2 hours'

    If an error occurs during the routing process, None is returned.

    Note
    ----
    - The function relies on the geocode_address function to obtain coordinates for origin and destination addresses.
    - This function is tailored to work with the HERE Routing API and may require an appropriate API key and endpoint.
    - Error handling is in place to handle cases where routing information retrieval fails.

    See HERE Routing API documentation for more details: https://developer.here.com/documentation/routing-api
    """ 
    coordinates_orig = geocode_address(address_orig)
    coordinates_dest = geocode_address(address_dest)
    
    params = {
        "transportMode":'car',
        "origin":f"{coordinates_orig['lat']},{coordinates_orig['lon']}",
        "destination":f"{coordinates_dest['lat']},{coordinates_dest['lon']}",
        "return":'travelSummary',
        "apiKey": HERE_API_KEY,
    }
    try:
        response = requests.get("https://router.hereapi.com/v8/routes", params=params).json()
        result = response["routes"][0]["sections"][0]["travelSummary"]
        duration = result["baseDuration"] / 3600
        
        bins = [0, 0.5, 0.75, 1, 1.5, 2, 9999]
        labels = ['Under 30 mins', 'Under 45 mins', 'Under 1 hour', 'Under 1.5 hour', 'Under 2 hours', 'Over 2 hours']
        duration_class = pd.cut([duration], bins, labels=labels, include_lowest=True)[0]
        return duration_class
    except:
        return "Unknown distance"
    

def parse_document(text):
    """
    Extract information from a document (resume / job ad).

    This function uses a spaCy custom model to process a given resume and extracts information such as email addresses,
    diplomas, job titles, company names, and skills mentioned in the resume.

    Parameters
    ----------
    text (str): The text to be parsed.

    Returns
    -------
    dict: A dictionary containing extracted information, with the following keys:
        - 'EMAIL': List of email addresses found in the resume.
        - 'DIPLOMA': List of diplomas or educational qualifications mentioned in the resume.
        - 'JOB_TITLE': List of job titles or positions mentioned in the resume.
        - 'COMPANY': List of company names mentioned in the resume.
        - 'SKILL': List of skills or competencies mentioned in the resume.
        
    Note
    ----
    - The values in the returned dictionary are lists to accommodate multiple instances of each type of information.
    - Duplicate entries are removed from the lists, ensuring uniqueness.
    """
    # Create spaCy doc  
    doc = NLP_MODEL(text)

    parsed_info = {
        "JOB_TITLE" : [],
        "SKILL": [],
        "COMPANY" : [],
        "DIPLOMA" : [],
        "EMAIL" : [],
        "LINK": [],
    }
    for ent in doc.ents:
        parsed_info[ent.label_].append(ent.text)
    for token in doc:
        if token.like_email:
            parsed_info["EMAIL"].append(token)
        if token.like_url:
            parsed_info["LINK"].append(token)
        
    parsed_info["SKILL"] = list(set(parsed_info["SKILL"]))
    parsed_info["COMPANY"] = list(set(parsed_info["COMPANY"]))
    if len(parsed_info["JOB_TITLE"]):
        parsed_info["JOB_TITLE"] = parsed_info["JOB_TITLE"][0]
    else:
        parsed_info["JOB_TITLE"] = ""
        
    return parsed_info


def keywords_extraction(text):
    """
    Extracts keywords and relevant information from a given text document.

    Parameters
    ----------
    text (str): The text document to extract keywords and information from.

    Returns
    -------
    str: A formatted description that includes the job title, skills, and education information
    extracted from the input text. The format is as follows:
    "{job_title}. Skills: {comma-separated skills}. Education: {space-separated education}".

    Example
    -------
    >>> text = "John Doe, Software Engineer with a degree in Computer Science, is skilled in Python and Java."
    >>> keywords_extraction(text)
    "Software Engineer. Skills: Python, Java. Education: Computer Science."
    """
    doc_dict = parse_document(text)

    skills = ", ".join(doc_dict["SKILL"]) if len(doc_dict["SKILL"]) else ""
    education = " ".join(doc_dict["DIPLOMA"]) if len(doc_dict["DIPLOMA"]) else ""
    desc = f"{doc_dict['JOB_TITLE']}. Skills: {skills}. Education: {education}"
    return desc



def similarity_score(cv_desc, job_desc):
    """
    Calculate the similarity score between a CV description and a job description using a pre-trained model.

    Parameters
    ----------
    cv_desc (str): The CV description text.
    job_desc (str): The job description text.

    Returns
    -------
    float: The similarity score between the CV and job descriptions. Higher values indicate greater similarity.

    Example
    -------
    >>> cv_description = "Experienced software engineer skilled in Python and Java."
    >>> job_description = "We are looking for a software engineer proficient in Python and Java."
    >>> similarity_model = your_pretrained_model  # Replace with the actual model object.
    >>> similarity_score(cv_description, job_description, similarity_model)
    0.9123
    """

    embeddings = SENTENCE_MODEL.encode([cv_desc, job_desc])

    return util.dot_score(embeddings[0], embeddings[1]).item()


def recommend_jobs(candidate_profile, job_ads, top_jobs=3):
    """
    Recommend top job opportunities to a candidate based on their profile and job advertisements.

    Parameters
    ----------
    candidate_profile (str): The candidate's profile or CV description.
    job_ads (list of str): A list of job advertisement descriptions.
    model (your_pretrained_model): The pre-trained model used for encoding text.
    top_jobs (int, optional): The number of top job recommendations to return. Default is 3.

    Returns
    -------
    list: A list of recommended job opportunities as tuples, each containing the job description and its similarity score
    with the candidate's profile. The list is sorted in descending order of similarity.

    Example
    -------
    >>> candidate_profile = "Experienced software engineer skilled in Python and Java."
    >>> job_ads = ["We are looking for a software engineer proficient in Python and Java.", "Data Scientist position available for a Python expert."]
    >>> recommendation_model = your_pretrained_model  # Replace with the actual model object.
    >>> recommended_jobs = recommend_jobs(candidate_profile, job_ads, recommendation_model, top_jobs=2)
    >>> for job, score in recommended_jobs:
    ...     print(f"Job: {job}\nSimilarity Score: {score}")
    Job: We are looking for a software engineer proficient in Python and Java.
    Similarity Score: 0.9123
    Job: Data Scientist position available for a Python expert.
    Similarity Score: 0.8456
    """
    candidate_desc = keywords_extraction(candidate_profile)
    
    jobs_desc = [keywords_extraction(job) for job in job_ads]
    scores = [similarity_score(candidate_desc, job_desc) for job_desc in jobs_desc]
    result = list(zip(job_ads, scores))
    result.sort(key = lambda x:x[1], reverse=True)
    return result[:top_jobs]


def recommend_candidates(job_ad, candidate_profiles, top_profiles=3):
    """
    Recommend top candidates based on their profile for job advertisements.

    Parameters
    ----------
    job_ad (str): The job offer description.
    candidate_profiles (list of str): A list of candidates descriptions.
    top_profiles (int, optional): The number of top job candidates to return. Default is 3.

    Returns
    -------
    list: A list of recommended candidates as tuples, each containing the candidate description and its similarity score
    with the job ad. The list is sorted in descending order of similarity.

    Example
    -------
    >>> candidate_profile = "Experienced software engineer skilled in Python and Java."
    >>> job_ads = ["We are looking for a software engineer proficient in Python and Java.", "Data Scientist position available for a Python expert."]
    >>> recommendation_model = your_pretrained_model  # Replace with the actual model object.
    >>> recommended_jobs = recommend_jobs(candidate_profile, job_ads, recommendation_model, top_jobs=2)
    >>> for job, score in recommended_jobs:
    ...     print(f"Job: {job}\nSimilarity Score: {score}")
    Job: We are looking for a software engineer proficient in Python and Java.
    Similarity Score: 0.9123
    Job: Data Scientist position available for a Python expert.
    Similarity Score: 0.8456
    """
    job_desc = keywords_extraction(job_ad)
    
    candidates = [keywords_extraction(candidate) for candidate in candidate_profiles]
    scores = [similarity_score(candidate_desc, job_desc) for candidate_desc in candidates]
    result = list(zip(candidates, scores))
    result.sort(key = lambda x:x[1], reverse=True)
    return result[:top_profiles]

if __name__ == '__main__':

    # Test matching
    cv = pdf_to_text(os.path.join(PATH, "Alice Clark CV.pdf"))
    jobs = pd.read_excel(os.path.join(PATH, "jobs.xlsx"))
    test = recommend_jobs(cv, jobs["Description"])
    print(test)

    # Test distance
    candidate_address = "Dorfstrasse 78, 8706 Meilen"
    company_address = "Maagpl. 5, 8005 Zürich"
    # print(calculate_distance(candidate_address, company_address))