import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Button } from './UI/Base';
import { profile, socialLinks } from '../data/profile';
import { 
  Menu, 
  X, 
  FileText, 
  ArrowRight, 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  Workflow, 
  Mail, 
  Phone, 
  Linkedin 
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavItem {
  id: string;
  label: string;
  sectionId: string;
  icon: any;
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation items mapping with icons
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', sectionId: 'home', icon: Home },
    { id: 'about', label: 'About', sectionId: 'about', icon: User },
    { id: 'skills', label: 'Skills', sectionId: 'skills', icon: Code2 },
    { id: 'projects', label: 'Projects', sectionId: 'projects', icon: Briefcase },
    { id: 'process', label: 'Process', sectionId: 'process', icon: Workflow },
    { id: 'contact', label: 'Contact', sectionId: 'contact', icon: Mail },
  ];

  // Auto-close mobile menu & restore scroll on route change
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  // Scroll detection for navbar background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Robust Scroll Spy for Home Page
  const updateActiveSection = useCallback(() => {
    if (location.pathname !== '/') return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Bottom reached -> Contact
    if (scrollY + windowHeight >= documentHeight - 70) {
      setActiveSection('contact');
      return;
    }

    // Top reached -> Home
    if (scrollY < 100) {
      setActiveSection('home');
      return;
    }

    const sectionIds = ['contact', 'process', 'projects', 'skills', 'about', 'home'];
    const headerOffset = 160;

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= headerOffset && rect.bottom >= headerOffset - 80) {
          setActiveSection(id);
          return;
        }
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', updateActiveSection, { passive: true });
      updateActiveSection();
      return () => window.removeEventListener('scroll', updateActiveSection);
    }
  }, [location.pathname, updateActiveSection]);

  // Bulletproof Mobile & Desktop Navigation Action
  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';

    const executeScroll = () => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
        return;
      }

      const el = document.getElementById(sectionId);
      if (el) {
        const headerOffset = 75;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActiveSection(sectionId);
      }
    };

    if (location.pathname === '/') {
      // Direct smooth scroll
      setTimeout(executeScroll, 40);
    } else {
      navigate(`/?section=${sectionId}`);
      setTimeout(executeScroll, 180);
    }
  };

  // Determine active status for nav items
  const isItemActive = (item: NavItem) => {
    if (location.pathname === '/about' && item.id === 'about') return true;
    if (location.pathname === '/projects' && item.id === 'projects') return true;
    if (location.pathname === '/' && activeSection === item.id) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] select-none pointer-events-auto">
      <nav className={`w-full transition-all duration-200 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 sm:py-3 shadow-xs' 
          : 'bg-white/95 backdrop-blur-md py-3 sm:py-4 border-b border-slate-100 shadow-2xs'
      }`}>
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Logo / Brand */}
            <Link 
              to="/" 
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            >
              <div className="relative">
                <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-lg font-extrabold text-sm tracking-tighter group-hover:bg-blue-600 transition-colors duration-300 shadow-xs">
                  UA
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold tracking-tight uppercase text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                  {profile.name}
                </span>
                <span className="text-[9px] font-mono font-semibold uppercase tracking-widest text-slate-500 leading-none">
                  {profile.role}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/70">
                {navItems.map((item) => {
                  const active = isItemActive(item);
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.sectionId)}
                      className={`cursor-pointer px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider font-bold transition-all duration-200 flex items-center gap-1.5 select-none ${
                        active
                          ? 'bg-white text-blue-600 shadow-xs border border-slate-200'
                          : 'text-slate-600 hover:text-blue-600 hover:bg-white/60 border border-transparent'
                      }`}
                    >
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>}
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link to="/resume">
              <button className={`cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase font-bold transition-all duration-200 shadow-2xs ${
                location.pathname === '/resume'
                  ? 'bg-blue-600 text-white border border-blue-600 shadow-xs'
                  : 'border border-slate-300 hover:border-blue-600 bg-white hover:bg-blue-50/50 text-slate-700 hover:text-blue-600'
              }`}>
                <FileText size={13} className={location.pathname === '/resume' ? 'text-white' : 'text-blue-600'} />
                <span>Resume / CV</span>
              </button>
            </Link>

            <Button 
              variant="primary" 
              onClick={() => handleNavClick('contact')}
              className="!px-4 !py-1.5 text-[11px]"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile menu trigger & Quick CV */}
          <div className="flex md:hidden items-center gap-2">
            <Link 
              to="/resume" 
              onClick={() => setIsMenuOpen(false)}
              className={`px-2.5 py-1.5 rounded-lg border transition-all flex items-center gap-1 text-xs font-bold font-mono active:scale-95 ${
                location.pathname === '/resume' 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs' 
                  : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-blue-500 hover:text-blue-600'
              }`}
              aria-label="View Resume"
            >
              <FileText size={14} className={location.pathname === '/resume' ? 'text-white' : 'text-blue-600'} />
              <span className="text-[10px] tracking-wider uppercase font-bold">CV</span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 hover:bg-slate-100 hover:text-blue-600 transition-colors cursor-pointer active:scale-95"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>

        {/* Mobile Full Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden border-t border-slate-200 bg-white px-4 py-4 shadow-2xl overflow-y-auto max-h-[80vh]"
            >
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const active = isItemActive(item);
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.sectionId)}
                      className={`cursor-pointer text-left text-sm font-bold uppercase tracking-wider py-3 px-4 rounded-xl transition-all flex items-center justify-between font-mono active:scale-[0.98] ${
                        active
                          ? 'bg-blue-600 text-white font-extrabold shadow-sm'
                          : 'text-slate-800 hover:text-blue-600 hover:bg-slate-50 border border-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={17} className={active ? 'text-white' : 'text-blue-600'} />
                        <span>{item.label}</span>
                      </div>
                      {active ? (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/20 text-white uppercase">
                          Current
                        </span>
                      ) : (
                        <ArrowRight size={15} className="text-slate-400" />
                      )}
                    </button>
                  );
                })}

                {/* Quick Resume Link in Mobile Menu */}
                <Link 
                  to="/resume" 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full mt-1"
                >
                  <button className={`w-full flex items-center justify-between py-3 px-4 rounded-xl border text-sm font-bold uppercase tracking-wider font-mono transition-all active:scale-[0.98] ${
                    location.pathname === '/resume'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'border-blue-200 text-blue-600 bg-blue-50/70 hover:bg-blue-100/70'
                  }`}>
                    <div className="flex items-center gap-3">
                      <FileText size={17} className={location.pathname === '/resume' ? 'text-white' : 'text-blue-600'} />
                      <span>Official Curriculum Vitae</span>
                    </div>
                    <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase">PDF</span>
                  </button>
                </Link>

                {/* Direct Mobile Quick Contact Buttons */}
                <div className="pt-3 mt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold font-mono active:scale-95 border border-slate-200"
                  >
                    <Phone size={14} className="text-blue-600" />
                    <span>Call Directly</span>
                  </a>

                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold font-mono active:scale-95 border border-slate-200"
                  >
                    <Mail size={14} className="text-blue-600" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
