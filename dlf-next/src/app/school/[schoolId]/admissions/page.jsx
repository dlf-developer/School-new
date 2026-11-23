'use client'

import { Suspense } from 'react'
import SchoolAdmissions from '@/components/SchoolAdmissions'

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SchoolAdmissions />
    </Suspense>
  )
}
