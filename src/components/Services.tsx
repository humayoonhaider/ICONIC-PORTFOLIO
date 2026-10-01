import { motion } from 'framer-motion';
import { Container, SectionHeading } from './UI/Base';
import { services } from '../data/services';

export const Services = () => {
  return (
    <section className="section-padding bg-[var(--bg-body)] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 glow-bg opacity-10 pointer-events-none"></div>
      
      <Container>
        <SectionHeading 
          number="05" 
          title="Areas of impact."
          subtitle="I specialize in building end-to-end digital experiences. Whether you need a simple landing page or a complex web application, I've got you covered."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-sm glass-card border-white/5 group cursor-pointer"
            >
              <div className="text-[#3B82F6] font-mono text-[8px] mb-6 tracking-[0.5em] uppercase font-black opacity-60 group-hover:opacity-100 transition-opacity">
                Capability {service.id}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase group-hover:text-[#3B82F6] transition-colors duration-700 leading-none">
                {service.title}
              </h3>
              <p className="text-[#94A3B8] text-[13px] leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                {service.description}
              </p>
              
              <div className="mt-10 h-px w-0 bg-[#3B82F6] group-hover:w-full transition-all duration-1000"></div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
