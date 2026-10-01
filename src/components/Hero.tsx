import { motion } from 'framer-motion';
import { Container, Button } from './UI/Base';
import { profile } from '../data/profile';
import { ArrowDownRight, Globe, Cpu, Layers, Code2, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroTechnicalAbstract from '../assets/images/hero_technical_abstract_1790846301737.jpg';

const TechBadge = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 8 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    whileHover={{ y: -2, scale: 1.04 }}
    transition={{ 
      duration: 0.5, 
      delay, 
      ease: [0.22, 1, 0.36, 1] 
    }}
    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm cursor-default hover:border-[#3B82F6]/40 hover:bg-white/[0.05] transition-colors"
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  const coreTech = [
    { name: "React", color: "text-blue-400" },
    { name: "TypeScript", color: "text-blue-500" },
    { name: "Node.js", color: "text-green-500" },
    { name: "Tailwind", color: "text-cyan-400" },
    { name: "Next.js", color: "text-white" }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden w-full max-w-full">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-body)]"></div>
        
        {/* Abstract Image with better mask */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-4/5 opacity-20 grayscale pointer-events-none">
          <img 
            src={heroTechnicalAbstract || "/images/hero_technical_abstract.jpg"} 
            alt="Technical Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.fallbackTried) {
                target.dataset.fallbackTried = 'true';
                target.src = '/images/hero_technical_abstract.jpg';
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--bg-body)]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-body)] via-transparent to-[var(--bg-body)]"></div>
        </div>

        {/* Floating Decorative Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[15%] text-[#3B82F6]/20 hidden lg:block"
        >
          <Cpu size={120} strokeWidth={0.5} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[10%] text-[#3B82F6]/10 hidden lg:block"
        >
          <Layers size={180} strokeWidth={0.5} />
        </motion.div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-[#3B82F6]"></span>
              <span className="text-[10px] font-mono text-[#3B82F6] tracking-[0.5em] uppercase font-black">
                {profile.role}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 uppercase text-balance">
              Building <br />
              <span className="text-gradient">The Future</span> <br />
              of the web.
            </h1>

            <p className="text-[14px] sm:text-[15px] text-[#94A3B8] max-w-lg leading-relaxed mb-10 text-balance font-medium">
              Software Engineer specializing in building scalable, high-performance digital systems. Focused on clean architecture and crafting experiences that feel as good as they function.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-6 items-center mb-12 sm:mb-16">
              <Link to="/#projects">
                <Button className="!px-6 sm:!px-8 !py-3.5 sm:!py-4 text-[11px] sm:text-[12px]">Explore Portfolio</Button>
              </Link>
              <Link to="/resume">
                <Button variant="outline" className="!px-5 sm:!px-6 !py-3.5 sm:!py-4 text-[11px] sm:text-[12px] flex items-center gap-2 border-white/10 hover:border-[#3B82F6]">
                  <FileText size={15} className="text-[#3B82F6]" />
                  <span>Resume / CV</span>
                </Button>
              </Link>
              <Link to="/#contact" className="group flex items-center gap-2 py-2">
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#64748B] group-hover:text-[#3B82F6] transition-colors uppercase font-black">
                  Start a project
                </span>
                <ArrowDownRight size={14} className="text-[#3B82F6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            {/* Core Stack Highlights */}
            <div className="pt-10 border-t border-white/5">
              <p className="text-[9px] font-mono text-[#64748B] uppercase tracking-[0.4em] mb-6 font-black">Core Technical Stack</p>
              <div className="flex flex-wrap gap-4">
                {coreTech.map((tech, i) => (
                  <TechBadge key={tech.name} delay={0.5 + i * 0.1}>
                    <span className={`w-1.5 h-1.5 rounded-full ${tech.color.replace('text-', 'bg-')}`}></span>
                    <span className="text-[10px] font-bold tracking-tighter text-[#F5F7FA]">{tech.name}</span>
                  </TechBadge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side Visual - Large Code/Abstract Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block flex-1 relative"
          >
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-4 bg-[#3B82F6]/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
              <div className="relative aspect-square max-w-md mx-auto glass-card rounded-2xl flex items-center justify-center p-12 overflow-hidden border-[#3B82F6]/20">
                <Code2 size={240} className="text-[#3B82F6]/20 group-hover:text-[#3B82F6]/40 transition-colors duration-1000" strokeWidth={0.5} />
                
                {/* Floating Micro Labels */}
                <div className="absolute top-10 left-10 flex items-center gap-2">
                  <Globe size={14} className="text-[#3B82F6]" />
                  <span className="text-[8px] font-mono text-[#64748B] tracking-widest uppercase">Global Systems</span>
                </div>
                
                <div className="absolute bottom-10 right-10 text-right">
                  <p className="text-[8px] font-mono text-[#64748B] tracking-widest uppercase mb-1">Architecture</p>
                  <p className="text-[12px] font-bold text-white uppercase tracking-tighter">Scalable Solution</p>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-transparent via-[#3B82F6]/5 to-transparent rotate-45 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-12 w-px h-full bg-gradient-to-b from-white/5 via-white/10 to-transparent hidden md:block"></div>
      <div className="absolute top-0 right-12 w-px h-full bg-gradient-to-b from-white/5 via-white/10 to-transparent hidden xl:block"></div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-40 animate-bounce">
        <ArrowDownRight size={24} className="rotate-45 text-[#3B82F6]" />
      </div>
    </section>
  );
};
