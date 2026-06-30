import React from 'react';
import { Hero } from '../../components/home/Hero';


import { FAQSection } from '../../components/home/FAQSection';
import { ContactSection } from '../../components/home/ContactSection';


const Home = () => {
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
