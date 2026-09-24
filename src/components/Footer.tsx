import Link from "next/link";
import Logo from "./Logo";
import { nav, site } from "@/data/site";
import { servicios } from "@/data/servicios";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="inline-block rounded-xl bg-white px-3 py-2">
            <Logo className="h-9 w-auto" />
          </span>
          <p className="mt-4 text-sm leading-relaxed">
            {site.legalName}. Servicios industriales para Oil &amp; Gas: ductos, equipos rotativos, hidrogrúa y oficina técnica. Cuyo y Patagonia.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Navegación</h3>
          <ul className="space-y-2 text-sm">
            {[...nav, { href: "/trabaja-con-nosotros", label: "Trabajá con nosotros" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Servicios</h3>
          <ul className="space-y-2 text-sm">
            {servicios.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios#${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li>
              {site.address}
              <br />
              {site.city}
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Ver en Google Maps
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <span className="text-white/50">Seguridad · Calidad · Compromiso</span>
          <Link href="/acceso" className="hover:text-white">
            Acceso socios / empleados
          </Link>
        </div>
      </div>
    </footer>
  );
}
