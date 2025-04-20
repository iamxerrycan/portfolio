import React from 'react';
import './Skill.css';

import back from '../../assets/backend.jpg';
import front from '../../assets/frontend.jpg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import js from '../../assets/js.png';
import react from '../../assets/react.svg';
import node from '../../assets/node.svg';
import tools from '../../assets/tools.jpeg';
import mongo from '../../assets/mongo.png';
import express from '../../assets/express-js.png';
import testing from '../../assets/testing.jpg';
import cy from '../../assets/cy.png';

const skills = [
  {
    title: "Tools",
    image: tools,
    description: "Git/GitHub, VS Code, Postman, Jenkins - Essential tools for a developer's workflow.",
  },
  {
    title: "Frontend",
    image: front,
    description: "React.js, HTML5, CSS3, JavaScript, Redux, Tailwind CSS - Building responsive, dynamic UIs.",
  },
  {
    title: "Backend",
    image: back,
    description: "Node.js, Express.js, MongoDB - Crafting efficient backend services and APIs.",
  },
  {
    title: "Testing",
    image: testing,
    description: "Jest, Cypress, Mocha, Chai - Ensuring code reliability through automated testing.",
  },
];

const logos = [html, css, js, react, node, mongo, express, cy];

const Skill = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">Skills</h2>

      <div className="skills__grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skills__card">
            <img src={skill.image} alt={skill.title} className="skills__image" />
            <h3 className="skills__card-title">{skill.title}</h3>
            <p className="skills__description">{skill.description}</p>
          </div>
        ))}
      </div>

      <div className="skills__logos">
        <h2 className="skills__subtitle">Programming</h2>
        <div className="skills__logo-grid">
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt="Skill logo" className="skills__logo" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
