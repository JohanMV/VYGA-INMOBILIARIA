import { ArrowRight, ArrowUpRight, Bath, BedDouble, CalendarDays, Download, Expand, Layers2, PanelsTopLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Property } from '@/types/property'
import { contactPath } from '@/data/properties'
export interface PropertySummaryProps { property: Property }
export function PropertySummary({ property }: PropertySummaryProps) {
  return <aside className="property-summary" aria-labelledby="property-summary-title"><h2 id="property-summary-title">{property.title}</h2><dl className="summary-metrics"><div><Expand /><dt>Área total</dt><dd>{property.area === undefined ? 'A consultar' : `${property.area} m²`}</dd></div><div><BedDouble /><dt>Dormitorios</dt><dd>{property.bedrooms === undefined ? 'A consultar' : `${property.bedrooms} dorm.`}</dd></div><div><Bath /><dt>Baños</dt><dd>{property.bathrooms === undefined ? 'A consultar' : `${property.bathrooms} baños`}</dd></div></dl><div className="summary-actions"><Link className="button button--dark" to={contactPath(property)}>Consultar disponibilidad<ArrowUpRight size={19} /></Link><Link className="button button--outline" to={contactPath(property, true)}><CalendarDays size={20} />Agendar visita</Link></div><div className="summary-resources">
    {property.floorPlan ? <a href={property.floorPlan} target="_blank" rel="noreferrer"><PanelsTopLeft />Ver plano de distribución<ArrowRight /></a> : <button type="button" className="summary-resource-unavailable" title="Plano oficial no disponible"><PanelsTopLeft /><span>Plano de distribución<small>No disponible</small></span></button>}
    {property.brochure ? <a href={property.brochure} download><Download />Descargar brochure<ArrowRight /></a> : <button type="button" className="summary-resource-unavailable" title="Brochure oficial no disponible"><Download /><span>Descargar brochure<small>No disponible</small></span></button>}
    <Link to="/proyectos/vizzen"><Layers2 />Conocer el proyecto Vizzen<ArrowRight /></Link>
  </div></aside>
}
