import { motion } from 'framer-motion';
import { Container, Button } from './UI/Base';
import { profile } from '../data/profile';
import { ArrowDownRight, Phone, Mail, MapPin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechBadge = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 8 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    whileHover={{ y: -2, scale: 1.02 }}
    transition={{ 
      duration: 0.3, 
      delay, 
      ease: [0.22, 1, 0.36, 1] 
    }}
    className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-slate-200 bg-white shadow-xs text-slate-800 text-[11px] sm:text-xs font-semibold cursor-default hover:border-blue-500 hover:text-blue-600 transition-colors"
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  const coreTech = [
    { name: "React.js" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "PHP & WordPress" },
    { name: "Tailwind CSS" }
  ];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-20 sm:pt-28 pb-12 sm:pb-20 overflow-hidden w-full max-w-full bg-white">
      {/* Background Soft Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 sm:right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/5 rounded-full blur-[80px] sm:blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 sm:left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/5 rounded-full blur-[90px] sm:blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0F172A 0.75px, transparent 0.75px)', backgroundSize: '20px 20px' }}></div>
      </div>

      <Container className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto md:mx-0">
          {/* Availability pill & Role tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{profile.availability}</span>
            </div>

            <div className="text-slate-500 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase font-bold">
              Fullstack Web Developer · 3+ Years Exp
            </div>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight uppercase leading-[1.02] sm:leading-[0.95] mb-4 sm:mb-6 text-slate-950 break-words"
          >
            Crafting Scalable <br />
            <span className="text-gradient">Web Architecture.</span>
          </motion.h1>

          {/* Bio statement */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed mb-6 sm:mb-8 font-normal"
          >
            {profile.bio}
          </motion.p>

          {/* Direct Contact Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-6 sm:mb-8 text-xs font-mono text-slate-600"
          >
            <a 
              href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`} 
              className="inline-flex items-center gap-1.5 font-bold text-slate-800 hover:text-blue-600 transition-colors"
            >
              <Phone size={14} className="text-blue-600 shrink-0" />
              <span>{profile.phone}</span>
            </a>

            <span className="text-slate-300 hidden sm:inline">|</span>

            <a 
              href={`mailto:${profile.email}`} 
              className="inline-flex items-center gap-1.5 font-bold text-slate-800 hover:text-blue-600 transition-colors break-all"
            >
              <Mail size={14} className="text-blue-600 shrink-0" />
              <span>{profile.email}</span>
            </a>

            <span className="text-slate-300 hidden sm:inline">|</span>

            <div className="inline-flex items-center gap-1.5 text-slate-600">
              <MapPin size={14} className="text-blue-600 shrink-0" />
              <span>{profile.location}</span>
            </div>
          </motion.div>

          {/* Core Tech Stack Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10"
          >
            {coreTech.map((tech, i) => (
              <TechBadge key={tech.name} delay={0.3 + i * 0.04}>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>{tech.name}</span>
              </TechBadge>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Button 
              variant="primary" 
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto !py-3 !px-6"
            >
              <span>Explore Projects</span>
              <ArrowDownRight size={16} />
            </Button>

            <Link to="/resume" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-slate-300 hover:border-blue-600 bg-white hover:bg-blue-50/50 text-slate-800 hover:text-blue-600 text-[11px] font-bold tracking-wider uppercase transition-all duration-200 shadow-xs">
                <FileText size={15} className="text-blue-600 shrink-0" />
                <span>View Full CV (White)</span>
              </button>
            </Link>

            <Button 
              variant="secondary" 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto !py-3 !px-6"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
