"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { stack } from "@/data/content";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiDocker,
  SiFigma,
  SiVercel,
} from "react-icons/si";


const icons: Record<string, { icon: React.ElementType; color: string }> = {

  JavaScript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
  },

  React: {
    icon: SiReact,
    color: "#61DAFB",
  },

  "Next.js": {
    icon: SiNextdotjs,
    color: "#ffffff",
  },

  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  GSAP: {
    icon: SiGreensock,
    color: "#88CE02",
  },

  "Framer Motion": {
    icon: SiFramer,
    color: "#0055FF",
  },

  "Node.js": {
    icon: SiNodedotjs,
    color: "#339933",
  },

  "Express.js": {
    icon: SiExpress,
    color: "#ffffff",
  },

  MongoDB: {
    icon: SiMongodb,
    color: "#47A248",
  },

  PostgreSQL: {
    icon: SiPostgresql,
    color: "#4169E1",
  },

  Prisma: {
    icon: SiPrisma,
    color: "#ffffff",
  },

  Git: {
    icon: SiGit,
    color: "#F05032",
  },

  Docker: {
    icon: SiDocker,
    color: "#2496ED",
  },

  Figma: {
    icon: SiFigma,
    color: "#F24E1E",
  },

  Vercel: {
    icon: SiVercel,
    color: "#ffffff",
  },

};


export default function TechStack() {

return (

<section
id="technology"
className="
relative
overflow-hidden
py-24
md:py-32
"
>


<div
className="
pointer-events-none
absolute
left-1/2
top-1/2
h-[500px]
w-[500px]
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-purple-500/10
blur-[140px]
"
/>



<div className="container-px relative z-10">


<Reveal>

<div className="mb-16">

<span
className="
text-xs
uppercase
tracking-[0.4em]
text-white/40
"
>
Technology
</span>


<h2
className="
mt-6
max-w-3xl
font-display
text-4xl
font-bold
tracking-tight
text-white
md:text-6xl
"
>
Tools I build with
</h2>


</div>


</Reveal>



<div className="space-y-10">


{stack.map((group,index)=>(


<Reveal
key={group.category}
delay={index * 0.1}
>


<div
className="
grid
gap-6
border-b
border-white/10
pb-8
md:grid-cols-[180px_1fr]
md:items-center
"
>


<h3
className="
text-sm
uppercase
tracking-[0.25em]
text-accent
"
>
{group.category}
</h3>



<div
className="
flex
flex-wrap
gap-5
"
>


{group.items.map((item) => {

const IconData = icons[item];


return (

<motion.div
  key={item}

  whileHover={{
    y: -5,
    scale: 1.05,
  }}

  transition={{
    type: "spring",
    stiffness: 300,
  }}

  className="
  group
  flex
  items-center
  gap-3
  text-white/70
  transition-colors
  hover:text-white
"
>


{IconData && (

<IconData.icon

  className="
  h-6
  w-6
  transition-transform
  duration-300
  group-hover:scale-110
  "

  style={{
    color: IconData.color,
  }}

/>

)}



<span
className="
text-sm
font-medium
md:text-base
"
>
{item}
</span>


</motion.div>

);

})}


</div>


</div>


</Reveal>


))}


</div>


</div>


</section>

);

}