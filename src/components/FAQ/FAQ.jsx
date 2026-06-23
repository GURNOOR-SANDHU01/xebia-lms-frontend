import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I access my assigned courses?",
      answer: "You can access all your assigned courses by logging into the Learner Portal. Your dashboard will display all active and pending courses. Simply click on a course card to begin your modules, video lessons, and interactive assessments."
    },
    {
      question: "What should I do if I forgot my password?",
      answer: "Click on the 'Forgot Password' link on the login modal. An email with reset instructions will be sent to your registered email address securely. For security reasons, the link will expire after 24 hours."
    },
    {
      question: "Are certificates provided upon completion?",
      answer: "Yes, upon successfully completing a course and its required assessments, a verifiable digital certificate is automatically generated. You can download this from your portal as a PDF or export it directly to your LinkedIn profile."
    },
    {
      question: "How can clients track employee progress?",
      answer: "The Client Portal provides a comprehensive dashboard with real-time analytics, progress reports, and completion metrics for all enrolled employees. Managers can filter data by department and generate exportable CSV/PDF reports."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="section-container" style={{ maxWidth: '800px' }}>
        <div className="text-center">
          <span className="section-label">Support</span>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-subtitle mx-auto">
            Find everything you need to know about navigating the platform, managing your account, and accessing resources.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className="bg-white border transition-all"
                style={{ 
                  borderRadius: 'var(--radius-md)', 
                  borderColor: isOpen ? 'var(--color-primary)' : 'rgba(0,0,0,0.1)',
                  boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
                  transitionDuration: 'var(--transition-default)'
                }}
              >
                <button 
                  className="w-full px-8 py-6 flex items-center justify-between focus:outline-none text-left group"
                  onClick={() => toggleFAQ(index)}
                >
                  <span style={{ fontSize: 'var(--text-lg)', fontWeight: 700, transition: 'var(--transition-default)', color: isOpen ? 'var(--color-primary)' : 'var(--text-main)' }} className="group-hover:text-[var(--color-primary)]">
                    {faq.question}
                  </span>
                  <div className="flex items-center justify-center flex-shrink-0 transition-transform" style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-full)', backgroundColor: isOpen ? 'var(--color-primary)' : 'var(--bg-secondary)', color: isOpen ? 'white' : 'var(--text-muted)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transitionDuration: 'var(--transition-default)' }}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0 border-t" style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', borderColor: 'rgba(0,0,0,0.05)', marginTop: '8px', paddingTop: '24px' }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
