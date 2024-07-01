import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <h1><Link to="/">Home</Link></h1>
          </li>
          <div className='logins'>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
