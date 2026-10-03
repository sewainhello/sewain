"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { DAISY_THEMES } from "@/lib/themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      themes={[...DAISY_THEMES]}
      attribute="data-theme"
      defaultTheme="light"
      enableSystem={false}
      storageKey="Sewain-theme"
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}

export { useTheme } from "next-themes";