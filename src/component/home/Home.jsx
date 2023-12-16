import React from "react";
import devloper from "../../assets/me.jpg";
import "./Home.css";
//import AboutPage from "../../page/aboutPage/AboutPage";

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <img src={devloper} alt="Developer" className="developer-image" />
        <h1 style={{ color: "white" }}>Hi, I'm Rajshish</h1>
        <p style={{ color: "white" }}>I'm a passionate developer.</p>
      </div>
      <div className="display-flex">
        <div className="resume-down"></div>
        <div>
          <h1>Download Resume</h1>
          <a href="../../assets/resume.pdf" download="resume.pdf">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
