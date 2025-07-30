import React from "react";
import "./Modal.css";

const Modal = ({ project, onClose }) => {
  // Decide status color
  const getStatusStyle = (status) => {
    if (status === "Complete") return { color: "green", fontWeight: "bold" };
    if (status === "In Progress") return { color: "orange", fontWeight: "bold" };
    return { color: "gray", fontWeight: "bold" };
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h6>{project.name}</h6>
        <img src={project.image} alt={project.name} className="modal-img" />
        
        <p>{project.description}</p>

        <p>
          <strong>Status:</strong>{" "}
          <span style={getStatusStyle(project.status || "Complete")}>
            {project.status || "Complete"}
          </span>
        </p>

        <p>
          <strong>Tech:</strong> {project.technologies.join(", ")}
        </p>

        <div className="modal-links">
          <a href={project.link} target="_blank" rel="noreferrer">Live</a>
          <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
