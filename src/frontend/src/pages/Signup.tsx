import React, { useState } from 'react';
import axios from 'axios'; 
import ActionButtonTransparentBlack from '@/shared/ActionButtonTransparentBlack';
import GoogleIcon from '@/assets/GoogleIcon.png';
import LoginDrawing from '@/assets/LoginDrawing.png'
import { useNavigate } from 'react-router-dom';

const Signup:React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const halfWidthFieldStyle ="flex flex-col w-full border rounded-md border-black p-4 placeholder:text-black "
  const fullWidthFieldStyle ="flex flex-row border rounded-md p-4 border-black w-full placeholder:text-black"

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };


  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Define the data to send to the server
      const data = {
        username: email, // You can use email as the username, or create a separate username field.
        password: password,
        first_name: firstName,
        last_name: lastName,
        email: email,
      };

      // Make a POST request to your Django backend for user signup
      const response = await axios.post('http://127.0.0.1:8000/signup/', data);

      // Handle the response here, you can navigate the user or show a success message.
      console.log('Signup success:', response.data);
      navigate('/login'); // Redirect to the login page after successful signup
    } catch (error) {
      // Handle errors here, you can show an error message to the user.
      console.error('Signup error:', error);
    }
  };


  return (
    <div className="flex flex-row justify-between">
    <form onSubmit={handleSubmit}>

        {/* RIGHT PART */}
        
        <div className='flex flex-col justify-center p-32 gap-5'>
          <h1 className='flex flex-row just text-2xl font-bold'>JOIN THE INCLUSIVE TECH REVOLUTION</h1> 
          <p>Sign in to continue to EntryTech Hub</p>
          <ActionButtonTransparentBlack>
            <img src={GoogleIcon} alt="Google Icon" />
            Sign in with Google
          </ActionButtonTransparentBlack>
          <div className='flex flex-row justify-center'>
          <div className='flex flex-col border-b-[0.5px] h-3 border-black w-6/12'></div>
          <p className='flex flex-col px-4 text-gray-90'>OR</p>
          <div className='flex flex-col border-b-[0.5px] h-3 border-black w-6/12'></div>
          </div>
        <div className='flex flex-row gap-x-4'>
          <input
            placeholder="First Name"
            type="text"
            value={firstName}
            className={halfWidthFieldStyle}
            onChange={handleFirstNameChange as (value: string | React.ChangeEvent<HTMLInputElement>) => void}
          />

          <input
            placeholder="Last Name"
            type="text"
            value={lastName}
            className={halfWidthFieldStyle}
            onChange={handleLastNameChange as (value: string | React.ChangeEvent<HTMLInputElement>) => void}
          />

        </div>
        <div className='flex flex-row w-12/12'>
        <input
          placeholder="Email"
          type="email"
          value={email}
          className={fullWidthFieldStyle}
          onChange={handleEmailChange}
        />
        </div>
       {/* USER TYPE SELECTION DROPDOWN */}
       <div className={`${halfWidthFieldStyle} flex flex-row w-12/12`}>
          <select id="countries" className="  text-gray-900 text-sm rounded-lg">
            <option selected>Choose a user type</option>
            <option value="candidate">Candidate</option>
            <option value="company">Company</option>
            <option value="association">Association</option>
          </select>
        </div>
        <div className='flex flex-row gap-x-4'>
        <input
            type="Password"
            placeholder='Password'
            className={halfWidthFieldStyle}
            value={password}
            onChange={handlePasswordChange as (value: string | React.ChangeEvent<HTMLInputElement>) => void}
        />

        <input
          className={halfWidthFieldStyle}
          placeholder="Confirm Password"
          type="Password"
          value={password}
          onChange={handlePasswordChange as (value: string | React.ChangeEvent<HTMLInputElement>) => void}
        />
        </div>
        <div className='flex flex-row gap-2'>
        <input type='checkbox'/><p>I agree with <span className='font-bold'>Terms of service</span> and <span className='font-bold'>Privacy and Policy</span></p></div>
        <button className='bg-purple-50 p-3 rounded-full' onClick={handleSubmit} type="submit">Signup</button>
        <p className=''>Already have an account? <span className='font-bold cursor-pointer' onClick={()=>{navigate('/login')}}>Login</span></p>
        </div>  
    </form>
    {/* LEFT PART */}
    <div className="hidden md:flex md:flex-col md:bg-LoginRight md:bg-no-repeat md:bg-cover md:w-4/12 md:h-auto">
        <img className="md:relative md:top-1/2 md:transform md:-translate-y-1/2 md:right-0" src={LoginDrawing} alt="Login Drawing" />
    </div>



    </div>
  );
}

export default Signup;
