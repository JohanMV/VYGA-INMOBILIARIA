import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export { PropertyCard } from './PropertyCard'
export interface ButtonProps { to: string; children: ReactNode; variant?: 'dark' | 'light' | 'outline'; className?: string }
export function Button({ to, children, variant = 'dark', className = '' }: ButtonProps) { return <Link to={to} className={`button button--${variant} ${className}`}>{children}<ArrowUpRight size={19} strokeWidth={1.5} /></Link> }
export interface RevealProps { children: ReactNode; className?: string }
export function Reveal({ children, className = '' }: RevealProps) {
 const reduced = useReducedMotion()
 return <motion.div className={className} initial={false} whileInView={reduced ? {} : { y: [14, 0], opacity: [.8, 1] }} viewport={{ once: true, amount: .1 }} transition={{ duration: .6 }}>{children}</motion.div>
}
export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}<span /></p> }
