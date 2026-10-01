import { motion } from 'framer-motion';

const techNames = [
  "React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", 
  "Python", "PostgreSQL", "MongoDB", "Docker", "GraphQL", 
  "Framer Motion", "Redux", "Git", "GitHub", "Express"
];

export const TechMarquee = () => {
  return (
    <div className="w-full max-w-full bg-[var(--bg-body)] border-y border-white/5 py-4 overflow-hidden relative select-none">
      {/* Gradient masks for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-[var(--bg-body)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-[var(--bg-body)] to-transparent z-10 pointer-events-none"></div>

      <motion.div 
        className="flex whitespace-nowrap gap-12 items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...techNames, ...techNames].map((name, i) => (
          <div key={i} className="flex items-center gap-4 group">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#333945] group-hover:text-[#3B82F6] transition-colors duration-300 cursor-default">
              {name}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/40"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
