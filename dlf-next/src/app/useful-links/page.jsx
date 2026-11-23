'use client'

import { Suspense } from 'react'
import UsefulLinks from '@/components/UsefulLinks'

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <UsefulLinks />
    </Suspense>
  )
}
