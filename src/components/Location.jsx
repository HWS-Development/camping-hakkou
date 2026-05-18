import { useTranslation } from 'react-i18next'

export default function Location() {
  const { t } = useTranslation()
  const points = t('location.points', { returnObjects: true }) || []

  return (
    <section id="location" className="py-16 bg-brand-desert/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">{t('location.heading')}</h2>
            <p className="mt-3 text-brand-black/70">{t('location.desc')}</p>

            <ul className="mt-6 grid gap-3">
              {points.map((text, index) => {
                const icons = ['🌴', '🐪', '🚐']
                const icon = icons[index] || '•'
                return (
                  <li key={index} className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {icon}
                    </span>
                    <span className="text-brand-black/80">{text}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-soft border border-black/10">
            <iframe
              title={t('location.mapTitle')}
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=MQFX%2B8C%20Aoufous&z=14&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
