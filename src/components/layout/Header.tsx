"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BurgerMenuBtn from "@/components/ui/BurgerMenuBtn";
import { MagneticEffect } from "@/components/ui/Magnetic";
import Link from "@/components/ui/Link";
import Circles from "@/components/design/Circles";
import { navbarLinks, navLinks, personal } from "@/data/content";
import { animateReferenceMenuEnter, animateReferenceMenuLeave, navbarScale } from "@/lib/animations";

// Header + fullscreen hamburger menu.
// Animation timing/behaviour ported 1:1 from the approved reference
// implementation (curved reveal panel, staggered link enter/leave,
// burger scale-on-scroll) and rewired to this project's own components,
// data and purple/white brand palette.
export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: container });

  const toggleMenu = contextSafe(() => {
    setIsNavbarOpen((prev) => {
      const nextState = !prev;

      if (nextState) {
        animateReferenceMenuEnter("#navbar", ".nav-link-item", ".rounded__div__up");
        navbarRef.current?.focus();
      } else {
        animateReferenceMenuLeave("#navbar", ".nav-link-item", ".rounded__div__up");
        navbarRef.current?.blur();
      }

      return nextState;
    });
  });

  // Initial GSAP state + burger scale-on-scroll binding
  useGSAP(
    () => {
      gsap.set("#navbar", { y: "-100%", display: "none" });

      const timer = setTimeout(() => {
        if (document.getElementById("hero")) {
          navbarScale("#burger", "#hero");
        }
      }, 100);

      return () => clearTimeout(timer);
    },
    { scope: container },
  );

  // Escape key closes the menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isNavbarOpen) {
        toggleMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isNavbarOpen, toggleMenu]);

  return (
    <div ref={container}>
      <BurgerMenuBtn id="burger" className="scale-100 drop-shadow-lg !z-[7000]" isOpen={isNavbarOpen} onClick={toggleMenu} />

      <div
        id="navbar"
        ref={navbarRef}
        tabIndex={-1}
        className="fixed left-0 top-0 z-[6000] flex h-full w-full flex-col items-center justify-center outline-none"
      >
        <Circles className="opacity-60" />

        <nav className="z-10 w-full px-8">
          <ul className="flex flex-col items-center justify-center space-y-3 md:space-y-5">
            {navbarLinks.map((l) => (
              <li key={l.label} className="nav-link-item overflow-hidden">
                <MagneticEffect divId={`magneto-${l.label}`} textId={`text-${l.label}`}>
                  <div id={`magneto-${l.label}`} onClick={toggleMenu} className="group cursor-pointer p-3 md:p-4" data-cursor="hover">
                    <Link
                      tag="div"
                      label={l.label}
                      url={l.url}
                      className="text-[clamp(1.6rem,7vw,4.2rem)] font-display font-semibold uppercase leading-none text-white transition-colors duration-300 hover:text-accent"
                    />
                  </div>
                </MagneticEffect>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-10 mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.24em] text-white/50 md:mt-14">
          <a href={`mailto:${personal.email}`} className="transition-colors hover:text-accent" data-cursor="hover">
            {personal.email}
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 md:block" />
          <span className="hidden md:block">{personal.location}</span>
        </div>

        {/* Curved background reveal */}
        <div className="absolute left-0 top-0 -z-10 flex h-full w-full flex-col">
          <div className="h-full w-full grow bg-[#0b0614]" />
          <div className="rounded__div__up !relative z-20">
            <div className="round__bg__up bg-[#0b0614]" />
          </div>
        </div>
      </div>

      <header id="navbar-header" className="container-px absolute inset-x-0 top-0 z-20 h-fit pt-6 will-change-auto">
        <nav className="flex items-center justify-between">
          {/* Large top-left wordmark removed per request. Invisible placeholder
              preserves the exact flex-between spacing of the navbar so the
              small "Available for Work & Freelance" pill and nav links (About,
              Work, Contact) keep their current position untouched. */}
          <div className="invisible -m-6 p-6" aria-hidden="true">
            <h2 className="font-display flex items-start text-lg font-extrabold uppercase text-white md:text-2xl">
              Available for work and freelance
            </h2>
          </div>

          <div className="hidden justify-start md:flex">
            <p className="font-display select-none text-center text-xs font-bold uppercase leading-tight text-white/70">
              Available for <br />
              Work &amp; Freelance
            </p>
          </div>

          <div className="relative z-30 flex pr-20 md:pr-24 lg:pr-28">
            <ul className="hidden flex-1 gap-2 overflow-y-hidden text-sm font-medium text-white md:flex md:gap-3 md:text-base lg:gap-4 lg:text-lg">
              {navLinks.map((l, index) => (
                <Link key={l.label} tag="li" label={l.label + (index !== navLinks.length - 1 ? "," : "")} url={l.url} />
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}