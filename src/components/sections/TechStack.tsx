"use client";

import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import Marquee from "@/components/ui/Marquee";
import { stack } from "@/data/content";

const allTech = stack.flatMap((group) => group.items);

export default function TechStack() {
  return (
    <section id="stack" className="relative section-pad pt-8">
      <div className="container-px mb-10">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Technology</p>
        <RevealText
          as="h2"
          text="Tools I use to ship premium products"
          className="max-w-3xl font-display text-[clamp(2rem,5vw,3.6rem)] font-medium leading-[1.05] text-white"
        />
      </div>

      <Reveal>
        <Marquee speed={40} className="border-y border-white/10 bg-white/[0.02] py-6">
          {allTech.map((item) => (
            <div
              key={item}
              className="mx-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.16em] text-white/75"
            >
              {item}
            </div>
          ))}
        </Marquee>
      </Reveal>

      <div className="container-px mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.06}>
            <div className="glass h-full rounded-[22px] p-6">
              <h3 className="mb-4 text-sm uppercase tracking-[0.22em] text-accent">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-white/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
