"use client";

// ─── Landing — scroll reveal & animated counter ──────────────────────────────
// Ported 1:1 from the old monolitik page.tsx (RevealSection, CounterStat) so the
// homepage keeps its reveal-on-scroll & count-up behavior.

import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";

// ─── RevealSection ─────────────────────────────────────────────────────────────

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function RevealSection({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── CounterStat ────────────────────────────────────────────────────────────────

type CounterProps = {
  value: number;
  suffix: string;
  label: string;
};

export function CounterStat({ value, suffix, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => Math.floor(v).toLocaleString("id"));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, value, count]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-primary">
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
      <div className="text-foreground/50 text-sm mt-1">{label}</div>
    </div>
  );
}
