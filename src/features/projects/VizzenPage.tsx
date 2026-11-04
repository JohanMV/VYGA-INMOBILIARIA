import { ArrowUpRight, Building2, CalendarDays, ChevronRight, Layers2, Leaf, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button, Eyebrow } from '@/components/ui'
import { properties, propertyPath } from '@/data/properties'
import './vizzen.css'

export function VizzenPage() {
  return <div className="vizzen-page">
    <section className="vizzen-hero">
      <img className="vizzen-hero-image" src="/images/proyectos1.webp" alt="Imagen referencial de la fachada de Vizzen" />
      <div className="vizzen-hero-copy">
        <nav className="vizzen-breadcrumbs" aria-label="Ruta de navegación"><Link to="/">Inicio</Link><ChevronRight /><Link to="/proyectos">Proyectos</Link><ChevronRight /><span aria-current="page">Vizzen</span></nav>
        <h1>Vizzen</h1><p className="vizzen-subtitle">RESIDENCIAL EN MIRAFLORES</p>
        <p className="vizzen-intro">Un proyecto contemporáneo que integra arquitectura, diseño y calidad de vida.</p>
        <div className="vizzen-actions"><Button to="/propiedades">Ver propiedades</Button><Link className="button button--outline" to="/contacto?proyecto=Vizzen&visita=1"><CalendarDays size={23} />Agendar visita</Link></div>
      </div>
    </section>
    <div className="vizzen-highlights"><div><MapPin /><span>Miraflores</span></div><div><Layers2 /><span>Lofts, flats y dúplex</span></div><div><Leaf /><span>Diseño contemporáneo</span></div><div><Building2 /><span>Espacios funcionales</span></div></div>
    <section className="vizzen-types container"><div className="vizzen-types-heading"><Eyebrow>TIPOLOGÍAS</Eyebrow><h2>Encuentra tu{' '}<br />espacio <em>ideal.</em></h2></div><div className="vizzen-types-grid">{properties.map(property => <Link className="vizzen-type" key={property.slug} to={propertyPath(property)}><img src={`/images/${property.image}.webp`} alt={property.gallery[0].alt} /><span>{property.title}<ArrowUpRight /></span></Link>)}</div></section>
  </div>
}
