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


    const handleKeyDown = (e: KeyboardEvent) => {

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


  }, [isOpen, onClose]);




  return (

    <AnimatePresence>

      {isOpen && (

        <motion.div

          id="mobile-navigation"

          role="dialog"

          aria-modal="true"

          initial={{
            opacity:0,
          }}

          animate={{
            opacity:1,
          }}

          exit={{
            opacity:0,
          }}

          transition={{
            duration:0.25,
          }}

          className="
            fixed
            inset-0
            z-[999]
            lg:hidden
            bg-[--color-bg]
          "

        >


          {/* HEADER */}

          <div
            className="
              flex
              h-20
              items-center
              justify-between
              px-6
            "
          >

            <span
              className="
                font-[--font-heading]
                text-xl
                font-bold
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

          <ul

            className="
              flex
              flex-col
              gap-3
              px-6
              pt-8
            "

          >

            {
              NAV_LINKS.map((link,index)=>(

                <motion.li

                  key={link.href}

                  initial={{
                    opacity:0,
                    x:-20,
                  }}

                  animate={{
                    opacity:1,
                    x:0,
                  }}

                  transition={{
                    delay:index*0.04,
                    duration:0.25,
                  }}

                >

                  <a

                    href={link.href}

                    onClick={onClose}

                    className={`
                      block
                      rounded-xl
                      px-5
                      py-4
                      text-2xl
                      font-semibold
                      transition

                      ${
                        activeId === link.href.slice(1)

                        ?

                        'bg-[--color-primary]/10 text-[--color-primary]'

                        :

                        'text-[--color-text] hover:bg-black/5 dark:hover:bg-white/10'
                      }

                    `}

                  >

                    {link.label}


                  </a>


                </motion.li>


              ))

            }


          </ul>


        </motion.div>


      )}


    </AnimatePresence>


  );

}


export default MobileMenu;