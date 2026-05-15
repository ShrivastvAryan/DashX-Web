"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export const InfiniteMovingCards = ({
  direction = "left",
  speed,
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const images = [
    "/google-cloud.svg",
    "/Bandit.svg",
    "/decent.svg",
    "/solana.svg",
    "/zora.svg",
    "/Allora.svg",
    "/Berachain.svg",
    "/circle.svg",
    "/Linea.svg",
    "/Monad.svg",
    "/Shardeum.svg",
    "/Sushi.svg",
    "/Diamante.svg",
  ];

  // Convert speed to marquee speed (higher number = faster)
  const getMarqueeSpeed = () => {
    switch (speed) {
      case "fast":
        return 100;
      case "normal":
        return 50;
      case "slow":
        return 25;
      default:
        return 50;
    }
  };

  return (
    <div
      className={cn(
        "relative z-20 max-w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <Marquee
        direction={direction}
        speed={getMarqueeSpeed()}
        pauseOnHover={pauseOnHover}
        className="py-2 sm:py-4"
        gradient={false}
        loop={0}
        delay={0}
        play={true}
        style={{ gap: '0px' }}
      >
        {images.map((image, idx) => (
          <div
            className="relative flex-shrink-0 flex items-center justify-center w-24 h-12 sm:w-32 sm:h-16 mx-4 sm:mx-8"
            key={idx}
          >
            <Image
              src={image}
              alt={`Partner logo ${idx + 1}`}
              width={128}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default InfiniteMovingCards;
