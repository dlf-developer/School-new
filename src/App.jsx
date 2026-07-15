import React, { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'

const AdminApp = lazy(() => import('./admin/AdminApp'))
const AdminLogin = lazy(() => import('./admin/AdminLogin'))
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
import InteractiveBackground from './components/InteractiveBackground'
import PortalHome from './components/PortalHome'
import Pedagogy from './components/Pedagogy'
import WhatSetsUsApart from './components/WhatSetsUsApart'
import Management from './components/Management'
import Awards from './components/Awards'
import CommonPages from './components/CommonPages'
import Disclosures from './components/Disclosures'
import ThinkingSchool from './components/ThinkingSchool'
import VisionMission from './components/VisionMission'
import SchoolLeadership from './components/SchoolLeadership'
import SchoolPrincipalDesk from './components/SchoolPrincipalDesk'
import SchoolHolistic from './components/SchoolHolistic'
import SchoolCounselling from './components/SchoolCounselling'
import SchoolWinning from './components/SchoolWinning'
import SchoolEditorials from './components/SchoolEditorials'
import SchoolAdmissions from './components/SchoolAdmissions'
import UsefulLinks from './components/UsefulLinks'
import ContactHome from './components/ContactHome'


// Premium Section Separator Component
function SectionSeparator() {
  return (
    <div className="w-[90%] max-w-[1400px] mx-auto  flex items-center justify-center gap-4 pointer-events-none select-none">
      <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-brand-gold/40"></div>
      <div className="w-2 h-2 bg-brand-gold rotate-45 border border-brand-greenDeep/10 shadow-sm shrink-0"></div>
      <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-brand-gold/40"></div>
    </div>
  )
}

// Master Home page sections aggregator matching exact section order from design spec:
// 1st Section – Video (Hero)
// 2nd Section – School Awards
// 3rd Section – Our Pedagogy
// 4th Section – Our Schools
// 5th Section – What Sets Us Apart
// 6th Section – Admissions 
// 7th Section – Contact Us
function MasterHome() {
  return (
    <>
      {/* 1st Section – Video Hero (no glass, full-bleed) */}
      <Hero />
      <Ticker />

      <SectionSeparator />

      {/* 2nd Section – School Awards */}
      <SchoolWinning isHomePage={true} />

      <SectionSeparator />

      {/* 3rd Section – Our Pedagogy */}
      <Curriculum />

      <SectionSeparator />

      {/* 4th Section – Our Schools */}
      <PortalHome />

      <SectionSeparator />

      {/* 5th Section – What sets us apart (Preview mode) */}
      <WhatSetsUsApart isPreview={true} />

      <SectionSeparator />

      {/* 6th Section – Admissions */}
      <Admissions />

      <SectionSeparator />

      {/* 7th Section – Contact Us */}
      <ContactHome />
    </>
  )
}

// Home page sections aggregator for dynamic individual school branches
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
    </>
  )
}

export default function App() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [progress, setProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const displayLocationRef = useRef(displayLocation)
  const isAdminRoute = displayLocation.pathname.startsWith('/admin')

  useEffect(() => {
    const prevPath = displayLocationRef.current.pathname
    const nextPath = location.pathname

    if (nextPath !== prevPath) {
      setIsTransitioning(true)
      setProgress(20)

      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval)
            return 90
          }
          return prev + 10
        })
      }, 50)

      const switchTimeout = setTimeout(() => {
        setDisplayLocation(location)
        displayLocationRef.current = location
        setProgress(100)
      }, 450)

      const fadeOutTimeout = setTimeout(() => {
        setIsTransitioning(false)
      }, 750)

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
      setDisplayLocation(location)
      displayLocationRef.current = location
    }
  }, [location])

  return (
    <>
      {/* Interactive Canvas Background Layer */}
      <InteractiveBackground />

      {/* Glowing Top Progress Loader */}
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
      
      <div className="isolate">
        <ScrollToTop displayLocation={displayLocation} />
        {!isAdminRoute && <Header />}
        <Routes location={displayLocation}>
          {/* Admin Panel */}
          <Route path="/admin/login" element={
            <Suspense fallback={<div className="min-h-screen bg-[#06060a]"/>}>
              <AdminLogin />
            </Suspense>
          } />
          <Route path="/admin/*" element={
            <Suspense fallback={<div className="min-h-screen bg-[#06060a]"/>}>
              <AdminApp />
            </Suspense>
          } />

          {/* Unified Master Home */}
          <Route path="/" element={<MasterHome />} />
          
          {/* Common Pages */}
          <Route path="/philosophy" element={<Navigate to="/thinking-school" replace />} />
          <Route path="/thinking-school" element={<ThinkingSchool />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/parent-partners" element={<ParentPartners />} />
          <Route path="/pedagogy" element={<Pedagogy />} />
          <Route path="/pedagogy/:stageId" element={<Pedagogy />} />
          <Route path="/what-sets-us-apart" element={<WhatSetsUsApart />} />
          <Route path="/management" element={<Management />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/news" element={<CommonPages />} />
          <Route path="/alumni" element={<CommonPages />} />
          <Route path="/careers" element={<CommonPages />} />
          <Route path="/sports-arena" element={<CommonPages />} />
          <Route path="/contact" element={<CommonPages />} />
          <Route path="/useful-links" element={<UsefulLinks />} />
          
          {/* Dynamic Branch Routes */}
          <Route path="/school/:schoolId" element={<Home />} />
          <Route path="/school/:schoolId/campus" element={<OurCampus />} />
          <Route path="/school/:schoolId/leadership" element={<SchoolLeadership />} />
          <Route path="/school/:schoolId/principal-desk" element={<SchoolPrincipalDesk />} />
          <Route path="/school/:schoolId/admissions" element={<SchoolAdmissions />} />
          <Route path="/school/:schoolId/curriculum" element={<Curriculum />} />
          <Route path="/school/:schoolId/holistic-learning" element={<SchoolHolistic />} />
          <Route path="/school/:schoolId/counselling" element={<SchoolCounselling />} />
          <Route path="/school/:schoolId/winning-school" element={<SchoolWinning />} />
          <Route path="/school/:schoolId/editorials" element={<SchoolEditorials />} />
          <Route path="/school/:schoolId/disclosures" element={<Disclosures />} />
          <Route path="/school/:schoolId/contact" element={<CommonPages />} />

          {/* Redirects for legacy/direct paths to Sahibabad default */}
          <Route path="/about-us/our-campus" element={<Navigate to="/school/dlf-sahibabad/campus" replace />} />
          <Route path="/about-us/parent-as-partners" element={<Navigate to="/parent-partners" replace />} />
        </Routes>
        {!isAdminRoute && <Footer />}
      </div>
    </>
  )
}
