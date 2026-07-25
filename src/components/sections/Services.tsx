"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { services } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);


export default function Services() {


  const sectionRef = useRef<HTMLDivElement | null>(null);



useEffect(() => {


  const section = sectionRef.current;


  if (!section) return;



  const panels =
    gsap.utils.toArray<HTMLElement>(
      ".service-panel"
    );

const intro =
  document.querySelector(
    ".services-intro"
  );

  const ctx = gsap.context(()=>{


    panels.forEach((panel,index)=>{


     gsap.set(panel,{
  zIndex:panels.length - index,
});



      if(index !== 0){

 gsap.set(panel,{
   yPercent:100,
   opacity:0
 });

}

if(index === 0){

 gsap.set(panel,{
   yPercent:0,
   opacity:1
 });

}


    });

    const contents =
  gsap.utils.toArray(
    ".service-panel h3, .service-panel p, .service-panel span"
  );


gsap.set(contents,{
  y:60,
  opacity:0
});

if(intro){

gsap.set(intro,{
  yPercent:0,
  opacity:1
});

}


    const tl = gsap.timeline({


    scrollTrigger:{
  trigger:section,
  start:"top top",
end:`+=${panels.length * 100}%`,
  pin:true,
  scrub:1,
  anticipatePin:1,
  invalidateOnRefresh:true,
}


    });

if(intro){

  tl.to(intro,{
    yPercent:-100,
    opacity:0,
    duration:1,
    ease:"none"
  });

}





  panels.slice(1).forEach((panel,index)=>{


  tl.to(panel,{
    yPercent:0,
    opacity:1,
    duration:1,
    ease:"power2.out"
  })


  .to(
    panel.querySelectorAll(
      "h3,p,span"
    ),
    {
      y:0,
      opacity:1,
      duration:0.8,
      stagger:0.1,
      ease:"power3.out"
    },
    "-=0.5"
  )


  .to(panels[index],{
    yPercent:-40,
    opacity:0,
    duration:1,
    ease:"power2.inOut"
  },"<");


});



  },section);



  return ()=>ctx.revert();



},[]);



  return (


    <section

      ref={sectionRef}

      id="services"

      className="
      relative
      bg-[#050816]
      "


    >




     <div
  className="relative"
  style={{
   height:`${(services.length - 1) * 100 + 100}vh`,
  }}
>





      <div
  className="
  h-screen
  overflow-hidden
  "
>




          <div

            className="
            relative
            h-full
            w-full
            "

          >


{/* Services Intro Screen */}

<div

className="
services-intro
absolute
inset-0
z-100
flex
items-center
px-6
md:px-12
"

>

<div

className="
max-w-4xl
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



<h2

className="
font-display
text-3xl
font-bold
leading-tight
tracking-tight
text-white
md:text-5xl
lg:text-6xl
"

>

Capabilities built for modern product teams

</h2>



</div>


</div>


            {services.map((service)=>(




              <article


                key={service.index}


               className="
service-panel
service-content
absolute
inset-0
flex
items-center
justify-center
overflow-hidden
px-6
md:px-12
will-change-transform
"

              >






                <div


                  className="
                  relative
                  flex
                  w-full
                  max-w-7xl
                  items-center
                  gap-12
                  md:gap-32
                  "


                >





                  {/* NUMBER */}



                  <span


                    className="
                    shrink-0
                    text-7xl
                    font-bold
                    tracking-tight
                    text-white/20
                    md:text-9xl
                    "


                  >

                    {service.index}


                  </span>









                  {/* GLASS CONTENT */}




                  <div



                    className="
                    relative
                    z-10
                    flex-1
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    p-8
                    backdrop-blur-xl
                    shadow-2xl
                    md:p-12
                    "



                  >





                    <h3


                      className="
                      text-4xl
                      font-bold
                      leading-tight
                      text-white
                      md:text-7xl
                      "


                    >


                      {service.title}


                    </h3>







                    <p


                      className="
                      mt-6
                      max-w-3xl
                      text-base
                      leading-relaxed
                      text-white/60
                      md:text-xl
                      "


                    >


                      {service.description}


                    </p>









                    <div


                      className="
                      mt-10
                      flex
                      flex-wrap
                      gap-3
                      "


                    >



                      {service.tags.map((tag)=>(



                        <span



                          key={tag}



                          className="
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
                          duration-300
                          hover:border-emerald-400/50
                          hover:text-white
                          "



                        >



                          {tag}



                        </span>



                      ))}



                    </div>







                    {/* GLOW EFFECT */}





                    <div


                      className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-72
                      w-72
                      rounded-full
                      bg-emerald-400/20
                      blur-[120px]
                      "


                    />





                    <div


                      className="
                      pointer-events-none
                      absolute
                      -bottom-20
                      -left-20
                      h-72
                      w-72
                      rounded-full
                      bg-cyan-400/10
                      blur-[120px]
                      "


                    />





                  </div>





                </div>





              </article>





            ))}





          </div>





        </div>





      </div>





    </section>


  );


}