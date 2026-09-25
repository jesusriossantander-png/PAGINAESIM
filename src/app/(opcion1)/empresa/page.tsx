import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import { stats } from "@/data/site";

export const metadata: Metadata = { title: "Nosotros" };

// CONFIRMAR: hitos intermedios, misión, visión y valores son borradores para revisar con gerencia.
const hitos = [
  { year: "1993", text: "Nace ESIM en Luján de Cuyo, Mendoza, como taller de servicios metalmecánicos." },
  { year: "2000s", text: "Especialización en equipos rotativos y alternativos para la industria de proceso continuo." },
  { year: "2010s", text: "Oficina técnica, modelado 3D y fabricación de repuestos a medida." },
  { year: "Hoy", text: "Servicio integral de taller, campo, ductos e izaje en Cuyo y Patagonia." },
];

const valores = [
  { t: "Seguridad", d: "Ninguna tarea es tan urgente como para no hacerla de forma segura." },
  { t: "Precisión", d: "Tolerancias, trazabilidad y control de calidad en cada pieza." },
  { t: "Compromiso", d: "Respuesta rápida cuando la planta del cliente lo necesita." },
  { t: "Oficio", d: "Personas formadas y orgullosas de lo que saben hacer." },
];

export default function EmpresaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nosotros"
        title={
          <>
            Más de 30 años <span className="text-brand-300">de oficio.</span>
          </>
        }
        subtitle="Somos una empresa mendocina de servicios industriales mecánicos que acompaña a la industria energética desde 1993."
        image="/img/ajuste/servicios-15.webp"
      />

      <section className="py-24 md:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow text-brand-500">Nuestra historia</p>
            <h2 className="mt-5 text-4xl leading-[1.05] font-semibold md:text-5xl">
              De un taller en Perdriel a <em>socio técnico de la energía.</em>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted">
              Desde nuestra base en Luján de Cuyo acompañamos a operadoras y plantas industriales en el mantenimiento,
              reparación y construcción de componentes de máquinas rotantes y alternativas. Hoy combinamos taller de
              mecanizado, oficina técnica, equipos de campo y flota de izaje propia.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="reveal-img relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
              <Image src="/img/ajuste/motor-cooper-superior-yac-malargue-11.webp" alt="Técnico ajustando un motor" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-24">
          <div className="grid gap-px overflow-hidden rounded-[1.75rem] bg-line md:grid-cols-4">
          {hitos.map((h, i) => (
            <Reveal key={h.year} delay={i * 100} className="h-full bg-paper p-8">
              <p className="font-display text-4xl font-semibold text-brand-500">{h.year}</p>
              <span className="mt-6 block h-px w-10 bg-brand-500" />
              <p className="mt-6 text-muted">{h.text}</p>
            </Reveal>
          ))}
          </div>
        </div>
      </section>

      <section className="grain bg-night-900 py-24 text-white md:py-32">
        <div className="container-x grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className={`pr-6 ${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""}`}>
              <StatCounter {...s} dark />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal className="h-full rounded-[1.75rem] bg-paper p-10 md:p-14">
            <p className="eyebrow text-brand-500">Misión</p>
            <p className="mt-8 font-display text-2xl leading-snug font-medium md:text-3xl">
              Brindar servicios industriales confiables, seguros y a tiempo, que mantengan en marcha las operaciones de
              nuestros clientes.
            </p>
          </Reveal>
          <Reveal delay={100} className="h-full rounded-[1.75rem] bg-brand-500 p-10 text-white md:p-14">
            <p className="eyebrow text-white/80">Visión</p>
            <p className="mt-8 font-display text-2xl leading-snug font-medium md:text-3xl">
              Ser la empresa de referencia en mantenimiento y fabricación para la industria energética de Cuyo y
              Patagonia.
            </p>
          </Reveal>
        </div>

        <div className="container-x mt-24">
          <Reveal>
            <p className="eyebrow text-brand-500">Valores</p>
            <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
              Lo que nos <em>define.</em>
            </h2>
          </Reveal>
          <div className="mt-14 grid border-t border-line md:grid-cols-2 lg:grid-cols-4">
            {valores.map((v, i) => (
              <Reveal key={v.t} delay={i * 80} className="border-b border-line py-10 md:pr-8 lg:border-b-0">
                <span className="font-display text-sm text-brand-500">0{i + 1}</span>
                <h3 className="mt-4 text-2xl font-semibold">{v.t}</h3>
                <p className="mt-3 text-muted">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="grain relative overflow-hidden rounded-[2rem] bg-night-900 text-white">
          <Image src="/img/ductos/ductos-02.webp" alt="" fill sizes="100vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-night-950 to-transparent" />
          <div className="container-x relative py-24 md:py-32">
            <Reveal className="max-w-2xl">
              <h2 className="text-4xl leading-[1.05] font-semibold md:text-6xl">
                Sumate a un equipo con <em className="!text-brand-300">oficio.</em>
              </h2>
              <p className="mt-6 text-lg text-white/70">Buscamos ajustadores, torneros, soldadores, operadores e ingenieros.</p>
              <Link href="/trabaja-con-nosotros" className="mt-10 inline-flex rounded-full bg-white px-7 py-3.5 font-bold text-night-900 transition hover:bg-brand-300">
                Trabajá con nosotros →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
