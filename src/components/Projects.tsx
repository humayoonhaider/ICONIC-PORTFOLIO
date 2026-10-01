import { motion } from 'framer-motion';
import { Container, SectionHeading } from './UI/Base';
import { projects } from '../data/projects';
import { ExternalLink, Github, ArrowRight, Code2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-slate-50/70 relative w-full max-w-full overflow-hidden">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-16 md:mb-20">
          <SectionHeading 
            number="03" 
            title="Featured Projects."
            subtitle="A showcase of full-stack institutional systems, web applications, and digital platforms built with modern technology stacks."
          />
          <Link 
            to="/projects" 
            className="self-start sm:self-auto mb-6 sm:mb-10 md:mb-16 inline-flex items-center gap-2 text-[10px] font-mono text-blue-600 hover:text-blue-700 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold group"
          >
            <span>View All ({projects.length})</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-8 sm:space-y-16 md:space-y-20">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-30px" }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 sm:gap-8 lg:gap-12 lg:items-center group p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300`}
            >
              {/* Project Visual */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg sm:rounded-xl border border-slate-200 bg-slate-100 cursor-pointer shadow-sm group-hover:border-blue-400 transition-all duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallbackTried) {
                        target.dataset.fallbackTried = 'true';
                        target.src = '/images/project_minimal_tech.jpg';
                      }
                    }}
                  />

                  {/* Quick-action overlay buttons */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-2.5 rounded-full bg-slate-900/90 hover:bg-blue-600 text-white backdrop-blur-md transition-all duration-200 shadow-md"
                      title="Open Live Demo"
                      aria-label="Open Live Demo"
                    >
                      <Globe size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-2.5 rounded-full bg-slate-900/90 hover:bg-blue-600 text-white backdrop-blur-md transition-all duration-200 shadow-md"
                      title="View GitHub Repository"
                      aria-label="View GitHub Repository"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info & Tech Stack */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 text-slate-500 font-mono text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.35em] font-bold">
                  <span className="text-blue-600">{project.category}</span>
                  <span className="w-4 sm:w-6 h-px bg-slate-200"></span>
                  <span>{project.year}</span>
                </div>
                
                <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-2 sm:mb-3 tracking-tight uppercase leading-[1.1] text-slate-950 group-hover:text-blue-600 transition-colors duration-200 break-words">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed font-normal">
                  {project.description}
                </p>
                
                {/* Tech Stack Badges */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Code2 size={12} className="text-blue-600" />
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em] font-bold">
                      Tech Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="text-[9px] sm:text-[10px] font-mono border border-slate-200 bg-slate-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded text-slate-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                    <span>Live Demo</span>
                    <ExternalLink size={12} />
                  </a>

                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-300 hover:border-blue-600 bg-white hover:bg-blue-50/40 text-slate-800 hover:text-blue-600 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <Github size={13} className="text-slate-600" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
