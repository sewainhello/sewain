"use client";

import { Button } from "@/components/ui/button";
import { FEATURES } from "./landing-data";
import { FeatureMockup } from "./landing-mockup";
import { RevealSection } from "./landing-reveal";
import { IconSparkles } from "@tabler/icons-react";

const SPAN_PATTERN = [6, 6, 7, 5];

const SPAN_CLASS: Record<number, string> = {
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  12: "lg:col-span-12",
};

function PlusMark({ className = "" }: { className?: string }) {
  return (
    <span className={`pointer-events-none absolute h-16 w-16 opacity-60 ${className}`} aria-hidden="true">
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-200 to-transparent" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
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
            <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-[#1249c9] shadow-sm">
              <IconSparkles className="h-3.5 w-3.5" />
              Fitur Unggulan
            </div>
            <h2 className="text-4xl font-medium leading-tight tracking-tight text-slate-900 md:text-5xl">
              Semua Operasional
              <br />
              <span className="text-[#1249c9]">Dalam Satu Platform</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
              Tidak perlu Excel, tidak perlu grup WhatsApp. Semua urusan rental terintegrasi di sini.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12">
            {FEATURES.map((f, i) => (
              <RevealSection
                key={f.id}
                delay={i * 80}
                className={SPAN_CLASS[SPAN_PATTERN[i % SPAN_PATTERN.length]]}
              >
                <article className="relative flex h-full min-h-[380px] flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[#f1f5ff] to-[#dde8ff] p-6 pb-0 md:p-8 md:pb-0">
                  <PlusMark className="-right-3 top-4" />
                  <PlusMark className="bottom-6 left-1/3" />

                  <div className="relative z-10">
                    <h3 className="mb-2 text-lg font-medium text-slate-900 md:text-xl">{f.title}</h3>
                    <p className="max-w-sm text-sm leading-relaxed text-slate-500">{f.description}</p>
                  </div>

                  {/* Mockup sits at the bottom and is cropped by the card edge */}
                  <div className="relative z-10 mx-auto mt-8 w-full max-h-[300px] flex-1 overflow-hidden rounded-t-2xl bg-white shadow-[0_20px_50px_-15px_rgba(30,80,200,0.35)] ring-1 ring-blue-100 md:w-[92%]">
                    <FeatureMockup id={f.preview} />
                  </div>
                </article>
              </RevealSection>
            ))}

            {/* Closing CTA card */}
            <RevealSection delay={FEATURES.length * 80} className={SPAN_CLASS[ctaSpan]}>
              <article className="relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a3fc4] via-[#1249c9] to-[#5b7bf5] p-6 text-white md:p-8">
                {/* Decorative mark, top right */}
                <svg
                  className="absolute right-8 top-8 h-28 w-28 text-white md:h-36 md:w-36"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 45 A45 45 0 0 1 45 0 H70 V22 A23 23 0 0 0 47 45 Z" />
                  <path d="M100 55 A45 45 0 0 1 55 100 H30 V78 A23 23 0 0 0 53 55 Z" />
                </svg>

                <div className="relative z-10">
                  <h3 className="mb-2 text-2xl font-medium">Mulai Kelola Rental Anda</h3>
                  <p className="mb-5 max-w-xs text-sm text-white/75">
                    Coba gratis 14 hari. Tanpa kartu kredit, setup 5 menit.
                  </p>
                  <a href="#cta">
                    <Button size="sm" className="border-0 bg-white text-slate-900 hover:bg-white/90">
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