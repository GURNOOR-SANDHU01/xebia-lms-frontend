import React from 'react';
import { Search } from 'lucide-react';
import { Button } from './Button';

export const SearchBar = ({ 
  placeholder = 'Search...', 
  onSearch, 
  className = '',
  size = 'md'
}) => {
  const sizes = {
    sm: 'py-2 pl-10 pr-24 text-sm',
    md: 'py-4 pl-12 pr-32 text-[14px]',
    lg: 'py-5 pl-14 pr-36 text-[16px]',
  };

  const iconSizes = {
    sm: 'w-4 h-4 left-4',
    md: 'w-5 h-5 left-5',
    lg: 'w-6 h-6 left-6',
  };

  return (
    <div className={`relative w-full bg-white dark:bg-gray-800 shadow-sm border border-xebia-border dark:border-gray-700 rounded-2xl overflow-hidden focus-within:ring-4 focus-within:ring-xebia-purple/10 focus-within:border-xebia-purple transition-all duration-300 ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full bg-transparent border-none focus:outline-none focus:ring-0 text-xebia-text dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 ${sizes[size]}`}
        onChange={(e) => onSearch?.(e.target.value)}
      />
      <Search className={`text-gray-400 absolute top-1/2 -translate-y-1/2 ${iconSizes[size]}`} />
      
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <Button 
          variant="primary" 
          className={size === 'sm' ? 'px-4 py-1.5 text-xs' : 'px-6 py-2 text-sm'}
        >
          Search
        </Button>
      </div>
    </div>
  );
};
