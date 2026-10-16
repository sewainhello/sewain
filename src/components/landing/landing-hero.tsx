"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Instrument_Serif } from "next/font/google";
import {
  IconLayoutDashboard,
  IconCalendarEvent,
  IconCar,
  IconUsers,
  IconUserCog,
  IconDiscount2,
  IconMessage2,
  IconReportMoney,
  IconTool,
  IconCalendar,
  IconSettings,
  IconSearch,
  IconChevronDown,
  IconCheck,
  IconArrowRight,
} from "@tabler/icons-react";
import { MARQUEE_ITEMS, TRUST_BADGES } from "./landing-data";

// Italic serif used only for the accent phrase in the headline
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic" });

const MENU = [
  {
    title: "Operasional Harian",
    items: [
      { label: "Dashboard", icon: IconLayoutDashboard, active: true },
      { label: "Pemesanan", icon: IconCalendarEvent },
      { label: "Kelola Armada", icon: IconCar, chevron: true },
      { label: "Kelola Pelanggan", icon: IconUsers, chevron: true },
      { label: "Kelola Mitra", icon: IconUserCog, chevron: true },
      { label: "Promo", icon: IconDiscount2 },
      { label: "Ulasan", icon: IconMessage2 },
    ],
  },
  {
    title: "Keuangan",
    items: [
      { label: "Laporan", icon: IconReportMoney },
      { label: "Perawatan", icon: IconTool },
    ],
  },
  {
    title: "Pengaturan",
    items: [
      { label: "Kalender", icon: IconCalendar },
      { label: "Pengaturan", icon: IconSettings },
    ],
  },
];

// [bookings this week, last week] as % of chart height
const BARS = [
  { day: "Min", a: 57, b: 44 },
  { day: "Sen", a: 79, b: 52 },
  { day: "Sel", a: 96, b: 75 },
  { day: "Rab", a: 84, b: 42 },
  { day: "Kam", a: 80, b: 50 },
];

function DashboardMock() {
  return (
    <div
      className="flex w-[760px] max-w-none overflow-hidden rounded-2xl bg-white text-[#0f1b2d] shadow-[0_16px_40px_-24px_rgba(8,40,120,0.3)]"
      aria-hidden="true"
    >
      {/* Sidebar */}
      <aside className="w-[170px] shrink-0 border-r border-slate-200/80 bg-slate-50/80 p-3">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <IconCar className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold">Sewain</span>
        </div>

        <div className="mb-4 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[11px] text-slate-400">
          <IconSearch className="h-3.5 w-3.5" />
          Cari
          <span className="ml-auto rounded bg-slate-100 px-1 text-[10px]">⌘ K</span>
        </div>

        {MENU.map((group) => (
          <div key={group.title} className="mb-3">
            <p className="mb-1 px-2 text-[10px] font-medium text-slate-400">{group.title}</p>
            {group.items.map(({ label, icon: Icon, active, chevron }) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] ${
                  active
                    ? "bg-white font-semibold text-primary shadow-sm ring-1 ring-slate-200"
                    : "text-slate-600"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
                {chevron && <IconChevronDown className="ml-auto h-3 w-3 text-slate-400" />}
              </div>
            ))}
          </div>
        ))}
      </aside>

      {/* Main */}
      <div className="flex-1 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200/80 px-5 py-3 text-[11px] text-slate-400">
          <span>
            Beranda / <span className="font-medium text-slate-700">Dashboard</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        </div>

        <div className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Dashboard</h3>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              Minggu ini
            </span>
          </div>

          {/* Chart card */}
          <div className="rounded-xl border border-slate-200/90">
            <div className="border-b border-slate-200/80 px-4 py-2.5 text-xs font-semibold">
              Ringkasan Pemesanan
            </div>
            <div className="p-4">
              <p className="mb-3 text-lg font-bold tracking-tight">
                274{" "}
                <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-600">
                  ↑ 12%
                </span>{" "}
                <span className="text-[11px] font-normal text-slate-500">vs minggu lalu</span>
              </p>
              <div className="relative flex h-40 items-end gap-6 border-b border-slate-200 pl-7">
                {[100, 80, 60, 40, 20, 0].map((n) => (
                  <span
                    key={n}
                    className="absolute left-0 text-[9px] tabular-nums text-slate-400"
                    style={{ bottom: `calc(${n}% - 5px)` }}
                  >
                    {n}
                  </span>
                ))}
                {BARS.map((bar) => (
                  <div key={bar.day} className="flex h-full flex-1 flex-col justify-end">
                    <div className="flex h-full items-end justify-center gap-1.5">
                      <div className="w-5 rounded-t-[6px] bg-[#0a7cff]" style={{ height: `${bar.a}%` }} />
                      <div className="w-5 rounded-t-[6px] bg-slate-200" style={{ height: `${bar.b}%` }} />
                    </div>
                    <span className="mt-1.5 text-center text-[9px] font-medium text-slate-400">
                      {bar.day}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-4 text-[10px] text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#0a7cff]" /> Minggu ini
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-slate-300" /> Minggu lalu
                </span>
              </div>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-slate-200/90 p-3">
              <p className="text-[11px] text-slate-500">Pemesanan Hari Ini</p>
              <p className="mt-1 text-lg font-bold tabular-nums">26</p>
              <p className="text-[10px] text-slate-400">
                <span className="font-semibold text-emerald-600">+ 8%</span> vs kemarin
              </p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-3">
              <p className="text-[11px] text-slate-500">Tingkat Okupansi</p>
              <p className="mt-1 text-lg font-bold tabular-nums text-primary">82%</p>
              <p className="text-[10px] text-slate-400">124 dari 150 unit</p>
            </div>
          </div>

          {/* Table header */}
          <div className="overflow-hidden rounded-xl border border-slate-200/90">
            <div className="border-b border-slate-200/80 px-4 py-2.5 text-xs font-semibold">
              Pemesanan Terbaru
            </div>
            <div className="grid grid-cols-4 bg-slate-50 px-4 py-2 text-[10px] font-medium text-slate-500">
              <span>ID Booking</span>
              <span>Penyewa</span>
              <span>Unit</span>
              <span>Mulai Sewa</span>
            </div>
            <div className="space-y-0">
              {[
                { id: "SW-2481", name: "Pak Rudi", unit: "Avanza", date: "12 Apr" },
                { id: "SW-2480", name: "Bu Maya", unit: "Innova", date: "12 Apr" },
              ].map((r) => (
                <div
                  key={r.id}
                  className="grid grid-cols-4 px-4 py-2 text-[10px] text-slate-600 odd:bg-white even:bg-slate-50/60"
                >
                  <span className="font-semibold text-slate-700">{r.id}</span>
                  <span>{r.name}</span>
                  <span>{r.unit}</span>
                  <span>{r.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingHero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Parallax: mock drifts down, chip counter-drifts up — desktop only effect,
  // transform-only so it never triggers layout work.
  const mockParallax = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const chipParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const rise: Variants = {
    hidden: { opacity: 0, y: 26 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 + i * 0.09 },
    }),
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative overflow-hidden pt-32 text-white lg:pt-36"
      style={{ background: "linear-gradient(180deg, #0a7cff 0%, #8fcaff 100%)" }}
    >
      {/* One soft cloud only — keeps the sky character without noise */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -top-24 right-[-4%] h-[360px] w-[560px] rounded-full bg-white/70 blur-[90px]"
        />
        <div className="absolute bottom-0 left-0 h-[180px] w-full bg-gradient-to-b from-transparent to-white/20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Copy — orchestrated entrance: pill → headline → sub → CTA → trust */}
            <div className="max-w-[540px] pt-4 lg:py-16">
              <motion.a
                href="#fitur"
                variants={rise}
                custom={0}
                initial={reduceMotion ? false : "hidden"}
                animate="show"
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 py-1.5 pl-1.5 pr-3.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
              >
                <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-[#0a63e8]">
                  Baru
                </span>
                Laporan bagi hasil mitra otomatis
                <IconArrowRight className="h-3.5 w-3.5 opacity-80" />
              </motion.a>

              <motion.h1
                variants={rise}
                custom={1}
                initial={reduceMotion ? false : "hidden"}
                animate="show"
                className="mb-5 text-balance text-[2.75rem] font-medium leading-[1.06] tracking-[-0.02em] md:text-6xl"
              >
                Booking Rapi,
                <br />
                Keuangan Jelas,
                <br />
                <span className={`${serif.className} font-normal tracking-normal`}>
                  Mitra Tenang.
                </span>
              </motion.h1>

              <motion.p
                variants={rise}
                custom={2}
                initial={reduceMotion ? false : "hidden"}
                animate="show"
                className="mb-8 max-w-md text-[17px] leading-relaxed text-white/85"
              >
                Dari pemesanan hingga bagi hasil mitra, kelola seluruh operasional rental mobil
                Anda dalam satu platform.
              </motion.p>

              <motion.div
                variants={rise}
                custom={3}
                initial={reduceMotion ? false : "hidden"}
                animate="show"
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Sewain%2C%20saya%20ingin%20aktifkan%20trial%2014%20hari%20gratis."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="cta"
                    className="border-0 bg-white text-slate-900 hover:bg-white/90"
                  >
                    Coba Gratis 14 Hari
                  </Button>
                </a>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Sewain%2C%20saya%20ingin%20minta%20demo."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="cta"
                    className="border border-white/50 bg-transparent text-white transition-colors hover:bg-white/15"
                  >
                    Minta Demo
                  </Button>
                </a>
              </motion.div>

              <motion.ul
                variants={rise}
                custom={4}
                initial={reduceMotion ? false : "hidden"}
                animate="show"
                className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/80"
              >
                {TRUST_BADGES.map(({ icon: Icon, text }) => (
                  <li key={text} className="inline-flex items-center gap-1.5">
                    <Icon className="h-4 w-4 opacity-90" />
                    {text}
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Dashboard mock — swipeable on mobile, composed on desktop */}
            <div className="relative -mr-4 h-[460px] sm:h-[500px] lg:mr-0 lg:h-[560px] lg:overflow-visible">
              <motion.div
                style={reduceMotion ? undefined : { y: mockParallax }}
                className="h-full lg:h-auto"
              >
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 64 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 55, damping: 18, delay: 0.35 }}
                className="h-full lg:h-auto"
              >
              <div
                role="region"
                aria-label="Geser untuk melihat pratinjau dashboard"
                className="scrollbar-hide h-full overflow-x-auto overflow-y-hidden lg:h-auto lg:overflow-visible"
              >
                <div className="w-max px-4 pt-12 pb-4 sm:px-0 lg:absolute lg:left-0 lg:top-10 lg:w-auto lg:p-0">
                  <DashboardMock />
                </div>
              </div>
              </motion.div>
              </motion.div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white/50 to-transparent lg:hidden"
              />

              <motion.div
                style={reduceMotion ? undefined : { y: chipParallax }}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
                className="absolute left-2 top-0 lg:-left-4"
              >
              <div className="animate-float-slow flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white py-2 pl-2 pr-3 text-slate-900 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  <IconCheck className="h-4 w-4" />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs font-bold">Double booking dicegah</span>
                  <span className="block text-[11px] text-slate-500">Validasi real-time aktif</span>
                </span>
              </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee — plain white strip so hero lands cleanly into social proof */}
      <div className="relative z-10 border-t border-slate-200/70 bg-white">
        <div className="marquee-mask overflow-hidden py-3.5">
          <div className="marquee-track flex w-max items-center gap-2.5 pr-2.5">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(({ icon: Icon, label }, i) => (
              <span
                key={`${label}-${i}`}
                aria-hidden={i >= MARQUEE_ITEMS.length}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-[13px] font-medium text-slate-600"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
