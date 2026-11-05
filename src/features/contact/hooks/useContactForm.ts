import { useSearchParams } from 'react-router-dom'
import { contactWhatsAppUrl } from '../services/contact'
export function useContactForm() {
 const [params] = useSearchParams()
 const submit = (form: HTMLFormElement) => { window.location.assign(contactWhatsAppUrl(form)) }
 const selectedType = params.get('tipo')
 const subject = selectedType ? `${selectedType} de Vizzen` : 'Vizzen'
 return { submit, type: selectedType ?? '', message: params.has('plano') ? `Me gustaría solicitar el plano de distribución de ${subject}.` : params.has('visita') ? `Me gustaría agendar una visita para conocer ${subject}.` : params.has('propiedad') ? `Me gustaría consultar la disponibilidad de ${subject}.` : '' }
}
