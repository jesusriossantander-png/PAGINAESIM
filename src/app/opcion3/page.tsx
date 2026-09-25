import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import Icono from "@/components/opcion2/Icono";
import Pantallas from "@/components/opcion3/Pantallas";
import Proyectos3 from "@/components/opcion3/Proyectos3";
import { bases, mapaArgentina as mapa } from "@/data/bases";
import { servicios } from "@/data/servicios";
import { clients, indicadores, site } from "@/data/site";

function Titulo({ eyebrow, children, claro = false }: { eyebrow: string; children: React.ReactNode; claro?: boolean }) {
  return (
    <>
      <p className={`flex items-center gap-3 text-sm font-extrabold ${claro ? "text-acento-300" : "text-acento-500"}`}>
        <span className="h-0.5 w-10 bg-current" />
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl leading-tight font-extrabold md:text-4xl xl:text-[2.75rem] ${claro ? "text-white" : "text-indi-950"}`}>{children}</h2>
    </>
  );
}

const canales = [
  { t: "Solicitud de cotización", d: "Contanos el equipo o servicio y te enviamos una propuesta técnica.", href: "#contacto", icono: "cotizar" },
  { t: "Trabajá con nosotros", d: "Envianos tu CV: ajustadores, torneros, soldadores, técnicos.", href: `mailto:${site.email}?subject=${encodeURIComponent("Postulación laboral")}`, icono: "ajuste" },
  { t: "Proveedores", d: "Sumate a nuestra red de proveedores y contratistas.", href: `mailto:${site.email}?subject=${encodeURIComponent("Proveedores")}`, icono: "repuestos" },
  { t: "WhatsApp directo", d: `Hablá con ${site.manager.split(" ")[0]} por WhatsApp.`, href: `https://wa.me/${site.whatsapp}`, icono: "izaje" },
];

export default function Opcion3() {
  return (
    <Pantallas>
      {/* 1 · INICIO */}
      <section id="inicio" data-pantalla="Inicio" className="relative flex min-h-svh flex-col overflow-hidden bg-indi-950 text-white">
        <Image src="/img/izaje/izaje-03.webp" alt="Montaje nocturno de ducto" fill priority sizes="100vw" className="animate-kenburns object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-br from-indi-950/90 via-indi-900/55 to-indi-800/30" />
        <div className="relative mx-auto grid w-full max-w-[82rem] flex-1 items-center gap-10 px-6 pt-28 pb-10 lg:grid-cols-[1.1fr_1fr] xl:px-12">
          <div className="animate-fade-up">
            <p className="text-sm font-extrabold tracking-wider text-acento-300 uppercase">Servicios industriales · Oil &amp; Gas</p>
            <h1 className="mt-5 text-5xl leading-[1.02] font-extrabold md:text-6xl xl:text-7xl">Energía que no se detiene</h1>
            <p className="mt-6 max-w-lg text-lg text-white/75">
              Mantenimiento, reparación y montaje de equipos para la industria del petróleo, el gas y la energía. Desde {site.foundedYear}.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#servicios" className="rounded-md bg-acento-500 px-7 py-4 font-extrabold transition hover:bg-acento-400">
                Ver servicios
              </a>
              <a href="#proyectos" className="rounded-md border border-white/30 px-7 py-4 font-extrabold transition hover:bg-white hover:text-indi-950">
                Proyectos
              </a>
            </div>
          </div>
          <p aria-hidden="true" className="hidden text-right text-[9rem] leading-[0.85] font-extrabold tracking-tighter select-none lg:block xl:text-[11rem]">
            <span className="text-white">ESIM</span>
            <br />
            <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.55)]">S.R.L.</span>
          </p>
        </div>
        <div className="relative ml-auto w-full max-w-4xl rounded-tl-2xl bg-indi-700 py-6 pr-28 pl-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-sm font-bold text-white/80">Confían en nosotros</p>
            {clients
              .filter((c, i, a) => c.logo && a.findIndex((x) => x.logo === c.logo) === i)
              .map((c) => (
                <span key={c.name} className="rounded bg-white px-3 py-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.logo!} alt={c.name} className="h-6 w-auto" />
                </span>
              ))}
            <span className="font-bold text-white">Yac. Malargüe</span>
          </div>
        </div>
      </section>

      {/* 2 · SERVICIOS */}
      <section id="servicios" data-pantalla="Servicios" className="flex min-h-svh items-center bg-white py-28">
        <div className="mx-auto w-full max-w-[82rem] px-6 xl:px-12">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <Reveal>
              <Titulo eyebrow="Servicios especializados">Del taller al yacimiento, con un solo equipo</Titulo>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-neutral-600">Cubrimos el ciclo completo: intervención en obra, reparación de precisión, ingeniería de repuestos y logística pesada.</p>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {servicios.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <article className="group flex h-full flex-col rounded-xl border border-indi-100 bg-white p-6 transition hover:-translate-y-1 hover:border-indi-600 hover:bg-indi-700 hover:text-white hover:shadow-2xl">
                  <span className="grid h-14 w-14 place-items-center rounded-lg bg-indi-50 text-indi-700 transition group-hover:bg-white/15 group-hover:text-white">
                    <Icono nombre={s.slug} className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 text-lg font-extrabold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-neutral-600 group-hover:text-white/75">{s.short}</p>
                  <span className="mt-5 text-sm font-extrabold text-acento-500 group-hover:text-acento-300">Consultar →</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · NOSOTROS */}
      <section id="nosotros" data-pantalla="Nosotros" className="relative flex min-h-svh items-center overflow-hidden bg-indi-700 py-28 text-white">
        <p aria-hidden="true" className="pointer-events-none absolute top-1/2 left-2 hidden -translate-y-1/2 -rotate-180 text-8xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.25)] [writing-mode:vertical-rl] lg:block">
          Nosotros
        </p>
        <div className="mx-auto grid w-full max-w-[82rem] items-center gap-14 px-6 lg:grid-cols-2 lg:pl-40 xl:px-12 xl:pl-44">
          <Reveal>
            <Titulo eyebrow="Sobre ESIM" claro>
              Más de 30 años manteniendo en marcha la industria
            </Titulo>
            <p className="mt-6 text-white/80">
              Somos una empresa mendocina de servicios industriales mecánicos. Combinamos taller de mecanizado, oficina técnica,
              equipos de campo y flota de izaje propia para resolver en obra y en taller.
            </p>
            <ul className="mt-8 space-y-3">
              {["Taller propio de mecanizado", "Equipos de campo calificados", "Flota de hidrogrúas y transporte", "Oficina técnica y modelado 3D"].map((t) => (
                <li key={t} className="flex items-center gap-3 font-bold">
                  <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-acento-300 text-xs text-acento-300">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/img/ajuste/bomba-b8-ypf-poliducto-05.webp" alt="Traslado de bomba con hidrogrúa" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <a href="#proyectos" className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-lg bg-acento-500 px-6 py-4 font-extrabold shadow-2xl transition hover:bg-acento-400">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-acento-600">▶</span>
              Ver proyectos
            </a>
          </Reveal>
        </div>
      </section>

      {/* 4 · PROYECTOS */}
      <section id="proyectos" data-pantalla="Proyectos" className="flex min-h-svh items-center bg-white py-28">
        <div className="mx-auto w-full max-w-[82rem] px-6 xl:px-12">
          <Reveal className="mb-8">
            <Titulo eyebrow="Nuestros proyectos">Trabajo real, en campo y en taller</Titulo>
          </Reveal>
          <Proyectos3 />
        </div>
      </section>

      {/* 5 · POR QUÉ ESIM */}
      <section id="por-que" data-pantalla="Por qué ESIM" className="flex min-h-svh items-center bg-indi-50 py-28">
        <div className="mx-auto grid w-full max-w-[82rem] items-center gap-12 px-6 lg:grid-cols-2 xl:px-12">
          <Reveal className="relative mx-auto w-full max-w-[380px]">
            <svg viewBox={`0 0 ${mapa.width} ${mapa.height}`} className="h-auto max-h-[70svh] w-full" role="img" aria-label="Mapa de Argentina con las bases de ESIM">
              <path d={mapa.argentina} fill="#e6e4fb" stroke="#2f25b0" strokeOpacity={0.35} strokeWidth={2} />
              <path d={mapa.malvinas} fill="#e6e4fb" stroke="#2f25b0" strokeOpacity={0.35} strokeWidth={2} />
              {bases.map((b) => (
                <g key={b.id}>
                  <circle cx={b.x} cy={b.y} r={30} fill="#2f25b0" className="mapa-pulso" style={{ transformOrigin: `${b.x}px ${b.y}px` }} />
                  <circle cx={b.x} cy={b.y} r={10} fill="#2f25b0" stroke="#fff" strokeWidth={4} />
                  <text
                    x={b.id === "mendoza" ? b.x : b.x + 18}
                    y={b.id === "mendoza" ? b.y - 20 : b.y + 7}
                    textAnchor={b.id === "mendoza" ? "middle" : "start"}
                    fontSize={22}
                    fontWeight={800}
                    fill="#0e0b3a"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {b.ciudad}
                  </text>
                </g>
              ))}
            </svg>
          </Reveal>
          <Reveal delay={120}>
            <Titulo eyebrow="¿Por qué ESIM?">Cerca de cada operación, con estándares que se miden</Titulo>
            <p className="mt-5 text-neutral-600">
              Bases en {bases.map((b) => b.ciudad).join(", ").replace(/, ([^,]*)$/, " y $1")} para llegar rápido a cada yacimiento y planta.
            </p>
            <div className="mt-9 space-y-6">
              {indicadores.map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between text-sm font-extrabold text-indi-950">
                    <span>{b.label}</span>
                    <span>{b.value}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-indi-100">
                    <div className="bar h-full rounded-full bg-indi-700" style={{ width: `${b.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 · CANALES + CIFRAS */}
      <section id="canales" data-pantalla="Canales" className="flex min-h-svh items-center bg-white py-28">
        <div className="mx-auto w-full max-w-[82rem] px-6 xl:px-12">
          <Reveal>
            <Titulo eyebrow="Canales y formularios">¿En qué podemos ayudarte?</Titulo>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {canales.map((c, i) => (
              <Reveal key={c.t} delay={i * 70}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`group flex h-full flex-col rounded-xl p-7 transition hover:-translate-y-1 hover:shadow-2xl ${
                    i === 0 ? "bg-indi-700 text-white" : "bg-indi-50 text-indi-950 hover:bg-indi-700 hover:text-white"
                  }`}
                >
                  <Icono nombre={c.icono} className="h-10 w-10" />
                  <h3 className="mt-8 text-lg font-extrabold">{c.t}</h3>
                  <p className={`mt-2 flex-1 text-sm ${i === 0 ? "text-white/75" : "text-neutral-600 group-hover:text-white/75"}`}>{c.d}</p>
                  <span className="mt-6 grid h-9 w-9 place-items-center rounded-md bg-acento-500 text-white">↗</span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 grid gap-8 rounded-2xl bg-indi-900 px-8 py-8 text-white sm:grid-cols-3">
            {[
              { value: 30, prefix: "+", label: "Años en la industria" },
              { value: 3000, prefix: "+", label: "Equipos dinámicos intervenidos" },
              { value: 2000, prefix: "+", label: "Equipos intervenidos en campo" },
            ].map((s) => (
              <StatCounter key={s.label} {...s} dark />
            ))}
          </Reveal>
        </div>
      </section>

      {/* 7 · CONTACTO + PIE */}
      <section id="contacto" data-pantalla="Contacto" className="flex min-h-svh flex-col bg-indi-950 text-white">
        <div className="mx-auto grid w-full max-w-[82rem] flex-1 items-center gap-12 px-6 pt-28 pb-12 lg:grid-cols-2 xl:px-12">
          <Reveal>
            <Titulo eyebrow="Contacto" claro>
              Hablemos de tu próximo proyecto
            </Titulo>
            <ul className="mt-8 space-y-4 text-lg">
              <li>
                <a href={site.phoneHref} className="font-extrabold hover:text-acento-300">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-acento-300">
                  {site.email}
                </a>
              </li>
              <li className="text-white/70">
                {site.address}, Perdriel · Luján de Cuyo, Mendoza
              </li>
            </ul>
            <p className="mt-8 text-sm font-bold text-white/50">Bases</p>
            <p className="mt-1 text-white/80">{bases.map((b) => `${b.ciudad} (${b.provincia})`).join(" · ")}</p>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl bg-white p-7 text-neutral-900 md:p-9">
            <h3 className="mb-6 text-2xl font-extrabold">Solicitá una cotización</h3>
            <ContactForm to={site.email} subjectPrefix="Consulta web" />
          </Reveal>
        </div>
        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-[82rem] flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-white/60 sm:flex-row sm:pr-28 xl:px-12 xl:pr-28">
            <span className="rounded-md bg-white px-3 py-2">
              <Logo className="h-8 w-auto" />
            </span>
            <p>
              © {new Date().getFullYear()} {site.legalName}
            </p>
            <div className="flex gap-5">
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </section>
    </Pantallas>
  );
}
