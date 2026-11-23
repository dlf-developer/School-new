'use client'

import React, { Suspense } from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import SubtleGradientBackground from './SubtleGradientBackground'

export default function AppShell({ children }) {
  const pathname = usePathname() || '/'
  const isAdminRoute = pathname.startsWith('/admin')

  return (
    <>
      <SubtleGradientBackground fixed={true} />
      <div className="isolate relative z-10 min-h-screen flex flex-col">
        {!isAdminRoute && (
          <Suspense fallback={null}>
            <Header />
          </Suspense>
        )}
        <main className="flex-1">
          <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center" />}>
            {children}
          </Suspense>
        </main>
        {!isAdminRoute && (
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        )}
      </div>
    </>
  )
}
