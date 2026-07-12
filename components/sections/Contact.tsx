'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail, Phone, MapPin, Send,
  CheckCircle, AlertCircle
} from 'lucide-react';
import { socialIconMap } from '@/components/common/SocialIcons';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { MagneticButton } from '@/components/common/MagneticButton';
import { personalInfo, socialLinks } from '@/config/portfolio';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/config/animations';



type FormState = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialData: FormData = { name: '', email: '', subject: '', message: '' };

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<FormState>('idle');

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');

    try {
      // NOTE: User must replace these with their actual EmailJS keys
      const serviceId = 'service_kehn0rq';
      const templateId = 'template_5c0988t';
      const publicKey = 'EKlCbuzxLddT5Mltz';

      // Call EmailJS
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      setStatus('success');
      setFormData(initialData);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputClasses = (field: keyof FormData) =>
    `w-full glass border rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none transition-all duration-300 ${errors[field]
      ? 'border-red-500/50 focus:border-red-400/70'
      : 'border-white/10 focus:border-violet-500/50 focus:bg-violet-500/5'
    }`;

  return (
    <SectionWrapper
      id="contact"
      label="Get in Touch"
      title="Let's Build Something Amazing Together"
      subtitle="Whether you're looking for a developer to build your next web application, improve an existing platform, or collaborate on an AI-powered solution, I'd love to hear from you."
      className="bg-transparent"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Left: Contact info */}
        <motion.div variants={fadeInLeft} className="space-y-8">
          <div className="space-y-5">
            {[
              { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-all duration-300">
                  <item.icon size={18} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-xs text-white/30 mb-0.5">{item.label}</p>
                  <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Social links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">Find me on</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                    className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {Icon && <Icon size={16} />}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Availability card */}
          <div className="glass rounded-2xl p-6 border border-emerald-500/20 bg-emerald-500/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-400">Available for Projects</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              I'm currently accepting new projects and collaborations. Response time is usually within 24 hours.
            </p>
          </div>
        </motion.div>

        {/* Right: Contact form */}
        <motion.div variants={fadeInRight}>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl opacity-10 blur-sm group-hover:opacity-20 transition-opacity duration-500" />
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative glass rounded-2xl p-8 border border-white/10 space-y-5"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses('name')}
                    aria-label="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses('email')}
                    aria-label="Email address"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  id="contact-subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses('subject')}
                  aria-label="Message subject"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && <p id="subject-error" className="text-xs text-red-400 mt-1.5">{errors.subject}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  id="contact-message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses('message')} resize-none`}
                  aria-label="Your message"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <p id="message-error" className="text-xs text-red-400 mt-1.5">{errors.message}</p>}
              </div>

              <MagneticButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={status === 'sending'}
                aria-label="Send message"
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </MagneticButton>

              {/* Status messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3"
                    role="status"
                  >
                    <CheckCircle size={16} />
                    Message sent! I'll get back to you within 24 hours.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                    role="alert"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
