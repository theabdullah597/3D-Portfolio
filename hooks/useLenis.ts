'use client';

import { useEffect, useRef } from 'react';
import { isBrowser } from '@/lib/utils';

interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  orientation?: 'vertical' | 'horizontal';
  gestureOrientation?: 'vertical' | 'horizontal' | 'both';
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
}

/**
 * Initialize Lenis smooth scroll.
 * Returns the Lenis instance ref for use with GSAP ScrollTrigger.
 */
export function useLenis(options: LenisOptions = {}) {
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    if (!isBrowser) return;

    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let rafId: number;

    // Dynamically import Lenis to avoid SSR issues
    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: options.duration ?? 1.2,
        easing: options.easing ?? ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
        orientation: options.orientation ?? 'vertical',
        gestureOrientation: options.gestureOrientation ?? 'vertical',
        smoothWheel: options.smoothWheel ?? true,
        wheelMultiplier: options.wheelMultiplier ?? 1,
        touchMultiplier: options.touchMultiplier ?? 2,
      });

      lenisRef.current = lenis;

      // Sync with GSAP ScrollTrigger if available
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, [options.duration, options.smoothWheel]);

  return lenisRef;
}
