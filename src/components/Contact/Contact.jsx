import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! We will get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 lg:pr-10"
          >
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">We're here to help.</h2>
            <p className="section-subtitle">
              Have questions about integration, pricing, or technical support? Our dedicated team is ready to assist you.
            </p>
            
            <div className="space-y-6">
              <div className="card-base p-6 flex flex-row items-center gap-6" style={{ height: 'auto' }}>
                <div className="w-14 h-14 bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--color-primary)] flex-shrink-0" style={{ borderRadius: 'var(--radius-sm)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>Email Support</h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>support@xebialms.com</p>
                </div>
              </div>
              
              <div className="card-base p-6 flex flex-row items-center gap-6" style={{ height: 'auto' }}>
                <div className="w-14 h-14 bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--color-primary)] flex-shrink-0" style={{ borderRadius: 'var(--radius-sm)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>Phone Inquiry</h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="card-base p-6 flex flex-row items-center gap-6" style={{ height: 'auto' }}>
                <div className="w-14 h-14 bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--color-primary)] flex-shrink-0" style={{ borderRadius: 'var(--radius-sm)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>Headquarters</h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>123 Learning Ave, Innovation City</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 card-base p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-primary)]"></div>
            
            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-main)', marginBottom: '32px' }}>Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px', display: 'block' }}>Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-base"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px', display: 'block' }}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-base"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px', display: 'block' }}>Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="input-base resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="btn-primary w-full mt-4"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
