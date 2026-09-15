import { useEffect, useState } from 'react'

export function useInView(ref, { initial = true, rootMargin = '120px' } = {}) {
  const [inView, setInView] = useState(initial)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin, threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, rootMargin])

  return inView
}
