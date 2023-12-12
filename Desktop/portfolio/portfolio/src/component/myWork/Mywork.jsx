import React from "react";
import "./Mywork.css";
import MyworkPage from "../../page/mywork/MyworkPage";

const Mywork = ({ projects }) => {
  return (
    <>
      <div className="container">
        <table className="work-table">
          <thead className="thead">
            <tr className="trtable">
              <th className="same">Projrct Name</th>
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
                <td className="same"><a href={data.link} target="_blank" rel="no" className="linkgo" >GoTo </a> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
      </div>
    </>
  );
};

export default Mywork;


//   {/* Use the link prop in the child component */}
//   <a href={link} target="_blank" rel="noopener noreferrer">
//   Go to external link
// </a>