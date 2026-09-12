import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function getInitialTheme() {
  const attr = document.documentElement.getAttribute('data-theme')
  return attr === 'light' || attr === 'dark' ? attr : 'light'
}

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z" />
    </svg>
  )
}

export default function ThemeToggle() {
  const { t } = useLanguage()
  const [theme, setTheme] = useState(getInitialTheme)
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      className="theme-switch"
      onClick={toggle}
      aria-label={isDark ? t.themeToggle.toLight : t.themeToggle.toDark}
      title={isDark ? t.themeToggle.light : t.themeToggle.dark}
    >
      <SunIcon className="theme-switch-track-icon theme-switch-track-icon-sun" />
      <MoonIcon className="theme-switch-track-icon theme-switch-track-icon-moon" />
      <span className={'theme-switch-thumb' + (isDark ? ' is-dark' : '')}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  )
}
