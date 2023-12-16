import React, { useState } from "react";
//import CopyToClipboard from "./CopyToClipboard"; // Assuming the component is moved to a separate file
import RajshishData from "../../assets/data/RajshishData";
import "./Rajshishdcs.css";

const Rajshishdcs = () => {
  const [isCopied, setIsCopied] = useState(
    Array(RajshishData.length).fill(false)
  );

  const handleCopyClick = (index) => {
    const copyText = RajshishData[index];

    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        setIsCopied((prevIsCopied) => {
          const newIsCopied = [...prevIsCopied];
          newIsCopied[index] = true;
          return newIsCopied;
        });
        setTimeout(() => {
          setIsCopied((prevIsCopied) => {
            const newIsCopied = [...prevIsCopied];
            newIsCopied[index] = false;
            return newIsCopied;
          });
        }, 3000);
      })
      .catch((error) => console.error("Error copying to clipboard:", error));
  };

  return (
    <div className="AghoriDocxDiv">
      <div className="marquee-container">
        <div className="marquee-content">Rajshish Docs</div>
      </div>

      {RajshishData.map((text, index) => (
        <div key={index} className="mytextForFuture">
          <textarea rows="25" cols="120" value={text} readOnly />
          <button id="AghoriCopyBtn" onClick={() => handleCopyClick(index)}>
            {isCopied[index] ? "Copied!" : "Copy"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Rajshishdcs;
