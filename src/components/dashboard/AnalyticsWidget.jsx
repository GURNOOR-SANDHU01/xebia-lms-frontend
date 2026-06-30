import React from 'react';
import { Card } from '../common/Card';
import { Typography } from '../common/Typography';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '../common/Button';
import { ChevronDown } from 'lucide-react';

const data = [
  { name: 'Mon', hours: 2.5 },
  { name: 'Tue', hours: 3.8 },
  { name: 'Wed', hours: 3.2 },
  { name: 'Thu', hours: 5.0 },
  { name: 'Fri', hours: 4.2 },
  { name: 'Sat', hours: 6.5 },
  { name: 'Sun', hours: 4.8 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-100 shadow-lifted rounded-xl">
        <p className="text-gray-500 text-[12px] font-[500] mb-1">{label}</p>
        <p className="text-xebia-purple font-[700] text-[15px]">
          {payload[0].value} <span className="text-gray-400 font-[500] text-[12px]">hours</span>
        </p>
      </div>
    );
  }
  return null;
};

export const AnalyticsWidget = () => {
  return (
    <Card className="hover:shadow-lifted transition-shadow duration-300">
      <div className="flex justify-between items-center mb-[32px]">
        <div>
          <Typography variant="h3" className="text-gray-900 tracking-tight mb-1">Learning Activity</Typography>
          <Typography variant="small" className="text-gray-500">Your total learning hours this week.</Typography>
        </div>
        <Button variant="outline" className="gap-2 px-4 py-2 text-[13px]">
          This Week <ChevronDown className="w-4 h-4" />
        </Button>
      </div>

      <div className="h-[240px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6C1D5F" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#6C1D5F" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 500 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 500 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#6C1D5F', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Area 
              type="monotone" 
              dataKey="hours" 
              stroke="#6C1D5F" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorHours)" 
              activeDot={{ r: 6, fill: "#6C1D5F", stroke: "#fff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
