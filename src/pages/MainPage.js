import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../components/AuthService';
import Header from './Header';

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const navigateToDrugstores = () => {
    navigate('/drugstores');
  };
  return (
    <div>
      <Header />

      {/* Display additional content or features here */}
      <div>
      <h2>Home Page</h2>
      <p>Welcome to the protected home page!</p>
    </div>
    </div>
  );
};

export default MainPage;