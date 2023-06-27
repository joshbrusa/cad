"use client";

import { useEffect, useState } from "react";

type Theme = "light-theme" | "dark-theme";

export default function useScheme() {
  const [theme, setTheme] = useState<Theme>("light-theme");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)")) {
      setTheme("dark-theme");
    }
  }, []);

  console.log(theme);

  return { theme, setTheme };
}
