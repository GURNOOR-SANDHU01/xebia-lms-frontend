import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader } from './Loader';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  isLoading = false,
  disabled,
  onClick,
  ...props 
}) => {
  const [ripples, setRipples] = useState([]);

  const baseStyle = "px-[24px] py-[12px] rounded-2xl font-[600] flex items-center justify-center outline-none transition-all duration-300 relative overflow-hidden border-2";
  
  const variants = {
    primary: "bg-xebia-purple text-white border-xebia-purple focus:ring-2 focus:ring-xebia-purple/20 focus:border-xebia-purple shadow-sm hover:shadow-md disabled:bg-gray-200 disabled:border-gray-200 disabled:text-gray-400",
    secondary: "bg-white text-xebia-purple border-xebia-purple focus:ring-2 focus:ring-xebia-purple/20 focus:border-xebia-purple hover:bg-xebia-purple hover:text-white disabled:border-gray-300 disabled:text-gray-400 disabled:hover:bg-transparent",
    outline: "bg-white text-xebia-purple border-xebia-purple focus:ring-2 focus:ring-xebia-purple/20 hover:bg-xebia-purple hover:text-white disabled:border-gray-300 disabled:text-gray-400 disabled:hover:bg-transparent",
    ghost: "bg-transparent text-gray-600 border-transparent hover:bg-gray-100 disabled:text-gray-400 disabled:hover:bg-transparent",
  };

  const isDisabled = disabled || isLoading;

  const handleClick = (e) => {
    if (isDisabled) return;
    
    // Ripple Effect Logic
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const newRipple = { x, y, size, id: Date.now() };
    
    setRipples((prev) => [...prev, newRipple]);
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.button 
      type={type}
      disabled={isDisabled}
      onClick={handleClick}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${isDisabled ? 'cursor-not-allowed' : ''} ${className}`}
      whileHover={isDisabled ? {} : { y: -2, transition: { duration: 0.2 } }}
      whileTap={isDisabled ? {} : { scale: 0.98 }}
      {...props}
    >
      <span className={`flex items-center gap-2 relative z-10 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </span>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Loader size={20} color="currentColor" />
        </div>
      )}

      {/* Ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.35 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
            }}
            className="absolute bg-white rounded-full pointer-events-none"
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
              backgroundColor: variant === 'primary' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(108, 29, 95, 0.2)'
            }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};