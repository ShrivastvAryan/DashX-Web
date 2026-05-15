import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const viewport = { once: true, amount: 0.2 };

const UpperFooter = () => {
  return (
     <div className='w-full pb-12 flex flex-col gap-10'>
       <motion.div
         className="w-[90%] md:w-[90%] mx-auto relative overflow-hidden flex shadow-lg bg-[#FBEDB7] h-auto md:min-h-[600px] rounded-3xl gap-5 p-10"
         initial={{ opacity: 0, y: 60 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
         viewport={viewport}
       >

  {/* Background Pattern Overlay */}
  <Image
    src="/overlay.png"
    alt="overlay-footer"
    fill
    className="object-cover opacity-100 mix-blend-soft-light pointer-events-none"
  />

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center w-full gap-5">
    <motion.p
      className='text-[38px] md:text-[60px] xl:text-[72px] 2xl:text-[84px] font-[400] leading-tight text-black font-redaction w-full lg:w-2/3 tracking-tighter text-center'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      viewport={viewport}
    >
      Let&apos;s get your crypto payments flowing.
    </motion.p>

    <motion.p
      className="text-[18px] md:text-[24px] lg:text-[20px] 2xl:text-[22px] font-[400] w-full lg:w-[40%] text-center font-sans text-[#A48300]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
      viewport={viewport}
    >
      Whether you want to integrate today or just explore what&apos;s possible, we&apos;re here.
    </motion.p>

    <motion.div
      className="flex flex-row gap-4 justify-center mt-5 md:mt-10 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      viewport={viewport}
    >
      <motion.button
        className="bg-[#F6C400] text-white px-5 py-3 rounded-full font-bold text-sm md:text-lg shadow-sm transition-transform active:scale-95"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Learn More
      </motion.button>

      <motion.button
        className="bg-white text-[#F6C400] px-5 py-3 rounded-full font-bold text-sm md:text-lg shadow-sm transition-transform active:scale-95"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Book a call
      </motion.button>
    </motion.div>
  </div>

</motion.div>
    </div>
  )
}

export default UpperFooter