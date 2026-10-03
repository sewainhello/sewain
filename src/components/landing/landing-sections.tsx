"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RevealSection } from "./landing-reveal";
import {
  STEPS,
  COMPARISON_ROWS,
  PRICING,
  TESTIMONIALS,
  FAQS,
  NAV_LINKS,
} from "./landing-data";
import {
  IconCheck,
  IconX,
  IconArrowRight,
  IconBrandWhatsapp,
  IconMail,
  IconStar,
  IconSparkles
} from "@tabler/icons-react";
import { LogoMark } from "@/components/logo-mark";

const LIME = "#0051ff";

export function LandingHow() {
  return (
    <section id="cara-kerja" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <RevealSection className="mb-12 text-center md:mb-14">
            <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-[#1249c9] shadow-sm">
              <IconSparkles className="h-3.5 w-3.5" />
              Cara Kerja
            </div>
            <h2 className="text-4xl font-medium leading-tight tracking-tight text-slate-900 md:text-5xl">
              Kami buat prosesnya
              <br />
              <span className="text-[#1249c9]">mudah untuk Anda</span>
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
              <RevealSection key={s.step} delay={i * 120} className="h-full">
                <div
                  className={`relative h-full min-h-[26rem] overflow-hidden rounded-2xl ${corner} p-6 flex flex-col ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-border/70 text-foreground"
                  }`}
                >
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-6 ${
                      active
                        ? "bg-background text-primary"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {s.step}
                  </span>

                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p
                    className={`text-sm leading-relaxed max-w-[15rem] ${
                      active
                        ? "text-primary-foreground/70"
                        : "text-foreground/55"
                    }`}
                  >
                    {s.body}
                  </p>

                  <div
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 w-[70%] translate-y-6 rounded-xl bg-background text-foreground shadow-xl p-4 ${
                      active
                        ? ""
                        : i === 0
                          ? "-rotate-6 -translate-x-[45%]"
                          : "rotate-6 -translate-x-[55%]"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-neutral text-neutral-foreground flex items-center justify-center text-[10px]">
                        ●
                      </span>
                      <div className="leading-tight">
                        <p className="text-[11px] font-semibold">{s.title}</p>
                        <p className="text-[9px] text-foreground/40">
                          Detail langkah
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mb-3">
                      {s.items.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-1.5 text-[10px] text-foreground/60"
                        >
                          <IconCheck className="w-3 h-3 text-success shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {/* Barcode-style strip */}
                    <div
                      className="h-10 rounded-sm"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(90deg, currentColor 0 2px, transparent 2px 4px, currentColor 4px 5px, transparent 5px 8px, currentColor 8px 11px, transparent 11px 13px)",
                      }}
                    />
                  </div>
                </div>
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
    <section id="bandingkan" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <RevealSection className="mb-12 text-center md:mb-14">
            <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-[#1249c9] shadow-sm">
              <IconSparkles className="h-3.5 w-3.5" />
              Perbandingan Fitur
            </div>
            <h2 className="text-4xl font-medium leading-tight tracking-tight text-slate-900 md:text-5xl">Kenapa Harus Kami? <span className="text-[#1249c9]">Sini Kami Jelasin!</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
              Masih pakai WhatsApp dan Excel dengan cara lama? Lihat bedanya.
            </p>
        </RevealSection>
        <RevealSection>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="py-4 px-4 w-1/2 text-left">Fitur</th>
                  <th className="py-4 px-4 text-center">Excel / WA</th>
                  <th className="py-4 px-4 text-center">
                    <span className="font-bold text-primary">Sewain</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-t border-border ${i % 2 === 1 ? "bg-muted/40" : ""}`}
                  >
                    <td className="py-3.5 px-4 text-sm">{row.label}</td>
                    <td className="py-3.5 px-4 text-center">
                      {row.old === true ? (
                        <IconCheck className="w-5 h-5 text-success mx-auto" />
                      ) : row.old === false ? (
                        <IconX className="w-5 h-5 text-foreground/20 mx-auto" />
                      ) : (
                        <span className="text-xs text-foreground/40">
                          {row.old}
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <IconCheck className="w-5 h-5 text-success mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

export function LandingPricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white"
    >
      {/* Faint grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,255,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(217,255,0,0.08) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-8">
        {/* Header: title left, billing toggle right */}
        <RevealSection className="mb-12 flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Ada paket yang
            <br className="hidden md:block" /> cocok untuk Anda
          </h2>

          <div className="flex flex-col items-center text-center">
            <div
              role="group"
              aria-label="Periode tagihan"
              className="inline-flex rounded-full bg-neutral-300 p-1 text-sm font-medium text-neutral-900"
            >
              <button
                type="button"
                onClick={() => setAnnual(false)}
                aria-pressed={!annual}
                className={`rounded-full px-5 py-1.5 transition-colors ${
                  !annual ? "bg-white shadow" : "text-neutral-600"
                }`}
              >
                Bulanan
              </button>
              <button
                type="button"
                onClick={() => setAnnual(true)}
                aria-pressed={annual}
                className={`rounded-full px-5 py-1.5 transition-colors ${
                  annual ? "bg-white shadow" : "text-neutral-600"
                }`}
              >
                Tahunan
              </button>
            </div>
            <p className="mt-2 text-xs text-white/60">
              Pilih tahunan dan hemat 12%
            </p>
          </div>
        </RevealSection>

        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {PRICING.map((tier, i) => (
            <RevealSection key={tier.name} delay={i * 100} className="h-full">
              <div
                className={`flex h-full flex-col rounded-xl p-6 backdrop-blur ${
                  tier.popular
                    ? "border bg-neutral-900/90"
                    : "border border-white/10 bg-neutral-800/70"
                }`}
                style={tier.popular ? { borderColor: `${LIME}66` } : undefined}
              >
                {/* Name pill + optional badge */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                    {tier.name}
                  </span>
                  {tier.popular && (
                    <span
                      className="rounded-full border px-3 py-1 text-xs"
                      style={{ borderColor: LIME, color: LIME }}
                    >
                      Paling populer
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mb-3 flex items-baseline gap-1">
                  <span className="text-5xl font-medium tracking-tight">
                    {annual && tier.name ? tier.name : tier.monthly}
                  </span>
                  {tier.monthly !== "Gratis" && tier.monthly !== "Free" && (
                    <span className="text-sm text-white/50">/bln</span>
                  )}
                </div>
                <p className="mb-6 min-h-[2.5rem] border-b border-white/10 pb-6 text-sm leading-relaxed text-white/50">
                  {tier.desc}
                </p>

                {/* Features */}
                <p className="mb-4 text-sm">Fitur utama:</p>
                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5 text-sm">
                      {f.included ? (
                        <IconCheck className="h-4 w-4 shrink-0 text-white" />
                      ) : (
                        <IconX className="h-4 w-4 shrink-0 text-white/25" />
                      )}
                      <span className={f.included ? "" : "text-white/35"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA: lime for popular, white for the rest */}
                <button
                  type="button"
                  className="w-full rounded-full py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  style={{ backgroundColor: tier.popular ? LIME : "#fff" }}
                >
                  {tier.cta}
                </button>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LandingTestimonials() {
  return (
    <section id="testimoni" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <RevealSection className="mb-12 text-center md:mb-14">
            <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-[#1249c9] shadow-sm">
              <IconSparkles className="h-3.5 w-3.5" />
              Testimoni
            </div>
            <h2 className="text-4xl font-medium leading-tight tracking-tight text-slate-900 md:text-5xl"> Dipakai oleh <span className="text-[#1249c9]">300+ Rental</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
              Mereka sudah merasakan manfaatnya. Giliranmu!
            </p>
          </RevealSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <RevealSection key={t.name} delay={i * 100} className="h-full">
              <div className="card bg-muted border border-border h-full">
                <div className="card-body">
                  <div className="flex gap-0.5 mb-3">
                    {Array(5)
                      .fill(0)
                      .map((_, k) => (
                        <IconStar
                          key={k}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-bold text-sm`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-foreground/50">
                        {t.company} • {t.units}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LandingFaq() {
  return (
    <section id="faq" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <RevealSection className="mb-12 text-center md:mb-14">
            <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-[#1249c9] shadow-sm">
              <IconSparkles className="h-3.5 w-3.5" />
              Sering Ditanyakan
            </div>
            <h2 className="text-4xl font-medium leading-tight tracking-tight text-slate-900 md:text-5xl">
              Pertanyaan yang <span className="text-[#1249c9]">Sering Diajukan</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
              Masih ingin tahu lebih banyak tentang Sewain? Temukan jawabannya di sini.
            </p>
        </RevealSection>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <RevealSection key={faq.q} delay={i * 60}>
              <details className="group card bg-background border border-border">
                <summary className="cursor-pointer card-body py-5 flex flex-row items-center justify-between [&::-webkit-details-marker]:hidden">
                  <span className="font-semibold text-sm md:text-base pr-4">
                    {faq.q}
                  </span>
                  <span className="text-xl text-foreground/40 group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// export function LandingCta() {
//   return (
//     <section
//       id="cta"
//       className="relative isolate overflow-hidden bg-gradient-to-br from-[#0a7cff] via-[#1685f7] to-[#3d9bff] py-20 text-white"
//     >
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 opacity-25"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
//           backgroundSize: "72px 72px",
//           maskImage:
//             "radial-gradient(ellipse at center, black 25%, transparent 78%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse at center, black 25%, transparent 78%)",
//         }}
//       />
//       <div className="container relative z-10 mx-auto px-4 md:px-8">
//         <RevealSection>
//           <div className="mx-auto max-w-2xl rounded-lg border border-white/60 bg-white p-6 text-slate-900 shadow-[0_24px_70px_-24px_rgba(10,60,160,0.55)] md:p-10">
//             <div className="mb-8 text-center">
//               <h2 className="mb-3 text-3xl font-extrabold md:text-4xl">
//                 Bisnis Rental Kamu Layak Sistem yang Lebih Baik
//               </h2>
//               <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600">
//                 Isi data singkat, lalu tim Sewain akan membantu menjawab
//                 pertanyaan dan mengenalkan solusi yang tepat untuk rental kamu.
//               </p>
//             </div>
//             <form
//               className="space-y-5"
//               onSubmit={(event) => {
//                 event.preventDefault();
//                 const formData = new FormData(event.currentTarget);
//                 const name = String(formData.get("name") ?? "").trim();
//                 const phone = String(formData.get("phone") ?? "").trim();
//                 const message = encodeURIComponent(
//                   `Halo Sewain, saya ${name}. Nomor WhatsApp saya ${phone}. Saya ingin tahu lebih banyak tentang layanan Sewain.`,
//                 );
//                 window.open(
//                   `https://wa.me/6281234567890?text=${message}`,
//                   "_blank",
//                   "noopener,noreferrer",
//                 );
//               }}
//             >
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="cta-name"
//                     className="mb-2 block text-sm font-medium text-slate-700"
//                   >
//                     Nama
//                   </label>
//                   <input
//                     id="cta-name"
//                     name="name"
//                     type="text"
//                     autoComplete="name"
//                     required
//                     placeholder="Nama kamu"
//                     className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-[#0a7cff] focus:ring-2 focus:ring-[#0a7cff]/20"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="cta-phone"
//                     className="mb-2 block text-sm font-medium text-slate-700"
//                   >
//                     Nomor WhatsApp
//                   </label>
//                   <input
//                     id="cta-phone"
//                     name="phone"
//                     type="tel"
//                     autoComplete="tel"
//                     required
//                     placeholder="08xxxxxxxxxx"
//                     className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-[#0a7cff] focus:ring-2 focus:ring-[#0a7cff]/20"
//                   />
//                 </div>
//               </div>
//               <Button
//                 type="submit"
//                 size="lg"
//                 className="w-full gap-2 border-0 bg-[#0a7cff] font-bold text-white hover:bg-[#086de0]"
//               >
//                 <IconBrandWhatsapp className="h-5 w-5" />
//                 Hubungi Sewain via WhatsApp
//               </Button>
//               <p className="text-center text-xs text-slate-500">
//                 14 hari gratis, tanpa kartu kredit.
//               </p>
//             </form>
//           </div>
//         </RevealSection>
//       </div>
//     </section>
//   );
// }

export function LandingFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] py-12 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,255,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(217,255,0,0.08) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-4 mb-10 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-extrabold tracking-tight">
                Sewain
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              Platform SaaS manajemen rental mobil untuk UMKM Indonesia.
              Booking, keuangan, dan mitra — semua terintegrasi.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-3">Navigasi</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-3">Kontak</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <IconMail className="w-4 h-4" /> halo@Sewain.id
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <IconBrandWhatsapp className="w-4 h-4" /> +62 812-3456-7890
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary font-medium pt-1 hover:underline"
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
            background:
              "linear-gradient(90deg, transparent, rgba(27, 44, 193, 0.3), transparent)",
          }}
        />
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-white/40 md:flex-row">
          <p>© 2026 Sewain. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Syarat &amp; Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
