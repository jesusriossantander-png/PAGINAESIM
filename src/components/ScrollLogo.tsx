"use client";

import { useEffect, useRef, useState } from "react";

// Símbolo de ESIM flotante (mismo comportamiento que el tablero de desempeño de ESIM-Server):
// se llena en sentido horario al bajar, se vacía al subir, al llegar al final se ilumina
// y con un clic vuelve al inicio.
export default function ScrollLogo() {
  const colorRef = useRef<HTMLImageElement>(null);
  const [pct, setPct] = useState(0);
  const lleno = pct >= 99.5;

  useEffect(() => {
    let pend = false;
    const pintar = () => {
      pend = false;
      const h = document.documentElement.scrollHeight - innerHeight;
      const p = h > 0 ? Math.min(1, Math.max(0, scrollY / h)) : 1;
      // La máscara se escribe directo en el estilo: con una variable CSS el navegador no la repinta.
      const m = p >= 0.995 ? "none" : `conic-gradient(#000 ${(p * 360).toFixed(1)}deg, transparent 0)`;
      if (colorRef.current) {
        colorRef.current.style.webkitMaskImage = m;
        colorRef.current.style.maskImage = m;
      }
      setPct(Math.round(p * 1000) / 10);
    };
    const pedir = () => {
      if (!pend) {
        pend = true;
        requestAnimationFrame(pintar);
      }
    };
    addEventListener("scroll", pedir, { passive: true });
    addEventListener("resize", pedir);
    pintar();
    return () => {
      removeEventListener("scroll", pedir);
      removeEventListener("resize", pedir);
    };
  }, []);

  const subir = () =>
    scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });

  return (
    <button
      type="button"
      onClick={subir}
      title={lleno ? "Llegaste al final · clic para volver al inicio" : `Recorrido: ${Math.round(pct)} % · clic para volver al inicio`}
      aria-label={lleno ? "Llegaste al final de la página. Volver al inicio" : `Recorrido de la página: ${Math.round(pct)} %. Volver al inicio`}
      className={`progreso fixed bottom-4 left-4 z-[55] h-16 w-16 rounded-full bg-white p-2 shadow-[0_4px_16px_rgba(11,11,11,0.22)] transition-[box-shadow,transform] duration-500 hover:scale-105 sm:h-[4.25rem] sm:w-[4.25rem] ${
        lleno ? "lleno" : ""
      }`}
    >
      <span aria-hidden="true" className="relative block h-full w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/simbolo.png" alt="" className="absolute inset-0 h-full w-full object-contain opacity-20 grayscale" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={colorRef} src="/simbolo.png" alt="" className="color absolute inset-0 h-full w-full object-contain" />
      </span>
    </button>
  );
}
