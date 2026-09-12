import { profile, socials } from '../data/config'
import Reveal from './Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <Reveal as="footer" className="footer" animation="fadeIn">
      <div className="footer-socials">
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>
      <p className="footer-copy">
        © {year} {profile.name}. {t.footer.madeWith}
      </p>
    </Reveal>
  )
}
