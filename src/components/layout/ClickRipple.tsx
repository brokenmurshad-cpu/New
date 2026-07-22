"use client";

import { useEffect } from "react";
import { getGsap } from "@/lib/gsap";

export default function ClickRipple() {
  useEffect(() => {
    const { gsap } = getGsap();

    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement("span");
      ripple.className = "click-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 0.55 },
        {
          scale: 18,
          opacity: 0,
          duration: 0.85,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        },
      );
    };

    window.addEventListener("pointerdown", handleClick);
    return () => window.removeEventListener("pointerdown", handleClick);
  }, []);

  return null;
}
