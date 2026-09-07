import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import MobileMenu from './MobileMenu'
import { useLanguage } from '../context/LanguageContext'

export default function Header() {
  const { t } = useLanguage()

  const links = [
    { to: '/#about', label: t.nav.about },
    { to: '/#career', label: t.nav.career },
    { to: '/#projects', label: t.nav.projects },
    { to: '/certifications', label: t.nav.certifications },
    { to: '/mentorship', label: t.nav.mentorship },
    { to: '/#contact', label: t.nav.contact },
  ]

  return (
    <header className="header animate__animated animate__fadeInDown">
      <Link className="logo" to="/#top">
        <span className="logo-type">
          Lara<span className="logo-accent">Dev</span>
        </span>
        <span className="logo-cursor" aria-hidden="true" />
      </Link>
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
        <Link className="btn btn-nav-cta" to="/#contact">
          {t.header.cta}
        </Link>
        <MobileMenu links={links} />
      </div>
    </header>
  )
}
