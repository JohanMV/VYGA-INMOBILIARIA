import { MapPin, Layers2, BedDouble, Expand, Search } from 'lucide-react'
import { CatalogSelect as FilterSelect } from './CatalogSelect'
import type { PropertyFilters as Filters } from '../hooks/usePropertyCatalog'
import { properties } from '@/data/properties'
export interface PropertyFiltersProps { values: Filters; onChange: (field: keyof Filters, value: string) => void; onSearch: () => void }
export function PropertyFilters({ values, onChange, onSearch }: PropertyFiltersProps) {
  const projects = [...new Set(properties.map(property => property.project))]
  const types = [...new Set(properties.map(property => property.type))]
  const bedrooms = [...new Set(properties.flatMap(property => property.bedrooms === undefined ? [] : [property.bedrooms]))].sort((a, b) => a - b)
  const areas = properties.flatMap(property => property.area === undefined ? [] : [property.area])
  const areaRanges = [{ min: 0, max: 60, label: 'Hasta 60 m²' }, { min: 60, max: 100, label: 'Más de 60 hasta 100 m²' }, { min: 100, max: Infinity, label: 'Más de 100 m²' }].filter(range => areas.some(area => (range.min === 0 ? area >= 0 : area > range.min) && area <= range.max))
  return <><form className="catalog-filters" aria-label="Buscar propiedades" onSubmit={event => { event.preventDefault(); onSearch() }}>
    <FilterSelect label="Proyecto" icon={MapPin} value={values.project} onChange={value => onChange('project', value)} options={projects.map(value => ({ value, label: value }))} />
    <FilterSelect label="Tipo de propiedad" icon={Layers2} value={values.type} onChange={value => onChange('type', value)} options={types.map(value => ({ value, label: value }))} />
    <FilterSelect label="Dormitorios" icon={BedDouble} value={values.bedrooms} onChange={value => onChange('bedrooms', value)} disabled={!bedrooms.length} options={bedrooms.map(value => ({ value: String(value), label: `${value} ${value === 1 ? 'dormitorio' : 'dormitorios'}` }))} />
    <FilterSelect label="Área (m²)" icon={Expand} value={values.area} onChange={value => onChange('area', value)} disabled={!areas.length} options={areaRanges.map(range => ({ value: `${range.min}:${range.max}`, label: range.label }))} />
    <button type="submit" className="button button--dark catalog-search"><Search strokeWidth={1.6} />Buscar</button>
  </form></>
}
