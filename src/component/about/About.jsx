import React from "react";
import profession from "../../assets/profession.jpg";
import student from "../../assets/student.jpg";
import aboutMeImg from "../../assets/hobby.png"; 
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-main-heading">About Me</h1>

      <div className="about-rows">
        <div className="about-row">
          <div className="about-box">
            <img src={profession} alt="Professional Background" className="about-logo" />
            <h2 className="header">Professional Experience</h2>
            <div className="company-info">
              <div className="company-details">
                <h3>GigaAI <span className="date-location">| Apr 2022 – Sep 2022 • Kolkata , India</span></h3>
                <p>
                  Joined as a <strong>Web Development Intern</strong>. Built a strong foundation in HTML, CSS, and JavaScript. Designed responsive web pages while learning UI/UX best practices.
                </p>
              </div>
            </div>
            <div className="company-info">
              <div className="company-details">
                <h3>Focus Research Lab Pvt. Ltd. <span className="date-location">| March 2023 – Apr 2024 • Chennai, India</span></h3>
                <p>
                  Currently working as a <strong>React Developer</strong>. Developed frontend features using React.js, integrated Node.js APIs, and contributed to QA automation with Cypress and Postman for API testing.
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
                <h3>RERF (MAKAUT University) <span className="date-location">| 2018 – 2022 • Kolkata, India</span></h3>
                <p>B.Tech in Computer Science & Engineering (CSE)</p>
              </div>
            </div>
            <div className="company-info">
              <div className="company-details">
                <h3>Adarsh Madhyamik Vidyalaya <span className="date-location">| 2017 – 2018</span></h3>
                <p>Higher Secondary (12th Grade), Science Stream</p>
              </div>
            </div>
            <div className="company-info">
              <div className="company-details">
                <h3>Adarsh Madhyamik Vidyalaya <span className="date-location">| 2016 – 2017</span></h3>
                <p>Secondary (10th Grade)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-row">
          <div className="about-box">
            <img src={aboutMeImg} alt="About Me" className="about-logo" />
            <h2 className="header">About Me</h2>
            <div className="company-info">
              <div className="company-details">
                <p>
                  I'm a passionate full-stack developer focused on building modern and performant web applications using the MERN stack. I love turning complex problems into clean, scalable solutions.
                </p>
                <p>
                  With a strong interest in automation and testing, I continuously explore tools like Cypress, Postman, and Docker to enhance project quality and CI/CD pipelines. I'm always open to learning and collaborating on impactful products.
                </p>
                <p>
                  Outside of coding, I enjoy personal development, tech blogging, and staying up to date with the latest trends in software engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
 