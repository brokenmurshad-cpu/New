"use client";

import { ArrowUp, Download, Github, Linkedin, MessageCircle } from "lucide-react";
import Marquee from "@/components/ui/Marquee";
import Magnetic from "@/components/ui/Magnetic";
import { personal, socials, whatsappUrl } from "@/data/content";

const socialLinks = [
  { href: socials.github, icon: Github, label: "GitHub" },
  { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: whatsappUrl, icon: MessageCircle, label: "WhatsApp" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate min-h-[100svh] overflow-hidden bg-[#1d1f28] text-white">
      {/* Oversized moving background name, matching the reference footer. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[4%] z-0 select-none overflow-hidden"
      >
        <Marquee speed={38} pauseOnHover={false} className="w-full">
          <span className="block whitespace-nowrap font-sans text-[clamp(8.5rem,19vw,23rem)] font-extrabold uppercase leading-none tracking-[-0.095em] text-white/[0.045]">
            Muhammad Husnain
          </span>
        </Marquee>
      </div>

      <div className="relative z-10 min-h-[100svh] px-7 pb-16 pt-[clamp(9rem,17vh,13rem)] sm:px-12 lg:px-[3.1vw]">
        {/* Main left-aligned statement */}
        <div className="max-w-[min(62rem,73vw)]">
          <h2 className="font-sans text-[clamp(3.8rem,7.3vw,9.3rem)] font-extrabold uppercase leading-[0.84] tracking-[-0.078em] text-white/95">
            Let&apos;s build
            <span className="mt-[0.16em] block text-[#8b4be8]">the future.</span>
          </h2>

          <Magnetic strength={18}>
            <a
              href={personal.cvUrl}
              download
              data-cursor="hover"
              className="mt-[clamp(4.5rem,10vh,8rem)] inline-flex items-center gap-2 rounded-full border-[3px] border-[#8142e3] bg-[#160b2b]/55 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.32em] text-white shadow-[10px_8px_0_rgba(10,6,24,0.55)] transition hover:bg-[#8142e3] hover:shadow-[0_0_28px_rgba(129,66,227,0.45)]"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Magnetic>
        </div>

        {/* The reference keeps social links and email in the right-side corner. */}
        <div className="mt-20 flex max-w-sm flex-col items-start gap-7 sm:items-end lg:absolute lg:right-[3.1vw] lg:top-[50%] lg:mt-0 lg:text-right">
          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.17em] text-[#8b4be8]">
              Socials
            </p>
            <div className="flex items-center gap-6 sm:justify-end">
              {socialLinks.map((item) => (
                <Magnetic key={item.label} strength={18}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    data-cursor="hover"
                    className="block text-[#8b4be8] transition hover:scale-110 hover:text-white"
                  >
                    <item.icon className="h-7 w-7 stroke-[2.4]" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.17em] text-[#8b4be8]">
              Contact
            </p>
            <a
              href={`mailto:${socials.email}`}
              data-cursor="hover"
              className="font-sans text-[clamp(1.15rem,1.65vw,2rem)] font-bold tracking-[-0.045em] text-white/90 transition hover:text-[#9d6cff]"
            >
              {personal.email}
            </a>
          </div>
        </div>

        <p className="absolute bottom-16 left-7 text-sm font-semibold text-[#8b4be8] sm:left-12 lg:left-[3.1vw]">
          &copy; {year} {personal.fullName}
        </p>

        <p className="absolute bottom-16 right-7 text-xs font-extrabold uppercase tracking-[0.25em] text-[#8b4be8] sm:right-12 lg:right-[3.1vw]">
          Build <span className="mx-5">•</span> Ship <span className="mx-5">•</span>
        </p>
      </div>

      <a
        href="#hero"
        aria-label="Back to top"
        data-cursor="hover"
        className="fixed bottom-28 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#8142e3] text-white shadow-[0_12px_32px_rgba(129,66,227,0.4)] transition hover:-translate-y-1 hover:bg-[#9561ee] md:bottom-28 md:right-8"
      >
        <ArrowUp className="h-7 w-7 stroke-[3]" />
      </a>
    </footer>
  );
}
