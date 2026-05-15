"use client";
import { useRef, useCallback,useEffect,useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Faq from "@/components/Faq";
import ScrollReveal from "@/components/Reactbit/ScrollReveal";
import Footer from "@/components/Footer";
import { PageLoader } from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroNew from "@/components/HeroNew";
import FeatureV3 from "@/components/FeatureV3";
import { Feedback } from "@/components/Feedback";
import Compliance from "@/components/Compliance";
import CalculatorBox from "@/components/CalculatorBox";
import Carousel from "@/components/Carousel";
import FeatureV4 from "@/components/FeatureV4";
import Framework from "@/components/Framework";

export default function Home() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  const performScroll = useCallback(() => {
    if (productRef.current && scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      ) as HTMLElement;

      if (viewport) {
        const productTop = productRef.current.offsetTop;
        viewport.scrollTo({ top: productTop, behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToProduct");
    if (shouldScroll) {
      performScroll();
      sessionStorage.removeItem("scrollToProduct");
    }

    window.addEventListener("scrollToProduct", performScroll);

    return () => {
      window.removeEventListener("scrollToProduct", performScroll);
    };
  }, [performScroll]);

      const [loading, setLoading] = useState(true);

        useEffect(() => {
      requestAnimationFrame(() => {
        setLoading(false);
      });
    }, []);

      if (loading) {
        return (
          <div className="h-screen flex items-center justify-center bg-white">
            <PageLoader />
          </div>
        );
      }

  return (
    <>
    <Navbar />
      <ScrollArea ref={scrollAreaRef} className="w-full h-screen bg-theme-white">
        <div className="flex flex-col mx-auto">
            <HeroNew />
        
            <ScrollReveal >
              <CalculatorBox/>
            </ScrollReveal>
         
          <ScrollReveal >
             <FeatureV3/>
          </ScrollReveal>
          
          <ScrollReveal>
            <Compliance />
          </ScrollReveal>

          <ScrollReveal>
            <Framework />
          </ScrollReveal>
        
          <ScrollReveal >
            <Feedback />
          </ScrollReveal>

          <ScrollReveal>
            <FeatureV4/>
          </ScrollReveal>

          <ScrollReveal>
            <Faq />
          </ScrollReveal>

          <ScrollReveal>
            <Carousel />
          </ScrollReveal>

          <ScrollReveal>
             <Footer scrollAreaRef={scrollAreaRef} />
          </ScrollReveal>
          
        </div>
      </ScrollArea>

     
    </>
  );
}
