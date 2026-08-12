import { m as motion } from 'framer-motion';

import {
  ArrowUpRight,
  Cpu,
  GraduationCap,
  Users,
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

import { ABOUT_BIO } from '@/data/about';

import { MissionVisionGoals } from './MissionVisionGoals';


const highlights = [
  {
    icon: Cpu,
    title: 'Engineering',
    description:
      'Electronics, embedded systems & problem solving',
  },
  {
    icon: GraduationCap,
    title: 'Innovation',
    description:
      'AI, software & emerging technologies',
  },
  {
    icon: Users,
    title: 'Leadership',
    description:
      'Team building & community impact',
  },
];


const expertise = [
  'Electronics',
  'AI',
  'Software',
  'Digital Strategy',
];


const revealTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as const,
};


export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
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
      {/* BACKGROUND GLOW - LEFT */}

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
          blur-3xl
          sm:h-72
          sm:w-72
        "
      />


      {/* BACKGROUND GLOW - RIGHT */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/2
          -z-10
          h-64
          w-64
          rounded-full
          bg-[--color-primary]/5
          blur-3xl
          sm:h-72
          sm:w-72
        "
      />


      <Container className="relative">
        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}

          <div
            className="
              mx-auto
              w-full
              max-w-6xl
              text-center
              [&_h2]:lg:whitespace-nowrap
            "
          >
            <SectionHeading
              eyebrow="About Me"
              title="Engineering mindset. Technology vision."
              align="center"
            />
          </div>


          {/* MAIN ABOUT GRID */}

          <div
            className="
              mt-5
              grid
              min-w-0
              items-start
              gap-7
              sm:mt-6
              sm:gap-8
              lg:mt-7
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-10
              xl:grid-cols-2
              xl:gap-12
            "
          >

            {/* PROFILE CARD */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: '-10%',
              }}
              transition={revealTransition}
              className="
                relative
                mx-auto
                w-full
                max-w-sm
                sm:max-w-md
                lg:mx-0
                lg:max-w-[390px]
                xl:max-w-[420px]
              "
            >
              {/* BACK BORDER */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-3
                  -right-3
                  -z-10
                  h-full
                  w-full
                  rounded-3xl
                  border
                  border-[--color-primary]/30
                "
              />


              {/* PROFILE CARD CONTAINER */}

              <div
                className="
                  relative
                  aspect-square
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[--color-border]
                  bg-[--color-surface]
                  p-3
                  shadow-2xl
                "
              >
                {/* GRID BACKGROUND */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    opacity-20
                    [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
                    [background-size:30px_30px]
                  "
                />


                {/* CENTER GLOW */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-36
                    w-36
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[--color-primary]/20
                    blur-3xl
                    sm:h-40
                    sm:w-40
                  "
                />


                <div
                  className="
                    relative
                    flex
                    h-full
                    flex-col
                    justify-between
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                    p-4
                    backdrop-blur-sm
                    sm:p-5
                    xl:p-6
                  "
                >

                  {/* TOP BAR */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        shrink-0
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          h-2.5
                          w-2.5
                          rounded-full
                          bg-red-400/80
                        "
                      />

                      <span
                        className="
                          h-2.5
                          w-2.5
                          rounded-full
                          bg-yellow-400/80
                        "
                      />

                      <span
                        className="
                          h-2.5
                          w-2.5
                          rounded-full
                          bg-green-400/80
                        "
                      />
                    </div>


                    <span
                      className="
                        truncate
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-widest
                        text-white/40
                        sm:text-[11px]
                      "
                    >
                      Developer Profile
                    </span>
                  </div>


                  {/* CENTER ICON */}

                  <div
                    className="
                      relative
                      flex
                      min-h-0
                      flex-1
                      items-center
                      justify-center
                    "
                  >
                    <motion.div
                      animate={{
                        y: [0, -7, 0],
                        rotate: [0, 2, 0, -2, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="
                        relative
                        flex
                        h-28
                        w-28
                        items-center
                        justify-center
                        rounded-3xl
                        border
                        border-[--color-primary]/30
                        bg-[--color-primary]/10
                        shadow-2xl
                        sm:h-36
                        sm:w-36
                        xl:h-40
                        xl:w-40
                      "
                    >
                      <div
                        className="
                          absolute
                          inset-3
                          rounded-2xl
                          border
                          border-white/10
                        "
                      />

                      <Cpu
                        size={48}
                        strokeWidth={1.3}
                        aria-hidden="true"
                        className="text-[--color-primary]"
                      />

                      <motion.div
                        aria-hidden="true"
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 14,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="
                          absolute
                          -inset-4
                          rounded-3xl
                          border
                          border-dashed
                          border-[--color-primary]/20
                        "
                      />
                    </motion.div>
                  </div>


                  {/* BOTTOM INFO */}

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-widest
                        text-[--color-primary]
                        sm:text-[11px]
                      "
                    >
                      Engineering × Innovation
                    </p>


                    <h3
                      className="
                        mt-1.5
                        max-w-sm
                        text-sm
                        font-bold
                        leading-snug
                        text-white
                        sm:text-base
                        xl:text-lg
                      "
                    >
                      Building intelligent solutions through
                      engineering, AI and creativity.
                    </h3>


                    <div
                      className="
                        mt-2.5
                        flex
                        flex-wrap
                        gap-1.5
                        sm:gap-2
                      "
                    >
                      {expertise.map((item) => (
                        <span
                          key={item}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-2.5
                            py-1
                            text-[10px]
                            font-medium
                            text-white/60
                            sm:text-[11px]
                          "
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>


            {/* ABOUT CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: '-10%',
              }}
              transition={revealTransition}
              className="
                w-full
                min-w-0
              "
            >
              {/* SMALL LABEL */}

              <div
                className="
                  mb-2.5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[--color-border]
                  bg-[--color-surface]
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-[--color-primary]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[--color-primary]
                  "
                />

                A little about me
              </div>


              {/* CONTENT TITLE */}

              <h3
                className="
                  max-w-2xl
                  text-[1.6rem]
                  font-bold
                  leading-[1.12]
                  tracking-tight
                  sm:text-3xl
                  lg:text-[2rem]
                  xl:text-[2.2rem]
                "
              >
                Combining engineering thinking with{' '}

                <span className="text-[--color-primary]">
                  intelligent technology.
                </span>
              </h3>


              {/* BIO */}

              <div
                className="
                  mt-3
                  max-w-2xl
                  space-y-2
                "
              >
                {ABOUT_BIO.map((paragraph, index) => (
                  <p
                    key={index}
                    className="
                      text-sm
                      leading-[1.55rem]
                      text-[--color-text-muted]
                      lg:text-[13px]
                      lg:leading-[1.35rem]
                      xl:text-sm
                      xl:leading-6
                    "
                  >
                    {paragraph}
                  </p>
                ))}
              </div>


              {/* HIGHLIGHTS */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-1
                  gap-3
                  md:grid-cols-3
                "
              >
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="
                        group
                        flex
                        h-full
                        min-h-[102px]
                        flex-col
                        rounded-xl
                        border
                        border-[--color-border]
                        bg-[--color-surface]
                        p-3
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[--color-primary]/50
                        hover:shadow-lg
                      "
                    >
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-[--color-border]
                          bg-black/10
                        "
                      >
                        <Icon
                          size={16}
                          aria-hidden="true"
                          className="text-[--color-primary]"
                        />
                      </div>


                      <h4
                        className="
                          mt-2
                          text-sm
                          font-semibold
                        "
                      >
                        {item.title}
                      </h4>


                      <p
                        className="
                          mt-1
                          text-[11px]
                          leading-4
                          text-[--color-text-muted]
                          xl:text-xs
                        "
                      >
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>


              {/* CTA */}

              <a
                href="#skills"
                className="
                  group
                  mt-4
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[--color-primary]/40
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-[--color-primary]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[--color-primary]
                  hover:text-black
                  sm:w-auto
                "
              >
                Explore my skills

                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

            </motion.div>
          </div>


          {/* MISSION / VISION / GOALS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-10%',
            }}
            transition={revealTransition}
            className="
              mt-8
              sm:mt-10
              lg:mt-10
              xl:mt-12
            "
          >
            <MissionVisionGoals />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}


export default About;