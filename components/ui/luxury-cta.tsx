"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";

type LuxuryCtaProps = {
  href: string;
  label: string;
  className?: string;
  target?: string;
  rel?: string;
};

export function LuxuryCta({ href, label, className, target, rel }: LuxuryCtaProps) {
  const ref = React.useRef<HTMLAnchorElement | null>(null);

  return (
    <Link href={href} target={target} rel={rel} legacyBehavior passHref>
      <motion.a
        ref={ref}
        whileHover={{ scale: 1.04, y: -1 }}
        whileTap={{ scale: 0.98, y: 0 }}
        className={cn(
          "inline-flex",
          className,
          "cta-lux btn-3d group",
          "rounded-[48px] bg-white text-brand font-semibold",
          "px-3 sm:px-4 py-3 sm:py-3.5",
          "inline-flex items-center gap-2 cursor-pointer select-none"
        )}
      >
        <span className="pointer-events-none relative inline-flex items-center">
          <span className="relative h-6 sm:h-7 overflow-hidden min-w-[160px] sm:min-w-[190px]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-sm sm:text-base leading-none"
              >
                {label}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>

        <span className="relative h-6 w-6 rounded-full bg-brand text-white grid place-items-center overflow-hidden">
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.55),transparent_55%)]" />
          <motion.span
            className="relative block"
            initial={false}
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </span>
      </motion.a>
    </Link>
  );
}
