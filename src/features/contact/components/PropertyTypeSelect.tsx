import { useEffect, useId, useRef, useState } from 'react'
import { Check, ChevronDown, Layers2 } from 'lucide-react'

const options = ['Lofts', 'Flats', 'Dúplex', 'Necesito asesoría']

export function PropertyTypeSelect({ initialValue }: { initialValue: string }) {
 const [value, setValue] = useState(initialValue)
 const [open, setOpen] = useState(false)
 const [active, setActive] = useState(0)
 const root = useRef<HTMLDivElement>(null)
 const trigger = useRef<HTMLButtonElement>(null)
 const listId = useId()
 useEffect(() => {
  const close = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false) }
  document.addEventListener('pointerdown', close)
  return () => document.removeEventListener('pointerdown', close)
 }, [])
 const choose = (index: number) => { setValue(options[index]); setActive(index); setOpen(false); trigger.current?.focus() }
 return <div className="contact-select" ref={root} onKeyDown={event => {
  if (event.key === 'Escape' && open) { event.preventDefault(); setOpen(false); trigger.current?.focus() }
  else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); setOpen(true); setActive(current => (current + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length) }
  else if (open && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); choose(active) }
 }}>
  <input className="contact-select-validation" name="type" value={value} required onChange={() => {}} tabIndex={-1} aria-hidden="true" onInvalid={event => { event.preventDefault(); trigger.current?.focus(); setOpen(true) }} />
  <button ref={trigger} className="contact-select-trigger" type="button" role="combobox" aria-label="Tipo de propiedad de interés" aria-required="true" aria-expanded={open} aria-controls={listId} aria-activedescendant={open ? `${listId}-${active}` : undefined} onClick={() => { setActive(Math.max(0, options.indexOf(value))); setOpen(!open) }}><Layers2 /><span>{value || 'Tipo de propiedad de interés *'}</span><ChevronDown className="contact-select-chevron" /></button>
  {open && <div className="contact-select-options" id={listId} role="listbox" aria-label="Tipo de propiedad de interés">{options.map((option, index) => <div id={`${listId}-${index}`} className={`contact-select-option${active === index ? ' is-active' : ''}`} role="option" aria-selected={value === option} key={option} onMouseEnter={() => setActive(index)} onClick={() => choose(index)}>{option}{value === option && <Check size={17} />}</div>)}</div>}
 </div>
}
