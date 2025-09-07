import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/crown.jpg';
import { FaBars } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdWork, MdContactMail } from 'react-icons/md';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLinkClick = () => {
    setShowNavbar(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-header">
        <img id="mylogo" src={logo} alt="Logo" />
      </div>

      <div className={`navbar-links ${showNavbar ? 'active' : ''}`}>
        <Link to="/" onClick={handleLinkClick} className="icon-wrapper">
          <AiOutlineHome className="nav-icon" />
          <span className="orbit"></span>
        </Link>

        <Link to="/About" onClick={handleLinkClick} className="icon-wrapper">
          <FaUser className="nav-icon" />
          <span className="orbit"></span>
        </Link>

        <Link to="/Skill" onClick={handleLinkClick} className="icon-wrapper">
          <GiSkills className="nav-icon" />
          <span className="orbit"></span>
        </Link>

        <Link
          to="/MyworkPage"
          onClick={handleLinkClick}
          className="icon-wrapper"
        >
          <MdWork className="nav-icon" />
          <span className="orbit"></span>
        </Link>

        <Link to="/Contact" onClick={handleLinkClick} className="icon-wrapper">
          <MdContactMail className="nav-icon" />
          <span className="orbit"></span>
        </Link>
      </div>

      <div className="toggle-icon" onClick={toggleNavbar}>
        <FaBars />
      </div>
    </div>
  );
};

export default Navbar;
