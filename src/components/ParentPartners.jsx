import React, { useRef, useState } from 'react'
import { 
  Heart, Play, Pause, ExternalLink, Calendar, ShieldCheck, HeartHandshake, 
  Smile, BookOpen, Users, Compass, Award, Clock 
} from 'lucide-react'
import ImageWithLoader from './ImageWithLoader'

export default function ParentPartners() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const externalVideoLinks = [
    { title: "DLPS Virtual Campus Experience", duration: "4:12", url: "https://www.youtube.com/watch?v=F_fN91QJvHw" },
    { title: "Parents Orientation Program Highlights", duration: "3:45", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
  ]

  return (
    <div className="pt-24 bg-brand-bg min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      
      {/* 1. Philosophical Intro Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purpleDeep/5 border border-brand-purpleDeep/10 text-brand-purpleDeep text-[11px] font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Parents as Partners</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-greenDeep leading-[1.1] tracking-tight">
              A Shared Journey <br />
              <span className="italic text-brand-gold font-normal">Of Learning & Growth.</span>
            </h1>
            <div className="space-y-4 text-brand-muted text-base leading-relaxed font-sans max-w-2xl">
              <p>
                At DLF Public School, we view parents as the first teachers of every child. A child’s growth is never shaped by school alone—it is the sum total of the environment at home and at school. When both work together in harmony, learning becomes deeper, values become stronger, and children grow into confident, compassionate individuals.
              </p>
              <p>
                Education, therefore, is not a one-way journey. It is a collaborative experience where parents are valued as equal stakeholders and active partners in the educational process. We believe that when school and home work in synergy, every child thrives with confidence, clarity, and purpose.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-white border border-brand-greenDeep/5 rounded-3xl p-8 shadow-sm space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purpleDeep/5 rounded-full blur-3xl"></div>
            <h3 className="font-serif text-2xl font-bold text-brand-greenDeep">Shared Responsibility</h3>
            <p className="text-brand-muted text-sm leading-relaxed font-sans">
              The Parent Partnership Programme at DLF is a celebration of this shared responsibility. By contributing their time, expertise, experiences, and presence, parents enrich classroom learning, support school initiatives, and strengthen the larger learning community. Whether mentoring students, participating in events, or sharing professional insights, their involvement brings authentic real-world perspectives into everyday learning.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Video Showcase */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Local Video Player Card */}
          <div className="lg:col-span-8 bg-white border border-brand-greenDeep/5 rounded-3xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block mb-1">Featured Video</span>
              <h3 className="font-serif text-2xl font-bold text-brand-greenDeep mb-4">DLPS Parent Integration Broadcast</h3>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden bg-brand-charcoal group aspect-video">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/parent-video.mp4"
                playsInline
                loop
                onClick={togglePlay}
              />
              
              {/* Custom Overlays and Controls */}
              <div 
                className={`absolute inset-0 bg-brand-charcoal/30 flex items-center justify-center transition-opacity duration-300 ${
                  isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                }`}
              >
                <button 
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm text-brand-greenDeep flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current translate-x-0.5" />}
                </button>
              </div>

              {/* Native Tag */}
              <div className="absolute top-4 left-4 bg-brand-greenDeep/90 backdrop-blur-md text-white text-[10px] font-bold py-1 px-3 rounded-full">
                CAMPUS VIDEO
              </div>
            </div>

            <div className="mt-4 text-xs text-brand-muted flex justify-between items-center">
              <p>Click video window to Play / Pause</p>
              <p className="font-semibold text-brand-greenDeep">Local Server Streaming &bull; MP4</p>
            </div>
          </div>

          {/* External Links and Virtual Tour Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            <div className="bg-brand-purpleDeep text-white rounded-3xl p-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest">Digital Resources</span>
                <h3 className="font-serif text-xl font-bold">External Video Links</h3>
                <p className="text-white/70 text-xs leading-relaxed font-sans">
                  Watch official virtual orientations and graduation milestone videos broadcast on our digital platforms.
                </p>
              </div>

              <div className="space-y-3 mt-6">
                {externalVideoLinks.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group text-xs font-semibold"
                  >
                    <span className="truncate max-w-[200px]">{link.title}</span>
                    <span className="flex items-center gap-1.5 shrink-0 text-brand-gold group-hover:underline">
                      Watch <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Stay Connected Callout */}
            <div className="bg-white border border-brand-greenDeep/5 rounded-3xl p-6 shadow-sm">
              <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest block mb-2">Real-time Coordination</span>
              <h4 className="font-serif text-lg font-bold text-brand-greenDeep mb-2">Real-time Parent Portal</h4>
              <p className="text-brand-muted text-xs leading-relaxed font-sans mb-4">
                Stay updated with your child's academic reports, bus metrics, and announcements.
              </p>
              <a 
                href="#portals"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-purpleDeep hover:underline"
              >
                Access Parent Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Timeline of Initiatives: "How Do Parents Stay Connected?" */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 py-20 border-t border-brand-greenDeep/5">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] tracking-widest uppercase font-bold text-brand-gold">Active Channels</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-greenDeep leading-tight">
            How Do Parents Stay Connected?
          </h2>
          <p className="text-brand-muted text-sm sm:text-base font-sans">
            Explore the programmes, events, and conferences where DLPS parents coordinate and collaborate.
          </p>
        </div>

        <div className="space-y-24">
          
          {/* A. Meet & Greet */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-greenDeep/5 flex items-center justify-center text-brand-greenDeep">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-brand-greenDeep">Meet & Greet</h3>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                Designed especially for new entrants, Meet & Greet offers students and parents an opportunity to connect with teachers, explore the learning environment, and experience the school's culture firsthand. Designed as an interactive experience, it allows parents to engage in activities that reflect the school's pedagogical approach.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-brand-greenDeep/10 group shadow-sm bg-white p-3 space-y-3">
                <div className="overflow-hidden rounded-xl aspect-[4/3]">
                  <ImageWithLoader src="/parent_activity1.jpg" alt="Meet & Greet learning journey" imgClassName="transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <p className="text-[11px] text-brand-muted font-medium leading-relaxed italic">
                  The first step in a shared learning journey—where students, parents, and teachers connect, and collaborate.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-brand-greenDeep/10 group shadow-sm bg-white p-3 space-y-3">
                <div className="overflow-hidden rounded-xl aspect-[4/3]">
                  <ImageWithLoader src="/parent_activity2.jpg" alt="Buddies tying friendship bands" imgClassName="transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <p className="text-[11px] text-brand-muted font-medium leading-relaxed italic">
                  Buddies tying friendship bands.
                </p>
              </div>
            </div>
          </div>

          {/* B. Induction Programme & Orientation Sessions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 order-last lg:order-first">
              <div className="overflow-hidden rounded-3xl border border-brand-greenDeep/10 group shadow-md bg-white p-4 space-y-4 max-w-xl mx-auto">
                <div className="overflow-hidden rounded-2xl aspect-[16/10]">
                  <ImageWithLoader src="/7C1A1603.jpg" alt="Induction Program" imgClassName="transition-transform duration-700 group-hover:scale-103" loading="lazy" />
                </div>
                <p className="text-xs text-brand-muted font-medium leading-relaxed italic text-center">
                  Induction Programme & Orientation Sessions — building a strong school-home partnership from the very beginning.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-greenDeep/5 flex items-center justify-center text-brand-greenDeep">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-brand-greenDeep">Induction Programme & Orientation Sessions</h3>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                From the very first step, parents are welcomed into the DLF ecosystem through thoughtfully curated Induction Programmes and Orientation Sessions. These interactions help build a shared understanding of the school’s vision, pedagogy, expectations, and culture, ensuring that parents feel informed, involved, and connected from day one.
              </p>
            </div>
          </div>

          {/* C. Parents in Action */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-greenDeep/5 flex items-center justify-center text-brand-greenDeep">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-brand-greenDeep">Parents in Action</h3>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                Learning extends beyond academics into life skills, etiquette, and relationship-building. Initiatives like Fine Dining with Parents, clay modelling sessions, etc., create unique opportunities for meaningful bonding, informal interactions, and experiential learning in a warm and engaging setting.
              </p>
              <div className="bg-brand-gold/10 border-l-4 border-brand-gold p-4 rounded-r-xl">
                <p className="text-xs text-brand-greenDeep font-semibold font-sans italic">
                  It creates unique spaces for bonding, life-skill development, and informal interaction.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-brand-greenDeep/10 group shadow-md bg-white p-4 space-y-4 max-w-xl mx-auto">
                <div className="overflow-hidden rounded-2xl aspect-[16/10]">
                  <ImageWithLoader src="/7C1A1607.jpg" alt="Fine Dining Session" imgClassName="transition-transform duration-700 group-hover:scale-103" loading="lazy" />
                </div>
                <p className="text-xs text-brand-muted font-medium leading-relaxed italic text-center">
                  Fine Dining Sessions create spaces for connection, conversations, and life-skill learning beyond classrooms.
                </p>
              </div>
            </div>
          </div>

          {/* D. Student-Led Conferences (SLC) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 order-last lg:order-first">
              <div className="overflow-hidden rounded-3xl border border-brand-greenDeep/10 group shadow-md bg-white p-4 space-y-4 max-w-xl mx-auto">
                <div className="overflow-hidden rounded-2xl aspect-[16/10]">
                  <ImageWithLoader src="/7C1A1595.jpg" alt="Student-Led Conferences" imgClassName="transition-transform duration-700 group-hover:scale-103" loading="lazy" />
                </div>
                <p className="text-xs text-brand-muted font-medium leading-relaxed italic text-center">
                  Student-Led Conferences empower learners to reflect, communicate, and take ownership of their growth journey.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-greenDeep/5 flex items-center justify-center text-brand-greenDeep">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-brand-greenDeep">Student-Led Conferences (SLC)</h3>
              <div className="space-y-4 text-brand-muted text-sm leading-relaxed font-sans">
                <p>
                  At DLF, students take ownership of their learning journeys through Student-Led Conferences. Alongside traditional parent-teacher meetings, learners themselves reflect on their progress, present their achievements, discuss challenges, and set future goals in conversation with their parents and teachers.
                </p>
                <p>
                  SLCs nurture accountability, self-awareness, communication skills, and confidence, while giving parents a deeper insight into their child’s academic and personal growth. For parents, each conference provides a holistic understanding of their child’s journey—not just what they have learned, but how they have learned, grown, and evolved over the term.
                </p>
              </div>
            </div>
          </div>

          {/* E. Margdarshak – Career Counselling */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-greenDeep/5 flex items-center justify-center text-brand-greenDeep">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-brand-greenDeep">Margdarshak – Career Counselling</h3>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                As students begin exploring future pathways, parents are guided alongside them through Margdarshak, our structured career counselling initiative. These sessions empower families to make informed, future-ready decisions together while understanding emerging career landscapes and opportunities.
              </p>
              <div className="flex gap-4 flex-wrap">
                <span className="px-3 py-1 text-xs font-semibold bg-brand-greenDeep/5 rounded-full text-brand-greenDeep">Exploring Pathways, Together</span>
                <span className="px-3 py-1 text-xs font-semibold bg-brand-gold/10 rounded-full text-brand-gold">Charting Futures Together</span>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="bg-white border border-brand-greenDeep/5 rounded-3xl p-8 shadow-sm space-y-6 max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold mb-2">
                  <Compass className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-bold text-brand-greenDeep">Margdarshak Mentorship</h4>
                <p className="text-brand-muted text-xs leading-relaxed font-sans">
                  Through structured Career Counselling sessions, parents are guided alongside students to make informed, future-ready choices.
                </p>
                <div className="border-t border-brand-greenDeep/5 pt-4">
                  <p className="text-[11px] text-brand-gold font-bold uppercase tracking-wider italic">
                    Caption: Through Margdarshak, parents and students together navigate future-ready career choices with clarity and confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* F. Shubhakansha */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 order-last lg:order-first">
              <div className="overflow-hidden rounded-3xl border border-brand-greenDeep/10 group shadow-md bg-white p-4 space-y-4 max-w-xl mx-auto">
                <div className="overflow-hidden rounded-2xl aspect-[16/10]">
                  <ImageWithLoader src="/DJI_0044.JPG" alt="Graduation ceremony" imgClassName="transition-transform duration-700 group-hover:scale-103" loading="lazy" />
                </div>
                <p className="text-xs text-brand-muted font-medium leading-relaxed italic text-center">
                  Shubhakansha — celebrating milestones, memories, and the beautiful journey shared by students and parents.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-greenDeep/5 flex items-center justify-center text-brand-greenDeep">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-brand-greenDeep">Shubhakansha</h3>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                Shubhakansha is not merely a ceremony—it is a heartfelt coming together of students and parents, celebrating a journey that has shaped both. Through Shubhakansha, the DLF family extends its heartfelt wishes to the outgoing batch, encouraging them to carry forward the values, experiences, and lessons they have gathered here.
              </p>
              <p className="text-brand-muted text-xs leading-relaxed font-sans">
                With parents as an integral part of this milestone, the occasion reflects pride, gratitude, memories, and the emotional transition into a new chapter of life. As our students prepare to spread their wings, there is joy in achievement and a gentle tug of nostalgia in the air.
              </p>
            </div>
          </div>

          {/* G. Mother’s Day Celebrations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-greenDeep/5 flex items-center justify-center text-brand-greenDeep">
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-brand-greenDeep">Mother’s Day Celebrations</h3>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                At DLF, we celebrate mothers as the first teachers, strongest support systems, and the silent architects behind every child’s confidence and dreams.
              </p>
              <div className="border-l-4 border-brand-purpleDeep bg-brand-purpleDeep/5 p-4 rounded-r-xl">
                <p className="text-xs text-brand-purpleDeep font-medium italic">
                  Caption: To honour mothers — the first teachers, unwavering support systems, and the quiet strength behind every child’s journey.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-brand-greenDeep/10 group shadow-md bg-white p-4 space-y-4 max-w-xl mx-auto">
                <div className="overflow-hidden rounded-2xl aspect-[16/10] bg-brand-purpleDeep/5 flex items-center justify-center text-brand-purpleDeep">
                  <Heart className="w-20 h-20 fill-current animate-pulse text-brand-purpleDeep/20" />
                </div>
              </div>
            </div>
          </div>

          {/* H. Recognition Day & Annual Function */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 order-last lg:order-first">
              <div className="bg-white border border-brand-greenDeep/5 rounded-3xl p-8 shadow-sm space-y-4 max-w-xl mx-auto">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-brand-greenDeep">Annual Celebration Arena</h4>
                    <p className="text-[10px] text-brand-muted uppercase font-bold tracking-widest">Co-Creators of Milestones</p>
                  </div>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed font-sans">
                  From applauding achievements during Recognition Day to celebrating talent and creativity at the Annual Function, parents remain active participants in every milestone of a child’s journey.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-greenDeep/5 flex items-center justify-center text-brand-greenDeep">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-brand-greenDeep">Recognition Day & Annual Function</h3>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                Applauding achievements side-by-side. From honoring scholastic excellence during Recognition Day to celebrating collaborative theatre, music, and art performances at our grand Annual Functions, parents participate as mentors and spectators.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Concluding Quote Block */}
      <section className="bg-brand-greenDeep text-white py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-12 text-center space-y-8 relative z-10">
          <Heart className="w-12 h-12 text-brand-gold mx-auto fill-brand-gold animate-bounce" />
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium italic leading-relaxed text-brand-bg">
            "At every milestone, parents are not merely spectators—they are co-creators of their child’s journey. Together, we nurture confident, compassionate, and future-ready individuals, because when parents and educators walk hand in hand, every child’s potential finds its fullest expression."
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-10 h-0.5 bg-brand-gold"></div>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">DLF Public School Team</span>
            <div className="w-10 h-0.5 bg-brand-gold"></div>
          </div>
        </div>
      </section>

    </div>
  )
}
