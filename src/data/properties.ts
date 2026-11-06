import type { Property, PropertyImage } from '@/types/property'
// Supplied concept images, not photographs of a verified individual unit.
const complementaryImages: PropertyImage[] = [
  { src: '/images/proyectos2.webp', alt: 'Sala de doble altura con materiales cálidos, imagen referencial' },
  { src: '/images/nosotros2.webp', alt: 'Rincón de lectura junto a una ventana, imagen referencial' },
  { src: '/images/contacto1.webp', alt: 'Sala abierta hacia un patio con vegetación, imagen referencial' },
]
export const homeProperties: Property[] = [
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
// Seven brochure layouts, with unit numbers kept out of the card heading.
const layouts = [
  { units: '101', type: 'Dúplex', area: 113, bedrooms: 2, bathrooms: 3, outdoor: 'Terraza de 12.37 m²', text: 'Dos niveles para disfrutar en familia.\n101: tu espacio para vivir y compartir.' },
  { units: '201/401', type: 'Dúplex', area: 85.30, bedrooms: 1, bathrooms: 2, outdoor: 'Terraza de 22 m²', text: 'Tu espacio, con vida al aire libre.\n201 y 401: descubre tu próximo hogar.' },
  { units: '202/302/402/502', type: 'Flat', area: 117, bedrooms: 2, bathrooms: 3, outdoor: 'Balcón de 11 m²', text: 'Confort y balcón para disfrutar cada día.\nTu próximo hogar: 202, 302, 402 y 502.' },
  { units: '601', type: 'Flat', area: 190, bedrooms: 3, bathrooms: 3, outdoor: 'Balcón de 26 m²', text: 'Amplitud para vivir a tu manera.\n601: un hogar que invita a compartir.' },
  { units: '701', type: 'Dúplex', area: 84.50, bedrooms: 1, bathrooms: 2, outdoor: 'Terraza de 28 m² y balcón de 8 m²', text: 'Dos niveles abiertos al exterior.\n701: disfruta tu terraza y balcón.' },
  { units: '702', type: 'Dúplex', area: 84.50, bedrooms: 1, bathrooms: 2, outdoor: 'Terraza de 27 m² y balcón de 3.5 m²', text: 'Un refugio para vivir a tu ritmo.\n702: haz una pausa al aire libre.' },
  { units: '703', type: 'Dúplex', area: 85.14, bedrooms: 1, bathrooms: 2, outdoor: 'Terraza de 28 m² y balcón de 7 m²', text: 'Privacidad y vida al aire libre.\n703: descubre tu lugar para desconectar.' },
] as const
export const properties: Property[] = layouts.map(layout => {
  const base = homeProperties.find(property => property.type === layout.type)!
  const units = layout.units.replaceAll('/', ', ')
  const rooms = `${layout.bedrooms} ${layout.bedrooms === 1 ? 'dormitorio' : 'dormitorios'} y ${layout.bathrooms} baños`
  const invitation = layout.type === 'Dúplex'
    ? 'Disfruta la privacidad de dos niveles y un espacio al aire libre para hacer una pausa y compartir.'
    : 'Disfruta ambientes para compartir y un balcón que invita a hacer una pausa y vivir a tu ritmo.'
  return {
    ...base,
    ...(layout.units === '703' ? {
      image: 'duplex703-sala',
      gallery: [
        { src: '/images/duplex703-sala.webp', alt: 'Sala y comedor con escalera y terraza' },
        { src: '/images/duplex703-terraza.webp', alt: 'Terraza con vegetación' },
        { src: '/images/duplex703-dormitorio.webp', alt: 'Dormitorio con balcón' },
        { src: '/images/duplex703-cocina.webp', alt: 'Cocina y sala' },
      ],
    } : {}),
    ...(layout.units === '101' ? {
      image: 'duplex101-sala',
      gallery: [
        { src: '/images/duplex101-sala.webp', alt: 'Sala y comedor de dúplex con acceso a terraza' },
        { src: '/images/duplex101-terraza.webp', alt: 'Terraza privada con vegetación' },
        { src: '/images/duplex101-dormitorio.webp', alt: 'Dormitorio con luz natural y acabados cálidos' },
        { src: '/images/duplex101-cocina.webp', alt: 'Cocina y comedor con acabados de madera' },
      ],
    } : {}),
    ...(layout.units === '202/302/402/502' ? {
      image: 'flat117-sala',
      gallery: [
        { src: '/images/flat117-sala.webp', alt: 'Sala y comedor con acceso al balcón' },
        { src: '/images/flat117-balcon.webp', alt: 'Balcón privado con vegetación' },
        { src: '/images/flat117-dormitorio.webp', alt: 'Dormitorio con luz natural' },
        { src: '/images/flat117-cocina.webp', alt: 'Cocina integrada con acabados de madera' },
      ],
    } : {}),
    ...(layout.units === '201/401' ? {
      image: 'duplex201-sala',
      gallery: [
        { src: '/images/duplex201-sala.webp', alt: 'Sala de dúplex a doble altura con escalera' },
        { src: '/images/duplex201-terraza.webp', alt: 'Terraza de 22 m² con zona de estar' },
        { src: '/images/duplex201-dormitorio.webp', alt: 'Dormitorio con tonos terracota y oliva' },
        { src: '/images/duplex201-cocina.webp', alt: 'Cocina de madera oscura y piedra cálida' },
      ],
    } : {}),
    ...(layout.units === '601' ? {
      image: 'flat601-sala',
      gallery: [
        { src: '/images/flat601-sala.webp', alt: 'Sala amplia con balcón de gran formato' },
        { src: '/images/flat601-balcon.webp', alt: 'Balcón de 26 m² con comedor exterior' },
        { src: '/images/flat601-dormitorio.webp', alt: 'Dormitorio principal en tonos azul petróleo y salvia' },
        { src: '/images/flat601-cocina.webp', alt: 'Cocina espaciosa con isla y roble claro' },
      ],
    } : {}),
    ...(layout.units === '702' ? {
      image: 'duplex702-sala',
      gallery: [
        { src: '/images/duplex702-sala.webp', alt: 'Sala de dúplex con escalera y salida a terraza' },
        { src: '/images/duplex702-terraza.webp', alt: 'Terraza privada de 27 m²' },
        { src: '/images/duplex702-dormitorio.webp', alt: 'Dormitorio sereno en tonos arena y azul mineral' },
        { src: '/images/duplex702-cocina.webp', alt: 'Cocina funcional con madera natural' },
      ],
    } : {}),
    ...(layout.units === '701' ? {
      image: 'duplex701-sala',
      gallery: [
        { src: '/images/duplex701-sala.webp', alt: 'Sala a doble altura con escalera y salida al exterior' },
        { src: '/images/duplex701-dormitorio.webp', alt: 'Dormitorio con acentos ciruela y acabados contemporáneos' },
        { src: '/images/duplex701-cocina.webp', alt: 'Cocina con microcemento, madera oscura y metal satinado' },
        { src: '/images/duplex701-terraza.webp', alt: 'Terraza amplia con balcón en el nivel superior' },
      ],
    } : {}),
    slug: `${layout.type === 'Flat' ? 'flat' : 'duplex'}-${layout.units.replaceAll('/', '-')}`,
    title: layout.type === 'Flat' ? 'Flats' : 'Dúplex',
    area: layout.area, bedrooms: layout.bedrooms, bathrooms: layout.bathrooms,
    text: layout.text,
    description: `${layout.units.includes('/') ? 'Unidades' : 'Unidad'} ${units}: ${layout.area} m², ${rooms}. ${layout.outdoor}. ${layout.units === '601' ? 'Hall, sala' : 'Sala'}, comedor, cocina, lavandería y estar familiar. ${invitation}`,
    features: [layout.outdoor, `${layout.bedrooms} ${layout.bedrooms === 1 ? 'dormitorio' : 'dormitorios'}`, `${layout.bathrooms} baños`, 'Estar familiar'],
  }
})
export function propertyPath(property: Property): string { return `/propiedades/vizzen/${property.slug}` }
export function contactPath(property: Property, visit = false): string {
  const params = new URLSearchParams({ tipo: property.title, propiedad: property.slug })
  if (visit) params.set('visita', '1')
  return `/contacto?${params.toString()}`
}
