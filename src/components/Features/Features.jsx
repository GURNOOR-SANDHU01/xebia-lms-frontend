import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, LineChart, ShieldCheck, MonitorPlay, Award, PieChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Course Management',
      description: 'Create, organize, and update course materials effortlessly with our intuitive drag-and-drop builder.',
      icon: <BookOpen size={28} />
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor student engagement and completion rates in real-time with comprehensive visual indicators.',
      icon: <LineChart size={28} />
    },
    {
      title: 'Secure Authentication',
      description: 'Enterprise-grade security ensuring your organizational data and user identities are fully protected.',
      icon: <ShieldCheck size={28} />
    },
    {
      title: 'Interactive Learning',
      description: 'Engage learners with quizzes, interactive assignments, and multimedia-rich learning paths.',
      icon: <MonitorPlay size={28} />
    },
    {
      title: 'Verifiable Certificates',
      description: 'Automatically generate and issue digitally verifiable certificates upon course completion.',
      icon: <Award size={28} />
    },
    {
      title: 'Analytics Dashboard',
      description: 'Gain deep insights into learning outcomes with advanced data visualizations and exportable reports.',
      icon: <PieChart size={28} />
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="section-container text-center">
        <span className="section-label">Why Choose Us</span>
        <h2 className="section-title">Built for Modern Education</h2>
        <p className="section-subtitle mx-auto">
          Everything you need to deliver world-class training and education, all in one seamless platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--grid-gap)' }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-base text-left p-8"
            >
              <div className="w-14 h-14 bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--color-primary)] mb-6 transition-transform duration-300" style={{ borderRadius: 'var(--radius-sm)' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>{feature.title}</h3>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
