import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(
    sectionIds[0] ?? ''
  );

  useEffect(() => {

    const handleScroll = () => {

      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;


      let currentSection = sectionIds[0] ?? '';


      sectionIds.forEach((id) => {

        const section =
          document.getElementById(id);


        if (!section) return;


        const sectionTop =
          section.offsetTop;


        if (scrollPosition >= sectionTop) {

          currentSection = id;

        }

      });


      setActiveId(currentSection);

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


  }, [sectionIds]);


  return activeId;
}