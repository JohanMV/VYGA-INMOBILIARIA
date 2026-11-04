export interface PropertyImage { src: string; alt: string }
export interface Property {
  slug: string
  title: string
  type: 'Loft' | 'Flat' | 'Dúplex'
  image: string
  text: string
  description: string
  project: string
  location: string
  area?: number
  bedrooms?: number
  bathrooms?: number
  features: string[]
  gallery: PropertyImage[]
  floorPlan?: string
  brochure?: string
}
