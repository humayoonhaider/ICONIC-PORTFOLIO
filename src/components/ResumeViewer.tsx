import { useState } from 'react';
import { resumeData } from '../data/resume';
import { trackEvent } from '../utils/analytics';
import { 
  Download, 
  Printer, 
  Copy, 
  Check, 
  X, 
  Mail, 
  MapPin, 
  Linkedin, 
  Phone, 
  Globe, 
  GraduationCap,
  Briefcase,
  Award,
  Sparkles,
  Layers,
  Code
} from 'lucide-react';
import ubaidPortrait from '../assets/images/ubaid_portrait_professional_1790846384015.jpg';

interface ResumeViewerProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const ResumeViewer = ({ onClose, isModal = false }: ResumeViewerProps) => {
  const [copied, setCopied] = useState(false);
  const [styleMode, setStyleMode] = useState<'white' | 'two-tone'>('white');

  const handlePrint = () => {
    trackEvent('resume_print_clicked');
    window.print();
  };

  const handleDownload = () => {
    trackEvent('resume_download_pdf_clicked');
    window.print();
  };

  const handleCopyText = async () => {
    trackEvent('resume_copy_text_clicked');
    const textResume = `
Ubaid Ahmad - Web Developer
Phone: ${resumeData.phone} | Email: ${resumeData.email}
Address: ${resumeData.location} | LinkedIn: ${resumeData.linkedin}

PROFESSIONAL SUMMARY:
${resumeData.summary}

WORK EXPERIENCE:
${resumeData.experience.map(exp => `
${exp.period}
${exp.company} | ${exp.location}
${exp.role}
${exp.highlights.map(h => `- ${h}`).join('\n')}
`).join('\n')}

EDUCATION:
${resumeData.education.map(edu => `${edu.degree}
${edu.institution} (${edu.year}) | ${edu.cgpa || ''}`).join('\n')}

ACHIEVEMENTS:
${resumeData.achievements.map(a => `- ${a}`).join('\n')}

SKILLS:
${resumeData.skills.join(', ')}

LANGUAGES:
${resumeData.languages.join(', ')}
    `.trim();

    try {
      await navigator.clipboard.writeText(textResume);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${isModal ? 'p-1 sm:p-4' : 'py-2 sm:py-6 px-1 sm:px-4'}`}>
      {/* Action Toolbar */}
      <div className="print:hidden mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-xl border border-slate-200 bg-white/95 backdrop-blur-md shadow-md sticky top-16 sm:top-20 z-30">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider font-bold text-slate-900">
            Official Curriculum Vitae
          </span>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-200">
            {styleMode === 'white' ? 'Pure White' : 'Executive Two-Tone'}
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          {/* Format Switcher */}
          <div className="flex items-center bg-slate-100 border border-slate-200 rounded-lg p-0.5">
            <button
              onClick={() => setStyleMode('white')}
              className={`cursor-pointer px-2 sm:px-2.5 py-1 rounded text-[9px] sm:text-[10px] font-mono uppercase font-bold transition-all ${
                styleMode === 'white' 
                  ? 'bg-white text-blue-600 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pure White
            </button>
            <button
              onClick={() => setStyleMode('two-tone')}
              className={`cursor-pointer px-2 sm:px-2.5 py-1 rounded text-[9px] sm:text-[10px] font-mono uppercase font-bold transition-all ${
                styleMode === 'two-tone' 
                  ? 'bg-slate-900 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Two-Tone
            </button>
          </div>

          <button
            onClick={handleCopyText}
            className="cursor-pointer inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-slate-700 text-[10px] sm:text-[11px] font-bold uppercase transition-all shadow-xs"
            title="Copy Resume Plain Text"
          >
            {copied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="cursor-pointer inline-flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[10px] sm:text-[11px] font-bold uppercase transition-all shadow-sm"
            title="Download or Print PDF"
          >
            <Download size={12} />
            <span>PDF</span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="cursor-pointer p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 ml-auto"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Responsive White Resume Sheet */}
      <div 
        id="resume-printable-document"
        className="bg-white text-slate-900 border border-slate-200 shadow-xl rounded-xl sm:rounded-2xl overflow-hidden print:border-none print:shadow-none print:p-0 print:bg-white print:text-black print:rounded-none"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-auto md:min-h-[960px]">
          
          {/* Left Column (Photo, Contact, Skills, Languages) */}
          <aside className={`md:col-span-4 p-5 sm:p-7 md:p-8 flex flex-col justify-between transition-colors duration-300 ${
            styleMode === 'two-tone'
              ? 'bg-[#1E293B] text-white print:bg-[#1E293B] print:text-white'
              : 'bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 text-slate-900 print:bg-white print:border-r print:border-gray-200'
          }`}>
            <div>
              {/* Profile Photo */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-md ${
                  styleMode === 'two-tone' 
                    ? 'border-4 border-white/90 bg-slate-800' 
                    : 'border-4 border-white ring-2 ring-slate-200 bg-slate-100'
                }`}>
                  <img 
                    src={ubaidPortrait || "/images/ubaid_portrait_professional.jpg"} 
                    alt={resumeData.name}
                    className="w-full h-full object-cover"
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

              {/* Contact Info */}
              <div className={`mb-6 sm:mb-8 pb-5 sm:pb-6 border-b ${
                styleMode === 'two-tone' ? 'border-white/15' : 'border-slate-200'
              }`}>
                <h3 className={`text-sm sm:text-base font-bold uppercase tracking-tight mb-3 flex items-center gap-2 ${
                  styleMode === 'two-tone' ? 'text-white' : 'text-slate-900'
                }`}>
                  <Phone size={14} className={styleMode === 'two-tone' ? 'text-blue-400' : 'text-blue-600'} />
                  <span>Contact</span>
                </h3>

                <div className={`space-y-3 text-xs ${
                  styleMode === 'two-tone' ? 'text-slate-200' : 'text-slate-700'
                }`}>
                  <div>
                    <span className={`block text-[10px] font-mono uppercase font-semibold mb-0.5 ${
                      styleMode === 'two-tone' ? 'text-slate-400' : 'text-slate-500'
                    }`}>Phone</span>
                    <a href={`tel:${resumeData.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-blue-600 font-semibold">
                      {resumeData.phone}
                    </a>
                  </div>

                  <div>
                    <span className={`block text-[10px] font-mono uppercase font-semibold mb-0.5 ${
                      styleMode === 'two-tone' ? 'text-slate-400' : 'text-slate-500'
                    }`}>Email</span>
                    <a href={`mailto:${resumeData.email}`} className="hover:text-blue-600 font-semibold break-all">
                      {resumeData.email}
                    </a>
                  </div>

                  <div>
                    <span className={`block text-[10px] font-mono uppercase font-semibold mb-0.5 ${
                      styleMode === 'two-tone' ? 'text-slate-400' : 'text-slate-500'
                    }`}>LinkedIn</span>
                    <a 
                      href={resumeData.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-600 font-semibold break-all underline underline-offset-2"
                    >
                      {resumeData.linkedin}
                    </a>
                  </div>

                  <div>
                    <span className={`block text-[10px] font-mono uppercase font-semibold mb-0.5 ${
                      styleMode === 'two-tone' ? 'text-slate-400' : 'text-slate-500'
                    }`}>Address</span>
                    <span className={`font-semibold ${
                      styleMode === 'two-tone' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {resumeData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className={`mb-6 sm:mb-8 pb-5 sm:pb-6 border-b ${
                styleMode === 'two-tone' ? 'border-white/15' : 'border-slate-200'
              }`}>
                <h3 className={`text-sm sm:text-base font-bold uppercase tracking-tight mb-3 flex items-center gap-2 ${
                  styleMode === 'two-tone' ? 'text-white' : 'text-slate-900'
                }`}>
                  <Code size={14} className={styleMode === 'two-tone' ? 'text-blue-400' : 'text-blue-600'} />
                  <span>Skills</span>
                </h3>
                <ul className="space-y-1.5 text-xs font-medium">
                  {resumeData.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        styleMode === 'two-tone' ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="mb-4">
                <h3 className={`text-sm sm:text-base font-bold uppercase tracking-tight mb-3 flex items-center gap-2 ${
                  styleMode === 'two-tone' ? 'text-white' : 'text-slate-900'
                }`}>
                  <Globe size={14} className={styleMode === 'two-tone' ? 'text-blue-400' : 'text-blue-600'} />
                  <span>Languages</span>
                </h3>
                <div className="space-y-2 text-xs font-medium">
                  {resumeData.languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span>{lang}</span>
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        styleMode === 'two-tone' 
                          ? 'bg-white/10 text-slate-300' 
                          : 'bg-slate-200/70 text-slate-700'
                      }`}>
                        Proficient
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Column (Header, Summary, Experience, Education, Achievements) */}
          <main className="md:col-span-8 p-5 sm:p-7 md:p-10 flex flex-col justify-between bg-white text-slate-900">
            <div>
              {/* Header */}
              <header className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-slate-200">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-950 mb-1 sm:mb-2">
                  {resumeData.name}
                </h1>
                <p className="text-sm sm:text-lg font-mono font-bold uppercase tracking-widest text-blue-600">
                  {resumeData.title}
                </p>
              </header>

              {/* Professional Summary */}
              <section className="mb-6 sm:mb-8">
                <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-slate-900 mb-2 sm:mb-3 pb-1.5 border-b border-slate-200 flex items-center gap-2">
                  <Sparkles size={15} className="text-blue-600" />
                  <span>Professional Summary</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {resumeData.summary}
                </p>
              </section>

              {/* Work Experience */}
              <section className="mb-6 sm:mb-8">
                <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-slate-900 mb-3 sm:mb-4 pb-1.5 border-b border-slate-200 flex items-center gap-2">
                  <Briefcase size={15} className="text-blue-600" />
                  <span>Work Experience</span>
                </h2>
                <div className="space-y-5 sm:space-y-6">
                  {resumeData.experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-4 border-l-2 border-blue-600">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                        <h3 className="text-xs sm:text-sm font-bold uppercase text-slate-950">
                          {exp.company} <span className="text-slate-400 font-normal">| {exp.location}</span>
                        </h3>
                        <span className="text-[10px] font-mono text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded self-start sm:self-auto">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-blue-600 mb-2">
                        {exp.role}
                      </p>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="mb-6 sm:mb-8">
                <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-slate-900 mb-3 pb-1.5 border-b border-slate-200 flex items-center gap-2">
                  <GraduationCap size={15} className="text-blue-600" />
                  <span>Education</span>
                </h2>
                <div className="space-y-3">
                  {resumeData.education.map((edu, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900">{edu.degree}</h3>
                        <p className="text-xs text-slate-600">{edu.institution} {edu.cgpa ? `| ${edu.cgpa}` : ''}</p>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded self-start sm:self-auto">
                        {edu.year}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Achievements & Certifications */}
              <section>
                <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-slate-900 mb-3 pb-1.5 border-b border-slate-200 flex items-center gap-2">
                  <Award size={15} className="text-blue-600" />
                  <span>Achievements & Certifications</span>
                </h2>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {resumeData.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
