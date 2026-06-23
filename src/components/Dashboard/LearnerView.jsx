import React from 'react';
import { Clock, Star, User, ChevronDown } from 'lucide-react';

const LearnerView = () => {
  const courses = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&q=80',
      title: 'Master Digital Product Design: UX Research & UI Design',
      subtitle: 'A complete design education for product designers: Research the user experience, then...',
      hours: '25.5',
      lectures: 54,
      level: 'Intermediate',
      author: 'Elijah Snyder',
      progress: 75
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1542744094-24638ea0b56c?auto=format&fit=crop&w=300&q=80',
      title: 'Complete Product Design From Home Course',
      subtitle: 'Learn Product Design From the Ground Up',
      hours: '25.5',
      lectures: 54,
      level: 'Intermediate',
      author: 'Callie Carson',
      progress: 35
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1507238692062-5a0245a808ce?auto=format&fit=crop&w=300&q=80',
      title: 'UX-Strategy: How to Reach The Next Level',
      subtitle: 'A complete design education for product designers: Research the user experience, then...',
      hours: '25.5',
      lectures: 54,
      level: 'Intermediate',
      author: 'Rose Poole',
      progress: 0
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 pb-12">
      
      {/* Reminder Banner (Match Reference Photo) */}
      <div className="card-base flex items-center justify-between p-6" style={{ height: 'auto', borderRadius: 'var(--radius-lg)' }}>
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center overflow-hidden">
            {/* Simple geometric shapes mimicking the reference photo illustration */}
            <div className="relative w-full h-full flex items-end justify-center pb-2">
              <div className="w-6 h-10 bg-[var(--color-primary)] mx-1"></div>
              <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-[var(--color-secondary)] mb-2"></div>
              <div className="w-5 h-8 bg-orange-400 mx-1"></div>
            </div>
          </div>
          <div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: '4px' }}>Reminder: One a one course</p>
            <div className="flex items-center gap-3">
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--text-main)' }}>UX-Strategy: How to Reach The Next Level</h3>
              <div className="flex items-center gap-1 text-[var(--text-muted)]" style={{ fontSize: 'var(--text-xs)' }}>
                <User size={14} /> by Rose Poole
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <button className="bg-[var(--color-secondary)] text-white font-bold transition-transform hover:scale-105" style={{ padding: '8px 24px', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-sm)' }}>
            Available at 7:30 AM
          </button>
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '0.05em' }}>00:06:23</span>
        </div>
      </div>

      {/* Main Course List Section */}
      <div className="bg-white p-8" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-main)' }}>My Courses</h2>
          <div className="flex items-center gap-2 border border-gray-200 px-4 py-2 cursor-pointer hover:bg-gray-50" style={{ borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)', color: 'var(--text-main)' }}>
            <span>Date</span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-gray-100 mb-6">
          <div className="relative pb-4 cursor-pointer" style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-main)' }}>
            Regular (4)
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-secondary)]"></div>
          </div>
          <div className="pb-4 cursor-pointer hover:text-[var(--text-main)] transition-colors" style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--text-muted)' }}>
            One a one (2)
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col gap-6">
          {courses.map((course) => (
            <div key={course.id} className="flex gap-6 py-4 border-b border-gray-50 last:border-0 group cursor-pointer">
              
              {/* Image */}
              <div className="w-32 h-24 flex-shrink-0 overflow-hidden" style={{ borderRadius: 'var(--radius-sm)' }}>
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-center">
                <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>{course.title}</h4>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: '12px' }}>{course.subtitle}</p>
                
                <div className="flex items-center gap-6" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {course.hours} total hour • {course.lectures} lectures</span>
                  <span className="flex items-center gap-1.5"><Star size={14} /> {course.level}</span>
                  <span className="flex items-center gap-1.5"><User size={14} /> by {course.author}</span>
                </div>
              </div>

              {/* Progress */}
              <div className="w-32 flex flex-col justify-center gap-2 flex-shrink-0">
                <div className="flex justify-between items-center" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                  <span>Progress</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{course.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${course.progress}%`, backgroundColor: course.progress === 100 ? 'var(--color-secondary)' : 'var(--color-accent)' }}></div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LearnerView;
