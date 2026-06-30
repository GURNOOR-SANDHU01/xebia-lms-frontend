import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';
import { Container } from '../common/Container';

const FloatingInput = ({ id, label, type = "text", rows }) => {
  const isTextarea = type === 'textarea';
  const Component = isTextarea ? 'textarea' : 'input';
  
  return (
    <div className="relative">
      <Component
        id={id}
        type={isTextarea ? undefined : type}
        rows={rows}
        placeholder=" "
        className={`block w-full px-[20px] ${isTextarea ? 'pt-[28px] pb-[16px]' : 'pt-[24px] pb-[8px]'} text-[16px] text-gray-900 dark:text-white bg-gray-50/50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl appearance-none focus:outline-none focus:bg-white dark:focus:bg-gray-900 focus:ring-4 focus:ring-xebia-purple/10 focus:border-xebia-purple peer shadow-sm transition-all duration-300 ${isTextarea ? 'resize-none' : ''}`}
      />
      <label 
        htmlFor={id} 
        className="absolute text-[15px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-[18px] z-10 origin-[0] left-[20px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-xebia-purple pointer-events-none font-[500]"
      >
        {label}
      </label>
    </div>
  );
};

export const ContactSection = () => {
  return (
    <section className="py-[120px] bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] lg:gap-[120px] items-center">
          
          {/* Left Side: Info */}
          <div className="flex flex-col gap-[32px]">
            <div>
              <Typography variant="small" className="text-xebia-purple font-[700] tracking-wider uppercase mb-4 block">
                Get in Touch
              </Typography>
              <Typography variant="h1" className="text-gray-900 dark:text-white mb-[24px] tracking-tight">
                Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-xebia-purple to-xebia-dark dark:to-xebia-light">incredible</span> together.
              </Typography>
              <Typography variant="body" className="text-gray-600 dark:text-gray-400 text-[18px] leading-relaxed">
                Whether you have a question about our enterprise solutions, need technical support, or just want to say hi, our world-class team is ready to help you out.
              </Typography>
            </div>

            <div className="flex flex-col gap-[16px] mt-[16px]">
              {/* Contact Card 1 */}
              <div className="flex items-center gap-[20px] p-[24px] bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-[56px] h-[56px] rounded-2xl bg-xebia-purple/10 text-xebia-purple flex items-center justify-center shrink-0">
                  <Mail className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <Typography variant="body" className="text-gray-500 dark:text-gray-400 font-[500] text-[14px]">Chat with us</Typography>
                  <Typography variant="h4" className="text-gray-900 dark:text-white font-[600] text-[18px] mt-1">hello@xebia.com</Typography>
                </div>
              </div>

              {/* Contact Card 2 */}
              <div className="flex items-center gap-[20px] p-[24px] bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-[56px] h-[56px] rounded-2xl bg-xebia-emerald/10 text-xebia-emerald flex items-center justify-center shrink-0">
                  <Phone className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <Typography variant="body" className="text-gray-500 dark:text-gray-400 font-[500] text-[14px]">Call us anytime</Typography>
                  <Typography variant="h4" className="text-gray-900 dark:text-white font-[600] text-[18px] mt-1">+1 (555) 000-0000</Typography>
                </div>
              </div>

              {/* Contact Card 3 */}
              <div className="flex items-center gap-[20px] p-[24px] bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-[56px] h-[56px] rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <Typography variant="body" className="text-gray-500 dark:text-gray-400 font-[500] text-[14px]">Visit our HQ</Typography>
                  <Typography variant="h4" className="text-gray-900 dark:text-white font-[600] text-[18px] mt-1">100 Tech Hub, Silicon Valley</Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Beautiful Form Card */}
          <div className="relative w-full">
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-xebia-purple/20 blur-[100px] rounded-full pointer-events-none -z-10" />
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl p-[40px] rounded-[32px] shadow-lifted border border-white dark:border-gray-700 relative z-10 transition-colors duration-300">
              <Typography variant="h3" className="text-gray-900 dark:text-white mb-[8px]">
                Send us a message
              </Typography>
              <Typography variant="body" className="text-gray-500 dark:text-gray-400 mb-[32px] text-[15px]">
                Fill out the form and our team will get back to you within 24 hours.
              </Typography>

              <form className="space-y-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <FloatingInput id="firstName" label="First Name" />
                  <FloatingInput id="lastName" label="Last Name" />
                </div>
                
                <FloatingInput id="email" type="email" label="Email Address" />
                <FloatingInput id="company" label="Company (Optional)" />
                <FloatingInput id="message" type="textarea" rows={4} label="How can we help?" />

                <div className="pt-[16px]">
                  <button 
                    type="button" 
                    className="w-full relative group overflow-hidden bg-gradient-to-r from-xebia-purple via-xebia-dark to-xebia-purple bg-[length:200%_auto] hover:bg-[center_right_1rem] text-white font-[600] py-[18px] rounded-2xl shadow-soft hover:shadow-lifted transition-all duration-500 flex items-center justify-center gap-[8px]"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
