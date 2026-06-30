import React from 'react';
import { Card } from '../common/Card';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { Play, CheckCircle2 } from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar';

export const ContinueLearning = () => {
  return (
    <Card className="hover:shadow-lifted transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row gap-[32px] items-center">
        {/* Course Thumbnail */}
        <div className="w-full sm:w-[200px] h-[160px] bg-gradient-to-br from-orange-400 to-amber-500 rounded-[20px] p-[24px] flex flex-col justify-between shrink-0 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-white/20 blur-[30px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700" />
          <div className="w-[48px] h-[48px] bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white font-[700] text-[20px] shadow-sm">
            H
          </div>
          <Typography variant="small" className="text-white font-[600] tracking-wide">Web Dev</Typography>
        </div>

        <div className="flex-1 space-y-[16px] w-full">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className="px-[12px] py-[4px] bg-orange-50 text-orange-600 rounded-full text-[12px] font-[700] uppercase tracking-wider">
                  In Progress
                </span>
              </div>
              <Typography variant="small" className="text-gray-500 font-[600]">75% Completed</Typography>
            </div>
            <Typography variant="h3" className="text-[24px] tracking-tight text-gray-900 mb-1">HTML & CSS Basics</Typography>
            <Typography variant="body" className="text-[15px] text-gray-500">
              Module 4: Responsive Design Principles & Flexbox Layouts.
            </Typography>
          </div>
          
          <div className="py-[8px]">
            <ProgressBar progress={75} size="md" variant="primary" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-[16px] items-center pt-[8px]">
            <Button variant="primary" className="w-full sm:w-auto gap-[8px] bg-xebia-purple hover:bg-xebia-dark text-white rounded-xl py-[12px] px-[24px] font-[600] text-[14px]">
              <Play className="w-[18px] h-[18px]" /> Continue Lesson
            </Button>
            <Typography variant="small" className="text-gray-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-xebia-emerald" /> 12/16 Lessons completed
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  );
};
