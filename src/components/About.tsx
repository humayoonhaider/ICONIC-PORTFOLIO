import { motion } from 'framer-motion';
import { Container, SectionHeading, Button } from './UI/Base';
import { profile } from '../data/profile';
import { Link } from 'react-router-dom';
import { FileText, MapPin, Phone, Mail, GraduationCap, Briefcase } from 'lucide-react';
import ubaidPortrait from '../assets/images/ubaid_portrait_professional_1790846384015.jpg';

export const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-slate-50/70 w-full max-w-full">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-30px" }}
          >
            <SectionHeading 
              number="01" 
              title="Fullstack Web Engineering & Craftsmanship."
              subtitle="Specializing in building robust database-backed applications, responsive frontends, and reliable web workflows."
            />
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 font-normal">
                {profile.bio}
              </p>

              {/* Quick Contact & Credentials Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                <div className="p-3 sm:p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono uppercase font-bold text-slate-500 mb-1">
                    <GraduationCap size={13} className="text-blue-600 shrink-0" />
                    <span>Education</span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 uppercase">BS Software Engineering</p>
                  <p className="text-[11px] text-slate-500">Sarhad University, Peshawar (2022)</p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono uppercase font-bold text-slate-500 mb-1">
                    <Briefcase size={13} className="text-blue-600 shrink-0" />
                    <span>Experience</span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 uppercase">3+ Years Professional</p>
                  <p className="text-[11px] text-slate-500">Fullstack Web Development</p>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono uppercase font-bold text-slate-500 mb-1">
                    <Phone size={13} className="text-blue-600 shrink-0" />
                    <span>Phone</span>
                  </div>
                  <a href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`} className="text-xs font-bold text-slate-900 hover:text-blue-600 block truncate">
                    {profile.phone}
                  </a>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono uppercase font-bold text-slate-500 mb-1">
                    <MapPin size={13} className="text-blue-600 shrink-0" />
                    <span>Location</span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 uppercase">{profile.location}</p>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/resume" className="inline-block w-full sm:w-auto">
                  <Button variant="primary" className="w-full sm:w-auto !px-6 !py-3 flex items-center justify-center gap-2">
                    <FileText size={15} />
                    <span>View Curriculum Vitae</span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Profile Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-30px" }}
            className="relative max-w-sm mx-auto md:max-w-none w-full"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white group cursor-pointer">
              <img 
                src={ubaidPortrait || "/images/ubaid_portrait_professional.jpg"} 
                alt={profile.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallbackTried) {
                    target.dataset.fallbackTried = 'true';
                    target.src = '/images/ubaid_portrait_professional.jpg';
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
