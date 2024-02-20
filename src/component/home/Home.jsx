import React from "react";
import devloper from "../../assets/my.avif";
import star from "../../assets/star.jpg"
import "./Home.css";
//import Resume from '../../../public/resume.pdf'

const Home = () => {
  return (
    <div className="container-home">
      <div className="logo">
        <img src={star} alt="Developer" className="developer-image" />
        <div className="text-container">
          <span className="heading-raj">Hi! I'm Rajshish Singh </span>
          <p className="mydata">
            I'm a passionate developer enthusiastic about building robust and
            scalable web applications using modern technologies.
          </p>
        </div>
        {/* <button
          href="Resume"
          download="RajshishFr.pdf"
          for="Rajshish"
        >
          Resume
        </button> */}
      </div>
    </div>
  );
};

export default Home;
