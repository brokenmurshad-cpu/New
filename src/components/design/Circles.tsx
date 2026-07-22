"use client";

import { cn } from "@/lib/utils";

export default function Circles({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
      <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-violet-400/15 blur-[110px]" />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />
    </div>
  );
}
