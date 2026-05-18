import { useTranslation } from 'react-i18next'

export default function Booking({ onOpenBooking }) {
  const { t } = useTranslation()
  const highlights = t('about.highlights', { returnObjects: true }) || []

  return (
    <section id="booking" className="relative -mt-12 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white shadow-soft p-6 sm:p-8 border-t-[10px] border-[#2f855a]">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                {t('about.badge')}
              </span>
              <h2 className="mt-4 text-3xl font-bold">{t('about.title')}</h2>
              <p className="mt-3 text-brand-black/70">{t('about.intro')}</p>
              <p className="mt-3 text-brand-black/70">{t('about.description')}</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button type="button" onClick={onOpenBooking} className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-soft">
                  {t('about.actions.call')}
                </button>
                <a href="https://wa.me/212655237554" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border border-black/10 px-6 py-3 font-semibold hover:border-black/30">
                  {t('about.actions.whatsapp')}
                </a>
                <a href="/contact" className="inline-flex items-center justify-center rounded-xl border border-black/10 px-6 py-3 font-semibold hover:border-black/30">
                  {t('about.actions.contact')}
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-brand-desert/40 p-5">
              <ul className="grid gap-3">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-brand-black/80">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary shadow-soft">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
