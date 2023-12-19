import React from 'react';

const Skill = ({ language, level }) => {
  // Convert level to a percentage for styling
  const percentage = `${level}%`;

  return (
    <div style={{ color: 'white', marginBottom: '10px' }}>
      <h3>{language}</h3>
      <div style={{ backgroundColor: '#444', height: '20px', borderRadius: '5px' }}>
        <div
          style={{
            backgroundColor: '#007bff',
            height: '100%',
            width: percentage,
            borderRadius: '5px',
            transition: 'width 1s ease-in-out',
          }}
        ></div>
      </div>
      <p>{level}%</p>
    </div>
  );
};

export default Skill;
