import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Empresa" };

// CONFIRMAR: hitos, misión, visión y valores son borradores para revisar con gerencia.
const hitos = [
  { year: "1993", text: "Fundación de ESIM en Luján de Cuyo, Mendoza." },
  { year: "2000s", text: "Ampliación del taller y especialización en máquinas rotantes y alternativas." },
  { year: "2010s", text: "Incorporación de oficina técnica, diseño 3D y fabricación de repuestos a medida." },
  { year: "Hoy", text: "Servicios integrales de taller, campo, ductos y logística para Oil & Gas e industria." },
];

const valores = [
  { title: "Seguridad", text: "Ninguna tarea es tan urgente como para no hacerla de forma segura." },
  { title: "Calidad", text: "Precisión y trazabilidad en cada pieza y cada intervención." },
  { title: "Compromiso", text: "Respuesta rápida cuando la planta del cliente lo necesita." },
  { title: "Equipo", text: "Personas formadas y orgullosas de su oficio." },
];

export default function EmpresaPage() {
  return (
    <>
      <PageHeader
        title="Nuestra empresa"
        subtitle={`${site.legalName}: más de 30 años de oficio metalmecánico al servicio de la industria.`}
        image="/img/ajuste/servicios-15.webp"
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <SectionTitle
              eyebrow="Historia"
              title="De un taller mendocino a socio estratégico de la energía"
              intro="Desde nuestra base en Perdriel, Luján de Cuyo, acompañamos a operadoras y plantas industriales en el mantenimiento, reparación y construcción de componentes de máquinas rotantes y alternativas de distintas potencias."
            />
          </Reveal>
          <Reveal delay={120}>
            <ol className="relative border-l-2 border-brand-500/30 pl-8">
              {hitos.map((h) => (
                <li key={h.year} className="mb-10 last:mb-0">
                  <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-4 border-white bg-brand-500" />
                  <p className="font-display text-xl font-extrabold text-brand-600">{h.year}</p>
                  <p className="mt-1 text-steel-500">{h.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="bg-steel-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2">
          <Reveal className="rounded-2xl bg-white p-10 shadow-sm">
            <p className="text-sm font-bold tracking-[0.2em] text-brand-500 uppercase">Misión</p>
            <p className="mt-4 text-xl leading-relaxed text-ink-800">
              Brindar servicios industriales metalmecánicos confiables, seguros y a tiempo, que mantengan en marcha
              las operaciones de nuestros clientes.
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-2xl bg-ink-900 p-10 text-white shadow-sm">
            <p className="text-sm font-bold tracking-[0.2em] text-safety-400 uppercase">Visión</p>
            <p className="mt-4 text-xl leading-relaxed">
              Ser la empresa de referencia en servicios de mantenimiento y fabricación para la industria energética
              de la región de Cuyo y el país.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle eyebrow="Valores" title="Lo que nos define" center />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="rounded-2xl border border-steel-100 p-8">
                <div className="mb-5 h-1 w-10 bg-brand-500" />
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-steel-500">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-24">
        <Image src="/img/ductos/ductos-11.webp" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle
              light
              eyebrow="HSE"
              title="Seguridad, salud ocupacional y ambiente"
              intro="Nuestra política de HSE se basa en la prevención: análisis de riesgos antes de cada tarea, capacitación continua y el uso correcto de los elementos de protección personal."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
