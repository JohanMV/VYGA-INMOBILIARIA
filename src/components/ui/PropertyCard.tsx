import { ArrowRight, Expand, BedDouble } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Property } from '@/types/property'
import { propertyPath } from '@/data/properties'

export interface PropertyCardProps { property: Property; variant?: 'home' | 'catalog' }
/** A single presentation shared by the Home and catalog. */
export function PropertyCard({ property, variant = 'home' }: PropertyCardProps) {
  const destination = variant === 'catalog' ? propertyPath(property) : `/contacto?tipo=${encodeURIComponent(property.title)}`
  return <article className={variant === 'catalog' ? 'catalog-property' : undefined}><div className="property-photo"><img src={`/images/${property.image}.webp`} alt={`Referencia de un interior ${property.title.toLowerCase()} con arquitectura contemporánea`} loading="eager" /><span>{property.title.toUpperCase()}</span></div><div className="property-info"><div className="property-title"><h3>{property.title}</h3><span>{property.project.toUpperCase()} · {property.location.toUpperCase()}</span></div><p>{property.text}</p><div className="property-meta"><span><Expand />{property.area === undefined ? <>Área a<br />consultar</> : <span>{property.area} m²</span>}</span><span><BedDouble />{property.bedrooms === undefined ? <>Distribución<br />a consultar</> : <span>{property.bedrooms} {property.bedrooms === 1 ? 'dormitorio' : 'dormitorios'}</span>}</span></div><Link className="property-button" to={destination}>{variant === 'catalog' ? 'Ver detalles' : 'Consultar detalles'}<ArrowRight size={22} /></Link></div></article>
}
