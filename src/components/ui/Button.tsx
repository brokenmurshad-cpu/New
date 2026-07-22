"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/ui/Magnetic";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  className?: string;
  magnetic?: boolean;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  download?: boolean | string;
  ariaLabel?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  magnetic = true,
  target,
  rel,
  type = "button",
  download,
  ariaLabel,
}: ButtonProps) {
  const styles = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-500",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variant === "primary" &&
      "bg-accent text-white shadow-[0_0_0_1px_rgba(168,85,247,0.35),0_10px_40px_rgba(168,85,247,0.28)] hover:shadow-[0_0_0_1px_rgba(168,85,247,0.55),0_14px_50px_rgba(168,85,247,0.4)]",
    variant === "secondary" &&
      "glass text-foreground hover:bg-white/10",
    variant === "ghost" && "bg-transparent text-foreground hover:bg-white/5",
    variant === "outline" &&
      "border border-white/15 bg-transparent text-foreground hover:border-accent/60 hover:bg-accent/10",
    className,
  );

  const inner = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      <span className="pointer-events-none absolute inset-0 -z-10 translate-y-[110%] rounded-full bg-white/15 transition-transform duration-500 group-hover:translate-y-0" />
    </span>
  );

  const node = href ? (
    <Link
      href={href}
      className={styles}
      target={target}
      rel={rel}
      download={download}
      aria-label={ariaLabel}
      data-cursor="hover"
    >
      {inner}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      aria-label={ariaLabel}
      data-cursor="hover"
    >
      {inner}
    </button>
  );

  if (!magnetic) return node;
  return <Magnetic strength={24}>{node}</Magnetic>;
}
