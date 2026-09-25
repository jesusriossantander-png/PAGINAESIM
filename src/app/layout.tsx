import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import DesignSwitcher from "@/components/DesignSwitcher";
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
    images: ["/img/izaje/izaje-01.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}.reveal-img{clip-path:none}.reveal .bar{transform:none}`}</style>
        </noscript>
      </head>
      <body>
        {children}
        <DesignSwitcher />
      </body>
    </html>
  );
}
