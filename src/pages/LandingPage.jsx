import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import PortalSelection from '../components/PortalSelection/PortalSelection';
import Features from '../components/Features/Features';
import Statistics from '../components/Statistics/Statistics';
import LmsVisuals from '../components/LmsVisuals/LmsVisuals';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[var(--bg-primary)]">
        {/* White */}
        <Hero />
        
        {/* Light Gray (Alt) */}
        <div className="bg-[var(--bg-secondary)]">
          <LmsVisuals />
        </div>
        
        {/* White */}
        <div className="bg-[var(--bg-primary)]">
          <PortalSelection />
        </div>
        
        {/* Light Gray (Alt) */}
        <div className="bg-[var(--bg-secondary)]">
          <Features />
        </div>
        
        {/* Strict Dark Section */}
        <div className="bg-[#111827]">
          <Statistics />
        </div>
        
        {/* White */}
        <div className="bg-[var(--bg-primary)]">
          <FAQ />
        </div>
        
        {/* Light Gray (Alt) */}
        <div className="bg-[var(--bg-secondary)]">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
