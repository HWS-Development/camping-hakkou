import { useTranslation } from 'react-i18next'

export default function ImportantInfo() {
  const { t } = useTranslation()
  const items = t('importantInfo.items', { returnObjects: true }) || []

  return (
    <section id="important-info" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">{t('importantInfo.heading')}</h2>
          <p className="mt-2 text-brand-black/70">{t('importantInfo.intro')}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <article key={index} className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                {item.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-black/70">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
