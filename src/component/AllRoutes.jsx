import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import MyworkPage from "../page/mywork/MyworkPage";
import About from "./about/About";
import Skill from "./skill/Skill";
import { AnimatePresence } from "framer-motion";
import Motion from "./motion"; 
import FirstScreen from '../component/firstScreen/firstScreen'; // <-- We’ll create this next

const AllRoutes = () => {
  const location = useLocation();
  const [showFirst , setShowFirst] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirst(false);
    }, 5000); // Show the first screen for 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }
  , []);

  if (showFirst) {
    return <FirstScreen />;
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Motion><Home /></Motion>} />
        <Route path="Contact" element={<Motion><Contact /></Motion>} />
        <Route path="About" element={<Motion><About /></Motion>} />
        <Route path="Skill" element={<Motion><Skill /></Motion>} />
        <Route path="MyworkPage" element={<Motion><MyworkPage /></Motion>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;
