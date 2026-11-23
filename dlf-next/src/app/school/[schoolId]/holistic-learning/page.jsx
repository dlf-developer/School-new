'use client'

import { Suspense } from 'react'
import SchoolHolistic from '@/components/SchoolHolistic'

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SchoolHolistic />
    </Suspense>
  )
}
