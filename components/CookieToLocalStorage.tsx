// components/CookieToLocalStorage.tsx
"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";

interface CookieToLocalStorageProps {
  children: React.ReactNode;
}

const CookieToLocalStorage: React.FC<CookieToLocalStorageProps> = ({
  children,
}) => {
  useEffect(() => {
    // Check for cookies and copy to localStorage if they exist
    const accessTokenCookie = Cookies.get("accessToken");
    const refreshTokenCookie = Cookies.get("refreshToken");
    const emailCookie = Cookies.get("email");

    if (accessTokenCookie && refreshTokenCookie && emailCookie) {
      localStorage.setItem("accessToken", accessTokenCookie);
      localStorage.setItem("refreshToken", refreshTokenCookie);

      const expiryTime = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem(
        "userEmail",
        JSON.stringify({ email: emailCookie, expiry: expiryTime }),
      );
    }
  }, []);

  return <>{children}</>;
};

export default CookieToLocalStorage;
