import { useRef } from 'react';

import {
  m as motion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion';

import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { IconButton } from '@/components/ui/IconButton';

import profileImage from '@/assets/images/hero/profile.jpg';

import { TypingText } from './TypingText';


/* =========================================================
   SOCIAL LINKS
========================================================= */

const SOCIAL_LINKS = {
  github: 'https://github.com/saikat202055',

  linkedin:
    'https://www.linkedin.com/in/md-ariful-islam-620627311/',

  facebook:
    'https://www.facebook.com/saikat806',

  email: 'arafsaikat6@gmail.com',
};


/* =========================================================
   TYPING ROLES
========================================================= */

const ROLES = [
  'AI & Software Developer',
  'Digital Marketing Expert',
  'Student Ambassador',
];


/* =========================================================
   HERO STATS
========================================================= */

const HERO_STATS = [
  {
    value: '5+',
    label: 'Projects Built',
  },
  {
    value: '10+',
    label: 'Events Led',
  },
  {
    value: '3+',
    label: 'Projects Ongoing',
  },
];


/* =========================================================
   FACEBOOK ICON
========================================================= */

function FacebookIcon({
  size = 18,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1.02.28-1.72 1.75-1.72H17V2.4c-.3-.04-1.35-.13-2.57-.13-2.54 0-4.28 1.55-4.28 4.4V9.5H7.3V13h2.85v9h3.35Z" />
    </svg>
  );
}


/* =========================================================
   ANIMATION
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: (index: number = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: index * 0.1,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};


const imageEntrance: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      delay: 0.25,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


/* =========================================================
   HERO COMPONENT
========================================================= */

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);


  const { scrollYProgress } = useScroll({
    target: sectionRef,

    offset: [
      'start start',
      'end start',
    ],
  });


  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '30%'],
  );


  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0],
  );


  /* =======================================================
     PROJECT SCROLL
  ======================================================= */

  const scrollToProjects = () => {
    const projectsSection =
      document.querySelector('#projects');

    if (!projectsSection) {
      console.warn(
        'Projects section not found.',
      );

      return;
    }

    projectsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };


  /* =======================================================
     EXTERNAL LINK
  ======================================================= */

  const openExternalLink = (
    url: string,
  ) => {
    if (!url) return;

    window.open(
      url,
      '_blank',
      'noopener,noreferrer',
    );
  };


  /* =======================================================
     RESUME DOWNLOAD
  ======================================================= */

  const downloadResume = () => {
    const resumeUrl =
      `${import.meta.env.BASE_URL}resume.pdf`;

    const link =
      document.createElement('a');

    link.href = resumeUrl;

    link.download =
      'Saikat-Resume.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };


  /* =======================================================
     EMAIL
  ======================================================= */

  const sendEmail = () => {
    if (!SOCIAL_LINKS.email) return;

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        SOCIAL_LINKS.email,
      )}`;

    window.open(
      gmailUrl,
      '_blank',
      'noopener,noreferrer',
    );
  };


  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="Introduction"
      className="
        relative
        isolate
        flex
        min-h-[100svh]
        items-center
        overflow-hidden
        pt-[88px]
        sm:min-h-[100dvh]
      "
    >

      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              currentColor 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              currentColor 1px,
              transparent 1px
            )
          `,

          backgroundSize:
            '48px 48px',
        }}
      />


      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        style={{
          y: glowY,
          opacity: glowOpacity,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
      >
        <div
          className="
            absolute
            left-[42%]
            top-[15%]
            h-[22rem]
            w-[22rem]
            -translate-x-1/2
            rounded-full
            bg-[--color-primary]/15
            blur-[110px]
            sm:h-[30rem]
            sm:w-[30rem]
            sm:blur-[125px]
          "
        />

        <div
          className="
            absolute
            left-[8%]
            top-[48%]
            h-32
            w-32
            rounded-full
            bg-blue-500/10
            blur-[80px]
            sm:h-36
            sm:w-36
            sm:blur-[90px]
          "
        />

        <div
          className="
            absolute
            right-[8%]
            top-[32%]
            h-40
            w-40
            rounded-full
            bg-purple-500/10
            blur-[90px]
            sm:h-48
            sm:w-48
            sm:blur-[100px]
          "
        />
      </motion.div>


      {/* =====================================================
          DECORATIVE CIRCLES
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-[52%]
          -z-10
          h-64
          w-64
          -translate-y-1/2
          rounded-full
          border
          border-[--color-primary]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-36
          top-[22%]
          -z-10
          h-72
          w-72
          rounded-full
          border
          border-[--color-primary]/10
        "
      />


      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <Container
        className="
          relative
          w-full
          py-6
          sm:py-8
          lg:py-8
        "
      >
        <div
          className="
            grid
            min-w-0
            grid-cols-1
            items-center
            gap-8
            lg:grid-cols-[minmax(0,1.08fr)_minmax(350px,0.92fr)]
            lg:gap-14
            xl:gap-20
          "
        >

          {/* =================================================
              CONTENT
          ================================================== */}

          <div
            className="
              order-2
              flex
              min-w-0
              flex-col
              items-center
              lg:order-1
              lg:items-start
            "
          >

            {/* INTRO */}

            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="
                mb-4
                flex
                items-center
                justify-center
                gap-3
                lg:justify-start
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-[--color-primary]/60
                  sm:w-10
                "
              />

              <p
                className="
                  font-[--font-mono]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[--color-primary]
                "
              >
                Hi, I&apos;m
              </p>

              <span
                className="
                  h-px
                  w-8
                  bg-[--color-primary]/60
                  sm:w-10
                "
              />
            </motion.div>


            {/* NAME */}

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="
                max-w-full
                text-center
                text-[clamp(3.5rem,15vw,6rem)]
                font-black
                leading-[0.88]
                tracking-[-0.055em]
                sm:text-7xl
                md:text-8xl
                lg:text-left
                lg:text-[clamp(5.5rem,7.5vw,7.5rem)]
              "
            >
              <span
                className="
                  bg-gradient-to-r
                  from-[var(--color-primary)]
                  via-[var(--color-primary-light)]
                  to-[var(--color-text)]
                  bg-clip-text
                  text-transparent
                "
              >
                Saikat
              </span>

              <span className="text-[--color-primary]">
                .
              </span>
            </motion.h1>


            {/* TITLE */}

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="
                mt-6
                w-full
                min-w-0
              "
            >
              <h2
                className="
                  mx-auto
                  max-w-3xl
                  text-center
                  text-lg
                  font-bold
                  leading-snug
                  text-[--color-text]
                  sm:text-xl
                  md:text-2xl
                  lg:mx-0
                  lg:text-left
                  xl:text-[1.7rem]
                "
              >
                Electrical &amp; Electronic Engineering

                <span
                  className="
                    mx-2
                    text-[--color-primary]
                  "
                >
                  ×
                </span>

                AI &amp; Software
              </h2>


              <div
                className="
                  mt-2
                  min-h-7
                  text-center
                  text-base
                  font-semibold
                  text-[--color-text-muted]
                  sm:text-lg
                  lg:text-left
                "
              >
                <TypingText words={ROLES} />
              </div>
            </motion.div>


            {/* DESCRIPTION */}

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="
                mt-5
                max-w-xl
                text-center
                text-sm
                leading-7
                text-[--color-text-muted]
                sm:text-[0.95rem]
                lg:text-left
              "
            >
              Passionate about solving real-world problems
              at the intersection of electrical and
              electronic engineering, artificial
              intelligence, software development, and
              digital marketing. I build practical
              solutions with engineering thinking,
              creative strategy, and leadership
              experience.
            </motion.p>


            {/* BUTTONS */}

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="
                mt-7
                flex
                w-full
                flex-col
                items-center
                gap-3
                sm:flex-row
                sm:justify-center
                lg:justify-start
              "
            >
              <Button
                icon={
                  <ArrowRight size={16} />
                }
                onClick={scrollToProjects}
              >
                View My Projects
              </Button>

              <Button
                variant="secondary"
                icon={
                  <Download size={16} />
                }
                onClick={downloadResume}
              >
                Download Resume
              </Button>
            </motion.div>


            {/* SOCIAL LINKS */}

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="
                mt-5
                flex
                items-center
                justify-center
                gap-3
                lg:justify-start
              "
            >
              <IconButton
                icon={
                  <Github size={18} />
                }
                label="Open GitHub profile"
                onClick={() =>
                  openExternalLink(
                    SOCIAL_LINKS.github,
                  )
                }
              />

              <IconButton
                icon={
                  <Linkedin size={18} />
                }
                label="Open LinkedIn profile"
                onClick={() =>
                  openExternalLink(
                    SOCIAL_LINKS.linkedin,
                  )
                }
              />

              <IconButton
                icon={
                  <FacebookIcon size={18} />
                }
                label="Open Facebook profile"
                onClick={() =>
                  openExternalLink(
                    SOCIAL_LINKS.facebook,
                  )
                }
              />

              <IconButton
                icon={
                  <Mail size={18} />
                }
                label="Send me an email"
                onClick={sendEmail}
              />
            </motion.div>


            {/* =================================================
                HERO STATS
            ================================================== */}

            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="
                mt-7
                w-full
                max-w-2xl
                overflow-hidden
                rounded-2xl
                border
                border-[--color-border]
                bg-[--color-surface]/60
                px-3
                py-5
                backdrop-blur-md
                sm:px-6
                sm:py-5
              "
            >
              <div
                className="
                  grid
                  grid-cols-3
                  divide-x
                  divide-[--color-border]
                "
              >
                {HERO_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="
                      min-w-0
                      px-2
                      text-center
                      sm:px-4
                      lg:text-left
                    "
                  >
                    <p
                      className="
                        text-xl
                        font-black
                        leading-none
                        text-[--color-text]
                        sm:text-2xl
                      "
                    >
                      {stat.value}
                    </p>

                    <p
                      className="
                        mt-2
                        text-[9px]
                        font-semibold
                        leading-tight
                        text-[--color-text-muted]
                        sm:text-xs
                      "
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>


          {/* =================================================
              PROFILE IMAGE
          ================================================== */}

          <motion.div
            variants={imageEntrance}
            initial="hidden"
            animate="visible"
            className="
              order-1
              flex
              w-full
              min-w-0
              items-center
              justify-center
              lg:order-2
              lg:justify-end
            "
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                relative
                max-w-full
              "
            >

              {/* IMAGE GLOW */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  -z-10
                  h-[85%]
                  w-[85%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[--color-primary]/20
                  blur-[80px]
                  sm:blur-[90px]
                "
              />


              {/* IMAGE CARD */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-[--color-border]
                  bg-[--color-surface]/70
                  p-2.5
                  shadow-2xl
                  backdrop-blur-xl
                  sm:rounded-[2rem]
                  sm:p-3
                "
              >
                <img
                  src={profileImage}
                  alt="Portrait of Saikat"
                  loading="eager"
                  decoding="async"
                  className="
                    aspect-[4/5]
                    w-[min(72vw,290px)]
                    rounded-[1.35rem]
                    object-cover
                    object-center
                    sm:w-[350px]
                    sm:rounded-[1.5rem]
                    md:w-[360px]
                    lg:w-[380px]
                    xl:w-[410px]
                  "
                />
              </div>

            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}


export default Hero;