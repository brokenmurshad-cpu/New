"use client";

import { cn } from "@/lib/utils";
import Magnetic from "@/components/ui/Magnetic";

type BurgerMenuBtnProps = {
  id?: string;
  className?: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function BurgerMenuBtn({
  id = "burger",
  className,
  isOpen,
  onClick,
}: BurgerMenuBtnProps) {
  return (
    <Magnetic strength={30}>
      <button
        id={id}
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={onClick}
        data-cursor="hover"
        className={cn(
          "fixed right-5 top-5 z-[7000] flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl md:right-8 md:top-7",
          "shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-colors duration-300 hover:bg-accent/20",
          className,
        )}
      >
        <span className="relative block h-3.5 w-6">
          <span
            className={cn(
              "absolute left-0 top-0 h-[2px] w-full origin-center rounded-full bg-white transition-all duration-400",
              isOpen && "top-1.5 rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-1.5 h-[2px] w-full rounded-full bg-white transition-all duration-300",
              isOpen && "scale-x-0 opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute bottom-0 left-0 h-[2px] w-full origin-center rounded-full bg-white transition-all duration-400",
              isOpen && "bottom-1.5 -rotate-45",
            )}
          />
        </span>
      </button>
    </Magnetic>
  );
}
