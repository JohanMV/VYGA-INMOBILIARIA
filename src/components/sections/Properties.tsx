import { Button, Eyebrow, PropertyCard, Reveal } from '../ui'
import { properties } from '@/data/properties'
export function Properties() {
  return <section className="properties section" id="propiedades"><div className="container"><Reveal className="properties-heading"><div><Eyebrow>PROPIEDADES</Eyebrow><h2>Espacios para cada<br /><em>forma de vivir.</em></h2></div><p>Descubre las unidades de Vizzen, diseñadas para adaptarse a tu estilo de vida, con espacios funcionales, modernos y luminosos.</p><Button to="/propiedades">Ver todas las propiedades</Button></Reveal><div className="property-grid">{properties.map(property => <Reveal key={property.slug} className="property"><PropertyCard property={property} /></Reveal>)}</div></div></section>
}
