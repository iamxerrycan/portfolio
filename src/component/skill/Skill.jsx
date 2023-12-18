import React from "react";
import "./Skill.css";
import back from "../../assets/backend.jpg";
import front from "../../assets/frontend.jpg";

const Skill = () => {
  return (
    <div className="main-skill">
      {/* First Row */}
      <div className="row">
        <p className="headpara"> Tecknology that i know </p>
        {/* <span className="headpara">industry Knowledge !</span> */}
        <div className="column">
          <div className="logo-with-para">
            <img src={front} alt="Skill 1" />
            <p>
              "Proficient in creating responsive and intuitive user interfaces
              using HTML, CSS, and JavaScript. Familiar with modern front-end
              libraries and frameworks like React.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="logo-with-para">
            <img src={back} alt="Skill 2" />
            <p>
              Skilled in building robust and scalable server-side applications
              using languages such as Node.js. Experienced in designing and
              developing RESTful APIs and integrating complex systems for
              efficient data management.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="program">
        <p className="headpara"> Tecknology that i know </p>
        <div className="small-logo-line">
          <img src={front} alt="Small skill 1" />
          <span className="horizontal-line"></span>
        </div>
        <div className="small-logo-line">
          <img src={back} alt="Small skill 2" />
          <span className="horizontal-line"></span>
        </div>
        <div className="small-logo-line">
          <img src={back} alt="Small skill 2" />
          <span className="horizontal-line"></span>
        </div>
        <div className="small-logo-line">
          <img src={back} alt="Small skill 2" />
          <span className="horizontal-line"></span>
        </div>
        <div className="small-logo-line">
          <img src={back} alt="Small skill 2" />
          <span className="horizontal-line"></span>
        </div>
        <div className="small-logo-line">
          <img src={back} alt="Small skill 2" />
          <span className="horizontal-line"></span>
        </div>
        <div className="small-logo-line">
          <img src={back} alt="Small skill 2" />
          <span className="horizontal-line"></span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
