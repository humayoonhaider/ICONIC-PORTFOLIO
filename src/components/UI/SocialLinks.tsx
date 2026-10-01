import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { socialLinks } from '../../data/profile';
import { trackEvent } from '../../utils/analytics';

export interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
  variant?: 'minimal' | 'bordered' | 'glass';
}

interface SocialItem {
  name: string;
  url: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  colorHover: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconSize = 18,
  showLabels = false,
  variant = 'bordered',
}) => {
  const links: SocialItem[] = [
    {
      name: 'GitHub',
      url: socialLinks.github,
      icon: Github,
      colorHover: 'hover:text-white hover:border-white/40 hover:bg-white/5',
    },
    {
      name: 'LinkedIn',
      url: socialLinks.linkedin,
      icon: Linkedin,
      colorHover: 'hover:text-[#38BDF8] hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/10',
    },
    {
      name: 'Twitter',
      url: socialLinks.twitter,
      icon: Twitter,
      colorHover: 'hover:text-[#3B82F6] hover:border-[#3B82F6]/40 hover:bg-[#3B82F6]/10',
    },
  ];

  const handleClick = (platform: string) => {
    trackEvent('social_link_clicked', { platform });
  };

  const getVariantStyles = (item: SocialItem) => {
    switch (variant) {
      case 'minimal':
        return 'text-[#64748B] hover:text-white transition-colors duration-300';
      case 'glass':
        return `p-2.5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm text-[#94A3B8] shadow-sm transition-all duration-300 ${item.colorHover}`;
      case 'bordered':
      default:
        return `p-2 rounded-lg border border-white/5 bg-white/[0.02] text-[#64748B] transition-all duration-300 ${item.colorHover}`;
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((item) => {
        const IconComponent = item.icon;
        return (
          <motion.a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(item.name)}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`cursor-pointer inline-flex items-center gap-2 group relative ${getVariantStyles(item)}`}
            aria-label={`Visit ${item.name} profile`}
            title={`Follow on ${item.name}`}
          >
            <IconComponent size={iconSize} className="transition-transform duration-300 group-hover:scale-110" />
            {showLabels && (
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
                {item.name}
              </span>
            )}
            
            {/* Subtle glow highlight */}
            <span className="absolute inset-0 rounded-lg bg-[#3B82F6]/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity pointer-events-none" />
          </motion.a>
        );
      })}
    </div>
  );
};
