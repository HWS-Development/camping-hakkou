import { useTranslation } from 'react-i18next'

export default function Conditions() {
  const { t } = useTranslation()
  const title = t('legal.title')
  const updated = t('legal.updated')
  const sections = t('legal.sections', { returnObjects: true })
  const company = t('legal.company', { returnObjects: true })

  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        <p className="mt-1 text-sm text-brand-black/60">{updated}</p>

        <div className="mt-8 space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold">{s.h}</h2>
              <p className="mt-2 text-brand-black/80 leading-relaxed">{s.p}</p>

              {s.bullets && (
                <ul className="mt-3 list-disc pl-6 space-y-1 text-brand-black/80">
                  {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}

              {s.note && <p className="mt-2 text-sm text-brand-black/70">{s.note}</p>}
            </div>
          ))}
        </div>

        <hr className="my-10" />

        <h3 className="text-lg font-semibold">{company.title}</h3>
        <ul className="mt-3 space-y-1 text-brand-black/80">
          {company.lines.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>
    </section>
  )
}
