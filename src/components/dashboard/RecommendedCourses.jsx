import React from 'react';
import { Card } from '../common/Card';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { PenTool, Database, Layout, GraduationCap, ChevronRight } from 'lucide-react';

const courses = [
  { icon: PenTool, title: 'UX/UI Design', lessons: '45 lessons', bg: 'bg-orange-50', color: 'text-orange-500' },
  { icon: Database, title: 'Data Science', lessons: '62 lessons', bg: 'bg-xebia-purple/10', color: 'text-xebia-purple' },
  { icon: Layout, title: 'Web Development', lessons: '110 lessons', bg: 'bg-xebia-emerald/10', color: 'text-xebia-emerald' },
  { icon: GraduationCap, title: 'Software Management', lessons: '24 lessons', bg: 'bg-blue-50', color: 'text-blue-500' }
];

export const RecommendedCourses = () => {
  return (
    <Card className="hover:shadow-lifted transition-shadow duration-300">
      <div className="flex justify-between items-center mb-[24px]">
        <Typography variant="h3" className="text-gray-900 tracking-tight">Recommended</Typography>
        <Button variant="ghost" className="text-xebia-purple hover:bg-xebia-purple/5 px-3 py-1.5 h-auto text-[13px] font-[600]">
          See All
        </Button>
      </div>
      
      <div className="space-y-[12px]">
        {courses.map((course) => (
          <div 
            key={course.title} 
            className="flex items-center gap-[16px] p-[16px] border border-gray-100 rounded-[16px] hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 cursor-pointer group"
          >
            <div className={`p-[12px] rounded-[12px] ${course.bg} ${course.color} group-hover:scale-110 transition-transform duration-300`}>
              <course.icon className="w-[20px] h-[20px]" />
            </div>
            <div className="flex-1">
              <Typography variant="body" className="font-[600] text-[15px] text-gray-900">{course.title}</Typography>
              <Typography variant="small" className="text-gray-500 font-[500] text-[13px]">{course.lessons}</Typography>
            </div>
            <div className="text-gray-300 group-hover:text-xebia-purple group-hover:translate-x-1 transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
