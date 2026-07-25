import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, MapPin, Sparkles } from 'lucide-react'
import ImageWithLoader from './ImageWithLoader'

// External Links - Official Edunext Admission Enquiry Forms
const SAHIBABAD_ENQUIRY_URL = 'https://dlps.edunexttechnologies.com/mvc/std/DynamicEnquiryForm'
const GREATER_NOIDA_ENQUIRY_URL = 'https://dlws.edunexttechnologies.com/mvc/std/DynamicEnquiryForm'

export default function AdmissionEnquiry() {
  const schools = [
    {
      id: 'dlf-sahibabad',
      name: 'DLF Public School',
      location: 'Sahibabad, Ghaziabad',
      image: '/DJI_0044.JPG',
      accentColor: 'brand-greenDeep',
      buttonBg: 'bg-brand-greenDeep hover:bg-brand-greenVibrant',
      externalUrl: SAHIBABAD_ENQUIRY_URL,
    },
    {
      id: 'dlf-greater-noida',
      name: 'DLF World School',
      location: 'Greater Noida',
      image: '/dlws.jpeg',
      accentColor: 'brand-purpleDeep',
      buttonBg: 'bg-brand-purpleDeep hover:bg-brand-purpleVibrant',
      externalUrl: GREATER_NOIDA_ENQUIRY_URL,
    }
  ]

  const handleSchoolClick = (url, name) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      alert(`External admission enquiry portal link for ${name} will open here once configured.`)
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg relative overflow-hidden py-16 sm:py-24 selection:bg-brand-gold/30">
      {/* Background ambient glows */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] ambient-glow-2 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] ambient-glow-1 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 space-y-16">
        
        {/* Page Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-masterDeep">
            Online Admission Enquiry
          </h1>
          <div className="w-20 h-[3px] bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed font-sans max-w-2xl mx-auto font-medium">
            Please select your preferred DLF Group School campus
          </p>
        </div>

        {/* School Enquiry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {schools.map((school) => (
            <div
              key={school.id}
              onClick={() => handleSchoolClick(school.externalUrl, school.name)}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5 p-6 sm:p-8 space-y-6"
            >
              <div className="space-y-4">
                {/* Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <ImageWithLoader
                    src={school.image}
                    alt={school.name}
                    loading="lazy"
                    imgClassName="object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: 'center 25%' }}
                  />
                </div>

                {/* Name & Location */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    {school.location}
                  </div>
                  <h3 className={`font-serif text-2xl sm:text-3xl font-bold text-${school.accentColor}`}>
                    {school.name}
                  </h3>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  className={`w-full ${school.buttonBg} text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-2xl transition-all duration-300 shadow-md flex items-center justify-center gap-3 cursor-pointer group-hover:shadow-xl`}
                >
                  <span>Proceed to Online Enquiry</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div className="text-center pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-muted uppercase tracking-wider hover:text-brand-masterDeep transition-colors"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
