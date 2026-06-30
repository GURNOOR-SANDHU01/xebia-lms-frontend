import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Typography } from '../common/Typography';
import { Container } from '../common/Container';
import { SearchBar } from '../common/SearchBar';

const faqs = [
  { id: 1, question: "Can I enroll in multiple courses at once?", answer: "Yes, you can enroll in as many courses as you can manage. Our platform supports concurrent learning to help you accelerate your skill development." },
  { id: 2, question: "What kind of support can I get?", answer: "You get 24/7 access to our community forums, dedicated TAs for premium courses, and direct messaging with instructors." },
  { id: 3, question: "Are there any pre-requisites to the courses?", answer: "Pre-requisites vary by course. Beginners courses have no requirements, while advanced courses will list specific required knowledge on their details page." },
  { id: 4, question: "Are the courses self-paced?", answer: "Most of our courses are entirely self-paced, allowing you to learn on your own schedule. Some specialized cohorts may have fixed timelines." },
  { id: 5, question: "How will I receive my certificates?", answer: "Certificates are automatically generated and emailed to you upon successful completion of all course requirements." },
];

export const FAQSection = () => {
  const [openId, setOpenId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-[120px] bg-xebia-bg dark:bg-gray-900 relative z-10 transition-colors duration-300">
      <Container className="max-w-[800px]">
        {/* Header */}
        <div className="text-center mb-[48px]">
          <Typography variant="h2" className="mb-[16px] text-gray-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </Typography>
          <Typography variant="body" className="text-gray-600 dark:text-gray-400 text-[18px]">
            Everything you need to know about learning with us. Can't find the answer? Reach out to our support team.
          </Typography>
        </div>

        {/* Search */}
        <div className="mb-[64px]">
          <SearchBar 
            size="lg" 
            placeholder="Search for answers..." 
            onSearch={setSearchQuery} 
            className="shadow-soft hover:shadow-lifted transition-shadow duration-300"
          />
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-[16px]">
          <AnimatePresence initial={false}>
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-white dark:bg-gray-800 rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-xebia-purple/20 shadow-lifted' : 'border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-gray-600'
                  }`}
                >
                  <button 
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center gap-[16px] p-[24px] text-left focus:outline-none focus-visible:bg-gray-50 transition-colors"
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className={`flex items-center justify-center shrink-0 ${isOpen ? 'text-xebia-purple' : 'text-gray-400'}`}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                    
                    <Typography 
                      variant="h4" 
                      className={`font-[600] text-[16px] transition-colors duration-300 ${isOpen ? 'text-xebia-purple dark:text-xebia-light' : 'text-gray-900 dark:text-gray-200'}`}
                    >
                      {faq.question}
                    </Typography>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-[24px] pb-[24px] pl-[60px]">
                          <Typography variant="body" className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {faq.answer}
                          </Typography>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {filteredFaqs.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-12"
            >
              <Typography variant="body" className="text-gray-500 dark:text-gray-500">
                No results found for "{searchQuery}".
              </Typography>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
};
