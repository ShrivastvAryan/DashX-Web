"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type ViewType = "user" | "business";

interface HomepageContextType {
  view: ViewType;
  setView: React.Dispatch<React.SetStateAction<ViewType>>;
}

const HomepageContext = createContext<HomepageContextType | undefined>(
  undefined
);

interface HomepageProviderProps {
  children: ReactNode;
}

export const HomepageProvider: React.FC<HomepageProviderProps> = ({
  children,
}) => {
  const [view, setView] = useState<ViewType>("business");

  return (
    <HomepageContext.Provider value={{ view, setView }}>
      {children}
    </HomepageContext.Provider>
  );
};

export const useHomepageContext = (): HomepageContextType => {
  const context = useContext(HomepageContext);
  if (!context) {
    throw new Error(
      "useHomepageContext must be used within a HomepageProvider"
    );
  }
  return context;
};
