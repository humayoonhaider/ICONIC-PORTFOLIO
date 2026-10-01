import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeading } from './UI/Base';
import { skills, SkillItem } from '../data/skills';
import { Eye, ChevronRight } from 'lucide-react';

const TechIcon = ({ name }: { name: string }) => {
  const iconMap: Record<string, React.ReactNode> = {
    "React": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
    "TypeScript": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 16V9h4" />
        <path d="M9 13h-2" />
        <path d="M14 9.5c0-.8.7-1.5 1.5-1.5h1.5c.8 0 1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5H15c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5h1.5c.8 0 1.5-.7 1.5-1.5" />
      </svg>
    ),
    "JavaScript": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 16c1 1 2 .5 2-1v-4" />
        <path d="M14 9.5c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5H15c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5h1" />
      </svg>
    ),
    "HTML5": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3H4z" />
        <path d="M7.5 7h9l-.5 4h-8l.5 4 4 1 4-1 .3-2" />
      </svg>
    ),
    "CSS3": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3H4z" />
        <path d="M16.5 7H7.5l.5 5h7.5l-.5 4-3 1-3-1-.3-2" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M12 6c-3.5 0-5.5 2-6 6 1-1.5 2.5-2 4.5-1.5 1.15.28 1.97.49 2.88.72 1.48.37 3.2.8 5.62.8 3.5 0 5.5-2 6-6-1 1.5-2.5 2-4.5 1.5-1.15-.28-1.97-.49-2.88-.72-1.48-.37-3.2-.8-5.62-.8Z" />
        <path d="M6 12c-3.5 0-5.5 2-6 6 1-1.5 2.5-2 4.5-1.5 1.15.28 1.97.49 2.88.72 1.48.37 3.2.8 5.62.8 3.5 0 5.5-2 6-6-1 1.5-2.5 2-4.5 1.5-1.15-.28-1.97-.49-2.88-.72-1.48-.37-3.2-.8-5.62-.8Z" />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 16.5l-4.5-6.5h-1v6.5" />
        <path d="M15 8.5l-4.5 6.5" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 7.5v9" />
        <path d="M12 12l4-2.25" />
        <path d="M12 12l-4-2.25" />
      </svg>
    ),
    "Express": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M7 9h4v3H7v3h4" />
        <path d="M14 9l3 6" />
        <path d="M17 9l-3 6" />
      </svg>
    ),
    "PostgreSQL": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
    "MongoDB": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <path d="M12 2C9 7 6 11 6 15a6 6 0 0 0 12 0c0-4-3-8-6-13z" />
        <path d="M12 2v20" />
      </svg>
    ),
    "Git": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M6 9v6" />
        <path d="M9 6h4a4 4 0 0 1 4 4v5" />
      </svg>
    )
  };

  const fallback = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );

  return iconMap[name] || fallback;
};

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
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
      className={`group relative rounded-xl border p-4 sm:p-5 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[210px] sm:min-h-[225px] select-none transition-all duration-300 bg-white ${
        showDetails
          ? "border-blue-500 shadow-[0_8px_24px_rgba(37,99,235,0.12)] bg-gradient-to-b from-white to-blue-50/30"
          : "border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md"
      }`}
    >
      {/* Top Header */}
      <div className="flex items-start justify-between gap-2 mb-2 shrink-0">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div 
            className={`p-1.5 sm:p-2 rounded-lg shrink-0 transition-all duration-300 ${
              showDetails 
                ? "bg-blue-600 text-white scale-105 shadow-sm" 
                : "bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600"
            }`}
          >
            <TechIcon name={skill.name} />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-slate-950 tracking-tight uppercase group-hover:text-blue-600 transition-colors truncate">
              {skill.name}
            </h4>
            <p className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-0.5 truncate">
              {skill.tagline}
            </p>
          </div>
        </div>

        <span 
          className={`text-[8px] font-mono uppercase font-bold px-1.5 sm:px-2 py-0.5 rounded transition-all shrink-0 ${
            showDetails 
              ? "bg-blue-100 text-blue-700 border border-blue-300" 
              : "bg-slate-100 text-slate-600 border border-slate-200"
          }`}
        >
          {category}
        </span>
      </div>

      {/* Middle Content */}
      <div className="my-2 flex-1">
        <p className="text-[11px] sm:text-[12px] leading-relaxed text-slate-700 font-normal">
          {skill.description}
        </p>
      </div>

      {/* Bottom Footer */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono shrink-0 gap-2">
        <span className="text-blue-600 font-bold flex items-center gap-1.5 truncate">
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${showDetails ? "bg-blue-600 animate-pulse" : "bg-blue-500"}`}></span>
          <span className="truncate">{skill.highlight}</span>
        </span>
        <span className="text-[8px] uppercase tracking-wider text-slate-400 shrink-0 font-medium">
          Verified
        </span>
      </div>
    </div>
  );
};

export const TechStack = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [expandAll, setExpandAll] = useState(false);

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-white w-full max-w-full">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <SectionHeading 
            number="02" 
            title="Technical Stack & Expertise."
            subtitle="Explore technologies across full-stack engineering, databases, and responsive design."
          />

          <div className="flex items-center gap-3 self-start md:self-auto mb-6 md:mb-16">
            <button
              onClick={() => setExpandAll(!expandAll)}
              className="cursor-pointer inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full border border-slate-300 hover:border-blue-600 bg-slate-50 hover:bg-white text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-700 hover:text-blue-600 font-bold transition-all shadow-xs"
            >
              <Eye size={12} className={expandAll ? "text-blue-600" : "text-slate-500"} />
              <span>{expandAll ? "Collapse" : "Expand All"}</span>
            </button>
          </div>
        </div>

        <div className="space-y-10 sm:space-y-14">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-4 sm:space-y-6">
              {/* Category Heading */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <h3 className="text-[10px] sm:text-[11px] font-mono text-blue-700 uppercase tracking-[0.25em] sm:tracking-[0.35em] font-bold">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="h-px w-full bg-slate-200"></div>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 shrink-0 hidden sm:inline font-semibold">
                  {skillGroup.items.length} Tech
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
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
