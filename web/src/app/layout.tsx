import "./globals.css";
import ThemeProvider from "components/ThemeProvider";
import type { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};
