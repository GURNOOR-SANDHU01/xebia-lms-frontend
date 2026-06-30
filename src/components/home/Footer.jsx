import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Typography } from '../common/Typography';
import { Logo } from '../common/Logo';

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0B] text-white py-[80px] px-8 rounded-3xl mt-[64px] mb-[32px] md:mb-[0px] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-xebia-purple/20 blur-[120px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-xebia-emerald/10 blur-[100px] rounded-full pointer-events-none -z-0" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[64px] lg:gap-[32px]">
        
        {/* Newsletter / Brand Column (Spans 2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-[32px]">
          <Logo className="h-8 text-white filter brightness-0 invert" />
          <div>
            <Typography variant="h4" className="text-white mb-2 font-[500] text-[18px]">
              Subscribe to our newsletter
            </Typography>
            <Typography variant="small" className="text-gray-400 mb-4 block text-[14px]">
              Get the latest updates on new courses, features, and engineering resources.
            </Typography>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white focus:outline-none focus:border-xebia-purple focus:ring-1 focus:ring-xebia-purple transition-all"
              />
              <button className="bg-white text-black px-4 rounded-xl font-[600] flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-[20px]">
          <Typography variant="body" className="text-white font-[600] text-[15px]">Company</Typography>
          <div className="flex flex-col gap-[16px]">
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-[14px]">About Us</Link>
            <Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-[14px]">Careers</Link>
            <Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-[14px]">Blog</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-[14px]">Contact</Link>
          </div>
        </div>

        {/* Resources Column */}
        <div className="flex flex-col gap-[20px]">
          <Typography variant="body" className="text-white font-[600] text-[15px]">Resources</Typography>
          <div className="flex flex-col gap-[16px]">
            <Link to="/courses" className="text-gray-400 hover:text-white transition-colors text-[14px]">All Courses</Link>
            <Link to="/learning-paths" className="text-gray-400 hover:text-white transition-colors text-[14px]">Learning Paths</Link>
            <Link to="/community" className="text-gray-400 hover:text-white transition-colors text-[14px]">Community</Link>
            <Link to="/events" className="text-gray-400 hover:text-white transition-colors text-[14px]">Events</Link>
          </div>
        </div>

        {/* Support Column */}
        <div className="flex flex-col gap-[20px]">
          <Typography variant="body" className="text-white font-[600] text-[15px]">Support</Typography>
          <div className="flex flex-col gap-[16px]">
            <Link to="/help" className="text-gray-400 hover:text-white transition-colors text-[14px]">Help Center</Link>
            <Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-[14px]">FAQ</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-[14px]">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-[14px]">Privacy Policy</Link>
          </div>
        </div>

        {/* Socials Column */}
        <div className="flex flex-col gap-[20px]">
          <Typography variant="body" className="text-white font-[600] text-[15px]">Socials</Typography>
          <div className="flex flex-col gap-[16px]">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-[14px]">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-[14px]">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-[14px]">
              GitHub
            </a>
          </div>
        </div>

      </div>

      {/* Soft Divider & Copyright */}
      <div className="relative z-10 mt-[80px] pt-[32px] border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <Typography variant="small" className="text-gray-500 text-[13px]">
          © {new Date().getFullYear()} Xebia Academy. All rights reserved.
        </Typography>
        <div className="flex gap-6">
          <Link to="/terms" className="text-gray-500 hover:text-white transition-colors text-[13px]">Terms</Link>
          <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors text-[13px]">Privacy</Link>
          <Link to="/cookies" className="text-gray-500 hover:text-white transition-colors text-[13px]">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};
