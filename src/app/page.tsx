import type { Metadata } from "next";
import { LandingNavbar } from "@/components/landing/landing-navbar";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingFeatures } from "@/components/landing/landing-features";
import {
  LandingSocialProof,
  LandingHow,
  LandingCompare,
  LandingPricing,
  LandingTestimonials,
  LandingFaq,
  LandingFinalCta,
  LandingFooter,
} from "@/components/landing/landing-sections";

export const metadata: Metadata = {
  title: "Sewain — Manajemen Sewa Kendaraan UMKM dalam Satu Platform",
  description:
    "SaaS terpusat untuk UMKM rental kendaraan: booking otomatis, keuangan transparan, mitra bagi hasil semua dalam satu platform.",
};

export default function Home() {
  return (
    <div className="landing">
      <LandingNavbar />
      <main>
        <LandingHero />
        <LandingSocialProof />
        <LandingFeatures />
        <LandingHow />
        <LandingCompare />
        <LandingPricing />
        <LandingTestimonials />
        <LandingFaq />
        <LandingFinalCta />
      </main>
      <LandingFooter />
    </div>
  );
}
