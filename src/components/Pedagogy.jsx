import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  Sparkles, BookOpen, Puzzle, Palette, Award, Cpu, Gamepad2, 
  Eye, Users, Languages, Heart, Compass, CheckCircle, 
  Code, Lightbulb, Video, Wrench, FlaskConical, 
  FileText, Play, X, ZoomIn, GraduationCap, ArrowRight, Briefcase 
} from 'lucide-react'
import ImageWithLoader from './ImageWithLoader'

export default function Pedagogy() {
  const { stageId } = useParams()
  
  // Set default active tab to 'early-years'
  const [activeTab, setActiveTab] = useState('early-years')

  // Lightbox modal state
  const [lightboxMedia, setLightboxMedia] = useState(null)

  const stages = [
    {
      id: 'early-years',
      title: 'Early Years',
      label: 'Foundational Stage',
      details: 'Aligned with the vision of NEP 2020 and the principles of NCF-FS, our Foundation Stage pedagogy is child-centric, play-based, inclusive, and experiential. Learning at the foundational stage is designed around exploration, interaction, imagination, and joyful discovery, while ensuring every child’s physical and emotional safety. The learning environment is designed to nurture language development, cognitive growth, socio-emotional wellbeing, creativity, and foundational literacy and numeracy skills while ensuring every child feels emotionally secure, valued, and safe.',
      approaches: [
        {
          title: 'Play as the medium',
          desc: 'Learning is driven through free, guided, and structured play hunts, exploration corners, and experiential classroom games lays the foundation of joyful and active learning experiences.',
          caption: 'Specially curated exploration spaces that ignite curiosity, encourage inquiry, and inspire young minds to wonder and discover. (Discovery Den/ Thots lab)',
          img: '/pedagogy/pictures/Discovery Den.jpg'
        },
        {
          title: 'Storytelling Pedagogy',
          desc: 'Stories, rhymes, puppetry, picture talk, role play and conversations strengthen language, imagination, listening, and communication skills.',
          caption: 'Stories that inspire imagination, language, and expression.',
          img: '/pedagogy/pictures/Show and Tell.jpg'
        },
        {
          title: 'Toy-Based Pedagogy',
          desc: 'Children learn through hands-on exploration using puzzles, building blocks, pretend play kits.',
          caption: 'Hands-on toys that build thinking and problem-solving and enhances cognitive development.',
          img: '/pedagogy/pictures/Play Based.jpg'
        },
        {
          title: 'Art Integrated Learning',
          desc: 'Delfites explore concepts creatively through music, dance, painting, clay modelling, dramatic play, festival crafts, and collaborative art experiences that make learning joyful and meaningful.',
          caption: 'Creating, expressing, and learning through the arts.'
        },
        {
          title: 'Sports Integrated Learning',
          desc: 'Physical activities such as yoga, obstacle races, balancing games, movement drills, and outdoor play help develop coordination, teamwork, discipline, and healthy habits.',
          caption: 'Active bodies, confident minds, and collaborative learners.'
        },
        {
          title: 'Technology-Enabled Pedagogy',
          desc: 'Interactive smart boards, digital storytelling, phonics applications, and audio-visual tools make learning engaging and developmentally appropriate.',
          caption: 'Digital tools that enrich meaningful learning experiences.'
        },
        {
          title: 'Game-Based Pedagogy',
          desc: 'Game-based learning transforms foundational concepts into engaging and meaningful experiences where children learn by doing, exploring, and interacting.',
          caption: 'self-paced, gamified learning programme to cultivate love for numbers.'
        },
        {
          title: 'Sensory Exploration',
          desc: 'Children engage with sand play, water play, tactile materials, discovery trays, arts and crafts, and nature-based activities that stimulate curiosity and sensory development.',
          caption: 'Touch, feel, discover, and make sense of the world.'
        },
        {
          title: 'Community-Based Learning',
          desc: 'Children develop empathy, social awareness, and a sense of belonging through community-connected experiences such as celebration of national days and festivals, kindness drives, nature walks, classroom responsibilities, and simple community outreach initiatives that help them connect learning with the world around them.'
        },
        {
          title: 'Multilingual Approach',
          desc: 'Songs, stories, classroom interactions, greetings, and bilingual activities help bridge the gap between home and school while strengthening communication and cultural connection.'
        },
        {
          title: 'Inclusive Education',
          desc: 'Every child is valued through supportive, inclusive, multisensory learning experiences, differentiated instruction, sensory corners, and collaborative classroom practices where every child feels valued.'
        }
      ],
      assessment: {
        text: 'Assessment at the Foundation Stage is continuous, observational, and non-punitive. Teachers use anecdotal records, portfolios, classroom interactions, and developmental observations to understand and support each child’s unique learning journey with care and sensitivity.'
      },
      media: {
        images: [
          '/pedagogy/early-years/7C1A0386.jpg',
          '/pedagogy/early-years/7C1A0668.jpg',
          '/pedagogy/early-years/7C1A1699.jpg',
          '/pedagogy/early-years/7C1A1724.jpg',
          '/pedagogy/early-years/7C1A1751.jpg',
          '/pedagogy/early-years/7C1A1911.jpg'
        ],
        exemplars: [],
        videos: []
      },
      Icon: Sparkles
    },
    {
      id: 'primary-years',
      title: 'Primary Years',
      label: 'Primary Stage',
      details: 'The Primary Years mark the transition from foundational exploration to structured discovery. During these years, learners begin to engage more consciously with ideas, relationships, and experiences, gradually moving from guided exploration toward independent thinking and meaningful application of knowledge. The adopted pedagogies help children develop conceptual clarity, communication skills, collaboration, creativity, critical thinking, and problem-solving abilities in authentic and relatable contexts.',
      approaches: [
        {
          title: 'Art Integrated Learning',
          desc: 'Enables children to explore concepts through music, dance, theatre, storytelling, visual arts, and creative expression, making learning meaningful, joyful, and interdisciplinary.'
        },
        {
          title: 'Inquiry-Based Learning',
          desc: 'Dedicated spaces like the higher order thinking( THOTS) lab nurtures curiosity and a spirit of exploration. Learners are encouraged to ask questions, investigate ideas, make connections, and construct knowledge through observation, discussion, and discovery.'
        },
        {
          title: 'Sports Integrated Learning',
          desc: 'Promotes physical well-being while developing teamwork, discipline, resilience, leadership, and decision-making skills. Movement and play become powerful tools for learning and holistic development.'
        },
        {
          title: 'Competency-Based Learning',
          desc: 'Focuses on the development of essential skills and conceptual understanding rather than rote memorisation. Learners are encouraged to apply their knowledge meaningfully in different contexts and demonstrate mastery through authentic experiences.'
        },
        {
          title: 'Active and Experiential Learning',
          desc: 'Places children at the centre of the learning process. Through hands-on activities, field experiences, experiments, demonstrations, and collaborative tasks, learners engage actively with concepts and build deeper understanding through experience.'
        },
        {
          title: 'Skill-Based Learning',
          desc: 'Equips students with practical life skills, communication skills, problem-solving abilities, creativity, collaboration, and emerging future-ready competencies that prepare them for an evolving world.'
        },
        {
          title: 'Story-Based Pedagogy',
          desc: 'Harnesses the power of stories, narratives, role-play, and real-life experiences to make learning relatable, foster imagination, strengthen language development, and nurture empathy and ethical understanding.'
        },
        {
          title: 'Technology-Integrated Learning',
          desc: 'Uses digital tools, interactive platforms, multimedia resources, and blended learning experiences to enrich engagement, personalise learning pathways, and strengthen conceptual understanding.'
        },
        {
          title: 'Play-Based Pedagogy',
          desc: 'Continues to remain an important element of learning in the Primary Years. Through educational games, simulations, explorations, and playful experiences, children develop confidence, creativity, collaboration, and problem-solving skills while maintaining the joy of learning.'
        }
      ],
      assessment: {
        text: 'We believe every child is capable, curious, and creative. Our pedagogy helps them believe in themselves.'
      },
      media: {
        images: [
          '/pedagogy/primary-years/7C1A0167.jpg',
          '/pedagogy/primary-years/7C1A1179.jpg',
          '/pedagogy/primary-years/7C1A1244.jpg',
          '/pedagogy/primary-years/7C1A1337.jpg',
          '/pedagogy/primary-years/7C1A1398.jpg',
          '/pedagogy/primary-years/7C1A1819.jpg',
          '/pedagogy/primary-years/7C1A2094.jpg',
          '/pedagogy/primary-years/7C1A2166.jpg'
        ],
        exemplars: [],
        videos: [
          {
            src: '/pedagogy/primary-years/Junior DIML.mp4',
            title: 'Junior DIML'
          },
          {
            src: '/pedagogy/primary-years/Sneh Bhoj.mp4',
            title: 'Sneh Bhoj'
          }
        ]
      },
      Icon: Compass
    },
    {
      id: 'middle-years',
      title: 'Middle Years',
      label: 'Middle Stage',
      details: 'Aligned with the vision of NEP 2020 and the principles of NCF-SE 2023, our Middle Stage pedagogy is experiential, multidisciplinary, inquiry-driven, and competency-focused. At this stage, Delfites transition from concrete learning to more abstract concepts in sciences, mathematics, arts, and humanities through exploration, experimentation, and critical thinking. Delfites are also introduced to early hands-on skill development, and internship opportunities that connect classroom learning with real-world experiences and future readiness.',
      approaches: [
        {
          title: 'Experiential Learning',
          desc: 'Hands-on activities, field visits, internships, and practical experiences make learning meaningful, engaging, and application-based.',
          caption: 'Learning comes alive through field visits, internships, hands-on experiences, and real-world exploration.'
        },
        {
          title: 'Inquiry-Based Learning',
          desc: 'Students investigate, explore concepts through discussions, experiments, and experiences in the Science labs and Innovation Hub where they tinker, ideate, innovate, and develop independent thinking skills. Initiatives like the Dr. APJ Abdul Kalam Innovation Month further strengthen scientific temper, creativity, design thinking, and problem-solving skills among learners.',
          caption: 'Questioning, investigating, tinkering, and innovating through our Innovation Hub.'
        },
        {
          title: 'Technology-Integrated Learning',
          desc: 'Interactive digital tools, dedicated computer labs, and adaptive platforms strengthen conceptual understanding through engaging, data-driven experiences.',
          caption: 'Digital tools and adaptive platforms create personalised, engaging, and future-ready learning experiences.'
        },
        {
          title: 'Computational Thinking',
          desc: 'Coding, logical reasoning, sequencing, and pattern recognition activities, supported by a dedicated computer lab, help students develop problem-solving and digital-age thinking skills.',
          caption: 'Coding, logical reasoning, and problem-solving empower learners to think like innovators.'
        },
        {
          title: 'PBL (Project Based Learning)',
          desc: 'Interdisciplinary projects encourage students to connect classroom learning with real-life concerns and contemporary issues such as pollution, excessive use of plastic, and environmental challenges like the Ghazipur landfill surpassing the height of the Qutub Minar. These projects nurture collaboration, research, critical thinking, problem-solving, and presentation skills while encouraging students to become socially aware and responsible citizens.',
          caption: 'Real-world projects connect classroom learning with contemporary challenges and meaningful action.'
        },
        {
          title: 'Problem-Based Learning',
          desc: 'Delfites engage with authentic problems and real-world challenges that encourage analytical thinking, innovation, collaboration, and solution-oriented learning. Delfites participate in waste management solutions, water conservation drives, sustainable campus initiatives, and design-thinking challenges where they brainstorm, prototype, and propose practical solutions to everyday issues.',
          caption: 'Authentic challenges inspire analytical thinking, creativity, collaboration, and solution-driven learning.'
        },
        {
          title: 'Art Integrated Learning',
          desc: 'Music, theatre, visual arts, storytelling, and creative presentations are integrated into learning experiences to deepen understanding and imagination. Scholastic Month Presentations further provide students with opportunities to showcase creativity, collaboration, and communication skills.',
          caption: 'Creativity meets curriculum through music, theatre, visual arts, storytelling, and expression.'
        },
        {
          title: 'Game-Based Learning',
          desc: 'Interactive games, quizzes, simulations, and challenge-based activities make learning joyful, engaging, and conceptually strong.',
          caption: 'Mindspark for language personalize learning pathways'
        },
        {
          title: 'Flipped Classroom',
          desc: 'Students explore concepts through videos, digital resources, and pre-learning tasks, allowing classroom time to focus on discussions, collaboration, and deeper understanding.',
          caption: 'Learning begins before the classroom, creating more opportunities for discussion, collaboration, and deeper understanding.'
        },
        {
          title: 'Emphasis on skill education',
          desc: 'Through hands-on experiences, projects, workshops, design challenges, and community engagement, learners gain exposure to a wide spectrum of skills across the domains of Life, Machines & Materials and Human Services.',
          caption: 'Exploring Life, Machines & Materials and Human Services through hands-on learning and real-world skills.'
        },
        {
          title: 'Inclusive Education',
          desc: 'Differentiated instruction, collaborative learning, and supportive classroom practices ensure equitable learning opportunities for every child.'
        }
      ],
      assessment: {
        text: 'Assessment is continuous, multidimensional, and growth-oriented, focusing on conceptual understanding, skills, and application of learning.',
        list: [
          'Observation & Classroom Interaction',
          'Presentations & Viva Voce',
          'Student Portfolios',
          'Interdisciplinary Projects',
          'Peer Assessment',
          'Self-Assessment & Reflection',
          'Performances & Demonstrations',
          'Cumulative & Competency-Based Assessments',
          'Pen and Paper test'
        ]
      },
      media: {
        images: [
          '/pedagogy/middle-years/7C1A1314.jpg',
          '/pedagogy/middle-years/7C1A1730.jpg',
          '/pedagogy/middle-years/7C1A1782.jpg',
          '/pedagogy/middle-years/7C1A1808.jpg',
          '/pedagogy/middle-years/7C1A2013.jpg',
          '/pedagogy/middle-years/7C1A2131.jpg',
          '/pedagogy/middle-years/DSC00584.jpg'
        ],
        exemplars: [
          {
            src: '/pedagogy/middle-years/Middle level Pedagogy.png',
            title: 'Middle Level Pedagogy Framework'
          },
          {
            src: '/pedagogy/middle-years/Middle stage examplar 1.png',
            title: 'Middle Stage Exemplar'
          }
        ],
        videos: [
          {
            src: '/pedagogy/middle-years/Class X Results.mp4',
            title: 'Class X Results'
          },
          {
            src: '/pedagogy/middle-years/Martyr’s Day.mp4',
            title: 'Martyr’s Day'
          },
          {
            src: '/pedagogy/middle-years/Russian Delegation.mp4',
            title: 'Russian Delegation'
          }
        ]
      },
      Icon: Cpu
    },
    {
      id: 'senior-years',
      title: 'Senior Years',
      label: 'Secondary Stage',
      details: 'At the heart of our secondary stage pedagogy lies multidisciplinary study, and flexibility. It fosters critical thinking, inquiry, creativity, collaboration, and problem-solving through immersive and experiential learning practices. Instead of strict academic or vocational streams, students are given the freedom to choose multidisciplinary combinations of subjects. With a strong focus on future readiness, the curriculum integrates emerging domains such as Artificial Intelligence, Computational Thinking, Design Thinking, Entrepreneurship, Financial Literacy, Sustainability, and Digital Citizenship. Through research projects, internships, innovation challenges, field experiences, and skill-based learning opportunities, students develop the competencies required to thrive in an increasingly dynamic and technology-driven world.',
      approaches: [
        {
          title: 'Experiential Learning',
          desc: 'Delfites are Actively involved in the learning process using hands-on- activities, field trips , internships etc. They reflect on their experiences and draw connections to apply the learned knowledge.'
        },
        {
          title: 'Experimentation',
          desc: 'Hands-on experiments, ideate, prototype, and innovate while solving real-world challenges creatively and collaboratively encouraging scientific temper, and application-based understanding.'
        },
        {
          title: 'Inquiry-Based Learning',
          desc: 'Curiosity drives the classroom. Delfites investigate, question, explore, and construct knowledge through guided inquiry and independent thinking.'
        },
        {
          title: 'Case-Based Learning',
          desc: 'Delfites analyze real-world scenarios, contemporary issues, and situational challenges to strengthen Conceptual Understanding through unfamiliar context, decision-making, analytical thinking, and perspective-building.'
        },
        {
          title: 'PBL (Project-Based Learning)',
          desc: 'Delfites investigate contemporary issues, conduct research, and engage in reflective learning experiences that build independent thought and academic rigour'
        },
        {
          title: 'Problem Based Learning',
          desc: 'Delfites engage with authentic problems that promote collaboration, innovation, research, and solution-oriented learning.'
        },
        {
          title: 'Art Integrated Learning',
          desc: 'Learning comes alive through music, theatre, visual arts, and creative expression, making concepts engaging, interdisciplinary, and memorable.'
        },
        {
          title: 'Sports Integrated Learning',
          desc: 'Physical activity and sports are integrated into Curricular areas & learning experiences to build teamwork, discipline, resilience, leadership, and strategic thinking.'
        },
        {
          title: 'Story based Pedagogy',
          desc: 'Stories, narratives, and real-life experiences are used to create emotional connections with learning and nurture empathy, compassion, ethical thinking.'
        },
        {
          title: 'Competency-Based Education',
          desc: 'The focus shifts from content coverage to mastery of competencies, ensuring conceptual clarity, skill development, and meaningful application of knowledge.'
        },
        {
          title: 'Peer Education & Collaborative Learning',
          desc: 'Students learn with and from one another through discussions, peer teaching, collaborative tasks, and reflective exchanges that strengthen communication and empathy.'
        },
        {
          title: 'Vocational Education',
          desc: 'Through project-based tasks and skill-oriented activities Delfites acquire skills that are relevant, meaningful, and future-focused. It introduces students to diverse vocational domains, encouraging them to appreciate the dignity of labour while discovering their own interests, strengths, and aptitudes.'
        },
        {
          title: 'Technology- Driven Learning',
          desc: 'Digital tools, multimedia resources, and blended learning experiences support personalized and interactive learning journeys.'
        },
        {
          title: 'Inclusive Education',
          desc: 'We ensure equitable learning opportunities for every child through differentiated instruction, accommodations, and supportive learning environments.'
        }
      ],
      assessment: {
        text: 'Assessment is viewed as a continuous process that supports growth, reflection, and improvement rather than merely measuring performance. Assessment at the secondary stage focuses on conceptual understanding, critical thinking, creativity, collaboration, and authentic application of learning in real-life contexts.',
        list: [
          'Observation & Anecdotal Records',
          'Presentations & Viva Voce',
          'Research & Interdisciplinary Projects',
          'Student Portfolios',
          'Peer Assessment',
          'Self-Assessment & Reflection',
          'Practical Application Tasks',
          'Performances & Demonstrations',
          'Pen-and-Paper Assessments',
          'Competency-Based Evaluations'
        ]
      },
      media: {
        images: [
          '/pedagogy/senior-years/7C1A0335.jpg',
          '/pedagogy/senior-years/7C1A1361.jpg',
          '/pedagogy/senior-years/7C1A1481.jpg',
          '/pedagogy/senior-years/7C1A1493.jpg',
          '/pedagogy/senior-years/7C1A1791.jpg',
          '/pedagogy/senior-years/7C1A2005.jpg',
          '/pedagogy/senior-years/7C1A2025.jpg'
        ],
        exemplars: [
          {
            src: '/pedagogy/senior-years/Secondary stage.png',
            title: 'Secondary Stage Pedagogy Framework'
          }
        ],
        videos: [
          {
            src: '/pedagogy/senior-years/Senior DIML.mp4',
            title: 'Senior DIML'
          },
          {
            src: '/pedagogy/senior-years/Voices of Achievement.mp4',
            title: 'Voices of Achievement'
          }
        ]
      },
      Icon: GraduationCap
    }
  ]

  // Update active tab based on path parameter (if set)
  useEffect(() => {
    if (stageId) {
      const match = stages.find(s => s.id === stageId)
      if (match) {
        setActiveTab(match.id)
      }
    }
  }, [stageId])

  // Get content for the currently active tab
  const activeStage = stages.find(s => s.id === activeTab) || stages[0]
  const ActiveIcon = activeStage.Icon

  const getApproachIcon = (title) => {
    const t = title.toLowerCase()
    if (t.includes('story')) return BookOpen
    if (t.includes('play')) return Gamepad2
    if (t.includes('toy')) return Puzzle
    if (t.includes('art')) return Palette
    if (t.includes('sports') || t.includes('physical')) return Award
    if (t.includes('tech') || t.includes('digital') || t.includes('smart')) return Cpu
    if (t.includes('game')) return Gamepad2
    if (t.includes('sensory')) return Eye
    if (t.includes('community')) return Users
    if (t.includes('multilingual') || t.includes('bilingual')) return Languages
    if (t.includes('inclusive')) return Heart
    if (t.includes('inquiry') || t.includes('investigate')) return Compass
    if (t.includes('competency')) return CheckCircle
    if (t.includes('experiential') || t.includes('active')) return Sparkles
    if (t.includes('skill')) return Wrench
    if (t.includes('computational') || t.includes('coding')) return Code
    if (t.includes('project') || t.includes('pbl')) return Briefcase
    if (t.includes('problem')) return Lightbulb
    if (t.includes('flipped')) return Video
    if (t.includes('experiment')) return FlaskConical
    if (t.includes('case')) return FileText
    if (t.includes('peer') || t.includes('collaborative')) return Users
    if (t.includes('vocational')) return Wrench
    return CheckCircle
  }

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30 relative overflow-hidden">
      
      {/* Premium custom animations injector */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out forwards;
        }
      `}</style>

      {/* Background ambient glows */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] ambient-glow-2 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-1/4 w-[450px] h-[450px] ambient-glow-1 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-16 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-gold">Nurturing Learning Pathways</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-masterDeep">Our Pedagogy</h1>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-base text-brand-muted leading-relaxed font-sans max-w-xl mx-auto">
            Experiential, stage-wise education aligned with cognitive developmental milestones for progressive learning.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto no-scrollbar gap-3 pb-3 border-b border-brand-masterDeep/5 snap-x snap-mandatory max-w-4xl mx-auto">
          {stages.map(stage => {
            const Icon = stage.Icon
            const isActive = activeTab === stage.id
            return (
              <button
                key={stage.id}
                onClick={() => setActiveTab(stage.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border snap-center cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-brand-greenDeep text-white border-brand-greenDeep shadow-md scale-103'
                    : 'bg-white text-brand-charcoal hover:bg-brand-greenDeep/5 border-brand-masterDeep/5 hover:border-brand-greenDeep/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-gold' : 'text-brand-muted'}`} />
                {stage.title}
              </button>
            )
          })}
        </div>

        {/* Active Stage Details Panel */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-md border border-brand-masterDeep/5 max-w-6xl mx-auto transition-all duration-500 hover:shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
          
          <div className="space-y-12">
            
            {/* Overview / Introduction */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 bg-brand-greenDeep/5 text-brand-greenDeep px-3 py-1.5 rounded-full text-xs font-bold font-sans">
                  <ActiveIcon className="w-4 h-4 text-brand-gold" />
                  <span>Pathway Stage</span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-greenDeep leading-tight">
                  {activeStage.title} — <span className="text-brand-charcoal font-normal">{activeStage.label}</span>
                </h2>
                
                <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-sans">
                  {activeStage.details}
                </p>
              </div>

              {/* Admissions Open CTA */}
              <div className="lg:col-span-4 bg-brand-bg/40 p-6 rounded-2xl border border-brand-masterDeep/5 space-y-4">
                <GraduationCap className="w-8 h-8 text-brand-gold" />
                <h3 className="font-serif text-lg font-bold text-brand-masterDeep">Admissions Open</h3>
                <p className="text-xs text-brand-muted font-sans leading-relaxed">
                  Learn how our developmental pedagogy prepares children for an evolving world. Connect with our admissions desk today.
                </p>
                <div className="pt-2 flex items-center">
                  <Link 
                    to="/school/dlf-sahibabad/admissions" 
                    className="inline-flex items-center gap-1.5 text-brand-greenDeep hover:text-brand-greenVibrant font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Apply Online <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Hero Reel — First video shown as a featured portrait card */}
            {activeStage.media.videos && activeStage.media.videos.length > 0 && (
              <div className="flex flex-col lg:flex-row gap-8 items-center bg-brand-greenDeep rounded-3xl overflow-hidden border border-brand-masterDeep/10 shadow-lg p-6 sm:p-10">
                {/* Portrait video card */}
                <div
                  onClick={() => setLightboxMedia({ type: 'video', src: activeStage.media.videos[0].src, title: activeStage.media.videos[0].title })}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group/hero bg-black border-2 border-brand-gold/30 shadow-2xl shrink-0"
                  style={{ width: '200px', aspectRatio: '9/16' }}
                >
                  <video
                    src={activeStage.media.videos[0].src}
                    preload="metadata"
                    className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover/hero:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover/hero:bg-black/55">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-brand-greenDeep flex items-center justify-center shadow-xl transform transition-transform duration-300 group-hover/hero:scale-110">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                  {/* Reel badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-gold text-brand-charcoal text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow">
                      Reel
                    </span>
                  </div>
                </div>

                {/* Info beside video */}
                <div className="flex flex-col gap-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">{activeStage.label}</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                    {activeStage.media.videos[0].title}
                  </h3>
                  <p className="text-white/70 text-sm font-sans leading-relaxed max-w-sm">
                    Watch this featured reel capturing real learning moments from the {activeStage.title} at DLF Public School.
                  </p>
                  <button
                    onClick={() => setLightboxMedia({ type: 'video', src: activeStage.media.videos[0].src, title: activeStage.media.videos[0].title })}
                    className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full w-max transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Play className="w-4 h-4 fill-current" /> Watch
                  </button>
                </div>
              </div>
            )}

            {/* Pedagogical Approaches Grid */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-px bg-brand-gold w-8"></span>
                <h3 className="text-sm uppercase tracking-widest font-extrabold text-brand-gold">Pedagogical Approaches</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(() => {
                  // Pool of gallery images for approaches that have no dedicated img
                  const galleryImages = activeStage.media.images || []
                  let galleryIdx = 0
                  return activeStage.approaches.map((approach, index) => {
                    const IconComponent = getApproachIcon(approach.title)
                    // Use the approach's own img if present, otherwise cycle through gallery images
                    const displayImg = approach.img || (galleryImages.length > 0 ? galleryImages[galleryIdx++] : null)
                    const displayCaption = approach.caption
                    return (
                      <div 
                        key={index}
                        className="bg-brand-bg/25 border border-brand-masterDeep/5 p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-md hover:border-brand-greenDeep/10 flex flex-col justify-between group/card"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-brand-greenDeep/5 flex items-center justify-center text-brand-greenDeep group-hover/card:bg-brand-greenDeep group-hover/card:text-white transition-all duration-300 shrink-0">
                              <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover/card:scale-110" />
                            </div>
                            <h4 className="font-serif text-base font-bold text-brand-masterDeep">{approach.title}</h4>
                          </div>
                          <p className="text-xs text-brand-muted leading-relaxed font-sans">{approach.desc}</p>
                        </div>

                        {/* Image inside the card */}
                        {displayImg && (
                          <div 
                            onClick={() => setLightboxMedia({ type: 'image', src: displayImg, title: approach.title, caption: displayCaption })}
                            className="mt-4 rounded-xl overflow-hidden aspect-video border border-brand-masterDeep/5 cursor-pointer relative group/img bg-black"
                          >
                            <ImageWithLoader 
                              src={displayImg} 
                              alt={approach.title} 
                              imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105" 
                              loading="lazy" 
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <ZoomIn className="w-6 h-6 text-white drop-shadow-md" />
                            </div>
                          </div>
                        )}

                        {displayCaption && (
                          <p className="text-[10px] italic text-brand-gold mt-2.5 font-sans leading-normal">
                            {displayCaption}
                          </p>
                        )}
                      </div>
                    )
                  })
                })()}
              </div>
            </div>

            {/* More Reels — remaining videos in a horizontal scroll strip */}
            {activeStage.media.videos && activeStage.media.videos.length > 1 && (
              <div className="space-y-4 pt-6 border-t border-brand-masterDeep/5">
                <div className="flex items-center gap-2">
                  <span className="h-px bg-brand-gold w-8"></span>
                  <h3 className="text-sm uppercase tracking-widest font-extrabold text-brand-gold">More Reels</h3>
                </div>

                <div className="flex gap-4 overflow-x-auto pb-3 no-scrollbar">
                  {activeStage.media.videos.slice(1).map((video, index) => (
                    <div
                      key={index}
                      onClick={() => setLightboxMedia({ type: 'video', src: video.src, title: video.title })}
                      className="relative rounded-2xl overflow-hidden cursor-pointer group/vid bg-black border border-brand-masterDeep/10 shrink-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                      style={{ width: '140px', aspectRatio: '9/16' }}
                    >
                      <video
                        src={video.src}
                        preload="metadata"
                        className="w-full h-full object-cover pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-3 transition-all duration-300 group-hover/vid:bg-black/55">
                        <span className="text-[8px] font-bold text-brand-gold uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded-full w-max">Reel</span>
                        <div className="space-y-2">
                          <div className="w-9 h-9 rounded-full bg-white/90 text-brand-greenDeep flex items-center justify-center shadow-md mx-auto transform transition-transform duration-300 group-hover/vid:scale-110">
                            <Play className="w-4 h-4 fill-current translate-x-0.5" />
                          </div>
                          <p className="text-white text-[10px] font-bold font-serif text-center leading-tight line-clamp-2">{video.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}



            {/* How We Assess Learning Section — Highlighted */}
            {activeStage.assessment && (
              <div className="relative overflow-hidden rounded-3xl border-2 border-brand-gold/30 shadow-lg">
                {/* Rich gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-greenDeep via-brand-greenDeep/90 to-brand-masterDeep pointer-events-none" />
                {/* Decorative glow orbs */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-gold/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-greenVibrant/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 p-8 sm:p-12 space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center shrink-0 shadow-inner">
                      <Award className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold/80 block">Assessment Philosophy</span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">How We Assess Learning</h3>
                    </div>
                  </div>

                  {/* Body text */}
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed font-sans italic font-bold border-l-4 border-brand-gold/50 pl-5">
                    {activeStage.assessment.text}
                  </p>

                  {/* Assessment list if present */}
                  {activeStage.assessment.list && (
                    <div className="pt-2 border-t border-white/10">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-4">Assessment Methods</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {activeStage.assessment.list.map((item, index) => (
                          <li key={index} className="flex items-center gap-2.5 text-xs text-white/90 font-semibold bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                            <CheckCircle className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}


          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxMedia && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
          onClick={() => setLightboxMedia(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setLightboxMedia(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 cursor-pointer border-none outline-none"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox content wrapper */}
          <div 
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxMedia.type === 'image' ? (
              <img 
                src={lightboxMedia.src} 
                alt={lightboxMedia.title || "Lightbox Media"} 
                className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10 animate-scaleIn"
              />
            ) : (
              <video 
                src={lightboxMedia.src} 
                controls 
                autoPlay
                className="max-h-[75vh] max-w-full rounded-lg shadow-2xl border border-white/10 animate-scaleIn"
              />
            )}

            {/* Media Info overlay */}
            <div className="text-center mt-4 space-y-1 px-4 max-w-2xl">
              {lightboxMedia.title && (
                <h4 className="text-white text-base font-bold font-serif">{lightboxMedia.title}</h4>
              )}
              {lightboxMedia.caption && (
                <p className="text-brand-gold text-xs italic font-sans">{lightboxMedia.caption}</p>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
