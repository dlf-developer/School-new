import { useEffect } from 'react'

export default function ScrollToTop({ displayLocation }) {
  useEffect(() => {
    if (displayLocation.hash) {
      // Let the browser complete layout rendering before scrolling
      const timer = setTimeout(() => {
        const id = displayLocation.hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo(0, 0)
    }
  }, [displayLocation])

  return null
}
