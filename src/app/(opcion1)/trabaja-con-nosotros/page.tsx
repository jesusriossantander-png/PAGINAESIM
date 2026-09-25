import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Trabajá con nosotros" };

const perfiles = [
  "Ajustadores mecánicos",
  "Torneros y fresadores",
  "Soldadores calificados",
  "Operadores de hidrogrúa",
  "Técnicos e ingenieros mecánicos",
  "Técnicos en Higiene y Seguridad",
];

export default function TrabajaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trabajá con nosotros"
        title={
          <>
            Sumate a un equipo <span className="text-brand-300">con oficio.</span>
          </>
        }
        subtitle="Más de 30 años formando personas en la industria energética de Cuyo y Patagonia."
        image="/img/ductos/ductos-02.webp"
      />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow text-brand-500">Perfiles</p>
            <h2 className="mt-5 text-4xl font-semibold md:text-5xl">Lo que <em>buscamos.</em></h2>
            <p className="mt-6 text-lg text-muted">
              Valoramos la experiencia, las ganas de aprender y, sobre todo, el compromiso con la seguridad.
            </p>
            <ul className="mt-10 border-t border-line">
              {perfiles.map((p) => (
                <li key={p} className="flex items-center justify-between border-b border-line py-5 font-display text-xl font-medium">
                  {p}
                  <span className="text-brand-500">→</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="rounded-[28px] bg-paper p-6 sm:p-10 md:p-12">
            <h2 className="mb-2 text-3xl font-semibold">Envianos tus datos</h2>
            <p className="mb-8 text-muted">Adjuntá tu CV al correo que se abrirá al enviar.</p>
            <ContactForm to={site.email} subjectPrefix="Postulación laboral" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
