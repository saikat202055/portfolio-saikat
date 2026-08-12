import { memo } from 'react';
import { m as motion } from 'framer-motion';

import {
  Megaphone,
  HeartHandshake,
  CalendarCheck2,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';

import { Card } from '@/components/ui/Card';
import type { LeadershipItem } from '@/data/leadership';

const ICON_MAP: Record<LeadershipItem['icon'], LucideIcon> = {
  Megaphone,
  HeartHandshake,
  CalendarCheck2,
};

interface LeadershipCardProps {
  item: LeadershipItem;
  index: number;
}

export const LeadershipCard = memo(function LeadershipCard({
  item,
  index,
}: LeadershipCardProps) {
  const Icon = ICON_MAP[item.icon];

  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: fromLeft ? -24 : 24,
        y: 8,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-8%',
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="w-full"
    >
      <Card
        spotlight
        className="
          group
          relative
          w-full
          overflow-hidden
          p-5
          sm:p-6
          lg:p-6
        "
      >
        {/* Hover glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-44
            w-44
            rounded-full
            bg-[--color-primary]/10
            blur-[80px]
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        <div
          className="
            relative
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-start
            sm:gap-5
          "
        >
          {/* Icon */}
          <motion.div
            whileHover={{
              scale: 1.06,
              rotate: 3,
            }}
            transition={{
              duration: 0.22,
            }}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-[--color-primary]/30
              bg-gradient-to-br
              from-[--color-primary]/15
              to-[--color-secondary]/10
              text-[--color-primary-light]
              transition-all
              duration-300
              group-hover:border-[--color-primary]/60
              sm:h-12
              sm:w-12
              sm:rounded-2xl
            "
          >
            <Icon
              size={20}
              aria-hidden="true"
            />
          </motion.div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <h3
                className="
                  text-base
                  font-bold
                  leading-snug
                  tracking-tight
                  text-[--color-text]
                  transition-colors
                  duration-300
                  group-hover:text-[--color-primary-light]
                  sm:text-lg
                "
              >
                {item.role}
              </h3>

              <ArrowUpRight
                size={16}
                className="
                  mt-0.5
                  shrink-0
                  text-[--color-primary]
                  opacity-50
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:opacity-100
                "
              />
            </div>

            {/* Organization */}
            <p
              className="
                mt-1
                text-sm
                font-semibold
                text-[--color-primary-light]
                sm:text-[0.95rem]
              "
            >
              {item.organization}
            </p>

            {/* Period */}
            <div className="mt-2">
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-[--color-border]
                  bg-[--color-surface]/70
                  px-3
                  py-1
                  font-[--font-mono]
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-[--color-text-muted]
                "
              >
                {item.period}
              </span>
            </div>

            {/* Description */}
            <p
              className="
                mt-3
                max-w-3xl
                text-[13px]
                leading-6
                text-[--color-text-muted]
                sm:text-sm
              "
            >
              {item.description}
            </p>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-1/2
            h-[2px]
            w-0
            -translate-x-1/2
            rounded-full
            bg-gradient-to-r
            from-[--color-primary]
            via-[--color-secondary]
            to-[--color-accent]
            transition-all
            duration-500
            group-hover:w-[70%]
          "
        />
      </Card>
    </motion.div>
  );
});