import { Layers2, MapPin, SlidersHorizontal } from 'lucide-react'
import { Button, Eyebrow, Reveal } from '../ui'
import type { SectionProps } from './About'
export function Projects({ page = false }: SectionProps) {
 const Heading = page ? 'h1' : 'h2'
 return <section className="projects section" id="proyectos"><div className="container projects-grid"><Reveal className="project-copy"><Eyebrow>PROYECTOS</Eyebrow><Heading>Un proyecto que<br />interpreta la vida<br /><em>contemporánea.</em></Heading><p className="project-name">Vizzen <span /> <small>MIRAFLORES</small></p><p className="description">Vizzen es un proyecto residencial contemporáneo en Miraflores, con arquitectura, diseño, distribución funcional y un estilo de vida urbano refinado.</p><div className="project-features"><div><MapPin /><span>Miraflores</span></div><div><Layers2 /><span>Lofts, flats y dúplex</span></div><div><SlidersHorizontal /><span>Opciones de<br />personalización</span></div></div><div className="actions"><Button to="/proyectos/vizzen">{page ? 'Ver proyecto' : 'Explorar proyecto'}</Button><Button to="/propiedades" variant="outline">Ver propiedades</Button></div></Reveal><Reveal className="project-collage"><div className="stone stone-project" /><img className="project-main" src="/images/proyectos1.webp" alt="Referencia arquitectónica de la fachada residencial Vizzen" loading="eager" /><img className="project-top" src="/images/proyectos2.webp" alt="Sala de estar de doble altura y materiales cálidos" loading="eager" /><img className="project-bottom" src="/images/proyectos3.webp" alt="Detalle de concreto con vegetación y sombras naturales" loading="eager" /><div className="vizzen-sign"><span>VIZZEN</span><i /><small>RESIDENCIAL EN MIRAFLORES</small></div></Reveal></div></section>
}


