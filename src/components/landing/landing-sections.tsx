"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { RevealSection, CounterStat } from "./landing-reveal";
import {
  STEPS,
  COMPARISON_ROWS,
  PRICING,
  TESTIMONIALS,
  FAQS,
  NAV_LINKS,
  STATS,
} from "./landing-data";
import {
  IconCheck,
  IconX,
  IconArrowRight,
  IconBrandWhatsapp,
  IconMail,
  IconStar,
  IconSparkles,
  IconPlus,
  IconShieldCheck,
} from "@tabler/icons-react";
import { LogoMark } from "@/components/logo-mark";

export function LandingSocialProof() {
  return (
    <section aria-label="Bukti sosial" className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <RevealSection key={s.label} delay={i * 80}>
              <CounterStat value={s.value} suffix={s.suffix} label={s.label} />
            </RevealSection>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-foreground/40">
          Data internal Sewain per September 2026 dari rental aktif yang memakai laporan otomatis.
        </p>
      </div>
    </section>
  );
}

export function LandingHow() {
  return (
    <section id="cara-kerja" className="py-20 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <RevealSection className="mb-12 text-center md:mb-14">
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-secondary shadow-sm">
            <IconSparkles className="h-3.5 w-3.5" />
            Cara Kerja
          </div>
          <h2 className="text-balance text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-foreground md:text-5xl">
            Kami buat prosesnya
            <br />
            <span className="text-secondary">mudah untuk Anda</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
            Tidak perlu training khusus. Siapapun bisa langsung pakai dalam hitungan menit.
          </p>
        </RevealSection>

        <div className="grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => {
            const active = i === 1;
            const corner =
              i === 0
                ? "md:rounded-tl-[2.5rem]"
                : i === 2
                  ? "md:rounded-tr-[2.5rem]"
                  : "";
            return (
              <RevealSection key={s.step} delay={i * 80} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  className={`relative h-full min-h-[27rem] overflow-hidden rounded-2xl ${corner} p-6 pb-40 flex flex-col ${
                    active
                      ? "bg-secondary text-primary-foreground"
                      : "bg-white text-foreground"
                  }`}
                >
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-6 ${
                      active
                        ? "bg-white text-secondary"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {s.step}
                  </span>

                  <h3 className="text-lg font-semibold tracking-tight mb-2">{s.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      active ? "text-white/75" : "text-foreground/60"
                    }`}
                  >
                    {s.body}
                  </p>

                  <div
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-[70%] translate-y-6 rounded-xl bg-[#edf3fc] text-foreground p-4 ${
                      active
                        ? ""
                        : i === 0
                          ? "-rotate-6 -translate-x-[45%]"
                          : "rotate-6 -translate-x-[55%]"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                        {s.step}
                      </span>
                      <div className="leading-tight">
                        <p className="text-[11px] font-semibold">{s.title}</p>
                        <p className="text-[10px] text-foreground/45">Detail langkah</p>
                      </div>
                      <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                        <IconCheck className="h-3 w-3" /> Siap
                      </span>
                    </div>
                    <ul className="space-y-1.5 mb-3">
                      {s.items.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-1.5 text-[11px] leading-snug text-foreground/65"
                        >
                          <IconCheck className="mt-0.5 h-3 w-3 text-emerald-600 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {/* Barcode strip: the ticket's native texture */}
                    <div
                      aria-hidden="true"
                      className="h-10 rounded-sm"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(90deg, currentColor 0 2px, transparent 2px 4px, currentColor 4px 5px, transparent 5px 8px, currentColor 8px 11px, transparent 11px 13px)",
                      }}
                    />
                  </div>
                </motion.div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function LandingCompare() {
  return (
    <section id="bandingkan" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <RevealSection className="mb-10 text-center md:mb-12">
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-secondary shadow-sm">
            <IconSparkles className="h-3.5 w-3.5" />
            Perbandingan Fitur
          </div>
          <h2 className="text-balance text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-foreground md:text-5xl">
            Kenapa Harus Kami? <span className="text-secondary">Sini Kami Jelasin!</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
            Masih pakai WhatsApp dan Excel dengan cara lama? Lihat bedanya.
          </p>
        </RevealSection>
        <RevealSection>
          <div className="overflow-hidden rounded-2xl bg-white">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-5 w-1/2 text-left text-sm font-semibold">Fitur</th>
                    <th className="py-4 px-4 text-center text-sm font-medium text-foreground/55">
                      Excel / WA
                    </th>
                    <th className="py-4 px-4 text-center bg-primary/[0.06]">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                        <IconShieldCheck className="h-3.5 w-3.5" /> Sewain
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.label} className="border-t border-border/70">
                      <td className="py-3.5 px-5 text-sm font-medium">{row.label}</td>
                      <td className="py-3.5 px-4 text-center">
                        {row.old === true ? (
                          <IconCheck className="w-5 h-5 text-emerald-600 mx-auto" />
                        ) : row.old === false ? (
                          <IconX className="w-5 h-5 text-foreground/20 mx-auto" />
                        ) : (
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-foreground/50">
                            {row.old}
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center bg-primary/[0.06]">
                        {row.new ? (
                          <IconCheck className="w-5 h-5 text-primary mx-auto" strokeWidth={3} />
                        ) : (
                          <IconX className="w-5 h-5 text-foreground/20 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-foreground/45">
            Semua fitur Sewain aktif sejak hari pertama trial — tanpa setup tambahan.
          </p>
        </RevealSection>
      </div>
    </section>
  );
}

export function LandingPricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative overflow-hidden bg-[#0a0f1e] py-20 md:py-24 text-white">
      <div className="container relative mx-auto max-w-6xl px-4 md:px-8">
        {/* Header: title left, billing toggle right */}
        <RevealSection className="mb-12 flex flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-4xl font-medium leading-[1.08] tracking-[-0.02em] md:text-5xl">
            Ada paket yang
            <br className="hidden md:block" /> cocok untuk Anda
          </h2>

          <div className="flex flex-col items-center text-center">
            <div
              role="group"
              aria-label="Periode tagihan"
              className="inline-flex rounded-full border border-white/15 bg-white/10 p-1 text-sm font-medium"
            >
              {(
                [
                  { label: "Bulanan", value: false },
                  { label: "Tahunan", value: true },
                ] as const
              ).map((opt) => {
                const selected = annual === opt.value;
                return (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setAnnual(opt.value)}
                    aria-pressed={selected}
                    className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-white ${
                      selected ? "text-foreground" : "text-white/65 hover:text-white"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="billing-active-pill"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                        className="absolute inset-0 rounded-full bg-white shadow"
                      />
                    )}
                    <span className="relative">{opt.label}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-white/60">
              Pilih tahunan dan <span className="font-semibold text-white">hemat 20%</span>
            </p>
          </div>
        </RevealSection>

        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {PRICING.map((tier, i) => (
            <RevealSection key={tier.name} delay={i * 80} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                className={`flex h-full flex-col rounded-2xl p-6 ${
                  tier.popular
                    ? "border border-white/20 bg-white/[0.07]"
                    : "border border-white/10 bg-white/[0.03]"
                }`}
              >
                {/* Name pill + optional badge */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
                    {tier.name}
                  </span>
                  {tier.popular && (
                    <span className="rounded-full border border-[#5aa8ff]/60 bg-[#0a7cff]/20 px-3 py-1 text-xs font-semibold text-[#9cc4ff]">
                      Paling populer
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mb-2 flex items-baseline gap-1.5">
                  <span className="text-[2rem] font-semibold tracking-tight tabular-nums">
                    {annual ? tier.yearly : tier.monthly}
                  </span>
                  <span className="text-sm text-white/50">/bln</span>
                </div>
                {annual && (
                  <p className="mb-1 text-xs font-medium text-emerald-300">
                    Ditagih tahunan — hemat 20%
                  </p>
                )}
                <p className="mb-6 min-h-[2.5rem] border-b border-white/10 pb-6 text-sm leading-relaxed text-white/55">
                  {tier.desc}
                </p>

                {/* Features */}
                <p className="mb-4 text-sm font-medium text-white/85">Fitur utama:</p>
                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2.5 text-sm">
                      {f.included ? (
                        <IconCheck
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            f.highlight ? "text-[#9cc4ff]" : "text-emerald-300"
                          }`}
                          strokeWidth={3}
                        />
                      ) : (
                        <IconX className="h-4 w-4 shrink-0 mt-0.5 text-white/25" />
                      )}
                      <span
                        className={
                          f.included
                            ? f.highlight
                              ? "font-semibold text-white"
                              : "text-white/85"
                            : "text-white/55 line-through"
                        }
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="cta"
                  className={`w-full border-0 focus-visible:border-white/40 focus-visible:ring-white/60 ${
                    tier.popular
                      ? "bg-[#0a7cff] text-white hover:bg-[#2f92ff]"
                      : "bg-white text-foreground hover:bg-white/90"
                  }`}
                >
                  <a href={tier.href} target="_blank" rel="noopener noreferrer">
                    {tier.cta}
                  </a>
                </Button>
              </motion.div>
            </RevealSection>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-white/60">
          Semua paket termasuk trial 14 hari gratis, tanpa kartu kredit. Upgrade / downgrade kapanpun,
          harga disesuaikan prorata.
        </p>
      </div>
    </section>
  );
}

export function LandingTestimonials() {
  return (
    <section id="testimoni" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <RevealSection className="mb-12 text-center md:mb-14">
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-secondary shadow-sm">
            <IconSparkles className="h-3.5 w-3.5" />
            Testimoni
          </div>
          <h2 className="text-balance text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-foreground md:text-5xl">
            Dipakai oleh <span className="text-secondary">300+ Rental</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
            Mereka sudah merasakan manfaatnya. Giliranmu!
          </p>
        </RevealSection>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <RevealSection key={t.name} delay={i * 60} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl bg-[#edf3fc] p-6">
                <div className="flex gap-1 mb-4" aria-label="Rating 5 dari 5">
                  {Array(5)
                    .fill(0)
                    .map((_, k) => (
                      <IconStar key={k} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                </div>
                <blockquote className="text-[15px] text-foreground/75 leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-5">
                  <div
                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-bold text-sm shrink-0`}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-foreground/50">
                      {t.company} • {t.units}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LandingFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <RevealSection className="mb-10 text-center md:mb-12">
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-secondary shadow-sm">
            <IconSparkles className="h-3.5 w-3.5" />
            Sering Ditanyakan
          </div>
          <h2 className="text-balance text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-foreground md:text-5xl">
            Pertanyaan yang <span className="text-secondary">Sering Diajukan</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
            Masih ingin tahu lebih banyak tentang Sewain? Temukan jawabannya di sini.
          </p>
        </RevealSection>
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <RevealSection key={faq.q} delay={i * 60}>
                <div
                  className={`rounded-2xl transition-colors ${
                    isOpen ? "bg-primary/[0.14]" : "bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className={`flex w-full cursor-pointer flex-row items-center justify-between gap-4 rounded-2xl p-5 text-left transition-colors md:p-6 ${
                      isOpen ? "" : "hover:bg-muted/60"
                    }`}
                  >
                    <span className="font-semibold text-[15px] md:text-base pr-2">{faq.q}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-out ${
                        isOpen
                          ? "rotate-45 bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <IconPlus className="h-4 w-4" />
                    </span>
                  </button>
                  <div className="overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 320, damping: 34 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm leading-relaxed text-foreground/60 md:px-6 md:pb-6">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </RevealSection>
            );
          })}
        </div>

        <RevealSection className="mt-8">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-secondary p-6 text-white sm:flex-row md:p-7">
            <div className="text-center sm:text-left">
              <p className="font-semibold">Masih ada pertanyaan lain?</p>
              <p className="text-sm text-white/70">Tim support siap bantu 7 hari/minggu via WhatsApp.</p>
            </div>
            <Button
              asChild
              size="cta-sm"
              className="shrink-0 border-0 bg-white text-foreground hover:bg-white/90"
            >
              <a
                href="https://wa.me/6281234567890?text=Halo%20Sewain%2C%20saya%20punya%20pertanyaan."
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandWhatsapp className="h-4 w-4" />
                Chat WhatsApp
              </a>
            </Button>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

export function LandingFinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <RevealSection>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-secondary p-8 text-center text-white md:p-14">
            <div className="relative">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                Trial 14 hari • Tanpa kartu kredit
              </p>
              <h2 className="mx-auto mb-4 max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                Bisnis rental kamu layak sistem yang lebih baik
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/80">
                Setup 5 menit, langsung kelola booking, armada, dan bagi hasil mitra dari satu
                dashboard.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild
                  size="cta"
                  className="border-0 bg-white text-foreground hover:bg-white/90"
                >
                  <a href="#pricing">Coba Gratis Sekarang</a>
                </Button>
                <Button
                  asChild
                  size="cta"
                  className="border border-white/40 bg-white/10 text-white hover:bg-white/20"
                >
                  <a href="#cara-kerja">
                    Lihat Cara Kerja <IconArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-xs text-white/65">
                Batal kapanpun • Data tetap bisa diekspor 30 hari setelah berhenti
              </p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

export function LandingFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0f1e] py-12 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-4 mb-10 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <LogoMark size="sm" className="[&_path]:fill-[#0a7cff]" />
              </span>
              <span className="text-xl font-extrabold tracking-tight">Sewain</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Platform SaaS manajemen rental mobil untuk UMKM Indonesia. Booking, keuangan, dan
              mitra — semua terintegrasi.
            </p>
          </div>
          <nav aria-label="Navigasi footer">
            <h4 className="font-bold text-sm mb-3 text-white/90">Navigasi</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h4 className="font-bold text-sm mb-3 text-white/90">Kontak</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a
                  href="mailto:halo@sewain.id"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <IconMail className="w-4 h-4" /> halo@sewain.id
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <IconBrandWhatsapp className="w-4 h-4" /> +62 812-3456-7890
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="flex items-center gap-1.5 font-semibold text-[#9cc4ff] pt-1 hover:text-white transition-colors"
                >
                  Coba Gratis <IconArrowRight className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="h-px mb-6"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(90,168,255,0.35), transparent)",
          }}
        />
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 text-sm text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Sewain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
