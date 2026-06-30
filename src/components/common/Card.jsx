import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ 
  children, 
  className = '', 
  padding = 'p-[24px]',
  ...props 
}) => {
  return (
    <motion.div 
      className={`bg-white rounded-3xl shadow-sm border border-gray-100 ${padding} ${className}`}
      whileHover={{ y: -4, scale: 1.005 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
