import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { QueryProvider } from "@/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { TooltipProvider } from '@/components/ui/tooltip';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sewain Manajemen Sewa Kendaraan untuk UMKM",
  description:
    "SaaS terpusat untuk bisnis rental kendaraan UMKM: booking otomatis, keuangan transparan, manajemen mitra bagi hasil semua dalam satu platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head />
      <body
        suppressHydrationWarning
        className={cn(
          "h-full antialiased",
          geistSans.variable,
          geistMono.variable,
          "font-sans",
          inter.variable
        )}
      >
        <ThemeProvider>
          <TooltipProvider>
            <QueryProvider>
              {children}
            </QueryProvider>
          </TooltipProvider>
          <Toaster position="top-right" closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}



