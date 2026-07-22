"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type HeroVideoCardProps = {
  className?: string;
};

// Centered floating premium video card — replaces the old full-bleed
// background video. Reacts to the cursor with a subtle spring-driven
// 3D tilt + parallax lift, purple glow border, and glass framing.
export default function HeroVideoCard({ className }: HeroVideoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.6 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        className="hero-video-glow group relative mx-auto w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl will-change-transform"
      >
        <div className="relative aspect-video overflow-hidden rounded-[28px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full scale-[1.02] object-cover"
            poster="/images/profile.jpg"
          >
            <source src="/video/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0614]/50 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.14)_48%,transparent_66%)]" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-accent/20" />
      </motion.div>
    </motion.div>
  );
}
