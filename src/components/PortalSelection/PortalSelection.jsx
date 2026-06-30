import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PORTALS } from '../../utils/constants';

const PortalSelection = () => {
  const navigate = useNavigate();

  const portals = [
    {
      id: PORTALS.LEARNER,
      title: 'Learner Portal',
      description: 'Access courses, assessments, and track your learning progress seamlessly.',
      icon: <BookOpen size={40} />,
      features: ['Access interactive course materials', 'Track learning progress', 'Download certificates']
    },
    {
      id: PORTALS.TRAINER,
      title: 'Trainer Portal',
      description: 'Manage curriculum, grade assignments, and view advanced analytics.',
      icon: <Users size={40} />,
      features: ['Manage curriculum and content', 'Grade assessments easily', 'View student analytics']
    },
    {
      id: PORTALS.CLIENT,
      title: 'Client Portal',
      description: 'Organization dashboard, compliance reports, and employee progress tracking.',
      icon: <Building2 size={40} />,
      features: ['Organization-wide dashboard', 'Generate compliance reports', 'Manage employee licenses']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section id="portals" className="section-padding">
      <div className="section-container">
        <div className="text-center">
          <span className="section-label">Access Gateways</span>
          <h2 className="section-title">Select Your Workspace</h2>
          <p className="section-subtitle mx-auto">
            Dedicated high-performance environments tailored specifically for the unique needs of your role.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 'var(--grid-gap)' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portals.map((portal) => (
            <motion.div 
              key={portal.id}
              className="card-base group overflow-hidden cursor-pointer flex flex-col relative"
              onClick={() => navigate(`/login/${portal.id.toLowerCase()}`)}
            >
              {/* Highlight Gradient on Hover */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity" style={{ transitionDuration: 'var(--transition-default)' }}></div>
              
              <div className="p-8 h-full flex flex-col flex-1">
                <div className="mb-8 flex items-center justify-between text-[var(--color-primary)]">
                  <div className="w-16 h-16 flex items-center justify-center bg-[var(--bg-secondary)] text-[var(--color-primary)] transition-transform group-hover:scale-110" style={{ borderRadius: 'var(--radius-sm)' }}>
                    {portal.icon}
                  </div>
                  <div className="w-10 h-10 border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all text-[var(--color-primary)]" style={{ borderRadius: 'var(--radius-full)' }}>
                    <ArrowRight size={20} />
                  </div>
                </div>
                
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>{portal.title}</h3>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', marginBottom: '32px' }}>{portal.description}</p>
                
                <div className="mt-auto">
                  <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Key Features</h4>
                  <ul className="space-y-3 mb-8">
                    {portal.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600" style={{ fontSize: 'var(--text-sm)' }}>
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-secondary)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="btn-primary w-full opacity-90 group-hover:opacity-100">
                    Login Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortalSelection;
