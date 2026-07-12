'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { socialIconMap } from '@/components/common/SocialIcons';
import { MagneticButton } from '@/components/common/MagneticButton';
import { personalInfo, socialLinks, achievements } from '@/config/portfolio';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { fadeInUp, staggerContainer } from '@/config/animations';
import dynamic from 'next/dynamic';

// Dynamically import the 3D scene to avoid SSR issues
const HeroScene = dynamic(() => import('@/components/three/HeroScene').then(m => ({ default: m.HeroScene })), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />,
});

// Typing animation hook
function useTypingAnimation(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentWord.length) {
            setText(currentWord.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          if (text.length > 0) {
            setText(text.slice(0, -1));
          } else {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}



export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const typedText = useTypingAnimation([
    'Software Engineering Student',
    'Full Stack Web Developer',
    'Machine Learning Engineer',
  ]);

  // Mouse parallax for hero content
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const contentX = useTransform(springX, [-1, 1], [-8, 8]);
  const contentY = useTransform(springY, [-1, 1], [-6, 6]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-start md:justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#080810]/30 via-transparent to-[#080810]" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-t from-[#080810] to-transparent" />

      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-violet-600/20 blur-[120px] blob-1 pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-cyan-500/15 blur-[100px] blob-2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-blue-600/10 blur-[80px] blob-3 pointer-events-none" />

      {/* Hero Content */}
      <motion.div
        style={{ x: contentX, y: contentY }}
        className="relative z-10 container-custom w-full pt-40 sm:pt-48 md:pt-56 pb-20 mt-16 md:mt-0"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Status badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-8">
            <div className="glass border border-white/10 rounded-2xl md:rounded-full px-4 py-3 flex items-center justify-center gap-3 w-full md:w-auto mx-auto flex-wrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-medium text-white/60 text-center leading-relaxed">
                {/* @ts-ignore */}
                {personalInfo.status || 'Available for Freelance • Open to Internship • Open to Remote Opportunities'}
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={fadeInUp} className="overflow-hidden mb-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.05] pb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60 drop-shadow-2xl">{personalInfo.name}</span>
            </h1>
          </motion.div>

          {/* Typing animation */}
          <motion.div variants={fadeInUp} className="mb-8 h-10 flex items-center justify-center">
            <div className="flex items-center gap-1">
              <span className="text-xl md:text-2xl text-violet-400 font-medium min-w-[200px] text-center">
                {typedText}
                <span className="animate-pulse ml-0.5 opacity-80">|</span>
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <MagneticButton
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink size={16} />
              View Projects
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              size="lg"
              href={personalInfo.resumeUrl}
            >
              <Download size={16} />
              Download Resume
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </MagneticButton>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16"
          >
            {achievements.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-3xl md:text-4xl font-semibold text-white mb-1">
                  <AnimatedCounter
                    end={parseInt(stat.value.replace(/\D/g, ''))}
                    suffix={stat.value.replace(/[0-9]/g, '')}
                  />
                </div>
                <div className="text-xs text-white/40 font-medium tracking-wide">
                  {stat.title}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {Icon && <Icon size={16} />}
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest font-medium uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
