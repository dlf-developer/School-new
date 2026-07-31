import React, { useState } from 'react'
import { Play, Quote, Star, Sparkles, X } from 'lucide-react'

export default function VideoTestimonials({ theme, schoolName = "DLF School" }) {
  const primaryColor = theme?.primary || 'brand-greenDeep'
  const vibrantColor = theme?.vibrant || 'brand-greenVibrant'
  const [activeVideo, setActiveVideo] = useState(null)

  const videoList = [
    {
      id: "1",
      title: "Parent Reflection — Nurturing Holistic Excellence",
      parent: "Dr. Ananya Mukherjee (Parent of Class IX)",
      thumbnail: "/images/home-hero.jpg",
      videoId: "L_LUpnjgPso",
      duration: "02:15",
      quote: "DLF Public School doesn't just focus on marks—it shapes character, values, and leadership.",
    },
    {
      id: "2",
      title: "Student Journey — Thinking Beyond Classrooms",
      parent: "Rahul Sharma (Class XII Alumnus)",
      thumbnail: "/dlws.jpeg",
      videoId: "dQw4w9WgXcQ",
      duration: "01:45",
      quote: "The innovation labs and faculty mentorship gave me the confidence to win national STEM awards.",
    },
    {
      id: "3",
      title: "Early Years Parents — Safe & Inclusive Learning",
      parent: "Mrs. Meenakshi & Mr. Vikram Verma",
      thumbnail: "/images/home-hero.jpg",
      videoId: "L_LUpnjgPso",
      duration: "03:10",
      quote: "Our child looks forward to school every single morning. The experiential curriculum is unmatched.",
    },
  ]

  return (
    <section className="py-16 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-12 space-y-8 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
        <div>
          <span className={`text-xs uppercase font-extrabold tracking-widest text-${vibrantColor}`}>
            Community Voices
          </span>
          <h3 className={`font-serif text-2xl sm:text-4xl font-bold text-${primaryColor} mt-1`}>
            Video Testimonials
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted font-inter mt-1 font-medium">
            Hear directly from our parents, alumni, and students about their educational journeys at {schoolName}.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 px-4 py-2 rounded-2xl text-xs font-bold shrink-0">
          <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
          <span>Parent Satisfaction</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videoList.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveVideo(item)}
            className="group bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="h-48 overflow-hidden relative bg-black">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
              />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/20">
                Sample Video Placeholder
              </div>
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                {item.duration}
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white text-brand-charcoal flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                  <Play className="w-6 h-6 ml-1 text-brand-gold fill-brand-gold" />
                </div>
              </div>
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <Quote className="w-5 h-5 text-brand-gold/60" />
                <p className="text-xs text-brand-charcoal font-serif font-medium leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200/60">
                <h5 className="font-bold text-xs text-brand-charcoal">{item.title}</h5>
                <span className="text-[10px] text-brand-muted font-inter">{item.parent}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full relative shadow-2xl space-y-4 p-6">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-lg font-bold text-brand-charcoal">{activeVideo.title}</h4>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
