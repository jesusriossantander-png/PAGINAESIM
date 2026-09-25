import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola, quiero hacer una consulta a ESIM SRL.")}`;
  const canales = [
    { t: "Teléfono", v: site.phone, href: site.phoneHref },
    { t: "WhatsApp", v: "Escribinos ahora", href: wa, ext: true },
    { t: "Email", v: site.email, href: `mailto:${site.email}` },
    { t: "Ubicación", v: "Perdriel, Luján de Cuyo", href: site.mapsUrl, ext: true },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title={
          <>
            Contanos qué <span className="text-brand-300">necesitás resolver.</span>
          </>
        }
        subtitle="Te respondemos con una propuesta técnica y un presupuesto a medida."
        image="/img/ajuste/bomba-b8-ypf-poliducto-03.webp"
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-brand-500">Canales directos</p>
            <div className="mt-8 border-t border-line">
              {canales.map((c) => (
                <a
                  key={c.t}
                  href={c.href}
                  target={c.ext ? "_blank" : undefined}
                  rel={c.ext ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-6 border-b border-line py-6"
                >
                  <span>
                    <span className="block text-sm font-semibold text-muted">{c.t}</span>
                    <span className="mt-1 block font-display text-xl font-semibold transition group-hover:text-brand-500 md:text-2xl">
                      {c.v}
                    </span>
                  </span>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line transition group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                    ↗
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted">
              Atención comercial: {site.manager}, gerencia. {site.address}, {site.city}.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-[1.75rem] bg-paper p-6 sm:p-10 md:p-12">
            <h2 className="text-3xl font-semibold">Solicitá una cotización</h2>
            <p className="mt-2 mb-8 text-muted">Completá el formulario y te contactamos a la brevedad.</p>
            <ContactForm to={site.email} subjectPrefix="Consulta web" />
          </Reveal>
        </div>
      </section>

      <section className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="h-[28.75rem] overflow-hidden rounded-[2rem] bg-paper">
          <iframe title="Ubicación de ESIM" src={mapSrc} className="h-full w-full border-0 grayscale-[40%]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </>
  );
}
