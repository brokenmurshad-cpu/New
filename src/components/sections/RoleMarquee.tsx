"use client";

import Marquee from "@/components/ui/Marquee";
import { marqueeWords } from "@/data/content";


export default function RoleMarquee() {

  return (

    <section
      className="
      relative
      overflow-hidden
      border-y
      border-white/10
      bg-white/[0.02]
      py-8
      md:py-10
      "
      aria-label="Roles"
    >


      <Marquee
        speed={28}
        className="gap-6"
      >


        {marqueeWords.map((word) => (

          <div
            key={word}
            className="
            flex
            items-center
            gap-6
            px-3
            "
          >


            {/* Skill Pill */}

            <div
              className="
              group
              relative
              flex
              items-center
              rounded-full
              border
              border-accent/30
              bg-white/[0.05]
              px-7
              py-3
              backdrop-blur-xl
              shadow-[0_0_25px_rgba(168,85,247,0.12)]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-accent/70
              hover:bg-accent/10
              hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
              "
            >


              {/* Inner Glow */}

              <span
                className="
                absolute
                inset-0
                rounded-full
                bg-gradient-to-r
                from-purple-500/10
                to-pink-500/10
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
                "
              />


              <span
                className="
                relative
                z-10
                marquee-gradient-text
                font-display
                text-[clamp(1rem,2vw,1.5rem)]
                font-medium
                uppercase
                tracking-tight
                "
              >

                {word}

              </span>


            </div>



            {/* Star Separator */}

            <span
              className="
              text-xl
              text-accent
              drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]
              animate-pulse
              "
            >

              ✦

            </span>



          </div>


        ))}


      </Marquee>


    </section>

  );

}