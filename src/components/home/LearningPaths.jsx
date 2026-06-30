import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, ArrowRight, Code, Database, Layout } from 'lucide-react';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { ProgressBar } from '../common/ProgressBar';

export const LearningPaths = () => {
  const paths = [
    {
      title: 'Full-Stack Software Engineer',
      description: 'Master both front-end and back-end development. Build scalable, secure, and performant web applications.',
      difficulty: 'Intermediate',
      badgeVariant: 'warning',
      duration: '6 Months',
      modules: 12,
      progress: 0,
      icon: Code,
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
    },
    {
      title: 'Data Science & Machine Learning',
      description: 'Dive deep into data analytics, predictive modeling, and AI algorithms using Python and TensorFlow.',
      difficulty: 'Advanced',
      badgeVariant: 'error',
      duration: '8 Months',
      modules: 16,
      progress: 0,
      icon: Database,
      gradient: 'from-xebia-purple to-xebia-light',
      bgGradient: 'from-xebia-purple/10 to-xebia-light/5',
    },
    {
      title: 'UX/UI Product Design',
      description: 'Learn user research, wireframing, and high-fidelity prototyping to design beautiful, user-centric interfaces.',
      difficulty: 'Beginner',
      badgeVariant: 'success',
      duration: '4 Months',
      modules: 8,
      progress: 0,
      icon: Layout,
      gradient: 'from-xebia-emerald to-teal-400',
      bgGradient: 'from-xebia-emerald/10 to-teal-50',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.1, duration: 0.8 } }
  };

  return (
    <section className="relative overflow-hidden bg-white py-[120px]">
      <Container className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px] mb-[64px]">
          <div className="max-w-2xl text-left">
            <Typography variant="small" className="text-xebia-purple font-[700] tracking-wider uppercase mb-4 block">
              Curated Tracks
            </Typography>
            <Typography variant="h2" className="text-gray-900 mb-4">
              Career-defining Learning Paths.
            </Typography>
            <Typography variant="body" className="text-gray-600 text-[18px]">
              Structured, step-by-step curriculums designed by industry experts to take you from beginner to professional in record time.
            </Typography>
          </div>
          <Button variant="outline" className="hidden md:flex shrink-0">
            View All Paths
          </Button>
        </div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {paths.map((path, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-[24px] shadow-soft hover:shadow-lifted transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Top Accent Gradient Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${path.gradient}`} />
              
              {/* Illustration / Header Block */}
              <div className={`p-[32px] pb-[24px] bg-gradient-to-b ${path.bgGradient} flex flex-col gap-[24px]`}>
                <div className="flex justify-between items-start">
                  <div className={`w-[56px] h-[56px] rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0`}>
                    <path.icon className={`w-[28px] h-[28px] text-gray-800`} />
                  </div>
                  <Badge variant={path.badgeVariant} hasDot>
                    {path.difficulty}
                  </Badge>
                </div>
                
                <div>
                  <Typography variant="h3" className="text-gray-900 mb-2 leading-tight">
                    {path.title}
                  </Typography>
                  <Typography variant="body" className="text-gray-600 text-[14px] line-clamp-2">
                    {path.description}
                  </Typography>
                </div>
              </div>

              {/* Meta Data */}
              <div className="p-[32px] pt-[24px] flex flex-col flex-1 bg-white">
                <div className="flex items-center gap-[24px] mb-[32px]">
                  <div className="flex items-center gap-[8px] text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-[13px] font-[600]">{path.duration}</span>
                  </div>
                  <div className="flex items-center gap-[8px] text-gray-500">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-[13px] font-[600]">{path.modules} Modules</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-[32px] mt-auto">
                  <ProgressBar progress={path.progress} showLabel />
                </div>

                {/* Action */}
                <Button variant="primary" className="w-full group-hover:bg-xebia-dark transition-colors">
                  Enroll in Path <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-[32px] flex md:hidden w-full">
          <Button variant="outline" className="w-full">
            View All Paths
          </Button>
        </div>

      </Container>
    </section>
  );
};
