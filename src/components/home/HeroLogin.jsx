import React from 'react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { Typography } from '../common/Typography';
import { useNavigate } from 'react-router-dom';

export const HeroLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Navigate to dashboard on successful login
    navigate('/dashboard');
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-white relative">

      {/* Mobile-only Top Banner (Matches the 3rd screen in design) */}
      <div className="lg:hidden w-full flex flex-col items-center p-6 bg-gray-50/50">
        <div className="w-full flex justify-center mb-8">
          <Logo className="h-10" />
        </div>
        
        <div className="bg-gradient-to-b from-[#84117C] to-[#6C1D5F] rounded-3xl p-8 w-full max-w-sm text-center shadow-lg relative overflow-hidden flex flex-col items-center">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
          
          {/* Custom Illustration SVG placeholder (Books & Graduation Cap) */}
          <div className="mb-6 relative z-10 w-32 h-32 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 70 L80 70 L80 80 L20 80 Z" fill="#4A1E47"/>
              <path d="M25 60 L75 60 L75 70 L25 70 Z" fill="#01AC9F"/>
              <path d="M50 25 L85 40 L50 55 L15 40 Z" fill="#3B82F6"/>
              <path d="M50 35 L50 65" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 2"/>
              <path d="M85 40 L85 60" stroke="#FFFFFF" strokeWidth="2"/>
              <circle cx="85" cy="65" r="3" fill="#FF6200"/>
              <path d="M50 25 L50 20 L45 20" stroke="#FFFFFF" strokeWidth="2"/>
            </svg>
          </div>

          <Typography variant="h3" className="text-white mb-2 relative z-10">
            Welcome to Xebia!
          </Typography>
          <Typography variant="small" className="text-white/80 mb-6 block relative z-10">
            Sign in to your account
          </Typography>
          
          <button className="w-full bg-white text-[#6C1D5F] font-bold py-3 rounded-xl shadow-md hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative z-10 focus:outline-none focus:ring-2 focus:ring-white/50">
            Get Started
          </button>
        </div>
      </div>

      {/* Left side Image (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-xebia-dark flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-xebia-purple/80 to-transparent mix-blend-multiply z-10" />
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
          alt="Students learning" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center p-12 text-center text-white">
          <h1 className="text-6xl font-black tracking-tighter transform -rotate-90 origin-left opacity-30 drop-shadow-xl select-none">
            XEBIA
          </h1>
        </div>
      </div>

      {/* Right side Login Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-white z-20 shadow-[-20px_0_40px_-10px_rgba(0,0,0,0.1)] rounded-t-3xl lg:rounded-none -mt-6 lg:mt-0 relative w-full">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <div className="hidden lg:flex justify-center mb-6">
              <Logo className="h-12" />
            </div>
            <Typography variant="h2" className="tracking-tight uppercase lg:block hidden">Welcome Back!</Typography>
            <Typography variant="body" className="text-sm lg:block hidden">Sign in to your account.</Typography>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 mt-4 lg:mt-8">
            <Input 
              id="email"
              label="Email"
              type="email"
              placeholder="Firstname.Last"
            />
            <div>
              <Input 
                id="password"
                label="Password"
                type="password"
                placeholder="********"
              />
              <div className="flex justify-end mt-1">
                <a href="#" className="text-xs text-xebia-purple hover:underline">Forgot your Password?</a>
              </div>
            </div>

            <Button type="submit" variant="primary" className="w-full shadow-lg shadow-xebia-purple/20 h-12">
              Login
            </Button>
          </form>

          <div className="relative mt-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium text-sm hover:border-gray-300 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an Account? <a href="#" className="text-xebia-purple font-semibold hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </section>
  );
};
