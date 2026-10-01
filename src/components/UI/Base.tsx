import React from 'react';
import { motion } from 'framer-motion';

export const Container = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`max-w-6xl mx-auto px-4 sm:px-6 md:px-10 ${className}`}>
    {children}
  </div>
);

export const Reveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-slate-200 rounded-md ${className}`}></div>
);

export const SectionHeading = ({ number, title, subtitle }: { number: string, title: string, subtitle?: string }) => (
  <div className="mb-10 md:mb-16 relative overflow-hidden">
    <div className="absolute -top-4 sm:-top-6 left-0 sm:-left-4 text-5xl sm:text-7xl font-bold text-slate-900/5 select-none pointer-events-none uppercase tracking-tighter">
      {number}
    </div>
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-blue-600 font-mono text-[10px] tracking-[0.35em] uppercase font-bold">Section {number}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-[0.98] mb-4 max-w-2xl break-words text-slate-950">{title}</h2>
      {subtitle && (
        <p className="text-slate-600 text-[13px] sm:text-[14px] max-w-lg leading-relaxed text-balance font-normal">
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = "", 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }) => {
  const baseStyles = "px-4 sm:px-5 py-2.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest transition-all duration-300 ease-out inline-flex items-center justify-center gap-2 uppercase cursor-pointer disabled:cursor-not-allowed max-w-full text-center active:scale-[0.97] hover:-translate-y-0.5";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30",
    secondary: "bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200 hover:border-slate-300",
    outline: "border border-slate-300 text-slate-800 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 bg-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const SectionDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full h-px bg-slate-200 relative ${className}`}>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
    </div>
  </div>
);
