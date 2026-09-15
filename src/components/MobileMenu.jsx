import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { siWhatsapp } from 'simple-icons'
import { useLanguage } from '../context/LanguageContext'
import { getWhatsAppLink } from '../utils/contactLinks'

export default function MobileMenu({ links }) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <button
        type="button"
        className={'hamburger' + (open ? ' is-open' : '')}
        aria-label={open ? t.mobileMenu.close : t.mobileMenu.open}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      {createPortal(
        <>
          <div
            className={'mobile-menu-backdrop' + (open ? ' is-open' : '')}
            onClick={close}
            aria-hidden="true"
          />

          <nav
            id="mobile-menu-panel"
            className={'mobile-menu-panel' + (open ? ' is-open' : '')}
            inert={!open}
          >
            {links.map((link) => (
              <Link key={link.to} to={link.to} onClick={close}>
                {link.label}
              </Link>
            ))}
            <a
              className="mobile-menu-cta"
              href={getWhatsAppLink(t.header.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              <svg viewBox="0 0 24 24" className="btn-whatsapp-icon" aria-hidden="true">
                <path d={siWhatsapp.path} fill="currentColor" />
              </svg>
              {t.header.cta}
            </a>
          </nav>
        </>,
        document.body,
      )}
    </>
  )
}
