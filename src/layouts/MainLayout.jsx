import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/navigation/Navbar';
import { BottomNavigation } from '../components/navigation/BottomNavigation';

const pageVariants = {
  initial: { opacity: 0, y: 10, scale: 0.99 },
  in: { opacity: 1, y: 0, scale: 1 },
  out: { opacity: 0, y: -10, scale: 0.99 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4
};

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="main-layout bg-white min-h-screen w-full flex flex-col pb-[64px] md:pb-0 overflow-x-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="main-content flex-1 max-w-[1280px] mx-auto w-full px-[16px] md:px-[24px] lg:px-[32px]"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
