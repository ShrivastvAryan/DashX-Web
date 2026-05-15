"use client";
import { useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import BusinessHeroSection from "@/components/BusinessHeroSection";
import BusinessCardSection from "@/components/BusinessCardsSection";

export default function Home() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      ) as HTMLElement;
      if (viewport) {
        viewport.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <ScrollArea ref={scrollAreaRef} className="w-full h-screen">
      <div className="flex flex-col font-sans">
        <BusinessHeroSection />
        <BusinessCardSection />
        {/* <Footer onScrollToTop={scrollToTop} /> */}
      </div>
    </ScrollArea>
  );
}
