import React from 'react';
import { Card } from '../common/Card';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    day: '12',
    month: 'Oct',
    title: 'UI/UX Workshop',
    time: '10:00 AM',
    bg: 'bg-xebia-emerald/10',
    color: 'text-xebia-emerald'
  },
  {
    id: 2,
    day: '15',
    month: 'Oct',
    title: 'React Adv. Webinar',
    time: '02:00 PM',
    bg: 'bg-orange-50',
    color: 'text-orange-500'
  },
  {
    id: 3,
    day: '18',
    month: 'Oct',
    title: 'System Design Q&A',
    time: '04:30 PM',
    bg: 'bg-xebia-purple/10',
    color: 'text-xebia-purple'
  }
];

export const Calendar = () => {
  return (
    <Card className="hover:shadow-lifted transition-shadow duration-300">
      <div className="flex justify-between items-center mb-[24px]">
        <Typography variant="h3" className="text-gray-900 tracking-tight">Upcoming Schedule</Typography>
        <Button variant="ghost" className="text-xebia-purple hover:bg-xebia-purple/5 px-3 py-1.5 h-auto text-[13px] font-[600]">
          Calendar
        </Button>
      </div>
      
      <div className="space-y-[12px]">
        {events.map((event) => (
          <div 
            key={event.id}
            className="flex gap-[16px] items-center p-[16px] border border-gray-100 rounded-[16px] hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 cursor-pointer group"
          >
            <div className={`flex flex-col items-center justify-center p-[12px] rounded-[12px] min-w-[56px] ${event.bg} ${event.color} group-hover:scale-110 transition-transform duration-300`}>
              <span className="font-[700] text-[18px] leading-none">{event.day}</span>
              <span className="font-[600] text-[11px] uppercase tracking-wider mt-1">{event.month}</span>
            </div>
            <div>
              <Typography variant="body" className="font-[600] text-gray-900 text-[15px] block">{event.title}</Typography>
              <Typography variant="small" className="text-gray-500 flex items-center gap-1.5 mt-1 font-[500] text-[13px]">
                <Clock className="w-3.5 h-3.5" /> {event.time}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
