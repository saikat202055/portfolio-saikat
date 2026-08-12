import { memo } from 'react';
import { m as motion } from 'framer-motion';

import {
  PROJECT_FILTERS,
  type ProjectFilter,
} from '@/data/projects';


interface ProjectFilterBarProps {
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}


export const ProjectFilterBar = memo(
  function ProjectFilterBar({
    active,
    onChange,
  }: ProjectFilterBarProps) {
    return (
      <div
        role="group"
        aria-label="Filter projects"
        className="
          inline-flex
          min-w-max
          items-center
          gap-1
          rounded-full
          border
          border-[--color-border]
          bg-[--color-surface]/70
          p-1
          shadow-sm
          backdrop-blur-xl
        "
      >
        {PROJECT_FILTERS.map((filter) => {
          const isActive =
            active === filter;

          const isOngoing =
            filter === 'Ongoing';

          return (
            <button
              key={filter}
              type="button"
              onClick={() => onChange(filter)}
              aria-pressed={isActive}
              className={[
                `
                  relative
                  isolate
                  flex
                  min-h-10
                  shrink-0
                  items-center
                  justify-center
                  gap-1.5
                  whitespace-nowrap
                  rounded-full
                  px-3.5
                  text-xs
                  font-semibold
                  transition-colors
                  duration-300
                  sm:px-4
                  sm:text-sm
                `,
                isActive
                  ? 'text-[--color-text]'
                  : `
                      text-[--color-text-muted]
                      hover:text-[--color-text]
                    `,
              ].join(' ')}
            >

              {/* ACTIVE BACKGROUND */}

              {isActive && (
                <motion.span
                  layoutId="project-filter-active"
                  aria-hidden="true"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 32,
                  }}
                  className="
                    absolute
                    inset-0
                    -z-10
                    rounded-full
                    border
                    border-[--color-primary]/30
                    bg-[--color-primary]/12
                    shadow-[0_8px_25px_-15px_var(--color-primary)]
                  "
                />
              )}


              {/* ONGOING INDICATOR */}

              {isOngoing && (
                <span
                  aria-hidden="true"
                  className="relative flex h-2 w-2"
                >
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-[--color-primary]
                      opacity-40
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-[--color-primary]
                    "
                  />
                </span>
              )}


              <span className="relative z-10">
                {filter}
              </span>

            </button>
          );
        })}
      </div>
    );
  },
);


export default ProjectFilterBar;