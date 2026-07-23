"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Download, ChevronDown } from "lucide-react";
import { getGsap } from "@/lib/gsap";
import { personal, socials, whatsappUrl, badgeOuterWords } from "@/data/content";
import Button from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";
import Circles from "@/components/design/Circles";
import HeroVideoCard from "@/components/sections/HeroVideoCard";

const socialItems = [
  { href: socials.github, icon: Github, label: "GitHub" },
  { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${socials.email}`, icon: Mail, label: "Email" },
  { href: whatsappUrl, icon: MessageCircle, label: "WhatsApp" },
];

// Single centered hero column: Name (custom font) -> Social icons ->
// Role subtitle -> Description -> CTAs -> floating video showcase.
// The site-wide particle/ambient background stays full-screen and
// untouched; only the video is now a contained floating element.
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  // Cinematic entrance timeline — runs once the preloader finishes.
  useEffect(() => {
    const { gsap } = getGsap();
    let played = false;

    const playEntrance = () => {
      if (played) return;
      played = true;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(containerRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0)
        .to("#navbar-header", { y: 0, opacity: 1, duration: 0.9 }, 0.05)
        .fromTo(
          ".hero-badge-wrap",
          { opacity: 0, scale: 0.8, rotate: -20 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "back.out(1.6)" },
          0.2,
        )
        .fromTo(
          ".hero-title-custom",
          { opacity: 0, y: 60, scale: 0.95, filter: "blur(14px)" },
          { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "expo.out" },
          0.25,
        )
        .fromTo(
          ".hero-video-card",
          { opacity: 0, y: 40, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
          0.55,
        )
        .fromTo(
          ".hero-social-icon",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
          0.85,
        )
        .fromTo(
          ".hero-subtitle-line",
          { opacity: 0, y: 24, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.1 },
          1.05,
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 },
          1.3,
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
          1.45,
        )
        .fromTo(
          ".hero-scroll-indicator",
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          1.8,
        );

      // Infinite rotating outer ring — never stops
      gsap.to(badgeRef.current, { rotate: 360, duration: 18, ease: "none", repeat: -1 });

      // Infinite scroll-indicator bounce
      gsap.to(".hero-scroll-arrow", {
        y: 12,
        duration: 0.9,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.9,
      });
    };

    gsap.set(containerRef.current, { opacity: 0, y: 40 });
    gsap.set("#navbar-header", { y: -30, opacity: 0 });
    gsap.set(".hero-badge-wrap", { opacity: 0 });
    gsap.set(".hero-title-custom", { opacity: 0 });
    gsap.set(".hero-social-icon", { opacity: 0 });
    gsap.set(".hero-subtitle-line", { opacity: 0 });
    gsap.set(".hero-description", { opacity: 0 });
    gsap.set(".hero-cta", { opacity: 0 });
    gsap.set(".hero-video-card", { opacity: 0 });
    gsap.set(".hero-scroll-indicator", { opacity: 0 });

    const onReady = () => playEntrance();
    window.addEventListener("app:preloader-complete", onReady);
    const fallback = setTimeout(playEntrance, 3200);

    return () => {
      window.removeEventListener("app:preloader-complete", onReady);
      clearTimeout(fallback);
    };
  }, []);

  // Mouse parallax — title/icons/subtitle/buttons drift smoothly with the cursor
  useEffect(() => {
    const { gsap } = getGsap();
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(hover: none)").matches) return;

    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const px = (e.clientX / innerWidth - 0.5) * 2;
      const py = (e.clientY / innerHeight - 0.5) * 2;

      gsap.to(".hero-parallax-text", { x: px * 4, y: py * 4, duration: 1.1, ease: "power2.out" });
      gsap.to(".hero-parallax-btn", { x: px * 3, y: py * 3, duration: 1.1, ease: "power2.out" });
      gsap.to(".hero-badge-wrap", { x: px * 6, y: py * 6, duration: 1.1, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden pb-16 pt-28">
      {/* Ambient glow only — the site-wide particle canvas (global) stays full-screen behind everything */}
      <Circles className="-z-10 opacity-70" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(168,85,247,0.16),transparent_55%)]" />

      {/* Experience badge — floating, top area, never blocks the centered column */}
      <div className="hero-badge-wrap absolute right-6 top-24 z-10 flex h-24 w-24 items-center justify-center md:right-14 md:top-28 md:h-28 md:w-28">
        <div ref={badgeRef} className="absolute inset-0">
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <defs>
              <path id="badgeCircle" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
            </defs>
            <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(168,85,247,0.35)" strokeWidth="1" strokeDasharray="2 6" />
            <text fill="#e9d5ff" fontSize="11" letterSpacing="3" className="uppercase">
              <textPath href="#badgeCircle">{badgeOuterWords.join("  •  ")}  •  </textPath>
            </text>
          </svg>
        </div>
        <div className="glass flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full text-center backdrop-blur-xl md:h-20 md:w-20">
          <span className="font-display text-xl font-semibold text-white md:text-2xl">{personal.yearsExperience}+</span>
          <span className="text-[8px] uppercase tracking-[0.14em] text-white/55">Years Exp.</span>
        </div>
      </div>

      <div
        ref={containerRef}
        className="container-px relative z-10 flex w-full flex-col items-center text-center will-change-transform"
      >
        {/* 1. Name — custom font, single instance */}
        <h1 className="hero-title-custom hero-parallax-text leading-none text-white">{personal.fullName}</h1>

        {/* Two-column row beneath the title: text stack (left, shifted under
            "Muhammad") and the glass video showcase (right, shifted under
            "Husnain"). Stacks vertically on mobile — video first, then text. */}
        <div className="mt-6 flex w-full flex-col items-center gap-10 md:mt-10 md:flex-row md:items-center md:justify-center md:gap-8 lg:gap-12">
          {/* Left column — icons, subtitle, description, CTAs */}
          <div className="order-2 flex w-full flex-col items-center text-center md:order-1 md:w-1/2 md:items-center md:-translate-x-3 lg:-translate-x-8">
            {/* 2. Social icons — centered, floating, magnetic, parallax */}
            <div className="hero-parallax-text flex items-center gap-4">
              {socialItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="hero-social-icon"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.6 + i * 0.25, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <Magnetic strength={30}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={item.label}
                      data-cursor="hover"
                      className="glass group flex h-12 w-12 items-center justify-center rounded-full text-white/80 transition-all duration-300 hover:-translate-y-1 hover:rotate-[8deg] hover:text-accent hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] md:h-[52px] md:w-[52px]"
                    >
                      <item.icon className="h-[19px] w-[19px] transition-transform duration-300 group-hover:scale-110 md:h-[22px] md:w-[22px]" />
                    </a>
                  </Magnetic>
                </motion.div>
              ))}
            </div>

            {/* 3. Subtitle */}
            <div className="hero-parallax-text mt-8 space-y-1 md:mt-10">
              {personal.roles.slice(0, 2).map((role) => (
                <p key={role} className="hero-subtitle-line text-[clamp(1.05rem,2.2vw,1.5rem)] font-light text-white/80">
                  {role}
                </p>
              ))}
              <p className="hero-subtitle-line text-[clamp(1.05rem,2.2vw,1.5rem)] font-light text-accent">
                Based in {personal.location}
              </p>
            </div>

            {/* 4. About / description */}
            <p className="hero-description hero-parallax-text mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              {personal.heroSubtext}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <div className="hero-cta hero-parallax-btn">
                <Button href={personal.cvUrl} variant="primary" download ariaLabel="Download CV">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </div>
              <div className="hero-cta hero-parallax-btn">
                <Button href="#contact" variant="outline">
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </div>

          {/* Right column — glass video showcase (unchanged: size, glow, border radius, blur, motion) */}
          <div className="order-1 w-full md:order-2 md:w-1/2 md:translate-x-3 lg:translate-x-8">
            <HeroVideoCard className="hero-video-card w-full" />
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[11px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <ChevronDown className="hero-scroll-arrow h-5 w-5 text-accent drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
      </div>
    </section>
  );
}