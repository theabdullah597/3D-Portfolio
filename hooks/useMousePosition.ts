'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Track the current mouse position, normalized to [-1, 1] range.
 * Returns both raw pixel coords and normalized coords.
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [normalized, setNormalized] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (frameRef.current !== null) return;
      
      frameRef.current = requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        setPosition({ x: clientX, y: clientY });
        setNormalized({
          x: (clientX / window.innerWidth) * 2 - 1,
          y: -(clientY / window.innerHeight) * 2 + 1,
        });
        frameRef.current = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return { position, normalized };
}
