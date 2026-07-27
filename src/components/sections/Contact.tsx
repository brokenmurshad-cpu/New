"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { personal, socials, whatsappUrl } from "@/data/content";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(
      `Hi Muhammad,\n\nMy email: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(
      "Portfolio Inquiry",
    )}&body=${body}`;
    setStatus("sent");
    form.reset();
  };

  return (
    <section
      id="contact"
      className="reference-contact relative isolate min-h-[100svh] overflow-hidden bg-[#060716] text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-[14.8%] top-[15.5%] h-10 w-10 rounded-full bg-[#bf91ff] shadow-[0_0_0_10px_rgba(180,124,255,0.05),0_0_26px_8px_rgba(163,91,255,0.5)]"
      />

      <div className="relative z-10 min-h-[100svh] px-7 pb-12 pt-[4.6rem] sm:px-12 lg:px-[3.1vw]">
        <p className="flex items-center gap-2.5 font-sans text-[clamp(1.25rem,1.65vw,2rem)] font-extrabold uppercase leading-none tracking-[-0.055em] text-white">
          <span className="text-white/65">✱</span>
          Get in <span className="text-[#8b4be8]">touch</span>
        </p>

        <div className="mt-[clamp(7.5rem,15.5vh,11.5rem)] max-w-[min(58rem,58vw)]">
          <h2 className="font-sans text-[clamp(4rem,7.25vw,9.25rem)] font-extrabold uppercase leading-[0.93] tracking-[-0.085em] text-white/95">
            Let&apos;s talk
            <span className="mt-[0.17em] block text-[#8b4be8]">about your</span>
            <span className="mt-[0.17em] block text-[#8b4be8]">idea.</span>
          </h2>
        </div>

        <div className="mt-12 max-w-sm lg:absolute lg:left-[3.1vw] lg:top-[67.5%] lg:mt-0">
          <p className="text-[clamp(0.9rem,0.9vw,1.1rem)] leading-[1.65] text-white/85">
            Have a project in mind? Looking for a long-term partner? Or just want to say hi?
            Let&apos;s connect and create something amazing together.
          </p>

          <div className="mt-10 space-y-7">
            <ContactDetail
              icon={Mail}
              label="Email me"
              value={personal.email}
              href={`mailto:${personal.email}`}
            />
            <ContactDetail
              icon={Phone}
              label="WhatsApp"
              value={personal.phone}
              href={whatsappUrl}
            />
            <ContactDetail icon={MapPin} label="Location" value={personal.location} />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-16 w-full rounded-[1.65rem] border border-[#5f27aa]/55 bg-[#0b0c1d]/95 p-7 shadow-[0_20px_45px_rgba(8,4,27,0.65),0_0_30px_rgba(112,43,214,0.2)] sm:p-10 lg:absolute lg:right-[11.6%] lg:top-[30.5%] lg:mt-0 lg:w-[min(28vw,34rem)]"
          aria-label="Contact form"
        >
          <Field label="Email address" name="email" type="email" placeholder="Enter your email" required />

          <div className="mt-6">
            <label className="mb-3 block text-xs font-bold uppercase tracking-[0.03em] text-white/65">
              How can I help?
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-white/[0.025] bg-[#070817] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#8b4be8] focus:ring-2 focus:ring-[#8b4be8]/15"
            />
          </div>

          <button
            type="submit"
            data-cursor="hover"
            className="mt-9 w-full rounded-full border-[3px] border-[#8546e5] bg-[#140928]/55 px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.28em] text-white shadow-[7px_6px_0_rgba(14,6,29,0.55)] transition hover:bg-[#8546e5] hover:shadow-[0_0_26px_rgba(133,70,229,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a66df7]"
          >
            Send message
          </button>

          {status === "sent" ? (
            <p className="mt-4 text-center text-xs text-[#b985ff]">Opening your mail client...</p>
          ) : null}
        </form>
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
      <label className="mb-3 block text-xs font-bold uppercase tracking-[0.03em] text-white/65">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/[0.025] bg-[#070817] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#8b4be8] focus:ring-2 focus:ring-[#8b4be8]/15"
      />
    </div>
  );
}

function ContactDetail({
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
    <div className="flex items-center gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/65">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#8b4be8]">{label}</p>
        <p className="mt-1 text-sm font-bold text-white">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      data-cursor="hover"
      className="block w-fit transition-opacity hover:opacity-70"
    >
      {content}
    </a>
  );
}
