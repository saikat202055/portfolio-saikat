import { memo } from 'react';

import { m as motion } from 'framer-motion';

import {
  ArrowUpRight,
  BrainCircuit,
  CircuitBoard,
  Code2,
  Globe,
  Megaphone,
  MessagesSquare,
  Puzzle,
  Users,
  type LucideIcon,
} from 'lucide-react';

import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

import type { SkillCategory } from '@/types';


const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Globe,
  BrainCircuit,
  CircuitBoard,
  Users,
  MessagesSquare,
  Puzzle,
  Megaphone,
};



interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}



export const SkillCategoryCard = memo(
function SkillCategoryCard({
  category,
  index,
}: SkillCategoryCardProps) {


const Icon =
  ICON_MAP[category.icon] ?? Code2;



return (

<motion.article


initial={{
  opacity:0,
  y:24,
}}


whileInView={{
  opacity:1,
  y:0,
}}


viewport={{
  once:true,
  margin:'-8%',
}}


transition={{

delay:(index % 3) * 0.08,

duration:0.55,

ease:[0.16,1,0.3,1],

}}


whileHover={{
  y:-5,
}}


className="h-full"


>



<Card

spotlight

className="
group
relative
flex
h-full
min-h-40
flex-col
overflow-hidden
p-4
sm:min-h-48
sm:p-6
"

>



{/* BACKGROUND GRID */}

<div

aria-hidden="true"

className="
pointer-events-none
absolute
inset-0
opacity-0
transition-opacity
duration-500
group-hover:opacity-20
[background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
[background-size:28px_28px]
"

/>





{/* AMBIENT GLOW */}

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
opacity-0
blur-3xl
transition-opacity
duration-500
group-hover:opacity-100
"

/>





{/* ICON + ARROW */}

<div

className="
relative
flex
items-start
justify-between
"

>


<motion.div

whileHover={{

scale:1.07,

rotate:4,

}}


transition={{

duration:0.25,

}}


className="
flex
h-10
w-10
items-center
justify-center
rounded-xl
border
border-[--color-primary]/25
bg-[--color-primary]/10
text-[--color-primary]
transition-all
duration-300
group-hover:border-[--color-primary]/50
group-hover:bg-[--color-primary]/15
sm:h-11
sm:w-11
"

>


<Icon

size={20}

aria-hidden="true"

/>


</motion.div>





<ArrowUpRight

size={17}

aria-hidden="true"

className="
text-[--color-primary]
opacity-0
transition-all
duration-300
group-hover:-translate-y-1
group-hover:translate-x-1
group-hover:opacity-100
"

/>


</div>





{/* TITLE */}

<h3

className="
relative
mt-4
text-base
font-bold
tracking-tight
transition-colors
duration-300
group-hover:text-[--color-primary]
sm:text-lg
"

>

{category.title}

</h3>





{/* SKILLS */}

<ul

className="
relative
mt-3
flex
flex-wrap
content-start
gap-1.5
"

>


{category.skills.map((skill,skillIndex)=>(


<motion.li

key={skill}


initial={{

opacity:0,

scale:0.94,

}}


whileInView={{

opacity:1,

scale:1,

}}


viewport={{

once:true,

}}


transition={{

delay:
index * 0.03 +
skillIndex * 0.025,

duration:0.25,

}}

>


<Badge>

{skill}

</Badge>


</motion.li>


))}


</ul>





{/* BOTTOM ACCENT */}

<div

aria-hidden="true"

className="
absolute
bottom-0
left-1/2
h-px
w-0
-translate-x-1/2
bg-[--color-primary]
transition-all
duration-500
group-hover:w-3/4
"

/>



</Card>


</motion.article>


);


});