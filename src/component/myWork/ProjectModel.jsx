import React from "react";
import "./Modal.css";

const Modal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{project.name}</h2>
        <img src={project.image} alt={project.name} className="modal-img" />
        <p>{project.description}</p>
        <p><strong>Status:</strong> {project.status || "Complete"}</p>
        <p><strong>Tech:</strong> {project.technologies.join(", ")}</p>
        <div className="modal-links">
          <a href={project.link} target="_blank">Live</a>
          <a href={project.github} target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
