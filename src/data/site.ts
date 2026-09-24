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
  { name: "YPF", logo: "/clients/ypf.svg" },
  { name: "Air Liquide", logo: "/clients/airliquide.svg" },
  { name: "YPF Poliducto", logo: null },
  { name: "Yac. Malargüe", logo: null },
];

// CONFIRMAR: testimonios del diseño original; validar que sean reales antes de publicar.
export const testimonios = [
  {
    texto:
      "Respondieron a una parada de planta en tiempo récord y dejaron el equipo operativo. Cumplieron en seguridad y plazos.",
    iniciales: "JM",
    cargo: "Jefe de Mantenimiento",
    empresa: "Operadora de Oil & Gas",
  },
  {
    texto: "Fabricaron un repuesto que ya no se conseguía a partir de un modelo 3D. Excelente nivel técnico y trato.",
    iniciales: "SC",
    cargo: "Supervisor de Compras",
    empresa: "Planta industrial",
  },
  {
    texto:
      "El servicio de hidrogrúa y logística fue clave para mover equipos pesados sin contratiempos. Muy recomendables.",
    iniciales: "RL",
    cargo: "Responsable de Logística",
    empresa: "Yacimiento Malargüe",
  },
];
