"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MotionConfig } from "motion/react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      themes={["light", "dark"]}
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="sewain-theme"
      disableTransitionOnChange={false}
    >
      {/* Global: all Motion animations defer to the OS reduced-motion setting */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </NextThemesProvider>
  );
}

export { useTheme } from "next-themes";
