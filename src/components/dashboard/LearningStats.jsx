import React from 'react';
import { Card } from '../common/Card';
import { Typography } from '../common/Typography';
import { motion } from 'framer-motion';

export const LearningStats = ({ title, value, icon: Icon, trend, isPositive }) => {
  return (
    <Card className="p-[24px] rounded-[24px] shadow-soft hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 border border-gray-100 bg-white relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-[100px] pointer-events-none -z-0 group-hover:scale-110 transition-transform duration-500" />
      
      <div className="relative z-10 flex justify-between items-start mb-[16px]">
        <div className="p-[12px] rounded-[16px] bg-xebia-purple/5 text-xebia-purple group-hover:bg-xebia-purple group-hover:text-white transition-colors duration-300">
          <Icon className="w-[24px] h-[24px]" />
        </div>
        
        {trend && (
          <div className={`flex items-center gap-[4px] px-[10px] py-[4px] rounded-full text-[13px] font-[600] ${
            isPositive ? 'bg-xebia-emerald/10 text-xebia-emerald' : 'bg-red-50 text-red-500'
          }`}>
            <svg 
              className={`w-3 h-3 ${!isPositive ? 'rotate-180' : ''}`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            {trend}
          </div>
        )}
      </div>

      <div className="relative z-10">
        <Typography variant="h2" className="text-[32px] font-[700] text-gray-900 leading-none mb-[8px] tracking-tight">
          {value}
        </Typography>
        <Typography variant="body" className="text-gray-500 text-[14px] font-[500]">
          {title}
        </Typography>
      </div>
    </Card>
  );
};