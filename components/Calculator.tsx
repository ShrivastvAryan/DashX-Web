"use client";

import Image from "next/image";
import React, { useState } from "react";
import Slider from "./Reactbit/Slider";

const Calculator = () => {
  // LIVE RATE (you can replace this with a real API later)
  const DASHX_RATE = 92.78;  

  const [usdcValue, setUsdcValue] = useState(100); // slider value

  const handleValueChange = (value: number) => {
    setUsdcValue(value);
  };

  const features = [
    { icon: "/calc1.svg", label: "FIU Compliant" },
    { icon: "/bolt.svg", label: "2-Minutes Settlement*" },
    { icon: "/receipt_long.svg", label: "Professional Invoicing" },
    { icon: "/cloud_lock.svg", label: "Bank-Grade Security" },
  ];

  return (
    <div className="px-2 md:px-0">
    <div
      className="w-full h-fit flex flex-col rounded-3xl gap-4 p-4"
         style={{
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            WebkitBackdropFilter: 'blur(12px)',
            backdropFilter: 'blur(12px)',
          }}
    >
        {/* HEADER — macOS-style dots */}
        <div
          className="rounded-t-2xl px-4 flex items-center gap-3"
         
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-black/60 lg:bg-white/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-black/60 lg:bg-white/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-black/60 lg:bg-white/60" />
          </div>
          <p className="font-semibold text-14 md:text-16 text-black lg:text-white ml-1">Calculate your savings</p>
        </div>

        <div className="bg-white/80 rounded-2xl">

        <div className=" h-auto ">
          {/* SLIDER */}
          <div className="w-[95%] mt-3 mx-auto rounded-2xl font-semibold flex items-center justify-center py-3">
            <Slider
              initialValue={100}
              minValue={0}
              maxValue={1000}
              onChange={handleValueChange}
            />
          </div>

          <div className="w-full px-4">
            {/* DASHX RATE BOX */}
            <div
              className="mx-auto rounded-2xl py-3 px-4"
              style={{
                background: 'rgba(65, 102, 251, 0.06)',
                border: '1.5px solid rgba(65, 102, 251, 0.35)',
                boxShadow: '0 2px 12px rgba(65, 102, 251, 0.06)',
              }}
            >
              <p className="font-semibold text-12 md:text-14 flex items-center gap-1">
                <span className="relative w-10 h-5">
                  <Image
                    src="/logo_black.svg"
                    alt="DashX"
                    fill
                    className="absolute object-contain"
                  />
                </span>

                <span className="text-12">Rate</span>
               

                <span className="text-gray-500 font-normal text-[9px] md:text-12">
                  (After 1% TDS)
                </span>
              </p>
              <p className="text-gray-500  text-[10px] pt-1">
                (Live from DashX)
              </p>
              <p className="text-[#1a1a2e] font-semibold text-[22px] md:text-4xl pt-2 md:pt-3">
                ₹{DASHX_RATE.toFixed(2)}
                <span className="text-gray-500 font-medium text-14 md:text-base ml-1">per USDC</span>
              </p>
            </div>
          </div>
        </div>

        {/* TWO SMALL BOXES */}
        <div className="p-4">
          <div className="w-full flex flex-col justify-between sm:flex-row gap-3">
            {/* Market rate */}
            <div
              className="w-full sm:w-1/2 rounded-2xl py-3 px-4 relative"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(200, 210, 240, 0.5)',
                boxShadow: '0 2px 10px rgba(100, 120, 200, 0.06)',
              }}
            >
              <p className="font-semibold text-12 text-[#2a2a3a]">Current Market Rate</p>
              <p className="text-gray-400 font-medium text-[10px] pt-0.5">(Live from Google Finance)</p>
              <p className="text-[#1a1a2e] font-semibold text-[20px] md:text-2xl pt-3 md:pt-4">
                ₹88.71
                <span className="text-gray-500 font-medium text-12 md:text-13 ml-1">per USD</span>
              </p>
            </div>

            {/* CopperX rate */}
           <div
  className="w-full sm:w-1/2 flex flex-col justify-between rounded-2xl py-3 px-4"
  style={{
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(200, 210, 240, 0.5)',
    boxShadow: '0 2px 10px rgba(100, 120, 200, 0.06)',
  }}
>
  <p className="font-semibold text-12 text-[#2a2a3a]">
    CopperX Rate
  </p>

  <p className="text-gray-400 font-medium text-[10px] pt-0.5">
    (Live from CopperX)
  </p>

  <p className="text-[#1a1a2e] font-semibold text-[20px] md:text-2xl pt-3 md:pt-4">
    ₹88.71
    <span className="text-gray-500 font-medium text-12 md:text-13 ml-1">
      per USD
    </span>
  </p>
</div>
          </div>
        </div>
        </div>
      

      {/* FEATURE GRID — frosted glass */}
      <div
        className="rounded-2xl p-3 bg-white/80"
      >
        <div className="grid grid-cols-2 gap-y-4 mx-auto">
          {features.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <Image src={item.icon} alt="" width={12} height={12} />
              <p className="text-xs font-medium text-[#2a2a3a]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
    </div>
    
  );
};

export default Calculator;
