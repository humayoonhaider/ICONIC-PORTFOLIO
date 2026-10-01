import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Button } from './UI/Base';
import { ThemeToggle } from './UI/ThemeToggle';
import { profile } from '../data/profile';
import { Menu, X, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/#projects' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-out ${
      isScrolled ? 'bg-[var(--bg-body)]/85 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/20' : 'bg-transparent py-4 sm:py-8'
    }`}>
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded font-bold text-sm tracking-tighter group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300 ease-out">
                UA
              </div>
              <div className="absolute -inset-1 bg-[#3B82F6]/25 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] hidden sm:block group-hover:text-[#3B82F6] transition-colors uppercase">
              Portfolio
            </span>
          </Link>

          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || (link.href.startsWith('/#') && location.hash === link.href.substring(1));
            return (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to={link.href} 
                  className={`text-[9px] font-bold transition-all uppercase tracking-[0.4em] relative group ${
                    isActive ? 'text-white' : 'text-[#64748B] hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-px bg-[#3B82F6] transition-all duration-500 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </motion.div>
            );
          })}
          <Link to="/resume">
            <Button variant="secondary" className={`!px-4 !py-2 border-white/10 transition-all duration-500 flex items-center gap-1.5 ${
              location.pathname === '/resume' ? 'border-[#3B82F6] text-[#3B82F6]' : 'hover:border-[#3B82F6] text-white'
            }`}>
              <FileText size={12} className="text-[#3B82F6]" />
              <span>Resume</span>
            </Button>
          </Link>
          <Link to="/#contact">
            <Button variant="outline" className={`!px-5 !py-2 border-white/10 transition-all duration-500 ${
              location.hash === '#contact' ? 'border-[#3B82F6] text-[#3B82F6]' : 'hover:border-[#3B82F6] text-white'
            }`}>
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            className="text-[var(--text-primary)] cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[60px] bg-[var(--bg-body)]/98 backdrop-blur-2xl z-40 md:hidden flex flex-col p-6 sm:p-10 gap-6 sm:gap-8 border-t border-white/5 overflow-y-auto max-h-[calc(100dvh-60px)]"
          >
            {navLinks.map((link, idx) => {
               const isActive = location.pathname === link.href || (link.href.startsWith('/#') && location.hash === link.href.substring(1));
               return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 10 }}
                  transition={{ delay: 0.05 + idx * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    to={link.href} 
                    className={`text-3xl sm:text-4xl font-bold tracking-tighter uppercase ${isActive ? 'text-[#3B82F6]' : 'text-white/60 hover:text-white transition-colors'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
               );
            })}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: 10 }}
              transition={{ delay: 0.05 + navLinks.length * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                to="/resume" 
                className={`text-3xl sm:text-4xl font-bold tracking-tighter uppercase ${location.pathname === '/resume' ? 'text-[#3B82F6]' : 'text-white/60 hover:text-white transition-colors'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-auto pt-6"
            >
              <Link 
                to="/#contact" 
                className="inline-block w-full border border-white/10 text-white py-4 rounded-sm text-center font-black text-[10px] uppercase tracking-[0.4em] hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Start a Conversation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
