import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/devloper.png";

const Navbar = () => {
  return (
    <>
      <div>
        <span className="navbarDiv">
          <Link to="/">
            <img id="mylogo" src={logo} alt="" />
          </Link>
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
        </span>
      </div>
    </>
  );
};

export default Navbar;
