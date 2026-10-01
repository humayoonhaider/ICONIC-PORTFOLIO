import { Container } from './UI/Base';
import { profile } from '../data/profile';
import { SocialLinks } from './UI/SocialLinks';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme, setTheme, themeLabel } = useTheme();

  return (
    <footer className="py-12 border-t border-white/5 bg-[var(--bg-body)]">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded font-black text-sm tracking-tighter group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-500">
                UA
              </div>
              <span className="text-sm font-bold tracking-tight uppercase group-hover:text-[#3B82F6] transition-colors duration-500">
                {profile.name}
              </span>
            </Link>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-2 text-[9px] font-bold uppercase tracking-[0.3em] text-[#64748B]">
              <Link to="/" className="hover:text-white transition-colors">Index</Link>
              <Link to="/about" className="hover:text-white transition-colors">Archive</Link>
              <Link to="/#projects" className="hover:text-white transition-colors">Works</Link>
              <Link to="/resume" className="hover:text-white transition-colors">Resume</Link>
              <Link to="/#contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>

            {/* Socials & Theme Toggle Selector */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center p-1 rounded-full border border-white/10 bg-white/[0.02] text-[9px] font-mono uppercase tracking-wider">
                <button
                  onClick={() => setTheme('dark')}
                  className={`cursor-pointer px-2.5 py-1 rounded-full transition-all ${
                    theme === 'dark' 
                      ? 'bg-white text-black font-bold shadow-sm' 
                      : 'text-[#64748B] hover:text-white'
                  }`}
                  title="Switch to Deep Black theme"
                >
                  Deep Black
                </button>
                <button
                  onClick={() => setTheme('slate')}
                  className={`cursor-pointer px-2.5 py-1 rounded-full transition-all ${
                    theme === 'slate' 
                      ? 'bg-[#3B82F6] text-white font-bold shadow-sm' 
                      : 'text-[#64748B] hover:text-white'
                  }`}
                  title="Switch to Slate Gray theme"
                >
                  Slate Gray
                </button>
              </div>

              <SocialLinks />
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4 text-[#64748B] text-[8px] font-mono uppercase tracking-[0.3em]">
            <p>© {currentYear} {profile.name} — All rights reserved.</p>
            <p className="opacity-50">Theme: {themeLabel}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
