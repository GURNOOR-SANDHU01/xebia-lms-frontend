import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Trophy } from 'lucide-react';
import { WelcomeCard } from '../../components/dashboard/WelcomeCard';
import { LearningStats } from '../../components/dashboard/LearningStats';
import { ContinueLearning } from '../../components/dashboard/ContinueLearning';
import { AnalyticsWidget } from '../../components/dashboard/AnalyticsWidget';
import { RecentActivity } from '../../components/dashboard/RecentActivity';
import { Calendar } from '../../components/dashboard/Calendar';
import { RecommendedCourses } from '../../components/dashboard/RecommendedCourses';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Dashboard = () => {
  return (
    <motion.div 
      className="space-y-[32px] w-full"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants}>
        <WelcomeCard />
      </motion.div>

      {/* Stats Section */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        <LearningStats 
          title="Active Courses" 
          value="03" 
          icon={BookOpen} 
          trend="2%" 
          isPositive={true} 
        />
        <LearningStats 
          title="Average Score" 
          value="96%" 
          icon={Target} 
          trend="4%" 
          isPositive={true} 
        />
        <LearningStats 
          title="Total Certificates" 
          value="10" 
          icon={Trophy} 
        />
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-[24px]">
        
        {/* Left Column (Wider) */}
        <div className="xl:col-span-2 space-y-[24px]">
          <motion.div variants={itemVariants}>
            <ContinueLearning />
          </motion.div>

          <motion.div variants={itemVariants}>
            <AnalyticsWidget />
          </motion.div>

          <motion.div variants={itemVariants}>
            <RecentActivity />
          </motion.div>
        </div>

        {/* Right Column (Narrower) */}
        <div className="space-y-[24px]">
          <motion.div variants={itemVariants}>
            <Calendar />
          </motion.div>

          <motion.div variants={itemVariants}>
            <RecommendedCourses />
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default Dashboard;
