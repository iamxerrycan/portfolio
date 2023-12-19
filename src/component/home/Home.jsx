import React from "react";
import devloper from "../../assets/my.avif";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-home">
      <div className="logo">
        <img src={devloper} alt="Developer" className="developer-image" />
        <div className="text-container">
          <span className="heading-raj">Hi! I'm Rajshish Singh </span>
          <p className="mydata">
            I'm a passionate developer enthusiastic about building robust and
            scalable web applications using modern technologies.
          </p>
        </div>
      </div>
      <div className="display-flex">
        <a href="RajshishFr.pdf" download="RajshishFr.pdf">
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
