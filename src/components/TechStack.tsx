import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, SectionHeading } from './UI/Base';
import { skills, SkillItem } from '../data/skills';
import { Eye, Sparkles, ChevronRight, Layers, CheckCircle2 } from 'lucide-react';

// Custom SVG Icons for all technologies
const TechIcon = ({ name }: { name: string }) => {
  const iconMap: Record<string, React.ReactNode> = {
    "React": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
    "TypeScript": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 16V9h4" />
        <path d="M9 13h-2" />
        <path d="M14 9.5c0-.8.7-1.5 1.5-1.5h1.5c.8 0 1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5H15c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5h1.5c.8 0 1.5-.7 1.5-1.5" />
      </svg>
    ),
    "JavaScript": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 16c1 1 2 .5 2-1v-4" />
        <path d="M14 9.5c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5H15c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5h1" />
      </svg>
    ),
    "HTML5": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <path d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3H4z" />
        <path d="M7.5 7h9l-.5 4h-8l.5 4 4 1 4-1 .3-2" />
      </svg>
    ),
    "CSS3": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <path d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3H4z" />
        <path d="M16.5 7H7.5l.5 5h7.5l-.5 4-3 1-3-1-.3-2" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <path d="M12 6c-3.5 0-5.5 2-6 6 1-1.5 2.5-2 4.5-1.5 1.15.28 1.97.49 2.88.72 1.48.37 3.2.8 5.62.8 3.5 0 5.5-2 6-6-1 1.5-2.5 2-4.5 1.5-1.15-.28-1.97-.49-2.88-.72-1.48-.37-3.2-.8-5.62-.8Z" />
        <path d="M6 12c-3.5 0-5.5 2-6 6 1-1.5 2.5-2 4.5-1.5 1.15.28 1.97.49 2.88.72 1.48.37 3.2.8 5.62.8 3.5 0 5.5-2 6-6-1 1.5-2.5 2-4.5 1.5-1.15-.28-1.97-.49-2.88-.72-1.48-.37-3.2-.8-5.62-.8Z" />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 16.5l-4.5-6.5h-1v6.5" />
        <path d="M15 8.5l-4.5 6.5" />
      </svg>
    ),
    "Framer Motion": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <path d="M4 3h16l-8 9z" />
        <path d="M4 12h8l-8 9z" />
        <path d="M12 12h8l-8 9z" />
      </svg>
    ),
    "Redux": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <path d="M16.5 9.5a4.5 4.5 0 1 0-4.5 4.5" />
        <path d="M7.5 14.5a4.5 4.5 0 1 0 4.5-4.5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 7.5v9" />
        <path d="M12 12l4-2.25" />
        <path d="M12 12l-4-2.25" />
        <path d="M12 16.5l4-2.25" />
        <path d="M12 16.5l-4-2.25" />
      </svg>
    ),
    "Express": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M7 9h4v3H7v3h4" />
        <path d="M14 9l3 6" />
        <path d="M17 9l-3 6" />
      </svg>
    ),
    "RESTful APIs": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <path d="M4 12h16" />
        <path d="M16 8l4 4-4 4" />
        <path d="M8 16l-4-4 4-4" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    "GraphQL": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9z" />
        <circle cx="12" cy="3" r="1.5" />
        <circle cx="19.8" cy="7.5" r="1.5" />
        <circle cx="19.8" cy="16.5" r="1.5" />
        <circle cx="12" cy="21" r="1.5" />
        <circle cx="4.2" cy="16.5" r="1.5" />
        <circle cx="4.2" cy="7.5" r="1.5" />
        <path d="M12 3v18" />
        <path d="M4.2 7.5l15.6 9" />
        <path d="M4.2 16.5l15.6-9" />
      </svg>
    ),
    "Python": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <path d="M12 9H7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1v-2a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2V9a3 3 0 0 0-3-3h-2" />
        <path d="M12 15h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-1v2a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2v2a3 3 0 0 0 3 3h2" />
        <circle cx="9" cy="6" r="1" />
        <circle cx="15" cy="18" r="1" />
      </svg>
    ),
    "PostgreSQL": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
    "MongoDB": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <path d="M12 2C9 7 6 11 6 15a6 6 0 0 0 12 0c0-4-3-8-6-13z" />
        <path d="M12 2v20" />
      </svg>
    ),
    "Git": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M6 9v6" />
        <path d="M9 6h4a4 4 0 0 1 4 4v5" />
      </svg>
    ),
    "GitHub": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    "Docker": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <path d="M4 14h16c0 3-2 6-8 6s-8-3-8-6z" />
        <rect x="5" y="9" width="3" height="3" />
        <rect x="9" y="9" width="3" height="3" />
        <rect x="13" y="9" width="3" height="3" />
        <rect x="9" y="5" width="3" height="3" />
      </svg>
    ),
    "Vercel": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
        <path d="M12 2L2 20h20L12 2z" />
      </svg>
    )
  };

  const fallback = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );

  return iconMap[name] || fallback;
};

// Ultra-fluid, Zero-Jitter Desktop Hover SkillCard
const SkillCard = ({
  skill,
  category,
  isExpanded,
  onToggle
}: {
  skill: SkillItem;
  category: string;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const showDetails = isHovered || isExpanded;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-xl border p-5 cursor-pointer overflow-hidden flex flex-col justify-between h-[225px] select-none transition-colors duration-400 gpu-accelerated ${
        showDetails
          ? "border-[#3B82F6]/60 bg-[#0c1220] shadow-[0_12px_36px_rgba(59,130,246,0.18)]"
          : "border-white/10 bg-white/[0.02] hover:border-[#3B82F6]/40 hover:bg-[#090d16]"
      }`}
    >
      {/* Top Header: Icon, Tech Name, Tagline & Category Badge */}
      <div className="flex items-start justify-between gap-3 mb-2 shrink-0">
        <div className="flex items-center gap-3">
          <div 
            className={`p-2 rounded-lg transition-all duration-300 ${
              showDetails 
                ? "bg-[#3B82F6]/20 text-[#3B82F6] scale-105" 
                : "bg-white/[0.04] text-[#94A3B8] group-hover:bg-[#3B82F6]/10 group-hover:text-[#3B82F6]"
            }`}
          >
            <TechIcon name={skill.name} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-tight uppercase group-hover:text-[#3B82F6] transition-colors duration-300">
              {skill.name}
            </h4>
            <p className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider mt-0.5 line-clamp-1">
              {skill.tagline}
            </p>
          </div>
        </div>

        <span 
          className={`text-[8px] font-mono uppercase font-bold px-2 py-0.5 rounded transition-all duration-300 shrink-0 ${
            showDetails 
              ? "bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/40" 
              : "bg-white/5 text-[#64748B] border border-transparent"
          }`}
        >
          {category}
        </span>
      </div>

      {/* Middle Content Area: Absolute Zero-Layout-Shift Smooth Crossfade */}
      <div className="relative flex-1 overflow-hidden my-1">
        {/* Layer 1: Resting Preview (smoothly fades out when hovered) */}
        <div
          className={`absolute inset-0 flex flex-col justify-center transition-all duration-300 ease-out pointer-events-none ${
            showDetails 
              ? "opacity-0 -translate-y-2 invisible" 
              : "opacity-100 translate-y-0 visible"
          }`}
        >
          <p className="text-[11.5px] leading-relaxed text-[#94A3B8] line-clamp-2">
            {skill.description}
          </p>
          <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#3B82F6]/80 mt-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse"></span>
            <span>Hover to inspect technical details</span>
            <ChevronRight size={11} className="transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>

        {/* Layer 2: Detailed Technical Paragraph (silky smooth fade & glide in on hover) */}
        <div
          className={`absolute inset-0 flex flex-col justify-center transition-all duration-300 ease-out pointer-events-none ${
            showDetails 
              ? "opacity-100 translate-y-0 visible" 
              : "opacity-0 translate-y-2 invisible"
          }`}
        >
          <p className="text-[11.5px] leading-relaxed text-[#F1F5F9] font-normal">
            {skill.description}
          </p>
        </div>
      </div>

      {/* Bottom Footer: Feature Tag & Detailed Indicator */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono shrink-0">
        <span className="text-[#3B82F6] font-bold flex items-center gap-1.5 truncate max-w-[70%]">
          <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            showDetails ? "bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.9)] scale-110" : "bg-[#3B82F6]/60"
          }`}></span>
          <span className="truncate">{skill.highlight}</span>
        </span>
        <span className={`text-[8px] uppercase tracking-wider transition-colors duration-300 shrink-0 ${
          showDetails ? "text-[#3B82F6] font-semibold" : "text-[#64748B]"
        }`}>
          {showDetails ? "Active View" : "Hover details"}
        </span>
      </div>

      {/* Subtle radial ambient glow on hover */}
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 bg-[#3B82F6]/15 blur-2xl rounded-full pointer-events-none transition-opacity duration-500 ${
          showDetails ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.div>
  );
};

export const TechStack = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [expandAll, setExpandAll] = useState(false);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#3B82F6]/5 blur-[120px] -z-10 pointer-events-none"></div>
      
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading 
            number="02" 
            title="Technical ecosystem."
            subtitle="A curated selection of technologies and architectural disciplines. Hover over or tap any skill on desktop or mobile to inspect the in-depth implementation details smoothly."
          />

          {/* Toggle for Expand All / Hover Mode */}
          <div className="flex items-center gap-3 self-start md:self-auto mb-10 md:mb-16">
            <button
              onClick={() => setExpandAll(!expandAll)}
              className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-[#3B82F6]/60 bg-white/[0.02] hover:bg-white/[0.05] text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] hover:text-white transition-all duration-300"
            >
              <Eye size={13} className={expandAll ? "text-[#3B82F6]" : "text-[#64748B]"} />
              <span>{expandAll ? "Collapse Details" : "Show All Details"}</span>
            </button>
          </div>
        </div>

        <div className="space-y-16">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-6">
              {/* Category Heading with subtle badge */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
                  <h3 className="text-[11px] font-mono text-[#3B82F6] uppercase tracking-[0.4em] font-bold whitespace-nowrap">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="h-px w-full bg-white/5"></div>
                <span className="text-[10px] font-mono text-[#64748B] whitespace-nowrap hidden sm:inline">
                  {skillGroup.items.length} Technologies
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {skillGroup.items.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    category={skillGroup.category}
                    isExpanded={expandAll || activeSkill === skill.name}
                    onToggle={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
