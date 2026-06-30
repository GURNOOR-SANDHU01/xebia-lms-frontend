import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { BRANDING } from '../../utils/constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'portals', 'features', 'faq', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'portals', label: 'Portals' },
    { to: 'features', label: 'Features' },
    { to: 'faq', label: 'FAQ' },
    { to: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50" style={{ 
      transition: 'all var(--transition-default)',
      backgroundColor: scrolled ? 'rgba(255,255,255,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      paddingTop: scrolled ? '16px' : '32px',
      paddingBottom: scrolled ? '16px' : '32px',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none'
    }}>
      <div className="section-container flex items-center justify-between" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 flex items-center justify-center text-white bg-[var(--color-primary)] transition-transform group-hover:-rotate-6" style={{ borderRadius: 'var(--radius-sm)' }}>
            <BookOpen size={22} />
          </div>
          <span style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>{BRANDING.PRODUCT_NAME}</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="relative cursor-pointer group transition-colors"
              style={{ 
                fontSize: 'var(--text-sm)', 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                color: activeSection === link.to ? 'var(--color-primary)' : 'var(--text-muted)'
              }}
            >
              <span className="group-hover:text-[var(--color-primary)] transition-colors">{link.label}</span>
              <span className="absolute -bottom-2 left-0 h-0.5 transition-all bg-[var(--color-primary)]" style={{ width: activeSection === link.to ? '100%' : '0%', transitionDuration: 'var(--transition-default)' }}></span>
            </ScrollLink>
          ))}
          <button 
            onClick={() => navigate('/login/learner')}
            className="btn-primary" 
            style={{ padding: '12px 28px', marginLeft: '8px' }}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none bg-[var(--bg-secondary)] p-2" style={{ color: 'var(--text-main)', borderRadius: 'var(--radius-sm)' }} onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-6 px-8"
          >
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={toggleMobileMenu}
                className="py-4 border-b border-gray-50 last:border-none cursor-pointer transition-colors"
                style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: activeSection === link.to ? 'var(--color-primary)' : 'var(--text-main)' }}
              >
                {link.label}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
