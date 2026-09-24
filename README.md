# ESIM S.R.L. – Sitio web

Nueva web institucional de **ESIM S.R.L.** (Empresa de Servicios Industriales Mecánicos), hecha con Next.js 15, React 19, TypeScript y Tailwind CSS 4.

## Correr en local

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
| Teléfono, email, dirección, WhatsApp, cifras, clientes | `src/data/site.ts` |
| Servicios (textos, viñetas, foto) | `src/data/servicios.ts` |
| Categorías de obras, títulos de proyectos, fotos destacadas | `src/data/obras.ts` |
| Historia, misión, visión, valores | `src/app/empresa/page.tsx` |
| Colores y tipografías | `src/app/globals.css` (`@theme`) |

Los textos marcados con `CONFIRMAR` son borradores: hay que validarlos con gerencia antes de publicar.

## Páginas

`/` Inicio · `/empresa` · `/servicios` · `/obras` (galería con filtro y visor) · `/trabaja-con-nosotros` · `/contacto` · `/acceso` (área privada, disponible en la Fase 2)

## Hoja de ruta

Ver [`docs/PROPUESTA.md`](docs/PROPUESTA.md).
