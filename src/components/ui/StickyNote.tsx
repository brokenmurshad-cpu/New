"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type StickyNoteProps = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  color?: "yellow" | "pink" | "mint" | "blue";
  rotate?: number;
  delay?: number;
};

const colors = {
  yellow: "bg-yellow-200 text-neutral-900",
  pink: "bg-pink-200 text-neutral-900",
  mint: "bg-emerald-200 text-neutral-900",
  blue: "bg-sky-200 text-neutral-900",
};

export default function StickyNote({
  index,
  title,
  description,
  tags,
  color = "yellow",
  rotate = 0,
  delay = 0,
}: StickyNoteProps) {
  return (
    <motion.article
      drag
      dragElastic={0.25}
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: rotate - 10,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        delay,
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}
      whileHover={{
        y: -20,
        scale: 1.06,
        rotate: 0,
        boxShadow:
          "0 35px 80px rgba(0,0,0,0.35)",
        cursor: "grab",
      }}
      whileDrag={{
        scale: 1.08,
        rotate: 0,
        cursor: "grabbing",
      }}
      className={cn(
        "sticky-note relative w-full max-w-[320px]",
        "rounded-[18px] p-6 md:p-7",
        "shadow-[0_20px_50px_rgba(0,0,0,0.25)]",
        colors[color]
      )}
    >
      {/* Tape */}
      <div
        className="
        absolute -top-4 left-1/2
        h-8 w-20 -translate-x-1/2
        rotate-[-3deg]
        bg-white/30
        backdrop-blur-sm
        "
      />

      <div className="relative">

        <span className="block text-sm font-bold opacity-40">
          {index}
        </span>

        <h3 className="
          mt-5
          text-2xl
          font-bold
          tracking-tight
        ">
          {title}
        </h3>


        <p className="
          mt-4
          text-sm
          leading-relaxed
          opacity-80
        ">
          {description}
        </p>


        <div className="
          mt-6
          flex
          flex-wrap
          gap-2
        ">
          {tags.map((tag)=>(
            <span
              key={tag}
              className="
              rounded-full
              bg-black/10
              px-3
              py-1
              text-xs
              font-medium
              "
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

    </motion.article>
  );
}