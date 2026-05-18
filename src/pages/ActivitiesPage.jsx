import { useTranslation } from 'react-i18next'

export default function ActivitiesPage() {
  const { t } = useTranslation()
  const activities = t('haven.cards', { returnObjects: true }) || []
  const highlights = t('restaurant.highlights', { returnObjects: true }) || []
  const infoItems = t('importantInfo.items', { returnObjects: true }) || []
  const facts = t('activitiesPage.facts', { returnObjects: true }) || []

  const featured = activities.find((item) => item.large) || activities[0]
  const compact = activities.filter((item) => item !== featured)

  return (
    <div className="bg-white pt-28">
      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#eef8f1_0%,#f7fbff_60%,#ffffff_100%)] p-8 shadow-soft sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {t('activitiesPage.badge')}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
                {t('activitiesPage.title')}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-black/70 sm:text-lg">
                {t('activitiesPage.intro')}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="tel:+212655237554" className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-soft">
                  {t('contact.actions.call')}
                </a>
                <a href="https://wa.me/212655237554" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border border-black/10 px-6 py-3 font-semibold hover:border-black/20">
                  {t('contact.actions.whatsapp')}
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {facts.map((fact, index) => (
                <div key={index} className="rounded-2xl border border-black/10 bg-white/80 p-5">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-brand-black/75">{fact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">{t('activitiesPage.servicesTitle')}</h2>
              <p className="mt-2 max-w-3xl text-brand-black/70">{t('haven.intro')}</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-soft">
              <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <img
                  src="/images/tout/705691723.jpg"
                  alt={featured?.title}
                  className="h-full min-h-[320px] w-full object-cover"
                />
                <div className="p-7 sm:p-8">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    {featured?.icon} {featured?.title}
                  </span>
                  <p className="mt-5 text-base leading-relaxed text-brand-black/75">
                    {featured?.body}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="/contact" className="inline-flex items-center rounded-xl bg-primary px-5 py-3 font-semibold text-white shadow-soft">
                      {t('contact.actions.location')}
                    </a>
                    <a href="https://wa.me/212655237554" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl border border-black/10 px-5 py-3 font-semibold hover:border-black/20">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-6">
              {compact.map((item, index) => (
                <article key={index} className="rounded-[26px] border border-black/10 bg-brand-desert/40 p-6 shadow-soft">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-soft">
                    {item.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-black/70">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[30px] bg-[#123b2c] p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              {t('restaurant.heading')}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">{t('activitiesPage.restaurantTitle')}</h2>
            <p className="mt-4 text-white/80 leading-relaxed">{t('restaurant.description')}</p>

            <ul className="mt-6 grid gap-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-white/85">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-soft">
            <img
              src="/images/tout/restaurant (1).jpg"
              alt={t('restaurant.title')}
              className="h-[420px] w-full object-cover"
            />
          </article>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0f172a_0%,#163a5f_55%,#1f6a4e_100%)] text-white shadow-soft">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
                {t('excursions.heading')}
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{t('activitiesPage.excursionsTitle')}</h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-white/80">{t('excursions.description')}</p>
              <div className="mt-8">
                <a href="/contact" className="inline-flex items-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-soft">
                  {t('excursions.cta')}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10">
              <img
                src="/images/tout/717772676.jpg"
                alt={t('excursions.title')}
                className="h-[340px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold sm:text-4xl">{t('activitiesPage.infoTitle')}</h2>
            <p className="mt-2 text-brand-black/70">{t('importantInfo.intro')}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {infoItems.map((item, index) => (
              <article key={index} className="rounded-2xl border border-black/10 bg-white p-5 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                    {item.icon}
                  </span>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-brand-black/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
