'use client'

import React from 'react'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import SchoolWinning from '@/components/SchoolWinning'
import VideoTestimonials from '@/components/VideoTestimonials'
import MasterPedagogy from '@/components/MasterPedagogy'
import PortalHome from '@/components/PortalHome'
import WhatSetsUsApart from '@/components/WhatSetsUsApart'
import Admissions from '@/components/Admissions'
import ContactHome from '@/components/ContactHome'

function SectionSeparator() {
  return (
    <div className="w-[90%] max-w-[1400px] mx-auto flex items-center justify-center gap-4 pointer-events-none select-none my-2">
      <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-brand-gold/40"></div>
      <div className="w-2 h-2 bg-brand-gold rotate-45 border border-brand-greenDeep/10 shadow-sm shrink-0"></div>
      <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-brand-gold/40"></div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* 1st Section – Video Hero */}
      <Hero />
      <Ticker />

      <SectionSeparator />

      {/* 2nd Section – School Awards */}
      <SchoolWinning isHomePage={true} />

      <SectionSeparator />

      {/* 3rd Section – Video Testimonials */}
      <VideoTestimonials schoolName="DLF Schools" />

      <SectionSeparator />

      {/* 4th Section – Our Pedagogy */}
      <MasterPedagogy />

      <SectionSeparator />

      {/* 5th Section – Our Schools */}
      <PortalHome />

      <SectionSeparator />

      {/* 6th Section – What sets us apart */}
      <WhatSetsUsApart isPreview={true} />

      <SectionSeparator />

      {/* 7th Section – Admissions */}
      <Admissions />

      <SectionSeparator />

      {/* 8th Section – Contact Us */}
      <ContactHome />
    </>
  )
}
