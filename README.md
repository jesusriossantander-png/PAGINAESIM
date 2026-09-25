# ESIM S.R.L. – Sitio web

Nueva web institucional de **ESIM S.R.L.** (Empresa de Servicios Industriales Mecánicos), hecha con Next.js 15, React 19, TypeScript y Tailwind CSS 4.

Diseño "noche industrial": hero con slideshow cinematográfico, explorador de servicios interactivo, carrusel de proyectos y animaciones al hacer scroll. Conserva la identidad (logo, verde ESIM, Space Grotesk + Manrope), los textos, las cifras y el asistente "Andrea" de la versión original de una sola página que estaba en `F:\pages\github`. Esa versión quedó guardada tal cual en [`diseno-original/`](diseno-original/).

## Verla en tu PC (doble clic)

1. Traé la última versión de la rama: `git pull`.
2. Doble clic en **`Iniciar Web ESIM.bat`**. En otros sistemas: `npm run local`.

La primera vez instala las dependencias y prepara la web, lo que tarda un par de minutos. Después:

- **Elige solo un puerto libre**, del 3100 en adelante. Nunca usa los que ya ocupan otros sistemas de ESIM: el **3000** (sistema de partes digitales) y el **50300** (la web anterior). Tampoco usa 3001, 5173 ni 8080.
- **Abre el navegador** y muestra dos direcciones: la de esta PC (`http://localhost:31xx`) y la de la oficina (`http://192.168.0.xxx:31xx`), para verla desde otra PC de la red.
- **Para detenerla**, cerrá la ventana o presioná Ctrl+C.

Opciones: `Iniciar Web ESIM.bat --port 3200` pide un puerto puntual (si está ocupado, busca otro), `--build` fuerza a regenerar la web y `--no-open` no abre el navegador. Si cambió algo del código (por ejemplo, después de un `git pull`), la web se regenera sola.

## Diseños (opciones para comparar)

La web tiene varias propuestas de diseño en el mismo proyecto:

| Opción | Dirección | Carpeta |
| --- | --- | --- |
| 1 · Noche industrial | `/` (y `/servicios`, `/obras`, …) | `src/app/(opcion1)/` |
| 2 · Corporativa clara | `/opcion2` (y sus páginas internas) | `src/app/opcion2/` (+ `src/components/opcion2/`) |
| 3 · Pantallas completas | `/opcion3` | `src/app/opcion3/` (+ `src/components/opcion3/`) |

- `/disenos` muestra todas las opciones. El lanzador abre esa página.
- En cualquier página, el **panel de diseños** (pestaña al costado izquierdo) permite pasar de una opción a otra. Para ocultarlo al publicar: `NEXT_PUBLIC_MOSTRAR_DISENOS=0`.
- **Opción 3 · navegación por pantallas:** en computadoras (desde 1024 px de ancho y 620 px de alto), cada giro de la rueda, flecha, RePág/AvPág o deslizamiento salta a la pantalla siguiente. Los puntos de la derecha llevan a cada pantalla. En el celular se desplaza normalmente. Lo maneja `src/components/opcion3/Pantallas.tsx`; cada pantalla es una `<section data-pantalla="Nombre">`.
- **Para agregar la Opción 4:** crear `src/app/opcion4/` (con su `layout.tsx` y `page.tsx`) y sumar una línea en `src/data/disenos.ts`.

## Correr en local (desarrollo)

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

Build de producción:

```bash
npm run build
npm start
```

## Fotos

Las fotos originales están en `ESIM. COMPARTIDO/` y `TERCEROS (CLIENTES VARIOS)/`. Para agregar o cambiar fotos:

1. Copialas en la carpeta que corresponda. Si agregás una carpeta nueva, sumala a `SOURCES` en `scripts/optimize-images.mjs`.
2. Ejecutá `npm run images`. Esto regenera `public/img/**.webp` (con tamaño máximo de 1920 px) y `src/data/gallery.json`.

## Dónde editar el contenido

| Qué | Archivo |
| --- | --- |
| Datos de cada base (dirección, teléfono, responsable, personal, servicios, equipos, foto) | `src/data/bases.ts` |
| Teléfono, email, dirección, WhatsApp, gerente, cifras, clientes | `src/data/site.ts` |
| Asistente virtual "Andrea" (respuestas y pasos) | `src/components/Asistente.tsx` |
| Servicios (textos, viñetas, foto) | `src/data/servicios.ts` |
| Categorías de obras, títulos de proyectos, fotos destacadas | `src/data/obras.ts` |
| Historia, misión, visión, valores | `src/app/empresa/page.tsx` |
| Colores y tipografías | `src/app/globals.css` (`@theme`) |

Los textos marcados con `CONFIRMAR` son borradores: hay que validarlos con gerencia antes de publicar.

## Páginas

`/` Inicio · `/empresa` (Nosotros) · `/servicios` · `/obras` (Trabajos: galería con filtro y visor) · `/trabaja-con-nosotros` · `/contacto` · `/acceso` (área privada, disponible en la Fase 2)

## Hoja de ruta

Ver [`docs/PROPUESTA.md`](docs/PROPUESTA.md).
