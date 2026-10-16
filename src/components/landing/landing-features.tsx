"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FEATURES } from "./landing-data";
import { FeatureMockup } from "./landing-mockup";
import { RevealSection } from "./landing-reveal";
import { IconSparkles, IconCheck } from "@tabler/icons-react";

const SPAN_PATTERN = [6, 6, 7, 5];

const SPAN_CLASS: Record<number, string> = {
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  12: "lg:col-span-12",
};

function PlusMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute h-16 w-16 opacity-60 ${className}`}
      aria-hidden="true"
    >
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-300 to-transparent" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
    </span>
  );
}

export function LandingFeatures() {
  let rowUsed = 0;
  FEATURES.forEach((_, i) => {
    rowUsed = (rowUsed + SPAN_PATTERN[i % SPAN_PATTERN.length]) % 12;
  });
  const ctaSpan = rowUsed === 0 ? 12 : 12 - rowUsed;

  return (
    <section id="fitur" className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <RevealSection className="mb-12 text-center md:mb-14">
            <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-secondary shadow-sm">
              <IconSparkles className="h-3.5 w-3.5" />
              Fitur Unggulan
            </div>
            <h2 className="text-balance text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-slate-900 md:text-5xl">
              Semua Operasional
              <br />
              <span className="text-secondary">Dalam Satu Platform</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
              Tidak perlu Excel, tidak perlu grup WhatsApp. Semua urusan rental terintegrasi di
              sini.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <RevealSection
                  key={f.id}
                  delay={i * 60}
                  className={SPAN_CLASS[SPAN_PATTERN[i % SPAN_PATTERN.length]]}
                >
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="group relative flex h-full min-h-[400px] flex-col overflow-hidden rounded-2xl border border-blue-100/80 bg-[#f3f7ff] p-6 pb-0 shadow-[0_1px_2px_rgba(16,24,40,0.08),0_16px_40px_-20px_rgba(10,63,196,0.22)] md:p-8 md:pb-0"
                  >
                    <PlusMark className="-right-3 top-4" />
                    <PlusMark className="bottom-6 left-1/3" />

                    <div className="relative z-10">
                      <div className="mb-4 inline-flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                          <Icon className="h-4.5 w-4.5" />
                        </span>
                        <span className="rounded-full border border-blue-200/80 bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-secondary">
                          {f.label}
                        </span>
                      </div>
                      <h3 className="mb-2 text-balance text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
                        {f.title}
                      </h3>
                      <p className="max-w-sm text-sm leading-relaxed text-slate-500">
                        {f.description}
                      </p>
                      <ul className="mt-4 max-w-sm space-y-1.5">
                        {f.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-1.5 text-[13px] leading-snug text-slate-600"
                          >
                            <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mockup sits at the bottom and is cropped by the card edge */}
                    <div className="relative z-10 mx-auto mt-6 w-full max-h-[300px] flex-1 overflow-hidden rounded-t-2xl border border-b-0 border-blue-100 bg-white md:w-[92%]">
                      <FeatureMockup id={f.preview} />
                    </div>
                  </motion.article>
                </RevealSection>
              );
            })}

            {/* Closing CTA card */}
            <RevealSection delay={FEATURES.length * 80} className={SPAN_CLASS[ctaSpan]}>
              <article className="relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl bg-secondary p-6 text-white md:p-8">
                {/* Decorative mark, top right */}
                <svg
                  className="absolute right-8 top-8 h-28 w-28 text-white/90 md:h-36 md:w-36"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 45 A45 45 0 0 1 45 0 H70 V22 A23 23 0 0 0 47 45 Z" />
                  <path d="M100 55 A45 45 0 0 1 55 100 H30 V78 A23 23 0 0 0 53 55 Z" />
                </svg>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-16 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
                />

                <div className="relative z-10">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/70">
                    Mulai dalam 5 menit
                  </p>
                  <h3 className="mb-2 text-balance text-2xl font-medium tracking-tight">
                    Mulai Kelola Rental Anda
                  </h3>
                  <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/80">
                    Coba gratis 14 hari. Tanpa kartu kredit, setup 5 menit.
                  </p>
                  <a href="#pricing">
                    <Button
                      size="cta-sm"
                      className="border-0 bg-white text-slate-900 hover:bg-white/90"
                    >
                      Coba Gratis
                    </Button>
                  </a>
                </div>
              </article>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
