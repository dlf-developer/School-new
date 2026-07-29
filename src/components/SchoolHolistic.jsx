import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { useSiteData } from '../hooks/useSiteData'
import { 
  Music, 
  Trophy, 
  Palette, 
  BookOpen, 
  Compass, 
  Award, 
  ArrowLeft, 
  Heart, 
  CheckCircle2, 
  Image as ImageIcon,
  Sparkles,
  Users,
  FileText
} from 'lucide-react'

const iconMap = {
  performingArts: Music,
  sports: Trophy,
  visualArts: Palette,
  scholastic: BookOpen,
  schoolExcursions: Compass,
  studentAchievements: Award,
  studentLife: Users
}

const sectionTitles = {
  performingArts: 'Performing Arts (Dance, Music, Theatre & Stagecraft)',
  sports: 'Sports Development & Athletic Facilities',
  visualArts: 'Visual Arts, Clay Modeling & Design Studio',
  scholastic: 'Scholastic Learning Spaces, Labs & Library',
  schoolExcursions: 'School Excursions & Experiential Learning Journeys',
  studentAchievements: 'Student Achievements & Delfite Trailblazers',
  studentLife: 'Student Life, DLF Student Guild & Co-Curricular Clubs'
}

const categoryThumbnails = {
  performingArts: '/achievements/Nrityanjali.jpeg',
  sports: '/achievements/Shreeja Singh at UP State Championship.jpg',
  visualArts: '/achievements/Unique Hospital Bed.jpg',
  scholastic: '/achievements/Pendulum Pump.png',
  schoolExcursions: '/achievements/ramjas (1).jpg',
  studentAchievements: '/achievements/Aadya Singh.jpg',
  studentLife: '/achievements/ramjas (1).jpg'
}

const sectionKeyMap = {
  'performing-arts': 'performingArts',
  'performingArts': 'performingArts',
  'sports-development': 'sports',
  'sports': 'sports',
  'visual-arts': 'visualArts',
  'visualArts': 'visualArts',
  'scholastic': 'scholastic',
  'skill-enrichment': 'scholastic',
  'skillEnrichment': 'scholastic',
  'school-excursions': 'schoolExcursions',
  'schoolExcursions': 'schoolExcursions',
  'student-achievements': 'studentAchievements',
  'studentAchievements': 'studentAchievements',
  'student-life': 'studentLife',
  'studentLife': 'studentLife',
  'student-guild': 'studentLife',
  'student-corner': 'studentLife'
}

export default function SchoolHolistic() {
  const { schoolId, sectionId } = useParams()
  const [searchParams] = useSearchParams()
  const { schools } = useSiteData()

  const activeBranch = schoolId && schools[schoolId] ? schoolId : 'dlf-sahibabad'
  const currentSchool = schools[activeBranch]

  const theme = currentSchool?.theme || {
    primary: 'brand-greenDeep',
    vibrant: 'brand-greenVibrant',
    accent: 'brand-gold',
    accentHex: '#C59B27'
  }

  const rawSectionParam = sectionId || searchParams.get('section')
  const initialSection = rawSectionParam && sectionKeyMap[rawSectionParam] ? sectionKeyMap[rawSectionParam] : 'performingArts'
  const [activeSub, setActiveSub] = useState(initialSection)

  useEffect(() => {
    if (rawSectionParam && sectionKeyMap[rawSectionParam]) {
      setActiveSub(sectionKeyMap[rawSectionParam])
    }
  }, [rawSectionParam])

  const holisticData = {
    performingArts: 'Performing Arts bring learning to life through movement, music, and expression. Whether it is dance, theatre, or vocal and instrumental music, students are encouraged to explore rhythm, storytelling, and stagecraft. Performances are thoughtfully woven into the school culture—be it daily assemblies, Annual Day functions, national celebrations, or thematic presentations during Scholastic Months—giving every child a platform to showcase talent, overcome stage fear, and build self-assurance.',
    sports: 'Our sports infrastructure reflects both scale and ambition—designed to offer students diverse, high-quality training environments across Olympic and global sports. The campus features a newly developed synthetic football turf providing professional-grade conditions. Alongside this, students have access to dedicated volleyball and lawn tennis courts, encouraging both team spirit and individual stamina. The standout Olympic-size skating rink provides a unique platform to develop balance and speed. The school houses two well-maintained swimming pools, indoor basketball and badminton courts, and the only pickleball court in the vicinity.',
    visualArts: 'Visual Arts at DLF Schools go far beyond conventional drawing and painting. Students engage with a wide range of creative mediums—sketching, canvas painting, clay modeling, sculpture, mixed media, and digital design—allowing them to experiment, take creative risks, and discover their own artistic voice. The focus is on observation, interpretation, and original expression. Art becomes a mode of critical thinking and emotional articulation, enhanced by our art-integrated academic approach where visual arts intersect with core subjects.',
    scholastic: 'Our scholastic foundation is anchored in state-of-the-art tinkering labs, digital hubs, and rich library resources. The THOTS Lab and Innovation Hub are dedicated spaces where analytical reasoning and scientific inquiry are nurtured. Our scholastic learning environments include Physics, Chemistry, Biology, and ICT Labs, alongside the FIM Lab. These are complemented by a central library housing over 20,000 books, class libraries (Nursery-XII), the DEAR (Drop Everything And Read) period, and modern presentation spaces including an Auditorium, Assembly Hall, Seminar Halls, and Conference Rooms.',
    schoolExcursions: 'Educational excursions are not a break from learning—they are learning in motion. Delfites participate in a rich variety of journeys: historical heritage walks, industry visits, science explorations, biodiversity parks, village immersions, museums, and outdoor leadership camps. Visits to prestigious institutions such as the President\'s Estate, National Physical Laboratory, Parliament Museum, and university research centres enable students to witness knowledge in action. Outdoor camps in Lohagarh Farms, Dharamshala, and Chakrata build resilience. Our students also participate in international exchange tours to countries like Russia, Malaysia, and beyond.',
    studentAchievements: 'Every Delfite is encouraged to pursue multi-dimensional excellence—mastering academics, sports, and arts. Student Achievements showcase the remarkable triumphs of our Delfite Trailblazers across international sports championships, national science exhibitions, venture capital grants, and state records.',
    studentLife: 'At DLF, we are on a mission to transform the world one child at a time. We believe that education should not confine learners to a syllabus but expose them to life. To be the individuals who will take charge of the world tomorrow, our children have to have the necessary Life Skills and the right Attitude. We offer numerous opportunities and platforms to Delfites so that they not only discover themselves but also create themselves. These opportunities to rub shoulder with life are significantly greater for Class XI & XII be it through the leadership roles they get or through inculcating Entrepreneurial skills as our young learners of Class XI cultivate themselves to be job creators rather than job seekers. Our Academic Outcomes too have consistently celebrated this culture of transformation—nurturing achievers and cultivating winners for over 22 years with a steady track record of State and District toppers.'
  }

  const subsectionFeatures = {
    performingArts: [
      'Dance (Classical, Contemporary, and Folk movement integrated with stage performances).',
      'Vocal Music (Hindustani Classical, Light Vocal, and Choir performance training).',
      'Instrumental Music (Keyboards, Drums, Guitar, Harmonium, and Tabla practice sessions).',
      'Theatre & Drama (Scriptwriting, monologues, characterization, and theatrical expression).',
      'Stagecraft & Performance Art (Public speaking, stage presence, light/sound coordination, and hosting).'
    ],
    sports: [
      'Synthetic Football Turf (Professional-grade conditions for competitive training and matches).',
      'Olympic-Size Skating Rink (Developing balance, speed, precision, and competitive edge).',
      'Two Swimming Pools (Dedicated pools catering to different age groups and skill levels).',
      'Exclusive Pickleball Court (Introducing students to emerging fast-paced global racket sports).',
      'Indoor Basketball & Badminton Courts (Year-round practice and inter-school tournament hosting).',
      'Lawn Tennis Courts & Volleyball Arena (Developing endurance, tactical agility, and sportsmanship).'
    ],
    visualArts: [
      'Sketching & Pencil Shading (Mastering proportion, perspective, light, and shadow).',
      'Canvas Painting & Watercolors (Exploring color harmony, impressionism, and thematic expression).',
      'Clay Modeling & Pottery (Tactile 3D sculpting, form development, and ceramics).',
      'Sculpture & Mixed Media (Upcycled art installations, paper-mâché, and relief work).',
      'Digital Design & Graphic Art (Creative software illustration and visual storytelling).',
      'Craft & Design Studio (Hands-on block printing, tie-and-dye, and artisanal craft techniques).'
    ],
    scholastic: [
      'Thots Lab (Structured thinking process and cognitive skill building).',
      'Innovation Hub & FIM Lab (Robotics, AI coding, financial literacy, and tinkering projects).',
      'Science Labs (Advanced Physics, Chemistry, and Biology research laboratories).',
      'ICT & Computer Labs (High-speed digital labs for programming, web design, and data science).',
      'Central School Library (20,000+ books, digital archives, and class libraries for Nursery-XII).',
      'Auditorium, Assembly Hall, Seminar Halls & Conference Rooms (State-of-the-art event & lecture spaces).',
      'DEAR (Drop Everything And Read) Scheduled Period (Cultivating daily reading habits).'
    ],
    schoolExcursions: [
      'Historical & Heritage Walks (Exploring heritage monuments, museums, and cultural sites).',
      'Institutional Visits (President\'s Estate, National Physical Laboratory, Parliament Museum).',
      'Ecological Expeditions (Biodiversity parks, city forests, and rural village immersions).',
      'Adventure & Leadership Camps (Outstation camps at Lohagarh Farms, Dharamshala, and Chakrata).',
      'Global Educational Tours (International student exchange journeys to Russia, Malaysia, and more).'
    ],
    studentAchievements: [
      'Arsalan Alam — SPARC Internship Scholar & $10,000 International Venture Capital Grant Winner.',
      'Shreeja Singh — 5 Gold Medals & 5 State Records at UP State Swimming Championship (Best Swimmer).',
      'Ishika Singh — Prime All-Rounder in Delhi Premier League (DPL) Cricket for South Delhi Superstarz.',
      'Nandini Kansal — ITF International Tennis Representative in Nepal & Africa (AITA #21 UP Rank).',
      'Uday Kaul — ITF Kazakhstan Tennis Representative (AITA Men\'s All India Ranking 262).'
    ],
    studentLife: [
      'DLF Student Guild (Comprising Peer Educators and Student Leaders putting leadership into practice with responsibility and ownership).',
      'Month-Long Screening & Sifting Process (Student leaders chosen annually by school committee and outgoing Guild).',
      'The 4 Planet Houses — Mercury (Yellow), Venus (Blue), Mars (Red), and Jupiter (Green) competing for the annual House Trophy.',
      'House & School Assemblies Ownership (Student leaders organize and run assemblies, promoting mental health, integrity, and peer synergy).',
      'Class XI & XII Entrepreneurial Cultivation (Inculcating entrepreneurial skills so young learners become job creators rather than job seekers).',
      'Student Manifesto & Democratic Roles (Assuming small leadership roles in learning transactions, time management, and delegation).'
    ]
  }

  const subsectionPhotos = {
    performingArts: [
      { src: '/achievements/Nrityanjali.jpeg', caption: 'Classical dance performance at Nrityanjali Inter-School Competition' },
      { placeholder: true, title: 'Annual Dance & Music Fest', caption: 'Stage performance during Annual Cultural Extravaganza (Photos coming soon)' },
      { placeholder: true, title: 'Instrumental & Vocal Studio', caption: 'Student choir & band rehearsal session (Photos coming soon)' }
    ],
    sports: [
      { src: '/achievements/Nandini Kansal.jpg', caption: 'Nandini Kansal — Represented India at ITF Nepal & Africa, AITA #21 (UP)' },
      { src: '/achievements/Shreeja Singh at UP State Championship.jpg', caption: 'Shreeja Singh — 5 Golds & 5 State Records, Best Swimmer at UP State Championship' },
      { placeholder: true, title: 'Synthetic Football Turf Arena', caption: 'High-intensity match action on professional turf (Photos coming soon)' },
      { placeholder: true, title: 'Olympic-Size Skating Rink & Pickleball', caption: 'Skating drills & pickleball coaching sessions (Photos coming soon)' }
    ],
    visualArts: [
      { src: '/achievements/Unique Hospital Bed.jpg', caption: 'Design & sculpture models created by students at the Design Studio' },
      { placeholder: true, title: 'Annual Art & Sculpture Exhibition', caption: 'Canvas paintings & clay models on display (Photos coming soon)' },
      { placeholder: true, title: 'Craft & Digital Design Studio', caption: 'Students crafting mixed-media artworks (Photos coming soon)' }
    ],
    scholastic: [
      { src: '/achievements/Pendulum Pump.png', caption: 'Mechanical Pendulum Pump — Top 3 at CBSE National Science Exhibition' },
      { placeholder: true, title: 'Thots Lab & Innovation Hub', caption: 'Hands-on robotics and thinking process session (Photos coming soon)' },
      { placeholder: true, title: 'Central Library & Seminar Hall', caption: 'DEAR reading period and academic lectures (Photos coming soon)' }
    ],
    schoolExcursions: [
      { src: '/achievements/ramjas (1).jpg', caption: 'Students participating in inter-school outreach and educational camps' },
      { placeholder: true, title: 'Outstation Leadership Camp (Chakrata/Dharamshala)', caption: 'Adventure camping & trekking expedition (Photos coming soon)' },
      { placeholder: true, title: 'International Exchange Tour (Russia/Malaysia)', caption: 'Global student immersion and cultural exchange (Photos coming soon)' }
    ],
    studentAchievements: [
      { src: '/achievements/Aadya Singh.jpg', caption: 'Arsalan Alam & Aadya Singh — SPARC Scholars & VC Grant Innovators' },
      { src: '/achievements/Shreeja Singh at UP State Championship.jpg', caption: 'Shreeja Singh — Best Swimmer UP State Championship' },
      { src: '/achievements/Ishika Singh cricket.jpg', caption: 'Ishika Singh — Delhi Premier League All-Rounder' }
    ],
    studentLife: [
      { src: '/achievements/ramjas (1).jpg', caption: 'DLF Student Guild — Peer Educators & Student Leaders Investiture Ceremony' },
      { src: '/achievements/Nrityanjali.jpeg', caption: 'Inter-House Competitions — Mercury, Venus, Mars & Jupiter Houses' },
      { src: '/achievements/Pendulum Pump.png', caption: 'Class XI & XII Entrepreneurial & Leadership Showcase' }
    ]
  }

  const dlwsSubsectionFeatures = {
    performingArts: [
      'Dance & Movement Studio (Integrating Indian classical, contemporary, and folk stagecraft).',
      'Vocal Music Training (Hindustani classical, light vocal, and choir practice sessions).',
      'Instrumental Music Suite (Keyboards, drums, guitar, harmonium, and tabla).',
      'Stagecraft & Public Speaking (Assembly presentations, annual day performances, and theatrical hosting).'
    ],
    sports: [
      'Synthetic Football Turf (Professional-grade arena for competitive training and friendly matches).',
      'Olympic-Size Skating Rink (Developing balance, speed, precision, and state-level competitive edge).',
      'Exclusive Pickleball Court (State-of-the-art court introducing fast-paced modern racket sports).',
      'Lawn Tennis Court & Outdoor Arena (Fostering tactical agility, endurance, and sportsmanship).',
      'Discovery Den Indoor Play Zone (Sensory kinetic play equipment for kindergarten learners).'
    ],
    visualArts: [
      'Art & Design Studio (Sketching, pencil shading, canvas painting, and color harmony).',
      'Clay Modeling & Sculpting (Tactile 3D pottery, relief modeling, and ceramics).',
      'Mixed Media & Craft Studio (Upcycled art installations, block printing, and paper-mâché).',
      'Digital Graphic Design (Exploring visual storytelling, creative software, and poster art).'
    ],
    scholastic: [
      'THOTS & Mindspark Labs (Structured cognitive thinking processes and adaptive math learning).',
      'STEAM & Science Laboratories (Advanced Physics, Chemistry, and Biology research spaces).',
      'ICT & Computer Labs (High-speed digital labs equipped with smart coding platforms).',
      '3000+ Book Central Library (Curated literature, class reading corners, and DEAR periods).'
    ],
    schoolExcursions: [
      'Historical & Heritage Tours (Exploring national monuments, museums, and heritage walks).',
      'Institutional Expeditions (Visits to scientific centers, planetariums, and biodiversity parks).',
      'Adventure & Camping Expeditions (Outstation camps fostering resilience and team bonding).',
      'Environmental Outreach (Project S.O.R.T. waste segregation drives & eco-sustainability walks).'
    ],
    studentAchievements: [
      'Kalamanjusha Overall Rolling Trophy — 36 medalists winning 15 out of 17 events at KC International.',
      'Sustainability Superstar Award (2024 & 2025) — Conferred by Go Sharpener for 2 consecutive years.',
      'First in Math Annual Global Ranking 2025–26 — Global recognition for mathematical problem solving.',
      'World Skill Challenge National Champions — Overall Winner Titles in Drone X Big & Mystery Makers.',
      'Manak Inspire Awardees — 1st Position & ₹10,000 Cash Prize for Smart Ambulance & Fake Plate Buster.'
    ],
    studentLife: [
      'DLF World School Student Guild (Peer Educators & Student Leaders fostering ownership and democratic leadership).',
      'Month-Long Screening Process (Annual selection of student council members by school committee and outgoing Guild).',
      '4 Planet House System — Mercury, Venus, Mars, and Jupiter competing for academic, sports, and House trophies.',
      'Assembly & Community Ownership (Student leaders running House & School assemblies, peer support, and team building).',
      'Entrepreneurial Skill Cultivation (Preparing senior students with Life Skills and leadership to be future leaders).',
      'Student Manifesto Guidelines (Inculcating time management, delegation, and caring global citizenship).'
    ]
  }

  const dlwsSubsectionPhotos = {
    performingArts: [
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-1.jpg', caption: 'Stage performance & cultural presentations at DLF World School' },
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-2.jpg', caption: 'Student music & theatrical ensemble rehearsal' },
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-3.jpg', caption: 'Creative movement & dance showcase' }
    ],
    sports: [
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-8.jpg', caption: 'UP State Swimming Champions — Amaris Patel (Class 7) winning Gold & Silver Medals' },
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-9.jpg', caption: 'District Skating Champions — Gayatri Ganjoo & Jayditya Sharma at YMCA Rink' },
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-10.jpg', caption: 'State Level E-Sports Championship Winners at Greater Noida' }
    ],
    visualArts: [
      { src: '/images/dlws/dlws-holistic-learning-1.jpg', caption: 'Art & Design Studio — Visual arts, clay modeling, and creative exhibits' },
      { src: '/images/dlws/dlws-curriculum-3.jpg', caption: 'Canvas painting & design workstations' }
    ],
    scholastic: [
      { src: '/images/dlws/dlws-curriculum-1.jpg', caption: 'THOTS & Mindspark Lab — Cognitive thinking & adaptive math sessions' },
      { src: '/images/dlws/dlws-curriculum-2.jpg', caption: 'Digital ICT & STEAM Research Lab' },
      { src: '/images/dlws/dlws-curriculum-4.jpg', caption: 'Air-conditioned Smart Classroom with interactive displays' }
    ],
    schoolExcursions: [
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-4.jpg', caption: 'World Skill Challenge National Champions in Drone X Big' },
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-5.jpg', caption: 'World Skill Challenge Mystery Makers National Winners' },
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-6.jpg', caption: 'Manak Inspire Award Innovation Projects' },
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-7.jpg', caption: 'SOARFEST 2025 Aero-modelling competition at Sikarpur Airport, Udaipur' }
    ],
    studentAchievements: [
      { src: '/images/dlws/dlws-school-achievements-dlws-1.jpg', caption: 'Kalamanjusha Overall Rolling Trophy Winners — DLF World School (36 Medalists)' },
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-1.jpg', caption: 'Sustainability Superstar Award (2024 & 2025) by Go Sharpener' },
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-4.jpg', caption: 'World Skill Challenge Drone X Big National Overall Champions' }
    ],
    studentLife: [
      { src: '/images/dlws/dlws-school-achievements-dlws-1.jpg', caption: 'DLF World School Student Guild Leaders & House Captains' },
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-1.jpg', caption: 'Inter-House Cultural Showcase & Assembly Leaders' },
      { src: '/images/dlws/dlws-hollistic-learning-educational-excursions-4.jpg', caption: 'STEAM & Innovation Club National Champions' }
    ]
  }

  const dlwsCategoryThumbnails = {
    performingArts: '/images/dlws/dlws-hollistic-learning-educational-excursions-1.jpg',
    sports: '/images/dlws/dlws-hollistic-learning-educational-excursions-8.jpg',
    visualArts: '/images/dlws/dlws-holistic-learning-1.jpg',
    scholastic: '/images/dlws/dlws-curriculum-1.jpg',
    schoolExcursions: '/images/dlws/dlws-hollistic-learning-educational-excursions-4.jpg',
    studentAchievements: '/images/dlws/dlws-school-achievements-dlws-1.jpg',
    studentLife: '/images/dlws/dlws-school-achievements-dlws-1.jpg'
  }

  const featuresToRender = activeBranch === 'dlf-greater-noida' ? dlwsSubsectionFeatures : subsectionFeatures
  const photosToRender = activeBranch === 'dlf-greater-noida' ? dlwsSubsectionPhotos : subsectionPhotos
  const thumbnailsToRender = activeBranch === 'dlf-greater-noida' ? dlwsCategoryThumbnails : categoryThumbnails

  const keys = ['performingArts', 'sports', 'visualArts', 'scholastic', 'schoolExcursions', 'studentAchievements', 'studentLife']
  const ActiveIcon = iconMap[activeSub]

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>School Life &amp; Wings</span>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}>Holistic Learning</h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter font-medium">
              Fostering kinetic, creative, scholastic, and social intelligence beyond standard classroom boundaries.
            </p>
          </div>
          <Link 
            to={`/school/${activeBranch}`}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-80 transition-opacity shrink-0`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to School Home
          </Link>
        </div>

        {/* Holistic Layout: Left Menu / Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start bg-white rounded-3xl border border-gray-150 shadow-md p-5 space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 block px-2 mb-1">Holistic Learning Wings</span>
            {keys.map(key => {
              const Icon = iconMap[key]
              const isActive = activeSub === key
              const label = key === 'performingArts' ? 'Performing Arts' 
                : key === 'sports' ? 'Sports Development' 
                : key === 'visualArts' ? 'Visual Arts' 
                : key === 'scholastic' ? 'Scholastic' 
                : key === 'schoolExcursions' ? 'School Excursions' 
                : key === 'studentAchievements' ? 'Student Achievements'
                : 'Student Life, Guild & Clubs'
              
              const subRouteMap = {
                performingArts: 'performing-arts',
                sports: 'sports-development',
                visualArts: 'visual-arts',
                scholastic: 'scholastic',
                schoolExcursions: 'school-excursions',
                studentAchievements: 'student-achievements',
                studentLife: 'student-life'
              }

              return (
                <Link
                  key={key}
                  to={`/school/${activeBranch}/holistic-learning/${subRouteMap[key]}`}
                  onClick={() => setActiveSub(key)}
                  className={`w-full text-left flex items-center gap-3.5 p-3 rounded-2xl transition-all border cursor-pointer ${
                    isActive 
                      ? `bg-${theme.primary} text-white shadow-md border-transparent` 
                      : 'bg-white hover:bg-gray-50 text-brand-charcoal border-gray-100'
                  }`}
                >
                  <div className="w-14 h-12 rounded-xl overflow-hidden shrink-0 relative bg-gray-100 shadow-inner flex items-center justify-center">
                    <img src={thumbnailsToRender[key]} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <span className="font-bold text-xs uppercase tracking-wider leading-snug">{label}</span>
                </Link>
              )
            })}
          </div>

          {/* Right Detailed Content Panel */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-150 shadow-xl overflow-hidden min-h-[450px] flex flex-col justify-between">
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Category Cover Image Banner */}
              <div className="w-full h-48 sm:h-60 rounded-2xl overflow-hidden relative shadow-md">
                <img 
                  src={thumbnailsToRender[activeSub]} 
                  alt={sectionTitles[activeSub]} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6 text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shrink-0 border border-white/20">
                    <ActiveIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight drop-shadow-md">
                      {sectionTitles[activeSub]}
                    </h3>
                    <span className="text-[9px] uppercase font-bold text-brand-gold tracking-widest drop-shadow-sm">Holistic Learning Pillar</span>
                  </div>
                </div>
              </div>

              {/* Ethos Description */}
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium bg-gray-50/50 p-6 rounded-2xl border border-gray-100/50">
                {holisticData[activeSub]}
              </p>

              {/* Highlighted Bullets List — Clean & Content-Focused */}
              <div className="space-y-4 pt-2">
                <h4 className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant} font-inter flex items-center gap-1.5`}>
                  <Sparkles className="w-3.5 h-3.5" /> Key Highlights &amp; Offerings
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {featuresToRender[activeSub].map((feat, idx) => {
                    let title = feat
                    let desc = ''
                    if (feat.includes('(')) {
                      const parts = feat.split('(')
                      title = parts[0].trim()
                      desc = parts.slice(1).join('(').replace(/\)$/, '').trim()
                    } else if (feat.includes('—')) {
                      const parts = feat.split('—')
                      title = parts[0].trim()
                      desc = parts.slice(1).join('—').trim()
                    }

                    return (
                      <div key={idx} className="bg-gray-50/70 p-5 rounded-2xl border border-gray-150 shadow-xs hover:border-brand-gold/40 hover:bg-white transition-all space-y-2 group">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-lg bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center shrink-0`}>
                            <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                          </div>
                          <h5 className={`text-xs font-extrabold text-${theme.primary} font-serif tracking-wide`}>
                            {title}
                          </h5>
                        </div>
                        {desc && (
                          <p className="text-[11px] text-brand-muted font-inter leading-relaxed pl-9">
                            {desc}
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Subsection Photos — Only Actual High-Res Media (No Placeholders) */}
              {activeSub !== 'studentLife' && photosToRender[activeSub]?.filter(p => !p.placeholder).length > 0 && (
                <div className="space-y-4 border-t border-gray-100 pt-6">
                  <h4 className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant} font-inter`}>
                    Media &amp; Photo Gallery
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {photosToRender[activeSub].filter(p => !p.placeholder).map((photo, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-gray-150 shadow-sm bg-white flex flex-col justify-between group">
                        <div className="aspect-[4/3] overflow-hidden bg-gray-50 border-b border-gray-100">
                          <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <p className="text-[9.5px] text-brand-muted font-inter p-2.5 leading-tight font-medium">{photo.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Render Custom Student Life & DLF Student Guild Showcase */}
              {activeSub === 'studentLife' && (
                <div className="space-y-8 pt-4">
                  {/* Mission Quote Banner */}
                  <div className="bg-gradient-to-r from-emerald-900 via-brand-greenDeep to-emerald-950 text-white rounded-3xl p-8 shadow-lg space-y-4 relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 opacity-10 text-white pointer-events-none">
                      <Sparkles className="w-64 h-64" />
                    </div>
                    <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
                      <span>Sanctimonious Mission for 22+ Years</span>
                    </div>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                      "Transforming the World One Child at a Time"
                    </h4>
                    <p className="text-xs sm:text-sm text-white/85 font-inter leading-relaxed font-medium">
                      We believe that education should not confine learners to a syllabus but expose them to life. To be the individuals who will take charge of the world tomorrow, our children have to have the necessary <strong>Life Skills</strong> and the right <strong>Attitude</strong>. We offer numerous opportunities so Delfites not only discover themselves but also create themselves.
                    </p>
                  </div>

                  {/* Leadership & Entrepreneurship Pillars */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Box 1: DLF Student Guild */}
                    <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-150 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold">
                        <Award className="w-5 h-5" />
                      </div>
                      <h5 className="font-serif text-base font-bold text-brand-charcoal">DLF Student Guild &amp; Peer Educators</h5>
                      <p className="text-xs text-brand-muted font-inter leading-relaxed">
                        Comprising Peer Educators and Student Leaders, the Guild puts leadership into practice, inculcating a deep sense of responsibility and ownership. Chosen through a month-long arduous screening and sifting process by the school committee and outgoing Guild, members run House and School assemblies, promote mental health, self-esteem, integrity, and peer synergy.
                      </p>
                    </div>

                    {/* Box 2: Job Creators vs Job Seekers */}
                    <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-150 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h5 className="font-serif text-base font-bold text-brand-charcoal">Class XI &amp; XII Entrepreneurial Cultivation</h5>
                      <p className="text-xs text-brand-muted font-inter leading-relaxed">
                        Opportunities to rub shoulders with real life are significantly greater for Class XI &amp; XII learners. Through high-level leadership roles and inculcating entrepreneurial skills, our young learners cultivate themselves to be <strong>job creators rather than job seekers</strong>.
                      </p>
                    </div>
                  </div>

                  {/* The 4 Planet Houses Showcase */}
                  <div className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 space-y-6 shadow-xs">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">House Governance System</span>
                      <h4 className="font-serif text-lg font-bold text-brand-charcoal">The 4 Planet Houses</h4>
                      <p className="text-xs text-brand-muted font-inter mt-1">
                        Each student is allocated to one of four planet houses. Houses earn points throughout the year for academic success, team participation, and pastoral leadership, culminating in the Annual House Trophy.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Mercury */}
                      <div className="bg-amber-50/50 rounded-2xl p-5 border border-amber-200/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-[#f6f646] px-3 py-1 rounded-full border border-amber-300">Mercury</span>
                          <span className="text-[10px] font-bold text-amber-700">Yellow House</span>
                        </div>
                        <p className="text-[11px] text-brand-charcoal font-inter leading-relaxed pt-1">
                          Fostering intellect, rapid problem solving, inter-house debating, and academic excellence.
                        </p>
                      </div>

                      {/* Venus */}
                      <div className="bg-sky-50/50 rounded-2xl p-5 border border-sky-200/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider text-sky-950 bg-[#00b0f0] text-white px-3 py-1 rounded-full">Venus</span>
                          <span className="text-[10px] font-bold text-sky-700">Blue House</span>
                        </div>
                        <p className="text-[11px] text-brand-charcoal font-inter leading-relaxed pt-1">
                          Championing creative expression, fine arts, cultural events, and stagecraft mastery.
                        </p>
                      </div>

                      {/* Mars */}
                      <div className="bg-rose-50/50 rounded-2xl p-5 border border-rose-200/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider bg-[#eb2525] text-white px-3 py-1 rounded-full">Mars</span>
                          <span className="text-[10px] font-bold text-rose-700">Red House</span>
                        </div>
                        <p className="text-[11px] text-brand-charcoal font-inter leading-relaxed pt-1">
                          Embodying courage, high-intensity athletic fixtures, track events, and Sports Day triumphs.
                        </p>
                      </div>

                      {/* Jupiter */}
                      <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-200/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider bg-[#92d050] text-emerald-950 px-3 py-1 rounded-full font-bold">Jupiter</span>
                          <span className="text-[10px] font-bold text-emerald-700">Green House</span>
                        </div>
                        <p className="text-[11px] text-brand-charcoal font-inter leading-relaxed pt-1">
                          Nurturing wisdom, environmental sustainability drives, community outreach, and team synergy.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Student Manifesto Download Banner */}
                  <div className="bg-gradient-to-r from-brand-gold/10 via-amber-500/10 to-brand-gold/10 border border-brand-gold/30 rounded-2xl p-6 text-center space-y-3">
                    <h5 className="font-serif text-base font-bold text-brand-charcoal">Student Guild Manifesto &amp; Guidelines (2026-27)</h5>
                    <p className="text-xs text-brand-muted font-inter max-w-xl mx-auto">
                      Learners aiming for Student Guild leadership roles can access the official manifesto guidelines and application criteria for session 2026-27.
                    </p>
                    <button 
                      onClick={() => alert("Downloading official Student Manifesto Form 2026-27")}
                      className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-md cursor-pointer hover:scale-105"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Click here to Download Student Manifesto Form 2026-27</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Render Student Achievements Cards inside Student Achievements tab */}
              {activeSub === 'studentAchievements' && (
                <div className="space-y-6 border-t border-gray-100 pt-6">
                  <div className="space-y-1">
                    <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Delfite Trailblazers</span>
                    <h4 className={`font-serif text-xl font-bold text-${theme.primary}`}>Hall of Fame & Multi-Dimensional Achievers</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(activeBranch === 'dlf-greater-noida' ? [
                      {
                        name: "DLWS Kalamanjusha Team",
                        achievement: "Overall Rolling Trophy Winners",
                        desc: "36 students won Gold, Silver & Bronze medals across 15 out of 17 events at KC International School.",
                        img: "/images/dlws/dlws-school-achievements-dlws-1.jpg"
                      },
                      {
                        name: "Drone X Big Team",
                        achievement: "WSC National Champions (2026)",
                        desc: "National Overall Winner title & ₹16,000 cash prize at World Skill Challenge Faridabad Nationals.",
                        img: "/images/dlws/dlws-hollistic-learning-educational-excursions-4.jpg"
                      },
                      {
                        name: "Amaris Patel (Class VII)",
                        achievement: "UP State Swimming Medalist",
                        desc: "Won 2 Gold Medals and 1 Silver Medal in 100m, 200m & 50m Butterfly events at UP State Swimming Championship.",
                        img: "/images/dlws/dlws-hollistic-learning-educational-excursions-8.jpg"
                      },
                      {
                        name: "Gayatri Ganjoo & Jayditya Sharma",
                        achievement: "District Skating Champions",
                        desc: "1st & 2nd positions at Krida Bharti District Skating Championship at YMCA Greater Noida.",
                        img: "/images/dlws/dlws-hollistic-learning-educational-excursions-9.jpg"
                      },
                      {
                        name: "Manak Inspire Innovators",
                        achievement: "National STEM Innovators",
                        desc: "1st Position & ₹10,000 grant for Smart Ambulance, Fake Plate Buster & Smart Dustbin innovations.",
                        img: "/images/dlws/dlws-hollistic-learning-educational-excursions-6.jpg"
                      }
                    ] : [
                      {
                        name: "Arsalan Alam",
                        achievement: "Research Scholar & Innovator",
                        desc: "Accepted at SPARC for a summer internship program amongst North American scholars. Received a $10,000 grant from VC firms.",
                        img: "/achievements/Aadya Singh.jpg"
                      },
                      {
                        name: "Shreeja Singh",
                        achievement: "Champion Swimmer (Class IX)",
                        desc: "Won 5 Gold Medals & broke 5 state records at UP State Championship, earning 'Best Swimmer' title.",
                        img: "/achievements/Shreeja Singh at UP State Championship.jpg"
                      },
                      {
                        name: "Ishika Singh",
                        achievement: "DPL Cricket All-Rounder",
                        desc: "Selected for Delhi Premier League (DPL) playing for South Delhi Superstarz.",
                        img: "/achievements/Ishika Singh cricket.jpg"
                      },
                      {
                        name: "Nandini Kansal",
                        achievement: "ITF Tennis Player",
                        desc: "Represented India at ITF tournaments in Nepal & Africa. Ranked #21 AITA UP.",
                        img: "/achievements/Nandini Kansal.jpg"
                      },
                      {
                        name: "Uday Kaul",
                        achievement: "ITF Tennis Representative",
                        desc: "Represented India at ITF Kazakhstan. Holds AITA Men's Ranking of 262.",
                        img: "/achievements/Uday Kaul.jpg"
                      }
                    ]).map((p, idx) => (
                      <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-3 items-center">
                        <img src={p.img} alt={p.name} className="w-14 h-14 rounded-xl object-cover shrink-0 border border-gray-150" />
                        <div className="space-y-0.5">
                          <span className={`text-[8px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-${theme.primary}/10 text-${theme.primary}`}>
                            {p.achievement}
                          </span>
                          <h5 className="font-serif text-sm font-bold text-brand-charcoal pt-0.5">{p.name}</h5>
                          <p className="text-[10px] text-brand-muted leading-tight line-clamp-2">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Quote Strip */}
            <div className={`bg-${theme.primary}/5 border-t border-gray-100 p-5 flex items-center gap-3`}>
              <Heart className={`w-4 h-4 text-${theme.accent} shrink-0`} />
              <p className="text-[10px] sm:text-xs font-inter font-bold text-brand-muted">
                At DLF Schools, physical stamina, scholastic inquiry, and artistic expression are sculpted equally to nurture well-rounded global citizens.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
