"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  dark = false,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  dark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Arranca en el valor final (sin JS o para buscadores) y anima desde 0 al entrar en pantalla
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const start = performance.now();
      const duration = 1600;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        setN(Math.round(value * (1 - Math.pow(1 - p, 4))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <div className={`font-display text-5xl font-semibold tracking-tight tabular-nums md:text-6xl ${dark ? "text-white" : "text-ink"}`}>
        <span className="text-brand-400">{prefix}</span>
        {n.toLocaleString("es-AR")}
        <span className="text-brand-400">{suffix}</span>
      </div>
      <div className={`mt-2 text-sm font-medium ${dark ? "text-white/60" : "text-muted"}`}>{label}</div>
    </div>
  );
}
