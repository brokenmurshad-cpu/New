"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/content";
import RevealText from "@/components/ui/RevealText";


export default function Services() {

  const [activeIndex, setActiveIndex] = useState(-1);


  useEffect(() => {

    const handleScroll = () => {

      const section = document.getElementById("services");

      if (!section) return;


      const rect = section.getBoundingClientRect();

      const scrollProgress =
        -rect.top / (rect.height - window.innerHeight);


      if (scrollProgress < 0.15) {

        setActiveIndex(-1);

      } 
      else {

        const index = Math.min(
          services.length - 1,
          Math.floor(
            (scrollProgress - 0.15) /
            ((1 - 0.15) / services.length)
          )
        );


        setActiveIndex(index);

      }

    };


    window.addEventListener(
      "scroll",
      handleScroll,
      { passive:true }
    );


    handleScroll();


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );


  }, []);



  return (

    <section
      id="services"
      className="
      relative
      h-[550vh]
      sticky-section
      "
    >


      <div
        className="
        sticky
        top-0
        flex
        h-screen
        items-center
        overflow-hidden
        "
      >


        <div
          className="
          container-px
          relative
          w-full
          "
        >


          {/* Background Glow */}

          <div
  className="
  pointer-events-none
  absolute
  left-1/2
  top-1/2
  h-[700px]
  w-[700px]
  -translate-x-1/2
  -translate-y-1/2
  rounded-full
  bg-purple-500/20
  blur-[160px]
  "
/>

<div
  className="
  pointer-events-none
  absolute
  right-[-150px]
  top-[20%]
  h-[350px]
  w-[350px]
  rounded-full
  bg-pink-500/10
  blur-[140px]
  "
/>

<div
  className="
  pointer-events-none
  absolute
  left-[-150px]
  bottom-[20%]
  h-[300px]
  w-[300px]
  rounded-full
  bg-blue-500/10
  blur-[130px]
  "
/>



          <AnimatePresence mode="wait">


          {/* Heading Screen */}

          {activeIndex === -1 && (

            <motion.div

              key="heading"

              initial={{
                opacity:0,
                y:80
              }}

              animate={{
                opacity:1,
                y:0
              }}

              exit={{
                opacity:0,
                y:-80
              }}

              transition={{
                duration:0.8,
                ease:"easeOut"
              }}

              className="
              relative
              z-10
              max-w-3xl
              "

            >


              <span
                className="
                mb-6
                block
                text-xs
                uppercase
                tracking-[0.4em]
                text-white/40
                "
              >
                02 / Services
              </span>


              <RevealText
  text="Capabilities built for modern product teams"
  className="
  font-display
  text-3xl
  font-bold
  leading-tight
  tracking-tight
  text-white
  md:text-5xl
  lg:text-5xl
  "
/>


            </motion.div>

          )}




          {/* Services Slides */}


          {activeIndex >= 0 && (

            <motion.article

              key={services[activeIndex].index}


              initial={{
                opacity:0,
                y:"100%"
              }}


              animate={{
                opacity:1,
                y:0
              }}


              exit={{
                opacity:0,
                y:"-40%"
              }}


              transition={{
                duration:0.8,
                ease:[0.22,1,0.36,1]
              }}


              className="
              relative
              z-10
              mx-auto
              max-w-3xl
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.05]
              p-8
              backdrop-blur-xl
              md:p-12
              "

            >


              <span
                className="
                text-6xl
                font-display
                text-white/20
                "
              >

                {services[activeIndex].index}

              </span>



              <h3
                className="
                mt-8
                font-display
                text-4xl
                font-bold
                text-white
                md:text-6xl
                "
              >

                {services[activeIndex].title}

              </h3>



              <p
                className="
                mt-6
                text-base
                leading-relaxed
                text-white/60
                md:text-lg
                "
              >

                {services[activeIndex].description}

              </p>



              <div
                className="
                mt-8
                flex
                flex-wrap
                gap-3
                "
              >

                {services[activeIndex].tags.map((tag,index)=>(

<motion.button

key={tag}

whileHover={{
scale:1.08,
y:-6,
}}

whileTap={{
scale:0.95
}}

transition={{
type:"spring",
stiffness:300,
damping:15
}}

className="
group
relative
overflow-hidden
cursor-pointer
rounded-full
border
border-white/10
bg-white/5
px-5
py-2.5
text-sm
text-white/70
backdrop-blur-xl
transition-all
hover:border-accent/50
hover:text-white
"

>

{/* Glow */}

<span
className="
absolute
inset-0
translate-y-full
bg-accent/20
transition-transform
duration-300
group-hover:translate-y-0
"
/>


<span
className="
relative
z-10
"
>
{tag}
</span>


</motion.button>

))}


              </div>



            </motion.article>

          )}


          </AnimatePresence>


        </div>


      </div>


    </section>

  );

}