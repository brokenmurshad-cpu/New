"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import TiltCard from "@/components/ui/TiltCard";
import { personal } from "@/data/content";

const capabilities = [
  "Full Stack Web Development",
  "AI Integration & Agent Workflows",
  "SaaS Product Development",
  "Cloud Architecture & Performance",
];

export default function About() {
  return (
    <section id="about" className="relative sticky-section section-pad overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-accent/15 blur-[110px]" />

      <div className="container-px">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">About</p>
            <RevealText
              as="h2"
              text={personal.aboutTitle}
              className="max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] text-white"
            />
          </div>
          <span className="hidden text-sm uppercase tracking-[0.24em] text-white/40 md:block">01 / About</span>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="order-1">
            <TiltCard maxTilt={5} className="mx-auto w-full max-w-sm">
              <div className="glass relative overflow-hidden rounded-[28px] p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
                  <Image
                    src="/images/profile.jpg"
                    alt="Muhammad Husnain — Full Stack Developer & AI Engineer"
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-cover"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0614]/70 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.12)_48%,transparent_66%)]" />
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b0614]/60 px-4 py-3 backdrop-blur-xl">
                  <div>
                    <p className="font-display text-sm font-semibold text-white">{personal.fullName}</p>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">{personal.location}</p>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(168,85,247,0.9)]" />
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <div className="order-2 space-y-6">
            <Reveal>
              <p className="text-lg leading-relaxed text-white/70">{personal.aboutIntro}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="text-base leading-relaxed text-white/55">{personal.aboutBody}</p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="glass rounded-[24px] p-6 md:p-7">
                <h3 className="mb-4 font-display text-xl text-accent">What I Do</h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {capabilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/75 md:text-base">
                      <span className="mt-1 text-accent">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
