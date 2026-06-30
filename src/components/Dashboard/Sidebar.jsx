import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, LayoutDashboard, Calendar, MessageSquare, Trophy, Settings, Users, FileCheck, Building2, ShieldAlert, LogOut } from 'lucide-react';
import { PORTALS } from '../../utils/constants';

const Sidebar = () => {
  const { user, logout } = useAuth();

  const getLinks = () => {
    switch(user?.role) {
      case PORTALS.TRAINER:
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Overview', active: false },
          { icon: <BookOpen size={20} />, label: 'Curriculum', active: true },
          { icon: <FileCheck size={20} />, label: 'Grading', active: false },
          { icon: <Users size={20} />, label: 'Students', active: false },
          { icon: <Settings size={20} />, label: 'Settings', active: false },
        ];
      case PORTALS.CLIENT:
        return [
          { icon: <Building2 size={20} />, label: 'Organization', active: true },
          { icon: <Users size={20} />, label: 'Employees', active: false },
          { icon: <ShieldAlert size={20} />, label: 'Compliance', active: false },
          { icon: <Settings size={20} />, label: 'Settings', active: false },
        ];
      case PORTALS.LEARNER:
      default:
        // From reference image
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Overview', active: false },
          { icon: <BookOpen size={20} />, label: 'Courses', active: true },
          { icon: <Calendar size={20} />, label: 'Schedule', active: false, badge: 4 },
          { icon: <MessageSquare size={20} />, label: 'Discussion', active: false },
          { icon: <Trophy size={20} />, label: 'Leaderboard', active: false },
          { icon: <Settings size={20} />, label: 'Settings', active: false },
        ];
    }
  };

  const links = getLinks();

  return (
    <aside className="w-64 h-full bg-white border-r border-gray-100 flex flex-col py-8 shadow-sm relative z-20">
      {/* Brand */}
      <div className="flex items-center gap-3 px-8 mb-12">
        <div className="w-8 h-8 flex items-center justify-center bg-[var(--color-main)] text-[var(--color-primary)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span style={{ fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>Cuboid</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-2 px-4">
        {links.map((link, idx) => (
          <div 
            key={idx}
            className="flex items-center justify-between px-4 py-3 cursor-pointer transition-all relative group"
            style={{ 
              borderRadius: 'var(--radius-sm)',
              backgroundColor: link.active ? 'var(--bg-secondary)' : 'transparent',
              color: link.active ? 'var(--color-secondary)' : 'var(--text-muted)',
              fontWeight: link.active ? 700 : 500,
            }}
          >
            {/* Active Indicator Line */}
            {link.active && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[var(--color-secondary)]" style={{ borderRadius: '0 4px 4px 0' }}></div>
            )}
            
            <div className="flex items-center gap-3">
              <span className={`transition-colors ${link.active ? 'text-[var(--color-secondary)]' : 'group-hover:text-[var(--color-primary)]'}`}>
                {link.icon}
              </span>
              <span style={{ fontSize: 'var(--text-sm)' }}>{link.label}</span>
            </div>

            {link.badge && (
              <div className="w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full">
                {link.badge}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-8 mt-auto border-t border-gray-50 pt-6">
        <button 
          onClick={logout}
          className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors w-full font-medium"
          style={{ fontSize: 'var(--text-sm)' }}
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
