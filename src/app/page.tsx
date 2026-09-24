import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import StatCounter from "@/components/StatCounter";
import { caption, destacadas } from "@/data/obras";
import { servicios } from "@/data/servicios";
import { clients, site, stats } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950">
        <Image
          src="/img/izaje/izaje-02.webp"
          alt="Montaje de ducto con grúas al amanecer"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/60 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-20 sm:px-6">
          <Reveal className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white/80 uppercase backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-brand-400" /> Desde {site.foundedYear} · Mendoza, Argentina
            </p>
            <h1 className="text-4xl leading-[1.05] font-extrabold text-white sm:text-6xl lg:text-7xl">
              Energía que se mueve con <span className="text-safety-400">precisión</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">{site.tagline}.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/servicios"
                className="rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400"
              >
                Nuestros servicios
              </Link>
              <Link
                href="/contacto"
                className="rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-ink-900"
              >
                Solicitar cotización
              </Link>
            </div>
          </Reveal>
        </div>
        <a
          href="#nosotros"
          aria-label="Bajar"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70"
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <SectionTitle
              eyebrow="Quiénes somos"
              title="Más de tres décadas manteniendo en marcha la industria"
              intro="ESIM nació en 1993 en Luján de Cuyo para dar respuesta a las necesidades de mantenimiento de la industria de proceso continuo. Hoy somos un equipo integral de taller, ingeniería, campo y logística que acompaña a operadoras de Oil & Gas y plantas industriales de toda la región."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Taller propio de mecanizado", "Oficina técnica y diseño 3D", "Equipos de campo calificados", "Flota de izaje y transporte"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3 font-medium text-ink-800">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand-600">✓</span>
                    {t}
                  </li>
                ),
              )}
            </ul>
            <Link href="/empresa" className="mt-10 inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-500">
              Conocé la empresa <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/img/ajuste/motor-cooper-superior-yac-malargue-14.webp"
                alt="Técnico trabajando en el taller de ESIM"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-ink-900 p-6 text-white shadow-2xl sm:block">
              <div className="font-display text-4xl font-extrabold text-safety-400">{site.foundedYear}</div>
              <div className="text-sm text-white/70">Año de fundación</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CIFRAS */}
      <section className="relative overflow-hidden bg-ink-900 py-20">
        <Image src="/img/ductos/ductos-09.webp" alt="" fill sizes="100vw" className="object-cover opacity-15" />
        <div className="relative mx-auto grid max-w-5xl gap-12 px-4 sm:grid-cols-3 sm:px-6">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-steel-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle
              eyebrow="Servicios"
              title="Soluciones integrales, del taller al yacimiento"
              intro="Cinco líneas de servicio coordinadas para resolver cada necesidad con un solo proveedor."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <ServiceCard s={s} />
              </Reveal>
            ))}
            <Reveal delay={servicios.length * 80}>
              <Link
                href="/contacto"
                className="flex h-96 flex-col justify-between rounded-2xl bg-brand-500 p-8 text-white transition hover:bg-brand-600"
              >
                <span className="text-sm font-bold tracking-[0.2em] uppercase opacity-80">¿Tenés un proyecto?</span>
                <span className="font-display text-3xl font-extrabold">Contanos qué necesitás y armamos la solución.</span>
                <span className="font-semibold">Contactar →</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OBRAS DESTACADAS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <SectionTitle eyebrow="Obras" title="Nuestro trabajo en imágenes" />
            </Reveal>
            <Link href="/obras" className="font-semibold text-brand-600 hover:text-brand-500">
              Ver todas las obras →
            </Link>
          </div>
          <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-4">
            {destacadas.map((o, i) => (
              <Reveal
                key={o.src}
                delay={i * 60}
                className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""} ${i >= 3 ? "md:col-span-2" : ""}`}
              >
                <Image
                  src={o.src}
                  alt={caption(o)}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">{caption(o)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="border-y border-steel-100 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-sm font-bold tracking-[0.2em] text-steel-500 uppercase">
            Confían en nosotros
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {clients.map((c) => (
              <span key={c} className="font-display text-xl font-bold text-ink-700/60">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SEGURIDAD + CTA */}
      <section className="relative overflow-hidden bg-ink-950 py-24">
        <Image src="/img/ductos/ductos-06.webp" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <SectionTitle
              light
              eyebrow="Seguridad, salud y ambiente"
              title="La seguridad de nuestra gente es lo primero"
              intro="Trabajamos con procedimientos, capacitación permanente y elementos de protección adecuados para cada tarea, cuidando a las personas, las instalaciones y el ambiente."
            />
          </Reveal>
          <Reveal delay={150} className="flex flex-col justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-2xl font-bold text-white">¿Sos socio o parte del equipo ESIM?</h3>
            <p className="text-white/75">
              Accedé al área privada para consultar documentación interna, procedimientos e indicadores de gestión.
            </p>
            <Link
              href="/acceso"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-safety-400 px-6 py-3 font-semibold text-ink-950 transition hover:brightness-110"
            >
              Ingresar al área privada →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
