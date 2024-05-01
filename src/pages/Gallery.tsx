import React from "react";
import { motion } from "framer-motion";

export const Gallery = () => {
  return (
    <motion.div
      key="Gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      Hello there
    </motion.div>
  );
};
