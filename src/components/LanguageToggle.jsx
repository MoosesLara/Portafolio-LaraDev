import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggleLang, t } = useLanguage()
  const isEs = lang === 'es'
  const flag = isEs ? 'bandera_eeuu.svg' : 'bandera_espana.svg'

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={t.languageToggle.label}
      title={t.languageToggle.label}
    >
      <img src={`${import.meta.env.BASE_URL}${flag}`} alt="" className="lang-toggle-flag" />
    </button>
  )
}
