import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function MobileMenu({ links }) {
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
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
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
            aria-hidden={!open}
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
            <a className="mobile-menu-cta" href="#contact" onClick={close}>
              Contáctame
              <span className="btn-arrow">→</span>
            </a>
          </nav>
        </>,
        document.body,
      )}
    </>
  )
}
