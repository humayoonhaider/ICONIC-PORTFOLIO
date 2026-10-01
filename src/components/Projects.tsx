import { motion } from 'framer-motion';
import { Container, SectionHeading } from './UI/Base';
import { projects } from '../data/projects';
import { ExternalLink, Github, ArrowRight, Code2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-[var(--bg-body)] relative">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 md:mb-24">
          <SectionHeading 
            number="03" 
            title="Selected artifacts."
            subtitle="A curated showcase of production applications, architectural systems, and digital interfaces engineered with precision, scalability, and performance."
          />
          <Link 
            to="/projects" 
            className="self-start sm:self-auto mb-10 md:mb-16 inline-flex items-center gap-2 text-[10px] font-mono text-[#3B82F6] hover:text-[#60A5FA] uppercase tracking-[0.3em] font-bold group"
          >
            <span>View All ({projects.length})</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-20 sm:space-y-32 md:space-y-44">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, margin: "-40px" }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 sm:gap-12 lg:gap-20 lg:items-center group`}
            >
              {/* Project Visual / Mockup */}
              <div className="flex-1">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0D] cursor-pointer shadow-2xl group-hover:border-[#3B82F6]/50 transition-all duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallbackTried) {
                        target.dataset.fallbackTried = 'true';
                        target.src = '/images/project_minimal_tech.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700"></div>

                  {/* Quick-action overlay buttons on image */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-black/70 hover:bg-[#3B82F6] text-white backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-110 shadow-lg"
                      title="Open Live Demo"
                      aria-label="Open Live Demo"
                    >
                      <Globe size={15} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-black/70 hover:bg-[#3B82F6] text-white backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-110 shadow-lg"
                      title="View GitHub Repository"
                      aria-label="View GitHub Repository"
                    >
                      <Github size={15} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info & Tech Stack */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 text-[#64748B] font-mono text-[9px] uppercase tracking-[0.4em] font-bold">
                  <span className="text-[#3B82F6]">{project.category}</span>
                  <span className="w-8 h-px bg-white/10"></span>
                  <span>{project.year}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 tracking-tight uppercase leading-[0.95] group-hover:text-[#3B82F6] transition-colors duration-400">
                  {project.title}
                </h3>
                
                <p className="text-[#94A3B8] text-[14px] mb-6 leading-relaxed max-w-lg font-medium">
                  {project.description}
                </p>
                
                {/* Tech Stack Badges */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 size={13} className="text-[#3B82F6]" />
                    <span className="text-[9px] font-mono text-[#64748B] uppercase tracking-[0.3em] font-bold">
                      Tech Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="text-[10px] font-mono border border-white/10 bg-white/[0.02] hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/5 hover:text-white transition-all duration-300 px-3 py-1.5 rounded-md text-[#CBD5E1] font-semibold tracking-tight shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Links: Live Demo & GitHub */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white text-[11px] font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_4px_14px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.45)] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </a>

                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border border-white/15 hover:border-[#3B82F6]/60 bg-white/[0.03] hover:bg-white/[0.08] text-[#F5F7FA] hover:text-white text-[11px] font-bold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    <Github size={14} className="text-[#94A3B8] group-hover:text-white" />
                    <span>GitHub Code</span>
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
