"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Compliance = () => {
  const viewport = { once: true, amount: 0.2 };

  return (
    <div className='w-full py-10'>
      <motion.div
        className='w-[90%] md:w-[80%] mx-auto flex flex-col lg:flex-row items-stretch justify-between shadow-lg bg-[#D2F2DB] md:p-0 h-auto rounded-3xl md:min-h-[400px] lg:min-h-[600px] gap-5 overflow-hidden'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={viewport}
      >

        <div className='w-full lg:w-[60%] lg:h-auto flex md:!p-0 relative justify-end lg:order-2 self-stretch'>
        <motion.div
          className=''
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
          viewport={viewport}
        >
          <Image src='/Compilance-group.svg' alt='compilance-illustration' height={800} width={700} className='object-fill mix-blend-multiply'/>
          </motion.div>
        </div>
          

        <div className='w-full lg:w-[40%] flex flex-col justify-between lg:order-1 p-6 md:p-10'>
          <div>
            <motion.div
              className='font-sans hidden lg:block text-lg lg:text-2xl  font-semibold tracking-tighter mb-4 md:mb-0'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={viewport}
            >
              COMPLIANCE
            </motion.div>
          </div>

          <div className='font-sans'>
            <motion.h2
              className='text-[24px] md:!text-3xl lg:!text-4xl font-redaction font-normal w-full xl:!text-[44px] 2xl:text-5xl text-black tracking-tighter leading-tight'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              viewport={viewport}
            >
              Compliance Built-In
            </motion.h2>

            <motion.p
              className='text-[12px] md:!text-[20px] tracking-tight leading-snug font-sans w-full 2xl:max-w-[90%] 2xl:py-6 xl:text-[18px] 2xl:text-[20px] font-[500] py-2 pb-3 md:py-4 xl:pb-6 text-[#21A948]'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
              viewport={viewport}
            >
              Automated KYC and TDS handling. RBI-approved, so you&apos;re always audit-ready.
            </motion.p>

            <motion.button
              className='bg-[#30D85F] rounded-full px-3 py-2 lg:px-6 lg:py-3 text-xs lg:text-base font-medium text-white mt-2 hover:opacity-90 transition-opacity'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              viewport={viewport}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default Compliance