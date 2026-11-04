import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export interface BreadcrumbsProps { title?: string }
export function Breadcrumbs({ title }: BreadcrumbsProps) {
  return <nav className="property-breadcrumbs" aria-label="Ruta de navegación"><ol><li><Link to="/">Inicio</Link></li><li><ChevronRight aria-hidden="true" />{title ? <Link to="/propiedades">Propiedades</Link> : <span aria-current="page">Propiedades</span>}</li>{title && <li><ChevronRight aria-hidden="true" /><span aria-current="page">{title}</span></li>}</ol></nav>
}
