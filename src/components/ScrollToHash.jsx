import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Al navegar: si la URL trae un #hash, se desplaza a ese elemento; si no, sube al inicio. */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView())
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
