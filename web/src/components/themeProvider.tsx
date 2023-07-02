"use client";

import { useState, useEffect, createContext } from "react";
import ThemeContext from "context/ThemeContext";
import type { ReactNode } from "react";
import type { Theme } from "context/ThemeContext";

export default ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    switch (theme) {
      case "light":
        setTheme(theme);
        break;
      case "dark":
        setTheme(theme);
        break;
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

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
  }, [theme]);

  if (!mounted) {
    return;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
