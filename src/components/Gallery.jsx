import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const files = [
  '0aae7b19-7564-4a0b-8951-69f61f112923.jpg',
  '1d02a86b-5294-4108-8957-7799f2dfa0cf.jpg',
  '1d5c777b-64a8-4b8e-a0df-7db0639bdc11.jpg',
  '53c21403-64f3-4343-b059-8f14f04f2756.jpg',
  '8e76de73-a983-4e1c-87d9-e3e3e1d8a70e.jpg',
  '2025-06-11 (5).jpg',
  'Screenshot 2025-09-15 160942.png',
  '155532.png'
]

export default function Gallery() {
  const { t } = useTranslation()

  const urls = useMemo(
    () => files.map((file) => `${process.env.PUBLIC_URL}/images/tout/${encodeURIComponent(file)}`),
    []
  )

  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  const openAt = (index) => {
    setIdx(index)
    setOpen(true)
  }

  const close = () => setOpen(false)
  const prev = useCallback(() => {
    setIdx((index) => (index - 1 + urls.length) % urls.length)
  }, [urls.length])

  const next = useCallback(() => {
    setIdx((index) => (index + 1) % urls.length)
  }, [urls.length])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') prev()
      if (event.key === 'ArrowRight') next()
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, prev, next])

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

  const featured = urls.slice(0, 2)
  const rail = urls.slice(2, 5)
  const strip = urls.slice(5)

  return (
    <section id="gallery" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t('gallery.heading')}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">A more tactile look at Camping Hakkou</h2>
            <p className="mt-4 text-brand-black/70 leading-relaxed">{t('gallery.sub')}</p>
          </div>

          <div className="lg:justify-self-end">
            <a href="/gallery" className="inline-flex items-center rounded-xl border border-black/10 bg-white px-5 py-3 font-semibold hover:border-black/20 shadow-soft">
              {t('gallery.heading')}
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => openAt(index)}
                className="group relative overflow-hidden rounded-[28px] focus:outline-none"
                aria-label={t('gallery.alt', { n: index + 1, defaultValue: `Gallery image ${index + 1}` })}
              >
                <img
                  className="h-[340px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  src={src}
                  alt={t('gallery.alt', { n: index + 1, defaultValue: `Gallery image ${index + 1}` })}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-sm text-white backdrop-blur-sm">
                  0{index + 1}
                </div>
              </button>
            ))}
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {rail.map((src, railIndex) => {
                const absoluteIndex = railIndex + featured.length
                return (
                  <button
                    key={src}
                    type="button"
                    onClick={() => openAt(absoluteIndex)}
                    className="group relative overflow-hidden rounded-[24px] focus:outline-none"
                    aria-label={t('gallery.alt', { n: absoluteIndex + 1, defaultValue: `Gallery image ${absoluteIndex + 1}` })}
                  >
                    <img
                      className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      src={src}
                      alt={t('gallery.alt', { n: absoluteIndex + 1, defaultValue: `Gallery image ${absoluteIndex + 1}` })}
                      loading="lazy"
                    />
                  </button>
                )
              })}
            </div>

            <div className="rounded-[26px] border border-black/10 bg-brand-desert/40 p-4 shadow-soft">
              <div className="grid grid-cols-3 gap-3">
                {strip.map((src, stripIndex) => {
                  const absoluteIndex = stripIndex + featured.length + rail.length
                  return (
                    <button
                      key={src}
                      type="button"
                      onClick={() => openAt(absoluteIndex)}
                      className="group relative overflow-hidden rounded-2xl focus:outline-none"
                      aria-label={t('gallery.alt', { n: absoluteIndex + 1, defaultValue: `Gallery image ${absoluteIndex + 1}` })}
                    >
                      <img
                        className="h-24 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                        src={src}
                        alt={t('gallery.alt', { n: absoluteIndex + 1, defaultValue: `Gallery image ${absoluteIndex + 1}` })}
                        loading="lazy"
                      />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
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
              src={urls[idx]}
              alt={t('gallery.alt', { n: idx + 1, defaultValue: `Gallery image ${idx + 1}` })}
              className="w-full max-h-[82vh] rounded-[28px] bg-black object-contain shadow-soft"
            />

            {urls.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-xl text-white backdrop-blur hover:bg-white/25"
                  aria-label={t('gallery.prev', 'Previous')}
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-xl text-white backdrop-blur hover:bg-white/25"
                  aria-label={t('gallery.next', 'Next')}
                >
                  ›
                </button>
              </>
            )}

            <div className="mt-4 flex flex-col gap-4 text-white sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm opacity-80">
                  {t('gallery.counter', { current: idx + 1, total: urls.length, defaultValue: `${idx + 1} / ${urls.length}` })}
                </span>
                <div className="flex items-center gap-2">
                  {urls.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => setIdx(dotIndex)}
                      aria-label={t('gallery.goto', { n: dotIndex + 1, defaultValue: `Go to slide ${dotIndex + 1}` })}
                      className={`h-2.5 w-2.5 rounded-full ${dotIndex === idx ? 'bg-white' : 'bg-white/45'}`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={close}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-semibold text-white shadow-soft"
              >
                {t('gallery.close', 'Close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
