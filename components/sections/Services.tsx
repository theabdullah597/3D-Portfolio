'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Pen, Cpu, Cloud, Zap, Check, ArrowRight } from 'lucide-react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { services } from '@/config/portfolio';
import { fadeInUp, staggerContainer } from '@/config/animations';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  monitor: Monitor,
  server: Server,
  'pen-tool': Pen,
  cpu: Cpu,
  cloud: Cloud,
  zap: Zap,
};

export function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <SectionWrapper
      id="services"
      label="What I Do"
      title="Services"
      subtitle="End-to-end engineering across the full stack — from pixel-perfect UI to scalable infrastructure."
      className="bg-[#080810]"
    >
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          const isActive = activeService === service.id;

          return (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className={cn(
                'group relative glass rounded-2xl p-7 border transition-all duration-500 cursor-pointer overflow-hidden',
                isActive
                  ? 'border-violet-500/50 bg-violet-600/10'
                  : 'border-white/10 hover:border-violet-500/30',
              )}
              onClick={() => setActiveService(isActive ? null : service.id)}
            >
              {/* Gradient background on hover */}
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 rounded-2xl',
                  service.gradient,
                  (isActive || true) && 'group-hover:opacity-10',
                )}
              />

              {/* Icon */}
              <div className="relative z-10 mb-5">
                <div className={cn(
                  'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4',
                  service.gradient,
                )}>
                  {Icon && <Icon size={22} className="text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{service.description}</p>
              </div>

              {/* Features list */}
              <motion.div
                initial={false}
                animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-white/10 space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 text-sm text-white/60">
                      <Check size={13} className="text-emerald-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Expand indicator */}
              <div className="relative z-10 mt-4 flex items-center gap-1 text-xs text-white/30 group-hover:text-violet-400 transition-colors">
                <span>{isActive ? 'Less' : 'Details'}</span>
                <ArrowRight
                  size={11}
                  className={cn('transition-transform duration-300', isActive && 'rotate-90')}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
