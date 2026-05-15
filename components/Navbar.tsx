"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { motion } from "framer-motion";
import { useHomepageContext } from "@/store/homepageStore";

interface NavbarProps {
  onProductClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  const { view } = useHomepageContext();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Product", href: "https://gateway.dashx.xyz" },
    { label: "Documentation", href: "/documentation" },
    { label: "About", href: "/business" },
  ];

  const launchUrl ="https://gateway.dashx.xyz";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center">
      {/* Floating pill container */}
      <div
        className={cn(
          "w-full",
          "flex items-center justify-between",
          "px-4 py-3",
          "bg-white/40 backdrop-blur-2xl",
          "border border-white/50",
          "shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
        )}
      >
        {/* ── Logo ── */}
        <Link
          href="/"
        >
          <Image
            src="/logo_black.svg"
            alt="Logo"
            width={200}
            height={200}
            className="w-20 h-10 object-contain"
          />
        </Link>

        {/* ── Desktop Center Nav ── */}
        <div className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href={item.href}
                target="_blank"
                className={cn(
                  "px-4 py-2 rounded-xl",
                  "text-[17px] font-[450] font-sans tracking-tight",
                  "text-black hover:text-[#4166FB]",
                  "transition-colors duration-200"
                )}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Right: Signup + Mobile menu ── */}
        <div className="flex items-center gap-2">
          {/* Signup button */}
          <Link href={launchUrl} target="_blank">
            <button
              className={cn(
                "group inline-flex items-center justify-center gap-1.5",
                "rounded-3xl px-5 py-2 leading-none",
                "text-[14px] font-semibold font-sans tracking-tight text-white",
                "bg-[#4166FB] hover:bg-[#3358e0]",
                "transition-all duration-200 hidden lg:block",
                "hover:scale-[1.03] active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4166FB]/50"
              )}
            >
              Signup
            </button>
          </Link>

          {/* Mobile menu trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "md:hidden flex items-center justify-center",
                  "w-9 h-9 rounded-xl",
                  "bg-[#4166FB]/10 hover:bg-[#4166FB]/20 text-[#4166FB]",
                  "transition-all duration-200"
                )}
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            {/* Mobile Drawer */}
            <SheetContent
              side="right"
              className="w-[300px] bg-white border-l border-[#e5e7eb] p-0"
            >
              {/* Header */}
              <SheetHeader className="px-6 pt-6 pb-4 border-b border-[#f0f0f5]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/logo_black.svg"
                      alt="Logo"
                      width={80}
                      height={40}
                      className="w-16 h-8 object-contain"
                    />
                  </div>
                  <SheetClose asChild>
                    <button className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-all duration-200">
                      <X className="h-4 w-4" />
                    </button>
                  </SheetClose>
                </div>
              </SheetHeader>

              {/* Nav Links */}
              <div className="flex flex-col gap-1 px-4 pt-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block w-full px-4 py-3.5 rounded-xl",
                        "text-[15px] font-medium font-sans tracking-tight",
                        "text-gray-700 hover:text-[#4166FB] hover:bg-[#4166FB]/[0.06]",
                        "transition-colors duration-200"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Divider + Signup */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="pt-4 mt-2 border-t border-[#e5e7eb]"
                >
                  <Link href={launchUrl} target="_blank" onClick={() => setIsOpen(false)}>
                    <button className="w-full py-3 rounded-xl bg-[#4166FB] hover:bg-[#3358e0] text-white text-[14px] font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#4166FB]/25">
                      Signup
                    </button>
                  </Link>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
