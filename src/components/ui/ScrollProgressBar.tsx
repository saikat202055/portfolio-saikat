import { m as motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  // A spring smooths out the raw scroll value so the bar doesn't feel jittery
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 35,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left bg-gradient-to-r from-[--color-primary] to-[--color-primary-light]"
    />
  );
}
