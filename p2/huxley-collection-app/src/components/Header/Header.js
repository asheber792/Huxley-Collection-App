import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const navStyle = {
  textDecoration: 'none',
  color: 'white'
}

const Header = () => {
  return (
    <header>
      <nav>
        <ul className='nav-flex'>
          <li className='home-link'><Link to="/home" style={navStyle}>HOME</Link></li>
          <li className='works-link'><Link to="/collected-works" style={navStyle}>COLLECTED WORKS</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
