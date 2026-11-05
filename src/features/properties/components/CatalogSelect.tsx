import { useEffect, useId, useRef, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface CatalogSelectProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  icon?: LucideIcon
  disabled?: boolean
  clearable?: boolean
}

export function CatalogSelect({ label, value, onChange, options, icon: Icon, disabled, clearable = true }: CatalogSelectProps) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const root = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const list = useRef<HTMLDivElement>(null)
  const typed = useRef({ text: '', time: 0 })
  const id = useId()
  const choices = clearable ? [{ value: '', label: 'Todos' }, ...options] : options
  const selected = choices.findIndex(option => option.value === value)
  const expanded = open && !disabled

  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [])

  useEffect(() => {
    if (expanded) list.current?.children[active]?.scrollIntoView({ block: 'nearest' })
  }, [active, expanded])

  const choose = (index: number) => {
    const option = choices[index]
    if (!option || disabled) return
    onChange(option.value)
    setOpen(false)
    trigger.current?.focus()
  }

  return <div ref={root} className={`catalog-select ${Icon ? 'catalog-filter' : 'catalog-order-select'}${disabled ? ' catalog-filter--disabled' : ''}`} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false)
  }}>
    {Icon && <Icon aria-hidden="true" />}
    <button ref={trigger} type="button" className="catalog-select-trigger" role="combobox" aria-label={label} aria-expanded={expanded} aria-controls={expanded ? id : undefined} aria-haspopup="listbox" aria-activedescendant={expanded ? `${id}-${active}` : undefined} disabled={disabled}
      title={disabled ? `${label}: información pendiente de confirmar` : undefined}
      onClick={() => { setActive(Math.max(0, selected)); setOpen(!expanded) }}
      onKeyDown={event => {
        if (event.key === 'Escape') { if (expanded) event.preventDefault(); setOpen(false) }
        else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          event.preventDefault()
          setActive(expanded ? (active + (event.key === 'ArrowDown' ? 1 : -1) + choices.length) % choices.length : Math.max(0, selected))
          setOpen(true)
        } else if (event.key === 'Home' || event.key === 'End') {
          event.preventDefault(); setActive(event.key === 'Home' ? 0 : choices.length - 1); setOpen(true)
        } else if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          if (expanded) choose(active)
          else { setActive(Math.max(0, selected)); setOpen(true) }
        } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
          event.preventDefault()
          const now = Date.now()
          typed.current = { text: (now - typed.current.time < 700 ? typed.current.text : '') + event.key.toLocaleLowerCase('es'), time: now }
          const match = choices.findIndex(option => option.label.toLocaleLowerCase('es').startsWith(typed.current.text))
          if (match >= 0) { setActive(match); setOpen(true) }
        }
      }}><span>{options.find(option => option.value === value)?.label || label}</span></button>
    <ChevronDown aria-hidden="true" className={`filter-chevron${expanded ? ' is-open' : ''}`} />
    {expanded && <div ref={list} id={id} className="catalog-select-options" role="listbox" aria-label={label}>
      {choices.map((option, index) => <div key={option.value} id={`${id}-${index}`} role="option" aria-selected={option.value === value} className={`catalog-select-option${active === index ? ' is-active' : ''}`} onPointerMove={() => setActive(index)} onMouseDown={event => event.preventDefault()} onClick={() => choose(index)}>
        <span>{option.label}</span>{option.value === value && <Check aria-hidden="true" size={16} />}
      </div>)}
    </div>}
  </div>
}
