import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="main-header">
          <nav>
            <ul className="nav-links">
              <li><a href="#">Stories</a></li>
              <li><a href="#">Store</a></li>
              <li><a href="#">Adventure</a></li>
              <li><a href="#">Sign Up</a></li>
            </ul>
          </nav>
        </header>
      );
    };
    
export default Header;