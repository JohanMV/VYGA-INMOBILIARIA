import { PropertyCard } from '@/components/ui'
import { Breadcrumbs } from './Breadcrumbs'
import { PropertyFilters } from './PropertyFilters'
import { usePropertyCatalog } from '../hooks/usePropertyCatalog'
import type { PropertySort } from '../hooks/usePropertyCatalog'

import '../styles/properties.css'
import '../styles/responsive.css'
export function PropertyCatalog() {
  const catalog = usePropertyCatalog()

  return <div className="property-page catalog-page"><section className="catalog-banner" aria-labelledby="catalog-title"><img src="/images/propiedades1.webp" alt="" fetchPriority="high" /><div className="catalog-banner-shade" /><div className="container"><Breadcrumbs /><h1 id="catalog-title">Nuestras propiedades</h1><p>Departamentos modernos y funcionales en los mejores<br className="catalog-desktop-break" /> proyectos de Miraflores.</p></div></section>
    <section className="container catalog-content" aria-label="Catálogo de propiedades"><PropertyFilters values={catalog.draft} onChange={catalog.setField} onSearch={catalog.search} /><div className="catalog-toolbar"><p role="status"><strong>{catalog.results.length}</strong> {catalog.results.length === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}</p><label className="catalog-sort">Ordenar por:<select aria-label="Ordenar propiedades" value={catalog.sort} onChange={event => catalog.setSort(event.target.value as PropertySort)}><option value="original">Orden original</option><option value="name-asc">Nombre: A a Z</option><option value="name-desc">Nombre: Z a A</option></select></label></div><div className="catalog-grid">{catalog.results.map(property => <div key={property.slug} className="property"><PropertyCard property={property} variant="catalog" /></div>)}</div>{catalog.results.length === 0 && <div className="catalog-empty"><h2>No encontramos propiedades con estos filtros.</h2><p>Prueba con otra tipología para conocer las opciones de Vizzen.</p><button className="button button--dark" onClick={catalog.reset}>Limpiar filtros</button></div>}</section></div>
}

