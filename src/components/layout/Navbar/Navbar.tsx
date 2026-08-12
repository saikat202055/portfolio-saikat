import {
  useEffect,
  useMemo,
  useState,
} from 'react';

import { m as motion } from 'framer-motion';

import {
  Menu,
  Moon,
  Sun,
} from 'lucide-react';

import { NAV_LINKS } from '@/data/navigation';

import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/hooks/useTheme';

import { MobileMenu } from '../MobileMenu';



export function Navbar() {


  const {
    theme,
    toggleTheme,
  } = useTheme();



  const [
    isScrolled,
    setIsScrolled,
  ] = useState(false);



  const [
    isMobileOpen,
    setIsMobileOpen,
  ] = useState(false);



  /* =========================================
     SECTION IDS
  ========================================= */

  const sectionIds = useMemo(

    () =>
      NAV_LINKS.map((link) =>

        link.href.startsWith('#')
          ? link.href.slice(1)
          : link.href

      ),

    [],

  );


  const activeId =
    useActiveSection(sectionIds);



  /* =========================================
     NAVBAR SCROLL STATE
  ========================================= */

  useEffect(() => {


    const handleScroll = () => {

      setIsScrolled(
        window.scrollY > 20
      );

    };


    handleScroll();


    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      }
    );


    return () => {

      window.removeEventListener(
        'scroll',
        handleScroll
      );

    };


  }, []);



  /* =========================================
     CLOSE MOBILE MENU IF SCREEN BECOMES DESKTOP
  ========================================= */

  useEffect(() => {

    const handleResize = () => {

      if (
        window.innerWidth >= 1024 &&
        isMobileOpen
      ) {

        setIsMobileOpen(false);

      }

    };


    window.addEventListener(
      'resize',
      handleResize
    );


    return () => {

      window.removeEventListener(
        'resize',
        handleResize
      );

    };

  }, [isMobileOpen]);



  /* =========================================
     SCROLL TO HOME
  ========================================= */

  const scrollToHome = () => {


    const homeSection =
      document.querySelector('#home');


    homeSection?.scrollIntoView({

      behavior: 'smooth',

      block: 'start',

    });


    window.history.replaceState(
      null,
      '',
      '#home'
    );


    setIsMobileOpen(false);

  };



  return (

    <>


      {/* =========================================
          NAVBAR
      ========================================= */}

      <header

        className={[
          `
            fixed
            inset-x-0
            top-0
            z-50

            px-4
            pt-3

            sm:px-5

            transition-opacity
            duration-200

            before:pointer-events-none
            before:absolute
            before:inset-x-0
            before:top-0
            before:z-[-1]
            before:h-4
            before:bg-[--color-bg]
            before:content-['']
          `,


          /*
            IMPORTANT:
            On mobile, navbar becomes completely hidden
            whenever MobileMenu is open.

            Desktop navbar remains unchanged.
          */

          isMobileOpen
            ? `
                pointer-events-none
                invisible
                opacity-0

                lg:pointer-events-auto
                lg:visible
                lg:opacity-100
              `
            : `
                visible
                opacity-100
              `,

        ].join(' ')}

      >


        <motion.nav

          aria-label="Primary navigation"


          initial={{
            opacity: 0,
            y: -18,
          }}


          animate={{
            opacity: 1,
            y: 0,
          }}


          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}


          className={[

            `
              mx-auto

              flex
              h-16
              max-w-7xl

              items-center
              justify-between

              rounded-2xl
              border

              px-3.5

              sm:px-5
              lg:px-6

              transition-all
              duration-300
            `,


            isScrolled

              ? `
                  border-[--color-border]
                  bg-[--color-surface]/80

                  shadow-[0_18px_55px_-30px_rgba(0,0,0,0.8)]

                  backdrop-blur-2xl
                `

              : `
                  border-transparent
                  bg-transparent
                `,

          ].join(' ')}

        >



          {/* =========================================
              LOGO
          ========================================= */}

          <button

            type="button"

            onClick={scrollToHome}

            aria-label="Go to home section"

            className="
              group

              flex
              min-w-0
              shrink

              items-center

              gap-2.5

              sm:gap-3
            "

          >


            {/* LOGO ICON */}

            <span

              className="
                relative

                grid
                h-10
                w-10
                shrink-0

                place-items-center

                overflow-hidden

                rounded-xl

                border
                border-[--color-primary]/30

                bg-[--color-primary]/10

                text-sm
                font-black

                text-[--color-primary]

                transition-all
                duration-300

                group-hover:-translate-y-1
                group-hover:scale-105
              "

            >


              <span
                className="
                  relative
                  z-10
                "
              >
                S
              </span>


              <span

                className="
                  absolute
                  inset-0

                  bg-gradient-to-br
                  from-[--color-primary]/30
                  to-transparent

                  opacity-0

                  transition-opacity
                  duration-300

                  group-hover:opacity-100
                "

              />

            </span>



            {/* NAME */}

            <span

              className="
                min-w-0

                truncate

                font-[--font-heading]

                text-lg
                font-black

                tracking-[-0.04em]

                text-[--color-text]

                sm:text-xl
              "

            >

              Saikat

              <span
                className="
                  text-[--color-primary]
                "
              >
                .
              </span>

            </span>


          </button>



          {/* =========================================
              DESKTOP NAVIGATION
          ========================================= */}

          <ul

            className="
              hidden

              items-center

              gap-0.5

              rounded-full

              border
              border-[--color-border]

              bg-[--color-surface]/55

              p-1

              shadow-sm

              backdrop-blur-xl

              lg:flex

              xl:gap-1
            "

          >


            {NAV_LINKS.map((link) => {


              const linkId =
                link.href.startsWith('#')
                  ? link.href.slice(1)
                  : link.href;


              const isActive =
                activeId === linkId;


              return (

                <li key={link.href}>

                  <a

                    href={link.href}

                    aria-current={
                      isActive
                        ? 'page'
                        : undefined
                    }

                    className={[
                      `
                        group
                        relative
                        block

                        whitespace-nowrap

                        rounded-full

                        px-2.5
                        py-2

                        text-[11px]
                        font-semibold

                        transition-colors
                        duration-200

                        xl:px-3.5
                        xl:text-xs
                      `,

                      isActive
                        ? 'text-[--color-text]'
                        : `
                            text-[--color-text-muted]
                            hover:text-[--color-text]
                          `,

                    ].join(' ')}

                  >


                    {isActive && (

                      <motion.span

                        layoutId="active-navbar-item"

                        className="
                          absolute
                          inset-0

                          rounded-full

                          border
                          border-[--color-primary]/20

                          bg-[--color-primary]/10
                        "

                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 32,
                        }}

                      />

                    )}


                    <span
                      className="
                        relative
                        z-10
                      "
                    >
                      {link.label}
                    </span>


                    <span

                      aria-hidden="true"

                      className={[
                        `
                          absolute
                          bottom-1
                          left-1/2
                          z-10

                          h-px

                          -translate-x-1/2

                          rounded-full

                          bg-[--color-primary]

                          transition-all
                          duration-300
                        `,

                        isActive
                          ? 'w-5 opacity-100'
                          : `
                              w-0
                              opacity-0

                              group-hover:w-4
                              group-hover:opacity-80
                            `,

                      ].join(' ')}

                    />


                  </a>

                </li>

              );

            })}


          </ul>



          {/* =========================================
              RIGHT ACTIONS
          ========================================= */}

          <div

            className="
              flex
              shrink-0

              items-center

              gap-2
            "

          >



            {/* =========================================
                THEME TOGGLE
            ========================================= */}

            <button

              type="button"

              onClick={toggleTheme}

              aria-label={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }

              className="
                group

                grid
                h-11
                w-11
                shrink-0

                place-items-center

                rounded-full

                border
                border-[--color-border]

                bg-[--color-surface]/60

                text-[--color-text-muted]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-[--color-primary]/35
                hover:bg-[--color-primary]/10
                hover:text-[--color-primary]

                active:scale-95
              "

            >


              <motion.span

                key={theme}

                initial={{
                  opacity: 0,
                  rotate: -40,
                  scale: 0.7,
                }}

                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}

                transition={{
                  duration: 0.25,
                }}

              >

                {theme === 'dark' ? (

                  <Sun size={17} />

                ) : (

                  <Moon size={17} />

                )}

              </motion.span>


            </button>



            {/* =========================================
                MOBILE MENU BUTTON
            ========================================= */}

            <button

              type="button"

              onClick={() =>
                setIsMobileOpen(true)
              }

              aria-label="Open navigation menu"

              aria-expanded={isMobileOpen}

              aria-controls="mobile-navigation"

              className="
                grid
                h-11
                w-11
                shrink-0

                place-items-center

                rounded-full

                border
                border-[--color-border]

                bg-[--color-surface]/60

                text-[--color-text]

                transition-all
                duration-300

                hover:border-[--color-primary]/35
                hover:bg-[--color-primary]/10
                hover:text-[--color-primary]

                active:scale-95

                lg:hidden
              "

            >

              <Menu size={19} />

            </button>


          </div>


        </motion.nav>


      </header>



      {/* =========================================
          MOBILE MENU
      ========================================= */}

      <MobileMenu

        isOpen={isMobileOpen}

        onClose={() =>
          setIsMobileOpen(false)
        }

        activeId={activeId ?? ''}

      />


    </>

  );

}


export default Navbar;