import React from "react";
import devloper from "../../assets/my.avif";
import star from "../../assets/star.jpg";
import "./Home.css";
import Resume from '../../../public/RajshishSinghResume.pdf'

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
          <button
            // href="/public/resume.pdf"
            // download="RajshishSinghResume.pdf"
            // for="Rajshish"
            className="homebuttonres"
          >
           <a
            className="homebuttonres"
            href={Resume} // Updated the href attribute
            download="RajshishSinghResume.pdf"
          >
            Download Resume
          </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
