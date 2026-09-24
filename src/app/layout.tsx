import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/montserrat";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Servicios Industriales Mecánicos – Mendoza`,
    template: `%s | ${site.name}`,
  },
  description: `${site.legalName}. ${site.tagline}. Desde ${site.foundedYear} en Luján de Cuyo, Mendoza.`,
  metadataBase: new URL("https://www.esimsrl.com.ar"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.name,
    images: ["/img/izaje/izaje-02.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
