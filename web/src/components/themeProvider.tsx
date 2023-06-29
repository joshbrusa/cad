"use client";

import { useState, useEffect, createContext } from "react";
import ThemeContext from "context/ThemeContext";
import type { ReactNode } from "react";
import type { Theme } from "context/ThemeContext";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [hydratedTheme, setHydratedTheme] = useState(false);
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const theme = localStorage.getItem("theme");

    switch (theme) {
      case "light":
        setTheme(theme);
        break;
      case "dark":
        setTheme(theme);
        break;
      default:
        setTheme(null);
    }

    setHydratedTheme(true);
  }, [hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    console.log(hydrated);
    console.log(theme);

    switch (theme) {
      case "light":
        document.documentElement.setAttribute("theme", theme);
        localStorage.setItem("theme", theme);
        break;
      case "dark":
        document.documentElement.setAttribute("theme", theme);
        localStorage.setItem("theme", theme);
        break;
      default:
        document.documentElement.removeAttribute("theme");
        localStorage.removeItem("theme");
    }
  }, [hydratedTheme, theme]);

  if (!hydrated) {
    return;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
