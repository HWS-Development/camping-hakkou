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
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.5600496113243!2d-4.2013875999999994!3d31.673254200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd99db8e8c7c2897%3A0x1473e9800c1bc441!2sGite-Camping-Caravaning%20Hakkou!5e0!3m2!1sen!2sma!4v1779800607019!5m2!1sen!2sma"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
