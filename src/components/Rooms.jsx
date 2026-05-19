import { useTranslation } from 'react-i18next'

export default function Rooms({ onOpenBooking }) {
  const { t } = useTranslation()

  const featured = [
    {
      key: 'guestRooms',
      img: '/images/tout/705691681.jpg'
    },
    {
      key: 'caravanSpaces',
      img: '/images/tout/705691723.jpg'
    }
  ]

  return (
    <section id="rooms" className="py-16 bg-brand-desert/40 bg-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">{t('stayHome.heading')}</h2>
          <p className="mt-2 text-brand-black/70">{t('stayHome.sub')}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((stay) => (
            <article key={stay.key} className="rounded-2xl overflow-hidden bg-white shadow-soft border border-black/5">
              <img className="h-48 w-full object-cover" src={stay.img} alt={t(`stayPage.items.${stay.key}.title`)} loading="lazy" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{t(`stayPage.items.${stay.key}.title`)}</h3>
                <p className="mt-1 text-sm text-brand-black/70">{t(`stayPage.items.${stay.key}.desc`)}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="font-bold text-primary">Camping Hakkou</span>
                  <button type="button" onClick={onOpenBooking} className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-white font-semibold">
                    {t('nav.book')}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href="/stay" className="inline-flex items-center rounded-xl border border-black/10 bg-white px-5 py-3 font-semibold hover:border-black/20 shadow-soft">
            {t('stayHome.viewMore')}
          </a>
        </div>
      </div>
    </section>
  )
}
