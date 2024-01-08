
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../components/AuthService';
import '../App.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const token = await login(username, password);
      console.log('Login successful. Token:', token);
      navigate('/main');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  const handleRegister = async () => {
    navigate('/registration');
  };

  return (
    <div>
      <h1>Login Page</h1>

      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className='form_button' onClick={handleLogin}>Login</button>
      <button className='form_button' onClick={handleRegister}>Register</button>
    </div>
  );
};

export default LoginPage;