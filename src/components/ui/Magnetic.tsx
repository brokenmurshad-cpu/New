"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { getGsap } from "@/lib/gsap";

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  textStrength?: number;
  divId?: string;
  textId?: string;
};

export default function Magnetic({
  children,
  className,
  strength = 28,
  textStrength = 14,
  divId,
  textId,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    if (!el) return;
    const { gsap } = getGsap();
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x * (strength / 100),
      y: y * (strength / 100),
      duration: 0.45,
      ease: "power3.out",
    });

    if (textId) {
      const text = el.querySelector(`#${textId}`) || el.querySelector("[data-magnetic-text]");
      if (text) {
        gsap.to(text, {
          x: x * (textStrength / 100),
          y: y * (textStrength / 100),
          duration: 0.45,
          ease: "power3.out",
        });
      }
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    const { gsap } = getGsap();
    gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
    if (textId) {
      const text = el.querySelector(`#${textId}`) || el.querySelector("[data-magnetic-text]");
      if (text) gsap.to(text, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
    }
  };

  return (
    <div
      id={divId}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("will-change-transform", className)}
    >
      {children}
    </div>
  );
}

export { Magnetic as MagneticEffect };
