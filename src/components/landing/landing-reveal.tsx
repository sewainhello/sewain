"use client";

// ─── Landing — scroll reveal & animated counter ──────────────────────────────
// Ported 1:1 from the old monolitik page.tsx (RevealSection, CounterStat) so the
// homepage keeps its reveal-on-scroll & count-up behavior.

import { useEffect, useRef, useState, type ReactNode } from "react";

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
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-primary font-bold">
        {count.toLocaleString("id")}
        {suffix}
      </div>
      <div className="text-base-content/50 text-sm mt-1">{label}</div>
    </div>
  );
}
