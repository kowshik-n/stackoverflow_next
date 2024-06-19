"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<string>("dark"); // Initialize mode with 'light'

  useEffect(() => {
    // Toggle theme class on document element
    if (mode === "dark") {
      document.documentElement.classList.remove("light"); // Remove 'light' class
      document.documentElement.classList.add("dark"); // Add 'dark' class
    } else {
      document.documentElement.classList.remove("dark"); // Remove 'dark' class
      document.documentElement.classList.add("light"); // Add 'light' class
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used with a ThemeProvider");
  }

  return context; // Return context value
}
