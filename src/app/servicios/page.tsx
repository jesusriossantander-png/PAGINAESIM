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
        title="Servicios"
        subtitle="Taller, ingeniería, campo y logística: todo lo que tu operación necesita, con un solo proveedor."
        image="/img/ajuste/compresor-air-liquid-08.webp"
      />
      <div className="py-12">
        {servicios.map((s, i) => (
          <section key={s.slug} id={s.slug} className="scroll-mt-24 py-14">
            <div
              className={`mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={s.image} alt={s.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </Reveal>
              <Reveal delay={120}>
                <p className="font-display text-sm font-bold tracking-[0.2em] text-brand-500 uppercase">
                  {String(i + 1).padStart(2, "0")} · Servicio
                </p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-steel-500">{s.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-ink-800">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500 text-xs text-white">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contacto" className="rounded-lg bg-ink-900 px-6 py-3 font-semibold text-white hover:bg-ink-700">
                    Consultar
                  </Link>
                  <Link href="/obras" className="rounded-lg px-6 py-3 font-semibold text-brand-600 hover:bg-steel-50">
                    Ver obras →
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
