import { PropertyCard } from '@/components/ui'
import { Breadcrumbs } from './Breadcrumbs'
import { PropertyFilters } from './PropertyFilters'
import { CatalogSelect } from './CatalogSelect'
import { usePropertyCatalog } from '../hooks/usePropertyCatalog'
import type { PropertySort } from '../hooks/usePropertyCatalog'

import '../styles/properties.css'
import '../styles/responsive.css'
export function PropertyCatalog() {
  const catalog = usePropertyCatalog()

  return <div className="property-page catalog-page"><section className="catalog-banner" aria-labelledby="catalog-title"><img src="/images/propiedades1.webp" alt="" fetchPriority="high" /><div className="catalog-banner-shade" /><div className="container"><Breadcrumbs /><h1 id="catalog-title">Nuestras propiedades</h1><p>Departamentos modernos y funcionales en los mejores<br className="catalog-desktop-break" /> proyectos de Miraflores.</p></div></section>
    <section className="container catalog-content" aria-label="Catálogo de propiedades"><PropertyFilters values={catalog.draft} onChange={catalog.setField} onSearch={catalog.search} /><div className="catalog-toolbar"><p role="status"><strong>{catalog.results.length}</strong> {catalog.results.length === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}</p><div className="catalog-sort"><span>Ordenar por:</span><CatalogSelect label="Ordenar propiedades" value={catalog.sort} onChange={value => catalog.setSort(value as PropertySort)} clearable={false} options={[{ value: 'original', label: 'Orden original' }, { value: 'name-asc', label: 'Nombre: A a Z' }, { value: 'name-desc', label: 'Nombre: Z a A' }]} /></div></div><div className="catalog-grid">{catalog.results.map(property => <div key={property.slug} className="property"><PropertyCard property={property} variant="catalog" /></div>)}</div>{catalog.results.length === 0 && <div className="catalog-empty"><h2>No encontramos propiedades con estos filtros.</h2><p>Prueba con otra tipología para conocer las opciones de Vizzen.</p><button className="button button--dark" onClick={catalog.reset}>Limpiar filtros</button></div>}</section></div>
}

