import { useState } from 'react';
import { resumeData } from '../data/resume';
import { useTheme } from '../context/ThemeContext';
import { trackEvent } from '../utils/analytics';
import { Download, Printer, Copy, Check, ExternalLink, X, Mail, MapPin, Globe, Github, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';

interface ResumeViewerProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const ResumeViewer = ({ onClose, isModal = false }: ResumeViewerProps) => {
  const [copied, setCopied] = useState(false);
  const { theme, themeLabel } = useTheme();

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
${resumeData.name} - ${resumeData.title}
Email: ${resumeData.email} | Location: ${resumeData.location}
Website: ${resumeData.website} | GitHub: ${resumeData.github}

PROFESSIONAL SUMMARY:
${resumeData.summary}

CORE TECHNICAL SKILLS:
${resumeData.skills.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n')}

WORK EXPERIENCE:
${resumeData.experience.map(exp => `
${exp.role} | ${exp.company} (${exp.period})
Location: ${exp.location}
Key Achievements:
${exp.highlights.map(h => `- ${h}`).join('\n')}
Technologies: ${exp.technologies.join(', ')}
`).join('\n')}

EDUCATION:
${resumeData.education.map(edu => `${edu.degree} - ${edu.institution} (${edu.year})`).join('\n')}

CERTIFICATIONS:
${resumeData.certifications.map(c => `- ${c}`).join('\n')}
    `.trim();

    try {
      await navigator.clipboard.writeText(textResume);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${isModal ? 'p-1 sm:p-6' : 'py-6 sm:py-8 px-2 sm:px-6'}`}>
      {/* Action Toolbar */}
      <div className="print:hidden mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-white/10 bg-[var(--bg-section)]/95 backdrop-blur-md sticky top-4 z-20 shadow-xl">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-pulse"></div>
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-white">
            Resume / Curriculum Vitae
          </span>
          <span className="text-[9px] font-mono text-[#64748B] hidden md:inline">
            ({themeLabel})
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <button
            onClick={handleDownload}
            className="cursor-pointer inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-200 ease-out shadow-lg shadow-blue-500/20 active:scale-95 hover:-translate-y-0.5"
            title="Download or save as clean PDF"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </button>

          <button
            onClick={handlePrint}
            className="cursor-pointer inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-lg border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-200 ease-out active:scale-95 hover:-translate-y-0.5"
            title="Print Resume"
          >
            <Printer size={14} className="text-[#94A3B8]" />
            <span className="hidden xs:inline sm:inline">Print</span>
          </button>

          <button
            onClick={handleCopyText}
            className="cursor-pointer inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 rounded-lg border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-all duration-200 ease-out active:scale-95 hover:-translate-y-0.5"
            title="Copy formatted resume text to clipboard"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-[#94A3B8]" />}
            <span className="hidden xs:inline sm:inline">{copied ? 'Copied!' : 'Copy Text'}</span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="cursor-pointer p-2 rounded-lg border border-white/10 hover:border-white/30 text-[#94A3B8] hover:text-white transition-all duration-200 ease-out ml-auto sm:ml-1 active:scale-95"
              aria-label="Close Resume"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Printable / Viewable Resume Document */}
      <div 
        id="resume-printable-document"
        className="bg-[var(--bg-card)] text-[#F3F4F6] border border-white/10 rounded-2xl p-4 sm:p-8 md:p-14 shadow-2xl relative overflow-hidden print:border-none print:shadow-none print:p-0 print:bg-white print:text-black print:rounded-none transition-colors duration-700"
      >
        {/* Subtle decorative background watermarks - hidden on print */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none print:hidden"></div>

        {/* Header Section */}
        <header className="border-b border-white/10 pb-8 mb-8 print:border-gray-300 print:pb-6 print:mb-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white print:text-black mb-2">
                {resumeData.name}
              </h1>
              <p className="text-sm sm:text-lg font-bold text-[#3B82F6] print:text-blue-700 tracking-wide uppercase">
                {resumeData.title}
              </p>
            </div>

            <div className="flex flex-col gap-2 text-[12px] font-mono text-[#94A3B8] print:text-gray-700 md:text-right">
              <a 
                href={`mailto:${resumeData.email}`} 
                className="inline-flex items-center gap-2 hover:text-[#3B82F6] transition-colors md:justify-end break-all"
              >
                <Mail size={13} className="text-[#3B82F6] print:text-gray-700 shrink-0" />
                <span>{resumeData.email}</span>
              </a>
              <div className="inline-flex items-center gap-2 md:justify-end">
                <MapPin size={13} className="text-[#3B82F6] print:text-gray-700 shrink-0" />
                <span>{resumeData.location}</span>
              </div>
              <a 
                href={resumeData.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 hover:text-[#3B82F6] transition-colors md:justify-end break-all"
              >
                <Github size={13} className="text-[#3B82F6] print:text-gray-700 shrink-0" />
                <span>github.com/ubaidahmad</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mt-6 pt-6 border-t border-white/5 print:border-gray-200">
            <p className="text-[13px] sm:text-[14px] text-[#A1A1AA] print:text-gray-800 leading-relaxed font-normal">
              {resumeData.summary}
            </p>
          </div>
        </header>

        {/* Technical Skills Section */}
        <section className="mb-10 print:mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Code2 size={16} className="text-[#3B82F6] print:text-blue-700" />
            <h2 className="text-xs sm:text-sm font-black font-mono tracking-[0.3em] uppercase text-white print:text-black">
              Core Technical Competencies
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {resumeData.skills.map((skillGroup) => (
              <div 
                key={skillGroup.category} 
                className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] print:border-gray-200 print:bg-transparent"
              >
                <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6] print:text-blue-700 font-bold mb-2">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-1.5 text-[12px] text-[#D4D4D8] print:text-gray-800 font-medium">
                  {skillGroup.items.map((item, idx) => (
                    <span key={item}>
                      {item}{idx < skillGroup.items.length - 1 && <span className="text-[#64748B] mx-1">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-10 print:mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={16} className="text-[#3B82F6] print:text-blue-700" />
            <h2 className="text-xs sm:text-sm font-black font-mono tracking-[0.3em] uppercase text-white print:text-black">
              Professional Work History
            </h2>
          </div>

          <div className="space-y-6">
            {resumeData.experience.map((exp, idx) => (
              <div 
                key={idx}
                className="relative pl-5 sm:pl-6 border-l-2 border-white/10 print:border-gray-300 pb-2"
              >
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#3B82F6] print:bg-black"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-white print:text-black uppercase tracking-tight">
                    {exp.role} <span className="text-[#3B82F6] print:text-blue-700 font-normal">@ {exp.company}</span>
                  </h3>
                  <span className="text-[11px] font-mono text-[#94A3B8] print:text-gray-600 font-bold uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[11px] font-mono text-[#64748B] print:text-gray-500 mb-3">
                  {exp.location}
                </p>

                <ul className="space-y-2 mb-3 text-[13px] text-[#A1A1AA] print:text-gray-800 leading-relaxed list-disc list-outside pl-4">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-[#60A5FA] print:text-gray-700">
                  <span className="text-[#64748B] mr-1">Stack:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tech} className="bg-white/5 print:bg-gray-100 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications Grid */}
        <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-white/10 print:border-gray-300">
          {/* Education */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={16} className="text-[#3B82F6] print:text-blue-700" />
              <h2 className="text-xs sm:text-sm font-black font-mono tracking-[0.3em] uppercase text-white print:text-black">
                Education
              </h2>
            </div>
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <h3 className="text-[13px] font-bold text-white print:text-black uppercase">
                  {edu.degree}
                </h3>
                <p className="text-[12px] text-[#3B82F6] print:text-blue-700 font-medium">
                  {edu.institution}
                </p>
                <p className="text-[11px] font-mono text-[#64748B] print:text-gray-500">
                  {edu.year}
                </p>
                {edu.details && (
                  <p className="text-[12px] text-[#94A3B8] print:text-gray-700 pt-1">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Award size={16} className="text-[#3B82F6] print:text-blue-700" />
              <h2 className="text-xs sm:text-sm font-black font-mono tracking-[0.3em] uppercase text-white print:text-black">
                Certifications
              </h2>
            </div>
            <ul className="space-y-2 text-[12px] text-[#A1A1AA] print:text-gray-800">
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#3B82F6] print:text-black font-bold">›</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-10 pt-6 border-t border-white/5 print:border-gray-200 text-center text-[10px] font-mono text-[#64748B] print:text-gray-500">
          Ubaid Ahmad — Curriculum Vitae · References and project codebases available upon request.
        </div>
      </div>
    </div>
  );
};
