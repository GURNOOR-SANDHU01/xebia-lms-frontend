import React from 'react';

export const Avatar = ({ 
  src, 
  alt = 'Avatar', 
  initials, 
  size = 'md', 
  className = '' 
}) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  const baseStyle = "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-100 shadow-sm border border-gray-200 shrink-0";
  const sizeStyle = sizes[size] || sizes.md;

  return (
    <div className={`${baseStyle} ${sizeStyle} ${className}`}>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="font-medium text-gray-600 uppercase">
          {initials || alt.substring(0, 2)}
        </span>
      )}
    </div>
  );
};
