"use client";

import Marquee from "@/components/ui/Marquee";
import RevealText from "@/components/ui/RevealText";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative section-pad overflow-hidden">
      <div className="container-px mb-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Testimonials</p>
            <RevealText
              as="h2"
              text="Words from people I've built with"
              className="max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] text-white"
            />
          </div>
          <span className="hidden text-sm uppercase tracking-[0.24em] text-white/40 md:block">
            04 / Love
          </span>
        </div>
      </div>

      <Marquee speed={45} className="mb-6">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name + item.title} item={item} />
        ))}
      </Marquee>

      <Marquee speed={50} reverse>
        {[...testimonials].reverse().map((item) => (
          <TestimonialCard key={`rev-${item.name}-${item.title}`} item={item} />
        ))}
      </Marquee>
    </section>
  );
}

function TestimonialCard({
  item,
}: {
  item: { initial: string; name: string; title: string; quote: string };
}) {
  return (
    <article className="glass mx-3 w-[min(88vw,380px)] shrink-0 rounded-[24px] p-6 md:p-7">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/20 font-display text-lg text-accent">
          {item.initial}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{item.name}</p>
          <p className="text-xs text-white/45">{item.title}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-white/65 md:text-[15px]">“{item.quote}”</p>
    </article>
  );
}
