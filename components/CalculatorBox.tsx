"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Calculator from './Calculator';
import Image from 'next/image';

const CalculatorBox = () => {

    const cards=[
        {
            title:"Make your bank global",
            desc:"Get virtual bank accounts across X+ currencies so your growth won't stop."
        },
        {
            title:"Global payments, local INR settlement",
            desc:"Receive stablecoins from anywhere and settle in INR with automated FIRA and transparent rates."
        }
    ]

  // Shared viewport config
  const viewport = { once: true, amount: 0.2 };

  return (
    <div className='w-full py-10 flex flex-col gap-10'>

       {/* Intro text — fade up */}
       <motion.div
         className='flex items-center justify-center gap-3 py-8 md:py-16'
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         viewport={viewport}
       >
         <p className='lg:text-[32px] md:text-[22px] text-[18px] text-black font-[500] text-center md:mt-3 tracking-tighter md:max-w-[60%] max-w-[80%]'>
           We Bring Money to Your bank in INR From Anywhere in the World. Compliant, Fast and Automated FIRA for your CAs to Rely on
         </p>
       </motion.div>

       {/* Calculator hero card — slide up */}
       <motion.div
         className='w-[90%] md:w-[80%] mx-auto relative flex flex-col lg:flex-row shadow-lg bg-[#DCE4FA] lg:bg-gradient-to-r from-[#DCE4FA] via-[#DCE4FA] to-[#8DA5E4] h-auto rounded-3xl py-4 md:py-0 lg:min-h-[650px]'
         initial={{ opacity: 0, y: 60 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
         viewport={viewport}
       >
         {/* Mobile label */}
          {/* <motion.div
            className='font-sans md:hidden text-base md:text-2xl px-6 py-3 font-semibold tracking-tighter'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={viewport}
          >
            CALCULATOR
          </motion.div> */}

         {/* Image placeholder */}
      <div className='w-full lg:w-[50%] lg:order-2 md:relative'>
       <motion.div
  className="w-full h-full flex items-center justify-center"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
  viewport={viewport}
>
    
    {/* Background Image */}
    <Image
      src="/Calculator-bg.svg"
      alt="calculator bg"
      height={1200}
      width={1200}
      className="w-full h-full absolute right-24 xl:right-10 hidden xl:block rounded-r-2xl object-fill items-center"
    />

    {/* Calculator Content */}
    <div className=" md:max-w-full px-4 py-2 md:pt-6 lg:p-2">
      <Calculator />
    </div>

</motion.div>
</div>
         {/* Text Content Section */}
         <div className='w-full lg:w-[50%] flex flex-col justify-between lg:order-1 px-5 md:p-10'>
           <div>
              <motion.div
                className='font-sans hidden lg:block text-lg lg:text-2xl font-semibold tracking-tighter mb-4 md:mb-0'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={viewport}
              >
                CALCULATOR
              </motion.div>
           </div>

           <div className='font-sans p-4 py-8 md:p-0'>
              <motion.h2
                className='text-[24px] md:text-3xl md:mt-0 lg:text-4xl xl:text-[40px] 2xl:!text-[50px] font-redaction font-normal w-full text-black tracking-tighter leading-tight'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                viewport={viewport}
              >
                Know what you&apos;ll get, before you cash out
              </motion.h2>

              <motion.p
                className='text-[12px] md:text-base tracking-tighter font-sans w-full lg:w-[90%] font-[500] py-2 pb-3 md:py-4 xl:py-6 text-[#3D63C3]'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
                viewport={viewport}
              >
                No hidden fees, no confusing math. Just clear, real-time quotes that show 
                exactly how much lands in your hands when you off-ramp.
              </motion.p>

              <motion.button
                className='bg-[#4166FB] rounded-full px-3 py-2 lg:px-6 lg:py-3 text-xs lg:text-base font-medium text-white mt-2 hover:bg-[#3453d1] transition-colors'
                initial={{ opacity: 0, y: 30 }}
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

       {/* Bottom cards — staggered entrance + hover lift */}
        <motion.div
          className='md:w-[80%] w-[90%] mx-auto gap-5 lg:gap-10 grid grid-cols-1 md:grid-cols-2'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={viewport}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className='w-full bg-white border-4 flex flex-col gap-20 md:justify-between h-full md:min-h-[500px] lg:min-h-[600px] border-[#EBEBEB] rounded-3xl md:rounded-2xl p-6 md:p-8'
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={viewport}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
           >
             <motion.div
               className='font-sans text-base lg:text-xl font-semibold tracking-tighter'
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
               viewport={viewport}
             >
               KNOW THE DIFFERENCE
             </motion.div>

             <div className='flex flex-col gap-2'>
               <motion.div
                 className='font-redaction text-3xl lg:text-4xl font-normal tracking-tighter'
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                 viewport={viewport}
               >
                 {card.title}
               </motion.div>
               <motion.p
                 className='text-[13px] lg:text-base xl:text-[18px] 2xl:text-[20px] font-sans w-full font-[500] md:py-2 tracking-tighter text-[#949494]'
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                 viewport={viewport}
               >
                 {card.desc}
               </motion.p>
             </div>
           </motion.div>
         ))}
       </motion.div>
    </div>
  )
}

export default CalculatorBox