"use client";

import React from 'react'
import { motion } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"

const feedbacks = [
  {
    category: "DAOs",
    text: "DashX makes payments effortless. A highly compliant platform that helped us manage our payment flows with ease.",
    author: "Anshul Das",
    role: "General Partner, Surge DAO",
  },
  {
    category: "Travel",
    text: "We needed a way to accept crypto from international clients without compliance headaches. DashX made it simple and settlements are always on time.",
    author: "GlobeHunters Team",
    role: "Travel Agency",
  },
  {
    category: "Travel",
    text: "Handling payments from global customers is now easy. DashX helps us accept crypto and the INR payouts are super reliable.",
    author: "TravCart Team",
    role: "Travel Platform",
  },
  {
    category: "Freelancers",
    text: "Getting paid by crypto clients used to be a hassle. DashX handles compliance so I can focus on work. Payments come through every time.",
    author: "Karan Pargal",
    role: "Freelancer",
  },
  {
    category: "DeFi",
    text: "DashX makes payments easy while staying fully compliant. Their invoicing is smooth and helps me handle on-chain payments and INR transfers.",
    author: "Akira",
    role: "Founder @EndurFi & Troves",
  },
];

export const Feedback = () => {
  const viewport = { once: true, amount: 0.2 };

  return (
    <section className="w-full relative flex flex-col overflow-hidden py-12">
      
      <div className="flex-1 w-full mx-auto px-4 relative z-10 py-0 md:py-20 overflow-hidden">
        <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto px-2">
          <motion.span
            className="text-[14px] md:text-[18px] font-semibold tracking-tighter text-black mb-4 uppercase opacity-80 block font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={viewport}
          >
            TRUSTED BY CUSTOMERS
          </motion.span>
          <motion.h2
            className="text-2xl md:text-[50px] lg:text-[56px] font-redaction10 !tracking-tighter text-[#2F2E31] mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            viewport={viewport}
          >
            What our users are saying
          </motion.h2>
          <motion.p
            className="text-[14px] md:text-[18px] lg:text-[20px] tracking-tight text-[#949494] font-[500] font-sans max-w-[90%] md:max-w-[700px] mx-auto leading-snug"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            viewport={viewport}
          >
            Real feedback from businesses and individuals using DashX to move money faster, 
            simpler, and with full transparency.
          </motion.p>
        </div>

       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={viewport}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-[90%] overflow-hidden" //max-w-xs imp for mobile optimisation
          >
            <CarouselContent>
              {feedbacks.map((item, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 md:p-3 basis-[90%] sm:basis-1/2 lg:basis-1/2 xl:basis-1/3"
                >
                  <Card className="border-none shadow-none rounded-[24px] w-full bg-white h-[450px] md:h-[600px] flex flex-col justify-between p-6 md:p-12 transition-all hover:shadow-xl hover:shadow-black/5 group overflow-hidden">
                    <span className="text-[14px] md:text-[18px] font-bold tracking-tight text-black opacity-90 uppercase font-sans">
                      {item.category}
                    </span>
                    
                    <div className=" min-w-0">
                      <p className="text-[16px] md:text-[20px] lg:text-[24px] font-redaction10 text-[#2F2E31] tracking-tight leading-[1.25] opacity-90 line-clamp-6 break-words">
                        {item.text}
                      </p>
                      <p className="text-[14px] pt-3 2xl:text-[16px] text-black font-sans font-semibold tracking-tight">
                        {item.author}
                      </p>
                      <p className="text-[12px] 2xl:text-[14px]  text-black/40 font-sans font-semibold tracking-tight">
                        {item.role}
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>

    </section>
  )
}
