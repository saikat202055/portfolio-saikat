import { AnimatePresence, m as motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconButton } from '@/components/ui/IconButton';
import { TESTIMONIALS } from '@/data/testimonials';
import { useCarousel } from '@/hooks/useCarousel';
import { TestimonialCard } from './TestimonialCard';

export function Testimonials() {
  const { index, next, prev, goTo, pause, resume } = useCarousel(TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      aria-roledescription="carousel"
      className="bg-black/[0.02] py-20 dark:bg-white/[0.02] sm:py-28"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <Container>
        <SectionHeading eyebrow="Kind Words" title="Testimonials" />

        <div className="relative flex items-center justify-center gap-4">
          <IconButton
            icon={<ChevronLeft size={18} />}
            label="Previous testimonial"
            onClick={prev}
            className="hidden sm:inline-flex"
          />

          <div className="min-h-[16rem] flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <TestimonialCard testimonial={TESTIMONIALS[index]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <IconButton
            icon={<ChevronRight size={18} />}
            label="Next testimonial"
            onClick={next}
            className="hidden sm:inline-flex"
          />
        </div>

        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Select testimonial">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-[--color-primary]' : 'w-2 bg-black/15 dark:bg-white/20'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
