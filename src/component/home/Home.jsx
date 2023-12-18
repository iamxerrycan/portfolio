import React from "react";
import devloper from "../../assets/me.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={devloper} alt="Developer" className="developer-image" />
        </div>
      </div>
      <div className="display-flex">
        <div className="content">
          <h1 style={{ color: "white" }}>Hi, I'm Rajshish</h1>
          <p style={{ color: "white" }}>I'm a passionate developer.</p>
          <a href="RajshishFr.pdf" download="RajshishFr.pdf">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
