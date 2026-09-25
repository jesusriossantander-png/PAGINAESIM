import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icono from "@/components/opcion2/Icono";
import PageHeader2 from "@/components/opcion2/PageHeader2";
import { servicios } from "@/data/servicios";

export const metadata: Metadata = { title: "Servicios · Opción 2" };

export default function Servicios2() {
  return (
    <>
      <PageHeader2 miga="Servicios" titulo="Soluciones integrales, del taller al yacimiento" texto="Taller, ingeniería, campo y logística coordinados para reducir los tiempos de parada." imagen="/img/ajuste/compresor-air-liquid-08.webp" />

      <nav aria-label="Servicios" className="sticky top-20 z-30 border-b border-white/10 bg-neutral-900/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-4 text-sm font-extrabold whitespace-nowrap uppercase">
          {servicios.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="text-white/70 hover:text-acento-300">
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      {servicios.map((s, i) => (
        <section key={s.slug} id={s.slug} className={`scroll-mt-36 py-20 ${i % 2 ? "bg-neutral-100" : "bg-white"}`}>
          <div className={`mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <Reveal className="relative aspect-[4/3] overflow-hidden">
              <Image src={s.image} alt={s.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              <span className="absolute top-0 left-0 grid h-16 w-16 place-items-center bg-acento-500 text-white">
                <Icono nombre={s.slug} className="h-8 w-8" />
              </span>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-sm font-extrabold tracking-wider text-acento-500 uppercase">Servicio 0{i + 1}</p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">{s.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-neutral-600">{s.description}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 font-bold">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-neutral-900 text-xs text-white">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/opcion2/contacto" className="mt-9 inline-block bg-acento-500 px-7 py-3.5 text-sm font-extrabold tracking-wide text-white uppercase hover:bg-acento-600">
                Consultar
              </Link>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
}
