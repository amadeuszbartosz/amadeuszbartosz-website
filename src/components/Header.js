import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <nav>
        <ul className="nav-links">
          <li><a href="#">stories</a></li>
          <li><a href="#">store</a></li>
          <li><a href="#">adventure</a></li>
          <li><a href="#">sign up</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;