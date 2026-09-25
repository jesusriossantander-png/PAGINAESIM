"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import puntos from "@/data/mapa-puntos.json";
import { bases, mapaArgentina, type Base } from "@/data/bases";

const W = mapaArgentina.width;
const H = mapaArgentina.height;
const HQ = bases[0];
const RADIO = 95; // radio (en unidades del mapa) de la "zona de influencia" que se ilumina
const ROTACION = 6000; // cambio automático de base mientras nadie interactúa

// Mapa punteado interactivo: elegir una base ilumina su zona, dibuja la ruta desde la planta
// y muestra la ficha con los datos cargados en src/data/bases.ts.
export default function MapaPuntos() {
  const [activa, setActiva] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Solo rota cuando el mapa está en pantalla y el usuario no tocó nada
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!auto || !visible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setActiva((i) => (i + 1) % bases.length), ROTACION);
    return () => clearTimeout(t);
  }, [activa, auto, visible]);

  const elegir = (i: number) => {
    setAuto(false);
    setActiva(i);
  };

  const foco = bases[hover ?? activa];
  const b = bases[activa];
  const r = puntos.step * 0.36;

  return (
    <div ref={ref} className="grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
      {/* MAPA */}
      <div className="relative mx-auto w-full max-w-[440px]">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full select-none" role="img" aria-label="Mapa de Argentina con las bases de ESIM">
          {puntos.puntos.map(([x, y], i) => {
            const d = Math.hypot(x - foco.x, y - foco.y);
            const cerca = d < RADIO;
            const t = cerca ? 1 - d / RADIO : 0;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={cerca ? r * (1 + t * 0.35) : r}
                fill={cerca ? "#0a7a42" : "#2b2f2d"}
                fillOpacity={cerca ? 0.35 + t * 0.65 : 1}
                style={{ transition: "fill .5s, fill-opacity .5s, r .5s" }}
              />
            );
          })}

          {/* Rutas desde la planta de Luján de Cuyo */}
          {bases.slice(1).map((x) => {
            const on = x.id === foco.id;
            const mx = (HQ.x + x.x) / 2 + (x.y - HQ.y) * 0.3;
            const my = (HQ.y + x.y) / 2 - (x.x - HQ.x) * 0.3;
            return (
              <path
                key={x.id}
                d={`M${HQ.x},${HQ.y} Q${mx},${my} ${x.x},${x.y}`}
                fill="none"
                stroke="#0a7a42"
                strokeWidth={on ? 4 : 2}
                strokeOpacity={on ? 1 : 0.35}
                strokeDasharray="8 8"
                className="mapa-flujo"
                style={{ transition: "stroke-width .4s, stroke-opacity .4s" }}
              />
            );
          })}

          {bases.map((x, i) => {
            const on = i === activa;
            const sobre = i === hover;
            return (
              <g
                key={x.id}
                tabIndex={0}
                role="button"
                aria-label={`${x.ciudad}, ${x.provincia}`}
                aria-pressed={on}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                onClick={() => elegir(i)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && elegir(i)}
                className="cursor-pointer outline-none"
              >
                <circle cx={x.x} cy={x.y} r={40} fill="#0a7a42" className="mapa-pulso" style={{ transformOrigin: `${x.x}px ${x.y}px` }} />
                <circle cx={x.x} cy={x.y} r={on || sobre ? 16 : 11} fill={on ? "#0a7a42" : "#ffffff"} stroke="#0a7a42" strokeWidth={5} style={{ transition: "r .3s, fill .3s" }} />
                {(on || sobre) && (
                  <g style={{ pointerEvents: "none" }}>
                    <rect x={x.x - (x.ciudad.length * 13 + 26) / 2} y={x.y - 66} width={x.ciudad.length * 13 + 26} height={40} rx={4} fill="#111" />
                    <path d={`M${x.x - 8},${x.y - 27} L${x.x + 8},${x.y - 27} L${x.x},${x.y - 19} Z`} fill="#111" />
                    <text x={x.x} y={x.y - 39} textAnchor="middle" fill="#fff" fontSize={22} fontWeight={800} style={{ fontFamily: "var(--font-sans)" }}>
                      {x.ciudad}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
        <p className="mt-3 text-center text-xs text-neutral-500">Tocá un punto o una pestaña para ver cada base</p>
      </div>

      {/* FICHA */}
      <div>
        <div role="tablist" aria-label="Bases" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {bases.map((x, i) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={i === activa}
              onClick={() => elegir(i)}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className={`relative overflow-hidden px-3 py-3 text-left text-sm font-extrabold transition ${
                i === activa ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {x.ciudad}
              {i === activa && auto && visible && (
                <span key={activa} className="absolute bottom-0 left-0 h-1 bg-acento-400" style={{ animation: `grow ${ROTACION}ms linear forwards` }} />
              )}
            </button>
          ))}
        </div>
        <Ficha key={b.id} base={b} />
      </div>
      <style>{`@keyframes grow{from{width:0}to{width:100%}}`}</style>
    </div>
  );
}

function Ficha({ base: b }: { base: Base }) {
  const datos = [
    ["Dirección", b.direccion],
    ["Teléfono", b.telefono],
    ["Email", b.email],
    ["Responsable", b.responsable],
    ["Personal", b.personal],
  ].filter(([, v]) => v);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    b.direccion ? `${b.direccion}, ${b.provincia}` : `${b.ciudad}, ${b.provincia}, Argentina`,
  )}`;

  return (
    <article className="animate-fade-up mt-4 border border-neutral-200 bg-white">
      {b.foto && (
        <div className="relative aspect-[16/7] overflow-hidden">
          <Image src={b.foto} alt={`Base ${b.ciudad}`} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <p className="absolute bottom-4 left-5 text-xs font-extrabold tracking-wider text-white uppercase">{b.cuenca}</p>
        </div>
      )}
      <div className="p-6 md:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-2xl font-extrabold">{b.ciudad}</h3>
          <span className="text-sm font-bold text-neutral-500">
            {b.provincia}
            {!b.foto && ` · ${b.cuenca}`}
          </span>
        </div>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {b.sitios.map((s) => (
            <li key={s.nombre} className="border-l-4 border-acento-500 bg-neutral-50 px-4 py-3">
              <p className="font-extrabold">{s.nombre}</p>
              <p className="text-sm text-neutral-600">{s.detalle}</p>
            </li>
          ))}
        </ul>

        {datos.length > 0 && (
          <dl className="mt-5 grid gap-x-6 gap-y-3 border-t border-neutral-200 pt-5 text-sm sm:grid-cols-2">
            {datos.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs font-bold tracking-wider text-neutral-500 uppercase">{k}</dt>
                <dd className="mt-0.5 font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        )}

        {!!b.servicios?.length && (
          <div className="mt-5">
            <p className="text-xs font-bold tracking-wider text-neutral-500 uppercase">Servicios desde esta base</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {b.servicios.map((s) => (
                <li key={s} className="bg-acento-50 px-3 py-1.5 text-xs font-bold text-acento-700">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {!!b.equipos?.length && (
          <div className="mt-5">
            <p className="text-xs font-bold tracking-wider text-neutral-500 uppercase">Equipamiento</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {b.equipos.map((s) => (
                <li key={s} className="bg-neutral-100 px-3 py-1.5 text-xs font-bold text-neutral-700">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="bg-neutral-900 px-5 py-3 text-xs font-extrabold tracking-wide text-white uppercase transition hover:bg-acento-600">
            Cómo llegar ↗
          </a>
          {b.telefono && (
            <a href={`tel:${b.telefono.replace(/[^+\d]/g, "")}`} className="border-2 border-neutral-900 px-5 py-2.5 text-xs font-extrabold tracking-wide uppercase transition hover:bg-neutral-900 hover:text-white">
              Llamar
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
