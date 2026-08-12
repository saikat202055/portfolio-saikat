import { Hero } from '@/components/sections/Hero/Hero';
import { About } from '@/components/sections/About/About';
import { Skills } from '@/components/sections/Skills/Skills';
import { Education } from '@/components/sections/Education/Education';
import { Projects } from '@/components/sections/Projects/Projects';
import { Certificates } from '@/components/sections/Certificates/Certificates';
import { Leadership } from '@/components/sections/Leadership/Leadership';
import { Contact } from '@/components/sections/Contact/Contact';


export function Home() {

  return (

    <main>

      <Hero />

      <About />

      <Skills />

      <Education />

      <Projects />

      <Certificates />

      <Leadership />

    

  

      <Contact />

    </main>

  );

}

export default Home;