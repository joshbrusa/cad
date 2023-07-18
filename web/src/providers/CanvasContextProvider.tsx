"use client";

import { useState, useRef } from "react";
import CanvasContext from "@/contexts/CanvasContext";
import type { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => {
  return (
    <CanvasContext.Provider
      value={{
        color: "white",
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};
