'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { experiences } from '@/config/portfolio';
import { cn } from '@/lib/utils';
import type { Experience } from '@/types';

const typeColors: Record<Experience['type'], string> = {
  'full-time': 'text-emerald-400 bg-emerald-400/10',
  'contract': 'text-blue-400 bg-blue-400/10',
  'freelance': 'text-amber-400 bg-amber-400/10',
  'internship': 'text-pink-400 bg-pink-400/10',
};

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });

  return (
    <SectionWrapper
      id="experience"
      label="Career"
      title="Work Experience"
      subtitle="A decade of building software that people love to use."
      className="bg-gradient-to-b from-[#080810] via-[#0a0a14] to-[#080810]"
    >
      <div ref={containerRef} className="relative max-w-3xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px">
          <motion.div
            className="h-full timeline-line"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            style={{ transformOrigin: 'top' }}
            transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>

        <div className="space-y-10 pl-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-[3.75rem] top-6 w-3 h-3 rounded-full bg-violet-500 border-2 border-[#080810] ring-2 ring-violet-500/30"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: i * 0.15 + 0.1, type: 'spring', stiffness: 300, damping: 20 }}
              />

              <article className="glass rounded-2xl p-7 border border-white/10 hover:border-violet-500/30 transition-all duration-300 card-glow group">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      <span className={cn(
                        'text-xs font-medium px-2.5 py-1 rounded-full capitalize',
                        typeColors[exp.type],
                      )}>
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-violet-400 font-medium text-sm">{exp.company}</p>
                  </div>
                  <div className="glass px-4 py-2 rounded-full text-xs font-medium text-white/50 border border-white/10 whitespace-nowrap">
                    {exp.duration}
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2.5 mb-5">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60 flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-white/50 border border-white/[0.08] group-hover:border-violet-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
