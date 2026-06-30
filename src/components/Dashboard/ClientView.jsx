import React from 'react';
import { Building2, ShieldAlert } from 'lucide-react';

const ClientView = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 pb-12">
      <div className="card-base p-8 text-center py-20">
        <div className="w-16 h-16 bg-[var(--bg-secondary)] text-[var(--color-secondary)] mx-auto rounded-full flex items-center justify-center mb-4">
          <Building2 size={32} />
        </div>
        <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-main)', mb: 2 }}>Client Dashboard</h2>
        <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)' }}>Organization overview, employee tracking, and compliance reports will go here.</p>
      </div>
    </div>
  );
};

export default ClientView;
