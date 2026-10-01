import { motion } from 'framer-motion';
import { Container, SectionHeading } from './UI/Base';
import { experience } from '../data/experience';

export const Experience = () => {
  return (
    <section className="section-padding bg-[var(--bg-body)] border-y border-white/5">
      <Container>
        <SectionHeading 
          number="04" 
          title="Career trajectory."
          subtitle="A timeline of my professional journey, focusing on leadership, technical excellence and architectural growth."
        />

        <div className="max-w-3xl relative">
          {/* Vertical line connector */}
          <div className="absolute left-[5px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#3B82F6] via-white/5 to-white/5"></div>

          <div className="space-y-16">
            {experience.map((item, idx) => (
              <motion.div
                key={item.company + idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
                viewport={{ once: true, margin: "-30px" }}
                className="relative pl-12 group cursor-pointer"
              >
                {/* Timeline indicator */}
                <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full border border-white/10 bg-[#050505] z-10 group-hover:border-[#3B82F6] group-hover:scale-125 transition-all duration-300 ease-out">
                  <div className="absolute inset-0.5 rounded-full bg-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="relative group-hover:translate-x-1.5 transition-transform duration-300 ease-out">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase group-hover:text-[#3B82F6] transition-colors duration-300">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[#3B82F6] text-[11px] font-mono uppercase tracking-[0.2em] font-bold">
                          {item.company}
                        </span>
                        <span className="w-4 h-px bg-white/10"></span>
                        <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-[0.2em] font-bold">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[#94A3B8] text-[14px] leading-relaxed max-w-xl font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                  
                  {/* Subtle underline on hover */}
                  <div className="absolute -bottom-4 left-0 w-0 h-px bg-[#3B82F6]/30 group-hover:w-full transition-all duration-500 ease-out"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
