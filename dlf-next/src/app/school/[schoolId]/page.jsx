'use client'

import React from 'react'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Vision from '@/components/Vision'
import Stats from '@/components/Stats'
import CbseResults from '@/components/CbseResults'
import VideoTestimonials from '@/components/VideoTestimonials'
import Curriculum from '@/components/Curriculum'
import Holistic from '@/components/Holistic'
import VirtualTour from '@/components/VirtualTour'
import Admissions from '@/components/Admissions'

export default function SchoolBranchPage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Vision />
      <Stats />
      <CbseResults />
      <VideoTestimonials />
      <Curriculum isHomePage={true} />
      <Holistic />
      <VirtualTour />
      <Admissions />
    </>
  )
}
