"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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

  const onHero = !scrolled && !menuOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
      <nav
        aria-label="Navigasi utama"
        className={[
          "relative mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 pl-5 transition-colors duration-300",
          scrolled
            ? "border-border bg-background/85 backdrop-blur-xl shadow-[0_8px_24px_-16px_rgba(15,27,45,0.25)]"
            : "border-transparent bg-transparent",
        ].join(" ")}
      >
        {/* Brand */}
        <a
          href="#hero"
          className={`flex items-center gap-2 shrink-0 transition-colors ${
            onHero ? "text-white" : "text-foreground"
          }`}
          aria-label="Sewain - kembali ke atas"
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
              onHero ? "bg-white text-primary" : "bg-primary text-primary-foreground"
            }`}
          >
            <LogoMark size="sm" className={onHero ? "[&_path]:fill-[#0a7cff]" : "[&_path]:fill-white"} />
          </span>
          <span className="text-lg font-extrabold tracking-tight">Sewain</span>
        </a>

        {/* Center links (desktop) */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  onHero
                    ? "text-white/80 hover:text-white hover:bg-white/15"
                    : "text-foreground/60 hover:text-foreground hover:bg-border/60"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Button
            asChild
            size="cta-sm"
            className={`border-0 ${
              onHero
                ? "bg-white text-slate-900 hover:bg-white/90"
                : "bg-primary text-primary-foreground hover:bg-secondary"
            }`}
          >
            <Link href="#pricing">
              Coba Gratis
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon-lg"
            className={`lg:hidden rounded-full ${onHero ? "text-white hover:bg-white/15 hover:text-white" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IconX className="w-5 h-5" /> : <IconMenu2 className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-sheet"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
            className="lg:hidden overflow-hidden"
          >
      <div className="mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl p-3 shadow-lg">
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
            <Button asChild size="cta-sm" className="w-full">
              <Link href="#pricing" onClick={() => setMenuOpen(false)}>
                Coba Gratis
              </Link>
            </Button>
          </li>
        </ul>
      </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
