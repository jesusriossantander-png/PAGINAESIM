# Propuesta: nueva web de ESIM S.R.L.

## Situación actual
- **esimsrl.com.ar** es una web básica, con poca presencia visual y sin área privada.
- ESIM tiene más de 30 años de trayectoria (desde 1993), más de 200 personas y clientes como YPF y Air Liquide. También cuenta con un archivo de fotos muy bueno (ductos, izaje, taller, repuestos y modelos 3D), pero hoy no lo aprovecha.

## Referencia: tangoenergia.com
Web institucional de una petrolera, con:
- Portada con una foto a pantalla completa y un mensaje fuerte.
- Secciones institucionales (empresa, gente, gestión social, HSE).
- Diseño limpio, tipografía grande, animaciones suaves.
- **Área privada con login** para usuarios con permisos.

## Qué proponemos

### Fase 1: web pública (esta entrega)
- Portada con foto a pantalla completa, cifras animadas, servicios, obras destacadas, clientes y acceso al área privada.
- Páginas: Empresa (historia, misión, visión, valores, HSE), Servicios (5 líneas), Obras (galería filtrable con 50 fotos reales), Trabajá con nosotros, Contacto (formulario y mapa).
- Diseño adaptado a celulares, optimizado para Google (SEO) y con imágenes livianas en WebP.
- Botón **"Acceso socios"** con la pantalla de login preparada (queda como "Próximamente").

### Fase 2: portal privado
| Rol | Qué ve |
| --- | --- |
| **Empleado** | Biblioteca de documentos (procedimientos, normas HSE, formularios), noticias internas |
| **Socio / gerencia** | Panel de indicadores (facturación, obras en curso, horas trabajadas, indicadores de seguridad), documentos societarios |
| **Administrador** | Alta y baja de usuarios, permisos, carga de documentos y de indicadores |

Tecnología sugerida: login con Auth.js o Supabase Auth, base de datos Postgres, archivos en almacenamiento seguro y rutas protegidas según el rol. Se construye sobre el mismo proyecto, sin rehacer la web.

### Fase 3 (opcional)
- Portal de clientes: estado de órdenes de trabajo, informes técnicos y certificados.
- Un gestor de contenidos (CMS) para editar textos y fotos sin programar.
- Formulario de contacto con envío automático de correo.

## Para publicar se necesita
1. Acceso al dominio `esimsrl.com.ar` (DNS).
2. Hosting: Vercel (gratis o de bajo costo) o un servidor propio con Node.js.
3. Logo oficial en alta calidad (SVG o PNG).
4. Validar los textos marcados como `CONFIRMAR`: cifras, email, WhatsApp, historia y autorización para mostrar nombres de clientes.
