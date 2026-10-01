import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, SectionHeading } from '../components/UI/Base';
import { projects } from '../data/projects';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = projects.map(p => p.category);
    return ['All', ...Array.from(new Set(cats))];
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="bg-[var(--bg-body)] w-full max-w-full overflow-x-hidden min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-48 md:pb-12 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="text-[#3B82F6] font-mono text-[9px] tracking-[0.4em] uppercase mb-6">Case Studies</div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase leading-[1.05] mb-8">
              Recent <br />
              <span className="text-gradient">creations.</span>
            </h1>
          </motion.div>

          {/* Filter UI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-2 sm:gap-4 mt-8 sm:mt-12 border-b border-white/5 pb-6 sm:pb-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  trackEvent('project_filter_selected', { category: cat });
                }}
                className={`text-[10px] font-bold tracking-[0.2em] uppercase px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border transition-all duration-500 cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-[#64748B] border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="pb-32">
        <Container>
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-x-8 gap-y-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/5 bg-[#0D0D0D] mb-8">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallbackTried) {
                          target.dataset.fallbackTried = 'true';
                          target.src = '/images/project_minimal_tech.jpg';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-1000"></div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4 text-[#64748B] font-mono text-[9px] uppercase tracking-[0.4em] font-bold">
                    <span>{project.category}</span>
                    <span className="w-6 h-px bg-white/10"></span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase group-hover:text-[#3B82F6] transition-colors duration-500">
                    {project.title}
                  </h3>

                  <p className="text-[#94A3B8] text-[14px] mb-5 leading-relaxed line-clamp-2 font-medium">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-[9px] font-mono border border-white/10 bg-white/[0.02] hover:border-[#3B82F6]/40 hover:text-white px-2.5 py-1 rounded text-[#94A3B8] font-medium transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-white/5 flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('project_live_demo_clicked', { project: project.title })}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white text-[10px] font-bold tracking-wider uppercase transition-all shadow-[0_2px_10px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Live Demo</span>
                        <ExternalLink size={12} />
                      </a>

                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('project_github_clicked', { project: project.title })}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold tracking-wider uppercase transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                      >
                        <Github size={13} className="text-[#94A3B8]" />
                        <span>Code</span>
                      </a>
                    </div>

                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono uppercase text-[#64748B] hover:text-[#3B82F6] transition-colors flex items-center gap-1 font-bold"
                    >
                      <span>Explore</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-[#64748B] font-mono text-sm uppercase tracking-widest">No projects found in this category.</p>
            </div>
          )}
        </Container>
      </section>

      <Footer />
    </main>
  );
};
