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
        title="Trabajá con nosotros"
        subtitle="Sumate a un equipo con más de 30 años de oficio en la industria."
        image="/img/ductos/ductos-02.webp"
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold">Perfiles que buscamos</h2>
            <p className="mt-4 text-lg text-steel-500">
              Valoramos la experiencia, las ganas de aprender y, sobre todo, el compromiso con la seguridad.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {perfiles.map((p) => (
                <li key={p} className="rounded-xl bg-steel-50 px-5 py-4 font-medium text-ink-800">
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-steel-100 p-6 shadow-sm sm:p-10">
            <h2 className="mb-2 text-2xl font-extrabold">Envianos tus datos</h2>
            <p className="mb-6 text-sm text-steel-500">Adjuntá tu CV al correo que se abrirá al enviar.</p>
            <ContactForm to={site.email} subjectPrefix="Postulación laboral" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
