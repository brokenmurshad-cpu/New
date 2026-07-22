"use client";

import Marquee from "@/components/ui/Marquee";
import { marqueeWords } from "@/data/content";

export default function RoleMarquee() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.02] py-6 md:py-8" aria-label="Roles">
      <Marquee speed={28} className="gap-0">
        {marqueeWords.map((word) => (
          <div key={word} className="flex items-center gap-8 px-4">
            <span className="marquee-gradient-text font-display text-[clamp(1.6rem,4vw,3rem)] font-medium uppercase tracking-tight">
              {word}
            </span>
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
