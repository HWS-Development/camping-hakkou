import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Lightbox from '../components/Lightbox'
import { getCover, getRoomImages } from '../data/roomImages'

const STAY_META = [
  { key: 'guestRooms', imageKey: 'double' },
  { key: 'caravanSpaces', imageKey: 'familySuite' }
]

export default function RoomsPage({ onOpenBooking }) {
  const { t } = useTranslation()
  const [lbOpen, setLbOpen] = useState(false)
  const [lbImages, setLbImages] = useState([])
  const [lbTitle, setLbTitle] = useState('')
  const [lbStart, setLbStart] = useState(0)

  const stays = useMemo(() => {
    return STAY_META.map((item) => ({
      ...item,
      title: t(`stayPage.items.${item.key}.title`),
      desc: t(`stayPage.items.${item.key}.desc`),
      cover: getCover(item.imageKey)
    }))
  }, [t])

  const openLightbox = (key, startIndex = 0, title = '') => {
    const imageKey = STAY_META.find((item) => item.key === key)?.imageKey || 'double'
    const images = getRoomImages(imageKey)
    if (!images.length) return
    setLbImages(images)
    setLbStart(startIndex)
    setLbTitle(title)
    setLbOpen(true)
  }

  return (
    <section className="pb-16 pt-48 bg-brand-desert/40 bg-pattern min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">{t('stayPage.title')}</h1>
        <p className="text-brand-black/70 mb-12">{t('stayPage.intro')}</p>

        <div className="grid gap-8 md:grid-cols-2">
          {stays.map((stay) => (
            <article
              key={stay.key}
              className="rounded-2xl overflow-hidden bg-white shadow-soft border border-black/5 flex flex-col"
            >
              <button
                type="button"
                onClick={() => openLightbox(stay.key, 0, stay.title)}
                className="relative group"
                aria-label={`${stay.title} photos`}
              >
                <img
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  src={stay.cover}
                  alt={stay.title}
                  loading="lazy"
                />
                <span className="absolute bottom-3 right-3 rounded-lg bg-black/50 text-white text-xs px-2 py-1">
                  {t('stayPage.viewPhotos')}
                </span>
              </button>

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-semibold">{stay.title}</h2>
                <p className="mt-2 text-brand-black/70 flex-1 text-left leading-relaxed hyphens-auto">
                  {stay.desc}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    <button
                      type="button"
                      onClick={() => openLightbox(stay.key, 0, stay.title)}
                      className="inline-flex items-center rounded-xl border border-black/10 px-4 py-2 font-semibold hover:border-black/20"
                    >
                      {t('stayPage.viewPhotos')}
                    </button>
                    <button type="button" onClick={onOpenBooking} className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-white font-semibold">
                      {t('stayPage.book')}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Lightbox
        open={lbOpen}
        images={lbImages}
        startIndex={lbStart}
        title={lbTitle}
        onClose={() => setLbOpen(false)}
      />
    </section>
  )
}
