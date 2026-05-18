import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Reviews() {
  const { t } = useTranslation()
  const reviews = t('reviews.items', { returnObjects: true }) || []
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  const prev = useCallback(() => {
    setIndex((current) => (current - 1 + reviews.length) % reviews.length)
  }, [reviews.length])

  const next = useCallback(() => {
    setIndex((current) => (current + 1) % reviews.length)
  }, [reviews.length])

  useEffect(() => {
    if (!reviews.length) return undefined
    const onKey = (event) => {
      if (event.key === 'ArrowLeft') prev()
      if (event.key === 'ArrowRight') next()
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, reviews.length])

  useEffect(() => {
    if (paused || reviews.length <= 1) return undefined
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, paused, reviews.length])

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const onTouchEnd = (event) => {
    const x = event.changedTouches[0].clientX
    const dx = x - (touchStartX.current ?? x)
    if (Math.abs(dx) > 40) {
      if (dx > 0) prev()
      else next()
    }
    touchStartX.current = null
  }

  if (!reviews.length) return null

  const active = reviews[index]

  return (
    <section id="reviews" className="py-16 bg-brand-desert/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold">{t('reviews.heading')}</h2>
            <p className="mt-2 text-brand-black/70">{t('reviews.sub')}</p>
          </div>

          <div className="flex items-center justify-start gap-3 lg:justify-end">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-xl shadow-soft hover:border-black/20"
              aria-label="Previous review"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-xl shadow-soft hover:border-black/20"
              aria-label="Next review"
            >
              ›
            </button>
          </div>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-[30px] border border-black/10 bg-white p-6 shadow-soft sm:p-8 lg:p-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
            <div className="rounded-[24px] bg-brand-desert/40 p-6">
              <div className="text-amber-500 text-lg leading-none" aria-hidden>★★★★★</div>
              <h3 className="mt-4 text-2xl font-semibold">{active.name}</h3>
              <p className="mt-1 text-sm text-brand-black/60">{active.date}</p>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-brand-black/80 sm:text-xl">
                {active.text}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {reviews.map((review, reviewIndex) => (
                  <button
                    key={`${review.name}-${reviewIndex}`}
                    onClick={() => setIndex(reviewIndex)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${reviewIndex === index ? 'bg-primary text-white' : 'bg-brand-desert/50 text-brand-black/70 hover:bg-brand-desert'}`}
                    aria-label={`Show review ${reviewIndex + 1}`}
                  >
                    {review.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
