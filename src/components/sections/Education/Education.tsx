import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

import { EDUCATION_TIMELINE } from '@/data/education';

import { TimelineItem } from './TimelineItem';


export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="
        relative
        overflow-hidden
        pb-16
        pt-2
        sm:pb-20
        sm:pt-3
        lg:pb-24
        lg:pt-4
      "
    >
      <Container className="relative">

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
            eyebrow="Academic Journey"
            title="Education"
          />
        </div>


        {/* =========================
            EDUCATION TIMELINE
        ========================== */}

        <ol
          className="
            mx-auto
            mt-6
            w-full
            max-w-3xl
            min-w-0
            sm:mt-7
            lg:mt-8
          "
        >
          {EDUCATION_TIMELINE.map(
            (entry, index) => (
              <TimelineItem
                key={entry.id}
                entry={entry}
                index={index}
                isLast={
                  index ===
                  EDUCATION_TIMELINE.length - 1
                }
              />
            ),
          )}
        </ol>

      </Container>
    </section>
  );
}


export default Education;