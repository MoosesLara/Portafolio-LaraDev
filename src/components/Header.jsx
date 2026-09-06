import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import MobileMenu from './MobileMenu'
import { useLanguage } from '../context/LanguageContext'

export default function Header() {
  const { t } = useLanguage()

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="header animate__animated animate__fadeInDown">
      <a className="logo" href="#top">
        <span className="logo-type">
          Lara<span className="logo-accent">Dev</span>
        </span>
        <span className="logo-cursor" aria-hidden="true" />
      </a>
      <nav className="nav">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <LanguageToggle />
        <ThemeToggle />
        <a className="btn btn-nav-cta" href="#contact">
          {t.header.cta}
        </a>
        <MobileMenu links={links} />
      </div>
    </header>
  )
}
