import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/crown.jpg";
import { FaBars } from "react-icons/fa";

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
      <div
        className={`navbar-links ${showNavbar ? "active" : ""}`}
      >
        <Link to="/" onClick={handleLinkClick}>
          <span className="nav-link">Home</span>
        </Link>
        <Link to="/About" onClick={handleLinkClick}>
          <span className="nav-link">About</span>
        </Link>
        <Link to="/Skill" onClick={handleLinkClick}>
          <span className="nav-link">Skill</span>
        </Link>
        <Link to="/MyworkPage" onClick={handleLinkClick}>
          <span className="nav-link">Work</span>
        </Link>
        <Link to="/Contact" onClick={handleLinkClick}>
          <span className="nav-link">Contact</span>
        </Link>
      </div>
      <div className="toggle-icon" onClick={toggleNavbar}>
        <FaBars />
      </div>
    </div>
  );
};

export default Navbar;
