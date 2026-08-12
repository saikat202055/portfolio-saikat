import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { usePrefersReducedMotion } from './useMediaQuery';

/**
 * Animates a number from 0 to `target` once its ref scrolls into view.
 * Skips the animation entirely if the user prefers reduced motion.
 */
export function useCounter(target: number, duration = 1200) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-10% 0px',
  });

  const prefersReducedMotion = usePrefersReducedMotion();

  const [value, setValue] = useState(
    prefersReducedMotion ? target : 0
  );

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;

      const progress = Math.min(
        (timestamp - start) / duration,
        1
      );

      // Ease-out cubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(
        Number(
          (eased * target).toFixed(
            target % 1 !== 0 ? 2 : 0
          )
        )
      );

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [isInView, target, duration, prefersReducedMotion]);

  return { ref, value };
}