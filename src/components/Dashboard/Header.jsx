import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Search, Bell } from 'lucide-react';

const Header = () => {
  const { user } = useAuth();
  
  // Format current date matching the reference photo: "Today Aug 22, 2020 | 7:23 PM"
  const getFormattedDate = () => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const date = new Date().toLocaleDateString('en-US', options);
    const time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    return `Today ${date} | ${time}`;
  };

  return (
    <header className="w-full h-24 flex items-center justify-between px-10 relative z-10">
      <div>
        <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
          Good Morning, {user?.name || 'User'}
        </h1>
        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
          {getFormattedDate()}
        </p>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-gray-400">
          <button className="hover:text-[var(--color-primary)] transition-colors"><Search size={20} /></button>
          <div className="relative">
            <button className="hover:text-[var(--color-primary)] transition-colors"><Bell size={20} /></button>
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[var(--bg-secondary)]"></div>
          </div>
        </div>

        <div className="flex items-center gap-3 pl-8 border-l border-gray-200">
          <div className="w-10 h-10 rounded-full bg-purple-100 border border-purple-200 overflow-hidden flex items-center justify-center">
            {/* Placeholder Avatar */}
            <img src="https://i.pravatar.cc/100?img=47" alt="User" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-main)' }}>{user?.name || 'User'}</span>
              <span className="flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded-md">
                🔥 230
              </span>
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', textTransform: 'capitalize' }}>
              {user?.role.toLowerCase().replace('_', ' ')}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
