import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Logo } from '../common/Logo';
import { useDarkMode } from '../../hooks/useDarkMode';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const navLinks = [
    { name: 'Login', path: '/auth/login' },
    { name: "FAQ's", path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 h-[72px] bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px] lg:px-[32px] h-full flex justify-between items-center">
        
        {/* Logo - Left */}
        <div className="flex-shrink-0 z-50">
          <Link to="/">
            <Logo className="h-8" />
          </Link>
        </div>
        
        {/* Navigation & CTAs - Right (Desktop) */}
        <div className="hidden md:flex items-center gap-[24px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                text-[14px] font-[500] transition-colors duration-200
                ${isActive ? 'text-xebia-purple dark:text-xebia-light' : 'text-gray-600 dark:text-gray-300 hover:text-xebia-purple dark:hover:text-xebia-light'}
              `}
            >
              {link.name}
            </NavLink>
          ))}
          <button 
            onClick={toggleDarkMode} 
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link to="/auth/login">
            <button className="bg-xebia-purple text-white px-[24px] py-[8px] rounded-full text-[14px] font-[600] hover:bg-xebia-purple/90 transition-colors uppercase tracking-wider">
              Login
            </button>
          </Link>
        </div>

        {/* Hamburger - Right (Mobile) */}
        <div className="flex md:hidden items-center z-50 gap-2">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -mr-2 text-gray-800 dark:text-gray-200 focus:outline-none rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="absolute top-[72px] left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm md:hidden overflow-hidden z-40"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `
                    px-4 py-3 rounded-xl text-[16px] font-[500] transition-colors
                    ${isActive ? 'bg-xebia-purple/5 text-xebia-purple dark:text-xebia-light' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="h-px w-full bg-gray-100 dark:bg-gray-800 my-4" />
              <Link to="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-xebia-purple text-white px-[24px] py-[12px] rounded-full text-[16px] font-[600] hover:bg-xebia-purple/90 transition-colors uppercase tracking-wider">
                  Login
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
