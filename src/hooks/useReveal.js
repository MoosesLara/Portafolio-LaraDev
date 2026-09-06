import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, visible] — visible flips to true the first time the ref'd
 * element scrolls into view. Uses threshold 0 + a generous rootMargin so a
 * fast/flick scroll can't skip past a small element without ever triggering it.
 */
export default function useReveal(threshold = 0, rootMargin = '0px 0px -5% 0px') {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Elemento ya visible al montar (p. ej. viewport alto, o ya se hizo scroll): no esperar al observer.
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, visible]
}
