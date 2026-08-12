import { useRef, type MouseEvent } from 'react';
import { usePrefersReducedMotion } from './useMediaQuery';

/**
 * Returns a ref + mousemove handler that update CSS custom properties
 * (--spotlight-x / --spotlight-y) directly on the DOM node instead of
 * through React state, so the glow tracks the cursor at 60fps without
 * triggering re-renders. No-ops entirely under reduced-motion.
 */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const onMouseMove = (e: MouseEvent<T>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`);
  };

  return { ref, onMouseMove };
}
