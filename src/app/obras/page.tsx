import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Proyectos" };

export default function ObrasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proyectos"
        title={
          <>
            Trabajo real, <span className="text-brand-300">en campo y en taller.</span>
          </>
        }
        subtitle="Ductos, equipos rotativos, logística pesada e ingeniería: una muestra de lo que hacemos para nuestros clientes."
        image="/img/izaje/izaje-04.webp"
      />
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Gallery />
        </div>
      </section>
    </>
  );
}
