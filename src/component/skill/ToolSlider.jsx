import React from 'react';
import './ToolSlider.css';

const tools = [
  {
    name: "Postman",
    image: "https://cdn.simpleicons.org/postman/FF6C37",
    description: "Tool for testing and developing APIs.",
  },
  {
    name: "GitHub",
    image: "https://cdn.simpleicons.org/github/181717",
    description: "Code hosting and collaboration using Git.",
  },
  {
    name: "Jenkins",
    image: "https://cdn.simpleicons.org/jenkins/D24939",
    description: "Automation server for CI/CD pipelines.",
  },
  {
    name: "Cypress",
    image: "https://cdn.simpleicons.org/cypress/17202C",
    description: "Frontend end-to-end testing framework.",
  },
  {
    name: "Docker",
    image: "https://cdn.simpleicons.org/docker/2496ED",
    description: "Container platform for application delivery.",
  },
  {
    name: "VS Code",
    image: "https://cdn.simpleicons.org/visualstudiocode/007ACC",
    description: "Lightweight but powerful code editor.",
  },
  {
    name: "Figma",
    image: "https://cdn.simpleicons.org/figma/F24E1E",
    description: "UI/UX design and prototyping tool.",
  },
  {
    name: "Swagger",
    image: "https://cdn.simpleicons.org/swagger/85EA2D",
    description: "API documentation and testing framework.",
  },
];

const ToolSlider = () => {
  return (
    <section className="tool-slider-section">
      <h2 className="tool-slider-title">Tools & Utilities</h2>
      <div className="tool-slider">
        {tools.map((tool, index) => (
          <div className="tool-card" key={index}>
            <img src={tool.image} alt={tool.name} className="tool-card-img" />
            <h3 className="tool-card-name">{tool.name}</h3>
            <p className="tool-card-desc">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolSlider;
