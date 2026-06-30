import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Logo } from '../../components/common/Logo';
import { Typography } from '../../components/common/Typography';

const FloatingInput = ({ id, label, type = "text", icon: Icon }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-[16px] flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400 group-focus-within:text-xebia-purple transition-colors duration-300" />
      </div>
      <input
        id={id}
        type={type}
        placeholder=" "
        className="block w-full pl-[48px] pr-[16px] pt-[24px] pb-[8px] text-[15px] text-gray-900 bg-gray-50/50 border border-gray-200 rounded-2xl appearance-none focus:outline-none focus:bg-white focus:ring-4 focus:ring-xebia-purple/10 focus:border-xebia-purple peer shadow-sm transition-all duration-300"
      />
      <label 
        htmlFor={id} 
        className="absolute text-[14px] text-gray-500 duration-300 transform -translate-y-3 scale-75 top-[18px] z-10 origin-[0] left-[48px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-xebia-purple pointer-events-none font-[500]"
      >
        {label}
      </label>
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex w-full bg-xebia-bg overflow-hidden relative">
      
      {/* Decorative full-page background gradients (visible on mobile) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-xebia-purple/10 blur-[120px] rounded-full pointer-events-none lg:hidden" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-xebia-emerald/10 blur-[100px] rounded-full pointer-events-none lg:hidden" />

      {/* Left side full-cover Image (Desktop Only) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex lg:w-1/2 relative bg-xebia-dark overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1A0B17]/90 via-xebia-purple/60 to-transparent mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-xebia-dark/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
          alt="Students learning" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        
        {/* Left Side Content */}
        <div className="relative z-20 h-full w-full flex flex-col p-[64px]">
          <Logo className="h-10 text-white filter brightness-0 invert w-fit" />
          
          <div className="mt-auto mb-[64px] max-w-lg">
            <Typography variant="hero" className="text-white mb-[24px] leading-[1.1] tracking-tight text-[56px]">
              Accelerate your engineering journey.
            </Typography>
            <Typography variant="body" className="text-white/80 text-[18px] leading-relaxed">
              Join a global network of elite developers. Access enterprise-grade curriculum and hands-on environments built by industry experts.
            </Typography>
          </div>
          
          <div className="flex gap-2">
            <div className="w-12 h-1 bg-white rounded-full" />
            <div className="w-2 h-1 bg-white/30 rounded-full" />
            <div className="w-2 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Right side with Floating Glass Card */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-[24px] lg:p-[48px] relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", bounce: 0.2 }}
          className="w-full max-w-[440px]"
        >
          {/* Mobile Logo */}
          <div className="flex justify-center mb-[40px] lg:hidden">
            <Logo className="h-10" />
          </div>

          <div className="bg-white/80 backdrop-blur-2xl rounded-[32px] shadow-lifted border border-white p-[40px]">
            <div className="text-center mb-[32px]">
              <Typography variant="h3" className="mb-[8px] text-gray-900 tracking-tight text-[28px]">Welcome back</Typography>
              <Typography variant="body" className="text-gray-500 text-[15px]">Please enter your details to sign in.</Typography>
            </div>

            <button className="w-full flex items-center justify-center gap-[12px] px-[24px] py-[14px] bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-[600] text-[15px] text-gray-700 shadow-sm hover:shadow focus:outline-none focus:ring-4 focus:ring-gray-100 mb-[24px]">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign in with Google
            </button>

            <div className="relative mb-[24px]">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-[13px]">
                <span className="px-[16px] bg-white text-gray-400 font-[500]">Or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-[20px]">
              <FloatingInput 
                id="email"
                label="Email Address"
                type="email"
                icon={Mail}
              />
              
              <div className="space-y-[12px]">
                <FloatingInput 
                  id="password"
                  label="Password"
                  type="password"
                  icon={Lock}
                />
                
                <div className="flex justify-between items-center px-1">
                  <label className="flex items-center gap-[8px] cursor-pointer group">
                    <div className="relative flex items-center justify-center w-4 h-4 border border-gray-300 rounded focus-within:ring-2 focus-within:ring-xebia-purple/50 group-hover:border-xebia-purple transition-colors">
                      <input type="checkbox" className="absolute opacity-0 w-full h-full cursor-pointer peer" />
                      <svg className="w-3 h-3 text-white peer-checked:text-xebia-purple transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-[13px] font-[500] text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-[13px] font-[600] text-xebia-purple hover:text-xebia-dark transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="pt-[8px]">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full relative group overflow-hidden bg-xebia-purple text-white font-[600] py-[16px] rounded-2xl shadow-soft hover:shadow-lifted transition-all duration-300 flex items-center justify-center gap-[8px] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-[32px] text-center">
              <Typography variant="body" className="text-[14px] text-gray-500">
                Don't have an account?{' '}
                <a href="#" className="font-[600] text-xebia-purple hover:text-xebia-dark transition-colors">
                  Sign up for free
                </a>
              </Typography>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
