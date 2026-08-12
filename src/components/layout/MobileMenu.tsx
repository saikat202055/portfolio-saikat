import { useEffect } from 'react';

import {
  m as motion,
  AnimatePresence,
} from 'framer-motion';

import { X } from 'lucide-react';

import { NAV_LINKS } from '@/data/navigation';

import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

import { IconButton } from '@/components/ui/IconButton';


interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: string;
}


export function MobileMenu({
  isOpen,
  onClose,
  activeId,
}: MobileMenuProps) {

  useLockBodyScroll(isOpen);


  /* =========================================
     CLOSE MENU WITH ESCAPE KEY
  ========================================= */

  useEffect(() => {

    if (!isOpen) return;


    const handleKeyDown = (
      e: KeyboardEvent
    ) => {

      if (e.key === 'Escape') {
        onClose();
      }

    };


    window.addEventListener(
      'keydown',
      handleKeyDown
    );


    return () => {

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );

    };

  }, [
    isOpen,
    onClose,
  ]);


  return (

    <AnimatePresence>

      {isOpen && (

        <motion.div

          id="mobile-navigation"

          role="dialog"

          aria-modal="true"

          aria-label="Mobile navigation"


          /* =========================================
             MENU ENTER / EXIT ANIMATION
          ========================================= */

          initial={{
            opacity: 0,
            x: '100%',
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          exit={{
            opacity: 0,
            x: '100%',
          }}

          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}


          /* =========================================
             FULL SCREEN MOBILE MENU
          ========================================= */

          className="
            fixed
            inset-0
            z-[9999]

            isolate

            flex
            h-[100dvh]
            w-full
            min-h-[100dvh]

            flex-col

            overflow-x-hidden
            overflow-y-auto
            overscroll-none

            lg:hidden
          "


          /* 
            IMPORTANT:
            Inline background guarantees that the
            navbar/page below cannot show through.
          */

          style={{
            backgroundColor: 'var(--color-bg)',
          }}

        >


          {/* =========================================
              HEADER
          ========================================= */}

          <div

            className="
              relative
              z-10

              flex
              min-h-20
              shrink-0

              items-center
              justify-between

              gap-4

              px-5
              pb-3

              pt-[max(1rem,env(safe-area-inset-top))]
            "

          >


            {/* MENU TITLE */}

            <span

              className="
                min-w-0
                font-[--font-heading]
                text-xl
                font-black
                tracking-[-0.03em]
                text-[--color-text]
              "

            >
              Menu
            </span>



            {/* CLOSE BUTTON */}

            <div
              className="
                flex
                shrink-0
                items-center
                justify-center
              "
            >

              <IconButton

                icon={
                  <X size={22} />
                }

                label="Close menu"

                onClick={onClose}

              />

            </div>


          </div>



          {/* =========================================
              NAVIGATION LINKS
          ========================================= */}

          <nav

            className="
              relative
              z-10

              flex
              w-full
              flex-1

              items-start

              px-5
              pb-[max(2.5rem,env(safe-area-inset-bottom))]
              pt-3
            "

          >

            <ul

              className="
                flex
                w-full
                flex-col
                gap-2.5
              "

            >


              {NAV_LINKS.map(
                (
                  link,
                  index
                ) => {


                  const id =
                    link.href.startsWith('#')
                      ? link.href.slice(1)
                      : link.href;


                  const active =
                    activeId === id;


                  return (

                    <motion.li

                      key={link.href}

                      className="
                        w-full
                      "

                      initial={{
                        opacity: 0,
                        x: 24,
                      }}

                      animate={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        delay: index * 0.035,
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}

                    >


                      <a

                        href={link.href}

                        onClick={onClose}

                        aria-current={
                          active
                            ? 'page'
                            : undefined
                        }

                        className={[
                          `
                            block
                            w-full

                            rounded-2xl

                            px-5
                            py-4

                            font-[--font-heading]
                            text-lg
                            font-bold

                            transition-all
                            duration-200

                            active:scale-[0.98]
                          `,

                          active
                            ? `
                                bg-[--color-primary]/10
                                text-[--color-primary]
                              `
                            : `
                                text-[--color-text]
                                hover:bg-[--color-surface]
                              `,

                        ].join(' ')}

                      >

                        {link.label}

                      </a>


                    </motion.li>

                  );

                }

              )}


            </ul>

          </nav>


        </motion.div>

      )}

    </AnimatePresence>

  );

}


export default MobileMenu;