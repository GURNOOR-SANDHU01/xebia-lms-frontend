import React from 'react';
import { BookOpen, ArrowRight, MessageCircle, Globe, AtSign, Share2 } from 'lucide-react';
import { BRANDING } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-[var(--text-muted)] border-t border-gray-800" style={{ paddingTop: 'var(--spacing-footer)', paddingBottom: 'var(--spacing-footer)' }}>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-primary)] text-white" style={{ borderRadius: 'var(--radius-sm)' }}>
                <BookOpen size={22} />
              </div>
              <span style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'white' }}>{BRANDING.PRODUCT_NAME}</span>
            </div>
            <p style={{ fontSize: 'var(--text-base)', marginBottom: '32px', maxWidth: '350px' }}>
              Empowering organizations with next-generation learning and training solutions. Built for performance, designed for scale.
            </p>
            
            <div className="mb-6">
              <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'white', marginBottom: '16px' }}>Subscribe to our newsletter</h4>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input-base"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', borderColor: 'transparent' }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0 24px' }}>
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'white', textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '0.05em' }}>Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Learner Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trainer Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Client Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'white', textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '0.05em' }}>Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
            </ul>
          </div>

          {/* Quick Links Column 3 */}
          <div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'white', textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '0.05em' }}>Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontSize: 'var(--text-sm)' }}>
            &copy; {currentYear} {BRANDING.PRODUCT_NAME}. All rights reserved. <span className="ml-2 text-gray-600">v2.4.1</span>
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors" style={{ borderRadius: 'var(--radius-full)' }}>
              <MessageCircle size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors" style={{ borderRadius: 'var(--radius-full)' }}>
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors" style={{ borderRadius: 'var(--radius-full)' }}>
              <AtSign size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors" style={{ borderRadius: 'var(--radius-full)' }}>
              <Share2 size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
