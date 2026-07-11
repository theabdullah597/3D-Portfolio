'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
  disabled?: boolean;
  'aria-label'?: string;
}

const variants = {
  primary: 'bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white shadow-lg shadow-violet-500/25',
  secondary: 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25',
  ghost: 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20',
  outline: 'border border-violet-500/50 hover:border-violet-400 text-violet-400 hover:text-violet-300 hover:bg-violet-500/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

/**
 * Magnetic button with ripple effect and hover animations.
 */
export function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const magneticRef = useMagneticEffect(0.3);

  const baseClasses = cn(
    'relative inline-flex items-center justify-center gap-2',
    'rounded-full font-medium',
    'transition-all duration-300',
    'overflow-hidden',
    'cursor-pointer',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className,
  );

  const content = (
    <>
      {/* Ripple/shimmer overlay */}
      <span className="absolute inset-0 shimmer opacity-0 hover:opacity-100 transition-opacity" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={magneticRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
        aria-label={ariaLabel}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={magneticRef as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
