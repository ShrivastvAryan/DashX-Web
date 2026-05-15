"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const codeParam = params?.get("code");
    if (codeParam) {
      localStorage.setItem("twitterAccessToken", codeParam);
      setTimeout(() => {
        window.close();
      }, 3000);
    }
  }, [params]);

  return (
    <div className="text-4xl font-bold my-20">
      You have been authenticated successfully. You can close this window now...
    </div>
  );
}
