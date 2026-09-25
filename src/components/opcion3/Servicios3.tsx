"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import Icono from "@/components/opcion2/Icono";
import { servicios } from "@/data/servicios";
import { consultar, useModal } from "./modal";

// Tarjetas de servicios: al tocar una se abre el detalle y desde ahí se pide cotización
export default function Servicios3() {
  const [abierto, setAbierto] = useState<number | null>(null);
  const cerrar = useCallback(() => setAbierto(null), []);
  useModal(abierto !== null, cerrar);
  const s = abierto === null ? null : servicios[abierto];

  return (
    <>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {servicios.map((x, i) => (
          <button
            key={x.slug}
            onClick={() => setAbierto(i)}
            className="group flex h-full flex-col rounded-xl border border-petro-100 bg-white p-6 text-left transition hover:-translate-y-1 hover:border-petro-700 hover:bg-petro-800 hover:text-white hover:shadow-2xl"
          >
            <span className="grid h-14 w-14 place-items-center rounded-lg bg-petro-50 text-petro-800 transition group-hover:bg-white/15 group-hover:text-white">
              <Icono nombre={x.slug} className="h-8 w-8" />
            </span>
            <span className="mt-6 text-lg font-extrabold">{x.title}</span>
            <span className="mt-2 flex-1 text-sm text-neutral-600 group-hover:text-white/75">{x.short}</span>
            <span className="mt-5 text-sm font-extrabold text-acento-500 group-hover:text-acento-300">Consultar →</span>
          </button>
        ))}
      </div>

      {s && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-petro-950/90 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label={s.title} onClick={cerrar}>
          <div className="animate-fade-up grid max-h-[92svh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white md:grid-cols-2" onClick={(e) => e.stopPropagation()}>
            <div className="relative min-h-60 bg-petro-900">
              <Image src={s.image} alt={s.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
              <span className="absolute top-5 left-5 grid h-14 w-14 place-items-center rounded-lg bg-acento-500 text-white">
                <Icono nombre={s.slug} className="h-8 w-8" />
              </span>
            </div>
            <div className="p-8 md:p-10">
              <p className="text-xs font-extrabold tracking-wider text-acento-500 uppercase">Servicio 0{abierto! + 1}</p>
              <h3 className="mt-3 text-3xl font-extrabold text-petro-950">{s.title}</h3>
              <p className="mt-4 text-neutral-600">{s.description}</p>
              <ul className="mt-6 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 font-bold text-petro-950">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-acento-500 text-[10px] text-white">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    const t = s.title;
                    cerrar();
                    setTimeout(() => consultar(`Hola, quiero cotizar: ${t}. `), 50);
                  }}
                  className="rounded-md bg-acento-500 px-6 py-3.5 font-extrabold text-white hover:bg-acento-400"
                >
                  Solicitar cotización de este servicio
                </button>
                <button onClick={cerrar} className="rounded-md border border-petro-100 px-6 py-3.5 font-bold text-petro-800 hover:bg-petro-50">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
