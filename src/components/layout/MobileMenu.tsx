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


          initial={{
            opacity:0,
            x:'100%',
          }}


          animate={{
            opacity:1,
            x:0,
          }}


          exit={{
            opacity:0,
            x:'100%',
          }}


          transition={{
            duration:0.25,
            ease:[0.16,1,0.3,1],
          }}


          className="
            fixed
            inset-0
            z-[999]
            flex
            min-h-[100dvh]
            flex-col
            overflow-y-auto
            bg-[--color-bg]
            lg:hidden
          "

        >


          {/* HEADER */}

          <div

            className="
              flex
              h-20
              shrink-0
              items-center
              justify-between
              px-5
            "

          >

            <span
              className="
                font-[--font-heading]
                text-xl
                font-black
                text-[--color-text]
              "
            >
              Menu
            </span>



            <IconButton

              icon={
                <X size={22}/>
              }

              label="Close menu"

              onClick={onClose}

            />


          </div>



          {/* LINKS */}

          <nav

            className="
              flex
              flex-1
              items-start
              px-6
              pb-10
            "

          >

            <ul

              className="
                flex
                w-full
                flex-col
                gap-3
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

                      initial={{
                        opacity:0,
                        x:20,
                      }}

                      animate={{
                        opacity:1,
                        x:0,
                      }}

                      transition={{
                        delay:index * 0.04,
                      }}

                    >


                      <a

                        href={link.href}

                        onClick={onClose}


                        className={`
                          block
                          rounded-2xl
                          px-5
                          py-4
                          text-xl
                          font-bold
                          transition-all

                          ${
                            active
                            ?
                            'bg-[--color-primary]/10 text-[--color-primary]'
                            :
                            'text-[--color-text]'
                          }
                        `}

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