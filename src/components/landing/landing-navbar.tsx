"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/logo-mark";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { NAV_LINKS } from "./landing-data";

export function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
      <nav
        className={[
          "mx-auto max-w-5xl flex items-center justify-between gap-4 rounded-full border px-5 py-2.5 transition-all duration-300",
          scrolled
            ? "border-border bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5"
            : "border-transparent bg-transparent",
        ].join(" ")}
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <LogoMark size="md" />
          <span className="text-lg font-extrabold tracking-tight">Sewain</span>
        </a>

        {/* Center links (desktop) */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-border/60 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex rounded-full">
            <Link href="/signin">Masuk</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full gap-1.5">
            <Link href="/signup">
              Coba Gratis
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <IconX className="w-5 h-5" /> : <IconMenu2 className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl p-3 shadow-xl transition-all duration-300 overflow-hidden ${
          menuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 border-transparent"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-border/50 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-1 border-t border-border pt-2">
            <Button asChild size="sm" className="w-full rounded-xl">
              <Link href="/signup" onClick={() => setMenuOpen(false)}>
                Coba Gratis 14 Hari
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
