'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import { socialIconMap } from '@/components/common/SocialIcons';
import { personalInfo, socialLinks } from '@/config/portfolio';



export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050508] overflow-hidden" role="contentinfo">
      {/* Ambient background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="h-24 w-full" /> {/* Explicit Spacer */}

      <div className="container-custom pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center gap-4 group cursor-pointer w-fit" onClick={scrollTop}>
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(124,58,237,0.2)] group-hover:border-violet-500/50 transition-colors duration-300">
                <Image src="/images/logo.png" alt="Abdullah Logo" fill sizes="48px" className="object-cover" />
              </div>
              <span className="text-white text-xl font-bold tracking-tight">{personalInfo.name}</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              {personalInfo.title} based in {personalInfo.location}. Building modern, scalable web applications and intelligent AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/50 hover:text-violet-400 transition-colors w-fit">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {Icon && <Icon size={18} />}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-white/40 text-sm flex items-center gap-2">
              Built with <Heart size={14} className="text-violet-500 fill-violet-500 animate-pulse" /> by {personalInfo.name}
            </p>
            <motion.button
              onClick={scrollTop}
              className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-violet-500/30 transition-all duration-300 ml-4"
              whileHover={{ scale: 1.1, y: -2 }}
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
