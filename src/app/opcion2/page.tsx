import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import CotizarBanda from "@/components/opcion2/CotizarBanda";
import Icono from "@/components/opcion2/Icono";
import Titulo from "@/components/opcion2/Titulo";
import MapaPuntos from "@/components/opcion2/MapaPuntos";
import { servicios } from "@/data/servicios";
import { clients, indicadores, site } from "@/data/site";

const proyectos = [
  { src: "/img/ajuste/bomba-b8-ypf-poliducto-06.webp", titulo: "Bomba B8 · Poliducto YPF", texto: "Desmontaje y traslado con hidrogrúa de la bomba del poliducto." },
  { src: "/img/ajuste/compresor-air-liquid-08.webp", titulo: "Compresor · Air Liquide", texto: "Overhaul de compresor industrial con ajuste y puesta en marcha en planta." },
  { src: "/img/izaje/izaje-02.webp", titulo: "Tendido de ductos", texto: "Zanjeo, soldadura, bajada y montaje de cañerías con grúas propias." },
];

export default function Opcion2() {
  return (
    <>
      {/* HERO */}
      <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden bg-neutral-900 text-white">
        <Image src="/img/izaje/izaje-02.webp" alt="Montaje de ducto con grúas al amanecer" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-40 pb-40">
          <Reveal className="max-w-3xl">
            <h1 className="text-5xl leading-[1.02] font-extrabold md:text-7xl">
              Mantenimiento industrial que mueve la energía
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Más de 30 años haciendo nuestra parte para que las operaciones de petróleo, gas e industria sigan en marcha, con seguridad y a tiempo.
            </p>
            <a href="#servicios" className="mt-9 inline-flex items-center gap-3 bg-acento-500 px-8 py-4 font-extrabold tracking-wide uppercase transition hover:bg-acento-600">
              Conocé nuestros servicios <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-black/40 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {["Acondicionamiento de ductos", "Equipos rotativos", "Oficina técnica y 3D"].map((t) => (
              <a key={t} href="#servicios" className="flex items-center gap-3 py-5 font-bold sm:justify-center">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-acento-500 text-xs">✓</span>
                {t}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-16 gap-y-6 px-6 py-10">
          <p className="max-w-[16rem] text-lg leading-snug font-extrabold">Confían en nosotros las principales operadoras</p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            {clients
              .filter((c, i, arr) => c.logo && arr.findIndex((x) => x.logo === c.logo) === i)
              .map((c) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={c.name} src={c.logo!} alt={c.name} className="h-10 w-auto" />
              ))}
            <span className="text-lg font-bold text-neutral-400">Yacimiento Malargüe</span>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="nosotros" className="scroll-mt-24 bg-neutral-100 py-24">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-6 lg:grid-cols-2">
          <Reveal className="bg-white p-8 md:p-12">
            <Titulo eyebrow="Quiénes somos">Soluciones confiables para la industria energética</Titulo>
            <p className="mt-6 leading-relaxed text-neutral-600">
              Desde {site.foundedYear}, ESIM acompaña a operadoras y plantas industriales en el mantenimiento, reparación y
              construcción de equipos rotativos y alternativos, en taller y en campo.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="grid h-36 w-36 place-items-center bg-acento-500 text-center text-white">
                <div>
                  <p className="text-5xl font-extrabold">+30</p>
                  <p className="text-xs font-bold tracking-wider uppercase">años de oficio</p>
                </div>
              </div>
              <ul className="space-y-3">
                {["Taller propio de mecanizado", "Equipos de campo calificados", "Flota de izaje y transporte", "Oficina técnica y diseño 3D"].map((t) => (
                  <li key={t} className="flex items-center gap-3 font-bold">
                    <span className="grid h-6 w-6 shrink-0 place-items-center bg-neutral-900 text-xs text-white">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/opcion2/empresa" className="mt-10 inline-block bg-neutral-900 px-7 py-3.5 text-sm font-extrabold tracking-wide text-white uppercase transition hover:bg-acento-500">
              Conocé más
            </Link>
          </Reveal>
          <Reveal delay={120} className="relative min-h-[26.25rem] overflow-hidden">
            <Image src="/img/ajuste/motor-cooper-superior-yac-malargue-14.webp" alt="Técnico en el taller de ESIM" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            <Link href="/opcion2/obras" aria-label="Ver trabajos" className="absolute top-6 right-6 grid h-16 w-16 place-items-center bg-acento-500 text-2xl text-white transition hover:bg-acento-600">
              ↗
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MAPA DE BASES */}
      <section id="bases" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <Reveal>
              <Titulo eyebrow="Nuestras bases">Presentes en Cuyo y la Cuenca Neuquina</Titulo>
            </Reveal>
            <Reveal delay={100} className="grid grid-cols-3 gap-6">
              {[
                { value: 30, prefix: "+", label: "Años de experiencia" },
                { value: 5, label: "Sitios operativos" },
                { value: 4, label: "Ciudades" },
              ].map((s) => (
                <StatCounter key={s.label} {...s} />
              ))}
            </Reveal>
          </div>
          <Reveal className="mt-14">
            <MapaPuntos />
          </Reveal>
        </div>
      </section>

      {/* MISIÓN / VISIÓN / VALORES */}
      <section className="relative overflow-hidden bg-neutral-900 py-24 text-white">
        <Image src="/img/ductos/ductos-06.webp" alt="" fill sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <Titulo eyebrow="Nuestro propósito" claro>
              Un aliado técnico para la energía del país
            </Titulo>
            <p className="mt-6 max-w-lg text-white/70">
              Ponemos oficio, equipamiento propio y procedimientos seguros al servicio de cada operación, del taller al yacimiento.
            </p>
            <a href="#contacto" className="mt-9 inline-block bg-acento-500 px-7 py-3.5 text-sm font-extrabold tracking-wide uppercase transition hover:bg-acento-600">
              Hablemos
            </a>
          </Reveal>
          <Reveal delay={120} className="space-y-4">
            {[
              ["Misión", "Brindar servicios industriales confiables, seguros y a tiempo, que mantengan en marcha las operaciones de nuestros clientes."],
              ["Visión", "Ser la empresa de referencia en mantenimiento y fabricación para la industria energética de Cuyo y Patagonia."],
              ["Valores", "Seguridad, precisión, compromiso y oficio en cada tarea."],
            ].map(([t, d]) => (
              <div key={t} className="border border-white/15 bg-white/5 p-6 backdrop-blur">
                <p className="flex items-center gap-3 font-extrabold">
                  <span className="h-2.5 w-2.5 rounded-full bg-acento-500" />
                  {t}
                </p>
                <p className="mt-2 text-sm text-white/70">{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <Reveal>
              <Titulo eyebrow="Servicios">Soluciones integrales para una industria que no puede parar</Titulo>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-600">
                Cubrimos el ciclo completo: intervención en obra, reparación de precisión, ingeniería de repuestos y logística pesada, con un solo proveedor.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  href={`/opcion2/servicios#${s.slug}`}
                  className={`group relative flex h-full min-h-72 flex-col overflow-hidden border p-8 transition ${
                    i === 0 ? "border-transparent bg-neutral-900 text-white" : "border-neutral-200 bg-neutral-50 hover:bg-neutral-900 hover:text-white"
                  }`}
                >
                  {i === 0 && <Image src={s.image} alt="" fill sizes="33vw" className="object-cover opacity-35" />}
                  <span className="absolute top-0 right-0 grid h-12 w-12 place-items-center bg-acento-500 text-xl text-white transition group-hover:h-14 group-hover:w-14">↗</span>
                  <span className={`relative ${i === 0 ? "text-white" : "text-acento-500 group-hover:text-white"}`}>
                    <Icono nombre={s.slug} />
                  </span>
                  <h3 className="relative mt-auto pt-10 text-xl font-extrabold">{s.title}</h3>
                  <p className={`relative mt-3 text-sm ${i === 0 ? "text-white/75" : "text-neutral-600 group-hover:text-white/70"}`}>{s.short}</p>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={servicios.length * 70}>
              <Link href="/opcion2/contacto" className="group relative flex h-full min-h-72 flex-col bg-acento-500 p-8 text-white transition hover:bg-acento-600">
                <Icono nombre="cotizar" />
                <h3 className="mt-auto pt-10 text-xl font-extrabold">¿Tenés un proyecto?</h3>
                <p className="mt-3 text-sm text-white/85">Contanos qué necesitás y te enviamos una propuesta técnica a medida.</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="bg-neutral-100 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal className="grid grid-cols-2 gap-4">
            <div className="relative row-span-2 min-h-[27.5rem]">
              <Image src="/img/ductos/ductos-12.webp" alt="Soldadura de ducto" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative min-h-[13.125rem]">
              <Image src="/img/repuestos/repuestos-06.webp" alt="Repuestos de bronce" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative min-h-[13.125rem]">
              <Image src="/img/izaje/izaje-05.webp" alt="Grúas en obra" fill sizes="25vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Titulo eyebrow="Por qué elegirnos">Seguridad, precisión y cumplimiento en cada trabajo</Titulo>
            <p className="mt-6 leading-relaxed text-neutral-600">
              Combinamos personal especializado, equipamiento propio y procesos controlados para resolver en obra y en taller.
            </p>
            <div className="mt-10 space-y-7">
              {indicadores.map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between text-sm font-extrabold">
                    <span>{b.label}</span>
                    <span>{b.value}%</span>
                  </div>
                  <div className="mt-2 h-2 bg-neutral-300">
                    <div className="bar h-full bg-acento-500" style={{ width: `${b.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BANDA TRABAJÁ CON NOSOTROS */}
      <section className="relative overflow-hidden bg-neutral-900 py-28 text-center text-white">
        <div className="absolute inset-0 bg-[url('/img/izaje/izaje-04.webp')] bg-cover bg-fixed bg-center opacity-40" />
        <div className="absolute inset-0 bg-black/50" />
        <Reveal className="relative mx-auto max-w-3xl px-6">
          <p className="text-sm font-extrabold tracking-wider text-acento-500 uppercase">Sumate al equipo</p>
          <h2 className="mt-4 text-4xl leading-tight font-extrabold md:text-5xl">Buscamos personas con oficio y compromiso</h2>
          <p className="mt-5 text-white/75">Ajustadores, torneros, soldadores, operadores de hidrogrúa, técnicos e ingenieros.</p>
          <Link href="/opcion2/trabaja-con-nosotros" className="mt-9 inline-block bg-acento-500 px-8 py-4 font-extrabold tracking-wide uppercase transition hover:bg-acento-600">
            Trabajá con nosotros
          </Link>
        </Reveal>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <Titulo eyebrow="Proyectos">Trabajos realizados para nuestros clientes</Titulo>
            </Reveal>
            <Link href="/opcion2/obras" className="border-2 border-neutral-900 px-6 py-3 text-sm font-extrabold tracking-wide uppercase transition hover:bg-neutral-900 hover:text-white">
              Ver todos
            </Link>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {proyectos.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 90} className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.src} alt={p.titulo} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold">{p.titulo}</h3>
                <p className="mt-2 text-sm text-neutral-600">{p.texto}</p>
                <Link href="/opcion2/obras" className="mt-5 inline-block bg-acento-500 px-5 py-2.5 text-xs font-extrabold tracking-wide text-white uppercase transition hover:bg-acento-600">
                  Ver más
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COTIZACIÓN */}
      <section id="contacto" className="scroll-mt-24 bg-acento-500 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold md:text-4xl">Solicitá tu cotización</h2>
            <p className="mt-2 text-white/85">
              Dejanos tu email o llamanos al <a href={site.phoneHref} className="font-bold underline">{site.phone}</a>.
            </p>
          </div>
          <CotizarBanda />
        </div>
      </section>
    </>
  );
}
