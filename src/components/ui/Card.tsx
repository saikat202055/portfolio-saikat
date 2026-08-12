import { type HTMLAttributes, type ReactNode } from 'react';
import { useSpotlight } from '@/hooks/useSpotlight';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Adds a subtle cursor-follow radial glow — use sparingly on featured cards. */
  spotlight?: boolean;
}

export function Card({ children, className = '', spotlight = false, ...rest }: CardProps) {
  const { ref, onMouseMove } = useSpotlight<HTMLDivElement>();

  return (
    <div
      ref={spotlight ? ref : undefined}
      onMouseMove={spotlight ? onMouseMove : undefined}
      className={`group/card relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 shadow-sm backdrop-blur-md transition-all duration-300 ease-[--ease-premium] hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5 ${className}`}
      {...rest}
    >
      {spotlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
          style={{
            background:
              'radial-gradient(320px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), color-mix(in srgb, var(--color-primary) 12%, transparent), transparent 70%)',
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
