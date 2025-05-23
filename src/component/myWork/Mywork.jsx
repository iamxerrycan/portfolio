import React from "react";
import "./Mywork.css";

const Mywork = ({ projects }) => {
  return (
    <div className="container">
      <table className="work-table">
        <thead className="thead">
          <tr className="trtable">
            <th className="same">Project Name</th>
            <th className="same">Contributer</th>
            <th className="same">Technology</th>
            <th className="same">Link</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {projects.map((data, index) => (
            <tr key={index} className="trtable">
              <td className="same">{data.name}</td>
              <td className="same">{data.contributors.join(", ")}</td>
              <td className="same">{data.technologies.join(", ")}</td>
              <td className="same">
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkgo"
                >
                  GoTo{" "}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mywork;
