"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { getGsap } from "@/lib/gsap";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
};

export default function TiltCard({
  children,
  className,
  maxTilt = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    if (!el) return;
    const { gsap } = getGsap();
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / rect.width) * maxTilt;
    const rotateX = -((y - rect.height / 2) / rect.height) * maxTilt;

    el.style.setProperty("--x", `${(x / rect.width) * 100}%`);
    el.style.setProperty("--y", `${(y / rect.height) * 100}%`);

    gsap.to(el, {
      rotateX,
      rotateY,
      transformPerspective: 900,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    const { gsap } = getGsap();
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("card-glow will-change-transform [transform-style:preserve-3d]", className)}
    >
      {children}
    </div>
  );
}
