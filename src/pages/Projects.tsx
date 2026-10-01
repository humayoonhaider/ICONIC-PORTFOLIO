import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/UI/Base';
import { projects } from '../data/projects';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ExternalLink, Github } from 'lucide-react';
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
    <main className="bg-white w-full max-w-full overflow-x-hidden min-h-screen text-slate-900">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 relative overflow-hidden bg-slate-50/70 border-b border-slate-200">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="text-blue-600 font-mono text-[10px] tracking-[0.35em] uppercase font-bold mb-4">
              PORTFOLIO ARCHIVE
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.98] mb-6 text-slate-950">
              Selected <br />
              <span className="text-gradient">creations.</span>
            </h1>
          </motion.div>

          {/* Filter UI */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-2 sm:gap-3 mt-8 pt-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  trackEvent('project_filter_selected', { category: cat });
                }}
                className={`text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                    : 'bg-white text-slate-700 border-slate-300 hover:border-blue-500 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group cursor-pointer p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 mb-6">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.dataset.fallbackTried) {
                            target.dataset.fallbackTried = 'true';
                            target.src = '/images/project_minimal_tech.jpg';
                          }
                        }}
                      />
                    </div>
                    
                    <div className="flex items-center gap-3 mb-3 text-slate-500 font-mono text-[9px] uppercase tracking-[0.35em] font-bold">
                      <span className="text-blue-600">{project.category}</span>
                      <span className="w-6 h-px bg-slate-200"></span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-extrabold mb-3 tracking-tight uppercase text-slate-950 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-[13px] mb-5 leading-relaxed line-clamp-2 font-normal">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="text-[9px] font-mono border border-slate-200 bg-slate-50 hover:border-blue-300 px-2.5 py-1 rounded text-slate-700 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 flex-wrap gap-3">
                    <div className="flex items-center gap-2.5">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('project_live_demo_clicked', { project: project.title })}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold tracking-wider uppercase transition-all shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                        <span>Live Demo</span>
                        <ExternalLink size={12} />
                      </a>

                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('project_github_clicked', { project: project.title })}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 hover:border-blue-600 bg-white hover:bg-blue-50/40 text-slate-700 hover:text-blue-600 text-[10px] font-bold tracking-wider uppercase transition-all"
                      >
                        <Github size={12} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </main>
  );
};
