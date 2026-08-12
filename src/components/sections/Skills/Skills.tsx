import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

import { SKILL_CATEGORIES } from '@/data/skills';

import { SkillCategoryCard } from './SkillCategoryCard';

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
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
      {/* =====================================
          BACKGROUND GLOW - LEFT
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/3
          -z-10
          h-64
          w-64
          rounded-full
          bg-[--color-primary]/10
          blur-[110px]
          sm:h-72
          sm:w-72
          sm:blur-[120px]
        "
      />

      {/* =====================================
          BACKGROUND GLOW - RIGHT
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          -z-10
          h-64
          w-64
          rounded-full
          bg-[--color-primary]/5
          blur-[110px]
          sm:h-72
          sm:w-72
          sm:blur-[120px]
        "
      />

      <Container className="relative">
        {/* =====================================
            SECTION HEADING
        ====================================== */}

        <div
          className="
            mx-auto
            mb-6
            max-w-3xl
            text-center
            sm:mb-7
          "
        >
          <SectionHeading
            eyebrow="What I Work With"
            title="Skills & Tools"
            description="A snapshot of the technologies, engineering tools, marketing skills, and soft skills I bring to every project."
            align="center"
          />
        </div>

        {/* =====================================
            SKILLS GRID
        ====================================== */}

        <div
          className="
            grid
            min-w-0
            grid-cols-1
            items-stretch
            gap-5
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-4
          "
        >
          {SKILL_CATEGORIES.map(
            (category, index) => (
              <SkillCategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ),
          )}
        </div>
      </Container>
    </section>
  );
}

export default Skills;