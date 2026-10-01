import { motion } from 'framer-motion';
import { Container, SectionHeading, Button, SectionDivider, Reveal } from '../components/UI/Base';
import { profile } from '../data/profile';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { FileText, MapPin, Phone, Mail, GraduationCap, Briefcase } from 'lucide-react';
import ubaidPortrait from '../assets/images/ubaid_portrait_professional_1790846384015.jpg';

export const AboutPage = () => {
  return (
    <main className="bg-white w-full max-w-full overflow-x-hidden min-h-screen text-slate-900">
      
      {/* About Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden bg-slate-50/70 border-b border-slate-200/80">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="text-blue-600 font-mono text-[10px] tracking-[0.35em] uppercase font-bold mb-4">
              ABOUT THE DEVELOPER
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[0.98] mb-6 text-slate-950">
              Driven by <br />
              <span className="text-gradient">precision & code.</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Fullstack Web Developer with over 3 years of experience in the development cycle of web projects, building scalable database systems and clean user interfaces.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Main Content */}
      <Reveal>
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-slate-950">
                  The Journey & Expertise
                </h2>
                
                <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                  <p>
                    I'm Ubaid Ahmad, a Fullstack Web Developer based in Mardan, Pakistan. With over 3 years of hands-on experience, I am proficient in HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, MongoDB, MySQL, and PHP.
                  </p>
                  <p>
                    I have contributed to software solutions at Lion Software House in Islamabad, built institutional systems during my tenure at Sarhad University (SUIT) Peshawar, and delivered full-stack projects at Trust Tech Solution.
                  </p>
                </div>
                
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 font-bold">Location</h4>
                    <p className="text-sm sm:text-base font-bold uppercase tracking-tight text-slate-900">{profile.location}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 font-bold">Experience</h4>
                    <p className="text-sm sm:text-base font-bold uppercase tracking-tight text-slate-900">3+ Years</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 font-bold">Phone</h4>
                    <a href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`} className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600">
                      {profile.phone}
                    </a>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 font-bold">Email</h4>
                    <a href={`mailto:${profile.email}`} className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 break-all">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/resume" className="inline-flex items-center gap-3 max-w-full">
                    <Button variant="primary" className="!px-6 !py-3 flex items-center gap-2">
                      <FileText size={15} className="shrink-0" />
                      <span>View Official CV (White Paper)</span>
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="sticky top-28"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl p-3">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img 
                      src={ubaidPortrait || "/images/ubaid_portrait_professional.jpg"} 
                      alt={profile.name}
                      className="w-full h-full object-cover"
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
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      </Reveal>

      <Footer />
    </main>
  );
};
