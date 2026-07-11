'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Variants } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/config/animations';

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  label?: string; // Small eyebrow label above heading
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

/**
 * Consistent section wrapper with scroll-triggered animations,
 * optional eyebrow label, title, and subtitle.
 */
export function SectionWrapper({
  id,
  children,
  className,
  innerClassName,
  label,
  title,
  subtitle,
  centered = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      id={id}
      ref={ref}
      className={cn('section', className)}
      aria-label={title ?? label}
    >
      <div className={cn('container-custom', innerClassName)}>
        {(label || title || subtitle) && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={cn('mb-16', centered && 'text-center')}
          >
            {label && (
              <motion.p
                variants={fadeInUp}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4"
              >
                {label}
              </motion.p>
            )}
            {title && (
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={fadeInUp}
                className={cn(
                  'text-lg text-white/50 max-w-2xl',
                  centered && 'mx-auto',
                )}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
