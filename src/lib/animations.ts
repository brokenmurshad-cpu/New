"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateReferenceMenuEnter(
  navbar: string,
  links: string,
  curve: string,
) {
  const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

  gsap.set(navbar, { display: "flex" });

  tl.fromTo(
    navbar,
    { y: "-100%" },
    { y: "0%", duration: 0.85 },
  )
    .fromTo(
      curve,
      { y: 80 },
      { y: 0, duration: 0.75 },
      0.05,
    )
    .fromTo(
      links,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      },
      0.2,
    );

  return tl;
}

export function animateReferenceMenuLeave(
  navbar: string,
  links: string,
  curve: string,
) {
  const tl = gsap.timeline({
    defaults: { ease: "power4.inOut" },
    onComplete: () => {
      gsap.set(navbar, { display: "none" });
    },
  });

  tl.to(links, {
    y: -40,
    opacity: 0,
    duration: 0.35,
    stagger: 0.04,
    ease: "power2.in",
  })
    .to(curve, { y: 80, duration: 0.55 }, 0.05)
    .to(navbar, { y: "-100%", duration: 0.7 }, 0.08);

  return tl;
}

export function navbarScale(burger: string, hero: string) {
  if (typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: hero,
    start: "top top",
    end: "bottom top",
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.to(burger, {
        scale: 1 - progress * 0.08,
        duration: 0.2,
        overwrite: true,
      });
    },
  });
}
