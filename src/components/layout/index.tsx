import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Menu, MessageCircle, X } from 'lucide-react'
import { Button } from '../ui'
const links = [['/', 'Inicio'], ['/nosotros', 'Nosotros'], ['/proyectos', 'Proyectos'], ['/propiedades', 'Propiedades'], ['/contacto', 'Contacto']]
export function Wordmark() { return <span className="wordmark"><span>VYGA</span><i /><small>INMOBILIARIA</small></span> }
export function Header() {
 const [open, setOpen] = useState(false)
 const [scrolled, setScrolled] = useState(() => window.scrollY > 0)
 const pathname = useLocation().pathname
 const home = pathname === '/'
 useEffect(() => {
  const updateScrolled = () => setScrolled(window.scrollY > 0)
  updateScrolled()
  window.addEventListener('scroll', updateScrolled, { passive: true })
  return () => window.removeEventListener('scroll', updateScrolled)
 }, [])
 return <header className={`header ${home ? 'header--hero' : ''} ${scrolled ? 'header--scrolled' : ''} ${pathname.startsWith('/propiedades') ? 'header--property' : ''}`}><a className="skip-link" href="#contenido">Saltar al contenido</a><div className="header-inner"><Link to="/" aria-label="VYGA Inmobiliaria, inicio" onClick={() => setOpen(false)}><Wordmark /></Link><nav id="navegacion" aria-label="Navegación principal" className={open ? 'nav nav--open' : 'nav'}>{links.map(([to, title]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{title}</NavLink>)}<Link className="button button--dark mobile-nav-cta" to="/contacto?visita=1#formulario" onClick={() => setOpen(false)}>Agendar visita <ArrowUpRight size={19} /></Link></nav><Button to="/contacto?visita=1#formulario" variant={home ? 'light' : 'dark'} className="header-cta">Agendar visita</Button><button className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="navegacion" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>
}
export function Footer() { return <footer className="footer"><div className="container footer-inner"><div className="footer-grid"><div className="footer-brand"><Link to="/" aria-label="VYGA Inmobiliaria, inicio"><Wordmark /></Link><p>Arquitectura residencial<br /><em>con propósito.</em></p></div><nav className="footer-column footer-nav" aria-label="Navegación secundaria"><h2>NAVEGACIÓN</h2>{links.map(([to, title]) => <Link key={to} to={to}>{title}</Link>)}</nav><div className="footer-column"><h2>PROYECTOS</h2><Link to="/proyectos/vizzen">Vizzen</Link></div><div className="footer-column footer-contact"><h2>CONTÁCTANOS</h2><a href="https://wa.me/51916842610" target="_blank" rel="noopener noreferrer"><MessageCircle /><span>+51 916 842 610</span></a><a href="mailto:soluciones@cybersys.pro"><Mail /><span>soluciones@cybersys.pro</span></a><p><MapPin /><span>Miraflores, Lima</span></p></div><div className="footer-column footer-follow"><h2>SÍGUENOS</h2><div className="footer-social" aria-label="Redes sociales"><span aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg></span><span aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M7 7v.2M11 17v-7m0 3c0-4 6-4 6 0v4" /></svg></span><span aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" /></svg></span></div><Button to="/contacto?visita=1" variant="light">Agendar visita</Button></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} VYGA Inmobiliaria. Todos los derechos reservados.</p><div className="footer-legal"><span>Política de privacidad</span><span>Términos y condiciones</span></div></div></div></footer> }

