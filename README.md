# VYGA Inmobiliaria

Web multipágina en React 19, TypeScript estricto, Vite, Tailwind CSS v4 y Motion. Diseño basado en las cinco referencias aprobadas, con las diez fotografías locales de public/images.

## Desarrollo

- pnpm install
- pnpm dev (http://localhost:5173)
- pnpm build
- pnpm lint

## Rutas

Inicio /, Nosotros /nosotros, Proyectos /proyectos, Vizzen /proyectos/vizzen, Propiedades /propiedades y Contacto /contacto. El catálogo filtra por tipología. Las consultas transmiten la tipología en la URL y Agendar visita precarga el mensaje.

## Conectar el formulario

Copia .env.example a .env.local y configura VITE_CONTACT_ENDPOINT con un servicio real que acepte POST JSON con name, phone, email, type y message. Reinicia Vite después del cambio. La respuesta HTTP 2xx confirma la recepción. El servicio debe validar los campos, gestionar consentimiento y protección contra abuso y entregar las consultas al destinatario real. Si no existe un endpoint, la interfaz muestra un aviso y conserva los datos; nunca simula un envío.

Los metrajes, dormitorios, precios, disponibilidad, dirección y contactos no se han inventado. Los metadatos de área y distribución indican consulta hasta contar con información verificada. El logotipo es una reproducción tipográfica: reemplazarlo por el archivo oficial cuando se facilite. Los soportes decorativos son piedra de color plano, sin un archivo de textura original.

## Verificación

Revisión visual manual con capturas de escritorio (1440 y 1672 px), tablet (768 px) y móvil (390 px). Sin desbordamiento horizontal en las medidas revisadas. Diez fotografías locales cargadas. Comprobados menú móvil, filtro Flats, consulta preseleccionada y aviso de envío no configurado. Capturas en qa/. Las comprobaciones automáticas de diseño no se ejecutaron; no se afirma una comparación pixel a pixel. La compilación y ESLint se ejecutan por separado.

TypeScript se ajustó a 6.0.3 porque el typescript-eslint instalado no admite TypeScript 7.0. La aplicación conserva React 19 y TypeScript estricto.
