"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import RevealText from "@/components/ui/RevealText";
import Button from "@/components/ui/Button";
import { personal, socials, whatsappUrl } from "@/data/content";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(
      `Hi Muhammad,\n\nMy name is ${name}.\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(
      "Portfolio Inquiry",
    )}&body=${body}`;
    setStatus("sent");
    form.reset();
  };

  return (
    <section id="contact" className="relative sticky-section section-pad overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[clamp(3rem,16vw,14rem)] font-semibold uppercase leading-none tracking-tight text-white/[0.03] blur-[1px]"
      >
        Muhammad Husnain
      </div>

      <div className="container-px relative z-10">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Contact</p>
            <RevealText
              as="h2"
              text="Let's build your next premium product"
              className="max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] text-white"
            />
          </div>
          <span className="hidden text-sm uppercase tracking-[0.24em] text-white/40 md:block">
            05 / Contact
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-5">
              <InfoCard
                icon={Mail}
                label="Email"
                value={personal.email}
                href={`mailto:${personal.email}`}
              />
              <InfoCard
                icon={Phone}
                label="WhatsApp"
                value={personal.phone}
                href={whatsappUrl}
              />
              <InfoCard icon={MapPin} label="Location" value={personal.location} />
              <div className="glass rounded-[24px] p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-accent">Availability</p>
                <p className="text-lg text-white">{personal.availableText}</p>
                <p className="mt-2 text-sm text-white/50">
                  Open to freelance, full-time product roles, and SaaS collaborations.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="glass rounded-[28px] p-6 md:p-8"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/45">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/60"
                />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
                <Button href={whatsappUrl} variant="outline" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </Button>
                {status === "sent" ? (
                  <span className="text-sm text-accent">Opening your mail client...</span>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/45">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/60"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="glass flex items-center gap-4 rounded-[22px] p-5 transition hover:border-accent/40">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">{label}</p>
        <p className="text-sm text-white md:text-base">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" data-cursor="hover">
      {content}
    </a>
  );
}
