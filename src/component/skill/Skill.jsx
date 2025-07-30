import React from 'react';
import './Skill.css';
import ProgressBar from './ProgressBar';
import GitHubStats from './GitHubStats';
import ToolSlider from './ToolSlider';

const Skill = () => {
  return (
    <section className="skill-section">
      <div className="main-skill-heading" style={{ textAlign: 'center' }}>
        <h2 className="section-heading">Skill Progress</h2>
      </div>
      <div className="progress-wrapper">
        {/* Left Card: Heading and Paragraph */}

        <div className="progress-left-card">
          <h3 className="progress-subheading">
            Crafting Seamless Digital Experiences
          </h3>
          <p className="progress-intro">
            I build scalable, high-performance web apps with clean design and
            seamless UX. Focused on clarity, functionality, and impact, I
            continuously evolve to deliver top-tier results in every project.
          </p>
        </div>

        {/* Right Card: Skill Bars */}
        <div className="progress-right-card">
          <ProgressBar label="HTML/CSS" value={80} />
          <ProgressBar label="UI/UX Design" value={90} />
          <ProgressBar label="JavaScript" value={75} />
          <ProgressBar label="MERN" value={95} />
          <ProgressBar label="Software Testing" value={70} />
          <ProgressBar label="SEO Best Practices" value={80} />
        </div>
      </div>

      <GitHubStats />
      <ToolSlider />
    </section>
  );
};

export default Skill;
