"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';


const countries = [
  { flag: 'US', label: 'USD',img: "https://flagsapi.com/US/flat/64.png" },
  { flag: 'RU', label: 'Coming Soon',img: "https://flagsapi.com/RU/flat/64.png" },
  { flag: 'GB', label: 'Coming Soon', img: "https://flagsapi.com/GB/flat/64.png"  },
  { flag: 'IN', label: 'INR', img: "https://flagsapi.com/IN/flat/64.png" },
  { flag: 'AE', label: 'Coming Soon' ,img: "https://flagsapi.com/AE/flat/64.png"},

];

const viewport = { once: true, amount: 0.2 };

const Framework = () => {
  return (
    <div className='mx-auto  relative'>
    <div className='py-6 md:py-12 max-w-[350px] md:max-w-[600px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto'>
    <section className="rounded-3xl mx-auto bg-[#EDEBE6] py-12 overflow-hidden ">
      <div className="mx-auto px-6 md:px-10 lg:px-16">
        {/* Badge */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={viewport}
        >
          <span className="text-[13px] md:text-[18px] font-sans font-semibold tracking-tight text-[#2F2E31] uppercase">
            Virtual Accounts Available In
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-center text-[28px] md:text-[44px] lg:text-[52px] font-redaction font-[400] leading-[1.1] tracking-tighter text-[#1a1a1a] max-w-[700px] mx-auto mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          viewport={viewport}
        >
          Receive payments like a local entity, anywhere
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center text-[15px] md:text-[17px] tracking-tight font-sans font-[500] text-[#949494] max-w-[480px] mx-auto mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          viewport={viewport}
        >
          Get a Virtual IBAN number in your client&apos;s country. No SWIFT. No delays. No surprise fees.
        </motion.p>
      </div>

      {/* Country Carousel */}
      <motion.div
        className="w-full relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        viewport={viewport}
      >
        {/* Left fade overlay */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #EDEBE6 0%, transparent 100%)',
          }}
        />
        {/* Right fade overlay */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, #EDEBE6 0%, transparent 100%)',
          }}
        />

        <div className="w-full overflow-hidden">
  <Swiper
  modules={[Autoplay]}
  slidesPerView="auto"
  spaceBetween={16}
  loop={true}
  speed={4000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  allowTouchMove={false}
  className="country-swiper !overflow-hidden max-w-sm md:max-w-full"
>
    {[...countries, ...countries, ...countries].map((country, index) => (
      <SwiperSlide key={index} className="!w-fit !flex !items-center !justify-center">
        <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white hover:bg-white/50 cursor-pointer transition-all duration-200 select-none">
          <span className="text-[18px] leading-none">
            <Image
              src={country.img}
              alt={country.flag}
              width={20}
              height={20}
            />
          </span>
          <span className="text-[14px] font-sans font-medium text-[#2F2E31] whitespace-nowrap">
            {country.label}
          </span>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
      </motion.div>
    </section>
  
    </div>

     <motion.div
           className="hidden md:flex absolute top-96 left-0 w-full justify-center gap-4 py-8 mt-32 opacity-75"
           initial={{ opacity: 0, scaleX: 0.6 }}
           whileInView={{ opacity: 0.75, scaleX: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={viewport}
         >
           {[...Array(32)].map((_, i) => (
             <div key={i} className="h-[2px] w-6 bg-[#2D2D2D]/50" />
           ))}
         </motion.div>
    </div>
  );
};

export default Framework;