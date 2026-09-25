import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { servicios } from "@/data/servicios";

export const metadata: Metadata = { title: "Servicios" };

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title={
          <>
            Todo lo que tu operación necesita, <span className="text-brand-300">un solo proveedor.</span>
          </>
        }
        subtitle="Taller, ingeniería, campo y logística coordinados para reducir tiempos de parada."
        image="/img/ajuste/compresor-air-liquid-08.webp"
      />

      <div className="container-x grid gap-16 py-20 md:py-28 lg:grid-cols-[240px_1fr]">
        {/* Índice fijo */}
        <aside className="hidden lg:block">
          <nav className="sticky top-28" aria-label="Servicios">
            <p className="eyebrow text-muted">Índice</p>
            <ul className="mt-6 space-y-1">
              {servicios.map((s, i) => (
                <li key={s.slug}>
                  <a href={`#${s.slug}`} className="group flex gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-muted transition hover:bg-paper hover:text-ink">
                    <span className="text-brand-500">0{i + 1}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
            <Link href="/contacto" className="mt-8 block rounded-2xl bg-brand-500 p-5 text-white transition hover:bg-brand-600">
              <span className="block text-sm text-white/75">¿Necesitás una cotización?</span>
              <span className="mt-1 block font-bold">Contactanos →</span>
            </Link>
          </nav>
        </aside>

        <div className="space-y-28 md:space-y-36">
          {servicios.map((s, i) => (
            <section key={s.slug} id={s.slug} className="scroll-mt-28">
              <Reveal>
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-6xl font-semibold text-brand-100 md:text-8xl">0{i + 1}</span>
                  <h2 className="text-3xl leading-tight font-semibold md:text-5xl">{s.title}</h2>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="reveal-img relative mt-10 aspect-[16/9] overflow-hidden rounded-[1.75rem]">
                  <Image src={s.image} alt={s.title} fill sizes="(min-width:1024px) 70vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <Reveal>
                  <p className="text-xl leading-relaxed text-ink/80">{s.description}</p>
                  <Link href="/contacto" className="mt-8 inline-flex rounded-full bg-night-900 px-6 py-3 font-bold text-white transition hover:bg-brand-500">
                    Consultar por este servicio →
                  </Link>
                </Reveal>
                <Reveal delay={100}>
                  <ul className="border-t border-line">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-4 border-b border-line py-4 font-medium">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-sm text-brand-500">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
