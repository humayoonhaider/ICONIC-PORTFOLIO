import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Container, Button } from './UI/Base';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Linkedin, MessageSquare } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { profile, socialLinks } from '../data/profile';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    trackEvent('contact_form_submitted');
    
    try {
      console.log('Form Data:', data);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      trackEvent('contact_form_success');
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      trackEvent('contact_form_error');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50/70 relative w-full max-w-full overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-30px" }}
          >
            <div className="text-blue-600 font-mono text-[10px] tracking-[0.25em] sm:tracking-[0.35em] uppercase font-bold mb-3 sm:mb-4">
              05 / GET IN TOUCH
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-[1.02] sm:leading-[0.98] mb-4 sm:mb-6 text-slate-950 break-words">
              Have a project? <br />
              <span className="text-gradient">Let's build it together.</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-md font-normal">
              Whether you need full-stack web development, custom database architecture, or institutional portal systems, reach out directly.
            </p>
            
            {/* Contact Cards Grid */}
            <div className="space-y-3 sm:space-y-4">
              {/* Phone */}
              <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white shadow-xs flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  <Phone size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-400 text-[9px] sm:text-[10px] font-mono uppercase font-bold">Call / WhatsApp</p>
                  <a 
                    href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`} 
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white shadow-xs flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-400 text-[9px] sm:text-[10px] font-mono uppercase font-bold">Direct Email</p>
                  <a 
                    href={`mailto:${profile.email}`} 
                    className="text-xs sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors break-all block"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white shadow-xs flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  <Linkedin size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-400 text-[9px] sm:text-[10px] font-mono uppercase font-bold">LinkedIn Profile</p>
                  <a 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors break-all block"
                  >
                    linkedin.com/in/ubaid-ahmad-a04ba6202
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white shadow-xs flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-400 text-[9px] sm:text-[10px] font-mono uppercase font-bold">Location</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900 uppercase">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-30px" }}
            className="p-5 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-lg w-full"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle size={26} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 uppercase tracking-tight text-slate-900">Message Received!</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-xs mb-6">
                  Thank you for reaching out. I'll review your project details and respond promptly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <MessageSquare size={16} className="text-blue-600 shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 uppercase">Send a Direct Message</h3>
                </div>

                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors placeholder:text-slate-400"
                    placeholder="e.g. Sarah Jenkins"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-[11px] font-mono mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.name.message}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors placeholder:text-slate-400"
                    placeholder="e.g. sarah@company.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-[11px] font-mono mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase font-bold text-slate-700 mb-1">
                    Project Requirements / Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors placeholder:text-slate-400 resize-none"
                    placeholder="Tell me about your project, timeline, and technology needs..."
                  />
                  {errors.message && (
                    <span className="text-red-500 text-[11px] font-mono mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message.message}
                    </span>
                  )}
                </div>

                <Button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full !py-3 sm:!py-3.5 flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <span>Sending Transmission...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
