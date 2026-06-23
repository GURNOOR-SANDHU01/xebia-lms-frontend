import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, CheckCircle2, Clock, Calendar } from 'lucide-react';

const LmsVisuals = () => {
  return (
    <section className="section-padding overflow-hidden relative border-t border-gray-100">
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="section-label">Powerful Experience</span>
            <h2 className="section-title">Designed specifically for structured learning.</h2>
            <p className="section-subtitle lg:mx-0 mx-auto">
              Not just another generic portal. Enjoy rich course cards, clear progress tracking, calendar previews, and deep assignment analytics built exclusively for modern education platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[var(--color-secondary)]" size={24} />
                <span style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-main)' }}>Course Tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-[var(--color-primary)]" size={24} />
                <span style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-main)' }}>Assignments</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive Mockup Graphics */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full h-[500px]"
          >
            {/* Mock Course Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="card-base absolute top-0 right-10 w-80 p-5 z-20"
              style={{ height: 'auto' }}
            >
              <div className="w-full h-32 bg-[var(--bg-secondary)] mb-4 flex items-center justify-center relative overflow-hidden" style={{ borderRadius: 'var(--radius-md)' }}>
                 <PlayCircle className="text-gray-300" size={48} />
                 <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1" style={{ borderRadius: 'var(--radius-sm)' }}>1h 45m</div>
              </div>
              <div className="flex gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[var(--bg-secondary)] text-[var(--color-secondary)] text-xs font-bold uppercase" style={{ borderRadius: 'var(--radius-sm)' }}>Development</span>
              </div>
              <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>Advanced React Patterns</h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: '16px' }}>Master modern frontend architecture.</p>
              
              <div className="space-y-2">
                <div className="flex justify-between font-medium text-gray-600" style={{ fontSize: 'var(--text-xs)' }}>
                  <span>Progress</span>
                  <span>75%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-[var(--color-secondary)] rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Mock Assignment Tracker */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="card-base absolute bottom-10 left-0 w-72 p-6 z-30"
              style={{ height: 'auto' }}
            >
              <h4 className="flex items-center gap-2" style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
                <Clock size={18} className="text-[var(--color-accent)]" /> Upcoming Due
              </h4>
              <div className="space-y-4">
                <div className="flex gap-4 items-center p-3 border border-gray-100 bg-[var(--bg-secondary)]" style={{ borderRadius: 'var(--radius-md)' }}>
                  <div className="w-10 h-10 flex flex-col items-center justify-center text-[var(--color-accent)] bg-white border border-gray-100" style={{ borderRadius: 'var(--radius-sm)' }}>
                    <span className="text-xs font-bold uppercase">Oct</span>
                    <span className="text-sm font-black">12</span>
                  </div>
                  <div>
                    <h5 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-main)' }}>Frontend Final</h5>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>React Module</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center p-3 border border-gray-100 bg-[var(--bg-secondary)]" style={{ borderRadius: 'var(--radius-md)' }}>
                  <div className="w-10 h-10 flex flex-col items-center justify-center text-[var(--text-muted)] bg-white border border-gray-100" style={{ borderRadius: 'var(--radius-sm)' }}>
                    <span className="text-xs font-bold uppercase">Oct</span>
                    <span className="text-sm font-black">15</span>
                  </div>
                  <div>
                    <h5 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-main)' }}>API Gateway Quiz</h5>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>Backend Module</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LmsVisuals;
