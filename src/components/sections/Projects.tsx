"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { getGsap } from "@/lib/gsap";
import { projects } from "@/data/content";
import RevealText from "@/components/ui/RevealText";
import Button from "@/components/ui/Button";
import TiltCard from "@/components/ui/TiltCard";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const { gsap, ScrollTrigger } = getGsap();

    const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]");
    const triggers: ScrollTrigger[] = [];

    cards.forEach((card, index) => {
      const st = ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(index),
        onEnterBack: () => setActive(index),
      });
      triggers.push(st);

      gsap.fromTo(
        card.querySelector("[data-project-media]"),
        { scale: 0.95, opacity: 0.75 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        },
      );
    });

    if (counterRef.current) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: counterRef.current,
        pinSpacing: false,
      });
    }

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative section-pad">
      <div className="container-px">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Projects</p>
            <RevealText
              as="h2"
              text="Selected work with cinematic craft"
              className="max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] text-white"
            />
          </div>
          <span className="hidden text-sm uppercase tracking-[0.24em] text-white/40 md:block">
            03 / Work
          </span>
        </div>

        <div className="relative">
          <div
            ref={counterRef}
            className="pointer-events-none absolute right-0 top-24 z-20 hidden md:block"
          >
            <div className="glass rounded-full px-5 py-3 font-display text-sm tracking-[0.2em] text-white">
              <span className="text-accent">{String(active + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-white/30">/</span>
              <span className="text-white/50">{String(projects.length).padStart(2, "0")}</span>
            </div>
          </div>

          <div className="space-y-10 md:space-y-16">
            {projects.map((project) => (
              <article
                key={project.id}
                data-project-card
                className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
              >
                <TiltCard className="w-full">
                  <div
                    data-project-media
                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0614]/80 via-transparent to-transparent opacity-80" />
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.14)_48%,transparent_66%)]" />
                      </div>
                    </div>
                  </div>
                </TiltCard>

                <div className="space-y-5">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/45">
                    <span className="text-accent">{project.index}</span>
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    <span>Featured</span>
                  </div>
                  <h3 className="font-display text-[clamp(1.6rem,3vw,2.6rem)] leading-tight text-white">
                    {project.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/60 md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button href={project.href} variant="primary" magnetic>
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                    {project.github ? (
                      <Button
                        href={project.github}
                        variant="outline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                    ) : null}
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
