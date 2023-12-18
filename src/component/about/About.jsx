import React from 'react';
import profession from '../../assets/profession.jpg';
import student from '../../assets/student.jpg';
import hobby from '../../assets/hobby.png';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-row">
        <div className="about-box">
          <img src={profession} alt="Professional Background" className="about-logo" />
          <h2 className='header'>Professional Background</h2>
          <p>
            Share your professional journey, including your work experience, roles, and key accomplishments.
            Mention any notable projects you've worked on, technologies you're proficient in, and industries you've contributed to.
          </p>
        </div>
      </div>

      <div className="about-row">
        <div className="about-box">
          <img src={student} alt="Education" className="about-logo" />
          <h2 className='header'>Education</h2>
          <p>
            Mention your educational background, degrees, certifications, and any relevant courses or workshops you've completed.
          </p>
        </div>
      </div>

      <div className="about-row">
        <div className="about-box">
          <img src={hobby} alt="Passions and Hobbies" className="about-logo" />
          <h2 className='header'>Passions and Hobbies</h2>
          <p>
            Share your interests outside of work. This can give a glimpse into your personality and show you as a well-rounded individual.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
