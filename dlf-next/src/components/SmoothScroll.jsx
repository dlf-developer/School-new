import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * SmoothScroll — Lenis-powered inertia scroller tuned for a natural luxury feel.
 *
 * Tuning rationale:
 *  - lerp: 0.07  → barely perceptible lag; the scroll *follows* your finger/wheel
 *                   with just a whisper of silk. Higher values feel like you're
 *                   dragging through honey. Lower feels identical to native.
 *  - duration: 1.2 → controls the overall easing window (not additional delay).
 *  - easing: custom cubic-bezier matching browser-native deceleration curves.
 *  - GSAP ScrollTrigger is kept in sync via the RAF loop so parallax/pin
 *    animations stay perfectly aligned with the smooth position.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out — mirrors iOS physics
      lerp: 0.07,         // natural inertia without the "floaty" overdone effect
      smoothWheel: true,
      syncTouch: false,   // keep native touch on mobile — never override touch physics
      touchMultiplier: 1.5,
      infinite: false,
    })

    // Sync Lenis scroll position to GSAP ScrollTrigger every RAF tick
    lenis.on('scroll', ScrollTrigger.update)

    const gsapTicker = gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Prevent GSAP from adding its own lag smoothing (Lenis handles that)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(gsapTicker)
      lenis.destroy()
    }
  }, [])

  return null
}
