import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, LayoutDashboard, User } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: BookOpen, label: 'Courses', path: '/courses' },
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: User, label: 'Profile', path: '/dashboard/profile' },
];

export const BottomNavigation = () => {
  return (
    <motion.div 
      className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-100 pb-2 pt-2 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="flex justify-around items-center h-[64px] px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-300 ${
                isActive ? 'text-xebia-purple' : 'text-gray-400 hover:text-gray-600'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-2 rounded-2xl ${isActive ? 'bg-xebia-purple/10' : ''}`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-xebia-purple' : ''}`} />
                </motion.div>
                <span className={`text-[10px] font-[600] tracking-wide ${isActive ? 'text-xebia-purple' : ''}`}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};
