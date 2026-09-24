// Datos institucionales. Los marcados con "CONFIRMAR" son borradores a validar con gerencia.
export const site = {
  name: "ESIM S.R.L.",
  legalName: "Empresa de Servicios Industriales Mecánicos S.R.L.",
  tagline: "Servicios industriales metalmecánicos para Oil & Gas y la industria de proceso continuo",
  foundedYear: 1993,
  phone: "(0261) 498-5249",
  phoneHref: "tel:+542614985249",
  email: "info@esimsrl.com.ar", // CONFIRMAR
  whatsapp: "", // CONFIRMAR: número en formato 549261XXXXXXX para habilitar el botón
  address: "Coronel Brandsen s/n",
  city: "Perdriel, Luján de Cuyo, Mendoza, Argentina",
  mapQuery: "ESIM SRL, Coronel Brandsen, Perdriel, Luján de Cuyo, Mendoza",
  linkedin: "https://ar.linkedin.com/company/esimsrl-mendoza",
};

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/empresa", label: "Empresa" },
  { href: "/servicios", label: "Servicios" },
  { href: "/obras", label: "Obras" },
  { href: "/trabaja-con-nosotros", label: "Trabajá con nosotros" },
  { href: "/contacto", label: "Contacto" },
];

// CONFIRMAR: cifras institucionales
export const stats = [
  { value: new Date().getFullYear() - 1993, suffix: "", label: "años de trayectoria" },
  { value: 200, suffix: "+", label: "personas en nuestro equipo" },
  { value: 5, suffix: "", label: "líneas de servicio integradas" },
];

// CONFIRMAR: mostrar nombres/logos de clientes sólo con autorización
export const clients = ["YPF", "Air Liquide", "Yacimientos de Malargüe", "Industria de proceso continuo"];
