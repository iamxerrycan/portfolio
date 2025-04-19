import React from "react";
import profession from "../../assets/profession.jpg";
import student from "../../assets/student.jpg";
import hobby from "../../assets/hobby.png";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Professional Section */}
      <div className="about-row">
        <div className="about-box">
          <img src={profession} alt="Professional Background" className="about-logo" />
          <h2 className="header">Professional</h2>
          <div className="company-info">
            <div className="company-details">
              <h3>GigaAI</h3>
              <p>
      Joined as a Web Development Intern where I built a strong foundation in HTML, CSS, and JavaScript. Gained hands-on experience designing static and responsive web pages while understanding basic UI/UX principles and best practices.
    </p>
            </div>
          </div>
          <div className="company-info">
            <div className="company-details">
              <h3>Focus Research Lab Pvt. Ltd.</h3>
              <p>
      Worked as a React.js Developer with additional responsibilities in backend integration and QA testing. Developed and maintained frontend features using React, improved user experience, and collaborated on API development using Node.js and Express. 
      Also performed end-to-end testing using Cypress, API testing via Postman, and participated in bug reporting to ensure application quality.
    </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="about-row">
        <div className="about-box">
          <img src={student} alt="Education" className="about-logo" />
          <h2 className="header">Education</h2>
          <div className="company-info">
            <div className="company-details">
              <h3>RERF (MAKAUT University)</h3>
              <p>Bachelor of Technology in Computer Science and Engineering (CSE)</p>
            </div>
          </div>
          <div className="company-info">
            <div className="company-details">
              <h3>Adarsh Madhyamik Vidyalaya</h3>
              <p>Higher Secondary (12th Grade) - Science Stream</p>
            </div>
          </div>
          <div className="company-info">
            <div className="company-details">
              <h3>Adarsh Madhyamik Vidyalaya</h3>
              <p>Secondary (10th Grade)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="about-row">
        <div className="about-box">
          <img src={hobby} alt="Hobbies and Interests" className="about-logo" />
          <h2 className="header">Hobbies</h2>
         
          <div className="company-info">
            <div className="company-details">
              <h3>Travel</h3>
              <p>
                I love exploring new places and cultures. Traveling teaches me adaptability and fills me with new inspiration.
              </p>
            </div>
          </div>
          <div className="company-info">
            <div className="company-details">
              <h3>Coding & Building Projects</h3>
              <p>
                I enjoy creating modern web applications using MERN stack and exploring new tools, packages, and APIs to improve user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
