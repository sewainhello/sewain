"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/logo-mark";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { NAV_LINKS } from "./landing-data";

export function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Dipakai HANYA untuk state hover (tidak terlihat saat diam), bukan lagi
  // untuk warna dasar — warna sekarang scroll-linked, lihat di bawah.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollY } = useScroll();

  // Pil kaca: fade-in kontinyu mengikuti progres scroll (compositor-driven),
  // tidak pernah di-swap kelasnya sehingga tidak mungkin "pop".
  const scrollGlass = useTransform(scrollY, [6, 110], [0, 1]);
  // Warna teks/ikon/CTA: diinterpolasi putih → gelap pada rentang scroll
  // yang hampir sama, jadi seluruh navbar berubah serempak dengan jari —
  // tidak ada flip threshold yang memicu fade tiba-tiba.
  const scrollText = useTransform(scrollY, [35, 100], [0, 1]);

  // Saat menu mobile terbuka di puncak halaman, kaca + warna gelap dipaksa
  // muncul agar konten nav tetap terbaca di atas hero biru.
  const menuGlass = useMotionValue(0);
  const menuText = useMotionValue(0);
  useEffect(() => {
    menuGlass.set(menuOpen ? 1 : 0);
    menuText.set(menuOpen ? 1 : 0);
  }, [menuOpen, menuGlass, menuText]);

  const glassOpacity = useTransform(
    [scrollGlass, menuGlass],
    ([s, m]: number[]) => Math.max(s, m)
  );
  const textP = useTransform(
    [scrollText, menuText],
    ([s, m]: number[]) => Math.max(s, m)
  );

  const brandColor = useTransform(textP, [0, 1], ["#ffffff", "#0f1b2d"]);
  const logoBg = useTransform(textP, [0, 1], ["#ffffff", "#0a7cff"]);
  const logoIcon = useTransform(textP, [0, 1], ["#0a7cff", "#ffffff"]);
  const linkColor = useTransform(textP, [0, 1], ["rgba(255,255,255,0.8)", "rgba(15,27,45,0.6)"]);
  const ctaBg = useTransform(textP, [0, 1], ["#ffffff", "#0a7cff"]);
  const ctaColor = useTransform(textP, [0, 1], ["#0f1b2d", "#ffffff"]);
  const menuIconColor = useTransform(textP, [0, 1], ["#ffffff", "#0f1b2d"]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
      <nav
        aria-label="Navigasi utama"
        className="relative mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-transparent px-4 py-2.5 pl-5"
      >
        {/* Layer kaca: bg + blur + border + shadow fade bersamaan via opacity */}
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-border bg-background/85 backdrop-blur-xl shadow-[0_8px_24px_-16px_rgba(15,27,45,0.25)]"
          style={{ opacity: glassOpacity }}
        />

        {/* Brand */}
        <motion.a
          href="#hero"
          className="relative flex items-center gap-2 shrink-0"
          style={{ color: brandColor }}
          aria-label="Sewain - kembali ke atas"
        >
          <motion.span
            className="flex h-8 w-8 items-center justify-center rounded-full"
            style={{ backgroundColor: logoBg, color: logoIcon }}
          >
            <LogoMark size="sm" className="[&_path]:fill-current" />
          </motion.span>
          <span className="text-lg font-extrabold tracking-tight">Sewain</span>
        </motion.a>

        {/* Center links (desktop) */}
        <ul className="relative hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium ${
                  scrolled
                    ? "hover:bg-border/60 hover:text-foreground"
                    : "hover:bg-white/15 hover:text-white"
                }`}
                style={{ color: linkColor }}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="relative flex items-center gap-2 shrink-0">
          <motion.a
            href="#pricing"
            className={`inline-flex h-9 items-center gap-1.5 rounded-full px-5 text-sm font-semibold transition-[filter] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              scrolled ? "hover:brightness-110" : "hover:brightness-95"
            }`}
            style={{ backgroundColor: ctaBg, color: ctaColor }}
          >
            Coba Gratis
            <IconArrowRight className="w-4 h-4" />
          </motion.a>
          <Button
            variant="ghost"
            size="icon-lg"
            className={`lg:hidden rounded-full ${scrolled ? "" : "hover:bg-white/15 hover:text-white"}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
          >
            <motion.span className="flex" style={{ color: menuIconColor }}>
              {menuOpen ? <IconX className="w-5 h-5" /> : <IconMenu2 className="w-5 h-5" />}
            </motion.span>
          </Button>
        </div>
      </nav>

      {/* Mobile sheet — CSS max-height transition (ala sewain-v0) */}
      <div
        className={`lg:hidden mt-2 rounded-2xl border bg-background/95 backdrop-blur-xl p-3 shadow-lg transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100 border-border" : "max-h-0 opacity-0 border-transparent"
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
            <Button asChild size="cta-sm" className="w-full">
              <a href="#pricing" onClick={() => setMenuOpen(false)}>
                Coba Gratis
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
