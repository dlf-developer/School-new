import React from 'react'
import { CheckCircle2, Camera } from 'lucide-react'
import { counsellingPillars } from '../../../data/schools/dlps/counsellingData'

export default function CounsellingPillars({ theme, onSelectImage }) {
  const photoSlots = [
    {
      id: 'slot-1',
      label: 'Photo Placeholder 1',
      title: 'Confidential Guidance Room',
      desc: 'One-on-one student counselling & emotional wellness hub.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'slot-2',
      label: 'Photo Placeholder 2',
      title: 'Career Margdarshak Seminar',
      desc: 'Interactive university guidance & stream selection townhalls.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'slot-3',
      label: 'Photo Placeholder 3',
      title: 'Morning Yoga & Mindfulness',
      desc: 'Holistic fitness, breathing exercises, and emotional regulation.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'slot-4',
      label: 'Photo Placeholder 4',
      title: 'Peer Educators Workshop',
      desc: 'Student ambassador training for cyber-safety & anti-bullying.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    },
  ]

  return (
    <div className="space-y-12">
      {/* Photo Highlights Section */}
      <div className="bg-gray-50/80 rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span
              className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant} flex items-center gap-1.5`}
            >
              <Camera className="w-3.5 h-3.5" /> Media Gallery
            </span>
            <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
              Counselling &amp; Wellness Photo Highlights
            </h3>
            <p className="text-xs text-brand-muted font-inter">
              Visual photo placeholders for campus counseling facilities, career workshops, and wellness sessions.
            </p>
          </div>
          <span className="text-[11px] font-bold text-brand-gold bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm shrink-0 self-start sm:self-auto">
            4 Image Placeholders Available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {photoSlots.map((slot) => (
            <div
              key={slot.id}
              onClick={() => onSelectImage && onSelectImage(slot)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="h-44 w-full relative bg-gray-100 overflow-hidden">
                <img
                  src={slot.image}
                  alt={slot.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />

                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider bg-brand-gold text-brand-charcoal px-2.5 py-1 rounded-md shadow-md">
                    {slot.label}
                  </span>
                </div>

                <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Camera className="w-3 h-3 text-brand-gold" /> Preview
                </div>
              </div>

              <div className="p-3.5 space-y-1">
                <h4
                  className={`font-serif text-xs font-bold text-brand-charcoal group-hover:text-${theme.primary} transition-colors leading-snug`}
                >
                  {slot.title}
                </h4>
                <p className="text-[10px] text-brand-muted font-inter leading-relaxed line-clamp-2">
                  {slot.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 9 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {counsellingPillars.map((pillar, idx) => {
          const PillarIcon = pillar.icon
          return (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-md space-y-5 hover:shadow-lg transition-shadow relative overflow-hidden group flex flex-col justify-between"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-${theme.primary}`} />
              <div className="space-y-4">
                <div
                  className={`w-10 h-10 bg-${theme.primary}/10 text-${theme.primary} rounded-2xl flex items-center justify-center shrink-0`}
                >
                  <PillarIcon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-brand-charcoal leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-[11px] text-brand-muted leading-relaxed font-inter font-medium">
                  {pillar.desc}
                </p>
              </div>
              <ul className="space-y-1.5 text-[10px] text-brand-charcoal font-inter pt-4 border-t border-gray-50 mt-4">
                {pillar.details.map((det, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-3 h-3 text-${theme.accent} shrink-0`} />
                    <span className="font-semibold">{det}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
