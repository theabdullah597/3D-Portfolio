'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function PremiumBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#020205] overflow-hidden pointer-events-none">
      {/* Futuristic Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_60%,transparent_100%)]" />
      
      {/* Moving Aurora Beams */}
      <motion.div 
        animate={{ 
          opacity: [0.4, 0.7, 0.4], 
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0] 
        }} 
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 left-1/4 w-[500px] h-[800px] bg-violet-600/40 rounded-[100%] blur-[120px] -rotate-45"
      />
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.6, 0.3], 
          scale: [1, 1.1, 1],
          rotate: [0, -10, 0]
        }} 
        transition={{ duration: 12, repeat: Infinity, delay: 2, ease: "easeInOut" }}
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-cyan-600/30 rounded-[100%] blur-[100px] rotate-45"
      />

      {/* Floating Ambient Dust */}
      {mounted && [...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full blur-[2px] ${i % 2 === 0 ? 'bg-violet-400' : 'bg-cyan-400'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -200],
            x: [0, (Math.random() - 0.5) * 80],
            opacity: [0, Math.random() * 0.8 + 0.4, 0],
            scale: [0, Math.random() * 2 + 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
}
