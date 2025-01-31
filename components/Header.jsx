import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSeedling, faInfoCircle, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';  // Importing the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>GROWZA</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faHome} className="icon" /> Home
            </a>
          </li>
          
          <li>
            <a href="/products">
              <FontAwesomeIcon icon={faSeedling} className="icon" /> Products
            </a>
          </li>
          <li>
            <a href="/about">
              <FontAwesomeIcon icon={faInfoCircle} className="icon" /> About Us
            </a>
          </li>
          <li>
            <a href="/contact">
              <FontAwesomeIcon icon={faPhoneAlt} className="icon" /> Contact Us
            </a>
          </li>
          <li>
            <a href="/login">
              <FontAwesomeIcon icon={faPhoneAlt} className="icon" /> Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
