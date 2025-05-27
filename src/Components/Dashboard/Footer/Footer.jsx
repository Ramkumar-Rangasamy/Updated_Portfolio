import React from 'react';
import { FaGithub, FaLinkedin, FaPinterest } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer-section text-white">
      <div className="footer-container">
        <div className="footer-left">
          <h4>Stay Connected</h4>
          <div className="social-links">
            <span onClick={() => openLink('https://github.com/Ramkumar-Rangasamy')} className="social-icon" role="button" tabIndex={0}>
              <FaGithub />
            </span>
            <span onClick={() => openLink('https://www.linkedin.com/in/ramkumar-rrr1031m/')} className="social-icon" role="button" tabIndex={0}>
              <FaLinkedin />
            </span>
            <span onClick={() => openLink('https://in.pinterest.com/alwaysramkumar7/_profile/')} className="social-icon" role="button" tabIndex={0}>
              <FaPinterest />
            </span>
          </div>
        </div>

        <div className="footer-right">
          <p>Copyright © 2023 - {year} Portfolio | All rights reserved</p>
          <p>Powered by Ramkumar R </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
