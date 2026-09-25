// Opciones de diseño en revisión. Para sumar una: crear src/app/opcionN/ y agregar una línea acá.
export type Diseno = { id: number; nombre: string; ruta: string; descripcion: string; captura: string };

export const disenos: Diseno[] = [
  {
    id: 1,
    nombre: "Noche industrial",
    ruta: "/",
    descripcion: "Oscura y cinematográfica: portada con fotos a pantalla completa, servicios interactivos y mapa de bases.",
    captura: "/img/izaje/izaje-01.webp",
  },
  {
    id: 2,
    nombre: "Corporativa clara",
    ruta: "/opcion2",
    descripcion: "Clara y en bloques, al estilo de las grandes empresas de energía, con el verde del logo como acento.",
    captura: "/img/ajuste/bomba-b8-ypf-poliducto-07.webp",
  },
  {
    id: 3,
    nombre: "Pantallas completas",
    ruta: "/opcion3",
    descripcion: "Índigo y verde, al estilo de las grandes petroleras: cada giro de la rueda salta a la pantalla siguiente.",
    captura: "/img/izaje/izaje-03.webp",
  },
];

// Devuelve la opción a la que pertenece una ruta (las que no empiezan con /opcionN son de la Opción 1)
export function disenoDeRuta(pathname: string): number {
  const m = pathname.match(/^\/opcion(\d+)/);
  return m ? Number(m[1]) : 1;
}
