import { createContext } from "react";
import type { MutableRefObject, Dispatch, SetStateAction } from "react";

type CanvasContext = {
  color: string;
};

export default createContext<CanvasContext>({} as CanvasContext);
