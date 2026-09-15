import { Link } from 'react-router-dom'
import { siWhatsapp } from 'simple-icons'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import BanderaToggle from './BanderaToggle'
import MobileMenu from './MobileMenu'
import { useLanguage } from '../context/LanguageContext'
import { getWhatsAppLink } from '../utils/contactLinks'

export default function Header() {
  const { t } = useLanguage()

  const links = [
    { to: '/#about', label: t.nav.about },
    { to: '/#career', label: t.nav.career },
    { to: '/#projects', label: t.nav.projects },
    { to: '/certifications', label: t.nav.certifications },
    { to: '/#contact', label: t.nav.contact },
  ]

  return (
    <header className="header animate__animated animate__fadeInDown">
      <div className="header-brand">
        <Link className="logo" to="/#hero">
          <span className="logo-type">
            Lara<span className="logo-accent">Dev</span>
          </span>
          <span className="logo-cursor" aria-hidden="true" />
        </Link>
        <BanderaToggle />
      </div>
      <nav className="nav">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <LanguageToggle />
        <ThemeToggle />
        <a
          className="btn btn-nav-cta"
          href={getWhatsAppLink(t.header.whatsappMessage)}
          target="_blank"
          rel="noreferrer"
        >
          <svg viewBox="0 0 24 24" className="btn-whatsapp-icon" aria-hidden="true">
            <path d={siWhatsapp.path} fill="currentColor" />
          </svg>
          {t.header.cta}
        </a>
        <MobileMenu links={links} />
      </div>
    </header>
  )
}
