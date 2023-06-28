"use client";

import type { ReactNode } from "react";

export default function themeProvider({ children }: { children: ReactNode }) {
  return { children };
}
