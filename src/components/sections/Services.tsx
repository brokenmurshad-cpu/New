"use client";

import { useEffect, useState, type PointerEvent as ReactPointerEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { services } from "@/data/content";
import RevealText from "@/components/ui/RevealText";

// Keep these files inside public/images/services with the exact names below.
const serviceDisplay = [
  {
    title: "Web Development",
    image: "/images/services/web-development.webp",
  },
  {
    title: "AI Engineering",
    image: "/images/services/ai-engineering.webp",
  },
  {
    title: "SaaS Product Building",
    image: "/images/services/saas-product-building.webp",
  },
  {
    title: "Performance & Optimization",
    image: "/images/services/performance-optimization.webp",
  },
] as const;

type HoverPreview = {
  src: string;
  alt: string;
  x: number;
  y: number;
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoverPreview, setHoverPreview] = useState<HoverPreview | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("services");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);

      if (scrollProgress < 0.15) {
        setActiveIndex(-1);
      } else {
        const index = Math.min(
          services.length - 1,
          Math.floor((scrollProgress - 0.15) / ((1 - 0.15) / services.length)),
        );
        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setHoverPreview(null);
  }, [activeIndex]);

  const updateHoverPreview = (
    event: ReactPointerEvent<HTMLHeadingElement>,
  ) => {
    const service = services[activeIndex];
    const display = serviceDisplay[activeIndex];
    if (!display) return;

    const previewWidth = 288;
    const previewHeight = 208;
    const edgeSpace = 20;

    setHoverPreview({
      src: display.image,
      alt: `${display.title} preview`,
      x: Math.max(
        edgeSpace,
        Math.min(event.clientX + 24, window.innerWidth - previewWidth - edgeSpace),
      ),
      y: Math.max(
        edgeSpace,
        Math.min(event.clientY + 24, window.innerHeight - previewHeight - edgeSpace),
      ),
    });
  };

  return (
    <section id="services" className="relative h-[550vh] sticky-section">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container-px relative w-full">
          {/* Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[160px]" />
          <div className="pointer-events-none absolute right-[-150px] top-[20%] h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-[140px]" />
          <div className="pointer-events-none absolute bottom-[20%] left-[-150px] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[130px]" />

          <AnimatePresence mode="wait">
            {/* Heading Screen */}
            {activeIndex === -1 && (
              <motion.div
                key="heading"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-3xl"
              >
                <span className="mb-6 block text-xs uppercase tracking-[0.4em] text-white/40">
                  02 / Services
                </span>
                <RevealText
                  text="Capabilities built for modern product teams"
                  className="font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-5xl"
                />
              </motion.div>
            )}

            {/* Services Slides */}
            {activeIndex >= 0 && (
              <motion.div
                key={services[activeIndex].index}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-40%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full pl-20 md:pl-28 lg:pl-36"
              >
                {/*
                  The left padding reserves space for the number, keeping it outside
                  the card on the page's left-hand side.
                */}
                <article className="mx-auto w-full max-w-5xl rounded-[32px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl md:p-12">
                  <h3
                    onPointerEnter={updateHoverPreview}
                    onPointerMove={updateHoverPreview}
                    onPointerLeave={() => setHoverPreview(null)}
                    className="font-display cursor-pointer text-4xl font-bold text-white md:text-6xl"
                  >
                    {serviceDisplay[activeIndex]?.title ??
                      services[activeIndex].title}
                  </h3>

                  <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
                    {services[activeIndex].description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {services[activeIndex].tags.map((tag) => (
                      <motion.button
                        key={tag}
                        whileHover={{ scale: 1.08, y: -6 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="group relative cursor-pointer overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/70 backdrop-blur-xl transition-all hover:border-accent/50 hover:text-white"
                      >
                        <span className="absolute inset-0 translate-y-full bg-accent/20 transition-transform duration-300 group-hover:translate-y-0" />
                        <span className="relative z-10">{tag}</span>
                      </motion.button>
                    ))}
                  </div>
                </article>

                {/* Number is now outside the card, aligned with the page's left side. */}
                <span className="absolute left-0 top-8 font-display text-4xl text-white md:top-12 md:text-6xl">
                  {services[activeIndex].index}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Image preview shown only while the active service heading is hovered. */}
          <AnimatePresence>
            {hoverPreview && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 12 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ left: hoverPreview.x, top: hoverPreview.y }}
                className="pointer-events-none fixed z-50 hidden h-52 w-72 overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-2xl backdrop-blur-md md:block"
              >
                <Image
                  src={hoverPreview.src}
                  alt={hoverPreview.alt}
                  fill
                  sizes="288px"
                  quality={70}
                  className="object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
