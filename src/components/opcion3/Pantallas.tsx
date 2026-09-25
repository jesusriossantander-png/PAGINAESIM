"use client";

import { useEffect, useRef, useState } from "react";

// Navegación por pantallas completas (estilo "fullpage"):
// cada giro de la rueda, flecha del teclado o deslizamiento salta a la pantalla siguiente.
// Las secciones hijas se marcan con data-pantalla="Nombre".
// En pantallas chicas (celular o ventanas bajas) se usa el desplazamiento normal.
const MEDIA = "(min-width: 1024px) and (min-height: 620px)";
const BLOQUEO_MS = 950;

export default function Pantallas({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const irRef = useRef<(i: number) => void>(() => {});
  const [nombres, setNombres] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    const cont = ref.current;
    if (!cont) return;
    const secs = [...cont.querySelectorAll<HTMLElement>("[data-pantalla]")];
    setNombres(secs.map((s) => s.dataset.pantalla ?? ""));
    const mq = matchMedia(MEDIA);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let bloqueado = false;
    let acumulado = 0;
    let timer: ReturnType<typeof setTimeout>;
    let touchY: number | null = null;

    const actual = () => {
      let i = 0;
      secs.forEach((s, k) => {
        if (s.offsetTop <= scrollY + innerHeight * 0.4) i = k;
      });
      return i;
    };
    const ir = (i: number) => {
      const n = Math.max(0, Math.min(secs.length - 1, i));
      bloqueado = true;
      scrollTo({ top: secs[n].offsetTop, behavior: reduce ? "auto" : "smooth" });
      setIdx(n);
      clearTimeout(timer);
      timer = setTimeout(() => (bloqueado = false), BLOQUEO_MS);
    };
    irRef.current = ir;

    // Si la pantalla actual es más alta que la ventana, primero se recorre normalmente
    const puedeSaltar = (dir: number) => {
      const r = secs[actual()].getBoundingClientRect();
      return dir > 0 ? r.bottom <= innerHeight + 4 : r.top >= -4;
    };

    const onWheel = (e: WheelEvent) => {
      if (!mq.matches || e.ctrlKey) return;
      const dir = Math.sign(e.deltaY);
      if (!dir || !puedeSaltar(dir)) return;
      e.preventDefault();
      if (bloqueado) return;
      acumulado += e.deltaY;
      if (Math.abs(acumulado) > 30) {
        ir(actual() + dir);
        acumulado = 0;
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (!mq.matches) return;
      const t = e.target as HTMLElement;
      if (t.closest("input, textarea, select, [contenteditable]")) return;
      const abajo = ["ArrowDown", "PageDown", " "].includes(e.key) && !e.shiftKey;
      const arriba = ["ArrowUp", "PageUp"].includes(e.key) || (e.key === " " && e.shiftKey);
      if (e.key === "Home") return (e.preventDefault(), ir(0));
      if (e.key === "End") return (e.preventDefault(), ir(secs.length - 1));
      if (!abajo && !arriba) return;
      const dir = abajo ? 1 : -1;
      if (!puedeSaltar(dir)) return;
      e.preventDefault();
      if (!bloqueado) ir(actual() + dir);
    };
    const onTouchStart = (e: TouchEvent) => (touchY = e.touches[0].clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (!mq.matches || touchY === null) return;
      const dy = touchY - e.touches[0].clientY;
      const dir = Math.sign(dy);
      if (dir && puedeSaltar(dir)) e.preventDefault();
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (!mq.matches || touchY === null) return;
      const dy = touchY - e.changedTouches[0].clientY;
      touchY = null;
      if (Math.abs(dy) > 50 && puedeSaltar(Math.sign(dy)) && !bloqueado) ir(actual() + Math.sign(dy));
    };
    const onScroll = () => setIdx(actual());
    const onMq = () => setActivo(mq.matches);

    onMq();
    onScroll();
    addEventListener("wheel", onWheel, { passive: false });
    addEventListener("keydown", onKey);
    addEventListener("touchstart", onTouchStart, { passive: true });
    addEventListener("touchmove", onTouchMove, { passive: false });
    addEventListener("touchend", onTouchEnd);
    addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", onMq);
    return () => {
      clearTimeout(timer);
      removeEventListener("wheel", onWheel);
      removeEventListener("keydown", onKey);
      removeEventListener("touchstart", onTouchStart);
      removeEventListener("touchmove", onTouchMove);
      removeEventListener("touchend", onTouchEnd);
      removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return (
    <div ref={ref}>
      {children}
      {activo && nombres.length > 0 && (
        <nav aria-label="Pantallas" className="fixed top-1/2 right-6 z-40 -translate-y-1/2">
          <p className="mb-4 text-right font-display text-sm font-bold text-white mix-blend-difference">
            {String(idx + 1).padStart(2, "0")}
            <span className="opacity-50"> / {String(nombres.length).padStart(2, "0")}</span>
          </p>
          <ul className="flex flex-col items-end gap-3">
            {nombres.map((n, i) => (
              <li key={n}>
                <button onClick={() => irRef.current(i)} aria-label={`Ir a ${n}`} aria-current={i === idx} className="group flex items-center gap-3">
                  <span className="pointer-events-none rounded bg-indi-950/85 px-2.5 py-1 text-xs font-bold whitespace-nowrap text-white opacity-0 transition group-hover:opacity-100">
                    {n}
                  </span>
                  <span
                    className={`block rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.25)] transition-all duration-300 ${
                      i === idx ? "h-7 w-2.5 bg-acento-400" : "h-2.5 w-2.5 bg-white/40 group-hover:bg-white"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
