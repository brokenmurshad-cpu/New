"use client";

import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import TiltCard from "@/components/ui/TiltCard";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="relative sticky-section section-pad">
      <div className="container-px">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Services</p>
            <RevealText
              as="h2"
              text="Capabilities built for modern product teams"
              className="max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] text-white"
            />
          </div>
          <span className="hidden text-sm uppercase tracking-[0.24em] text-white/40 md:block">
            02 / Services
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.index} delay={index * 0.06}>
              <TiltCard className="h-full">
                <article className="glass group relative h-full overflow-hidden rounded-[24px] p-7 md:p-8">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <span className="font-display text-4xl text-white/15 transition-colors duration-500 group-hover:text-accent/40">
                      {service.index}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Offer
                    </span>
                  </div>
                  <h3 className="mb-4 font-display text-2xl text-white md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mb-6 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
