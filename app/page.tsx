'use client';

import dynamic from 'next/dynamic';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { ScrollProgress } from '@/components/common/ScrollProgress';
import { CursorFollower } from '@/components/common/CursorFollower';
import { PremiumBackground } from '@/components/common/PremiumBackground';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { useLenis } from '@/hooks/useLenis';

// Lazy load heavy sections for performance
const About = dynamic(() => import('@/components/sections/About').then(m => ({ default: m.About })));
const Skills = dynamic(() => import('@/components/sections/Skills').then(m => ({ default: m.Skills })));
const Projects = dynamic(() => import('@/components/sections/Projects').then(m => ({ default: m.Projects })));
const Services = dynamic(() => import('@/components/sections/Services').then(m => ({ default: m.Services })));
const ExperienceTimeline = dynamic(() => import('@/components/sections/Experience').then(m => ({ default: m.ExperienceTimeline })));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const Certifications = dynamic(() => import('@/components/sections/Certifications').then(m => ({ default: m.Certifications })));
const Contact = dynamic(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })));

export default function Home() {
  // Initialize Lenis smooth scroll globally
  useLenis();

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Background Animation */}
      <PremiumBackground />

      {/* Custom Cursor */}
      <CursorFollower />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <ExperienceTimeline />
        <Testimonials />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
