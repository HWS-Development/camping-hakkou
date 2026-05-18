import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function GalleryPage() {
  const { t } = useTranslation()

  const files = useMemo(
    () => [
      '0aae7b19-7564-4a0b-8951-69f61f112923.jpg',
      '1d5c777b-64a8-4b8e-a0df-7db0639bdc11.jpg',
      'Screenshot 2025-09-15 160955.png',
      'Screenshot 2025-09-24 164429.png',
      'Screenshot 2025-09-24 164537.png',
      '94c414dd-2859-4cd6-b3d6-cff950e8d91a.jpg',
      'Screenshot 2025-09-24 164510.png',
      '2025-06-11 (21).jpg',
      'Screenshot 2025-09-15 160254.png',
      '705690381.jpg',
      'Screenshot 2025-09-15 160942.png',
      '7535c6be-f515-4a02-9b19-111ca6985f55.jpg',
      '2025-06-12.jpg',
      'a3ef54e3-7d5e-45ba-90d6-35e1c373489a.jpg',
      'Screenshot 2025-09-24 164306.png',
      'Screenshot 2025-09-24 164450.png',
      'Screenshot 2025-09-24 171158.png',
      'Screenshot 2025-09-24 164100.png',
      'Screenshot 2025-09-24 164129.png',
      'Screenshot 2025-09-24 164153.png',
      'Screenshot 2025-09-24 164230.png',
      'Screenshot 2025-09-24 164554.png',
      'Screenshot 2025-09-24 164343.png'
    ],
    []
  )

  const images = useMemo(
    () => files.map((file) => `/images/tout/${file}`),
    [files]
  )

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (nextIndex) => {
    setIndex(nextIndex)
    setOpen(true)
  }

  const close = () => setOpen(false)
  const prev = useCallback((event) => {
    event?.stopPropagation?.()
    setIndex((current) => (current - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback((event) => {
    event?.stopPropagation?.()
    setIndex((current) => (current + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') prev()
      if (event.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, open, prev])

  const startX = useRef(null)
  const onTouchStart = (event) => {
    startX.current = event.touches[0].clientX
  }

  const onTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX
    const dx = endX - (startX.current ?? endX)
    if (Math.abs(dx) > 40) {
      if (dx > 0) prev()
      else next()
    }
    startX.current = null
  }

  return (
    <section className="min-h-screen bg-white pb-16 pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#eef8f1_0%,#f8fbff_58%,#ffffff_100%)] p-8 shadow-soft sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t('galleryPage.heading')}</p>
              <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Collected moments from Camping Hakkou</h1>
              <p className="mt-4 max-w-2xl text-brand-black/70 leading-relaxed">{t('galleryPage.sub')}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {images.slice(0, 3).map((src, previewIndex) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => openAt(previewIndex)}
                  className="group overflow-hidden rounded-[22px] focus:outline-none"
                >
                  <img
                    src={src}
                    alt={t('galleryPage.alt', { n: previewIndex + 1 })}
                    className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]">
          {images.map((src, imageIndex) => {
            const heights = ['h-56', 'h-72', 'h-64', 'h-80']
            const heightClass = heights[imageIndex % heights.length]

            return (
              <button
                key={`${src}-${imageIndex}`}
                type="button"
                onClick={() => openAt(imageIndex)}
                className="group relative mb-4 block w-full overflow-hidden rounded-[24px] focus:outline-none"
                aria-label={t('galleryPage.alt', { n: imageIndex + 1 })}
              >
                <img
                  src={src}
                  alt={t('galleryPage.alt', { n: imageIndex + 1 })}
                  className={`${heightClass} w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]`}
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  {String(imageIndex + 1).padStart(2, '0')}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 p-4"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={images[index]}
              alt={t('galleryPage.alt', { n: index + 1 })}
              className="w-full max-h-[82vh] rounded-[28px] bg-black object-contain shadow-soft"
            />

            <div className="mt-4 flex flex-col gap-4 text-white sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-4">
                <button onClick={prev} className="rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20">
                  {t('galleryPage.prev')}
                </button>
                <span className="text-sm opacity-80">
                  {t('galleryPage.counter', { current: index + 1, total: images.length })}
                </span>
                <button onClick={next} className="rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20">
                  {t('galleryPage.next')}
                </button>
              </div>

              <button
                onClick={close}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-semibold text-white shadow-soft"
              >
                {t('galleryPage.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
