import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import type { Property } from '@/types/property'
export interface PropertyGalleryProps { property: Property }
export function PropertyGallery({ property }: PropertyGalleryProps) {
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const images = property.gallery
  const move = (direction: number) => setIndex(current => (current + direction + images.length) % images.length)
  useEffect(() => {
    if (!expanded) return
    const currentDialog = dialog.current
    currentDialog?.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { currentDialog?.close(); document.body.style.overflow = previousOverflow }
  }, [expanded])
  return <div className="property-gallery"><div className="gallery-layout"><div className="gallery-stage"><button className="gallery-expand" onClick={() => setExpanded(true)} aria-label={`Ampliar imagen ${index + 1} de ${property.title}`}><img src={images[index].src} alt={images[index].alt} fetchPriority="high" /><span><Maximize2 size={16} />Ampliar</span></button><button className="gallery-arrow gallery-arrow--previous" aria-label="Fotografía anterior" onClick={() => move(-1)}><ChevronLeft /></button><button className="gallery-arrow gallery-arrow--next" aria-label="Fotografía siguiente" onClick={() => move(1)}><ChevronRight /></button><span className="gallery-count" aria-live="polite">{index + 1} / {images.length}</span></div><div className="gallery-thumbnails" aria-label="Fotografías de la galería">{images.slice(1).map((image, offset) => <button key={image.src} onClick={() => setIndex(offset + 1)} aria-label={`Ver fotografía ${offset + 2}: ${image.alt}`} aria-pressed={index === offset + 1}><img src={image.src} alt="" /></button>)}</div></div>
    {expanded && <dialog ref={dialog} className="gallery-lightbox" aria-label={`Galería ampliada de ${property.title}`} onClose={() => setExpanded(false)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }} onKeyDown={event => { if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) } if (event.key === 'ArrowRight') { event.preventDefault(); move(1) } }}><div className="lightbox-content"><button className="lightbox-close" aria-label="Cerrar galería ampliada" onClick={() => dialog.current?.close()} autoFocus><X /></button><img src={images[index].src} alt={images[index].alt} /><div className="lightbox-controls"><button aria-label="Fotografía anterior ampliada" onClick={() => move(-1)}><ChevronLeft /></button><p aria-live="polite">{index + 1} / {images.length} · Imagen referencial</p><button aria-label="Fotografía siguiente ampliada" onClick={() => move(1)}><ChevronRight /></button></div></div></dialog>}
  </div>
}
