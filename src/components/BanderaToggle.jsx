import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import marimbaSrc from '../assets/audio/marimba.ogg'

function getInitialPatrio() {
  return document.documentElement.getAttribute('data-patrio') === 'true'
}

export default function BanderaToggle() {
  const { t } = useLanguage()
  const [active, setActive] = useState(getInitialPatrio)
  const audioRef = useRef(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-patrio', active ? 'true' : 'false')
    try {
      localStorage.setItem('patrio', active ? 'true' : 'false')
    } catch {}
  }, [active])

  const toggle = () => {
    const next = !active
    setActive(next)
    const audio = audioRef.current
    if (!audio) return
    if (next) {
      audio.currentTime = 0
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }

  return (
    <button
      type="button"
      aria-pressed={active}
      className={'bandera-toggle' + (active ? ' is-active' : '')}
      onClick={toggle}
      aria-label={active ? t.patrioToggle.disable : t.patrioToggle.enable}
      title={active ? t.patrioToggle.disable : t.patrioToggle.enable}
    >
      <img
        src={`${import.meta.env.BASE_URL}bandera_guatemala.svg`}
        alt=""
        className="bandera-toggle-icon"
      />
      <audio ref={audioRef} src={marimbaSrc} preload="none" />
    </button>
  )
}
