"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import { experience, personal } from "@/data/content";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;
    const { gsap } = getGsap();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 30%",
            scrub: true,
          },
        },
      );

      if (badgeRef.current) {
        gsap.to(badgeRef.current, {
          rotate: 360,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative sticky-section section-pad">
      <div className="container-px">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Experience</p>
            <RevealText
              as="h2"
              text="A path shaped by craft and shipping"
              className="max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] text-white"
            />
          </div>

          <div className="relative flex h-32 w-32 items-center justify-center self-start md:self-auto">
            <div
              ref={badgeRef}
              className="absolute inset-0 rounded-full border border-dashed border-accent/50"
            />
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/10 bg-white/5 text-center backdrop-blur-xl">
              <span className="font-display text-3xl text-white">{personal.yearsExperience}+</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/55">Years</span>
            </div>
          </div>
        </div>

        <div className="relative ml-3 border-l border-white/10 pl-8 md:ml-6 md:pl-12">
          <div
            ref={lineRef}
            className="absolute left-[-1.5px] top-0 h-full w-[3px] origin-top rounded-full bg-gradient-to-b from-accent via-violet-300 to-transparent"
          />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <Reveal key={item.period} delay={index * 0.08}>
                <article className="glass relative rounded-[24px] p-6 md:p-8">
                  <span className="absolute -left-[2.55rem] top-8 h-3.5 w-3.5 rounded-full border-2 border-[#0b0614] bg-accent shadow-[0_0_20px_rgba(168,85,247,0.8)] md:-left-[3.55rem]" />
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/45">
                    <span className="text-accent">{item.period}</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span>{item.company}</span>
                  </div>
                  <h3 className="mb-3 font-display text-2xl text-white md:text-3xl">{item.role}</h3>
                  <p className="max-w-3xl text-sm leading-relaxed text-white/60 md:text-base">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
