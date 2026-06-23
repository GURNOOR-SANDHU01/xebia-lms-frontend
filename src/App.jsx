import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css'; // Global App styles if needed
import { ROUTES } from './utils/constants';

/**
 * Main App Component.
 * Sets up routing for the entire application.
 * 
 * @returns {JSX.Element} The root App component.
 */
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-text-main font-sans antialiased">
        <Routes>
          <Route path={ROUTES.HOME} element={<LandingPage />} />
          {/* Future Routes:
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
