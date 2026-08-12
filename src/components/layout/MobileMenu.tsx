import { useEffect } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
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


    return () =>
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );


  }, [isOpen, onClose]);



  return (

    <AnimatePresence mode="wait">

      {isOpen && (

        <motion.div

          id="mobile-navigation"

          role="dialog"

          aria-modal="true"

          aria-label="Mobile navigation"


          initial={{
            opacity: 0,
          }}


          animate={{
            opacity: 1,
          }}


          exit={{
            opacity: 0,
          }}


          transition={{
            duration: 0.2,
          }}


          className="
            fixed
            inset-0
            z-[100]
            bg-white
            text-black
            dark:bg-[#08080b]
            dark:text-white
            lg:hidden
          "

        >


          {/* HEADER */}

          <div
            className="
              flex
              h-16
              items-center
              justify-between
              px-6
            "
          >

            <span
              className="
                font-[--font-heading]
                text-lg
                font-bold
                text-black
                dark:text-white
              "
            >
              Menu
            </span>


            <IconButton
              icon={<X size={20} />}
              label="Close menu"
              onClick={onClose}
            />


          </div>



          {/* LINKS */}

          <ul
            className="
              flex
              flex-col
              gap-2
              px-6
              pt-6
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

                <motion.li

                  key={link.href}


                  initial={{
                    opacity:0,
                    x:-8,
                  }}


                  animate={{
                    opacity:1,
                    x:0,
                  }}


                  transition={{
                    duration:0.2,
                  }}

                >


                  <a

                    href={link.href}

                    onClick={onClose}


                    className={`
                      block
                      rounded-xl
                      px-4
                      py-3
                      text-lg
                      font-semibold
                      transition-colors

                      ${
                        isActive

                        ? `
                          bg-[--color-primary]/10
                          text-[--color-primary]
                        `

                        :

                        `
                          text-black
                          hover:bg-black/5

                          dark:text-white
                          dark:hover:bg-white/10
                        `
                      }
                    `}

                  >

                    {link.label}

                  </a>


                </motion.li>

              );

            })}


          </ul>


        </motion.div>

      )}

    </AnimatePresence>

  );

}


export default MobileMenu;