import { useState } from 'react'
import { properties } from '@/data/properties'
export interface PropertyFilters { project: string; type: string; bedrooms: string; area: string }
export const initialFilters: PropertyFilters = { project: '', type: '', bedrooms: '', area: '' }
export type PropertySort = 'original' | 'name-asc' | 'name-desc'
export function usePropertyCatalog() {
  const [filters, setFilters] = useState(initialFilters)
  const [sort, setSort] = useState<PropertySort>('original')
  const results = properties.filter(property => {
    if (filters.project && property.project !== filters.project) return false
    if (filters.type && property.type !== filters.type) return false
    if (filters.bedrooms && property.bedrooms !== Number(filters.bedrooms)) return false
    if (filters.area) {
      const [min, max] = filters.area.split(':').map(Number)
      if (property.area === undefined || (min === 0 ? property.area < 0 : property.area <= min) || property.area > max) return false
    }
    return true
  })
  if (sort !== 'original') results.sort((a, b) => a.title.localeCompare(b.title, 'es') * (sort === 'name-asc' ? 1 : -1))
  const setField = (field: keyof PropertyFilters, value: string) => setFilters(current => ({ ...current, [field]: value }))
  const reset = () => setFilters(initialFilters)
  return { draft: filters, results, sort, setSort, setField, reset, search: () => setFilters(current => ({ ...current })) }
}
