import { m as motion } from 'framer-motion';

import {
  Target,
  Eye,
  Flag,
} from 'lucide-react';

import { Card } from '@/components/ui/Card';

import { MISSION_VISION_GOALS } from '@/data/about';



const ICONS = {
  mission: Target,
  vision: Eye,
  goals: Flag,
};



export function MissionVisionGoals() {

  return (

    <div

      className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-3
        sm:gap-5
      "

    >

      {MISSION_VISION_GOALS.map((item, index)=>{

        const Icon =
          ICONS[item.id as keyof typeof ICONS];


        return (

          <motion.div

            key={item.id}

            initial={{
              opacity:0,
              y:25,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{
              once:true,
              margin:'-15%',
            }}

            transition={{
              delay:index * 0.1,
              duration:0.55,
              ease:[
                0.16,
                1,
                0.3,
                1,
              ],
            }}

            whileHover={{
              y:-5,
            }}

            className="
              h-full
            "

          >


            <Card

              spotlight

              className="
                group
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                p-5
                sm:p-6
              "

            >


              {/* ICON */}

              <div

                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[--color-primary]/20
                  bg-[--color-primary]/10
                  text-[--color-primary]
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:bg-[--color-primary]/20
                "

              >

                <Icon
                  size={22}
                  aria-hidden="true"
                />

              </div>




              {/* TITLE */}

              <h3

                className="
                  mt-4
                  text-base
                  font-bold
                  tracking-tight
                  text-[--color-text]
                  sm:text-lg
                "

              >

                {item.title}

              </h3>





              {/* DESCRIPTION */}

              <p

                className="
                  mt-2
                  flex-1
                  text-sm
                  leading-6
                  text-[--color-text-muted]
                "

              >

                {item.description}

              </p>




              {/* BOTTOM ACCENT */}

              <div

                aria-hidden="true"

                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-[--color-primary]
                  transition-all
                  duration-500
                  group-hover:w-2/3
                "

              />


            </Card>


          </motion.div>


        );


      })}


    </div>


  );

}


export default MissionVisionGoals;