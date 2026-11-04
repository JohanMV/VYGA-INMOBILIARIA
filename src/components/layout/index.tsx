import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
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
 return <header className={`header ${home ? 'header--hero' : ''} ${scrolled ? 'header--scrolled' : ''} ${pathname.startsWith('/propiedades') ? 'header--property' : ''}`}><a className="skip-link" href="#contenido">Saltar al contenido</a><div className="header-inner"><Link to="/" aria-label="VYGA Inmobiliaria, inicio" onClick={() => setOpen(false)}><Wordmark /></Link><nav id="navegacion" aria-label="Navegación principal" className={open ? 'nav nav--open' : 'nav'}>{links.map(([to, title]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{title}</NavLink>)}</nav><Button to="/contacto?visita=1" variant={home ? 'light' : 'dark'} className="header-cta">Agendar visita</Button><button className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="navegacion" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>
}
export function Footer() { return <footer className="footer container"><Link to="/" aria-label="VYGA, inicio"><Wordmark /></Link><nav aria-label="Navegación secundaria">{links.map(([to, title]) => <Link key={to} to={to}>{title}</Link>)}</nav><p>© {new Date().getFullYear()} VYGA Inmobiliaria</p></footer> }

