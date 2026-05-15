"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import UpperFooter from './UpperFooter';


interface FooterProps {
  scrollAreaRef?: React.RefObject<HTMLDivElement | null>;
}

const Footer = ({ scrollAreaRef }: FooterProps) => {
  const viewport = { once: true, amount: 0.2 };
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    if (scrollAreaRef?.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        scrollAreaRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const otherLinks = [
    { label: 'About', href: 'https://gateway.dashx.xyz/' },
    { label: 'Documentation', href: '/documentation' },
    { label: 'Contact', href: 'https://t.me/dashx_support' },
  ];

  const socialLinks = [
    { label: 'Twitter (x)', href: 'https://x.com/DashxHQ' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/dash-xh/' },
    { label: 'Telegram', href: 'https://t.me/dashx_support' },
  ];

  const legalLinks = [
    { label: 'Terms of service', href: '/terms-of-service' },
    { label: 'Privacy policy', href: '/privacy-policy' },
  ];

  return (
    <footer className="w-full">
      {/* Upper Footer */}
      <UpperFooter />

      {/* Main Footer Card */}
      <div className="w-full bg-gradient-to-t
      from-[#0022AA]
      via-[#d9def8]
      to-[#e4e6f4]/10 px-5 md:px-12 md:py-12 pt-16">
        <motion.div
          className="w-full max-w-[1400px] mx-auto bg-[#EDEBE6] rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={viewport}
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 p-8 md:p-12 lg:p-16">
            {/* Left Side - Headline + Email */}
            <div className="flex flex-col gap-8 lg:gap-12 flex-1">
              <motion.h2
                className="text-[24px] md:text-[42px] font-redaction font-[400] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] max-w-[520px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
                viewport={viewport}
              >
                Get updates on fun stuff you probably want to know about in your inbox.
              </motion.h2>

              <motion.div
                className="flex items-center gap-2 border-b border-[#8a8a8a] pb-3 max-w-[340px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                viewport={viewport}
              >
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent outline-none flex-1 text-[16px] text-[#1a1a1a] placeholder:text-[#8a8a8a] font-sans"
                />
                <motion.button
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#1a1a1a] text-xl transition-colors hover:text-theme-blue"
                  aria-label="Subscribe to newsletter"
                >
                  →
                </motion.button>
              </motion.div>
            </div>

            {/* Right Side - Links */}
            <motion.div
              className="flex gap-12 md:gap-16 lg:gap-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
              viewport={viewport}
            >
              {/* Others Column */}
              <div className="flex flex-col gap-3">
                <span className="text-[#64748B] text-[14px] font-sans font-medium mb-1">Others</span>
                {otherLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-black font-semibold text-[15px] font-sans hover:text-theme-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Socials Column */}
              <div className="flex flex-col gap-3">
                <span className="text-[#64748B] text-[14px] font-sans font-medium mb-1">Socials</span>
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a1a1a] text-[15px]  font-semibold font-sans hover:text-theme-blue transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* DashX Logo - Bottom Right */}
          <motion.div
            className="flex justify-end px-8 md:px-12 lg:px-16 pb-8 md:pb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            viewport={viewport}
          >
            <Image
              src="/logo_black.svg"
              alt="DashX Logo"
              width={120}
              height={40}
              className="opacity-90"
            />
          </motion.div>
        </motion.div>

         <div className="w-full pt-8 md:pt-16">
        <motion.div
          className="w-full max-w-[1400px] mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Left - Copyright & Legal Links */}
          <div className="flex flex-wrap items-center justify-between gap-x-3 md:gap-x-5 gap-y-2 text-[13px] text-white/80 font-sans">
            <span className="whitespace-nowrap">© DashX Payments Inc 2026</span>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right - Credit & Scroll to Top */}
          <div className="flex items-center gap-4 text-[13px] text-white/80 font-sans">
            <Link
              href="https://x.com/DashxHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap hover:text-white transition-colors duration-200"
            >
              @dashX
            </Link>
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 whitespace-nowrap hover:text-white transition-colors duration-200 cursor-pointer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Go all the way up
              <span className="text-[15px]">↑</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
      </div>
     
    </footer>
  );
}

export default Footer
