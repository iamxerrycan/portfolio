import React from "react";
import devloper from "../../assets/devloper.png";
import "./Home.css";
//import AboutPage from "../../page/aboutPage/AboutPage";

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <img src={devloper} alt="Developer" className="developer-image" />
        <h1>Hi, I'm Rajshish</h1>
        <p>I'm a passionate developer.</p>
      </div>
    </div>
  );
};

export default Home;
