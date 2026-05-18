import { useTranslation } from 'react-i18next'

export default function Excursions() {
  const { t } = useTranslation()

  return (
    <section id="excursions" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {t('excursions.heading')}
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{t('excursions.title')}</h2>
            <p className="mt-4 text-brand-black/70 leading-relaxed">{t('excursions.description')}</p>

            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 font-semibold text-white shadow-soft"
              >
                {t('excursions.cta')}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-soft">
            <img
              src="/images/tout/717772676.jpg"
              alt={t('excursions.title')}
              className="h-[360px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
