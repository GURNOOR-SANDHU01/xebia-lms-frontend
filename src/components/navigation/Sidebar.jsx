import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  BookOpen, 
  FolderDot, 
  CalendarDays, 
  MessageSquare, 
  Settings,
  LogOut,
  ChevronLeft,
  X
} from 'lucide-react';
import { Logo } from '../common/Logo';

export const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: BookOpen, label: 'Courses', path: '/dashboard/courses' },
    { icon: FolderDot, label: 'Resources', path: '/dashboard/resources' },
    { icon: CalendarDays, label: 'Schedule', path: '/dashboard/schedule' },
    { icon: MessageSquare, label: 'Messages', path: '/dashboard/messages' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  const sidebarContent = (
    <motion.aside 
      initial={isMobile ? { x: -300 } : false}
      animate={{ 
        width: isMobile ? 280 : (isOpen ? 280 : 88),
        x: isMobile ? (isOpen ? 0 : -300) : 0,
      }}
      transition={{ type: 'spring', bounce: 0.1, duration: 0.6 }}
      className={`
        flex flex-col h-[calc(100vh-32px)] my-[16px] ml-[16px] bg-white/80 backdrop-blur-3xl border border-white shadow-soft rounded-[32px] overflow-hidden flex-shrink-0 z-50
        ${isMobile ? 'fixed top-0 left-0 bottom-0 m-4' : 'relative hidden lg:flex'}
      `}
    >
      {/* Collapse/Close Toggle */}
      <button 
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-[32px] right-[-14px] lg:right-[-14px] right-[16px] w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm text-gray-500 hover:text-xebia-purple hover:border-xebia-purple transition-colors z-40"
      >
        <motion.div animate={{ rotate: (isOpen && !isMobile) ? 0 : 180 }} transition={{ duration: 0.3 }}>
          {isMobile ? <X className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </motion.div>
      </button>

      {/* Brand */}
      <div className={`p-[32px] flex items-center ${(!isMobile && !isOpen) ? 'justify-center p-[32px] px-0' : 'justify-start'}`}>
        <Logo className="h-8" iconOnly={!isMobile && !isOpen} />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-[16px] space-y-[8px] overflow-y-auto overflow-x-hidden scrollbar-hide">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === '/dashboard'}
            onClick={() => isMobile && setIsOpen(false)}
            className={({ isActive }) => `
              flex items-center gap-[16px] px-[16px] py-[12px] rounded-2xl transition-all duration-300 group relative whitespace-nowrap
              ${isActive ? 'bg-xebia-purple/5 text-xebia-purple' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
            `}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-xebia-purple rounded-r-full" 
                  />
                )}
                
                <item.icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-xebia-purple' : 'text-gray-400 group-hover:text-gray-600 transition-colors'}`} />
                
                <AnimatePresence mode="wait">
                  {(isMobile || isOpen) && (
                    <motion.span 
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="font-[600] text-[15px]"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer Actions */}
      <div className="p-[16px] mt-auto">
        <button className="w-full flex items-center gap-[16px] px-[16px] py-[12px] rounded-2xl transition-all duration-300 text-gray-500 hover:bg-red-50 hover:text-red-600 group whitespace-nowrap">
          <LogOut className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-red-500 transition-colors" />
          <AnimatePresence mode="wait">
            {(isMobile || isOpen) && (
              <motion.span 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="font-[600] text-[15px]"
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  );

  return (
    <>
      {/* Mobile Backdrop overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
      {sidebarContent}
    </>
  );
};
