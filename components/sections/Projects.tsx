'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/common/SocialIcons';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { MagneticButton } from '@/components/common/MagneticButton';
import { projects } from '@/config/portfolio';
import { useTiltEffect } from '@/hooks/useTiltEffect';
import { fadeInUp, staggerContainer } from '@/config/animations';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

const filters = ['All', 'Frontend', 'Fullstack', 'Backend', 'AI', 'Mobile'];

// Project card with 3D tilt effect
function ProjectCard({ project }: { project: Project }) {
  const tiltRef = useTiltEffect(12);
  const [hovered, setHovered] = useState(false);

  // Generate gradient based on project id
  const gradients = [
    'from-violet-600/20 to-indigo-600/20',
    'from-cyan-600/20 to-blue-600/20',
    'from-emerald-600/20 to-teal-600/20',
    'from-pink-600/20 to-rose-600/20',
    'from-orange-600/20 to-amber-600/20',
    'from-purple-600/20 to-violet-600/20',
  ];
  const gradient = gradients[parseInt(project.id) % gradients.length];

  return (
    <motion.article
      variants={fadeInUp}
      ref={tiltRef as React.RefObject<HTMLElement>}
      className="relative group glass rounded-2xl border border-white/10 overflow-hidden cursor-pointer card-glow"
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Image / Gradient hero */}
      <div className={cn('relative h-52 bg-gradient-to-br', gradient, 'overflow-hidden')}>
        {project.image && (
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover opacity-40 mix-blend-overlay group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Project year badge */}
        <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-medium text-white/60 border border-white/10">
          {project.year}
        </div>
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 bg-violet-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
            Featured
          </div>
        )}
        {/* Hover overlay with links */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#080810]/60 backdrop-blur-sm flex items-center justify-center gap-4"
            >
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-violet-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink size={16} />
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GithubIcon size={16} />
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-white/60 border border-white/[0.08]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <span className="text-xs text-white/30 capitalize">{project.category}</span>
          <ArrowUpRight
            size={16}
            className="text-white/30 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
          />
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(
      (p) => p.category.toLowerCase() === activeFilter.toLowerCase(),
    );

  return (
    <SectionWrapper
      id="projects"
      label="Portfolio"
      title="Featured Projects"
      subtitle="A selection of work I'm proud of — from ambitious side projects to shipped products."
      className="bg-gradient-to-b from-[#080810] via-[#0a0a14] to-[#080810]"
    >
      {/* Filter */}
      <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeFilter === f
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                : 'glass text-white/50 hover:text-white border border-white/10 hover:border-white/20',
            )}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, scale: 0.98 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA */}
      <motion.div variants={fadeInUp} className="mt-12 text-center">
        <MagneticButton
          href="https://github.com/theabdullah597"
          variant="ghost"
          size="md"
        >
          <GithubIcon size={16} />
          View All on GitHub
        </MagneticButton>
      </motion.div>
    </SectionWrapper>
  );
}
