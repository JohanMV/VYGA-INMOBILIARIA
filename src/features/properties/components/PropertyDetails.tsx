import { MapPin, PanelsTopLeft, Leaf, Layers2, Sofa, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { properties } from '@/data/properties'
import { Breadcrumbs } from './Breadcrumbs'
import { PropertyGallery } from './PropertyGallery'
import { PropertySummary } from './PropertySummary'
import { FloorPlanCard } from './FloorPlanCard'
import '../styles/properties.css'
import '../styles/responsive.css'
const featureIcons = [PanelsTopLeft, Leaf, Layers2, Sofa]
export function PropertyDetails() {
  const { slug } = useParams<{ slug: string }>()
  const property = properties.find(item => item.slug === slug)
  if (!property) return <section className="container property-not-found"><h1>No encontramos esta propiedad.</h1><p>Explora las tipologías disponibles de Vizzen.</p><Link className="button button--dark" to="/propiedades">Volver a propiedades<ArrowUpRight size={18} /></Link></section>
  return <div className="property-page"><header className="catalog-banner" aria-labelledby="detail-title"><img src={property.gallery[0].src} alt="" fetchPriority="high" /><div className="catalog-banner-shade" /><div className="container"><Breadcrumbs title={property.title} /><h1 id="detail-title">{property.title}</h1><p>{property.text}</p></div></header><div className="detail-page container"><p className="detail-location"><MapPin />{property.project.toUpperCase()} · {property.location.toUpperCase()}</p><div className="property-detail-grid"><PropertyGallery key={property.slug} property={property} /><PropertySummary property={property} /></div><div className="detail-information"><section className="detail-features" aria-labelledby="features-title"><h2 id="features-title">Características</h2><ul>{property.features.map((feature, index) => { const Icon = featureIcons[index]; return <li key={feature}><Icon strokeWidth={1.3} /><span>{feature}</span></li> })}</ul></section><section className="detail-copy" aria-labelledby="description-title"><h2 id="description-title">Descripción</h2><p>{property.description}</p></section><FloorPlanCard property={property} /></div></div></div>
}

