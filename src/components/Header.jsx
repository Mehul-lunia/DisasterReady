import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/map">Map</Link></li>
        </ul>
      </nav>
      <div className="logo">DisasterReady</div>
    </header>
  );
};

export default Header;
