import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us/our-campus" element={<OurCampus />} />
        <Route path="/about-us/parent-as-partners" element={<ParentPartners />} />
      </Routes>
      <Footer />
    </>
  )
}
