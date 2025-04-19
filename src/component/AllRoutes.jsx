import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import MyworkPage from "../page/mywork/MyworkPage";
import About from "./about/About";
import Skill from "./skill/Skill"

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="Rajshishdcs" element={<Rajshishdcs />} /> */}
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About/>} />
        <Route path="Skill" element={<Skill />} />
        <Route path="MyworkPage" element={<MyworkPage />} />
      </Routes>
  );
};

export default AllRoutes;
