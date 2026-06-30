import React from 'react';
import { motion } from 'framer-motion';

export const Badge = ({ 
  children, 
  variant = 'default', 
  hasDot = false, 
  className = '' 
}) => {
  const variants = {
    default: "bg-gray-100 text-gray-700",
    primary: "bg-xebia-purple/10 text-xebia-purple",
    success: "bg-xebia-emerald/10 text-xebia-emerald",
    warning: "bg-orange-50 text-orange-500",
    error: "bg-red-50 text-red-600",
  };

  const dotColors = {
    default: "bg-gray-400",
    primary: "bg-xebia-purple",
    success: "bg-xebia-emerald",
    warning: "bg-orange-500",
    error: "bg-red-500",
  };

  return (
    <motion.span 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`inline-flex items-center gap-[6px] px-[10px] py-[4px] rounded-full text-[12px] font-[600] ${variants[variant] || variants.default} ${className}`}
    >
      {hasDot && (
        <span className={`w-[6px] h-[6px] rounded-full ${dotColors[variant] || dotColors.default}`} />
      )}
      {children}
    </motion.span>
  );
};
