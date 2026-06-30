import React from 'react';
import { Users, FileCheck } from 'lucide-react';

const TrainerView = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 pb-12">
      <div className="card-base p-8 text-center py-20">
        <div className="w-16 h-16 bg-[var(--bg-secondary)] text-[var(--color-primary)] mx-auto rounded-full flex items-center justify-center mb-4">
          <FileCheck size={32} />
        </div>
        <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-main)', mb: 2 }}>Trainer Dashboard</h2>
        <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)' }}>Curriculum management and grading interface will go here.</p>
      </div>
    </div>
  );
};

export default TrainerView;
