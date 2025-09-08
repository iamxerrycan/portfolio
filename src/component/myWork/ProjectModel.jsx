import React from 'react';
import './Modal.css';
import { Github, Rocket, X } from 'lucide-react';

const Modal = ({ project, onClose }) => {
  const getStatusStyle = (status) => {
    if (status === 'Complete') return { color: '#16a34a', fontWeight: '600' }; // green-600
    if (status === 'In Progress')
      return { color: '#f59e0b', fontWeight: '600' }; // amber-500
    return { color: '#6b7280', fontWeight: '600' }; // gray-500
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} strokeWidth={2.5} />
        </button>

        <h2 className="modal-title">{project.name}</h2>
        <img src={project.image} alt={project.name} className="modal-img" />

        <p className="modal-desc">{project.description}</p>

        <p className="modal-status">
          <strong>Status:</strong>{' '}
          <span style={getStatusStyle(project.status || 'Complete')}>
            {project.status || 'Complete'}
          </span>
        </p>

        <p className="modal-tech">
          <strong>Tech:</strong> {project.technologies.join(', ')}
        </p>

        <div className="modal-links">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn-live"
          >
            <Rocket size={18} style={{ marginRight: '6px' }} /> Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-github"
          >
            <Github size={18} style={{ marginRight: '6px' }} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
