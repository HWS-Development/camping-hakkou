import { useTranslation } from 'react-i18next'

export default function HavreDePaix() {
  const { t } = useTranslation()
  const cards = t('haven.cards', { returnObjects: true }) || []
  const featured = cards.find((card) => card.large) || cards[0]
  const compact = cards.filter((card) => card !== featured)

  return (
    <section id="haven" className="py-16 bg-brand-desert/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">{t('haven.heading')}</h2>
          <p className="mt-2 text-brand-black/70 max-w-3xl">{t('haven.intro')}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {featured && (
            <article className="rounded-3xl border border-black/10 bg-white p-7 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary text-2xl">
                  {featured.icon}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold">{featured.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-brand-black/70 whitespace-pre-line">
                    {featured.body}
                  </p>
                </div>
              </div>
            </article>
          )}

          <div className="grid gap-6">
            {compact.map((card, index) => (
              <article
                key={index}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary text-xl">
                    {card.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="mt-2 text-sm text-brand-black/70 whitespace-pre-line">
                      {card.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
