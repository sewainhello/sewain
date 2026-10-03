"use client";

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
} from "@tabler/icons-react";

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
      className="flex w-[880px] max-w-none overflow-hidden rounded-tl-3xl bg-white text-[#111827] shadow-[0_30px_80px_-20px_rgba(10,60,160,0.45)] ring-8 ring-white/40"
      aria-hidden="true"
    >
      {/* Sidebar */}
      <aside className="w-[170px] shrink-0 border-r border-slate-200 bg-slate-50 p-3">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0a7cff] text-white">
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
            <p className="mb-1 px-2 text-[10px] text-slate-400">{group.title}</p>
            {group.items.map(({ label, icon: Icon, active, chevron }) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] ${
                  active ? "bg-white font-medium text-[#0a7cff] shadow-sm ring-1 ring-slate-200" : "text-slate-600"
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
        <div className="border-b border-slate-200 px-5 py-3 text-[11px] text-slate-400">
          Beranda / <span className="text-slate-700">Dashboard</span>
        </div>

        <div className="space-y-4 p-5">
          <h3 className="text-sm font-semibold">Dashboard</h3>

          {/* Chart card */}
          <div className="rounded-xl border border-slate-200">
            <div className="border-b border-slate-200 px-4 py-2.5 text-xs font-semibold">Ringkasan Pemesanan</div>
            <div className="p-4">
              <p className="mb-3 text-lg font-bold">
                274 <span className="text-[11px] font-medium text-rose-500">↓ 3%</span>{" "}
                <span className="text-[11px] font-normal text-slate-500">vs minggu lalu</span>
              </p>
              <div className="relative flex h-40 items-end gap-6 border-b border-slate-200 pl-7">
                {[100, 80, 60, 40, 20, 0].map((n) => (
                  <span
                    key={n}
                    className="absolute left-0 text-[9px] text-slate-400"
                    style={{ bottom: `calc(${n}% - 5px)` }}
                  >
                    {n}
                  </span>
                ))}
                {BARS.map((bar) => (
                  <div key={bar.day} className="flex h-full flex-1 flex-col justify-end">
                    <div className="flex h-full items-end justify-center gap-1">
                      <div
                        className="w-1/2 rounded-t-sm"
                        style={{
                          height: `${bar.a}%`,
                          background:
                            "repeating-linear-gradient(135deg, #93c5fd 0 2px, #dbeafe 2px 5px)",
                        }}
                      />
                      <div
                        className="w-1/2 rounded-t-sm bg-slate-200"
                        style={{ height: `${bar.b}%` }}
                      />
                    </div>
                    <span className="mt-1 text-center text-[9px] text-slate-400">{bar.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-[11px] text-slate-500">Pemesanan Hari Ini</p>
              <p className="mt-1 text-lg font-bold">26</p>
              <p className="text-[10px] text-slate-400">
                <span className="text-rose-500">+ 8%</span> vs kemarin
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-3">
              <p className="text-[11px] text-slate-500">Tingkat Okupansi</p>
              <p className="mt-1 text-lg font-bold">82%</p>
              <p className="text-[10px] text-slate-400">124 dari 150 unit</p>
            </div>
          </div>

          {/* Table header */}
          <div className="rounded-xl border border-slate-200">
            <div className="border-b border-slate-200 px-4 py-2.5 text-xs font-semibold">Pemesanan Terbaru</div>
            <div className="grid grid-cols-4 bg-slate-50 px-4 py-2 text-[10px] text-slate-500">
              <span>ID Booking</span>
              <span>Penyewa</span>
              <span>Unit</span>
              <span>Mulai Sewa</span>
            </div>
            <div className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-28 pb-0 text-white lg:pb-16"
      style={{ background: "linear-gradient(180deg, #0a7cff 0%, #3d9bff 55%, #9ac8ff 100%)" }}
    >
      {/* Clouds */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -top-16 right-[-5%] h-[380px] w-[620px] rounded-full opacity-90"
          style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%)", filter: "blur(30px)" }}
        />
        <div
          className="absolute top-40 left-[38%] h-[260px] w-[300px] rounded-full opacity-70"
          style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)", filter: "blur(28px)" }}
        />
        <div
          className="absolute bottom-0 left-0 h-[220px] w-full"
          style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.25))" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Copy */}
          <div className="max-w-[560px] pt-8 lg:pt-16">
            <h1 className="mb-6 text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Ubah Kekacauan
              <br />
              Jadi Keteraturan
              <br />
              <span className={`${serif.className} font-normal`}>Satu Mobil</span> per Satu Waktu
            </h1>

            <p className="mb-8 max-w-md text-lg leading-relaxed text-white/85">
              Dari pemesanan hingga bagi hasil mitra, kelola seluruh operasional rental mobil Anda dalam satu
              platform.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#cta">
                <Button
                  size="lg"
                  className="border-0 bg-white text-slate-900 shadow-sm hover:bg-white/90"
                >
                  Minta Demo
                </Button>
              </a>
              <a href="#cta">
                <Button
                  size="lg"
                  className="border border-white/70 bg-[#0a7cff] text-white ring-4 ring-white/25 hover:bg-[#0a6de0]"
                >
                  Coba Gratis 14 Hari
                </Button>
              </a>
            </div>
          </div>

          {/* Dashboard mock: bleeds off the right edge on desktop, sits below the copy on mobile */}
          <div className="relative -mr-4 mt-12 h-[420px] overflow-hidden lg:absolute lg:left-[50%] lg:top-[190px] lg:mr-0 lg:mt-0 lg:h-[560px] lg:w-[calc(50vw+120px)] lg:overflow-visible">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}