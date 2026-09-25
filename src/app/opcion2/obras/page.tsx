import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHeader2 from "@/components/opcion2/PageHeader2";

export const metadata: Metadata = { title: "Proyectos · Opción 2" };

export default function Obras2() {
  return (
    <>
      <PageHeader2 miga="Proyectos" titulo="Trabajos realizados en campo y en taller" texto="Ductos, equipos rotativos, logística pesada e ingeniería para nuestros clientes." imagen="/img/izaje/izaje-04.webp" />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Gallery />
        </div>
      </section>
    </>
  );
}
