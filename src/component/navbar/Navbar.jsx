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

  return (
    <div className="navbar">
      <div className="navbar-header">
        {/* <Link to="/"> */}
          <img id="mylogo" src={logo} alt="" />
        {/* </Link> */}
        <div className="toggle-icon" onClick={toggleNavbar}>
          <FaBars />
        </div>
      </div>
      <div className={`navbar-links ${showNavbar ? "active" : ""}`}>
        <Link to="/">
          <a id="navText">Home</a>
        </Link>
        <Link to="/About">
          <a id="navText">About</a>
        </Link>
        <Link to="/Skill">
          <a id="navText">Skill</a>
        </Link>
        <Link to="/MyworkPage">
          <a id="navText">Work</a>
        </Link>
        <Link to="/Contact">
          <a id="navText">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
