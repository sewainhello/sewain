"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

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
      {children}
    </NextThemesProvider>
  );
}

export { useTheme } from "next-themes";
