import { Layers2, Leaf, MapPin, UsersRound } from 'lucide-react'
import { Button, Eyebrow } from '@/components/ui'
import './about-page.css'

const values = [
  { icon: Layers2, title: 'Diseño', text: 'Espacios funcionales y atemporales.' },
  { icon: Leaf, title: 'Bienestar', text: 'Ambientes que se adaptan a tu estilo de vida.' },
  { icon: MapPin, title: 'Compromiso', text: 'Proyectos sólidos y de alta calidad.' },
  { icon: UsersRound, title: 'Confianza', text: 'Acompañamiento cercano en cada etapa.' },
]

export function AboutPage() {
  return <div className="about-page">
    <section className="about-page-intro"><div className="container about-page-intro-grid"><div><Eyebrow>SOBRE VYGA</Eyebrow><h1>Más que inmobiliaria,<br />creamos espacios<br /><em>con propósito.</em></h1><p>Desarrollamos proyectos residenciales contemporáneos que integran arquitectura, diseño y bienestar, pensados para una vida urbana auténtica en Miraflores.</p></div><div className="about-page-collage"><span /><img className="about-page-main" src="/images/nosotros1.webp" alt="Fachada con vegetación y piedra natural" /><img className="about-page-detail" src="/images/nosotros2.webp" alt="Sillón junto a una ventana con luz natural" /></div></div></section>
    <section className="about-philosophy"><div className="container about-philosophy-grid"><div className="about-philosophy-image"><img src="/images/contacto1.webp" alt="Patio residencial con vegetación y luz natural" /></div><div className="about-philosophy-copy"><div><Eyebrow>NUESTRA MISIÓN</Eyebrow><h2>Desarrollar proyectos que eleven la <em>calidad de vida</em> de las personas.</h2></div><div><Eyebrow>NUESTRA VISIÓN</Eyebrow><h2>Ser una inmobiliaria referente en <em>arquitectura residencial contemporánea en Miraflores.</em></h2></div></div></div></section>
    <section className="about-values container"><Eyebrow>NUESTROS VALORES</Eyebrow><div className="about-values-grid">{values.map(({ icon: Icon, title, text }) => <div key={title}><Icon strokeWidth={1.2} /><h3>{title}</h3><p>{text}</p></div>)}</div></section>
    <section className="about-projects"><div className="container"><h2>Conoce nuestros<br /><em>proyectos</em></h2><Button to="/proyectos" variant="outline">Ver proyectos</Button></div></section>
  </div>
}
