import { memo } from 'react';
import { m as motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import type { TimelineEntry } from '@/types';

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  isLast: boolean;
}

export const TimelineItem = memo(function TimelineItem({
  entry,
  index,
  isLast,
}: TimelineItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{
        delay: index * 0.12,
        duration: 0.55,
      }}
      className="relative pb-10 pl-14 last:pb-0 sm:pl-16"
    >
      {/* Timeline line */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[15px] top-10 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-[--color-primary]/60 via-[--color-primary]/25 to-transparent sm:left-[19px]"
        />
      )}

      {/* Timeline icon */}
      <motion.span
        whileHover={{ scale: 1.12, rotate: 5 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[--color-primary]/30 bg-[--color-primary]/15 text-[--color-primary] shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_20%,transparent)] sm:h-10 sm:w-10"
      >
        <GraduationCap size={18} aria-hidden="true" />
      </motion.span>

      {/* Education Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="group relative overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-surface]/70 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[--color-primary]/40 hover:shadow-xl hover:shadow-[--color-primary]/10 sm:p-6"
      >
        {/* Hover glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[--color-primary]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="relative">
          {/* Period */}
          <p className="mb-2 inline-flex rounded-full border border-[--color-primary]/20 bg-[--color-primary]/10 px-3 py-1 font-[--font-mono] text-[10px] font-medium tracking-wide text-[--color-primary]">
            {entry.period}
          </p>

          {/* Degree */}
          <h3 className="text-base font-bold leading-snug sm:text-lg">
            {entry.title}
          </h3>

          {/* Institution */}
          <p className="mt-2 font-medium text-[--color-primary]">
            {entry.subtitle}
          </p>

          {/* Description */}
          {entry.description && (
            <p className="mt-3 text-sm leading-relaxed text-[--color-text-muted]">
              {entry.description}
            </p>
          )}
        </div>
      </motion.div>
    </motion.li>
  );
});