import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { sendContact } from '../services/contact'
export function useContactForm() {
 const [params] = useSearchParams()
 const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
 const [error, setError] = useState('')
 const submit = async (form: HTMLFormElement) => {
  setStatus('sending'); setError('')
  try { await sendContact(Object.fromEntries(new FormData(form))); setStatus('success'); form.reset() }
  catch (cause) { setStatus('error'); setError(cause instanceof Error ? cause.message : 'No se pudo enviar la solicitud.') }
 }
 const selectedType = params.get('tipo')
 const subject = selectedType ? `${selectedType} de Vizzen` : 'Vizzen'
 return { status, error, submit, type: selectedType ?? '', message: params.has('plano') ? `Me gustaría solicitar el plano de distribución de ${subject}.` : params.has('visita') ? `Me gustaría agendar una visita para conocer ${subject}.` : params.has('propiedad') ? `Me gustaría consultar la disponibilidad de ${subject}.` : '' }
}
