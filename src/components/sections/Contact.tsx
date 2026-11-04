import { CalendarDays, ChevronRight, MessageCircle, Layers2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Eyebrow, Reveal } from '../ui'
import type { ReactNode } from 'react'
import type { SectionProps } from './About'
export interface ContactProps extends SectionProps { form: ReactNode }
export function Contact({ page = false, form }: ContactProps) {
 return <>{page && <header className="property-page catalog-banner" aria-labelledby="contact-page-title"><img src="/images/contacto1.webp" alt="" fetchPriority="high" /><div className="catalog-banner-shade" /><div className="container"><nav className="property-breadcrumbs" aria-label="Ruta de navegación"><ol><li><Link to="/">Inicio</Link></li><li><ChevronRight /><span aria-current="page">Contacto</span></li></ol></nav><h1 id="contact-page-title">Contacto</h1><p>Recibe asesoría personalizada y agenda una visita al proyecto.</p></div></header>}<section className="contact section" id="contacto"><div className="container contact-grid"><div className="contact-copy"><Reveal><Eyebrow>CONTACTO</Eyebrow><h2>Hablemos de tu<br />próximo <em>espacio.</em></h2><p className="description">Recibe una asesoría personalizada, conoce más sobre Vizzen y agenda una visita al proyecto.</p></Reveal><Reveal className="contact-benefits"><div><CalendarDays /><span>Agenda una<br /> visita</span></div><div><MessageCircle /><span>Asesoría<br /> personalizada</span></div><div><Layers2 /><span>Conoce las<br /> unidades disponibles</span></div></Reveal><Reveal className="contact-photo"><div className="stone stone-contact" /><img src="/images/contacto1.webp" alt="Sala abierta hacia un patio con vegetación y luz natural" loading="eager" /></Reveal></div><Reveal className="contact-form-wrap"><div className="stone stone-form" />{form}</Reveal></div></section></>
}



