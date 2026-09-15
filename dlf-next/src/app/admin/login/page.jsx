'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Eye, EyeOff, AlertCircle, ShieldCheck } from 'lucide-react'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('admin@dlfschools.com')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if already authenticated via session
    fetch('/api/auth/me')
      .then(res => {
        if (res.ok) router.push('/admin')
      })
      .catch(() => {})
  }, [router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed. Please verify credentials.')
      }

      // Success
      router.push('/admin')
      router.refresh()
    } catch (err) {
      setError(err.message)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#06060a] flex items-center justify-center p-4 font-sans select-none relative overflow-hidden">
      {/* Decorative Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-green-950/10 blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md bg-[#0a0a0f]/80 backdrop-blur-xl border border-gray-800/80 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold mb-4 shadow-[0_0_15px_rgba(197,155,39,0.15)]">
            <ShieldCheck className="h-7 w-7 text-brand-gold" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            DLF Schools <span className="text-brand-gold">CMS</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-semibold">
            Backend Administrative Portal
          </p>
          <div className="mt-2 inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-medium">
            MongoDB Database Active
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3.5 rounded-lg flex items-start gap-2.5 text-xs">
              <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Admin Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@dlfschools.com"
              className="w-full bg-[#12121a]/95 text-white border border-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/40 transition-all placeholder-gray-700"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Security Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••••"
                className="w-full bg-[#12121a]/95 text-white border border-gray-800 rounded-lg pl-4 pr-10 py-3 text-sm focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/40 transition-all placeholder-gray-700"
                required
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-brand-gold to-yellow-600 text-black font-semibold hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(197,155,39,0.25)] flex items-center justify-center gap-2 text-sm disabled:opacity-50 mt-2"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                Authenticating with Backend...
              </span>
            ) : (
              'Enter Admin Dashboard'
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-800/60 text-center">
          <p className="text-[11px] text-gray-500">
            Protected with bcrypt hashing & HTTP-only JWT sessions.
          </p>
        </div>
      </div>
    </div>
  )
}
