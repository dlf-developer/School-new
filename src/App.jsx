import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Vision from './components/Vision'
import Stats from './components/Stats'
import Curriculum from './components/Curriculum'
import Pillars from './components/Pillars'
import Holistic from './components/Holistic'
import VirtualTour from './components/VirtualTour'
import Admissions from './components/Admissions'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import OurCampus from './components/OurCampus'
import ParentPartners from './components/ParentPartners'
import ScrollToTop from './components/ScrollToTop'

// Home page sections aggregator
function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Vision />
      <Stats />
      <Curriculum />
      <Pillars />
      <Holistic />
      <VirtualTour />
      <Admissions />
      <Testimonials />
    </>
  )
}

export default function App() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [progress, setProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Track the displayLocation via ref to compare pathnames without re-triggering effect
  const displayLocationRef = useRef(displayLocation)

  useEffect(() => {
    const prevPath = displayLocationRef.current.pathname
    const nextPath = location.pathname

    if (nextPath !== prevPath) {
      // Start page-to-page transition loader
      setIsTransitioning(true)
      setProgress(20)

      // Animate progress bar incrementally up to 90%
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval)
            return 90
          }
          return prev + 10
        })
      }, 50)

      // Mount the new page once progress bar completes
      const switchTimeout = setTimeout(() => {
        setDisplayLocation(location)
        displayLocationRef.current = location
        setProgress(100)
      }, 450)

      // Fade out the progress bar
      const fadeOutTimeout = setTimeout(() => {
        setIsTransitioning(false)
      }, 750)

      // Reset loader width to 0% after the opacity fade finishes
      const resetTimeout = setTimeout(() => {
        setProgress(0)
      }, 1050)

      return () => {
        clearInterval(interval)
        clearTimeout(switchTimeout)
        clearTimeout(fadeOutTimeout)
        clearTimeout(resetTimeout)
      }
    } else {
      // Sync display location immediately for hash jumps on same page
      setDisplayLocation(location)
      displayLocationRef.current = location
    }
  }, [location])

  return (
    <>
      {/* YouTube-like Glowing Top Progress Loader */}
      {progress > 0 && (
        <div 
          className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-brand-gold via-brand-goldlight to-brand-greenVibrant shadow-[0_0_15px_rgba(197,155,39,0.8),_0_0_5px_rgba(0,158,73,0.5)] z-[100000]" 
          style={{ 
            width: `${progress}%`,
            opacity: progress > 0 ? (isTransitioning ? 1 : 0) : 0,
            transition: progress === 0 
              ? 'none' 
              : 'width 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease-in-out'
          }}
        ></div>
      )}
      
      <ScrollToTop displayLocation={displayLocation} />
      <Header />
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us/our-campus" element={<OurCampus />} />
        <Route path="/about-us/parent-as-partners" element={<ParentPartners />} />
      </Routes>
      <Footer />
    </>
  )
}
