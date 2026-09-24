"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
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
      const duration = 1400;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
      <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/25 text-accent-400">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 12h16M12 4v16" />
        </svg>
      </span>
      <div>
        <div className="font-display text-3xl font-bold text-white md:text-4xl">
          {prefix}
          {n.toLocaleString("es-AR")}
          <span className="text-accent-400">{suffix}</span>
        </div>
        <div className="mt-1 text-sm text-white/65">{label}</div>
      </div>
    </div>
  );
}
