// Textos borrador a partir de los trabajos que muestran las fotos: CONFIRMAR con gerencia.
export type Servicio = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  image: string;
};

export const servicios: Servicio[] = [
  {
    slug: "ajuste",
    title: "Ajuste y reparación de máquinas",
    short: "Mantenimiento y overhaul de equipos rotantes y alternativos.",
    description:
      "Reparamos y mantenemos bombas, compresores, motores y turbomáquinas de distintas potencias, en taller o en campo, minimizando los tiempos de parada de planta.",
    bullets: [
      "Bombas centrífugas y de poliducto",
      "Compresores industriales",
      "Motores a gas (ej. Cooper Superior)",
      "Alineación, balanceo y puesta en marcha",
    ],
    image: "/img/ajuste/motor-cooper-superior-yac-malargue-14.webp",
  },
  {
    slug: "repuestos",
    title: "Fabricación de repuestos",
    short: "Mecanizado de precisión y recuperación de piezas críticas.",
    description:
      "Fabricamos repuestos a medida por ingeniería inversa: cojinetes, bujes, rodetes, válvulas y componentes especiales en bronce, acero e inoxidable.",
    bullets: [
      "Cojinetes y bujes de bronce",
      "Rodetes y piezas de válvulas",
      "Ingeniería inversa y relevamiento dimensional",
      "Control de calidad y trazabilidad",
    ],
    image: "/img/repuestos/repuestos-06.webp",
  },
  {
    slug: "oficina-tecnica",
    title: "Oficina técnica",
    short: "Diseño 3D, planos y desarrollo de soluciones a medida.",
    description:
      "Nuestro equipo de ingeniería modela en 3D, calcula y documenta cada pieza y dispositivo antes de fabricarlo, asegurando precisión y repetibilidad.",
    bullets: [
      "Modelado 3D y planos de fabricación",
      "Diseño de dispositivos y herramentales",
      "Análisis de fallas",
      "Documentación técnica para el cliente",
    ],
    image: "/img/oficina-tecnica/oficina-tecnica-03.webp",
  },
  {
    slug: "ductos",
    title: "Acondicionamiento de ductos",
    short: "Soldadura, montaje y reparación de cañerías en campo.",
    description:
      "Ejecutamos tendido, soldadura y acondicionamiento de ductos con personal calificado y equipamiento propio, cumpliendo estrictos estándares de seguridad.",
    bullets: [
      "Soldadura calificada de cañerías",
      "Reparación y reemplazo de tramos",
      "Zanjeo, bajada y tapado",
      "Ensayos y documentación de calidad",
    ],
    image: "/img/ductos/ductos-12.webp",
  },
  {
    slug: "izaje",
    title: "Logística e izaje",
    short: "Camiones con hidrogrúa, grúas y transporte de equipos pesados.",
    description:
      "Contamos con flota propia de camiones con hidrogrúa y semirremolques para el movimiento, montaje y traslado de equipos industriales.",
    bullets: [
      "Camiones con hidrogrúa",
      "Montaje y desmontaje de equipos",
      "Traslado de cargas pesadas",
      "Apoyo logístico a obras civiles",
    ],
    image: "/img/izaje/izaje-05.webp",
  },
];
