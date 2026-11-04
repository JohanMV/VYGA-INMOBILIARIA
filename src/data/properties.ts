import type { Property, PropertyImage } from '@/types/property'
// Supplied concept images, not photographs of a verified individual unit.
const complementaryImages: PropertyImage[] = [
  { src: '/images/proyectos2.webp', alt: 'Sala de doble altura con materiales cálidos, imagen referencial' },
  { src: '/images/nosotros2.webp', alt: 'Rincón de lectura junto a una ventana, imagen referencial' },
  { src: '/images/contacto1.webp', alt: 'Sala abierta hacia un patio con vegetación, imagen referencial' },
]
export const properties: Property[] = [
  {
    slug: 'loft', title: 'Lofts', type: 'Loft', image: 'propiedades1',
    text: 'Espacios abiertos y versátiles, con carácter contemporáneo.',
    description: 'Una propuesta de espacios abiertos y versátiles, con carácter contemporáneo. Conoce las opciones de lofts de Vizzen y consulta la distribución, las áreas y la disponibilidad con un asesor.',
    project: 'Vizzen', location: 'Miraflores',
    features: ['Espacios abiertos', 'Versatilidad', 'Diseño contemporáneo', 'Proyecto Vizzen'],
    gallery: [{ src: '/images/propiedades1.webp', alt: 'Sala de un loft con sofá de cuero y luz cálida, imagen referencial' }, ...complementaryImages],
  },
  {
    slug: 'flat', title: 'Flats', type: 'Flat', image: 'propiedades2',
    text: 'Distribución eficiente, confort y diseño en cada ambiente.',
    description: 'Una propuesta que integra distribución eficiente, confort y diseño en cada ambiente. Explora la tipología flat de Vizzen y solicita información sobre las distribuciones y unidades disponibles.',
    project: 'Vizzen', location: 'Miraflores',
    features: ['Distribución eficiente', 'Confort', 'Diseño contemporáneo', 'Proyecto Vizzen'],
    gallery: [{ src: '/images/propiedades2.webp', alt: 'Sala y comedor de un flat con materiales naturales, imagen referencial' }, ...complementaryImages],
  },
  {
    slug: 'duplex', title: 'Dúplex', type: 'Dúplex', image: 'propiedades3',
    text: 'Mayor amplitud y privacidad en dos niveles.',
    description: 'Una propuesta de mayor amplitud y privacidad en dos niveles. Descubre las opciones de dúplex de Vizzen y consulta con un asesor los detalles de distribución y disponibilidad.',
    project: 'Vizzen', location: 'Miraflores',
    features: ['Dos niveles', 'Amplitud', 'Privacidad', 'Proyecto Vizzen'],
    gallery: [{ src: '/images/propiedades3.webp', alt: 'Escalera interior y patio de un dúplex, imagen referencial' }, ...complementaryImages],
  },
]
export function propertyPath(property: Property): string { return `/propiedades/vizzen/${property.slug}` }
export function contactPath(property: Property, visit = false): string {
  const params = new URLSearchParams({ tipo: property.title, propiedad: property.slug })
  if (visit) params.set('visita', '1')
  return `/contacto?${params.toString()}`
}
