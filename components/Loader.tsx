"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export function PageLoader() {
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev; 
        return prev + Math.random() * 12; 
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 animate-fadeIn">
      <Image
        src="/logo_black.svg"
        alt="logo"
        height={60}
        width={60}
        className="object-contain opacity-90"
      />

      <div className="w-48">
        <Progress value={progress} className="h-2 rounded-full" />
      </div>
    </div>
  );
}
