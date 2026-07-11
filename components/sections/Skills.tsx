'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { skills } from '@/config/portfolio';
import { fadeInUp, staggerContainer } from '@/config/animations';
import type { Skill } from '@/types';
import { cn } from '@/lib/utils';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'devops', label: 'DevOps' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'design', label: 'Design' },
] as const;

// Animated circular progress ring
function SkillRing({ level, size = 64 }: { level: number; size?: number }) {
  const ref = useRef<SVGCircleElement>(null);
  const isInView = useInView(ref, { once: true });
  const radius = (size - 8) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (level / 100) * circumference;

  return (
    <svg width={size} height={size} className="progress-ring" aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={4} />
      <motion.circle
        ref={ref}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#skillGradient)"
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={isInView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      <defs>
        <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="relative group glass rounded-2xl p-6 border border-white/10 hover:border-violet-500/30 transition-all duration-300 cursor-default overflow-hidden card-glow"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-600/5 rounded-2xl"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 flex items-center gap-4">
        {/* Skill ring */}
        <div className="relative flex-shrink-0">
          <SkillRing level={skill.level} size={60} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-white">{skill.level}</span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-white truncate">{skill.name}</h3>
          <div className="mt-2 relative h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <SectionWrapper
      id="skills"
      label="Expertise"
      title="Skills & Technologies"
      subtitle="A curated set of tools I reach for to build exceptional products."
      className="bg-[#080810]"
    >
      {/* Filter tabs */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-wrap gap-2 mb-10"
      >
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeCategory === cat.key
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                : 'glass text-white/50 hover:text-white border border-white/10 hover:border-white/20',
            )}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Skills grid */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filtered.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
