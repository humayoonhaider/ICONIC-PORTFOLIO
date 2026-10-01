import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme, themeLabel } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full border border-white/5 bg-white/[0.02] hover:border-[#3B82F6]/50 transition-all duration-500 group cursor-pointer"
      aria-label={`Current theme: ${themeLabel}. Click to switch theme`}
      title={`Theme: ${themeLabel} (Click to switch)`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ y: theme === 'dark' ? 0 : 30 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute"
        >
          <Moon size={16} className="text-[#64748B] group-hover:text-[#3B82F6] transition-colors" />
        </motion.div>
        <motion.div
          initial={{ y: -30 }}
          animate={{ y: theme === 'slate' ? 0 : -30 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute"
        >
          <Sun size={16} className="text-[#3B82F6]" />
        </motion.div>
      </div>
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[#3B82F6]/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none rounded-full"></div>
    </button>
  );
};
