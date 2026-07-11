'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Download } from 'lucide-react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { certificates } from '@/config/portfolio';
import { fadeInUp, staggerContainer } from '@/config/animations';

export function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      label="Credentials"
      title="Certifications"
      subtitle="Industry-recognized credentials validating deep technical expertise."
      className="bg-gradient-to-b from-[#080810] via-[#0a0a14] to-[#080810]"
    >
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {certificates.map((cert, i) => (
          <motion.article
            key={cert.id}
            variants={fadeInUp}
            className="group relative glass rounded-2xl p-6 border border-white/10 hover:border-violet-500/30 transition-all duration-300 card-glow overflow-hidden"
          >
            {/* Gradient accent top */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20 border border-violet-500/20 flex items-center justify-center mb-4">
                <Award size={18} className="text-violet-400" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-400/70 mb-2 block">
                {cert.category}
              </span>
              <h3 className="text-sm font-semibold text-white leading-snug mb-1">{cert.title}</h3>
              <p className="text-xs text-white/40">{cert.issuer}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <span className="text-xs text-white/30">{cert.date}</span>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors"
                  aria-label={`View ${cert.title} credential`}
                >
                  Verify <ExternalLink size={10} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
