import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ label, value }) => {
  return (
    <div className="progress-bar">
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${value}%` }}>
          <span className="progress-text">{label} — {value}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
