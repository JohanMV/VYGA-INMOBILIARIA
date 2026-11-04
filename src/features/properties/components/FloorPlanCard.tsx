import { ArrowUpRight, PanelsTopLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactPath } from '@/data/properties'
import type { Property } from '@/types/property'

export interface FloorPlanCardProps { property: Property }
export function FloorPlanCard({ property }: FloorPlanCardProps) {
  return <section className="distribution-card" aria-labelledby="floorplan-title">
    {property.floorPlan ? <a className="distribution-preview" href={property.floorPlan} target="_blank" rel="noreferrer" aria-label={`Ampliar plano de ${property.title}`}><img src={property.floorPlan} alt={`Plano de distribución de ${property.title}`} /></a>
      : <div className="distribution-preview distribution-preview--pending" aria-hidden="true"><PanelsTopLeft strokeWidth={1} /><span>Plano por confirmar</span></div>}
    <div className="distribution-copy"><h2 id="floorplan-title">Plano de distribución</h2><p>{property.floorPlan ? `Conoce la distribución y los ambientes de ${property.title}.` : `Solicita al asesor el plano de distribución de ${property.title}.`}</p>
      {property.floorPlan ? <a className="button button--outline" href={property.floorPlan} target="_blank" rel="noreferrer">Ver plano<ArrowUpRight size={18} /></a>
        : <Link className="button button--outline" to={`${contactPath(property)}&plano=1`}>Solicitar plano<ArrowUpRight size={18} /></Link>}
    </div>
  </section>
}
