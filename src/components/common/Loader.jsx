import React from 'react';
import { motion } from 'framer-motion';

export const Loader = ({ size = 24, className = '', color = 'currentColor' }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate: 360 }}
        transition={{ 
          repeat: Infinity, 
          duration: 1, 
          ease: "linear" 
        }}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </motion.svg>
    </div>
  );
};
