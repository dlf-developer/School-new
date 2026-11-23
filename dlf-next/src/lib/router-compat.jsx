'use client'

import React, { useEffect } from 'react'
import NextLink from 'next/link'
import {
  usePathname,
  useRouter,
  useParams as useNextParams,
  useSearchParams as useNextSearchParams,
} from 'next/navigation'

export function Link({ to, href, children, className, style, onClick, target, rel, ...props }) {
  const destination = href || to || '#'
  return (
    <NextLink
      href={destination}
      className={className}
      style={style}
      onClick={onClick}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </NextLink>
  )
}

export function useLocation() {
  const pathname = usePathname() || '/'
  return { pathname, search: '', hash: '', state: null }
}

export function useParams() {
  const params = useNextParams()
  return params || {}
}

export function useNavigate() {
  const router = useRouter()
  return (to, options) => {
    if (!to) return
    if (typeof to === 'number') {
      if (to === -1) router.back()
      return
    }
    if (options?.replace) {
      router.replace(to)
    } else {
      router.push(to)
    }
  }
}

export function useSearchParams() {
  const searchParams = useNextSearchParams()
  const setSearchParams = () => {}
  return [searchParams || new URLSearchParams(), setSearchParams]
}

export function Navigate({ to, replace }) {
  const router = useRouter()
  useEffect(() => {
    if (replace) router.replace(to)
    else router.push(to)
  }, [router, to, replace])
  return null
}
