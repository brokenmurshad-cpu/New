"use client";

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { personal, socials, whatsappUrl } from "@/data/content";
import Magnetic from "@/components/ui/Magnetic";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 pb-10 pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.14),transparent_55%)]" />
      <div className="container-px relative z-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-white/50">
              Let&apos;s build something premium
            </p>
            <h2 className="font-display text-[clamp(2.4rem,8vw,5.5rem)] font-medium leading-[0.95] text-white">
              Muhammad
              <span className="block text-gradient-accent">Husnain</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { href: socials.github, icon: Github, label: "GitHub" },
              { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: whatsappUrl, icon: MessageCircle, label: "WhatsApp" },
              { href: `mailto:${socials.email}`, icon: Mail, label: "Email" },
            ].map((item) => (
              <Magnetic key={item.label} strength={22}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  data-cursor="hover"
                  className="glass flex h-12 w-12 items-center justify-center rounded-full text-white transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {personal.fullName}. Crafted in {personal.location}.
          </p>
          <p className="uppercase tracking-[0.22em]">Full Stack · AI · SaaS</p>
        </div>
      </div>
    </footer>
  );
}
