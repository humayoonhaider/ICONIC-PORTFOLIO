import { Container } from './UI/Base';
import { profile, socialLinks } from '../data/profile';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Mail, Linkedin, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="py-8 sm:py-12 border-t border-slate-200 bg-white text-slate-900 w-full max-w-full overflow-hidden">
      <Container>
        <div className="flex flex-col gap-6 sm:gap-8">
          
          {/* Top Row: Brand & Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 sm:pb-8 border-b border-slate-100">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-lg font-extrabold text-sm tracking-tighter group-hover:bg-blue-600 transition-colors duration-300">
                UA
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold tracking-tight uppercase group-hover:text-blue-600 transition-colors">
                  {profile.name}
                </span>
                <span className="text-[9px] font-mono text-slate-500 uppercase">
                  {profile.role} · {profile.location}
                </span>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-2 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="cursor-pointer hover:text-blue-600 transition-colors uppercase"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="cursor-pointer hover:text-blue-600 transition-colors uppercase"
              >
                Skills
              </button>
              <Link to="/resume" className="hover:text-blue-600 transition-colors text-blue-600 font-extrabold">Resume</Link>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="cursor-pointer hover:text-blue-600 transition-colors uppercase"
              >
                Contact
              </button>
            </nav>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-blue-600 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>

          {/* Bottom Row: Direct Contact Links & Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6">
              <a 
                href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`} 
                className="inline-flex items-center gap-1.5 font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Phone size={13} className="text-blue-600" />
                <span>{profile.phone}</span>
              </a>

              <a 
                href={`mailto:${profile.email}`} 
                className="inline-flex items-center gap-1.5 font-semibold text-slate-700 hover:text-blue-600 transition-colors break-all"
              >
                <Mail size={13} className="text-blue-600" />
                <span>{profile.email}</span>
              </a>

              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={13} className="text-blue-600" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="text-[11px]">
              © {currentYear} {profile.name}. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
