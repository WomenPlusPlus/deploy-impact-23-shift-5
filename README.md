<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<h3 align="center">SHIFT 5</h3>
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="frontend/src/assets/HomepageHeader.png" alt="">
  </a>
</div>


# About The Project :mega:
<div align="center">

  <p>Founded on the principles of equality and digital education, EntryTech Hub brings together a coalition of forward-thinking associations, tech companies, and job seekers. We believe that everyone, regardless of their background or experience, should have access to the limitless possibilities of the digital world.
At EntryTech Hub, we are more than just a digital platform. We are a community-driven initiative with a mission to empower individuals, foster inclusivity, and create opportunities in the tech industry.</p>
  <a href="https://deploy-impact-23-shift-5-hq2p.vercel.app/">EntryTech Hub</a>
  

</div>

## Table of Contents
- [About The Project](#about-the-project-mega)
- [Overview](#overview-bulb)
- [UX/UI](#uxui-art)
- [Backend ⚙️](#backend-nut_and_bolt)
- [Frontend](#frontend-computer)
- [Data Science](#data-science-wrench)
- [How to run](#how-to-run-rocket)
- [License](#license-pencil)
- [Tech Stack](#built-with-construction)
- [Meet the team](#meet-the-team-coffee)


# Overview 💡
This project developing for the Tech industry which is often inaccessible for underrepresented groups, causing candidates to struggle in finding suitable job opportunities. Companies find it challenging to discover diverse talent, and associations face difficulties reaching potential candidates and like-minded organizations. Administrators need an efficient system to manage user activities.

## Why we created this platform
Our platform was developed to bridge the gap between job seekers and tech opportunities. We recognized the challenges faced by tech talent, companies seeking diverse candidates, associations supporting underrepresented groups and administrators managing user activities. We aimed to create a solution that simplifies the job search process, fosters diversity in recruitment, and facilitates connections between candidates, companies, associations, and administrators.

## How personas were created
For each persona, we figured out and came up with the following questions:
Identified the Persona’s Wants, Problem Statement, Pain Points, User Journey Map, Empathy Mapping, Point of View and How Might We Questions as an ideation phase that helps to open up the design challenge and inspire brainstorms and other ideation sessions to generate a wide range of solutions. The User Flows were created as a result of the data we collected during the steps above.

The documents of the whole process for each persona:
- Candidate : [Persona](https://github.com/WomenPlusPlus/deploy-impact-23-shift-5/blob/main/docs/UX-UI/Persona_Candidate.pdf) / [User flow](https://github.com/WomenPlusPlus/deploy-impact-23-shift-5/blob/main/docs/UX-UI/User_Flow_Candidate.pdf)
- Company : [Persona](https://github.com/WomenPlusPlus/deploy-impact-23-shift-5/blob/main/docs/UX-UI/Persona_Company.pdf) / [User flow](https://github.com/WomenPlusPlus/deploy-impact-23-shift-5/blob/main/docs/UX-UI/User_Flow_Company.pdf)
- Association : [Persona](https://github.com/WomenPlusPlus/deploy-impact-23-shift-5/blob/main/docs/UX-UI/Persona_Association.pdf) - [User flow](https://github.com/WomenPlusPlus/deploy-impact-23-shift-5/blob/main/docs/UX-UI/User_Flow_Association.pdf)
- Administrator : [Persona](https://github.com/WomenPlusPlus/deploy-impact-23-shift-5/blob/main/docs/UX-UI/Persona_Administrator.pdf) - [User flow](https://github.com/WomenPlusPlus/deploy-impact-23-shift-5/blob/main/docs/UX-UI/User_Flow_Admin.pdf)


# UX/UI :art:
## Design
The whole design process was accomplished within Figma. During the development process, we faced a few interesting challenges that brought us to a very interesting design process.

Following the User Flow we started to think of the Dashboard as our main directory where each user can navigate according to his / her needs and aims. How to get to this platform? The invitation will be sent to each participant after completing an initiative. After the validation process, the user can reach the dashboard.

One more thing we were thinking of is the possible ease of knowing about this opportunity. **EntryTech Hub** brings together a coalition of forward-thinking associations, tech companies, and job seekers. Well, for this reason, we decided to create a landing page with the main information about the platform and why it is interesting for the mentioned audience. So this landing page is the Entry Door to our platform. From this landing page, the user can become a part of it. The candidate, for instance, can begin his deploy (impact) once he signs up for this program. After this step, the candidate becomes a part of our ecosystem.

Another thing which we decided to improve is our **Emails and Newsletters**. For implementation, we could use the open-source grapesjs.com to create beautiful Emails within our platform. Once we have a pool of our candidates, company
representatives, and association representatives, we should stay on top of the Matterhorn and prove that we are the ones who care about you! Well, that being said we decided to add a little extra touch and to spread our brand identity. Yes, we are sure that we going to be on the top of that particular pick mountain if we focus on our branding from the beginning.

We decided not to focus on clickable prototypes because of a lack of time and to focus more on delivering the best practices and people-friendly interfaces.
Also, there was a plan to create a design system for further processing and development, plus the creation of design systems to speed up the dev process at least twice. But we should say that for the same reason of lack of time, we decided to use the Material Design system.

## Key features
By sprint 5 we managed to create **Dashboards** for the Candidates, Companies, and Associations according to the user flows we created in the Ideation phase. Plus we created the **Home Page** with the main information of the EntryTech Hub platform. The **Welcome Pages** for each of the users also were designed for the verification steps. These pages could be reached only by clicking the link in the invitation Email.

Surely **Login / Recover Pages** also were designed as one of the key features during the sign-up process. Also, **Page 404** was designed for the reason that someone accidentally managed to reach the Welcome Page or typed the wrong directory in the browser. Also, we gave a feeling of how the first run can turn to a new user. For this reason, we designed a few screens how the **Guide** could look like and how it could be implemented. So that new users can easily go through this guide and become familiar with the features of the EntryTech Hub features.

Moreover, as we mentioned earlier, we designed the interface within the Association dashboard where the person who is in charge of sending mass invitations to participants or companies can create his / her design of the Email.
And from our perspective we designed an invitation **Email** how it could look, not to mention we keep it on our Road Map.


# Backend :nut_and_bolt:
## Overview
In this project, we have leveraged the power of Python-Django for the backend, creating a robust and extensible application framework. Our data is stored and managed efficiently in a PostgreSQL database hosted by Supabase, ensuring security and scalability. This combination allows us to deliver a high-performance, data-driven web application with a versatile and user-friendly interface, making it well-suited for a wide range of applications and industries.

We've harnessed the power of Pony ORM to define and manage the underlying data structure efficiently. By creating Django models for personas, candidates, associations, and companies, we've established a strong foundation for our application. Using Pony ORM's capabilities, we've also generated an entity relationship diagram, providing a visual representation of how our data entities are interconnected. Furthermore, we've integrated Supabase's API to handle user authentication, ensuring secure access to our application. 

## ER diagrams

- [Association](https://github.com/WomenPlusPlus/deploy-impact-23-shift-5/blob/main/docs/Backend/Association.pdf)
- [Candidate](https://github.com/WomenPlusPlus/deploy-impact-23-shift-5/blob/main/docs/Backend/Candidate.pdf)
- [Company](https://github.com/WomenPlusPlus/deploy-impact-23-shift-5/blob/main/docs/Backend/Company.pdf)


# Frontend :computer:
## Overview
TBD


# Data Science :wrench:
## Overview
By leveraging data science and machine learning, our EntryTech Hub strives to bridge the diversity gap in the tech industry, making it more inclusive and representative of different backgrounds and experiences.
This machine learning solution addresses the task of extracting keywords, such as job titles, skills, and education, from resumes and job advertisements. It then utilizes a sentence transformer model to calculate the similarity between these lists of keywords. This technology can greatly assist in matching job seekers with suitable job opportunities by effectively understanding the context and relevance of keywords. Our Name Entity Recognition model is designed to strictly avoid the use of personal information in our recommendation system.

## Components
1. **NLP Keyword Extraction Model:**

For this task, we have first labeled a dataset, using [doccano](https://github.com/doccano/doccano). The labels annotated are JOB_TITLE, SKILL, EDUCATION. Next, we used SpaCy with DistilBERT transformer to train a custom Name Entity Recognition model on this labeled dataset, enabling it to extract and recognize the designated entities within the text.

2. **Sentence Transformer Model:**

We used Hugging Face sentence transformer (all-MiniLM-L6-v2) to build a recommendation system between keywords lists from CVs and job ads. This model converts the extracted keywords as embeddings, which are numerical representations of text. These embeddings capture the semantic meaning of the keywords. This model then mesures the similarity between the lists of keywords from resumes and job ads, using cosine similarity. Our matching algorithm selects the pairs of CVs and job ads with the highest similarity.

Furthermore, we embarked on a journey to fine-tune this model. The aim is to label pairs of CV and job ad with our own similarity score, derived from the cosine similarity to optimize the score regarding the mutual skills. The idea of this approach is to simulate a real history of matches between candidates and job ads, and fine tune a model to generalize these matches. This custom however, is still in progress and hasn't yet demonstrated its efficiency. We continue to refine it to achieve the desired results.

## Data sources
- [Resume dataset](https://www.kaggle.com/datasets/dataturks/resume-entities-for-ner) from Kaggle
- [Job ads dataset](https://www.kaggle.com/datasets/dilshaansandhu/international-jobs-dataset) from Kaggle


# How to run :rocket:
## Local run
1. Clone the repository;
2. Open terminal
3. Navigate to the cloned repository's _frontend_ directory
4. Run `nvm install node`
5. Run `npm install`
6. Run `npm run dev`
7. Open another terminal
8. Navigate to _backend_ directory
9. Run `pip install -r requirements.txt`
10. Run `python manage.py makemigrations`
11. Run `python manage.py migrate`
12. Run `python manage.py runserver`
13. Visit [127.0.0.1:8000](http://127.0.0.1:8000) on Your browser.


# License :pencil:

Distributed under the GNU General Public License v3.0. See [LICENSE](LICENSE) for more information.


# Built With :construction:

* ![React][React.js]
* ![Typescript][Typescript]
* ![Django][django]
* ![Supabase][Supabase]
* ![Vercel][Vercel]
* ![Hugging Face][HuggingFace]


# Meet the team :coffee:

| Name | Role | Links |
|------|------|-------|
| Aidas Petryla | Backend Developer | [LinkedIn](https://www.linkedin.com/in/aidas-petryla-a8a770207/) - [Github](https://github.com/apetryla) |
| Eliot Lebeau | Data Scientist | [LinkedIn](https://www.linkedin.com/in/eliot-lebeau/) - [Github](https://github.com/eliot-hub) |
| Kyrylo Liakhovets | UX/UI Designer | [LinkedIn](https://www.linkedin.com/in/zefirdsgn/) - [Github](https://github.com/zefirdsgn) |
| Lydia Lavecchia | Fullstack Developer | [LinkedIn](https://www.linkedin.com/in/lydialavecchia/) - [Github](https://github.com/iamlydial) |
| Sophie Goger | Fullstack Developer | [LinkedIn](https://www.linkedin.com/in/gogers/) - [Github](https://github.com/Jeyl) |
| Suganya Nagarajan | Backend Developer | [LinkedIn](https://www.linkedin.com/in/suganya-nagarajan-549299154/) - [Github](https://github.com/suganyanagarajan20) |
| Temitayo Ajayi | Project Manager | [LinkedIn](https://www.linkedin.com/in/temitayo-ajayi/) |

<p align="right">(<a href="#readme-top">back to top</a>)</p>



[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Typescript]: https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&labelColor=white&logo=typescript&logoColor=%233178C6
[django]: https://img.shields.io/badge/Django-20232A?style=for-the-badge&labelColor=white&logo=django&logoColor=%23092E20
[Supabase]: https://img.shields.io/badge/Supabase-20232A?style=for-the-badge&labelColor=white&logo=Supabase&logoColor=#3FCF8E
[Vercel]: https://img.shields.io/badge/Vercel-20232A?style=for-the-badge&logo=Vercel&logoColor=#000000
[HuggingFace]: https://img.shields.io/badge/%F0%9F%A4%97-Models-yellow


