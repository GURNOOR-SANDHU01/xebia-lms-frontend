import React from 'react';

export const Input = ({ 
  label, 
  id, 
  error, 
  className = '', 
  ref, // Direct ref injection via React 19
  ...props 
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="mb-[8px] text-[14px] font-[500] text-gray-600">
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`px-[16px] py-[12px] bg-white border rounded-2xl shadow-sm outline-none transition-all duration-300 text-[16px] text-xebia-text placeholder:text-gray-400
          ${error ? 'border-red-500 focus:ring-2 focus:ring-red-200 focus:border-red-500' : 'border-xebia-border focus:ring-2 focus:ring-xebia-purple/20 focus:border-xebia-purple hover:border-gray-300'}
        `}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="mt-[8px] text-[12px] font-[500] text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};