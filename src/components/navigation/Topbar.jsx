import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { Avatar } from '../common/Avatar';
import { SearchBar } from '../common/SearchBar';

export const Topbar = ({ toggleSidebar }) => {
  return (
    <header className="h-[88px] flex items-center justify-between px-[24px] lg:px-[32px] sticky top-0 z-20">
      <div className="flex items-center gap-[16px] flex-1">
        <button 
          aria-label="Toggle sidebar"
          onClick={toggleSidebar}
          className="p-2 md:hidden text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        {/* Search */}
        <div className="hidden md:block w-full max-w-[400px]">
          <div className="relative group">
            <Search className="absolute left-[16px] top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-xebia-purple transition-colors" />
            <input 
              aria-label="Search"
              type="text"
              placeholder="Search courses, resources, or people..."
              className="w-full bg-white border border-gray-200 rounded-2xl py-[12px] pl-[40px] pr-[16px] text-[14px] focus:outline-none focus:ring-4 focus:ring-xebia-purple/10 focus:border-xebia-purple shadow-sm transition-all duration-300 placeholder:text-gray-400 text-gray-900"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[16px] lg:gap-[24px]">
        {/* Notifications */}
        <button 
          aria-label="View notifications"
          className="relative w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-white hover:shadow-soft rounded-full transition-all duration-300 border border-transparent hover:border-gray-200 bg-white/50"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-[32px] w-[1px] bg-gray-200 hidden sm:block" />

        {/* Profile */}
        <div className="flex items-center gap-[12px] cursor-pointer group p-1 pr-4 rounded-full hover:bg-white transition-all duration-300 hover:shadow-soft border border-transparent hover:border-gray-200">
          <Avatar src="https://i.pravatar.cc/150?img=11" alt="Alena Jovin" className="w-9 h-9" />
          <div className="hidden sm:block text-left">
            <p className="text-[14px] font-[600] text-gray-900 leading-tight">Alena Jovin</p>
            <p className="text-[12px] font-[500] text-gray-500 leading-tight">Student</p>
          </div>
        </div>
      </div>
    </header>
  );
};
