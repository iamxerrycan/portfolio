import React from "react";
import "./Skill.css";
import back from "../../assets/backend.jpg";
import front from "../../assets/frontend.jpg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.png";
import react from "../../assets/react.svg";
import node from "../../assets/node.svg";
import tools from "../../assets/tools.jpeg";
import mongo from "../../assets/mongo.png";
import express from "../../assets/express.svg";
import cy from "../../assets/cy.png";

const Skill = () => {
  return (
    <div className="main-skill">
      {/* First Row */}
      <div className="row">
        <p className="headpara"> Tecknology </p>
        <div className="column">
          <div className="logo-with-para">
            <img src={tools} alt="Skill 1" />
            <p>
              Git: Version control system for code collaboration and change
              tracking. VS Code: Highly customizable source code editor for
              multiple languages. Postman: API development platform for testing
              and documentation. Chrome DevTools: Browser-based suite for web
              development and debugging.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="logo-with-para">
            <img src={front} alt="Skill 1" />
            <p>
              "Fron_End : Proficient in creating responsive and intuitive user
              interfaces using HTML, CSS, and JavaScript. Familiar with modern
              front-end libraries and frameworks like React.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="logo-with-para">
            <img src={back} alt="Skill 2" />
            <p>
              "Back-End: Skilled in building robust and scalable server-side
              applications using languages such as Node.js. Experienced in
              designing and developing RESTful APIs and integrating complex
              systems for efficient data management.
            </p>
          </div>
        </div>
      </div>

      <div className="program">
        <p className="headpara"> Programming </p>
        <div className="small-logo-line">
          <img src={html} alt="Small skill 1" />
          <span className="horizontal-line"></span>
        </div>
        <div className="small-logo-line">
          <img src={css} alt="Small skill 2" />
          <span className="horizontal-line"></span>
        </div>
        <div className="small-logo-line">
          <img src={js} alt="Small skill 2" />
          <span className="horizontal-line"></span>
        </div>
        <div className="small-logo-line">
          <img src={react} alt="Small skill 2" />
          <span className="horizontal-line"></span>
        </div>
        <div className="small-logo-line">
          <img src={node} alt="Small skill 2" />
          <span className="horizontal-line"></span>
        </div>
        <div className="small-logo-line">
          <img src={express} style={{background:"white"}} alt="Small skill 2" />
          <span className="horizontal-line"></span>
        </div>
        <div className="small-logo-line">
          <img src={cy} alt="Small skill 2" />
          <span className="horizontal-line"></span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
