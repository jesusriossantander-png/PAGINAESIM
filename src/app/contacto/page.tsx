import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
  return (
    <>
      <PageHeader
        title="Contacto"
        subtitle="Contanos qué necesitás: te respondemos a la brevedad."
        image="/img/ajuste/bomba-b8-ypf-poliducto-03.webp"
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <InfoCard title="Dirección">
              {site.address}
              <br />
              {site.city}
            </InfoCard>
            <InfoCard title="Teléfono">
              <a href={site.phoneHref} className="hover:text-brand-600">
                {site.phone}
              </a>
            </InfoCard>
            <InfoCard title="Email">
              <a href={`mailto:${site.email}`} className="hover:text-brand-600">
                {site.email}
              </a>
            </InfoCard>
            {site.whatsapp && (
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white"
              >
                Escribinos por WhatsApp
              </a>
            )}
          </div>
          <div className="rounded-2xl border border-steel-100 p-6 shadow-sm sm:p-10">
            <h2 className="mb-6 text-2xl font-extrabold">Solicitá una cotización</h2>
            <ContactForm to={site.email} subjectPrefix="Consulta web" />
          </div>
        </div>
      </section>
      <section className="h-[420px] bg-steel-100">
        <iframe
          title="Ubicación de ESIM"
          src={mapSrc}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-steel-50 p-6">
      <p className="text-sm font-bold tracking-[0.2em] text-brand-500 uppercase">{title}</p>
      <p className="mt-2 text-lg text-ink-800">{children}</p>
    </div>
  );
}
