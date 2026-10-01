import { motion } from 'framer-motion';
import { Container, SectionHeading, Button, SectionDivider, Reveal } from '../components/UI/Base';
import { profile } from '../data/profile';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { FileText, Download } from 'lucide-react';

export const AboutPage = () => {
  return (
    <main className="bg-[var(--bg-body)] w-full max-w-full overflow-x-hidden min-h-screen">
      <Navbar />
      
      {/* About Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="text-[#3B82F6] font-mono text-[9px] tracking-[0.4em] uppercase mb-6">About the developer</div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[1.05] mb-8">
              Driven by <br />
              <span className="text-gradient">curiosity & code.</span>
            </h1>
          </motion.div>
        </Container>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3B82F6]/5 blur-[100px] -z-10"></div>
      </section>

      <SectionDivider />

      {/* Main Content */}
      <Reveal>
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-xl md:text-3xl font-bold uppercase tracking-tight">The Journey</h2>
                <div className="space-y-4 text-sm md:text-base text-[#94A3B8] leading-relaxed">
                  <p>
                    I'm Ubaid Ahmad, a Software Engineer and Web Developer dedicated to crafting high-performance digital products. My path in technology has been defined by a constant desire to understand how things work at a fundamental level.
                  </p>
                  <p>
                    With a focus on modern web ecosystems, I specialize in building scalable applications that combine technical excellence with intuitive user experiences. I believe that great software is not just about writing code, but about solving human problems.
                  </p>
                </div>
                
                <div className="pt-8 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[9px] font-mono text-[#64748B] uppercase tracking-widest mb-1">Location</h4>
                    <p className="text-base font-bold uppercase tracking-tight">{profile.location}</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-mono text-[#64748B] uppercase tracking-widest mb-1">Experience</h4>
                    <p className="text-base font-bold uppercase tracking-tight">4+ Years</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link to="/resume" className="inline-flex items-center gap-3 max-w-full">
                    <Button className="!px-4 sm:!px-6 !py-3 text-[11px] sm:text-[12px] flex items-center gap-2">
                      <FileText size={15} className="shrink-0" />
                      <span>Resume / CV</span>
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card p-2">
                  <div className="w-full h-full rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                    <img 
                      src="/src/assets/images/ubaid_portrait_professional_1790846384015.jpg" 
                      alt={profile.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </Reveal>

      <SectionDivider />
      <Footer />
    </main>
  );
};
