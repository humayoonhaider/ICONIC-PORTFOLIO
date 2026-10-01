import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Home, Briefcase, Code2, Mail, FileText } from 'lucide-react';

export const MobileBottomNav = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Robust Scroll Spy for mobile bottom nav
  const handleScroll = useCallback(() => {
    if (location.pathname === '/resume') {
      setActiveTab('resume');
      return;
    }
    if (location.pathname === '/projects') {
      setActiveTab('projects');
      return;
    }
    if (location.pathname === '/about') {
      setActiveTab('about');
      return;
    }

    if (location.pathname !== '/') return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY + windowHeight >= documentHeight - 80) {
      setActiveTab('contact');
      return;
    }

    if (scrollY < 120) {
      setActiveTab('home');
      return;
    }

    const sections = ['contact', 'process', 'projects', 'skills', 'about', 'home'];
    const headerOffset = 180;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= headerOffset && rect.bottom >= headerOffset - 90) {
          setActiveTab(id);
          return;
        }
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Direct precision scroll for mobile
  const handleNavClick = (sectionId: string) => {
    const scrollToElement = () => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveTab('home');
        return;
      }

      const el = document.getElementById(sectionId);
      if (el) {
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setActiveTab(sectionId);
      }
    };

    if (location.pathname === '/') {
      scrollToElement();
    } else {
      navigate(`/?section=${sectionId}`);
      setTimeout(scrollToElement, 180);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, isRoute: false },
    { id: 'skills', label: 'Skills', icon: Code2, isRoute: false },
    { id: 'projects', label: 'Projects', icon: Briefcase, isRoute: false },
    { id: 'contact', label: 'Contact', icon: Mail, isRoute: false },
    { id: 'resume', label: 'CV', icon: FileText, isRoute: true, path: '/resume' },
  ];

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-[90] max-w-sm mx-auto pointer-events-auto select-none print:hidden">
      <nav className="bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full px-2 py-1.5 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = 
            (item.isRoute && location.pathname === item.path) ||
            (!item.isRoute && location.pathname === '/' && activeTab === item.id);

          if (item.isRoute) {
            return (
              <Link
                key={item.id}
                to={item.path!}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActiveTab(item.id);
                }}
                className={`flex flex-col items-center justify-center py-1 px-3 rounded-full transition-all duration-200 active:scale-90 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-slate-600'} />
                <span className="text-[9px] font-mono uppercase tracking-wider font-semibold mt-0.5">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-full transition-all duration-200 active:scale-90 cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
              aria-label={`Scroll to ${item.label}`}
            >
              <Icon size={16} className={isActive ? 'text-white' : 'text-slate-600'} />
              <span className="text-[9px] font-mono uppercase tracking-wider font-semibold mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
