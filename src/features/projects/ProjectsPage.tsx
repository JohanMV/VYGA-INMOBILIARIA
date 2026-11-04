import { useState } from 'react'
import { Building2, CheckCircle2, ChevronRight, Grid2X2, Layers2, MapPin, SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui'
import './projects-page.css'

export function ProjectsPage() {
  const [filter, setFilter] = useState<'Todos' | 'En desarrollo' | 'Entregados'>('Todos')
  const filters = [{ label: 'Todos' as const, Icon: Grid2X2 }, { label: 'En desarrollo' as const, Icon: Building2 }, { label: 'Entregados' as const, Icon: CheckCircle2 }]
  return <div className="projects-page">
    <section className="catalog-banner" aria-labelledby="projects-title"><img src="/images/nosotros1.webp" alt="" fetchPriority="high" /><div className="catalog-banner-shade" /><div className="container"><nav className="property-breadcrumbs" aria-label="Ruta de navegación"><ol><li><Link to="/">Inicio</Link></li><li><ChevronRight /><span aria-current="page">Proyectos</span></li></ol></nav><h1 id="projects-title">Nuestros proyectos</h1><p>Desarrollos residenciales que integran arquitectura, diseño y<br className="catalog-desktop-break" /> calidad de vida en las mejores zonas de Miraflores.</p></div></section>
    <div className="container projects-catalog"><div className="projects-toolbar"><div className="projects-filters" aria-label="Filtrar proyectos">{filters.map(({ label, Icon }) => <button type="button" className={filter === label ? 'is-active' : ''} aria-pressed={filter === label} onClick={() => setFilter(label)} key={label}><Icon />{label}</button>)}</div><label className="projects-sort">Ordenar por: <select defaultValue="original"><option value="original">Orden original</option></select></label></div>
      <p className="projects-count">{filter === 'Todos' ? '1 proyecto encontrado' : '0 proyectos encontrados'}</p>
      {filter === 'Todos' ? <article className="projects-listing"><img className="projects-listing-main" src="/images/proyectos1.webp" alt="Imagen referencial de la fachada de Vizzen" /><div className="projects-listing-copy"><p className="projects-listing-label">VIZZEN <span /> <small>MIRAFLORES</small></p><h2>Vizzen</h2><p className="projects-listing-subtitle">Residencial en Miraflores.</p><p className="projects-listing-description">Proyecto residencial contemporáneo, con arquitectura, diseño, distribución funcional y un estilo de vida urbano refinado.</p><div className="projects-listing-features"><div><MapPin /><span>Miraflores</span></div><div><Layers2 /><span>Lofts, flats y dúplex</span></div><div><SlidersHorizontal /><span>Opciones de personalización</span></div></div><div className="projects-listing-actions"><Button to="/proyectos/vizzen">Ver proyecto</Button><Button to="/propiedades" variant="outline">Ver propiedades</Button></div></div><div className="projects-listing-images"><img src="/images/propiedades1.webp" alt="Imagen referencial de un loft" /><img src="/images/propiedades2.webp" alt="Imagen referencial de un flat" /></div></article> : <p className="projects-empty">No hay proyectos con estado confirmado en esta categoría.</p>}
      <div className="projects-callout"><Building2 /><div><h2>¿Buscas una propiedad en Vizzen?</h2><p>Descubre las unidades disponibles y encuentra la ideal para ti.</p></div><Button to="/propiedades" variant="light">Ver propiedades</Button></div>
    </div>
  </div>
}
