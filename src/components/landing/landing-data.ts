import type { Icon } from "@tabler/icons-react";
import {
  IconCar,
  IconCalendar,
  IconCash,
  IconUsers,
  IconBriefcase,
  IconPhone,
  IconShield,
  IconBolt,
  IconChartBar,
  IconDeviceMobile,
  IconShieldCheck,
} from "@tabler/icons-react";

export const NAV_LINKS = [
  { href: "#fitur", label: "Fitur" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
];

export const TRUST_BADGES = [
  { icon: IconShieldCheck, text: "SSL Encrypted" },
  { icon: IconBolt, text: "Server Indonesia" },
  { icon: IconShieldCheck, text: "Data Terenkripsi" },
  { icon: IconPhone, text: "Support 7 hari/minggu" },
];

export const STATS = [
  { value: 300, suffix: "+", label: "Rental Terdaftar" },
  { value: 5000, suffix: "+", label: "Unit Dikelola" },
  { value: 10000, suffix: "+", label: "Booking/Bulan" },
  { value: 98, suffix: "%", label: "Kepuasan Pengguna" },
];

export const MARQUEE_ITEMS = [
  { icon: IconCar, label: "Anti Double Booking" },
  { icon: IconBriefcase, label: "Manajemen Mitra" },
  { icon: IconChartBar, label: "Laporan Real-Time" },
  { icon: IconCalendar, label: "Booking Otomatis" },
  { icon: IconCash, label: "Keuangan Transparan" },
  { icon: IconBolt, label: "Setup 5 Menit" },
  { icon: IconShield, label: "Data Aman" },
  { icon: IconDeviceMobile, label: "Akses Dari Mana Saja" },
];

export type Feature = {
  id: string;
  icon: Icon;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  preview: "unit" | "booking" | "keuangan" | "mitra";
};

export const FEATURES: Feature[] = [
  {
    id: "unit",
    icon: IconCar,
    label: "Manajemen Unit",
    title: "Pantau Seluruh Armada dari Satu Tempat",
    description:
      "Tambah kendaraan, update status real-time (tersedia, disewa, maintenance), dan lacak performa per unit sekaligus.",
    bullets: [
      "Status unit berubah otomatis saat booking dibuat / diselesaikan",
      "Reminder maintenance sebelum jatuh tempo servis",
      "Laporan profit per unit tahu mana yang paling menguntungkan",
    ],
    preview: "unit",
  },
  {
    id: "booking",
    icon: IconCalendar,
    label: "Booking & Kalender",
    title: "Jadwal Rapi, Tidak Ada yang Bentrok",
    description:
      "Sistem validasi real-time mencegah double booking. Kalender visual memudahkan kamu melihat ketersediaan semua unit.",
    bullets: [
      "Validasi real-time sebelum booking dikonfirmasi error rate <5%",
      "Kalender view bulanan untuk manajemen jadwal visual",
      "Status booking otomatis selesai saat unit dikembalikan",
    ],
    preview: "booking",
  },
  {
    id: "keuangan",
    icon: IconCash,
    label: "Keuangan",
    title: "Uang Masuk Masuk, Uang Keluar Tercatat",
    description:
      "Setiap transaksi tercatat otomatis. Laporan profit/loss per unit tersedia real-time, tanpa Excel.",
    bullets: [
      "Laporan pendapatan bulanan dengan breakdown per kendaraan",
      "Catat pengeluaran operasional (BBM, servis, asuransi) per unit",
      "Grafik tren pendapatan identifikasi musim ramai dan sepi",
    ],
    preview: "keuangan",
  },
  {
    id: "mitra",
    icon: IconUsers,
    label: "Mitra Bagi Hasil",
    title: "Mitra Tenang, Bisnis Lancar",
    description:
      "Kelola unit join dengan mitra secara profesional. Kalkulasi bagi hasil otomatis tidak ada lagi sengketa angka.",
    bullets: [
      "Set persentase bagi hasil per mitra (mis. 60/40 atau 70/30)",
      "Laporan bagi hasil per mitra siap kirim tiap bulan",
      "Track unit milik mitra kepemilikan unit jadi jelas",
    ],
    preview: "mitra",
  },
];

export type Step = {
  step: string;
  title: string;
  body: string;
  items: string[];
};

export const STEPS: Step[] = [
  {
    step: "1",
    title: "Daftar Akun",
    body: "Buat akun bisnis kamu dalam hitungan menit. Masukkan nama usaha, pilih paket, dan mulai trial 14 hari gratis.",
    items: [
      "Email & password bisnis",
      "Nama usaha & kota",
      "Pilih paket sesuai jumlah unit",
    ],
  },
  {
    step: "2",
    title: "Input Data Unit",
    body: "Masukkan data kendaraan dan mitra. Bisa impor dari Excel atau input manual panduan langkah demi langkah tersedia.",
    items: [
      "Plat nomor, tipe, tahun kendaraan",
      "Harga sewa harian / mingguan",
      "Data mitra & persentase bagi hasil",
    ],
  },
  {
    step: "3",
    title: "Mulai Kelola",
    body: "Dashboard siap! Buat booking, pantau status unit, dan lihat laporan keuangan real-time.",
    items: [
      "Buat & kelola booking baru",
      "Monitor arus kas real-time",
      "Laporan otomatis setiap bulan",
    ],
  },
];

export type ComparisonRow = {
  label: string;
  old: boolean | string;
  new: boolean;
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Anti double booking", old: false, new: true },
  { label: "Laporan keuangan otomatis", old: false, new: true },
  { label: "Status unit real-time", old: false, new: true },
  { label: "Manajemen mitra bagi hasil", old: false, new: true },
  { label: "Reminder maintenance", old: false, new: true },
  { label: "Akses dari mana saja", old: "terbatas", new: true },
  { label: "Scalable untuk bisnis besar", old: false, new: true },
];

export type PriceTier = {
  name: string;
  monthly: string;
  yearly: string;
  desc: string;
  features: { text: string; included: boolean; highlight?: boolean }[];
  popular: boolean;
  cta: string;
};

export const PRICING: PriceTier[] = [
  {
    name: "Starter",
    monthly: "Rp 150.000",
    yearly: "Rp 120.000",
    desc: "Untuk rental 1-5 unit",
    features: [
      { text: "Maks 5 unit kendaraan", included: true },
      { text: "Sistem booking & kalender", included: true },
      { text: "Laporan keuangan dasar", included: true },
      { text: "Support via email", included: true },
      { text: "Manajemen mitra", included: false },
      { text: "Multi-cabang", included: false },
    ],
    popular: false,
    cta: "Pilih Starter",
  },
  {
    name: "Growth",
    monthly: "Rp 300.000",
    yearly: "Rp 240.000",
    desc: "Untuk rental 6-15 unit",
    features: [
      { text: "Maks 15 unit kendaraan", included: true },
      { text: "Semua fitur Starter", included: true },
      { text: "Laporan keuangan lengkap", included: true },
      { text: "Manajemen mitra bagi hasil", included: true, highlight: true },
      { text: "Support prioritas (WA)", included: true },
      { text: "Multi-cabang", included: false },
    ],
    popular: true,
    cta: "Pilih Growth",
  },
  {
    name: "Enterprise",
    monthly: "Rp 500.000",
    yearly: "Rp 400.000",
    desc: "Untuk rental 16+ unit",
    features: [
      { text: "Unit tak terbatas", included: true },
      { text: "Semua fitur Growth", included: true },
      { text: "Multi-cabang support", included: true },
      { text: "Akses API", included: true },
      { text: "Dedicated support manager", included: true },
      { text: "Custom onboarding", included: true },
    ],
    popular: false,
    cta: "Hubungi Kami",
  },
];

export type Testimonial = {
  name: string;
  company: string;
  units: string;
  initials: string;
  color: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Pak Budi",
    company: "Budi Rent Car Jakarta",
    units: "8 unit",
    initials: "PB",
    color: "bg-primary text-primary-foreground",
    quote:
      "Dulu booking pakai WhatsApp sering salah. Sekarang pakai Sewain, semua otomatis. Double booking tidak pernah terjadi lagi!",
  },
  {
    name: "Ibu Sari",
    company: "Sari Jaya Mobil Bandung",
    units: "12 unit",
    initials: "IS",
    color: "bg-secondary text-secondary-foreground",
    quote:
      "Laporan keuangan jadi mudah banget. Profit per mobil langsung kelihatan tiap bulan. Mitra pun jadi lebih percaya sama saya.",
  },
  {
    name: "Mas Reza",
    company: "Reza Rental Surabaya",
    units: "15 unit",
    initials: "MR",
    color: "bg-accent text-accent-foreground",
    quote:
      "Saya punya 5 mitra unit, dulu ribut soal hitungan bagi hasil. Sekarang tinggal share laporan dari Sewain, semua setuju.",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Apakah perlu keahlian teknis untuk pakai Sewain?",
    a: "Tidak sama sekali! Sewain dirancang khusus untuk pemilik rental UMKM tanpa latar belakang teknis. Interface sederhana dan intuitif. Tim support siap bantu via WhatsApp.",
  },
  {
    q: "Bagaimana kalau jumlah unit bertambah? Bisa upgrade?",
    a: "Tentu! Upgrade paket bisa kapanpun dari dashboard. Harga disesuaikan secara prorated kamu hanya bayar selisih untuk sisa bulan berjalan. Tidak ada downtime saat upgrade.",
  },
  {
    q: "Apakah data saya aman? Kalau berhenti, datanya bagaimana?",
    a: "Data disimpan di server Indonesia dengan enkripsi standar industri. Jika berhenti berlangganan, kamu masih bisa ekspor semua data ke Excel/CSV selama 30 hari.",
  },
  {
    q: "Apakah ada fitur payment gateway / terima pembayaran online?",
    a: "Saat ini Sewain fokus pada manajemen operasional. Integrasi payment gateway (Midtrans/Xendit) ada di roadmap dan akan hadir dalam update mendatang.",
  },
  {
    q: "Bisa diakses dari handphone?",
    a: "Ya! Sewain adalah platform web yang fully responsive bisa diakses dari browser HP maupun laptop. Tidak perlu install app. Mobile app native (Android) ada di roadmap tahun ini.",
  },
];

export const CTA_FEATURES = [
  "14 hari gratis",
  "Tanpa kartu kredit",
  "Setup 5 menit",
  "Cancel kapanpun",
];
