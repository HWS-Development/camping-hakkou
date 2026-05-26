import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { getCampingImages } from '../data/roomImages'

export default function Hero({ onOpenBooking }) {
  const { t } = useTranslation()

  const slides = useMemo(() => getCampingImages().slice(17, 20), [])

  const locationPoints = t('location.points', { returnObjects: true }) || []
  const aboutHighlights = t('about.highlights', { returnObjects: true }) || []

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image()
      img.decoding = 'async'
      img.src = src
    })
  }, [slides])

  const prev = useCallback(() => {
    setIndex((value) => (value - 1 + slides.length) % slides.length)
  }, [slides.length])

  const next = useCallback(() => {
    setIndex((value) => (value + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'ArrowLeft') prev()
      if (event.key === 'ArrowRight') next()
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  useEffect(() => {
    if (paused || slides.length <= 1) return undefined
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, paused, slides.length])

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

  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0">
        {slides.map((src, slideIndex) => (
          <img
            key={src}
            src={src}
            alt={t('galleryPage.alt', { n: slideIndex + 1, defaultValue: `Hero image ${slideIndex + 1}` })}
            className={`absolute inset-0 h-full w-full object-cover object-center ${slideIndex === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0s' }}
            aria-hidden={slideIndex !== index}
            draggable="false"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,133,90,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(29,78,216,0.16),transparent_30%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 focus:outline-none text-white z-10"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 focus:outline-none text-white z-10"
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.65fr] lg:items-center">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>{t('home.welcome', { city: t('home.city') })}</span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[0.95] sm:text-5xl md:text-6xl lg:text-[5.2rem]">
              {t('home.headline')}
            </h1>

            <div className="mt-5 flex items-center gap-4 text-white/90">
              <div className="h-px w-14 bg-white/40" />
              <p className="text-sm font-medium uppercase tracking-[0.24em]">
                {t('home.tagline')}
              </p>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {t('home.subtitle')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-soft"
              >
                {t('home.ctaBook')}
              </button>
              <a
                href="/stay"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm hover:border-white/50"
              >
                {t('home.ctaRooms')}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-white/80">
              <span className="rounded-full bg-black/20 px-4 py-2 backdrop-blur-sm">
                {aboutHighlights[0]}
              </span>
              <span className="rounded-full bg-black/20 px-4 py-2 backdrop-blur-sm">
                BP10, Route de Zrigate
              </span>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="max-w-sm overflow-hidden rounded-[26px] border border-white/12 bg-white/8 p-5 text-white shadow-soft backdrop-blur-lg">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-white/75">Camping Hakkou</p>
                <div className="flex items-center gap-2">
                  {slides.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => setIndex(dotIndex)}
                      className={`h-2.5 w-2.5 rounded-full ${dotIndex === index ? 'bg-primary' : 'bg-white/35'}`}
                      aria-label={`Go to slide ${dotIndex + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <p className="text-xl font-semibold leading-snug">
                  {locationPoints[0]}
                </p>
                <p className="text-sm leading-relaxed text-white/72">
                  {locationPoints[1]}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/80">
                <span>06 55 23 75 54</span>
                <span>MQFX+8C Aoufous</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
