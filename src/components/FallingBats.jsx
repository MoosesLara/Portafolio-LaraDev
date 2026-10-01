import { useEffect, useMemo, useState } from 'react'

const BAT_COUNT = 50

function getInitialHalloween() {
  return document.documentElement.getAttribute('data-halloween') === 'true'
}

function buildBats() {
  return Array.from({ length: BAT_COUNT }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 10 + Math.random() * 20,
    duration: 5 + Math.random() * 8,
    delay: Math.random() * 10,
    drift: (Math.random() - 0.5) * 240,
  }))
}

export default function FallingBats() {
  const [active, setActive] = useState(getInitialHalloween)
  const bats = useMemo(buildBats, [])

  useEffect(() => {
    const onChange = (e) => setActive(e.detail)
    window.addEventListener('halloween-change', onChange)
    return () => window.removeEventListener('halloween-change', onChange)
  }, [])

  if (!active) return null

  return (
    <div className="halloween-rain" aria-hidden="true">
      {bats.map((bat) => (
        <img
          key={bat.id}
          src={`${import.meta.env.BASE_URL}halloween_bat_dark.svg`}
          alt=""
          className="halloween-rain-bat"
          style={{
            left: `${bat.left}%`,
            width: `${bat.size}px`,
            animationDuration: `${bat.duration}s`,
            animationDelay: `${bat.delay}s`,
            '--halloween-drift': `${bat.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
