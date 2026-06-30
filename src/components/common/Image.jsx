import React from 'react';
import { motion } from 'framer-motion';

export const Image = ({
  src,
  alt,
  className = '',
  animate = false,
  ...props
}) => {
  const baseStyle = "rounded-2xl object-cover shadow-md w-auto max-w-full";
  
  if (animate) {
    return (
      <motion.img
        src={src}
        alt={alt}
        className={`${baseStyle} ${className}`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${baseStyle} ${className}`}
      {...props}
    />
  );
};
