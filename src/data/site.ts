// Datos institucionales, tomados del diseño original (diseno-original/index.html).
export const site = {
  name: "ESIM S.R.L.",
  legalName: "Empresa de Servicios Industriales Mecánicos S.R.L.",
  tagline:
    "Acondicionamiento de ductos, ajuste y reparación de equipos rotativos, logística con hidrogrúa y oficina técnica. Trabajo de campo y taller con estándares de seguridad y calidad.",
  foundedYear: 1993,
  phone: "+54 9 261 243-4393",
  phoneHref: "tel:+5492612434393",
  email: "contacto@esimsrl.com",
  whatsapp: "5492612434393",
  manager: "Juan Pablo Satlari",
  address: "Coronel Brandsen s/n",
  city: "Perdriel, Luján de Cuyo, Mendoza · Operación en Cuyo y Patagonia",
  mapsUrl: "https://maps.app.goo.gl/Z4U9gA9sZqHPpwsT9",
  mapQuery: "ESIM SRL, Coronel Brandsen, Perdriel, Luján de Cuyo, Mendoza",
  linkedin: "https://ar.linkedin.com/company/esimsrl-mendoza",
};

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/empresa", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/obras", label: "Trabajos" },
  { href: "/contacto", label: "Contacto" },
];

export const stats = [
  { value: 30, prefix: "+", suffix: "", label: "Años en la industria" },
  { value: 3000, prefix: "+", suffix: "", label: "Equipos dinámicos intervenidos" },
  { value: 2000, prefix: "+", suffix: "", label: "Equipos intervenidos en campo" },
  { value: 24, prefix: "", suffix: "/7", label: "Disponibilidad en obra" },
];

export const indicadores = [
  { label: "Seguridad y cumplimiento (HSE)", value: 98 },
  { label: "Reparación de precisión", value: 96 },
  { label: "Cumplimiento de plazos", value: 97 },
];

export const clients = [
  { name: "YPF", logo: "/clients/ypf.png", detail: "Oil & Gas" },
  { name: "Air Liquide", logo: "/clients/airliquide.svg", detail: "Gases industriales" },
  { name: "YPF Poliducto", logo: "/clients/ypf.png", detail: "Transporte de combustibles" },
  { name: "Yacimiento Malargüe", logo: null, detail: "Upstream · Mendoza" },
];
