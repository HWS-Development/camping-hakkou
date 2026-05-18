import { useTranslation } from 'react-i18next'

export default function Restaurant() {
  const { t } = useTranslation()
  const highlights = t('restaurant.highlights', { returnObjects: true }) || []

  return (
    <section id="restaurant" className="py-16 bg-brand-desert/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="order-2 lg:order-1 overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-soft">
            <img
              src="/images/tout/restaurant (1).jpg"
              alt={t('restaurant.title')}
              className="h-[360px] w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {t('restaurant.heading')}
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{t('restaurant.title')}</h2>
            <p className="mt-4 text-brand-black/70 leading-relaxed">{t('restaurant.description')}</p>

            <ul className="mt-6 grid gap-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-brand-black/80">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 font-semibold text-white shadow-soft"
              >
                {t('restaurant.cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
