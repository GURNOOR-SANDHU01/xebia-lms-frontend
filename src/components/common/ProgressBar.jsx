import React from 'react';
import { motion } from 'framer-motion';

export const ProgressBar = ({ 
  progress = 0, 
  height = 'h-2', 
  color = 'bg-xebia-purple', 
  showLabel = false,
  className = '' 
}) => {
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-[12px] font-[600] text-gray-500">Progress</span>
          <span className="text-[12px] font-[600] text-gray-900">{safeProgress}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-100 rounded-full overflow-hidden ${height}`}>
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${safeProgress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
