import React from 'react';
import { Search } from 'lucide-react';
import { Typography } from '../common/Typography';
import { Card } from '../common/Card';

export const WelcomeCard = () => {
  return (
    <Card className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 hover:shadow-lifted transition-shadow duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-xebia-purple/5 to-transparent rounded-bl-[100px] pointer-events-none -z-0" />
      
      <div className="w-full relative z-10">
        <Typography variant="small" className="text-xebia-purple font-[700] tracking-wider uppercase mb-2 block">
          Welcome back, Alena
        </Typography>
        <Typography variant="h2" className="text-[28px] lg:text-[32px] font-[700] text-gray-900 mb-8 tracking-tight">
          What would you like to learn today?
        </Typography>
        
        <div className="relative w-full max-w-2xl bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden focus-within:ring-4 focus-within:ring-xebia-purple/10 focus-within:border-xebia-purple transition-all duration-300 group">
          <input
            type="text"
            placeholder="Search for courses, skills, or certifications..."
            className="w-full pl-[56px] pr-[120px] py-[20px] bg-transparent border-none text-[15px] focus:outline-none focus:ring-0 text-gray-900 placeholder:text-gray-400"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-[20px] top-1/2 -translate-y-1/2 group-focus-within:text-xebia-purple transition-colors" />
          <div className="absolute right-[8px] top-1/2 -translate-y-1/2">
            <button className="bg-xebia-purple text-white px-[24px] py-[12px] rounded-xl font-[600] text-[14px] hover:bg-xebia-dark hover:shadow-lg hover:shadow-xebia-purple/20 transition-all duration-300 flex items-center justify-center">
              Search
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WelcomeCard;
