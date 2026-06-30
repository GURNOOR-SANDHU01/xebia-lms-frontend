import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Custom hook to animate numbers
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    if (isInView) {
      window.requestAnimationFrame(step);
    }
  }, [end, duration, isInView]);

  return { count, ref };
};

const StatItem = ({ end, suffix, label, delay }) => {
  const { count, ref } = useCountUp(end);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
      style={{ padding: '24px' }}
    >
      <div className="font-extrabold text-white tracking-tight flex items-center justify-center gap-1" style={{ fontSize: 'var(--text-3xl)', marginBottom: '8px' }}>
        {count}
        <span style={{ color: 'var(--color-accent)' }}>{suffix}</span>
      </div>
      <div style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.7)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</div>
    </motion.div>
  );
};

const Statistics = () => {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)' }}>
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full mix-blend-screen filter blur-[100px] translate-x-1/3 -translate-y-1/3" style={{ backgroundColor: 'var(--color-primary)' }}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full mix-blend-screen filter blur-[100px] -translate-x-1/3 translate-y-1/3" style={{ backgroundColor: 'var(--color-accent)' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10" style={{ gap: 'var(--grid-gap)' }}>
          <StatItem end={10} suffix=",000+" label="Learners" delay={0} />
          <StatItem end={500} suffix="+" label="Trainers" delay={0.1} />
          <StatItem end={250} suffix="+" label="Courses" delay={0.2} />
          <StatItem end={98} suffix="%" label="Completion Rate" delay={0.3} />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
