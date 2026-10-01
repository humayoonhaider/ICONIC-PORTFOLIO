import { motion } from 'framer-motion';
import { Container, SectionHeading, Button } from './UI/Base';
import { profile } from '../data/profile';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-30px" }}
          >
            <SectionHeading 
              number="01" 
              title="A legacy of code & craftsmanship."
              subtitle="I care about how software works — and how it feels. My focus is on creating digital experiences that are as technically sound as they are aesthetically pleasing."
            />
            <div className="space-y-8">
              <p className="text-[13px] leading-relaxed max-w-md font-medium">
                {profile.bio}
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
                <div className="group cursor-pointer">
                  <h4 className="text-white font-bold mb-2 uppercase text-[9px] tracking-widest group-hover:text-[#3B82F6] transition-colors duration-300">Focus</h4>
                  <p className="text-[11px] font-mono uppercase text-[#64748B]">Software Architecture</p>
                </div>
                <div className="group cursor-pointer">
                  <h4 className="text-white font-bold mb-2 uppercase text-[9px] tracking-widest group-hover:text-[#3B82F6] transition-colors duration-300">Philosophy</h4>
                  <p className="text-[11px] font-mono uppercase text-[#64748B]">Clean • Resilient • Efficient</p>
                </div>
              </div>
              
              <div className="pt-6 flex flex-wrap gap-3 sm:gap-4 items-center">
                <Link to="/about" className="inline-flex items-center gap-3 group">
                  <Button variant="outline" className="group-hover:border-[#3B82F6] transition-all !px-4 sm:!px-5 !py-2.5">
                    More about me
                  </Button>
                </Link>
                <Link to="/resume" className="inline-flex items-center gap-2 group">
                  <Button variant="secondary" className="border-white/10 hover:border-[#3B82F6] text-white flex items-center gap-2 !px-4 sm:!px-5 !py-2.5">
                    <FileText size={14} className="text-[#3B82F6]" />
                    <span>Resume / CV</span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-30px" }}
            className="relative overflow-hidden sm:overflow-visible"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden border border-white/5 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 ease-out group cursor-pointer">
              <img 
                src="/src/assets/images/ubaid_portrait_professional_1790846384015.jpg" 
                alt={profile.name}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Decorative editorial elements */}
            <div className="absolute bottom-2 right-2 sm:-bottom-8 sm:-right-8 text-5xl sm:text-8xl font-black text-white/5 select-none pointer-events-none uppercase">
              UA
            </div>
            <div className="absolute top-0 left-0 sm:-top-12 sm:-left-12 w-32 sm:w-48 h-32 sm:h-48 bg-[#3B82F6]/5 blur-[50px] sm:blur-[80px] -z-10 pointer-events-none"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
