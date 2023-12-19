import React from "react";
import profession from "../../assets/profession.jpg";
import student from "../../assets/student.jpg";
import hobby from "../../assets/hobby.png";
import "./About.css"; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-row">
        <div className="about-box">
          <img
            src={profession}
            alt="Professional Background"
            className="about-logo"
          />
          <h2 className="header">Professional</h2>
          <div className="company-info">
            <div className="company-details">
              <h3>Gigaai</h3>
              <p>
                Acquired foundational knowledge in web development, including
                HTML, CSS, and JavaScript. Worked on small-scale web development
                projects, gaining practical experience.
              </p>
            </div>
          </div>
          <div className="company-info">
            <div className="company-details">
              <h3>Focus Research Lab pvt</h3>
              <p>
                Actively participated in bug fixing and debugging processes,
                enhancing the overall application quality. Conducted end-to-end
                (E2E) testing to ensure the reliability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-row">
        <div className="about-box">
          <img src={student} alt="Education" className="about-logo" />
          <h2 className="header">Education</h2>
          <div className="company-info">
            <div className="company-details">
              <h3>RERF MAKAUT</h3>
              <p>Computer Science Engineering </p>
            </div>
          </div>
          <div className="company-info">
            <div className="company-details">
              <h3>Adarsh Madhyamik Vidyalaya </h3>
              <p>Higher Secondory 12Th </p>
            </div>
          </div>
          <div className="company-info">
            <div className="company-details">
              <h3>Adarsh Madhyamik Vidyalaya</h3>
              <p> Secondory 10Th </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-row">
        <div className="about-box">
          <img src={hobby} alt="Passions and Hobbies" className="about-logo" />
          <h2 className="header">Hobbies</h2>
          <div className="company-info">
            <div className="company-details">
              <h3>Cricket</h3>
              <p>
                I thoroughly enjoy playing cricket, finding it both thrilling
                and relaxing. It's a sport that brings me immense joy and helps
                me stay active.
              </p>
            </div>
          </div>
          <div className="company-info">
            <div className="company-details">
              <h3>Travel</h3>
              <p>
                I have an immense passion for traveling, exploring new places,
                and embracing diverse cultures. It's an enriching experience
                that broadens my perspective and brings me endless joy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
