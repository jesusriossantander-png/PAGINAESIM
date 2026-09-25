import Link from "next/link";
import Logo from "@/components/Logo";
import { bases } from "@/data/bases";
import { servicios } from "@/data/servicios";
import { site } from "@/data/site";

export default function Footer2() {
  return (
    <footer className="bg-neutral-950 text-sm text-white/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <span className="inline-block bg-white px-4 py-3">
            <Logo className="h-10 w-auto" />
          </span>
          <p className="mt-6 max-w-xs leading-relaxed">
            {site.legalName}. Servicios industriales para Oil &amp; Gas desde {site.foundedYear}.
          </p>
        </div>
        <Col titulo="Empresa">
          {[
            ["/opcion2/empresa", "Nosotros"],
            ["/opcion2/servicios", "Servicios"],
            ["/opcion2/obras", "Proyectos"],
            ["/opcion2/contacto", "Contacto"],
            ["/opcion2/trabaja-con-nosotros", "Trabajá con nosotros"],
            ["/opcion2/acceso", "Portal socios"],
          ].map(([h, l]) => (
            <li key={h}>
              <Link href={h} className="hover:text-white">
                {l}
              </Link>
            </li>
          ))}
        </Col>
        <Col titulo="Servicios">
          {servicios.map((s) => (
            <li key={s.slug}>
              <Link href={`/opcion2/servicios#${s.slug}`} className="hover:text-white">
                {s.title}
              </Link>
            </li>
          ))}
        </Col>
        <Col titulo="Contacto">
          <li>
            <a href={site.phoneHref} className="text-base font-bold text-white hover:text-acento-500">
              {site.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </li>
          <li className="pt-2 text-xs tracking-wider text-white/40 uppercase">Bases</li>
          {bases.map((b) => (
            <li key={b.id}>
              <span className="text-acento-500">■</span> {b.ciudad}, {b.provincia}
            </li>
          ))}
        </Col>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}</p>
          <p>Seguridad · Calidad · Compromiso</p>
        </div>
      </div>
    </footer>
  );
}

function Col({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-extrabold tracking-wider text-white uppercase">{titulo}</h3>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}
