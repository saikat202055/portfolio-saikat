import { m as motion } from 'framer-motion';

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';

import { ContactForm } from './ContactForm';
import { MapPlaceholder } from './MapPlaceholder';


export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
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
          BACKGROUND GLOW
      ====================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[20%]
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-[--color-primary]/10
          blur-[110px]
          sm:h-96
          sm:w-96
          sm:blur-[120px]
        "
      />


      <Container className="relative">

        {/* =====================================
            HEADING
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mx-auto
            mb-6
            max-w-3xl
            text-center
            sm:mb-7
          "
        >
          <p
            className="
              mb-2
              font-[--font-mono]
              text-[11px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[--color-primary]
              sm:text-xs
              sm:tracking-[0.24em]
            "
          >
            Let&apos;s Connect
          </p>


          <h2
            id="contact-heading"
            className="
              text-[2rem]
              font-black
              leading-tight
              tracking-[-0.035em]
              text-[--color-text]
              sm:text-5xl
              lg:text-[3.25rem]
            "
          >
            Get In Touch
          </h2>


          <p
            className="
              mx-auto
              mt-3
              max-w-3xl
              text-sm
              font-semibold
              leading-6
              text-[--color-text-muted]
              sm:mt-4
              sm:text-base
              sm:leading-7
            "
          >
            I&apos;m open to internships, collaborations, and interesting
            conversations about AI, Software &amp; Engineering.
          </p>


          <p
            className="
              mx-auto
              mt-1
              max-w-3xl
              text-sm
              font-semibold
              leading-6
              text-[--color-text-muted]
              sm:text-base
              sm:leading-7
            "
          >
            Digital Marketing • SEO • Meta Ads • Virtual Assistant •
            Digital Strategy
          </p>
        </motion.div>


        {/* =====================================
            CONTACT GRID
        ====================================== */}

        <div
          className="
            grid
            min-w-0
            grid-cols-1
            gap-5
            sm:gap-6
            lg:grid-cols-[1.2fr_0.8fr]
          "
        >

          {/* =====================================
              CONTACT FORM
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: '-10%',
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              min-w-0
              w-full
            "
          >
            <Card
              spotlight
              className="
                relative
                h-full
                overflow-hidden
                p-5
                sm:p-6
                md:p-8
              "
            >
              {/* CARD GLOW */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-[--color-primary]/10
                  blur-3xl
                "
              />


              <div
                className="
                  relative
                  min-w-0
                "
              >
                <ContactForm />
              </div>


              {/* BOTTOM ACCENT */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[2px]
                  w-1/2
                  -translate-x-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-transparent
                  via-[--color-primary]
                  to-transparent
                "
              />
            </Card>
          </motion.div>


          {/* =====================================
              RIGHT SIDE
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: '-10%',
            }}
            transition={{
              delay: 0.1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              flex
              min-w-0
              flex-col
              gap-5
              sm:gap-6
            "
          >
            <Card
              spotlight
              className="
                relative
                overflow-hidden
                p-5
                sm:p-6
                md:p-8
              "
            >
              <div
                className="
                  relative
                  min-w-0
                "
              >

                {/* INTRO TEXT */}

                <p
                  className="
                    mb-6
                    text-sm
                    font-semibold
                    leading-6
                    text-[--color-text]
                    sm:text-base
                  "
                >
                  Have a project in mind, a question about my work,
                  or just want to connect? My inbox is always open.
                </p>


                {/* =====================================
                    CONTACT DETAILS
                ====================================== */}

                <div className="space-y-5">

                  {/* EMAIL */}

                  <div
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-3
                    "
                  >
                    <Mail
                      size={18}
                      aria-hidden="true"
                      className="
                        mt-0.5
                        shrink-0
                        text-[--color-primary]
                      "
                    />

                    <div className="min-w-0">
                      <p
                        className="
                          text-xs
                          font-semibold
                          text-[--color-text-muted]
                        "
                      >
                        Email
                      </p>

                      <a
                        href="mailto:arafsaikat6@gmail.com"
                        className="
                          block
                          break-all
                          text-sm
                          font-semibold
                          text-[--color-text]
                          transition-colors
                          hover:text-[--color-primary]
                          sm:break-normal
                        "
                      >
                        arafsaikat6@gmail.com
                      </a>
                    </div>
                  </div>


                  {/* PHONE */}

                  <div
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <Phone
                      size={18}
                      aria-hidden="true"
                      className="
                        mt-0.5
                        shrink-0
                        text-[--color-primary]
                      "
                    />

                    <div>
                      <p
                        className="
                          text-xs
                          font-semibold
                          text-[--color-text-muted]
                        "
                      >
                        Phone
                      </p>

                      <a
                        href="tel:+8801620331037"
                        className="
                          text-sm
                          font-semibold
                          text-[--color-text]
                          transition-colors
                          hover:text-[--color-primary]
                        "
                      >
                        +880 1620331037
                      </a>
                    </div>
                  </div>


                  {/* LOCATION */}

                  <div
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <MapPin
                      size={18}
                      aria-hidden="true"
                      className="
                        mt-0.5
                        shrink-0
                        text-[--color-primary]
                      "
                    />

                    <div>
                      <p
                        className="
                          text-xs
                          font-semibold
                          text-[--color-text-muted]
                        "
                      >
                        Location
                      </p>

                      <p
                        className="
                          text-sm
                          font-semibold
                          text-[--color-text]
                        "
                      >
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>

                </div>


                {/* =====================================
                    SOCIAL LINKS
                ====================================== */}

                <div
                  className="
                    mt-6
                    border-t
                    border-[--color-border]
                    pt-5
                  "
                >
                  <p
                    className="
                      mb-3
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[--color-text-muted]
                    "
                  >
                    Connect With Me
                  </p>


                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-3
                      sm:flex
                      sm:flex-wrap
                    "
                  >

                    {/* LINKEDIN */}

                    <a
                      href="https://www.linkedin.com/in/md-ariful-islam-620627311/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open LinkedIn profile"
                      className="
                        inline-flex
                        min-h-11
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-[--color-border]
                        bg-[--color-surface]/60
                        px-4
                        py-2.5
                        text-sm
                        font-bold
                        text-[--color-text]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-[--color-primary]
                        hover:text-[--color-primary]
                        sm:w-auto
                      "
                    >
                      <Linkedin
                        size={17}
                        aria-hidden="true"
                      />

                      LinkedIn
                    </a>


                    {/* GITHUB */}

                    <a
                      href="https://github.com/saikat202055"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open GitHub profile"
                      className="
                        inline-flex
                        min-h-11
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-[--color-border]
                        bg-[--color-surface]/60
                        px-4
                        py-2.5
                        text-sm
                        font-bold
                        text-[--color-text]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-[--color-primary]
                        hover:text-[--color-primary]
                        sm:w-auto
                      "
                    >
                      <Github
                        size={17}
                        aria-hidden="true"
                      />

                      GitHub
                    </a>

                  </div>
                </div>
              </div>


              {/* BOTTOM ACCENT */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[2px]
                  w-1/2
                  -translate-x-1/2
                  rounded-full
                  bg-gradient-to-r
                  from-transparent
                  via-[--color-primary-light]
                  to-transparent
                "
              />
            </Card>


            {/* =====================================
                MAP
            ====================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="
                min-w-0
                w-full
              "
            >
              <MapPlaceholder />
            </motion.div>

          </motion.div>
        </div>

      </Container>
    </section>
  );
}


export default Contact;