"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/content";
import Magnetic from "@/components/ui/Magnetic";

export default function WhatsAppButton() {
  return (
    <Magnetic strength={35} className="whatsapp-float fixed bottom-6 right-5 z-[80] md:bottom-8 md:right-8">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-cursor="hover"
        className="whatsapp-pulse glass flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/90 text-white shadow-[0_12px_40px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6 fill-current" />
      </a>
    </Magnetic>
  );
}
