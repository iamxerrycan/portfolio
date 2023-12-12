import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rajshishdcs from "./rajshish/Rajshishdcs";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import MyworkPage from "../page/mywork/MyworkPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Rajshishdcs" element={<Rajshishdcs />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="MyworkPage" element={<MyworkPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
