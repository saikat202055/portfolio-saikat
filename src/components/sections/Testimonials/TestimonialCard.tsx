import { memo } from 'react';
import { m as motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { LazyImage } from '@/components/ui/LazyImage';
import type { Testimonial } from '@/types';

export const TestimonialCard = memo(function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6 }}
      className="mx-auto w-full max-w-3xl"
    >
      <Card
        spotlight
        className="
          group
          relative
          overflow-hidden
          p-7
          text-center
          sm:p-10
        "
      >
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-40
            w-40
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[--color-primary]/10
            blur-3xl
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Quote icon */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: -4 }}
          className="
            relative
            mx-auto
            mb-5
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-[--color-primary]/20
            bg-[--color-primary]/10
            text-[--color-primary-light]
          "
        >
          <Quote size={22} aria-hidden="true" />
        </motion.div>

        {/* Stars */}
        <div
          aria-hidden="true"
          className="mb-5 flex justify-center gap-1 text-[--color-secondary]"
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              fill="currentColor"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote
          className="
            relative
            text-base
            font-medium
            leading-7
            text-[--color-text]
            sm:text-xl
            sm:leading-8
          "
        >
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Person */}
        <figcaption className="relative mt-8 flex flex-col items-center">
          <div
            className="
              rounded-full
              p-[2px]
              bg-gradient-to-br
              from-[--color-primary]
              via-[--color-secondary]
              to-[--color-accent]
              shadow-[0_0_25px_color-mix(in_srgb,var(--color-primary)_15%,transparent)]
            "
          >
            <LazyImage
              src={testimonial.avatar}
              alt={testimonial.name}
              wrapperClassName="h-16 w-16 rounded-full border-2 border-[--color-bg]"
            />
          </div>

          <span className="mt-4 font-bold tracking-tight">
            {testimonial.name}
          </span>

          <span className="mt-1 text-sm text-[--color-text-muted]">
            {testimonial.role}
          </span>
        </figcaption>

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
            group-hover:w-1/2
          "
        />
      </Card>
    </motion.figure>
  );
});