import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type Theme = "light" | "dark" | null;

interface IThemeContext {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export default createContext<IThemeContext>({} as IThemeContext);
