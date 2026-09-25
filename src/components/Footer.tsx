import Link from "next/link";
import Logo from "./Logo";
import { nav, site } from "@/data/site";
import { servicios } from "@/data/servicios";

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-night-950 text-white/65">
      <div className="container-x relative pt-20 md:pt-28">
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="h-11 w-auto" />
            <p className="mt-6 max-w-xs leading-relaxed">
              Servicios industriales para Oil &amp; Gas: ductos, equipos rotativos, hidrogrúa y oficina técnica. Cuyo y
              Patagonia, desde {site.foundedYear}.
            </p>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola, quiero hacer una consulta a ESIM SRL.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-500"
            >
              <WhatsIcon /> Escribinos por WhatsApp
            </a>
          </div>
          <FooterCol title="Empresa">
            {[...nav, { href: "/trabaja-con-nosotros", label: "Trabajá con nosotros" }, { href: "/acceso", label: "Portal socios" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </FooterCol>
          <FooterCol title="Servicios">
            {servicios.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios#${s.slug}`} className="transition hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </FooterCol>
          <FooterCol title="Contacto">
            <li>
              <a href={site.phoneHref} className="font-display text-xl text-white transition hover:text-brand-300">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              {site.address}, Perdriel
              <br />
              Luján de Cuyo, Mendoza
            </li>
            <li className="flex gap-4 pt-2">
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-300 hover:text-white">
                Google Maps ↗
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-300 hover:text-white">
                LinkedIn ↗
              </a>
            </li>
          </FooterCol>
        </div>

        {/* Logo gigante de fondo */}
        <div aria-hidden="true" className="pointer-events-none flex justify-center pt-14 pb-10 select-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-grande.png" alt="" className="w-[80vw] max-w-5xl opacity-[0.07]" />
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <p className="text-white/40">Seguridad · Calidad · Compromiso</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-bold tracking-[0.2em] text-white uppercase">{title}</h3>
      <ul className="space-y-3 text-[15px]">{children}</ul>
    </div>
  );
}

function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.2-.7-2.7-1.1-4.4-3.8-4.5-4-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z" />
    </svg>
  );
}
