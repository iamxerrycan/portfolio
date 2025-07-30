import React from 'react';
import { motion } from 'framer-motion';
import './firstScreen.css';

const FirstScreen = () => {
  return (
    <div className="splash-bg">
      <motion.div
        className="logo"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
        >
          iamxerrycan
        </motion.h1>
      </motion.div>

      <motion.p
        className="subtext"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
      >
        Powering the Future...
      </motion.p>
    </div>
  );
};

export default FirstScreen;
