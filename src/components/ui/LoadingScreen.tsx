import { useEffect, useState } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

const MIN_DISPLAY_MS = 700;

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const start = performance.now();

    const hide = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0);
      window.setTimeout(() => setIsVisible(false), remaining);
    };

    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
      return () => window.removeEventListener('load', hide);
    }
  }, []);

  // Always render the screen for a beat, but skip the animated
  // flourish entirely for users who prefer reduced motion.
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-label="Loading site"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[--color-bg-light] dark:bg-[--color-bg-dark]"
        >
          <motion.span
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-[--font-heading] text-3xl font-bold"
          >
            Saikat<span className="text-[--color-primary]">.</span>
          </motion.span>

          {!prefersReducedMotion && (
            <motion.span
              aria-hidden="true"
              className="absolute bottom-[35%] h-0.5 w-24 overflow-hidden rounded-full bg-black/10 dark:bg-white/10"
            >
              <motion.span
                className="block h-full w-1/2 bg-[--color-primary]"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.span>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
