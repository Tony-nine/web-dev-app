// Header.js
import React, { useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../components/AuthService';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`app-header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="left-content">
        <i className="icon fas fa-medkit"></i>
        <h1>Drugstore</h1>
        <button className="menu-toggle" onClick={toggleMenu}>menu</button>
      </div>
      <div className={`right-content ${menuOpen ? 'menu-open' : ''}`}>
        
          <div className={`burger-menu ${menuOpen ? 'open' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        
        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/main" onClick={closeMenu}>
                Main Page
              </Link>
            </li>
            <li>
              <Link to="/drugstores" onClick={closeMenu}>
                Browse Drugstores
              </Link>
            </li>
            <li>
              <button className="logout_button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;