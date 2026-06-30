import React from 'react';

export const Logo = ({ className = "h-8" }) => (
  <svg 
    viewBox="0 0 200 60" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.5 15L35 45H50L27.5 15H12.5Z" fill="#6C1D5F"/>
    <path d="M35 15L12.5 45H27.5L50 15H35Z" fill="#6C1D5F"/>
    <text x="55" y="45" fontFamily="Inter, sans-serif" fontWeight="bold" fontSize="36" fill="#6C1D5F" letterSpacing="-1">ebia</text>
  </svg>
);
