export function contactWhatsAppUrl(form: HTMLFormElement): string {
 const data = new FormData(form)
 const field = (name: string) => String(data.get(name) ?? '').trim()
 const lines = ['Hola, quisiera recibir información sobre Vizzen.', `Nombre: ${field('name')}`, `Teléfono o WhatsApp: ${field('phone')}`, `Correo electrónico: ${field('email')}`, `Tipo de propiedad: ${field('type')}`]
 if (field('message')) lines.push(`Mensaje: ${field('message')}`)
 return `https://wa.me/51916842610?text=${encodeURIComponent(lines.join('\n'))}`
}
