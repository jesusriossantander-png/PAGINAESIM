import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import Marquee from "@/components/Marquee";
import ProjectsCarousel, { type Proyecto } from "@/components/ProjectsCarousel";
import Reveal from "@/components/Reveal";
import ServicesExplorer from "@/components/ServicesExplorer";
import StatCounter from "@/components/StatCounter";
import Testimonials from "@/components/Testimonials";
import { clients, indicadores, stats } from "@/data/site";

const proceso = [
  { t: "Diagnóstico", d: "Relevamos el equipo o la instalación en campo y definimos el alcance con el cliente." },
  { t: "Ingeniería", d: "Oficina técnica: modelado 3D, planos, procedimientos y análisis de riesgos." },
  { t: "Ejecución", d: "Taller y campo con personal calificado, equipamiento propio y control de calidad." },
  { t: "Entrega", d: "Puesta en marcha, documentación técnica y seguimiento posterior." },
];

const proyectos: Proyecto[] = [
  { src: "/img/ajuste/bomba-b8-ypf-poliducto-06.webp", title: "Bomba B8 – Poliducto", client: "YPF", tag: "Equipos rotativos" },
  { src: "/img/izaje/izaje-03.webp", title: "Tendido de ducto nocturno", client: "Oil & Gas", tag: "Izaje" },
  { src: "/img/ajuste/compresor-air-liquid-08.webp", title: "Overhaul de compresor", client: "Air Liquide", tag: "Ajuste" },
  { src: "/img/repuestos/repuestos-04.webp", title: "Rótula mecanizada", client: "Fabricación propia", tag: "Repuestos" },
  { src: "/img/ductos/ductos-05.webp", title: "Soldadura de cañería", client: "Oil & Gas", tag: "Ductos" },
  { src: "/img/ajuste/motor-cooper-superior-yac-malargue-12.webp", title: "Motor Cooper Superior", client: "Yac. Malargüe", tag: "Motores" },
  { src: "/img/oficina-tecnica/oficina-tecnica-02.webp", title: "Diseño de cojinete", client: "Oficina técnica", tag: "Ingeniería 3D" },
];

const pilares = [
  { t: "Seguridad primero", d: "Procedimientos, análisis de riesgo y EPP en cada tarea, en campo y en taller." },
  { t: "Equipamiento propio", d: "Hidrogrúas, taller de mecanizado y herramientas para responder rápido." },
  { t: "Soluciones a medida", d: "Ingeniería y repuestos propios cuando no hay original disponible." },
];

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      {/* INTRO + CIFRAS */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <p className="eyebrow text-brand-500">Quiénes somos</p>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-display text-3xl leading-[1.15] font-medium tracking-tight text-ink md:text-5xl">
                Desde 1993, ESIM es el socio técnico de operadoras y plantas industriales:{" "}
                <span className="text-muted">
                  intervenimos equipos críticos, fabricamos lo que ya no se consigue y llegamos a obra con equipos propios.
                </span>
              </p>
              <Link
                href="/empresa"
                className="group mt-10 inline-flex items-center gap-3 font-bold text-ink"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-500 text-white transition group-hover:scale-110">
                  →
                </span>
                Conocé nuestra historia
              </Link>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-y-12 border-t border-line pt-12 md:mt-28 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className={`pr-6 ${i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""}`}>
                <StatCounter {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COLLAGE */}
      <section className="pb-24 md:pb-36">
        <div className="container-x grid gap-5 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="reveal-img relative aspect-[4/3] overflow-hidden rounded-[28px]">
              <Image src="/img/ductos/ductos-11.webp" alt="Soldador trabajando en un ducto" fill sizes="(min-width:768px) 58vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <div className="grid gap-5 md:col-span-5">
            <Reveal delay={120}>
              <div className="reveal-img relative aspect-[16/10] overflow-hidden rounded-[28px]">
                <Image src="/img/repuestos/repuestos-06.webp" alt="Bujes de bronce mecanizados" fill sizes="(min-width:768px) 40vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={220} className="flex flex-col justify-between rounded-[28px] bg-brand-500 p-8 text-white">
              <p className="font-display text-6xl font-semibold">24/7</p>
              <p className="mt-6 text-lg text-white/85">
                Respuesta ante paradas de planta. Cuando tu operación se detiene, nuestro equipo sale.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/10 bg-brand-600 py-7 text-white">
        <Marquee
          items={["Acondicionamiento de ductos", "Bombas y compresores", "Motores a gas", "Izaje con hidrogrúa", "Repuestos a medida", "Modelado 3D"]}
        />
      </section>

      {/* SERVICIOS */}
      <section className="grain bg-night-900 py-24 text-white md:py-36">
        <div className="container-x">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <p className="eyebrow text-brand-300">Servicios</p>
              <h2 className="mt-5 max-w-2xl text-4xl leading-[1.05] font-semibold md:text-6xl">
                Del taller al yacimiento, <em className="!text-brand-300">con un solo equipo.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-sm text-white/60">
                Cinco líneas de servicio integradas para cubrir el ciclo completo: intervención en obra, reparación de
                precisión e ingeniería de repuestos.
              </p>
            </Reveal>
          </div>
          <ServicesExplorer />
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-paper py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-brand-500">Cómo trabajamos</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-semibold md:text-6xl">
              Un proceso probado, <em>de principio a fin.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] bg-line md:grid-cols-2 lg:grid-cols-4">
            {proceso.map((p, i) => (
              <Reveal key={p.t} delay={i * 100} className="group h-full bg-white p-8 transition hover:bg-night-900 md:p-10">
                <div className="flex h-full flex-col">
                  <span className="font-display text-7xl font-semibold text-brand-100 transition group-hover:text-brand-500">
                    0{i + 1}
                  </span>
                  <h3 className="mt-10 text-2xl font-semibold transition group-hover:text-white">{p.t}</h3>
                  <p className="mt-3 text-muted transition group-hover:text-white/65">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="py-24 md:py-36">
        <div className="container-x mb-4 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow text-brand-500">Proyectos</p>
            <h2 className="mt-5 max-w-2xl text-4xl leading-[1.05] font-semibold md:text-6xl">
              Trabajo real, <em>en campo y en taller.</em>
            </h2>
          </Reveal>
          <Link href="/obras" className="font-bold text-brand-500 hover:text-brand-600">
            Ver todos los proyectos →
          </Link>
        </div>
        <ProjectsCarousel items={proyectos} />
      </section>

      {/* HSE */}
      <section className="grain relative overflow-hidden bg-night-950 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <Image src="/img/ductos/ductos-08.webp" alt="Trabajo en zanja con elementos de protección" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-night-950/80 lg:to-night-950" />
          </div>
          <div className="px-5 py-20 sm:px-8 lg:px-16 lg:py-32 xl:px-24">
            <Reveal>
              <p className="eyebrow text-brand-300">Seguridad · Calidad · Compromiso</p>
              <h2 className="mt-5 text-4xl leading-[1.05] font-semibold md:text-5xl">
                La seguridad de nuestra gente <em className="!text-brand-300">no se negocia.</em>
              </h2>
            </Reveal>
            <div className="mt-12 space-y-7">
              {indicadores.map((b, i) => (
                <Reveal key={b.label} delay={i * 100}>
                  <div className="flex justify-between text-sm font-bold">
                    <span>{b.label}</span>
                    <span className="font-display text-brand-300">{b.value}%</span>
                  </div>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="bar h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-300" style={{ width: `${b.value}%` }} />
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {pilares.map((p, i) => (
                <Reveal key={p.t} delay={i * 100}>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-500/20 text-brand-300">✓</span>
                  <h3 className="mt-4 font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-white/55">{p.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES + TESTIMONIOS */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-8 border-b border-line pb-14">
            <p className="eyebrow text-muted">Confían en nosotros</p>
            <div className="flex flex-wrap items-center gap-x-14 gap-y-6">
              {clients.map((c) =>
                c.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={c.name} src={c.logo} alt={c.name} className="h-8 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />
                ) : (
                  <span key={c.name} className="font-display text-xl font-semibold text-ink/50">
                    {c.name}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="mt-20">
            <Reveal>
              <p className="eyebrow mb-12 text-brand-500">Lo que dicen nuestros clientes</p>
            </Reveal>
            <Testimonials />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="grain relative overflow-hidden rounded-[32px] bg-night-900 text-white">
          <Image src="/img/izaje/izaje-02.webp" alt="" fill sizes="100vw" className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/60 to-transparent" />
          <div className="container-x relative grid gap-10 py-24 md:py-32 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <Reveal>
              <h2 className="text-5xl leading-[0.95] font-semibold md:text-7xl lg:text-8xl">
                ¿Hablamos de
                <br />
                <em className="!text-brand-300">tu próximo proyecto?</em>
              </h2>
            </Reveal>
            <Reveal delay={150} className="grid gap-3">
              <Link
                href="/contacto"
                className="group flex items-center justify-between rounded-2xl bg-brand-500 p-6 transition hover:bg-brand-400"
              >
                <span>
                  <span className="block text-sm text-white/75">Clientes</span>
                  <span className="text-xl font-bold">Solicitar cotización</span>
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-brand-600 transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/acceso"
                className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
              >
                <span>
                  <span className="block text-sm text-white/60">Socios y empleados</span>
                  <span className="text-xl font-bold">Ingresar al portal</span>
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25 transition group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
