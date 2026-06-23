import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ portal, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network delay for effect
    setTimeout(() => {
      setIsLoading(false);
      // Log the user in with their portal role
      login(portal.id, 'Eureka');
      // Redirect to the dashboard
      navigate('/dashboard');
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden"
          style={{ borderRadius: 'var(--radius-lg)' }}
        >
          {/* Top colored bar */}
          <div className={`w-full h-2 bg-gradient-to-r ${portal.gradient}`}></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            style={{ borderRadius: 'var(--radius-sm)' }}
          >
            <X size={20} />
          </button>
          
          <div className="p-8">
            <div className={`w-14 h-14 bg-gray-50 flex items-center justify-center mb-6 ${portal.color}`} style={{ borderRadius: 'var(--radius-sm)' }}>
              {portal.icon}
            </div>
            
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              Welcome back
            </h3>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', marginBottom: '32px' }}>
              Sign in to your {portal.title} account
            </p>
            
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block mb-2 font-semibold text-[var(--text-main)]" style={{ fontSize: 'var(--text-sm)' }}>Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-base pl-11"
                    placeholder="name@organization.com"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-semibold text-[var(--text-main)]" style={{ fontSize: 'var(--text-sm)' }}>Password</label>
                  <a href="#" className={`text-sm font-bold hover:underline ${portal.color}`}>Forgot password?</a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input-base pl-11"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 text-white font-bold transition-all shadow-md mt-6"
                style={{ 
                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  padding: '16px 32px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--text-base)',
                  opacity: isLoading ? 0.7 : 1
                }}
                className={`w-full flex items-center justify-center gap-2 text-white font-bold transition-all shadow-md mt-6 bg-gradient-to-r ${portal.gradient}`}
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="px-8 py-5 bg-[var(--bg-secondary)] border-t border-gray-100 text-center">
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
              Don't have an account? <a href="#" className={`font-bold hover:underline ${portal.color}`}>Contact your administrator</a>
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LoginModal;
