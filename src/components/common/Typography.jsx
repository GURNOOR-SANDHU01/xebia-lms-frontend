import React from 'react';

export const Typography = ({ 
  variant = 'body', 
  className = '', 
  children,
  as,
  ...props 
}) => {
  const elements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    body: 'p',
    small: 'span',
  };

  const Component = as || elements[variant] || 'p';

  const baseStyles = {
    hero: 'text-[40px] md:text-[48px] lg:text-[56px] font-[700] text-gray-900 tracking-tight leading-tight',
    h1: 'text-[32px] md:text-[40px] font-[600] text-gray-900 tracking-tight leading-tight',
    h2: 'text-[28px] md:text-[32px] font-[500] text-gray-900 tracking-tight leading-snug',
    h3: 'text-[24px] font-[500] text-gray-900 leading-snug',
    h4: 'text-[20px] font-[500] text-gray-900 leading-normal',
    body: 'text-[16px] font-[400] text-gray-600 leading-relaxed',
    small: 'text-[14px] font-[400] text-gray-500 leading-normal',
  };

  return (
    <Component 
      className={`${baseStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
