import React from 'react';
import star from '../../assets/star.jpg';
import './Home.css';
import Resume from '../../assets/RajshishSinghResume.pdf';

const Home = () => {
  return (
    <div className="container-home">
      <div className="logo">
        <img src={star} alt="Rajshish Singh" className="developer-image" />
        <div className="text-container">
          <p className="heading-raj">Rajshish Singh</p>
          <h2 className="sub-heading">
            Full Stack Developer | MERN | QA Automation Enthusiast
          </h2>
          <p className="mydata">
            Crafting seamless web experiences with clean, efficient, and
            scalable code. From React interfaces to Node.js APIs, I turn ideas
            into functional realities.
          </p>
          <p className="mydata">
            Passionate about problem-solving, automation, and delivering
            high-quality solutions that are robust, responsive, and ready to
            scale.
          </p>

          <button className="homebuttonres">
            <a href={Resume} download="RajshishSinghResume.pdf">
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
