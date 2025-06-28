import React from 'react';
import './footer.css';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {

  const handleScrollClick = () => {
 document.documentElement.scrollIntoView({ behavior: 'smooth' });
};


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Rajshish Inc. All rights reserved.</p>
        </div>

        <div className="footer-center">
          <a href="https://github.com/iamxerrycan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/iamxerrycan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:rajshish333@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-right">
          <button className="scroll-to-top" onClick={handleScrollClick} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
