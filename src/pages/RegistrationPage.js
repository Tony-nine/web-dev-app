import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const RegistrationPage = () => {
    const navigate = useNavigate();

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          body: JSON.stringify({
            username: username,
            email: email,
            password: password
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response.json);
        //navigate('/guest/registration/confirm-registration');
          
      };
      const handleLogin = async () => {
        navigate('/login');
      };
      const buttonStyle = 'mt-5 w-48 h-8 border border-black rounded-3xl bg-gray-200';

    return (
        <div className='bg-gray-200 h-full py-10 '>
            <div className='mx-10 mb-10 bg-white h-5/6 w-11/12 flex flex-col space-y-5 rounded-3xl' >
                <h1 className='flex p-16 text-6xl justify-center text-center'>Register in Drugstores system!</h1>
                <div className='pb-12 flex justify-center flex-col text-center'>
                    <form className='flex flex-col text-center items-center' onSubmit={handleSubmit}>
                      <label htmlFor="username">Username</label>
                      <input className='m-2 h-8 border border-black w-48 rounded-md' type="text" ref={usernameRef} id="name" />
  
                      <label className='mt-2' htmlFor="email">Email</label>
                      <input className='m-2 h-8 border border-black w-48 rounded-md' type="email" ref={emailRef} id="email"/>
                      
  
                      <label className='mt-2' htmlFor="password">Password</label>
                      <input className='m-2 h-8 border border-black w-48 rounded-md' type="password" ref={passwordRef} id="password"/>
                      
                      
                      <button className="form_button" type="submit">Submit</button>
                      <button className='form_button' onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
  };

export default RegistrationPage;