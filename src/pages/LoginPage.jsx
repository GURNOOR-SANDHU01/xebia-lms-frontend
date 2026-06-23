import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, ArrowLeft, BookOpen, Users, Building2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { PORTALS } from '../utils/constants';

const LoginPage = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Default to Learner if role is invalid
  const activeRole = Object.values(PORTALS).includes(role?.toUpperCase()) ? role.toUpperCase() : PORTALS.LEARNER;

  const roleConfig = {
    [PORTALS.LEARNER]: {
      title: 'Learner Portal',
      subtitle: 'Continue your learning journey.',
      icon: <BookOpen size={48} />,
      color: 'var(--color-primary)',
      bgTheme: 'from-[var(--color-primary)] to-[#4a1341]',
      quote: "The beautiful thing about learning is nobody can take it away from you."
    },
    [PORTALS.TRAINER]: {
      title: 'Trainer Portal',
      subtitle: 'Manage your curriculum and students.',
      icon: <Users size={48} />,
      color: 'var(--color-secondary)',
      bgTheme: 'from-[var(--color-secondary)] to-[#018076]',
      quote: "A good teacher can inspire hope, ignite the imagination, and instill a love of learning."
    },
    [PORTALS.CLIENT]: {
      title: 'Client Portal',
      subtitle: 'Oversee your organizational progress.',
      icon: <Building2 size={48} />,
      color: 'var(--color-accent)',
      bgTheme: 'from-[var(--color-accent)] to-[#cc4f00]',
      quote: "An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage."
    }
  };

  const config = roleConfig[activeRole];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      login(activeRole, 'Eureka'); // Mock user
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="flex w-full h-screen bg-[var(--bg-primary)] overflow-hidden">
      
      {/* Left Split: Dynamic Branding */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`hidden lg:flex flex-col justify-between w-1/2 p-16 text-white bg-gradient-to-br ${config.bgTheme} relative overflow-hidden`}
      >
        {/* Decorative Shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white opacity-5 mix-blend-overlay filter blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white opacity-5 mix-blend-overlay filter blur-3xl pointer-events-none"></div>

        <Link to="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors w-fit group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>Back to Website</span>
        </Link>

        <div>
          <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20 shadow-xl">
            {config.icon}
          </div>
          <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
            {config.title}
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.8)', maxWidth: '400px' }}>
            {config.subtitle}
          </p>
        </div>

        <div className="mt-16">
          <p style={{ fontSize: 'var(--text-xl)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.5, opacity: 0.9 }}>
            "{config.quote}"
          </p>
        </div>
      </motion.div>

      {/* Right Split: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 relative bg-[var(--bg-secondary)] lg:bg-[var(--bg-primary)]">
        
        {/* Mobile Back Button */}
        <Link to="/" className="lg:hidden absolute top-8 left-8 flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors w-fit group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>Back</span>
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md bg-white lg:bg-transparent p-8 lg:p-0 rounded-3xl lg:rounded-none shadow-xl lg:shadow-none border border-gray-100 lg:border-none"
        >
          <div className="text-center lg:text-left mb-10">
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              Welcome back
            </h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)' }}>
              Please enter your details to sign in.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px', display: 'block' }}>Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-base pl-12"
                  placeholder="name@organization.com"
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-main)' }}>Password</label>
                <a href="#" style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: config.color }} className="hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-base pl-12"
                  placeholder="••••••••"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 text-white transition-all shadow-md mt-8"
              style={{ 
                backgroundColor: config.color,
                padding: '16px 32px',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--text-base)',
                fontWeight: 700,
                opacity: isLoading ? 0.7 : 1,
                transform: isLoading ? 'scale(0.98)' : 'scale(1)'
              }}
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  Sign In to Dashboard
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 text-center lg:text-left">
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
              Don't have an account? <a href="#" style={{ fontWeight: 700, color: config.color }} className="hover:underline">Contact Administrator</a>
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default LoginPage;
