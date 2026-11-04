import { Building2, Layers2, Leaf, MapPin } from 'lucide-react'
import { Button, Eyebrow, Reveal } from '../ui'
export interface SectionProps { page?: boolean }
const pillars = [{ icon: Layers2, title: 'Diseño arquitectónico', text: 'Espacios funcionales y atemporales.' }, { icon: Leaf, title: 'Calidad de vida', text: 'Ambientes que se adaptan a tu estilo.' }, { icon: MapPin, title: 'Ubicación estratégica', text: 'Proyectos en Miraflores y zonas clave.' }, { icon: Building2, title: 'Desarrollo integral', text: 'Desde la arquitectura hasta la entrega.' }]
export function About({ page = false }: SectionProps) {
 const Heading = page ? 'h1' : 'h2'
 return <section className="about section" id="nosotros"><div className="container"><div className="about-grid"><Reveal className="about-copy"><Eyebrow>SOBRE VYGA</Eyebrow><Heading>Más que inmobiliaria,<br />creamos espacios<br /><em>con propósito.</em></Heading><p className="description">Desarrollamos proyectos residenciales contemporáneos que integran arquitectura, diseño y bienestar, pensados para una vida urbana auténtica en Miraflores.</p><Button to={page ? '/contacto' : '/nosotros'}>{page ? 'Conversemos sobre tu espacio' : 'Conoce más de nosotros'}</Button></Reveal><Reveal className="about-collage"><div className="stone stone-about" /><img className="about-main" src="/images/nosotros1.webp" alt="Fachada de piedra natural con balcones y vegetación" loading="eager" /><img className="about-detail" src="/images/nosotros2.webp" alt="Rincón de lectura con sillón de cuero y luz cálida" loading="eager" /></Reveal></div><div className="pillars">{pillars.map(({ icon: Icon, title, text }) => <Reveal key={title} className="pillar"><Icon strokeWidth={1.2} /><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
}


