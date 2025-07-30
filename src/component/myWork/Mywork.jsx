import React, { useState } from 'react';
import './Mywork.css';
import Modal from './ProjectModel';

const categories = [
  'All',
  'Frontend',
  'Backend',
  'APK',
  'Testing',
  'MERN',
  'NPM',
];

const Mywork = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="mywork-section">
      <h2 className="mywork-title">My Projects</h2>

      <div className="category-scroll-wrapper">
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${cat === activeCategory ? 'cat-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img-wrapper">
              <img
                src={project.image}
                alt={project.name}
                className="project-img"
              />
              <span className={`status-badge ${project.status || 'complete'}`}>
                {project.status || 'Complete'}
              </span>
            </div>
            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span className="tech-tag" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {/* <a href={project.link} target="_blank">Live</a>
                <a href={project.github} target="_blank">GitHub</a> */}
                <button onClick={() => setSelectedProject(project)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Mywork;


