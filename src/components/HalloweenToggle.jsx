import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function getInitialHalloween() {
  return document.documentElement.getAttribute('data-halloween') === 'true'
}

export default function HalloweenToggle() {
  const { t } = useLanguage()
  const [active, setActive] = useState(getInitialHalloween)

  useEffect(() => {
    document.documentElement.setAttribute('data-halloween', active ? 'true' : 'false')
    try {
      localStorage.setItem('halloween', active ? 'true' : 'false')
    } catch {}
    window.dispatchEvent(new CustomEvent('halloween-change', { detail: active }))
  }, [active])

  const toggle = () => {
    setActive(!active)
  }

  return (
    <button
      type="button"
      aria-pressed={active}
      className={'halloween-toggle' + (active ? ' is-active' : '')}
      onClick={toggle}
      aria-label={active ? t.halloweenToggle.disable : t.halloweenToggle.enable}
      title={active ? t.halloweenToggle.disable : t.halloweenToggle.enable}
    >
      <img
        src={`${import.meta.env.BASE_URL}halloween_pumpkin.svg`}
        alt=""
        className="halloween-toggle-icon"
      />
    </button>
  )
}
