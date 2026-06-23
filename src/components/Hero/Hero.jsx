import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronRight, LayoutDashboard, LineChart, BookOpen } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative flex items-center overflow-hidden" style={{ paddingTop: 'var(--spacing-hero)', paddingBottom: 'var(--spacing-hero)' }}>
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center" style={{ gap: 'var(--grid-gap)' }}>
        
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-gray-200 shadow-sm" style={{ borderRadius: 'var(--radius-full)', marginBottom: '40px' }}>
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
            <span className="text-[var(--text-sm)] font-bold text-[var(--text-main)] uppercase tracking-wider">Next Generation Learning</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
            Empowering <br className="hidden md:block"/>
            <span className="text-[var(--color-primary)]">Learning Through</span><br className="hidden md:block"/>
            Technology.
          </motion.h1>
          
          <motion.p variants={itemVariants} style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', fontWeight: 300, marginBottom: '64px', maxWidth: '600px' }}>
            A comprehensive, high-performance management system designed specifically for educators, trainers, and forward-thinking organizations.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="portals" smooth={true} duration={500} offset={-70}>
              <button className="btn-primary w-full sm:w-auto">
                Access Portals
                <ChevronRight size={20} />
              </button>
            </Link>
            <Link to="features" smooth={true} duration={500} offset={-70}>
              <button className="btn-secondary w-full sm:w-auto">
                Explore Features
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content - Modern Dashboard Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex-1 hidden lg:flex relative w-full h-[550px]"
        >
          {/* Main Dashboard Window */}
          <div className="card-base absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-4/5 overflow-hidden z-20" style={{ padding: 0 }}>
             {/* Window Header */}
             <div className="w-full h-12 bg-[var(--bg-secondary)] border-b border-gray-100 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
             </div>
             {/* Dashboard Content */}
             <div className="flex-1 flex p-4 gap-4 bg-[var(--bg-primary)]">
               {/* Sidebar */}
               <div className="w-16 bg-[var(--bg-secondary)] rounded-xl border border-gray-100 flex flex-col items-center py-4 gap-4">
                 <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center"><LayoutDashboard size={16}/></div>
                 <div className="w-8 h-8 rounded-lg text-gray-400 flex items-center justify-center"><BookOpen size={16}/></div>
                 <div className="w-8 h-8 rounded-lg text-gray-400 flex items-center justify-center"><LineChart size={16}/></div>
               </div>
               {/* Main Area */}
               <div className="flex-1 flex flex-col gap-4">
                 {/* Header Stats */}
                 <div className="flex gap-4 h-24">
                   <div className="flex-1 bg-[var(--bg-secondary)] rounded-xl border border-gray-100 p-3">
                     <div className="w-1/2 h-3 rounded bg-gray-200 mb-4"></div>
                     <div className="w-3/4 h-6 rounded bg-[var(--color-secondary)] opacity-80"></div>
                   </div>
                   <div className="flex-1 bg-[var(--bg-secondary)] rounded-xl border border-gray-100 p-3">
                     <div className="w-1/2 h-3 rounded bg-gray-200 mb-4"></div>
                     <div className="w-3/4 h-6 rounded bg-[var(--color-primary)] opacity-80"></div>
                   </div>
                 </div>
                 {/* Chart Area */}
                 <div className="flex-1 bg-[var(--bg-secondary)] rounded-xl border border-gray-100 p-4 relative overflow-hidden">
                   <div className="w-1/3 h-4 rounded bg-gray-200 mb-6"></div>
                   {/* Mock Bar Chart */}
                   <div className="absolute bottom-4 left-4 right-4 h-24 flex items-end justify-between gap-2">
                     {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                       <motion.div 
                         key={i}
                         initial={{ height: 0 }}
                         animate={{ height: `${h}%` }}
                         transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                         className={`w-full rounded-t-md ${i % 2 === 0 ? 'bg-[var(--color-secondary)]' : 'bg-[var(--color-primary)]'}`}
                       ></motion.div>
                     ))}
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
