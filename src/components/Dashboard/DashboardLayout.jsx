import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { PORTALS } from '../../utils/constants';
import Sidebar from './Sidebar';
import Header from './Header';
import LearnerView from './LearnerView';
import TrainerView from './TrainerView';
import ClientView from './ClientView';

const DashboardLayout = () => {
  const { user } = useAuth();

  const renderView = () => {
    switch (user?.role) {
      case PORTALS.TRAINER:
        return <TrainerView />;
      case PORTALS.CLIENT:
        return <ClientView />;
      case PORTALS.LEARNER:
      default:
        return <LearnerView />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[var(--bg-secondary)] overflow-hidden">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header />
        
        {/* Scrollable View Area */}
        <main className="flex-1 overflow-y-auto px-10 pt-6">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
