"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const feedbacks = [
  {
    category: "FREELANCER",
    text: "Getting paid by crypto clients used to be a hassle. DashX handles compliance so I can focus on work. Payments come through every time.",
    author: "Karan Pargal",
    role: "Independent Developer",
  },
  {
    category: "STARTUP",
    text: "DashX removed every payment friction we had. Our global contractors are paid on time, every time. It's the backbone of our financial ops.",
    author: "Priya Mehta",
    role: "CTO, BuildFast",
  },
  {
    category: "AGENCY",
    text: "Managing international payroll used to take days. With DashX, it's done in minutes. The compliance automation alone is worth it.",
    author: "James Okafor",
    role: "Founder, Pixel Wave",
  },
  {
    category: "ENTERPRISE",
    text: "We process thousands of transactions weekly. DashX scales effortlessly and gives us the audit trail our finance team demands.",
    author: "Sara Lin",
    role: "Head of Finance, NovaCorp",
  },
  {
    category: "CONSULTANT",
    text: "Crypto invoices used to be a nightmare. DashX converts, complies, and deposits — I just work and get paid. Simple as that.",
    author: "Ravi Shankar",
    role: "Web3 Strategy Consultant",
  },
];

const mod = (n: number, m: number) => ((n % m) + m) % m;

const Carousel = () => {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const dragStart = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = feedbacks.length;

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const startAuto = useCallback(() => {
    intervalRef.current = setInterval(
      () => setActive((p) => mod(p + 1, total)),
      4000
    );
  }, [total]);

  useEffect(() => {
    startAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAuto]);

  const resetAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAuto();
  };

  const go = (dir: 1 | -1) => {
    setActive((p) => mod(p + dir, total));
    resetAuto();
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
    setDragging(true);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current !== null) {
      const delta = e.clientX - dragStart.current;
      if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
    }
    dragStart.current = null;
    setDragging(false);
  };

  const getOffset = (idx: number) => {
    const raw = idx - active;
    const half = Math.floor(total / 2);
    if (raw > half) return raw - total;
    if (raw < -half) return raw + total;
    return raw;
  };

  const cardStyle = (offset: number): React.CSSProperties => {
    const abs = Math.abs(offset);

    // On mobile: only show center card
    if (isMobile && abs > 1) return { display: "none" };
    // On tablet: only show center + immediate neighbours
    if (isTablet && abs > 1) return { display: "none" };
    // On desktop: show up to 2 away
    if (!isMobile && !isTablet && abs > 2) return { display: "none" };

    const scales = isMobile
      ? [1, 0.88, 0.76]
      : isTablet
      ? [1, 0.86, 0.72]
      : [1, 0.84, 0.70];

    const translateXs = isMobile
  ? [0, offset < 0 ? -108 : 108, 0]
  : isTablet
  ? [0, offset < 0 ? -62 : 62, 0]
  : [0, offset < 0 ? -56 : 56, offset < 0 ? -104 : 104];

    const zIndexes = [30, 20, 10];
    const opacities = isMobile ? [1, 0.7, 0] : [1, 0.85, 0.6]; 

    return {
      position: "absolute",
      width: isMobile
        ?"85vw" 
        : isTablet
        ? "clamp(300px, 70vw, 580px)"
        : "clamp(400px, 65vw, 850px)",
      transform: `translateX(calc(${translateXs[abs]}% + 0px)) scale(${scales[abs]})`,
      zIndex: zIndexes[abs],
      opacity: opacities[abs],
      transition: dragging
        ? "none"
        : "transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.55s ease, filter 0.55s ease",
      filter: abs === 0 ? "none" : `blur(${abs * 0.8}px)`,
      pointerEvents: abs === 0 ? "auto" : "none",
      cursor: abs === 0 ? "default" : "pointer",
    };
  };

  const viewport = { once: true, amount: 0.2 };

  return (
    <section className="w-full py-12  relative overflow-hidden">
      {/* Top dashes — hidden on mobile */}
      <motion.div
        className="hidden md:flex absolute top-0 left-0 w-full justify-center gap-4 py-8 mt-32 opacity-75"
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 0.75, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={viewport}
      >
        {[...Array(32)].map((_, i) => (
          <div key={i} className="h-[2px] w-6 bg-[#2D2D2D]/50" />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 py-8 md:py-32">
        {/* Heading */}
        <div className="text-center mb-8 max-w-4xl mx-auto mt-4 md:mt-16">
          <motion.h2
            className="text-3xl md:text-[45px] lg:text-[56px] font-redaction10 text-[#2F2E31] mb-3 md:mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={viewport}
          >
            Read our latest articles
          </motion.h2>
          <motion.p
            className="text-[14px] md:text-[18px] lg:text-[20px] text-[#2F2E31]/60 font-[500] font-sans max-w-[800px] mx-auto tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            viewport={viewport}
          >
            Explore our standout features designed to deliver exceptional
            performance and value, distinguishing us from the competition.
          </motion.p>
        </div>

       <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={viewport}
       >
        <div
            className="
              relative flex items-center justify-center
              mx-auto w-[90%] h-[400px]
              mt-12 mb-2 md:mt-20 lg:mt-0 md:mb-0
              overflow-hidden rounded-[12px]
              
              bg-black/10
              backdrop-blur-[2px]

              shadow-[inset_0_0_80px_rgba(255,255,255,0.9)]
            "
          >
            {/* Blur blobs */}
            <div className="absolute left-[15%] top-[10%] h-40 w-40 rounded-full bg-black/10 blur-3xl" />
            <div className="absolute right-[20%] bottom-[10%] h-52 w-52 rounded-full bg-black/10 blur-3xl" />

            {/* Center button */}
            <button
              className="
                z-10 px-5 py-2
                rounded-full
                bg-black text-white
                text-sm font-medium
                shadow-lg
              "
            >
              Coming Soon
            </button>
          </div>
          </motion.div>

        {/* Carousel track */}
        {/* <div
          className="relative flex items-center bg-red-500 justify-center select-none mt-36 mb-16 md:mt-20 lg:mt-0 md:mb-0"
          style={{
            height: isMobile
              ? "auto"
              : isTablet
              ? "clamp(300px, 45vw, 420px)"
              : "clamp(350px, 50vw, 450px)",
            minHeight: isMobile ? "unset" : undefined,
            padding: isMobile ? "0" : undefined,
          }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {feedbacks.map((item, idx) => {
            const offset = getOffset(idx);
            const abs = Math.abs(offset);
            const isCenter = abs === 0;

            return (
              <div
                key={idx}
                style={cardStyle(offset)}
                onClick={() => {
                  if (!isCenter) {
                    setActive(idx);
                    resetAuto();
                  }
                }}
              >
                {!isCenter && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "24px",
                      backdropFilter: "blur(6px)",
                      WebkitBackdropFilter: "blur(6px)",
                      background: "rgba(248,247,244,0.55)",
                      zIndex: 2,
                      pointerEvents: "none",
                    }}
                  />
                )}

                <div
                  style={{
                    borderRadius: "20px",
                    background: isCenter ? "#ffffff" : "rgba(255,255,255,0.80)",
                    boxShadow: isCenter
                      ? "0 20px 48px -8px rgba(0,0,0,0.12), 0 4px 12px -4px rgba(0,0,0,0.06)"
                      : "0 8px 24px -4px rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    padding: isMobile ? "24px 20px" : "clamp(20px,3vw,36px)",
                    height: isMobile ? "auto" : "100%",
                    minHeight: isMobile ? "unset" : "420px",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "20px" : "clamp(16px,2.5vw,32px)",
                    position: "relative",
                    overflow: "hidden",
                    transition: "box-shadow 0.4s ease",
                    alignItems: isMobile ? "flex-start" : "stretch",
                  }}
                >
                  <div
                    style={{
                      flex: isMobile ? "1 1 100%" : "1 1 60%",
                      display: "flex",
                      flexDirection: "column",
                      minWidth: 0,
                    }}
                  >
                    <p
                      style={{
                        fontSize: isMobile ? "18px" : "clamp(18px, 1.4vw, 22px)",
                        fontFamily: "var(--font-redaction), serif",
                        color: "#2F2E31",
                        lineHeight: 1.45,
                        opacity: isCenter ? 0.9 : 0.65,
                        margin: "0 0 16px 0",
                      }}
                    >
                      {item.text}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#949494",
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {item.author}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#b0b0b0",
                        margin: "4px 0 0",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.role}
                    </p>
                  </div>

                  {!isMobile && (
                    <div
                      style={{
                        width: "clamp(120px, 16vw, 200px)",   
                        flex: "0 0 40%",   
                        borderRadius: "12px",
                        background: isCenter
                          ? "linear-gradient(160deg, #e8ecff 0%, #d0d8ff 100%)"
                          : "rgba(0,0,0,0.07)",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      {isCenter && (
                        <>
                          <div
                            style={{
                              position: "absolute",
                              bottom: "-20px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "90px",
                              height: "90px",
                              borderRadius: "50%",
                              background: "rgba(65,102,251,0.18)",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "16px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              background: "rgba(65,102,251,0.25)",
                            }}
                          />
                        </>
                      )}
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        style={{ position: "relative", zIndex: 1, opacity: isCenter ? 0.35 : 0.2 }}
                      >
                        <circle cx="20" cy="14" r="8" fill={isCenter ? "#4166FB" : "#2F2E31"} />
                        <path
                          d="M4 38c0-8.8 7.2-16 16-16s16 7.2 16 16"
                          stroke={isCenter ? "#4166FB" : "#2F2E31"}
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div> */}

        {/* Dots — always visible */}
        {/* <div className="flex items-center justify-center gap-2 mt-8">
          {feedbacks.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); resetAuto(); }}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: active === i ? "28px" : "8px",
                height: "8px",
                borderRadius: "99px",
                background: active === i ? "#4166FB" : "#2F2E31",
                opacity: active === i ? 1 : 0.2,
                border: "none",
                cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                padding: 0,
              }}
            />
          ))}
        </div> */}
      </div>

       {/* <motion.div
        className="hidden md:flex absolute bottom-10 left-0 w-full justify-center gap-4 py-8 mt-32 opacity-75"
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 0.75, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={viewport}
      >
        {[...Array(32)].map((_, i) => (
          <div key={i} className="h-[2px] w-6 bg-[#2D2D2D]" />
        ))}
      </motion.div> */}

    </section>
  );
};

export default Carousel;