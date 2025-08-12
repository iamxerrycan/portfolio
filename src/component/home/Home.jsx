import React from 'react';
import star from '../../assets/star.jpg';
import './Home.css';
import Resume from '../../assets/RajshishSinghResume.pdf';

const Home = () => {
  return (
    <div className="container-home">
      <div className="logo">
        <img src={star} alt="Developer" className="developer-image" />
        <div className="text-container">
          <h1 className="heading-raj">Rajshish Singh</h1>
          <h2 className="sub-heading">
            Full Stack Developer | MERN | QA Automation Enthusiast
          </h2>
          <p className="mydata">
            I build fast, scalable web apps using the MERN stack. I love solving
            real-world problems with clean code and efficient design.
          </p>
          <p className="mydata">
            From crafting responsive React UIs to building robust Node.js APIs,
            I bring ideas to life—tested, reliable, and ready to scale.
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
