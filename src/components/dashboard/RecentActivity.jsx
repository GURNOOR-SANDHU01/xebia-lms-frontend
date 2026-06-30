import React from 'react';
import { Card } from '../common/Card';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { Target, Play, Trophy, CheckCircle2 } from 'lucide-react';

const activities = [
  { 
    id: 1,
    title: 'Completed Quiz: React Hooks', 
    time: '2 hours ago', 
    icon: Target,
    bg: 'bg-blue-50',
    color: 'text-blue-500'
  },
  { 
    id: 2,
    title: 'Watched Video: Advanced State', 
    time: '5 hours ago', 
    icon: Play,
    bg: 'bg-xebia-purple/10',
    color: 'text-xebia-purple'
  },
  { 
    id: 3,
    title: 'Earned Badge: UI Master', 
    time: '1 day ago', 
    icon: Trophy,
    bg: 'bg-orange-50',
    color: 'text-orange-500'
  },
  { 
    id: 4,
    title: 'Submitted Assignment 1', 
    time: '2 days ago', 
    icon: CheckCircle2,
    bg: 'bg-xebia-emerald/10',
    color: 'text-xebia-emerald'
  }
];

export const RecentActivity = () => {
  return (
    <Card className="hover:shadow-lifted transition-shadow duration-300">
      <div className="flex justify-between items-center mb-[24px]">
        <Typography variant="h3" className="text-gray-900 tracking-tight">Recent Activity</Typography>
        <Button variant="ghost" className="text-xebia-purple hover:bg-xebia-purple/5 px-3 py-1.5 h-auto text-[13px] font-[600]">
          View All
        </Button>
      </div>
      
      <div className="space-y-[12px]">
        {activities.map((act) => (
          <div 
            key={act.id} 
            className="flex items-center gap-[16px] p-[16px] border border-gray-100 rounded-[16px] hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 cursor-pointer group"
          >
            <div className={`p-[12px] rounded-[12px] ${act.bg} ${act.color} group-hover:scale-110 transition-transform duration-300`}>
              <act.icon className="w-[20px] h-[20px]" />
            </div>
            <div className="flex-1">
              <Typography variant="body" className="font-[600] text-[15px] text-gray-900">{act.title}</Typography>
              <Typography variant="small" className="text-gray-500 font-[500] text-[13px]">{act.time}</Typography>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
