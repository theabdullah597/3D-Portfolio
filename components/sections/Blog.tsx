'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowUpRight, Tag } from 'lucide-react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { blogPosts } from '@/config/portfolio';
import { fadeInUp, staggerContainer } from '@/config/animations';
import { cn } from '@/lib/utils';
import type { BlogPost } from '@/types';

const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

// Gradient colors for category badges
const categoryGradients: Record<string, string> = {
  Animation: 'from-violet-500/20 to-purple-500/20 border-violet-500/20 text-violet-400',
  Architecture: 'from-blue-500/20 to-cyan-500/20 border-blue-500/20 text-blue-400',
  '3D': 'from-emerald-500/20 to-teal-500/20 border-emerald-500/20 text-emerald-400',
  'Design Systems': 'from-pink-500/20 to-rose-500/20 border-pink-500/20 text-pink-400',
  AI: 'from-amber-500/20 to-orange-500/20 border-amber-500/20 text-amber-400',
  TypeScript: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/20 text-cyan-400',
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.a
      href={post.url}
      variants={fadeInUp}
      className="group glass rounded-2xl border border-white/10 hover:border-violet-500/30 overflow-hidden transition-all duration-300 card-glow flex flex-col"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Image area */}
      <div className="relative h-44 bg-gradient-to-br from-white/[0.03] to-white/[0.07] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(124,58,237,0.3) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(6,182,212,0.2) 0%, transparent 60%)',
          }}
        />
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-white/5">
            {post.title.charAt(0)}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className={cn(
            'text-xs font-semibold px-3 py-1.5 rounded-full border bg-gradient-to-r',
            categoryGradients[post.category] ?? 'from-white/10 to-white/5 border-white/10 text-white/50',
          )}>
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-base font-semibold text-white leading-snug mb-3 group-hover:text-violet-300 transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed mb-4 line-clamp-2 flex-1">{post.excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-3 text-xs text-white/30">
            <div className="flex items-center gap-1">
              <Clock size={11} />
              {post.readTime}
            </div>
            <span>·</span>
            <span>{post.date}</span>
          </div>
          <ArrowUpRight
            size={15}
            className="text-white/30 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
          />
        </div>
      </div>
    </motion.a>
  );
}

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper
      id="blog"
      label="Writing"
      title="From the Blog"
      subtitle="Deep dives into engineering, design, and the craft of building great software."
      className="bg-transparent"
    >
      {/* Category filters */}
      <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeCategory === cat
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                : 'glass text-white/50 hover:text-white border border-white/10 hover:border-white/20',
            )}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Blog grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
