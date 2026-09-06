import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'

const links = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
]

export default function Header() {
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
        <ThemeToggle />
        <a className="btn btn-nav-cta" href="#contact">
          Contáctame
        </a>
        <MobileMenu links={links} />
      </div>
    </header>
  )
}
