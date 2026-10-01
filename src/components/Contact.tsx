import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Container, Button } from './UI/Base';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

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
      // In a real application, you would send this to an API endpoint
      // Example: await fetch('https://formspree.io/f/your-id', { method: 'POST', body: JSON.stringify(data) });
      
      console.log('Form Data:', data);
      
      // Simulating a network request
      await new Promise(resolve => setTimeout(resolve, 2000));
      
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
    <section id="contact" className="section-padding bg-[var(--bg-section)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-40px" }}
          >
            <div className="text-[#3B82F6] font-mono text-[9px] tracking-[0.4em] mb-6">07 / GET IN TOUCH</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-[1] mb-6">
              Have an idea? <br />
              <span className="text-gradient">Let's build it.</span>
            </h2>
            <p className="text-[#94A3B8] text-[14px] leading-relaxed mb-10 max-w-xs font-medium">
              Whether you're starting something new or improving an existing product, let's talk about what you're trying to build.
            </p>
            
            <div className="space-y-4">
              <div>
                <p className="text-[#64748B] text-[9px] font-mono uppercase tracking-widest mb-1 font-bold">Email Me</p>
                <a href="mailto:ubaidahmad@gmail.com" className="text-base md:text-lg font-bold hover:text-[#3B82F6] transition-colors break-all">
                  ubaidahmad@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[#64748B] text-[9px] font-mono uppercase tracking-widest mb-1 font-bold">Location</p>
                <p className="text-base md:text-lg font-bold uppercase">Islamabad, Pakistan</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-40px" }}
            className="p-5 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-white/5 shadow-2xl"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <CheckCircle size={40} className="text-[#3B82F6] mb-4" />
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Message Received.</h3>
                <p className="text-[#94A3B8] text-[12px] font-medium">Thanks for reaching out — I'll get back to you soon.</p>
                <Button variant="outline" className="mt-8" onClick={() => setStatus('idle')}>Send Another</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono text-[#64748B] uppercase tracking-widest ml-1 font-bold">Your Name</label>
                  <input 
                    {...register('name')}
                    type="text" 
                    placeholder="John Doe"
                    className={`w-full bg-[#111318] border ${errors.name ? 'border-red-500/50' : 'border-white/5'} rounded-xl px-5 py-3 text-[13px] focus:outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#1E2128] font-medium`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1">{errors.name.message}</span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono text-[#64748B] uppercase tracking-widest ml-1 font-bold">Email Address</label>
                  <input 
                    {...register('email')}
                    type="email" 
                    placeholder="john@example.com"
                    className={`w-full bg-[#111318] border ${errors.email ? 'border-red-500/50' : 'border-white/5'} rounded-xl px-5 py-3 text-[13px] focus:outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#1E2128] font-medium`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1">{errors.email.message}</span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono text-[#64748B] uppercase tracking-widest ml-1 font-bold">Project Details</label>
                  <textarea 
                    {...register('message')}
                    rows={4}
                    placeholder="Tell me about your project..."
                    className={`w-full bg-[#111318] border ${errors.message ? 'border-red-500/50' : 'border-white/5'} rounded-xl px-5 py-3 text-[13px] focus:outline-none focus:border-[#3B82F6] transition-colors placeholder:text-[#1E2128] resize-none font-medium`}
                  ></textarea>
                  {errors.message && (
                    <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1">{errors.message.message}</span>
                  )}
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <AlertCircle size={16} />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Something went wrong. Please try again.</span>
                  </div>
                )}

                <Button 
                  className="w-full py-4 text-[11px]" 
                  type="submit" 
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>SENDING...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>Start a Conversation</span>
                      <Send size={14} />
                    </div>
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
