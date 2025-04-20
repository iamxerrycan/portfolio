// Skill.jsx

import React from 'react';
import './Skill.css';

import { skills, logos } from '../../assets/data/skillsData';

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
            <img key={i} src={logo} alt={`Logo ${i}`} className="skills__logo" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
