"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
const navItems = [
  { name: "Overview", href: "/documentation" },
  { name: "Payout", href: "/documentation/payout" },
  { name: "On/Off-Ramp", href: "/documentation/ramp" },
  { name: "API Keys", href: "/documentation/api-keys" },
  { name: "Supported Chains", href: "/documentation/supported-chains" },
  { name: "Webhooks", href: "/documentation/webhook" },
  { name: "Rate Limiting", href: "/documentation/rate-limiting" },
  { name: "Security", href: "/documentation/security" },
  { name: "Subscription", href: "/documentation/subscription" },
  { name: "Examples", href: "/documentation/examples" },
  { name: "Promo Code", href: "/documentation/promo-code" },
  { name: "Widget", href: "/documentation/widget" },
];

const DocumentationLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen overflow-hidden relative">
      {/* Sidebar */}
      <div
        className={cn(
          "transition-all duration-300 overflow-hidden z-50",
          "fixed top-0 left-0 h-screen sm:relative",
          isSidebarOpen ? "w-64" : "w-0"
        )}
      >
        <div className="min-w-64 bg-white border-r overflow-hidden border-gray-200 border-2 min-h-screen p-6">
          <h2 className="text-xl font-bold mb-6">Documentation</h2>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg ${
                  pathname === item.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div
        className={`w-full h-full  bg-black opacity-30 absolute sm:hidden block top-0 left-0 z-40 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      {/* Main content */}
      <div className="flex-1  space-y-8 overflow-scroll h-screen relative">
        <header className="h-20 flex items-center justify-between px-5 sticky top-0 bg-white/80 backdrop-blur-md border-gray-200 border-b-2 z-30">
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/logo_black.svg"
              alt="logo"
              width={80}
              height={32}
              className="w-[80px] h-[32px] pl-2 sm:pl-4 "
            />
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" className="pl-2">
              Home
            </Link>
            <Link href="/business">Business</Link>
            <MenuIcon
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            ></MenuIcon>
          </div>
        </header>

        <div className="w-full px-5 sm:w-4/6 sm:px-0 mx-auto pb-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DocumentationLayout;
