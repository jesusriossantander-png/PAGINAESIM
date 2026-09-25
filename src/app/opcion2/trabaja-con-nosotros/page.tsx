import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import PageHeader2 from "@/components/opcion2/PageHeader2";
import Titulo from "@/components/opcion2/Titulo";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Trabajá con nosotros · Opción 2" };

const perfiles = ["Ajustadores mecánicos", "Torneros y fresadores", "Soldadores calificados", "Operadores de hidrogrúa", "Técnicos e ingenieros mecánicos", "Técnicos en Higiene y Seguridad"];

export default function Trabaja2() {
  return (
    <>
      <PageHeader2 miga="Trabajá con nosotros" titulo="Buscamos personas con oficio y compromiso" imagen="/img/ductos/ductos-02.webp" />
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <Titulo eyebrow="Perfiles">Lo que buscamos</Titulo>
            <p className="mt-5 text-neutral-600">Valoramos la experiencia, las ganas de aprender y, sobre todo, el compromiso con la seguridad.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {perfiles.map((p) => (
                <li key={p} className="border-l-4 border-acento-500 bg-neutral-100 px-5 py-4 font-extrabold">
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="bg-neutral-100 p-8 md:p-12">
            <h2 className="text-2xl font-extrabold">Envianos tus datos</h2>
            <p className="mt-2 mb-8 text-neutral-600">Adjuntá tu CV al correo que se abrirá al enviar.</p>
            <ContactForm to={site.email} subjectPrefix="Postulación laboral" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
