import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../../components/home/Hero';


import { FAQSection } from '../../components/home/FAQSection';
import { ContactSection } from '../../components/home/ContactSection';


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="home-page w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />

      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <FAQSection />
      </div>
      <ContactSection />

    </div>
  );
};

export default Home;
