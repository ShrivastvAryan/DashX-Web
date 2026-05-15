"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type TiltCardProps = React.HTMLAttributes<HTMLDivElement> & {
  tiltMaxDeg?: number;
  scale?: number;
  glare?: boolean;
};

export function TiltCard({
  tiltMaxDeg = 10,
  scale = 1.03,
  glare = true,
  className,
  children,
  onPointerEnter,
  onPointerLeave,
  onPointerMove,
  onPointerDown,
  onPointerUp,
  onPointerCancel,
  ...props
}: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const rafId = React.useRef<number | null>(null);
  const isActive = React.useRef(false);
  const isDisabled = React.useRef(false);

  React.useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    isDisabled.current = Boolean(prefersReducedMotion);
  }, []);

  const setVars = React.useCallback(
    (rx: number, ry: number, mxPct: number, myPct: number) => {
      const node = ref.current;
      if (!node) return;

      node.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
      node.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
      node.style.setProperty("--mx", `${mxPct.toFixed(2)}%`);
      node.style.setProperty("--my", `${myPct.toFixed(2)}%`);
      node.style.setProperty("--scale", `${scale}`);
      node.style.setProperty("--glare", glare && isActive.current ? "1" : "0");
    },
    [glare, scale]
  );

  const reset = React.useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ry", "0deg");
    node.style.setProperty("--mx", "50%");
    node.style.setProperty("--my", "50%");
    node.style.setProperty("--scale", "1");
    node.style.setProperty("--glare", "0");
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    onPointerMove?.(e);
    if (isDisabled.current) return;
    if (e.pointerType === "touch") return;
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const clampedX = Math.min(1, Math.max(0, px));
    const clampedY = Math.min(1, Math.max(0, py));

    const ry = (clampedX - 0.5) * tiltMaxDeg * 2;
    const rx = (0.5 - clampedY) * tiltMaxDeg * 2;

    const mxPct = clampedX * 100;
    const myPct = clampedY * 100;

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      setVars(rx, ry, mxPct, myPct);
    });
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    onPointerEnter?.(e);
    if (isDisabled.current) return;
    if (e.pointerType === "touch") return;
    isActive.current = true;
    setVars(0, 0, 50, 50);
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    onPointerLeave?.(e);
    if (isDisabled.current) return;
    if (e.pointerType === "touch") return;
    isActive.current = false;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = null;
    reset();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    onPointerDown?.(e);
    if (isDisabled.current) return;
    if (!ref.current) return;

    if (e.pointerType !== "touch") return;
    isActive.current = true;

    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const clampedX = Math.min(1, Math.max(0, px));
    const clampedY = Math.min(1, Math.max(0, py));

    const mobileTilt = Math.min(tiltMaxDeg, 10) * 0.35;
    const ry = (clampedX - 0.5) * mobileTilt * 2;
    const rx = (0.5 - clampedY) * mobileTilt * 2;

    setVars(rx, ry, clampedX * 100, clampedY * 100);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    onPointerUp?.(e);
    if (isDisabled.current) return;
    if (e.pointerType !== "touch") return;
    isActive.current = false;
    reset();
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    onPointerCancel?.(e);
    if (isDisabled.current) return;
    if (e.pointerType !== "touch") return;
    isActive.current = false;
    reset();
  };

  React.useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("tilt-card relative", className)}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      style={{ touchAction: "pan-y", ...props.style }}
      {...props}
    >
      {children}
    </div>
  );
}
