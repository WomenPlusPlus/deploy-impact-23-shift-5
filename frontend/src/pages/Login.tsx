import React, { useState } from 'react';
import ActionButtonTransparentBlack from '@/shared/ActionButtonTransparentBlack';
import GoogleIcon from '@/assets/GoogleIcon.png';
import ActionButtonTransparentPurple from '@/shared/ActionButtonTransparentPurple';
import LoginDrawing from '@/assets/LoginDrawing.png'
import { useNavigate } from 'react-router-dom';


const Login:React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // You can add code here to handle the form submission, e.g., send data to a server.
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex flex-row justify-between">
    <form onSubmit={handleSubmit}>

        {/* RIGHT PART */}
        
        <div className='flex flex-col justify-center p-32 gap-5'>
          <h1 className='flex flex-row just text-2xl font-bold'>Login to continue to EntryTech Hub</h1>
          <ActionButtonTransparentBlack>
            <img src={GoogleIcon} alt="Google Icon" />
            Sign in with Google
          </ActionButtonTransparentBlack>
          <div className='flex flex-row justify-center'>
          <div className='flex flex-col border-b-[0.5px] h-3 border-black w-6/12'></div>
          <p className='flex flex-col px-4 text-gray-90'>OR</p>
          <div className='flex flex-col border-b-[0.5px] h-3 border-black w-6/12'></div>
          </div>
        <div className='flex flex-row w-12/12 '>
        <input
        className={fullWidthFieldStyle}
        placeholder="Email"
        type="text"
        value={email}
        onChange={handleEmailChange}
        />
        </div>
        <div className='flex flex-row gap-x-4'>
        <input
          className={fullWidthFieldStyle}
          placeholder="Password"
          type="Password"
          value={password}
          onChange={handlePasswordChange as (value: string | React.ChangeEvent<HTMLInputElement>) => void}
        />
        </div>
        <p className=''>Forgot your password? <span className='font-bold cursor-pointer' onClick={()=>{navigate("/password-recovery")}} >Recover password</span></p>
        <ActionButtonTransparentPurple>Login</ActionButtonTransparentPurple>
        <p className=''>Not registered yet? <span className='font-bold cursor-pointer' onClick={()=>{navigate("/signup")}} >Create an account</span></p>
        </div>  
    </form>
    {/* LEFT PART */}
    <div className="hidden md:flex md:flex-col md:bg-LoginRight md:bg-no-repeat md:bg-cover md:w-4/12 md:h-auto">
        <img className="md:relative md:top-1/2 md:transform md:-translate-y-1/2 md:right-0" src={LoginDrawing} alt="Login Drawing" />
    </div>



    </div>
  );
}

export default Login;
