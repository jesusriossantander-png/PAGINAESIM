import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import PageHeader2 from "@/components/opcion2/PageHeader2";
import Titulo from "@/components/opcion2/Titulo";
import { bases } from "@/data/bases";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contacto · Opción 2" };

export default function Contacto2() {
  const canales = [
    ["Teléfono", site.phone, site.phoneHref],
    ["WhatsApp", "Escribinos ahora", `https://wa.me/${site.whatsapp}`],
    ["Email", site.email, `mailto:${site.email}`],
    ["Planta", "Perdriel, Luján de Cuyo", site.mapsUrl],
  ];
  return (
    <>
      <PageHeader2 miga="Contacto" titulo="Contanos qué necesitás resolver" texto="Te respondemos con una propuesta técnica y un presupuesto a medida." imagen="/img/ajuste/bomba-b8-ypf-poliducto-03.webp" />
      <section className="bg-neutral-100 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="space-y-4">
            {canales.map(([t, v, h]) => (
              <a key={t} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-center justify-between border-l-4 border-acento-500 bg-white p-6 transition hover:bg-neutral-900 hover:text-white">
                <span>
                  <span className="block text-xs font-extrabold tracking-wider text-neutral-500 uppercase group-hover:text-white/60">{t}</span>
                  <span className="mt-1 block text-lg font-extrabold">{v}</span>
                </span>
                <span className="text-acento-500 group-hover:text-acento-300">↗</span>
              </a>
            ))}
            <div className="bg-white p-6">
              <p className="text-xs font-extrabold tracking-wider text-neutral-500 uppercase">Bases</p>
              <ul className="mt-3 space-y-1.5 text-sm font-bold">
                {bases.map((b) => (
                  <li key={b.id}>
                    <span className="text-acento-500">■</span> {b.ciudad}, {b.provincia}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120} className="bg-white p-8 md:p-12">
            <Titulo eyebrow="Cotización">Solicitá una cotización</Titulo>
            <div className="mt-8">
              <ContactForm to={site.email} subjectPrefix="Consulta web" />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="h-[27.5rem] bg-neutral-200">
        <iframe title="Ubicación de ESIM" src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`} className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </>
  );
}
