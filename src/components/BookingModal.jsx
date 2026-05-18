import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function BookingModal({ open, onClose }) {
  const { t } = useTranslation()
  const [fullName, setFullName] = useState('')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [specialRequest, setSpecialRequest] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!open) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') onClose?.()
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      setFullName('')
      setCheckin('')
      setCheckout('')
      setSpecialRequest('')
      setError('')
    }
  }, [open])

  const today = useMemo(() => new Date().toISOString().slice(0, 10), [])

  if (!open) return null

  const handleSubmit = (event) => {
    event.preventDefault()

    if (checkin && checkout && new Date(checkout) <= new Date(checkin)) {
      setError(t('bookingModal.invalidDates'))
      return
    }

    setError('')

    const subject = `Reservation request - Camping Hakkou - ${fullName || 'Guest'}`
    const bodyLines = [
      'Hello Camping Hakkou,',
      '',
      'I would like to make a reservation request.',
      '',
      `Full name: ${fullName}`,
      `Check-in: ${checkin}`,
      `Check-out: ${checkout}`,
      `Special request: ${specialRequest || 'None'}`,
      '',
      'Thank you.'
    ]

    const href = `mailto:contact@camphakkou.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`
    window.location.href = href
    onClose?.()
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/55 p-4" onClick={onClose}>
      <div className="w-full max-w-xl rounded-[28px] bg-white p-6 shadow-soft sm:p-8" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">{t('bookingModal.title')}</h2>
            <p className="mt-2 text-brand-black/70">{t('bookingModal.intro')}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-xl hover:border-black/20"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-brand-black/80">{t('bookingModal.fullName')}</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              className="mt-1 w-full rounded-xl border border-black/10 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-brand-black/80">{t('bookingModal.checkin')}</label>
              <input
                type="date"
                min={today}
                required
                value={checkin}
                onChange={(event) => setCheckin(event.target.value)}
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-black/80">{t('bookingModal.checkout')}</label>
              <input
                type="date"
                min={checkin || today}
                required
                value={checkout}
                onChange={(event) => setCheckout(event.target.value)}
                className="mt-1 w-full rounded-xl border border-black/10 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-brand-black/80">{t('bookingModal.specialRequest')}</label>
            <textarea
              rows="4"
              value={specialRequest}
              onChange={(event) => setSpecialRequest(event.target.value)}
              placeholder={t('bookingModal.specialPlaceholder')}
              className="mt-1 w-full rounded-xl border border-black/10 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-xl border border-black/10 px-5 py-3 font-semibold hover:border-black/20"
            >
              {t('bookingModal.cancel')}
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-semibold text-white shadow-soft"
            >
              {t('bookingModal.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
