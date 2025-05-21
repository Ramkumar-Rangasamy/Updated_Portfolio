import React from 'react';
import { FaGithub, FaLinkedin, FaPinterest } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  const year = new Date();

  return (
    <footer className="footer-section text-white py-4 px-1">
      <div className="container-lg">
        <div className="row d-flex align-items-center  text-center">
          <div className="footer-heading col-12 col-lg-6">
            <h4 className="mb-3">Stay Connected</h4>
            <div className="row justify-content-center mb-4">
              <div className="social-links d-flex justify-content-center gap-4">
                <a href="https://github.com/Ramkumar-Rangasamy" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/ramkumar-rrr1031m/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin />
                </a>
                <a href="https://in.pinterest.com/alwaysramkumar7/_profile/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaPinterest />
                </a>
              </div>
            </div>
          </div>
        

        
          <div className="col-12 col-lg-6 mb-4">
            <p className="mb-1">© 2023 - {year.getFullYear()} Portfolio. All rights reserved.</p>
            <p className="mb-0">Powered by Ramkumar R.</p>
          </div>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
