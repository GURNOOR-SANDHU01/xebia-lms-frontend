import React from 'react';
import { motion } from 'framer-motion';

export const Skeleton = ({ className = '', variant = 'rectangular' }) => {
  const baseStyle = "bg-gray-200 overflow-hidden relative";
  
  const variants = {
    rectangular: "rounded-2xl",
    circular: "rounded-full",
    text: "rounded-md",
  };

  return (
    <motion.div
      className={`${baseStyle} ${variants[variant]} ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        ease: "easeInOut"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
    </motion.div>
  );
};
