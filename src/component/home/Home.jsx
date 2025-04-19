import React from 'react';
import star from '../../assets/star.jpg';
import './Home.css';
import Resume from '../../assets/rajshish2025.pdf';

const Home = () => {
  return (
    <div className="container-home">
      <div className="logo">
        <img src={star} alt="Developer" className="developer-image" />
        <div className="text-container">
          <span className="heading-raj">Hi! I'm Rajshish Singh </span>
          <p className="mydata">
            I'm Rajshish Singh, a passionate developer focused on building
            scalable and high-performance web applications using modern
            technologies. I specialize in React, Node.js, and the MERN stack,
            and I'm always eager to learn and create innovative solutions that
            deliver great user experiences.
          </p>
          <button className="homebuttonres">
            <a href={Resume} download="rajshish2025.pdf">
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;


