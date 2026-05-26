import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const details = t('contact.details', { returnObjects: true }) || []

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">{t('contact.heading')}</h2>
            <p className="mt-2 text-brand-black/70">{t('contact.sub')}</p>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {t('contact.quickTitle')}
              </p>
              <p className="mt-3 text-brand-black/70 leading-relaxed">
                {t('contact.quickText')}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+212655237554"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-semibold text-white shadow-soft"
                >
                  {t('contact.actions.call')}
                </a>
                <a
                  href="https://wa.me/212655237554"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 px-5 py-3 font-semibold hover:border-black/20"
                >
                  {t('contact.actions.whatsapp')}
                </a>
                <a
                  href="https://maps.app.goo.gl/UGTqfq66DACT31jb7"
                  target="_blank"
                  rel="noreferrer"
                  className="sm:col-span-2 inline-flex items-center justify-center rounded-xl border border-black/10 px-5 py-3 font-semibold hover:border-black/20"
                >
                  {t('contact.actions.location')}
                </a>
              </div>

              <div className="mt-8 rounded-2xl bg-brand-desert/40 p-5">
                <h3 className="text-lg font-semibold">{t('contact.detailsTitle')}</h3>
                <ul className="mt-4 grid gap-3">
                  {details.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-brand-black/75">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-soft">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold">{t('contact.direct.heading')}</h3>
            <ul className="mt-4 space-y-3 text-brand-black/80">
              <li>{t('contact.direct.phone')}</li>
              <li>{t('contact.direct.email')}</li>
              <li>{t('contact.direct.address')}</li>
            </ul>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
            <h3 className="mt-6 text-xl font-semibold">{t('contact.follow')}</h3>

            <div className="mt-3 flex items-center gap-3">
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 hover:shadow-md hover:bg-black/5 transition"
                href="https://wa.me/212655237554"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="6" fill="#25D366" />
                  <path d="M12.02 6.2a5.78 5.78 0 0 0-4.92 8.82l-.74 2.7 2.77-.73a5.79 5.79 0 1 0 2.89-10.79Zm3.36 8.24c-.14.4-.82.78-1.14.83-.29.05-.66.08-1.07-.06-.25-.08-.58-.19-1-.37-1.76-.76-2.91-2.54-3-2.66-.09-.12-.72-.95-.72-1.82s.45-1.3.61-1.48c.16-.18.35-.22.47-.22h.34c.11 0 .25-.04.39.3.14.34.49 1.17.53 1.26.04.09.07.2.01.32-.05.12-.08.2-.17.31-.09.11-.18.24-.26.32-.09.09-.19.18-.08.36.1.18.47.77 1.01 1.24.7.62 1.29.81 1.47.9.18.09.29.08.39-.05.11-.12.46-.54.58-.72.12-.18.25-.15.42-.09.18.06 1.12.53 1.31.63.19.09.32.14.36.22.04.08.04.47-.1.87Z" fill="#fff"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
