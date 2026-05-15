"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RotatingText from './Reactbit/RotatingText';

const HeroNew = () => {
  return (
   <>
   <div className='lg:min-h-[900px] h-auto flex flex-col relative w-full shadow-xl rounded-3xl lg:pb-[300px] xl:pb-[100px]'>
     <Image src='/hero-bg.svg' alt='bg' fill className="object-cover opacity-100 pointer-events-none z-0"/>
     <Image src='/hero-overlay.png' alt="overlay" fill className="object-cover opacity-100 mix-blend-difference pointer-events-none z-0"/>

    <div className='mt-36 mb-20 relative z-10 '>
     
      <motion.div
        className='w-full flex items-center justify-center'
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        
     <h1 className=' md:text-[22px] text-[16px] font-[400] bg-[#E3E3E3] py-1 border-2 border-gray-300 rounded-[40px] px-6 font-sans mx-auto tracking-tight leading-relaxed shadow-[0_0_0_1px_rgba(0,0,0,0.16),0_2px_4px_0_rgba(0,0,0,0.10)]'>
  Powered by stablecoins
</h1>
     </motion.div>

     <div className='w-full flex flex-col items-center justify-center mt-8 z-20'>
        <motion.p
          className='lg:text-[60px] md:text-[50px] text-[40px] font-[500] text-center md:max-w-[50%] max-w-[100%] font-redaction10 mx-auto tracking-tight md:leading-[62px] leading-10'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            Cross-border payments that settle like local ones
        </motion.p>

        <motion.p
          className='lg:text-[15px] md:text-[14px] text-[12px] font-[400]  text-secondary text-center mt-4 font-sans tracking-tight lg:max-w-[25%] md:max-w-[50%] max-w-[90%]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
        >

            Get paid in {" "}
            <span className="inline-flex items-center align-middle">
             <RotatingText
          texts={['USD', 'EUR', 'GBP']}
          mainClassName=" text-black overflow-hidden lg:text-[15px] md:text-[14px] text-[12px] font-[400]  text-secondary font-[400] text-center  text-secondary justify-center"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
          splitBy="characters"
          auto
          loop
        />. Settle in INR Instantly
        </span>
        </motion.p>
     </div>

     <motion.div
       className='flex items-center justify-center mt-8 md:mt-10 gap-3'
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
     >
        <motion.button 
        className="py-3 px-6 rounded-2xl text-white font-medium border-2 border-transparent"
        style={{
          backgroundImage: `linear-gradient(#4166FB, #4166FB), linear-gradient(to bottom, #B3BFF4, #5167CA)`,
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Sign Up
      </motion.button>

       <motion.button 
  className='py-3 px-6 rounded-2xl text-black text-[16px] font-[500] tracking-tight cursor-pointer border-2 border-transparent'
  style={{
    backgroundImage: 'linear-gradient(#E3E3E3, #E3E3E3), linear-gradient(to bottom, #FDFDFD, #F1F1F100)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
  }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
>
  Book a call
</motion.button>

     </motion.div>

   </div>
  
     <div className='hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] justify-center z-30 '>
          <Image src="/hero-main.png" alt="hero" width={1000} height={500} className='object-contain rounded-t-2xl'/>
    </div>
    
   </div>

   </>
  )
}

export default HeroNew