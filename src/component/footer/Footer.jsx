import React from 'react';
import './footer.css';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const handleScrollClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">© {new Date().getFullYear()} Rajshish Inc. All rights reserved.</p>
        <button className="footer__top-btn" onClick={handleScrollClick} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
