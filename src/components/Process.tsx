import { motion } from 'framer-motion';
import { Container, SectionHeading } from './UI/Base';

export const Process = () => {
  const steps = [
    { name: 'Discover', desc: 'Understand the core domain problem and database/API requirements.' },
    { name: 'Plan', desc: 'Define schema architecture, responsive UI components, and API contracts.' },
    { name: 'Build', desc: 'Develop the full-stack system with clean, maintainable, type-safe code.' },
    { name: 'Test', desc: 'Verify role-based access, form validations, responsiveness, and performance.' },
    { name: 'Deploy', desc: 'Ship to production, configure automated CI/CD, and ensure 99.9% uptime.' },
  ];

  return (
    <section id="process" className="section-padding relative overflow-hidden bg-white">
      <Container>
        <SectionHeading 
          number="04" 
          title="Engineering Process."
          subtitle="A systematic, structured workflow that turns complex project requirements into reliable web applications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300 group ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="text-3xl font-mono font-extrabold text-slate-300 group-hover:text-blue-600 transition-colors mb-3">
                0{idx + 1}
              </div>
              <div>
                <h3 className="text-base font-bold mb-2 uppercase tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors">
                  {step.name}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
