import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Award, BookOpen, Users } from 'lucide-react';
import { Typography } from '../common/Typography';
import { Container } from '../common/Container';

export const Features = () => {
  const features = [
    {
      title: 'Lightning Fast Learning',
      description: 'Experience unparalleled speed with our globally optimized platform architecture designed for instant content delivery.',
      icon: Zap,
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, strict compliance standards, and robust privacy controls keep your organizational data completely safe.',
      icon: Shield,
      color: 'text-xebia-emerald',
      bg: 'bg-xebia-emerald/10',
    },
    {
      title: 'Global Mentorship',
      description: 'Connect directly with industry-leading experts and engineers from around the world to accelerate your career growth.',
      icon: Globe,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      title: 'Verified Certificates',
      description: 'Earn cryptographic certificates backed by top universities that directly integrate with your professional networks.',
      icon: Award,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
    },
    {
      title: 'Dynamic Curriculum',
      description: 'Interactive, real-time code environments that allow you to practice and build projects directly in your browser.',
      icon: BookOpen,
      color: 'text-xebia-purple',
      bg: 'bg-xebia-purple/10',
    },
    {
      title: 'Community Driven',
      description: 'Join a massive, active network of ambitious developers. Collaborate on open-source projects and get unstuck instantly.',
      icon: Users,
      color: 'text-pink-500',
      bg: 'bg-pink-500/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.2, duration: 0.8 } }
  };

  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-[120px]">
      <Container className="relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-[80px]">
          <Typography variant="small" className="text-xebia-purple font-[700] tracking-wider uppercase mb-4 block">
            Powerful Infrastructure
          </Typography>
          <Typography variant="h2" className="text-gray-900 mb-6">
            Everything you need to scale your engineering team.
          </Typography>
          <Typography variant="body" className="text-gray-600 text-[18px]">
            A complete suite of advanced learning tools, rigorous analytics, and enterprise-grade security built directly into the core.
          </Typography>
        </div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white/60 backdrop-blur-xl border border-white p-[32px] rounded-3xl shadow-soft hover:shadow-lifted transition-shadow duration-300 flex flex-col items-start text-left"
            >
              <div className={`w-[64px] h-[64px] rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-[24px]`}>
                <feature.icon className="w-[32px] h-[32px]" />
              </div>
              <Typography variant="h3" className="text-gray-900 mb-3 text-[20px]">
                {feature.title}
              </Typography>
              <Typography variant="body" className="text-gray-500 leading-relaxed text-[15px]">
                {feature.description}
              </Typography>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
};
