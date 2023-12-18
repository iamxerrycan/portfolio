import React from "react";
import devloper from "../../assets/me.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-home">
      <div className="logo">
        <img src={devloper} alt="Developer" className="developer-image" />
        <span className="heading-raj">Hi! I'm Rajshish Singh </span>
        <p className="mydata">
          I'm a passionate developer enthusiastic about building robust and
          scalable web applications using modern technologies.
        </p>
      </div>
      <div className="display-flex">
          <button href="RajshishFr.pdf" download="RajshishFr.pdf">
            Download Resume
          </button>
        
      </div>
    </div>
  );
};

export default Home;
