import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

import { LEADERSHIP_ITEMS } from '@/data/leadership';

import { LeadershipCard } from './LeadershipCard';

export function Leadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-[--color-background]
        pb-16
        pt-2
        sm:pb-20
        sm:pt-3
        lg:pb-24
        lg:pt-4
      "
    >
      <Container className="relative">
        <div
          className="
            mx-auto
            w-full
            max-w-5xl
          "
        >
          {/* =========================
              SECTION HEADING
          ========================== */}

          <div
            className="
              mx-auto
              max-w-3xl
              text-center
            "
          >
            <SectionHeading
              eyebrow="Beyond the Classroom"
              title="Leadership & Volunteering"
            />
          </div>

          {/* =========================
              LEADERSHIP CARDS
          ========================== */}

          <div
            className="
              mx-auto
              mt-6
              flex
              w-full
              max-w-4xl
              min-w-0
              flex-col
              gap-4
              sm:mt-7
              sm:gap-5
              lg:mt-8
              lg:gap-5
            "
          >
            {LEADERSHIP_ITEMS.map((item, index) => (
              <LeadershipCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Leadership;