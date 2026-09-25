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
            ["#nosotros", "Nosotros"],
            ["#servicios", "Servicios"],
            ["#proyectos", "Proyectos"],
            ["/trabaja-con-nosotros", "Trabajá con nosotros"],
            ["/acceso", "Portal socios"],
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
            <li key={s.slug}>{s.title}</li>
          ))}
        </Col>
        <Col titulo="Contacto">
          <li>
            <a href={site.phoneHref} className="text-base font-bold text-white hover:text-rojo-500">
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
              <span className="text-rojo-500">■</span> {b.ciudad}, {b.provincia}
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
