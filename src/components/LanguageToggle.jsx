import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggleLang, t } = useLanguage()
  const isEs = lang === 'es'

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={t.languageToggle.label}
      title={t.languageToggle.label}
    >
      {isEs ? 'EN' : 'ES'}
    </button>
  )
}
