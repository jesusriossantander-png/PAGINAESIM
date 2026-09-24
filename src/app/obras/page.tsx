import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Obras" };

export default function ObrasPage() {
  return (
    <>
      <PageHeader
        title="Obras y trabajos"
        subtitle="Una muestra de los trabajos realizados en taller y en campo para nuestros clientes."
        image="/img/izaje/izaje-01.webp"
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Gallery />
        </div>
      </section>
    </>
  );
}
