"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Virtual Accounts",
    description: "Hold local currency in 15 markets without a local entity",
    icon: "/fit_screen.svg",
  },
  {
    title: "Real-Time Payouts",
    description: "Instant settlement in 17 markets via local rails",
    icon: "/bolt.svg",
  },
  {
    title: "Stablecoin Rails",
    description: "USDC/USDT on and off-ramp into 72 countries",
    icon: "/currency_exchange.svg",
  },
  {
    title: "KYC / KYB",
    description: "Built-in compliance for individuals and businesses",
    icon: "/cloud_lock.svg",
  },
];

const FeatureV4 = () => {
  const viewport = { once: true, amount: 0.2 };

  return (
    <div className="mx-auto w-[90%] md:w-[80%] py-10">
      <motion.div
        className="
          w-full bg-[#2F2E31] rounded-[40px] mx-auto overflow-hidden
          flex flex-col lg:flex-row
          p-6 md:p-12 lg:px-16 py-12
          gap-24
        "
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={viewport}
      >
        {/* Left Side Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-between gap-10">
          <div className="flex items-center justify-between">
          <motion.span
            className="text-[14px] md:text-[16px] lg:text-[18px] font-normal tracking-tight !text-white uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={viewport}
          >
            DashX is going global
          </motion.span>
          </div>

          <div className="flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={viewport}
            >
             <h2 className="text-[24px] md:text-3xl lg:text-4xl xl:text-[40px]
              font-redaction font-normal text-white
              tracking-tight !leading-tight">
                Powering the world&apos;s payment infrastructure
              </h2>
            </motion.div>

            <motion.p
              className="text-[14px] md:text-[16px] lg:text-[19px] text-white/50 font-[400] tracking-tight max-w-[400px] leading-snug pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              viewport={viewport}
            >
              Bank tooling for Neobanks, Payroll, Remittance &amp; B2B Companies
            </motion.p>

            <motion.button
            className="bg-black text-white px-4 py-3 mt-4 rounded-full text-sm font-semibold hover:bg-black/80 transition-all w-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
            viewport={viewport}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Coming Soon
          </motion.button>

          </div>

          
        </div>

        {/* Right Side – 2×2 Card Grid */}
        <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="!bg-black rounded-[24px] p-6  flex flex-col justify-between gap-8 min-h-[270px]"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={viewport}
              whileHover={{
                y: -4,
                backgroundColor: "#222224",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {/* Icon */}
              <motion.div
                className="w-12 h-12 bg-[#2A2A2D] rounded-2xl flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                viewport={viewport}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  height={20}
                  width={20}
                  className="object-contain invert opacity-70"
                />
              </motion.div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <motion.h3
                  className="text-[18px] md:text-[20px] font-normal text-white tracking-normal"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.25 + index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  viewport={viewport}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  className="text-white/60 text-[13px] md:text-[14px] font-[400] leading-snug"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  viewport={viewport}
                >
                  {card.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureV4;