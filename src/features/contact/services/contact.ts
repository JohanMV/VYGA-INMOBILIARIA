/** Confirm delivery only after a successful response from the configured endpoint. */
export async function sendContact(data: Record<string, FormDataEntryValue>): Promise<void> {
 const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
 if (!endpoint) throw new Error('El envío aún no está habilitado. Tus datos permanecen en el formulario; inténtalo cuando el canal de contacto esté disponible.')
 const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
 if (!response.ok) throw new Error('No pudimos enviar tu solicitud. Tus datos siguen en el formulario para volver a intentarlo.')
}
