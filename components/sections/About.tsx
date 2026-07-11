'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, MapPin, Mail, Calendar, Award } from 'lucide-react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { MagneticButton } from '@/components/common/MagneticButton';
import { personalInfo, education, achievements } from '@/config/portfolio';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/config/animations';

export function About() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: true, margin: '-10%' });

  return (
    <SectionWrapper
      id="about"
      label="About Me"
      title="The Story Behind the Code"
      className="bg-gradient-to-b from-[#080810] via-[#0a0a14] to-[#080810]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Bio + Info */}
        <motion.div variants={fadeInLeft} className="space-y-8">
          {/* Profile card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative glass rounded-2xl p-8 border border-white/10">
              {/* Avatar placeholder */}
              <div className="flex items-start gap-6 mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-violet-600 via-violet-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">AM</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{personalInfo.name}</h3>
                  <p className="text-violet-400 text-sm font-medium mt-0.5">{personalInfo.title}</p>
                  <div className="flex items-center gap-1.5 mt-2 text-white/40 text-sm">
                    <MapPin size={12} />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed text-sm">{personalInfo.bio}</p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Mail size={14} className="text-violet-400" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Open to work</span>
                </div>
              </div>

              <div className="mt-6">
                <MagneticButton
                  href={personalInfo.resumeUrl}
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  <Download size={14} />
                  Download Resume
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Achievement stats */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((ach) => (
              <motion.div
                key={ach.id}
                variants={fadeInUp}
                className="glass rounded-xl p-5 border border-white/10 hover:border-violet-500/30 transition-all duration-300 card-glow"
              >
                <div className="text-3xl font-bold text-white mb-1">{ach.value}</div>
                <div className="text-sm font-medium text-white/70">{ach.title}</div>
                <div className="text-xs text-white/40 mt-0.5">{ach.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Education Timeline */}
        <motion.div variants={fadeInRight} ref={timelineRef} className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-6">
              Education
            </p>
            <div className="relative space-y-6 pl-6">
              {/* Timeline line */}
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: '100%' } : { height: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute left-0 top-2 bottom-2 w-px timeline-line"
              />

              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-violet-500 border-2 border-[#080810] ring-1 ring-violet-500/50" />

                  <div className="glass rounded-xl p-6 border border-white/10 hover:border-violet-500/20 transition-all duration-300 card-glow">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-semibold text-white text-base">
                        {edu.degree} · {edu.field}
                      </h4>
                      <span className="text-xs text-white/30 whitespace-nowrap">{edu.duration}</span>
                    </div>
                    <p className="text-violet-400 text-sm font-medium mb-3">{edu.institution}</p>
                    {edu.gpa && (
                      <p className="text-xs text-white/40 mb-2">GPA: {edu.gpa}</p>
                    )}
                    {edu.achievements && (
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((a) => (
                          <span
                            key={a}
                            className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full"
                          >
                            <Award size={10} />
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick facts */}
          <div className="glass rounded-xl p-6 border border-white/10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-4">
              Quick Facts
            </p>
            <div className="space-y-3">
              {[
                { label: 'Specialization', value: 'Frontend / Full Stack' },
                { label: 'Industries', value: 'SaaS, Fintech, AI' },
                { label: 'Team Size Led', value: 'Up to 12 engineers' },
                { label: 'Preferred Stack', value: 'Next.js · TypeScript · AWS' },
                { label: 'Working Since', value: '2016' },
              ].map((fact) => (
                <div key={fact.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <span className="text-sm text-white/40">{fact.label}</span>
                  <span className="text-sm font-medium text-white/80">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
