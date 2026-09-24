"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  // Arranca en el valor final (sin JS o para buscadores) y anima desde 0 al entrar en pantalla
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setN(value);
        return;
      }
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
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl font-extrabold text-white md:text-6xl">
        {n}
        <span className="text-safety-400">{suffix}</span>
      </div>
      <div className="mt-2 text-sm tracking-wider text-white/70 uppercase">{label}</div>
    </div>
  );
}
