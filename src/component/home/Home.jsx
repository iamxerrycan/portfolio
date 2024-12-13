import React from 'react';
import star from '../../assets/star.jpg';
import './Home.css';
import Resume from '../../assets/rajshishsinghresume.pdf';

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
            className="homebuttonres"
          >
            <a
              href={Resume} 
              download="rajshishsinghresume.pdf"
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
