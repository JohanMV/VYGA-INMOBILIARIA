import { useState } from 'react'
import { properties } from '@/data/properties'
export interface PropertyFilters { project: string; type: string; bedrooms: string; area: string }
export const initialFilters: PropertyFilters = { project: '', type: '', bedrooms: '', area: '' }
export type PropertySort = 'original' | 'name-asc' | 'name-desc'
export function usePropertyCatalog() {
  const [draft, setDraft] = useState(initialFilters)
  const [filters, setFilters] = useState(initialFilters)
  const [sort, setSort] = useState<PropertySort>('original')
  const results = properties.filter(property => {
    if (filters.project && property.project !== filters.project) return false
    if (filters.type && property.type !== filters.type) return false
    if (filters.bedrooms && property.bedrooms !== Number(filters.bedrooms)) return false
    if (filters.area) {
      const [min, max] = filters.area.split(':').map(Number)
      if (property.area === undefined || property.area < min || property.area > max) return false
    }
    return true
  })
  if (sort !== 'original') results.sort((a, b) => a.title.localeCompare(b.title, 'es') * (sort === 'name-asc' ? 1 : -1))
  const setField = (field: keyof PropertyFilters, value: string) => setDraft(current => ({ ...current, [field]: value }))
  const reset = () => { setDraft(initialFilters); setFilters(initialFilters) }
  return { draft, results, sort, setSort, setField, reset, search: () => setFilters({ ...draft }) }
}
