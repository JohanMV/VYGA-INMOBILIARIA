import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ContactForm } from '@/features/contact/components/ContactForm'
import { Header, Footer } from '@/components/layout'
import { Hero, About, Projects, Properties, Contact } from '@/components/sections'
import { PropertyCatalog, PropertyDetails } from '@/features/properties/components'
import { VizzenPage } from '@/features/projects/VizzenPage'
import { ProjectsPage } from '@/features/projects/ProjectsPage'
import { AboutPage } from '@/features/about/AboutPage'
function Pages() {
 const { pathname, search } = useLocation()
 useEffect(() => { window.scrollTo(0, 0); document.title = 'VYGA Inmobiliaria | Arquitectura, diseño y bienestar' }, [pathname])
 return <><Header /><main id="contenido" className={pathname === '/' ? '' : 'interior'}><Routes>
 <Route path="/" element={<><Hero /><About /><Projects /><Properties /><Contact form={<ContactForm key={search} />} /></>} />
 <Route path="/nosotros" element={<AboutPage />} />
 <Route path="/proyectos" element={<ProjectsPage />} />
 <Route path="/proyectos/vizzen" element={<VizzenPage />} />
 <Route path="/propiedades" element={<PropertyCatalog />} />
 <Route path="/propiedades/vizzen/:slug" element={<PropertyDetails />} />
 <Route path="/contacto" element={<Contact page form={<ContactForm key={search} />} />} />
 <Route path="*" element={<section className="container section"><h1>Este espacio no está disponible.</h1><a href="/">Volver al inicio</a></section>} />
 </Routes></main><Footer /></>
}
export default function App() { return <BrowserRouter><Pages /></BrowserRouter> }

