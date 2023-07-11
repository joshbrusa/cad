import "./globals.css";
import type { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body className="text-black bg-white dark:text-white dark:bg-black">
        {children}
      </body>
    </html>
  );
};
