import React from "react";
import profession from "../../assets/profession.jpg";
import student from "../../assets/student.jpg";
import hobby from "../../assets/hobby.png";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Professional Section */}
      <div className="about-box">
        <img src={profession} alt="Professional" className="about-logo" />
        <h2 className="about-header">Professional</h2>
        <div className="about-section">
          <div className="about-details">
            <h3>Gigaai</h3>
            <p>
              Acquired foundational knowledge in web development, including HTML, CSS, and JavaScript. Worked on small-scale web development projects, gaining practical experience.
            </p>
          </div>
          <div className="about-details">
            <h3>Focus Research Lab Pvt</h3>
            <p>
              Actively participated in bug fixing and debugging processes, enhancing application quality. Conducted E2E testing to ensure overall reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="about-box">
        <img src={student} alt="Education" className="about-logo" />
        <h2 className="about-header">Education</h2>
        <div className="about-section">
          <div className="about-details">
            <h3>RERF MAKAUT</h3>
            <p>Computer Science Engineering</p>
          </div>
          <div className="about-details">
            <h3>Adarsh Madhyamik Vidyalaya</h3>
            <p>Higher Secondary (12th)</p>
          </div>
          <div className="about-details">
            <h3>Adarsh Madhyamik Vidyalaya</h3>
            <p>Secondary (10th)</p>
          </div>
        </div>
      </div>

      {/* Hobby Section */}
      <div className="about-box">
        <img src={hobby} alt="Hobbies" className="about-logo" />
        <h2 className="about-header">Hobbies</h2>
        <div className="about-section">
          <div className="about-details">
            <h3>Cricket</h3>
            <p>
              I thoroughly enjoy playing cricket. It's thrilling, relaxing, and keeps me active.
            </p>
          </div>
          <div className="about-details">
            <h3>Travel</h3>
            <p>
              I have a deep passion for travel and exploring new places and cultures. It's a truly enriching experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
