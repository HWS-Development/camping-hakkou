import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Lightbox({ open, images, startIndex = 0, title = '', onClose }) {
  const { t } = useTranslation()
  const [index, setIndex] = useState(startIndex)

  useEffect(() => { setIndex(startIndex) }, [startIndex, images])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, images?.length, onClose])

  if (!open || !images?.length) return null

  const prev = (e) => { e?.stopPropagation?.(); setIndex((i) => (i - 1 + images.length) % images.length) }
  const next = (e) => { e?.stopPropagation?.(); setIndex((i) => (i + 1) % images.length) }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        {title && <div className="mb-3 text-white/80 text-sm">{title}</div>}
        <img
          src={images[index]}
          alt={t('galleryPage.alt', { n: index + 1 })}
          className="w-full max-h-[80vh] object-contain rounded-xl shadow-soft bg-black"
        />

        <div className="absolute inset-x-0 -bottom-12 flex items-center justify-center gap-4 text-white">
          <button onClick={prev} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20">{t('galleryPage.prev')}</button>
          <span className="text-sm opacity-80">{t('galleryPage.counter', { current: index + 1, total: images.length })}</span>
          <button onClick={next} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20">{t('galleryPage.next')}</button>
          <button onClick={onClose} className="ml-4 px-4 py-2 rounded-lg bg-primary text-white font-semibold">{t('galleryPage.close')}</button>
        </div>
      </div>
    </div>
  )
}
