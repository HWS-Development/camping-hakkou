import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar({ onOpenBooking }) {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const switchTo = (lng) => i18n.changeLanguage(lng)

  return (
    <header id="siteHeader" className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-b-2xl shadow-soft glass text-white">
          <nav className="flex items-center justify-between p-4">
            <Link className="hover:text-brand-orange flex items-center gap-4" to="/">
              <img src="/images/tout/Logo-Fin.png" alt="Camping Hakkou Logo" loading="lazy" className="h-16 w-16 rounded-full object-cover" />
              <span className="text-lg sm:text-xl font-semibold tracking-wide">Camping Hakkou</span>
            </Link>

            <button
              className="lg:hidden inline-flex items-center justify-center rounded-xl border border-white/20 px-3 py-2"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>

            <ul className="hidden lg:flex items-center gap-6">
              <li><Link className="hover:text-brand-orange" to="/">{t('nav.home')}</Link></li>
              <li><Link className="hover:text-brand-orange" to="/stay">{t('nav.stay')}</Link></li>
              <li><Link className="hover:text-brand-orange" to="/activities">{t('nav.activities')}</Link></li>
              <li><Link className="hover:text-brand-orange" to="/gallery">{t('nav.gallery')}</Link></li>
              <li><Link className="hover:text-brand-orange" to="/contact">{t('nav.contact')}</Link></li>
              <li><button type="button" className="ml-2 inline-flex items-center rounded-xl bg-primary px-4 py-2 font-semibold text-white" onClick={onOpenBooking}>{t('nav.book')}</button></li>
              <li className="ml-3 flex items-center gap-2 text-sm">
                <button onClick={() => switchTo('en')} className="px-2 py-1 rounded hover:bg-black/10">EN</button>
                <span className="opacity-40">|</span>
                <button onClick={() => switchTo('fr')} className="px-2 py-1 rounded hover:bg-black/10">FR</button>
                <span className="opacity-40">|</span>
                <button onClick={() => switchTo('de')} className="px-2 py-1 rounded hover:bg-black/10">DE</button>
              </li>
            </ul>
          </nav>

          {open && (
            <div className="lg:hidden border-t border-white/10">
              <ul className="p-4 grid gap-2 text-white/90">
                <li><Link className="block rounded-lg px-3 py-2 hover:bg-white/10" to="/" onClick={() => setOpen(false)}>{t('nav.home')}</Link></li>
                <li><Link className="block rounded-lg px-3 py-2 hover:bg-white/10" to="/stay" onClick={() => setOpen(false)}>{t('nav.stay')}</Link></li>
                <li><Link className="block rounded-lg px-3 py-2 hover:bg-white/10" to="/activities" onClick={() => setOpen(false)}>{t('nav.activities')}</Link></li>
                <li><Link className="block rounded-lg px-3 py-2 hover:bg-white/10" to="/gallery" onClick={() => setOpen(false)}>{t('nav.gallery')}</Link></li>
                <li><Link className="block rounded-lg px-3 py-2 hover:bg-white/10" to="/contact" onClick={() => setOpen(false)}>{t('nav.contact')}</Link></li>
                <li><button type="button" className="mt-2 block w-full rounded-lg bg-primary px-3 py-2 text-white font-semibold text-left" onClick={() => { setOpen(false); onOpenBooking?.() }}>{t('nav.book')}</button></li>
                <li className="flex items-center justify-center gap-3 pt-2 text-sm">
                  <button onClick={() => switchTo('en')} className="px-2 py-1 rounded hover:bg-white/10">EN</button>
                  <button onClick={() => switchTo('fr')} className="px-2 py-1 rounded hover:bg-white/10">FR</button>
                  <button onClick={() => switchTo('de')} className="px-2 py-1 rounded hover:bg-white/10">DE</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
