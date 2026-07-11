'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

/**
 * Premium custom cursor with magnetic-style ring follower.
 * Hides on touch devices.
 */
export function CursorFollower() {
  const { position } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Ring lags behind cursor for depth effect
  const ringPos = useRef({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsTouch('ontouchstart' in window);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    let animId: number;
    const animate = () => {
      ringPos.current.x += (position.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (position.y - ringPos.current.y) * 0.12;
      setRingPosition({ x: ringPos.current.x, y: ringPos.current.y });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [position, isTouch]);

  useEffect(() => {
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        getComputedStyle(target).cursor === 'pointer' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'A',
      );
    };
    const handleLeave = () => setIsHidden(true);
    const handleEnter = () => setIsHidden(false);
    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);

    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);
    return () => {
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Small dot cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isHidden ? 0 : 1,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ duration: 0 }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>

      {/* Ring follower */}
      <motion.div
        className="fixed top-0 left-0 z-[9996] pointer-events-none"
        style={{
          x: ringPosition.x - 20,
          y: ringPosition.y - 20,
        }}
        animate={{
          opacity: isHidden ? 0 : 1,
          scale: isPointer ? 1.5 : isClicking ? 0.8 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className={`w-10 h-10 rounded-full border transition-all duration-200 ${
            isPointer
              ? 'border-violet-400 bg-violet-500/10'
              : 'border-white/30 bg-transparent'
          }`}
        />
      </motion.div>
    </>
  );
}
