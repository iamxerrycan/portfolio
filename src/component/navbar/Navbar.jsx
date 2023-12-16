import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/crown.jpg";

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
          <Link to="/Rajshishdcs">
            <a id="navText">Rajshish</a>
          </Link>
          <Link to="/MyworkPage">
            <a id="navText">MyWork</a>
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
