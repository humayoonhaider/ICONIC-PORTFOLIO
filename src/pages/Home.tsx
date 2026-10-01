import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { TechStack } from '../components/TechStack';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { GitHubStats } from '../components/GitHubStats';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

import { SectionDivider, Reveal } from '../components/UI/Base';
import { TechMarquee } from '../components/UI/TechMarquee';

export const Home = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const targetSection = searchParams.get('section') || location.hash.replace('#', '');
    if (targetSection) {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [searchParams, location.hash]);

  return (
    <main className="bg-[var(--bg-body)] w-full max-w-full overflow-x-hidden">
      <Hero />
      <TechMarquee />
      <SectionDivider />
      <Reveal>
        <About />
      </Reveal>
      <SectionDivider />
      <Reveal>
        <TechStack />
      </Reveal>
      <SectionDivider />
      <Reveal>
        <Projects />
      </Reveal>
      <SectionDivider />
      <Reveal>
        <GitHubStats username="ubaid-ahmad" />
      </Reveal>
      <SectionDivider />
      <Reveal>
        <Experience />
      </Reveal>
      <SectionDivider />
      <Reveal>
        <Services />
      </Reveal>
      <SectionDivider />
      <Reveal>
        <Process />
      </Reveal>
      <SectionDivider />
      <Reveal>
        <Contact />
      </Reveal>
      <SectionDivider />
      <Footer />
    </main>
  );
};
