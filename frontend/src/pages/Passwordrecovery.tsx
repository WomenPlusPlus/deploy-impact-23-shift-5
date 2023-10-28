import React, { useState } from 'react';
import ActionButtonTransparentPurple from '@/shared/ActionButtonTransparentPurple';
import LoginDrawing from '@/assets/LoginDrawing.png'
import { useNavigate } from 'react-router-dom';


const PasswordRecovery:React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate()
  const fullWidthFieldStyle ="flex flex-row border rounded-md p-4 border-black w-full placeholder:text-black"


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // You can add code here to handle the form submission, e.g., send data to a server.
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex flex-row justify-between h-screen">
    <form onSubmit={handleSubmit}>

        {/* RIGHT PART */}
        
        <div className='flex flex-col align-middle justify-center p-44 gap-5'>
          <h1 className='flex flex-row just text-2xl font-bold'>Forgot your password?</h1>
          <p>Fill in your email and will send you a link for recover!</p>
        <div className='flex flex-row w-12/12'>
          <input
          className={fullWidthFieldStyle}
          placeholder="Email"
          type="text"
          value={email}
          onChange={handleEmailChange}
          />
        </div>
        <ActionButtonTransparentPurple>Send a Link!</ActionButtonTransparentPurple>
        <p className=''>Wow, you remember it? Please <span className='font-bold cursor-pointer' onClick={()=>{navigate("/login")}} >Login</span></p>
        </div>  
    </form>
    {/* LEFT PART */}
    <div className="hidden md:flex md:flex-col md:bg-LoginRight md:bg-no-repeat md:bg-cover md:w-4/12 md:h-auto">
        <img className="md:relative md:top-1/2 md:transform md:-translate-y-1/2 md:right-0" src={LoginDrawing} alt="password recovery" />
    </div>
    </div>
  );
}

export default PasswordRecovery;
