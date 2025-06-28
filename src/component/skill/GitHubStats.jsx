import React from 'react';
import './GitHubStats.css';

const GitHubStats = () => {
  return (
    <section className="github-section">
      <h2 className="github-heading">GitHub Activity</h2>
      <div className="github-widgets">
        <div className="github-card">
          <img
            src="https://github-readme-stats.vercel.app/api?username=iamxerrycan&show_icons=true&theme=radical"
            alt="GitHub Stats"
            loading="lazy"
          />
        </div>

        <div className="github-card">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=iamxerrycan&theme=radical"
            alt="GitHub Streak"
            loading="lazy"
          />
        </div>

        <div className="github-card">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=iamxerrycan&layout=compact&theme=radical"
            alt="Top Languages"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
