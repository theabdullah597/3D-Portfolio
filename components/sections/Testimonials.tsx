'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { testimonials } from '@/config/portfolio';
import { fadeInUp } from '@/config/animations';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoRef = useRef<NodeJS.Timeout | null>(null);

  const startAuto = () => {
    autoRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, []);

  const go = (dir: number) => {
    if (autoRef.current) clearInterval(autoRef.current);
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
    startAuto();
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.96, transition: { duration: 0.35 } }),
  };

  const t = testimonials[current];

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <SectionWrapper
      id="testimonials"
      label="Social Proof"
      title="What People Say"
      subtitle="Words from teammates, clients, and collaborators."
      centered
      className="bg-transparent"
    >
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Main testimonial card */}
              <div className="relative glass rounded-3xl p-10 border border-white/10 overflow-hidden">
                {/* Glow accent */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-violet-600/20 blur-[60px]" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-cyan-600/10 blur-[60px]" />

                <Quote size={40} className="text-violet-500/30 mb-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 relative z-10">
                  "{t.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-white/40">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                  style={{ width: i === current ? 24 : 6, background: i === current ? 'transparent' : 'rgba(255,255,255,0.15)' }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === current}
                >
                  {i === current && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                      layoutId="dot"
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
