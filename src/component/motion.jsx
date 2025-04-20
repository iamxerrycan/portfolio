// src/component/PageTransition.js
import { motion } from "framer-motion";
import React from "react";

const defaultVariants = {
  initial: { opacity: 0, y: 40, scale: 1.02 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 },
};

const defaultTransition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1], // smoother curve
};

const PageTransition = ({
  children,
  variants = defaultVariants,
  transition = defaultTransition,
  className = "",
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
