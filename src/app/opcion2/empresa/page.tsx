import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import PageHeader2 from "@/components/opcion2/PageHeader2";
import Titulo from "@/components/opcion2/Titulo";
import { site, stats } from "@/data/site";

export const metadata: Metadata = { title: "Nosotros · Opción 2" };

// CONFIRMAR: hitos intermedios, misión, visión y valores (mismos borradores que la Opción 1)
const hitos = [
  ["1993", "Nace ESIM en Luján de Cuyo, Mendoza, como taller de servicios metalmecánicos."],
  ["2000s", "Especialización en equipos rotativos y alternativos para la industria de proceso continuo."],
  ["2010s", "Oficina técnica, modelado 3D y fabricación de repuestos a medida."],
  ["Hoy", "Servicio integral de taller, campo, ductos e izaje en Cuyo y la Cuenca Neuquina."],
];

const valores = [
  ["Seguridad", "Ninguna tarea es tan urgente como para no hacerla de forma segura."],
  ["Precisión", "Tolerancias, trazabilidad y control de calidad en cada pieza."],
  ["Compromiso", "Respuesta rápida cuando la planta del cliente lo necesita."],
  ["Oficio", "Personas formadas y orgullosas de lo que saben hacer."],
];

export default function Empresa2() {
  return (
    <>
      <PageHeader2 miga="Nosotros" titulo="Más de 30 años de oficio al servicio de la energía" texto={site.legalName} imagen="/img/ajuste/servicios-15.webp" />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <Titulo eyebrow="Nuestra historia">De un taller en Perdriel a socio técnico de la industria</Titulo>
            <p className="mt-6 leading-relaxed text-neutral-600">
              Desde nuestra base en Luján de Cuyo acompañamos a operadoras y plantas industriales en el mantenimiento, reparación y
              construcción de componentes de máquinas rotantes y alternativas. Hoy combinamos taller de mecanizado, oficina técnica,
              equipos de campo y flota de izaje propia.
            </p>
            <Link href="/opcion2/contacto" className="mt-9 inline-block bg-acento-500 px-7 py-3.5 text-sm font-extrabold tracking-wide text-white uppercase hover:bg-acento-600">
              Contactanos
            </Link>
          </Reveal>
          <Reveal delay={120} className="relative min-h-[440px]">
            <Image src="/img/ajuste/motor-cooper-superior-yac-malargue-11.webp" alt="Técnico ajustando un motor" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
        <div className="mx-auto mt-20 grid max-w-7xl gap-px bg-neutral-200 px-6 md:grid-cols-4">
          {hitos.map(([y, t], i) => (
            <Reveal key={y} delay={i * 80} className="h-full bg-neutral-50 p-8">
              <p className="text-4xl font-extrabold text-acento-500">{y}</p>
              <p className="mt-4 text-sm text-neutral-600">{t}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-neutral-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} dark />
          ))}
        </div>
      </section>

      <section className="bg-neutral-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="bg-white p-10">
              <Titulo eyebrow="Misión">Mantener en marcha a nuestros clientes</Titulo>
              <p className="mt-5 text-neutral-600">Brindar servicios industriales confiables, seguros y a tiempo, que mantengan en marcha sus operaciones.</p>
            </Reveal>
            <Reveal delay={100} className="bg-acento-600 p-10 text-white">
              <Titulo eyebrow="Visión" claro>
                Referentes en la región
              </Titulo>
              <p className="mt-5 text-white/85">Ser la empresa de referencia en mantenimiento y fabricación para la industria energética de Cuyo y Patagonia.</p>
            </Reveal>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} className="border-t-4 border-acento-500 bg-white p-7">
                <h3 className="text-xl font-extrabold">{t}</h3>
                <p className="mt-2 text-sm text-neutral-600">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
