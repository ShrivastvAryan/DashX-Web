"use client";

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image';

const features = [
  {
    title: "Auto FIRC Generation",
    description: "Every settlement automatically triggers FIRC issuance from AD-1 Processing Bank. Fully compliant with RBI's LRS and FEMA requirements, without any paperwork on your end.",
    img: "/contract.svg"
  },
  {
    title: "Best-rate INR Conversion",
    description: "We convert your stablecoins at institutional FX rates sourced from Tier-1 liquidity providers. On average 80% cheaper than Swift Transfer.",
    img: "/currency_exchange.svg"
  },
  {
    title: "Tax-Ready Dashboard",
    description: "Every transaction, FX rate, and FIRC in one place. Export clean statements for your CA, with GST-ready breakdowns for service exports.",
    img:"/checkbook.svg"
  },
];

interface ScrollStackCardProps {
  feature: typeof features[number];
  index: number;
  totalCards: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}

const ScrollStackCard = ({ feature, index, totalCards, progress }: ScrollStackCardProps) => {
  // Each card occupies a segment of the scroll progress
  const cardStart = index / totalCards;
  const cardEnd = (index + 1) / totalCards;

  // Scale down as the NEXT card starts scrolling over this one
  const scale = useTransform(
    progress,
    [cardStart, cardEnd],
    [1, 1 - (totalCards - index) * 0.03]
  );

  // Cards that have been "passed" get a slight opacity reduction
  const opacity = useTransform(
    progress,
    [cardStart, cardEnd, Math.min(cardEnd + 0.1, 1)],
    [1, 1, index === totalCards - 1 ? 1 : 0.7]
  );

  return (
    <div
      className="sticky top-0 flex items-start pt-14 md:pt-16"
      style={{ 
        // Offset each card's sticky position slightly so they stack visually
        top: `${index * 30 + 20}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        className="bg-white rounded-[32px] border border-[#EBEBEB] p-6 md:p-10 shadow-sm flex flex-col gap-5 w-full origin-top"
        style={{ scale, opacity }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <div
          className="w-14 h-14 bg-[#EDEBE6] rounded-full relative flex items-center justify-center"
        >
          <Image src={feature.img} alt={feature.title} height={25} width={25} className="object-contain"/>
        </div>
        
        <div className="flex flex-col gap-2">
          <h3
            className="text-[20px] md:text-[26px] lg:text-[36px] font-redaction10 font-medium text-[#2F2E31]"
          >
            {feature.title}
          </h3>
          <p
            className="text-[#2F2E31]/60 text-[13px] md:text-[18px] lg:text-[20px] xl:text-[17px] font-[400] tracking-tight font-sans leading-tight"
          >
            {feature.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const FeatureV3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={sectionRef} className='py-10 max-w-[95%] mx-auto'>
      <div
        className="
          w-full bg-brand-new-secondary rounded-[40px] mx-auto flex flex-col lg:flex-row 
          p-6 md:p-16 lg:p-16 gap-6 lg:gap-16
        "
      >
        {/* Left Side Content - sticky on desktop so it stays while cards scroll */}
        <div className='w-full lg:w-1/2 flex flex-col items-center justify-center md:items-start md:justify-start lg:sticky lg:top-20 lg:self-start'>
          <motion.span
            className="md:text-[20px] text-[16px] font-semibold tracking-tighter text-black mb-8 uppercase opacity-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Trusted by Customers
          </motion.span>
          
          <motion.h2
            className='text-4xl md:text-5xl text-center md:text-start lg:text-[60px] font-redaction10 font-medium tracking-tight leading-10 md:leading-tighter text-[#2F2E31] mb-4'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Our all in one <span className="italic">solution</span> that sets us apart from the <span className="italic">competition</span>
          </motion.h2>
          
          <motion.p
            className='text-[16px] text-center md:text-start font-[500] md:text-[20px] text-[#949494] tracking-tighter max-w-[460px] mb-10 leading-snug'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.
          </motion.p>
          
          <motion.button
            className='bg-[#2F2E31] text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-all w-fit'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started
          </motion.button>
        </div>

        {/* Right Side Content (Scroll Stack Cards) */}
        <div className='w-full lg:w-1/2 relative' style={{ minHeight: `${features.length * 20}vh` }}>
          {features.map((feature, index) => (
            <ScrollStackCard
              key={index}
              feature={feature}
              index={index}
              totalCards={features.length}
              progress={scrollYProgress}
            />
          ))}
          {/* Spacer to give enough scroll room for the stacking effect */}
          <div className="h-[20vh]" />
        </div>
      </div>
    </div>
  )
}

export default FeatureV3