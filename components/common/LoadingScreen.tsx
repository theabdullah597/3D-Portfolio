'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/**
 * Cinematic loading screen that plays once on first visit.
 * Animates a progress bar and fades out.
 */
export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 2200; // ms
    const interval = 20;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease the progress: fast start, slow near end
      const t = step / steps;
      const eased = t < 0.8 ? t * 1.2 : 0.96 + (t - 0.8) * 0.2;
      setProgress(Math.min(Math.round(eased * 100), 99));

      if (step >= steps) {
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => setDone(true), 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
          style={{ background: '#080810' }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="mb-16"
          >
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 opacity-20 blur-xl" />
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(124,58,237,0.3)]">
                <Image src="/images/logo.png" alt="Abdullah Logo" fill sizes="64px" className="object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-64 space-y-3"
          >
            <div className="relative h-px bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-600 via-violet-400 to-cyan-500"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/30 text-xs font-mono tracking-widest">LOADING</span>
              <span className="text-white/50 text-xs font-mono">{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
