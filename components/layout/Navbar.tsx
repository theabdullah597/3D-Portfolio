'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { navItems } from '@/config/portfolio';
import { MagneticButton } from '@/components/common/MagneticButton';
import { cn } from '@/lib/utils';

/**
 * Glass navigation bar with scroll-triggered background,
 * active section tracking, and mobile drawer.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navItems.map((item) => item.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'py-4 backdrop-blur-xl bg-[#080810]/40 border-b border-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
            : 'py-8',
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="relative group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Abdullah - Home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3">
              <motion.div 
                className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden border border-white/10"
                whileHover={{ scale: 1.05, borderRadius: '50%' }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/images/logo.png" alt="Abdullah Logo" fill sizes="40px" className="object-cover" />
              </motion.div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 font-bold text-base tracking-tight hidden sm:block">
                Abdullah
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Desktop navigation">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
                    isActive
                      ? 'text-white'
                      : 'text-white/50 hover:text-white/80',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <MagneticButton
              onClick={() => handleNavClick('#contact')}
              variant="primary"
              size="sm"
              className="hidden md:inline-flex"
            >
              Hire Me
            </MagneticButton>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-x-0 top-20 z-40 mx-4 rounded-2xl glass border border-white/10 p-6 md:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="pt-2 border-t border-white/10">
                <MagneticButton
                  onClick={() => handleNavClick('#contact')}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Hire Me
                </MagneticButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
