import { motion } from 'framer-motion';
import { Container, SectionHeading } from './UI/Base';
import { profile } from '../data/profile';

export const Process = () => {
  const steps = [
    { name: 'Discover', desc: 'Understand the problem and requirements.' },
    { name: 'Plan', desc: 'Define structure, features and technical direction.' },
    { name: 'Build', desc: 'Develop the product with clean, maintainable code.' },
    { name: 'Test', desc: 'Check functionality, responsiveness and edge cases.' },
    { name: 'Launch', desc: 'Deploy, refine and hand over the finished product.' },
  ];

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute top-[20%] right-0 glow-bg opacity-5 bg-blue-500 pointer-events-none"></div>
      
      <Container>
        <SectionHeading 
          number="06" 
          title="Methodology."
          subtitle="My approach is systematic, transparent, and results-oriented. I follow a proven workflow to ensure every project is a success."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative pt-12 group cursor-pointer ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="absolute top-0 left-0 text-5xl font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter group-hover:text-[#3B82F6]/10 transition-colors duration-700">
                0{idx + 1}
              </div>
              <div className="relative z-10">
                <h3 className="text-base font-bold mb-3 uppercase tracking-tight group-hover:text-[#3B82F6] transition-colors duration-700 leading-none">
                  {step.name}
                </h3>
                <p className="text-[#64748B] text-[12px] leading-relaxed font-medium group-hover:text-[#94A3B8] transition-colors duration-700">
                  {step.desc}
                </p>
              </div>
              <div className="absolute bottom-[-10px] left-0 h-px w-0 bg-[#3B82F6]/30 group-hover:w-full transition-all duration-1000"></div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
