import React, { Suspense } from "react";
import CookieToLocalStorage from "@/components/CookieToLocalStorage";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CookieToLocalStorage>
            {children}
      </CookieToLocalStorage>
    </>
  );
}
