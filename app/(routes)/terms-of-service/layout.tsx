"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HomepageProvider } from "@/store/homepageStore";

export default function TermsOfServiceLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <HomepageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 sm:pt-28 lg:pt-32">
          {children}
        </main>
        <Footer />
      </div>
    </HomepageProvider>
  );
}
