import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Eye, EyeOff, AlertCircle } from 'lucide-react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem('dlf_admin_auth') === 'true') {
      navigate('/admin')
    }
  }, [navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    // Simulate small network delay for premium feel
    setTimeout(() => {
      if (password === 'DLF@admin2026') {
        sessionStorage.setItem('dlf_admin_auth', 'true')
        navigate('/admin')
      } else {
        setError('Incorrect password. Please verify credentials.')
        setIsSubmitting(false)
      }
    }, 600)
  }

  return (
    <div className="min-h-screen bg-[#06060a] flex items-center justify-center p-4 font-sans select-none relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-green-950/10 blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md bg-[#0a0a0f]/80 backdrop-blur-xl border border-gray-800/80 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold mb-4 shadow-[0_0_15px_rgba(197,155,39,0.15)] animate-pulse">
            <Lock className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            DLF Schools <span className="text-brand-gold">CMS</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-semibold">
            Administrative Access Portal
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3.5 rounded-lg flex items-start gap-2.5 text-xs">
              <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Security Code / Password
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
            className="w-full py-3 rounded-lg bg-gradient-to-r from-brand-gold to-yellow-600 text-black font-semibold hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(197,155,39,0.25)] flex items-center justify-center gap-2 text-sm disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                Authorizing Access...
              </span>
            ) : (
              'Enter Dashboard'
            )}
          </button>
        </form>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-xs text-gray-500 hover:text-brand-gold transition-colors font-medium"
          >
            ← Return to Live Website
          </a>
        </div>
      </div>
    </div>
  )
}
