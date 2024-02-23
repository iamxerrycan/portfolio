import React from "react";
import "./StartRating.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StartRating = ({ noOfstart = 5 }) => {


  const [rating , setRating ]= useState(0)
  const [hover , setHover ]= useState(0)


  const handleOnclick = (currentIdex) => {
    setRating(currentIdex)
  };
  const handleMouseInter = (currentIdex) => {
    setHover(currentIdex)
  };
  const handleMouseLeave = () => {
    setHover(rating)
  };

  return (
    <div className="main-star">
      {[...Array(noOfstart)].map((_, index) => {
        index += 1;
        return (
          <FaStar
          className={rating >= index || (hover && hover >= index) ? "active" : "inactive"}
            key={index}
            onClick={()=>handleOnclick(index)}
            onMouseOver={() => handleMouseInter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StartRating;
