import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import StatCounter from "@/components/StatCounter";
import { caption, destacadas } from "@/data/obras";
import { servicios } from "@/data/servicios";
import { clients, indicadores, site, stats, testimonios } from "@/data/site";

const pilares = [
  { title: "Seguridad primero", text: "Procedimientos y EPP en cada tarea, en campo y en taller." },
  { title: "Equipamiento propio", text: "Hidrogrúas, taller y herramientas para responder rápido." },
  { title: "Soluciones a medida", text: "Ingeniería y repuestos propios cuando no hay original." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900 pt-[72px]">
        <Image
          src="/img/izaje/izaje-01.webp"
          alt="Montaje de ducto con grúas al atardecer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink-900/65" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        <Reveal className="relative mx-auto w-full max-w-4xl px-4 pb-24 text-center sm:px-6">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-white/90 uppercase backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent-400" /> Servicios industriales · Oil &amp; Gas
          </p>
          <h1 className="text-4xl leading-[1.05] font-bold text-white sm:text-6xl lg:text-7xl">
            Soluciones de ingeniería y mantenimiento para la{" "}
            <em className="!text-accent-400">industria</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">{site.tagline}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="rounded-lg bg-brand-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
            >
              Solicitar una cotización
            </Link>
            <Link
              href="/servicios"
              className="rounded-lg border border-white/40 bg-white/5 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-ink-800"
            >
              Ver servicios
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CLIENTES */}
      <section className="bg-white pt-4 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-steel-500 uppercase">
            Empresas que confían en nosotros
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {clients.map((c) => (
              <div
                key={c.name}
                className="flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-steel-100 bg-steel-50 px-4"
              >
                {c.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.logo} alt={c.name} className="h-8 w-auto max-w-[120px]" />
                ) : (
                  <span className="font-display text-lg font-bold text-ink-700">{c.name}</span>
                )}
                {c.logo && <span className="text-xs font-semibold text-steel-500">{c.name}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-steel-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle
              center
              title={
                <>
                  <em>Servicios</em> que ofrecemos
                </>
              }
              intro="Cubrimos el ciclo completo: desde la intervención en obra hasta la reparación de precisión y la ingeniería de repuestos."
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
                className="flex h-full min-h-72 flex-col justify-between rounded-2xl bg-brand-500 p-8 text-white transition hover:bg-brand-600"
              >
                <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-80">¿Tenés un proyecto?</span>
                <span className="font-display text-3xl font-bold">Contanos qué necesitás resolver.</span>
                <span className="font-bold">Solicitar cotización →</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="relative overflow-hidden bg-ink-900 py-24">
        <Image src="/img/ductos/ductos-09.webp" alt="" fill sizes="100vw" className="object-cover opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle
              light
              center
              title={
                <>
                  ¿Por qué <em>elegirnos</em>?
                </>
              }
            />
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-lg leading-relaxed text-white/75">
                Somos una empresa de servicios industriales con base en Cuyo y operación en Patagonia. Combinamos
                personal especializado, equipamiento propio y procesos controlados para resolver en obra y en taller,
                con seguridad y cumplimiento de plazos.
              </p>
              <div className="mt-8 space-y-6">
                {indicadores.map((b) => (
                  <div key={b.label}>
                    <div className="flex justify-between text-sm font-bold text-white">
                      <span>{b.label}</span>
                      <span className="text-accent-400">{b.value}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-brand-400" style={{ width: `${b.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} className="grid content-start gap-4 sm:grid-cols-2">
              {stats.map((s) => (
                <StatCounter key={s.label} {...s} />
              ))}
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pilares.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className={`rounded-2xl border p-6 ${
                  i === 1 ? "border-brand-500 bg-brand-500 text-white" : "border-white/10 bg-white/5 text-white"
                }`}
              >
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className={`mt-2 text-sm ${i === 1 ? "text-white/85" : "text-white/65"}`}>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle
              center
              title={
                <>
                  Proyectos <em>realizados</em>
                </>
              }
              intro="Trabajo real en campo y en taller: ductos, equipos rotativos, logística pesada e ingeniería."
            />
          </Reveal>
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
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-display font-bold text-white">{caption(o)}</p>
                  <p className="text-sm font-semibold text-accent-400">Ver trabajo →</p>
                </div>
                <Link href="/obras" className="absolute inset-0" aria-label={`Ver trabajo: ${caption(o)}`} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/obras" className="font-bold text-brand-500 hover:text-brand-600">
              Ver todos los trabajos →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-steel-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle
              center
              title={
                <>
                  La confianza de quienes nos <em>eligen</em>
                </>
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonios.map((t, i) => (
              <Reveal key={t.iniciales} delay={i * 80} className="flex flex-col rounded-2xl bg-white p-8 shadow-sm">
                <span className="font-display text-5xl leading-none text-brand-500">“</span>
                <p className="mt-2 flex-1 leading-relaxed text-ink-700">{t.texto}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-500 text-sm font-bold text-white">
                    {t.iniciales}
                  </span>
                  <div>
                    <p className="text-sm font-bold">{t.cargo}</p>
                    <p className="text-xs text-steel-500">{t.empresa}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO + ÁREA PRIVADA */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal className="flex flex-col justify-between rounded-2xl bg-brand-500 p-10 text-white">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-80">Contacto</p>
              <h2 className="mt-3 text-3xl font-bold">Contanos qué necesitás resolver.</h2>
              <p className="mt-3 text-white/85">
                Enviá tu consulta y te respondemos con una propuesta técnica y un presupuesto a medida.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto" className="rounded-lg bg-white px-6 py-3 font-bold text-brand-600">
                Solicitar cotización
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola, quiero hacer una consulta a ESIM SRL.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/50 px-6 py-3 font-bold"
              >
                WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-between rounded-2xl bg-ink-900 p-10 text-white">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-accent-400 uppercase">Área privada</p>
              <h2 className="mt-3 text-3xl font-bold">¿Sos socio o parte del equipo ESIM?</h2>
              <p className="mt-3 text-white/70">
                Accedé a documentación interna, procedimientos e indicadores de gestión.
              </p>
            </div>
            <Link
              href="/acceso"
              className="mt-8 inline-flex w-fit rounded-lg bg-accent-400 px-6 py-3 font-bold text-ink-900 transition hover:brightness-110"
            >
              Ingresar →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
