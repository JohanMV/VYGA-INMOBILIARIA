import { useState } from 'react'
const storageKey = 'vyga:favorite-properties'
export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try { const saved: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '[]'); return Array.isArray(saved) ? saved.filter((value): value is string => typeof value === 'string') : [] } catch { return [] }
  })
  const toggleFavorite = (slug: string) => {
    const next = favorites.includes(slug) ? favorites.filter(value => value !== slug) : [...favorites, slug]
    setFavorites(next)
    try { localStorage.setItem(storageKey, JSON.stringify(next)) } catch { /* In-memory favorites remain available without browser storage. */ }
  }
  return { favorites, toggleFavorite }
}
