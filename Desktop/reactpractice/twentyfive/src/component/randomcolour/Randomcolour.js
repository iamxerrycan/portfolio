import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Randomcolour = () => {
  const [colour, setColour] = useState("#000000");
  const [typeOfColour, setTypeOfColour] = useState("hex");

  function colourUtility(length) {
    return Math.floor(Math.random() * length);
  }

  const handlecreateRgbColour = () => {
    let r = colourUtility(256);
    let g = colourUtility(256);
    let b = colourUtility(256);
    setColour(`rgb(${r},${g},${b})`);
  };

  const handlecreateHexColour = () => {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColour = "#";
    for (let i = 0; i < 6; i++) {
      hexColour += hex[colourUtility(hex.length)];
    }
    setColour(hexColour);
    console.log(hexColour, "hexcolour");
  };

  useEffect(() => {
    if (typeOfColour === "rgb") handlecreateRgbColour();
    else handlecreateHexColour();
  }, [typeOfColour]);

  return (
    <div
      style={{ 
        backgroundColor: colour,
        height: "100vh", // Correct the typo in the style attribute
      }}
    >
      <button onClick={() => setTypeOfColour("rgb")}>create rgb colour</button>
      <button onClick={() => setTypeOfColour("hex")}>create hex colour</button>
      <button
        onClick={
          typeOfColour === "hex"
            ? () => handlecreateHexColour()
            : () => handlecreateRgbColour()
        }
      >
        create colour
      </button>
      <div
        style={{
          height: "100%",
        }}
      >
        {colour}
      </div>
    </div>
  );
};

export default Randomcolour;
