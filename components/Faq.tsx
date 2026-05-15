"use client";

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import FAQSection from './FaqAccordion'

const Faq = () => {
  const viewport = { once: true, amount: 0.2 };

  return (
    <div className='pt-12 max-w-[95%] mx-auto'>
    <motion.div
      className="
        w-full bg-brand-new-secondary rounded-3xl mx-auto flex flex-col lg:flex-row 
        p-2 md:p-8 lg:px-16 lg:pt-12
      "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={viewport}
    >
      {/* LEFT */}
      <div className="w-full lg:w-1/2 h-full p-4 flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <motion.div
          className='flex items-center justify-center lg:justify-start'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={viewport}
        >
          <span className=" py-2.5 text-24 font-bold font-sans tracking-tight">
            FAQ
          </span>
        </motion.div>

        <motion.p
          className="text-24 md:text-[35px] lg:text-5xl tracking-tight font-redaction font-[400] pt-2 md:pt-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          viewport={viewport}
        >
          Got Questions? We&apos;ve got answers
        </motion.p>

        <motion.p
          className="text-secondary tracking-tighter pt-4 md:pt-6 text-14 md:text-[16px] font-[500] lg:text-xl w-full md:max-w-[90%] text-center font-sans lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          viewport={viewport}
        >
          From FIU compliance to payment links and off-ramps, we&apos;ll walk you through everything you need to know about using DashX.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
          viewport={viewport}
        >
          <motion.button
            className="
              group bg-[#2D2D2D] rounded-3xl text-white p-2 mt-6 font-semibold 
              inline-flex items-center gap-2 px-4
              transition-all duration-300 hover:shadow-md
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* RIGHT */}
      <motion.div
        className="w-full lg:w-1/2 h-full mt-3 md:mt-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        viewport={viewport}
      >
        <FAQSection />
      </motion.div>
    </motion.div>
    </div>
  )
}

export default Faq
