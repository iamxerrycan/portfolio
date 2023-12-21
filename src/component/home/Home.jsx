import React from "react";
import devloper from "../../assets/my.avif";
import "./Home.css";
//import Resume from '../../../public/resume.pdf'

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
        <button
          href="Resume"
          download="RajshishFr.pdf"
          className="button-res"
          for="Rajshish"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Home;
