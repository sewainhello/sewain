"use client";

// â”€â”€â”€ Landing feature mockups (ported from the old page feature previews) â”€â”€â”€â”€â”€â”€â”€
// Small self-contained dashboard previews used inside the bento feature cards.
// Each is scoped to the white/blue `.landing` theme automatically.

import {
  IconCar,
  IconCalendar,
  IconUsers,
  IconCheck,
} from "@tabler/icons-react";

type Props = { id: string };

export function FeatureMockup({ id }: Props) {
  if (id === "unit") {
    return (
      <div className="relative p-4 space-y-2.5">
        {[
          { name: "Toyota Avanza", plate: "B 1234 XY", status: "tersedia", badge: "badge-success badge-soft", label: "Tersedia" },
          { name: "Honda Mobilio", plate: "D 5678 AB", status: "disewa", badge: "badge-warning badge-soft", label: "Disewa" },
          { name: "Suzuki Ertiga", plate: "B 9012 CD", status: "servis", badge: "badge-error badge-soft", label: "Servis" },
        ].map((u) => (
          <div key={u.plate} className="flex items-center gap-3 rounded-xl bg-white/70 border border-base-300 p-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <IconCar className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate">{u.name}</p>
              <p className="text-[10px] opacity-50">{u.plate}</p>
            </div>
            <span className={`badge badge-xs ${u.badge}`}>{u.label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (id === "booking") {
    return (
      <div className="p-4 space-y-2.5">
        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <span className="flex items-center gap-1.5">
            <IconCalendar className="w-4 h-4 text-primary" /> April 2026
          </span>
          <span className="badge badge-primary badge-xs badge-soft">7 booking</span>
        </div>
        <div className="rounded-xl bg-white/70 border border-base-300 p-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Avensis B 44 X</span>
            <span className="badge badge-success badge-xs badge-soft">Dikonfirmasi</span>
          </div>
          <p className="text-[10px] opacity-50 mt-1">
            12â€“15 Apr Â· Pak Rudi Â· Sewa 3 hari
          </p>
          <div className="mt-2 h-1.5 rounded-full bg-base-300 overflow-hidden">
            <div className="h-full w-2/3 rounded-full bg-primary" />
          </div>
        </div>
        <div className="rounded-xl bg-white/70 border border-base-300 p-3 opacity-60">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Innova D 99 Z</span>
            <span className="badge badge-ghost badge-xs">Pending</span>
          </div>
          <p className="text-[10px] opacity-50 mt-1">16â€“18 Apr Â· Mitra Â· Bagi hasil</p>
        </div>
      </div>
    );
  }

  if (id === "keuangan") {
    return (
      <div className="p-4 space-y-2.5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold">April 2026</p>
          <span className="badge badge-success badge-xs">+18% vs Mar</span>
        </div>
        <div className="rounded-xl bg-white/70 border border-base-300 p-3">
          <p className="text-[10px] opacity-50">Pendapatan</p>
          <p className="text-lg font-extrabold text-primary">Rp 24,5 jt</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/70 border border-base-300 p-2.5">
            <p className="text-[10px] opacity-50">Pengeluaran</p>
            <p className="text-sm font-bold text-error">Rp 8,2 jt</p>
          </div>
          <div className="rounded-xl bg-primary/10 border border-primary/20 p-2.5">
            <p className="text-[10px] opacity-50">Net Profit</p>
            <p className="text-sm font-bold text-primary">Rp 16,3 jt</p>
          </div>
        </div>
      </div>
    );
  }

  // mitra
  return (
    <div className="p-4 space-y-2.5">
      <p className="text-xs font-semibold mb-1 flex items-center gap-1.5">
        <IconUsers className="w-4 h-4 text-primary" /> Bagi Hasil April 2026
      </p>
      {[
        { init: "HB", name: "Hendra Budiman", split: "60/40 Â· 3 unit", amount: "Rp 5,4 jt" },
        { init: "DP", name: "Dewi Purnama", split: "70/30 Â· 2 unit", amount: "Rp 3,1 jt" },
      ].map((m) => (
        <div key={m.name} className="flex items-center gap-3 rounded-xl bg-white/70 border border-base-300 p-2.5">
          <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
            <span className="text-[10px] font-bold text-secondary">{m.init}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold truncate">{m.name}</p>
            <p className="text-[10px] opacity-50">{m.split}</p>
          </div>
          <p className="text-xs font-bold text-primary">{m.amount}</p>
        </div>
      ))}
      <div className="flex items-center gap-1.5 text-[10px] opacity-60 pt-0.5">
        <IconCheck className="w-3 h-3 text-success" /> Otomatis dihitung & siap kirim
      </div>
    </div>
  );
}
