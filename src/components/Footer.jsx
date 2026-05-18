import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/10 py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-black/70">
            © {year} Camping Hakkou. {t('footer.rights')}
          </p>

          <nav className="text-sm flex items-center gap-4">
            <a href="/#home" className="hover:text-brand-orange">
              {t('footer.top')}
            </a>
            <a href="/stay" className="hover:text-brand-orange">
              {t('footer.stay')}
            </a>
            <a href="/activities" className="hover:text-brand-orange">
              {t('footer.activities')}
            </a>
            <a href="/#contact" className="hover:text-brand-orange">
              {t('footer.contact')}
            </a>
            <a
              href="/conditions-generales"
              className="text-black relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] hover:text-brand-orange after:rounded-full"
            >
              {t('footer.conditions')}
            </a>
          </nav>
        </div>

        <div className="mt-4 flex flex-wrap justify-center items-center gap-4 max-w-3xl mx-auto text-sm text-brand-black/60">
          <span>BP10, Route de Zrigate, Hakkou, Aoufous 52053</span>
          <span>06 55 23 75 54</span>
          <span>MQFX+8C Aoufous</span>
        </div>
      </div>
    </footer>
  )
}
