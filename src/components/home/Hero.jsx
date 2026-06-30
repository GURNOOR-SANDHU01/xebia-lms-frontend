import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative w-[100vw] h-[calc(100vh-72px)] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden flex items-center justify-center lg:justify-end px-4 sm:px-12 lg:px-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://www.glassdoor.co.in/imgproxy/sYMsb8yDiOmzS9inL97JYfe9rfwu8dD7Q-grixje260/rs::558/aHR0cHM6Ly9tZWRpYS5nbGFzc2Rvb3IuY29tL2wvZGYvZWMvZTEvMzMvb2ZmaWNlLmpwZz9zaWduYXR1cmU9ZTUzNWQ0NzlmOTRlMWQyYmViMjM5MzEwMmU5MGE0NTQ4Y2UwNDkwNGY1NzhkOGI0Y2VlZDgxZjkwNjMxYmFlNg")' }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Login Card */}
      <motion.div 
        className="relative z-10 w-full max-w-[440px] bg-white dark:bg-gray-900 rounded-lg p-8 sm:p-10 shadow-2xl mr-0 lg:mr-16 border border-transparent dark:border-gray-800"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
           {/* In absence of the specific Xebia SVG, using text logo that looks like it */}
           <h1 className="text-3xl font-bold text-xebia-purple">Xebia</h1>
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">Welcome Back!</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Sign in to your account</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
            <input 
              type="email" 
              placeholder="Enter your Email"
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:border-xebia-purple focus:ring-1 focus:ring-xebia-purple bg-gray-50/50 dark:bg-gray-800 text-gray-900 dark:text-white text-[14px]"
            />
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Password</label>
            <input 
              type="password" 
              placeholder="Enter your Password"
              className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:border-xebia-purple focus:ring-1 focus:ring-xebia-purple bg-gray-50/50 dark:bg-gray-800 text-gray-900 dark:text-white text-[14px]"
            />
          </div>
          
          <button 
            type="button"
            className="w-full bg-xebia-purple text-white py-3 rounded-md font-[600] hover:bg-xebia-purple/90 transition-colors mt-2 text-[15px] shadow-md shadow-xebia-purple/20"
          >
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center space-x-3">
          <div className="h-[1px] bg-gray-200 dark:bg-gray-700 flex-1"></div>
          <span className="text-[13px] font-[700] text-gray-800 dark:text-gray-400">OR</span>
          <div className="h-[1px] bg-gray-200 dark:bg-gray-700 flex-1"></div>
        </div>

        <button 
          className="w-full mt-6 flex items-center justify-center gap-3 border border-gray-200 dark:border-gray-700 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-[600] text-[14px] text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <div className="mt-8 text-center text-[13px] text-gray-600 dark:text-gray-400 font-[500]">
          Don't have account? <a href="#" className="text-xebia-purple dark:text-xebia-light font-[700] hover:underline ml-1">Sign Up</a>
        </div>
      </motion.div>
    </section>
  );
};
