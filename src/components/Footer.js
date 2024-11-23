import React from 'react';
import { FaTiktok, FaInstagram, FaYoutube, FaDiscord, FaSpotify, FaApple, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-links">
        <a href="#">privacy policy, terms of use, cookies policy & cookies settings</a>
      </div>
      <div className="footer-icons">
        <a href="#"><FaTiktok /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaDiscord /></a>
        <a href="#"><FaSpotify /></a>
        <a href="#"><FaApple /></a>
        <a href="#"><FaFacebook /></a>
      </div>
      <div className="footer-copyright">
        <p>© 2024 amadeuszbartosz</p>
      </div>
    </footer>
  );
};

export default Footer;