/**
 * siteData.js — DLF Schools: Single Source of Truth
 *
 * This file is the ONLY place where dynamic website content is stored.
 * The admin panel reads and writes to this structure (via localStorage overrides
 * managed by the useSiteData hook). Components must NEVER hardcode content —
 * they must import via the useSiteData() hook.
 *
 * See ADMIN_SCHEMA.md for the full field documentation and AI contract.
 */

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1: SCHOOLS — per-school dynamic content
// ─────────────────────────────────────────────────────────────────────────────

export const schoolsData = {
  'dlf-sahibabad': {
    id: 'dlf-sahibabad',
    name: 'DLF Public School',
    shortLocation: 'Sahibabad',
    cbseInfo: 'CBSE Affiliation No. 2130384',
    phone: '+91-9871034444',
    active: true,
    coverImage: null, // optional hero cover; falls back to hero.image
    theme: {
      primary: 'brand-greenDeep',
      vibrant: 'brand-greenVibrant',
      accent: 'brand-gold',
      accentHex: '#C59B27',
      cardBg: '#1b3518'
    },
    hero: {
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1920',
      legacy: '28+ Years of Educational Legacy',
      titleLine1: 'Sculpting',
      italicWord1: 'Minds',
      titleLine2: 'Empowering',
      underlineWord: 'Souls',
      titleLine3: 'Creating',
      vibrantWord: 'Pioneers',
      subtitle: 'At DLF Public School, Sahibabad (Ghaziabad), we believe in cultivating a scientific temperament, social responsibility, and the courage to build an eco-friendly tomorrow.',
      stats: [
        { value: 'Ranked #1', label: 'In Ghaziabad' },
        { value: '100%', label: 'Board Success' }
      ]
    },
    campus: {
      description: 'Our Sahibabad campus features state-of-the-art laboratories, a lush green zero-waste environment, modern classrooms, and high-performance athletic arenas.',
      images: [
        'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000'
      ]
    },
    admissions: {
      guide: 'Admissions open for 2026-27. Follow our simple, transparent, and completely digital enrollment guide.',
      steps: [
        { id: 1, title: 'Online Enquiry Form', desc: 'Complete the digital admission enquiry form with basic student details.' },
        { id: 2, title: 'Interaction & Orientation', desc: 'Visit our premium campus with parents to interact with mentors and explore our learning methodologies.' },
        { id: 3, title: 'Document Verification', desc: 'Submit necessary academic transcripts, complete verification, and process fees digitally.' }
      ]
    },
    curriculum: {
      info: 'Our child-centric developmental curriculum combines robust academics with progressive experiential modules.',
      stages: [
        { title: 'Early Years', desc: 'Sensory integration, play-way modules, and language discovery through theatre and arts.' },
        { title: 'Primary Years', desc: 'Experiential learning, foundational logic, and mathematics taught through hands-on projects.' },
        { title: 'Middle Years', desc: 'Robotics, coding, scientific experiments, and community stewardship programs.' },
        { title: 'Senior Years', desc: 'Rigorous academic preparation, board curricula, and comprehensive university/career guidance.' }
      ]
    },
    holistic: {
      performingArts: 'Dedicated music, dance, and theatre wings to nurture creative expression.',
      sports: 'State-of-the-art sports arena featuring football, basketball, and athletics.'
    }
  },

  'dlf-greater-noida': {
    id: 'dlf-greater-noida',
    name: 'DLF World School',
    shortLocation: 'G. Noida',
    cbseInfo: 'CBSE Affiliation No. 2131920',
    phone: '+91-9871034444',
    active: true,
    coverImage: null,
    theme: {
      primary: 'brand-purpleDeep',
      vibrant: 'brand-purpleVibrant',
      accent: 'brand-gold',
      accentHex: '#C59B27',
      cardBg: '#2c204d'
    },
    hero: {
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1920',
      legacy: 'New Age Learning Environment',
      titleLine1: 'Nurturing',
      italicWord1: 'Thinkers',
      titleLine2: 'Empowering',
      underlineWord: 'Leaders',
      titleLine3: 'Creating',
      vibrantWord: 'Pioneers',
      subtitle: 'At DLF World School, Greater Noida, we provide a futuristic, child-centric learning space designed to foster design thinking and digital-age readiness.',
      stats: [
        { value: 'Ranked #1', label: 'In G. Noida' },
        { value: '100%', label: 'Board Success' }
      ]
    },
    campus: {
      description: 'Our Greater Noida campus boasts modern laboratories, digital smart classrooms, creative design studios, and outstanding athletic facilities.',
      images: [
        'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000'
      ]
    },
    admissions: {
      guide: "Admissions open for 2026-27. Secure your child's futuristic education pathway digitally.",
      steps: [
        { id: 1, title: 'Digital Registration', desc: 'Fill the online registration form to begin the enrollment process.' },
        { id: 2, title: 'Orientation Session', desc: 'Participate in an interactive campus visit and information session with our leadership team.' },
        { id: 3, title: 'Verification & Admissions', desc: 'Verify documentation, fulfill guidelines, and confirm enrollment.' }
      ]
    },
    curriculum: {
      info: 'A progressive curriculum that combines academic excellence with creative exploration and design thinking.',
      stages: [
        { title: 'Early Years', desc: 'Play-way methodology and sensory discovery.' },
        { title: 'Primary Years', desc: 'Project-based learning and language skills.' },
        { title: 'Middle Years', desc: 'Coding, STEM integration, and social science projects.' },
        { title: 'Senior Years', desc: 'Advanced preparation, board curricula, and university guidance.' }
      ]
    },
    holistic: {
      performingArts: 'Design, visual arts, music, and performance wings.',
      sports: 'Multipurpose sports complex supporting basketball, cricket, and lawn tennis.'
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2: GLOBAL DATA — shared across all school branches
// ─────────────────────────────────────────────────────────────────────────────

export const globalData = {

  // ── 2a. MEDIA LIBRARY ───────────────────────────────────────────────────────
  imageLibrary: [],

  // ── 2b. TICKER / MARQUEE ──────────────────────────────────────────────────
  ticker: {
    items: [
      { id: 'tick-1', icon: 'Award', text: 'Education World Top Schools Rank #1' },
      { id: 'tick-2', icon: 'Leaf',  text: 'CSE Certified Platinum Green Campus' },
      { id: 'tick-3', icon: 'Globe', text: 'British Council International Dimension Award' }
    ]
  },

  // ── 2b. STATS STRIP ───────────────────────────────────────────────────────
  stats: {
    counters: [
      { id: 'stat-1', target: 28,   suffix: '+',  label: 'Years of History',    color: 'brand-greenDeep' },
      { id: 'stat-2', target: 3200, suffix: '+',  label: 'Active Learners',     color: 'brand-purpleDeep' },
      { id: 'stat-3', target: 15,   suffix: ':1', label: 'Teacher Ratio',       color: 'brand-greenDeep' },
      { id: 'stat-4', target: 100,  suffix: '%',  label: 'First Class Results', color: 'brand-purpleDeep' }
    ]
  },

  // ── 2c. PILLARS (What Sets Us Apart) ──────────────────────────────────────
  pillars: {
    sectionLabel: 'Defining Innovations',
    sectionTitle: 'What Sets Us Apart?',
    sectionSubtitle: 'Our values are translated directly into action through institutional practices that shape empathetic leadership and ecological awareness.',
    cards: [
      {
        id: 'pillar-1',
        icon: 'Leaf',
        title: 'Zero Waste Campus',
        desc: 'Recognized with the elite Platinum rank by CSE, our campus implements structured zero-waste initiatives run completely by the Student Eco-Force.',
        iconTheme: 'accent'
      },
      {
        id: 'pillar-2',
        icon: 'Users',
        title: 'Social Duty (SSR)',
        desc: 'At DLF, social duty is integrated into school reports. Every student works directly in local Sahibabad community projects.',
        iconTheme: 'purple'
      },
      {
        id: 'pillar-3',
        icon: 'Globe',
        title: 'Global Classrooms',
        desc: 'We pioneered senior student corporate internship modules alongside deep exchange networks with educational institutes globally.',
        iconTheme: 'accent'
      }
    ]
  },

  // ── 2d. CURRICULUM (Global — shared tab labels & content) ─────────────────
  curriculum: {
    sectionLabel: 'Comprehensive Curriculum',
    sectionTitle: 'Academic Progression',
    sectionSubtitle: 'A thoughtfully segmented pedagogy designed specifically to align with children\'s developmental stages.',
    tabs: [
      {
        id: 'primary',
        label: 'Primary School (Grades I-V)',
        badge: 'Play-Way & Experiential Core',
        badgeColor: 'brand-greenDeep',
        title: 'Nurturing Wonder & Curiosity',
        desc: 'Our primary program builds a solid foundation of sensory, linguistic, and analytical capacities. We shift from rote-learning to active play-way interactions, introducing primary math concepts and language fluency through creative projects.',
        highlights: [
          'Project-Based Experiential Learning',
          'Integrated Phonics, Theatre, and Fine Arts',
          'Outdoor Nature-Study Labs'
        ],
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000',
        imageAlt: 'Primary School Class'
      },
      {
        id: 'middle',
        label: 'Middle School (Grades VI-VIII)',
        badge: 'Discovery & Scientific Temper',
        badgeColor: 'brand-purpleDeep',
        title: 'Building Strong Cognitive Pathways',
        desc: 'Middle school is a period of intellectual exploration. Students transition to structured laboratory experimentation, deeper literary analytical reading, civic values integration, and foundational coding skills.',
        highlights: [
          'Specialized STEAM Labs (Robotics & AI)',
          'Active Social Service Projects',
          'Life-Skill Mentorship Modules'
        ],
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1000',
        imageAlt: 'Middle School Science Lab'
      },
      {
        id: 'secondary',
        label: 'Secondary (Grades IX-X)',
        badge: 'Rigour, Competency & Focus',
        badgeColor: 'brand-gold',
        title: 'Excellence in Board Examinations',
        desc: 'Focused guidance aimed towards building critical thinking and conceptual absolute clarity. Secondary level program ensures that board exams preparations occur alongside critical research assignments.',
        highlights: [
          'Focused CBSE Prep & Assessment Series',
          'Career Counselling Workshops',
          'Speech & Public Debating Forums'
        ],
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
        imageAlt: 'Secondary Schooling Class'
      },
      {
        id: 'senior',
        label: 'Senior Secondary (Grades XI-XII)',
        badge: 'Specialization & Leadership',
        badgeColor: 'brand-greenVibrant',
        title: 'Launching Future Pioneers',
        desc: 'With specialized streams (Science, Commerce, Humanities), the Senior Secondary curriculum provides state-of-the-art laboratory work, corporate internship linkages, and competitive exam guidance.',
        highlights: [
          'Integrated Engineering & Medical Prep Classes',
          'Dynamic Alumni-led Mentorship Networks',
          'Student Council Governance Roles'
        ],
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
        imageAlt: 'Senior Secondary Graduation'
      }
    ]
  },

  // ── 2e. HOLISTIC / SPORTS & ARTS ──────────────────────────────────────────
  holistic: {
    sectionLabel: 'Expression & Athleticism',
    sectionTitle: 'Holistic Living & Sports',
    sectionSubtitle: 'Nurturing emotional, kinesthetic, and creative intelligence with world-class performing spaces and modern physical centers.',
    heroImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000',
    heroImageAlt: 'Sports Field Arena',
    heroTitle: 'Golden Gladiators Sports Arena',
    heroDesc: 'Equipped with professional-grade badminton courts, table tennis grids, outdoor skating, and customized fitness protocols.',
    centers: [
      {
        id: 'hol-1',
        icon: 'Music',
        iconTheme: 'purple',
        title: 'Performing Arts Academy',
        desc: 'Vocal and instrumental learning models alongside Indian classical and Western dance curricula.'
      },
      {
        id: 'hol-2',
        icon: 'Palette',
        iconTheme: 'gold',
        title: 'The Canvas Guild (Visual Arts)',
        desc: 'Sustaining fine arts, ceramics, clay modeling, and digital media illustration pathways.'
      },
      {
        id: 'hol-3',
        icon: 'Terminal',
        iconTheme: 'green',
        title: 'Cyber & Robotics Forge',
        desc: 'Integrated coding clusters, drone development workspaces, and high-spec computational modeling.'
      }
    ]
  },

  // ── 2f. ADMISSIONS (Global steps — can be overridden per school) ──────────
  admissions: {
    sectionLabel: 'Admissions 2026-27',
    sectionTitle: 'Begin Your Journey',
    sectionSubtitle: 'Our entry selection guidelines are simple, structured, transparent, and completely digital.',
    steps: [
      {
        id: 1,
        title: 'Online Enquiry Form',
        desc: 'Complete the digital admission enquiry query with basic credentials and preferences on our digital school board portal.',
        color: 'brand-greenDeep'
      },
      {
        id: 2,
        title: 'Interaction & Orientation',
        desc: 'Visit our premium campus with parents to interact with mentors and explore our learning methodologies.',
        color: 'brand-purpleDeep'
      },
      {
        id: 3,
        title: 'Document Verification',
        desc: 'Submit necessary previous transcripts, complete verification, and process secure fees digitally.',
        color: 'brand-gold'
      }
    ]
  },

  // ── 2g. TESTIMONIALS ──────────────────────────────────────────────────────
  testimonials: {
    sectionLabel: 'Parent & Student Voices',
    sectionTitle: 'What Our Community Says',
    cards: [
      {
        id: 'test-1',
        quote: 'Enrolling our daughter in DLF was the best academic decision we made. The focus on sustainability has transformed how she views her environment. Outstanding, empathetic team of teachers!',
        name: 'Anand Sharma',
        role: 'Parent of Class VI student',
        initials: 'AS',
        color: 'brand-gold'
      },
      {
        id: 'test-2',
        quote: 'The corporate internship modules at DLF gave me a real-world perspective on tech development before I entered engineering college. The school makes thinkers of us all.',
        name: 'Kavita Verma',
        role: 'Alumni, Batch of 2023',
        initials: 'KV',
        color: 'brand-purpleDeep'
      },
      {
        id: 'test-3',
        quote: 'Excellent board results prep, yes, but the focus on emotional counselling is what kept our son peaceful and mentally secure during his board examinations.',
        name: 'Dr. Rajat Mukherji',
        role: 'Parent of Class XII student',
        initials: 'RM',
        color: 'brand-greenDeep'
      }
    ]
  },

  // ── 2h. MANAGEMENT ────────────────────────────────────────────────────────
  management: {
    sectionLabel: 'Leadership & Vision',
    sectionTitle: 'Our Management',
    sectionSubtitle: 'Visionaries and educationists committed to redefining school education through progressive pedagogies, modern infrastructure, and strong academic standards.',
    leaders: [
      {
        id: 'mgmt-1',
        name: 'Dr. Rakesh Khullar',
        role: 'Chairman | Educationist | Environmentalist | Philanthropist',
        badge: 'Chairman',
        bio: 'Dr. Rakesh Khullar\'s journey is a compelling blend of professional excellence, social commitment, and a deep-rooted passion for nation-building through education. A graduate of Hans Raj College, Delhi, and a distinguished Chartered Accountant from the Institute of Chartered Accountants of India (ICAI), New Delhi, he brings with him a strong foundation of discipline, integrity, and strategic vision.',
        highlights: [
          'Conferred an honorary Doctor of Literature (Honoris Causa) by Medicina Alternativa, affiliated with The International Open University, Kuala Lumpur, Malaysia.',
          'An environmentalist at heart who has consistently championed large-scale tree plantation drives in Ghaziabad under the "Clean Green Ghaziabad" initiative.',
          'Founder of the Apney Charitable Foundation, dedicated to supporting and uplifting the underprivileged.',
          'Chairman of the DLPS Sports Academy, promoting sportsmanship, discipline, and physical well-being.',
          'Former member of the DAV College Managing Committee, contributing to shaping practices across DAV networks in India.'
        ],
        icon: 'Sprout',
        color: 'bg-emerald-500/5 border-emerald-500/10 text-emerald-700'
      },
      {
        id: 'mgmt-2',
        name: 'Dr. Mrignaini',
        role: 'Executive Director, DLF Public School | Founder Principal | Researcher',
        badge: 'Executive Director',
        bio: 'Dr. Mrignaini\'s journey is a testament to vision, perseverance, and an unwavering belief in the transformative power of education. As the Founder Principal of DLF Public School and now its dynamic Executive Director, she has been instrumental in shaping the institution into one of India\'s most respected schools.',
        highlights: [
          'Established DLPS as a benchmark of excellence, leading to its consistent ranking among the Top 2 Schools in Ghaziabad for decades.',
          'Ranked #5 in India for Leadership & Governance and #8 in India for Academic Rigour under her stewardship.',
          'Holds a Doctorate in Polymer Chemistry, with extensive academic research published in leading international journals.',
          'Associated with the World Council for Curriculum and Instruction (WCCI), a global body of educators founded in the USA in 1971.',
          'Champion of value-based learning and future-readiness, shaping a culture where academic excellence and character go hand-in-hand.'
        ],
        icon: 'Shield',
        color: 'bg-purple-500/5 border-purple-500/10 text-purple-700'
      },
      {
        id: 'mgmt-3',
        name: 'Ms. Seema Jerath',
        role: 'National Awardee | Principal | Educationist | Author | Master Trainer | Lead Facilitator',
        badge: 'Principal',
        bio: 'With nearly four decades of rich experience in education, Ms. Seema Jerath stands as a visionary leader, accomplished educator, and thought influencer. As the Principal of DLF Public School, she leads a dynamic team of over 160 educators, steering the institution towards excellence with a clear, future-ready vision.',
        highlights: [
          'Conferred the prestigious National Award to Teachers (2012) by the President of India.',
          'Author of over 30 books for teachers, students, and parents, contributing significantly to the academic ecosystem.',
          'Co-created CBSE flagship programs: Pedagogical Leadership Handbook, Pedagogical Leadership Training Program, and the Leading Transformation initiative.',
          'Mentored and developed over 290 Master Trainers across CBSE schools and JNVs, cascading training to 25,000+ schools.',
          'Served as Lead Facilitator for CBSE\'s flagship skill education training, and co-created the Digital Citizenship Program with CBSE and Meta.',
          'Recipient of the Lokmanilal Lifetime Achievement Award (2013), Global Teacher Accreditation Award (Cambridge & British Council), and Dr. Radha Krishnan Excellence Award.',
          'Pioneered "Compassionate Ghaziabad" under Student Social Responsibility (SSR) to foster service, empathy, and moral responsibility.'
        ],
        icon: 'Award',
        color: 'bg-amber-500/5 border-amber-500/10 text-amber-700'
      }
    ]
  },

  // ── 2i. THINKING SCHOOL ───────────────────────────────────────────────────
  thinkingSchool: {
    heroLabel: 'Ethos & Philosophy',
    heroTitle: 'A Thinking School',
    heroTitleItalic: 'With a Soul',
    heroQuote: '"Don\'t just teach children what to think. Teach them how to think."',
    heroQuoteAttr: 'The Heartbeat of DLF Public School',
    heroIntro: 'Welcome to a school where curiosity is louder than conformity, where classrooms become Thinkrooms, where walls make you think through Thinkline Questions, where innovation meets empathy, and where children are prepared not just for careers, but for life itself. We proudly call ourselves A Thinking School with a Soul because we believe education must shape both the mind and the conscience.',
    pillarsLabel: 'Our Core Values',
    pillarsTitle: 'How We Bring Our Ethos to Life',
    pillarsSubtitle: 'Our unique pillars of reflection, skill acquisition, care, and outstanding achievement define who we are.',
    pillars: [
      {
        id: 'ts-5',
        title: 'Caring School',
        desc: 'Equally, the "soul" of the school lies in its unwavering commitment to empathy, inclusion, and humane values. The ethos of the school revolves around the belief that being \'Good\' is more important than being just \'Smart\'. We celebrate individuality, nurture a culture of positive reinforcement through smiley badges, discipline through reflection, foster emotional well-being, and inspire students to become socially responsible citizens who measure success not only by achievement, but by the ability to give back more to society than they take from it.',
        icon: 'Heart',
        color: 'from-rose-500/10 to-pink-500/10',
        iconColor: 'text-rose-600',
        image: '/7C1A1179.jpg',
        imageAlt: 'Interactive Learning Tools'
      },
      {
        id: 'ts-2',
        title: 'Innovating School',
        desc: 'Innovation is a deliberate outcome of a carefully nurtured environment. Each year our Innovation Hub churns out multiple Innovators who receive grants of ₹10,000 each, under the Inspire Manak award, to work on their scientific innovations. Whether it is building AI-powered innovations, launching student enterprises, excelling in sports and arts, or leading social impact initiatives, every Delfite is encouraged to discover not just what they want to become, but who they want to be.',
        icon: 'Sparkles',
        color: 'from-amber-500/10 to-orange-500/10',
        iconColor: 'text-amber-600',
        image: '/7C1A1782.jpg',
        imageAlt: 'Collaborative Group Work'
      },
      {
        id: 'ts-4',
        title: 'Skill Building School',
        desc: 'We\'re a Skill-Building School where learning is not confined to textbooks—it is translated into capability, creativity, and confidence. From building prototypes and creating advertisements to developing entrepreneurial ventures and exploring emerging technologies, students learn to apply knowledge with purpose and impact. In the process, they develop future-ready skills such as critical thinking, design thinking, creativity, collaboration, communication, digital fluency, adaptability, leadership, and an entrepreneurial mindset.',
        icon: 'GraduationCap',
        color: 'from-purple-500/10 to-fuchsia-500/10',
        iconColor: 'text-purple-600',
        image: '/7C1A2131.jpg',
        imageAlt: 'Creative Expression & Artistry'
      },
      {
        id: 'ts-3',
        title: 'Winning School',
        desc: 'We are a winning school. Our students have emerged as District, State, and North India toppers in academics, earned global innovation grants, represented India at prestigious international platforms, won national hackathons, and built ventures that solve real-world problems. Yet, beyond every accolade lies a culture that teaches children to succeed without losing their sensitivity, individuality, or humanity. Similarly in sports our Delfites have represented India in Africa and Kazakhstan on international platforms.',
        icon: 'Award',
        color: 'from-emerald-500/10 to-teal-500/10',
        iconColor: 'text-emerald-600',
        image: '/7C1A0335.jpg',
        imageAlt: 'Classroom Thinkroom Sessions'
      },
      {
        id: 'ts-1',
        title: 'Thinking School with a Soul',
        desc: 'We nurture a culture of research and innovation—classrooms transform into Thinkrooms, failures become feedback, and learning extends far beyond textbooks. Every lesson begins with open-ended, non-routine Thinking questions that challenge children to go beyond the rhetoric. Everyday children get A Thinking Question A Day (AQAD) that makes them reflect, reason, and explore new possibilities.',
        icon: 'Brain',
        color: 'from-blue-500/10 to-indigo-500/10',
        iconColor: 'text-indigo-600',
        image: '/7C1A2005.jpg',
        imageAlt: 'Hands-on Science & Inquiry'
      }
    ],
    gallery: [
      { id: 'gal-3', src: '/7C1A2131.jpg', title: 'Classroom Thinkroom Sessions' },
      { id: 'gal-2', src: '/7C1A1782.jpg', title: 'Collaborative Group Work' },
     
      { id: 'gal-5', src: '/7C1A1179.jpg', title: 'Interactive Learning Tools' },
       { id: 'gal-1', src: '/7C1A2005.jpg', title: 'Hands-on Science & Inquiry' },
      { id: 'gal-4', src: '/7C1A0335.jpg', title: 'Creative Expression & Artistry' }
    ],
    closingTitle: 'Nurturing Authentic Intelligence',
    closingText: 'In a world racing towards artificial intelligence, we remain committed to nurturing authentic intelligence—minds that think sharply, hearts that feel deeply, and individuals who dare to make a difference.',
    closingQuote: '"Because at DLF Public School, we are not just building achievers. We are shaping thoughtful human beings with the courage to think differently and the soul to care deeply."'
  },

  // ── 2j. VISION & MISSION ──────────────────────────────────────────────────
  visionMission: {
    heroLabel: 'Our Foundation',
    heroTitle: 'Vision & Mission',
    heroSubtitle: '',
    vision: {
      title: 'Our Vision',
      quote: '"Our defining aim is: Preparing caring, courageous and concerned citizens – of the world, for the world!"',
      badge: ''
    },
    mission: {
      title: 'Our Mission',
      text: 'To embark each learner on a journey of Self Discovery and Self Learning thereby creating committed, socially responsible global citizens who are nurtured in a safe, child-centered empowering 21st century environment rooted in Indian culture.',
      badge: ''
    },
    galleryImage: '/7C1A1660.jpg',
    galleryCaption: '',
    publications: [
      {
        id: 'pub-1',
        title: 'Alumni Connect - 2nd Edition',
        subtitle: 'Cropped PDF Document',
        desc: 'Review articles from former students, educational panels, and highlights of outstanding community projects.',
        url: '/Alumni Connect 2nd Edition_cropped.pdf',
        icon: 'Users'
      }
    ]
  },

  // ── 2k. PARENT PARTNERS ───────────────────────────────────────────────────
  parentPartners: {
    heroLabel: 'Family at the Centre',
    heroTitle: 'Parents as Partners',
    heroSubtitle: 'At DLF Public School, parents are not passive observers—they are active co-architects of the educational journey. Every event, program, and policy is designed to deepen the school-home partnership.',
    playlist: [
      {
        id: 'vid-1',
        title: 'Cambridge Day Celebration',
        filename: '/Cambridge Day.mp4',
        desc: 'Highlighting collaborative global benchmarks, academic excellence, and international integrations.'
      },
      {
        id: 'vid-2',
        title: 'Father in My Life (FIM)',
        filename: '/FIM.mp4',
        desc: 'Celebrating paternal bonds and active fatherly involvement in school development programs.'
      },
      {
        id: 'vid-3',
        title: 'Fireless Cooking Session',
        filename: '/Fireless Cooking.mp4',
        desc: 'Creative culinary engagement focusing on collaboration, health, and clean food habits.'
      },
      {
        id: 'vid-4',
        title: 'Margdarshak Career Counselling',
        filename: '/Margdarshak.mp4',
        desc: 'Interactive planning, steering, and guidance panel involving parents, students, and counsellors.'
      },
      {
        id: 'vid-5',
        title: "Mother's Day Celebrations",
        filename: "/Mother's Day.mp4",
        desc: 'Honoring mothers as the first educators and unwavering support systems of our students.'
      }
    ],
    initiatives: [
      {
        id: 'init-1',
        title: 'Meet & Greet & Induction Sessions',
        icon: 'Calendar',
        desc: 'Welcoming families into the DLF ecosystem through structured Orientations and Induction sessions. It builds a shared understanding of our pedagogy, vision, and values right from the first step.',
        img: '/7C1A1486.jpg',
        caption: 'Induction Programme & Orientation Sessions — building a strong school-home partnership from the very beginning.'
      },
      {
        id: 'init-2',
        title: 'Parents in Action & Life Skills',
        icon: 'Heart',
        desc: 'Extending education beyond core classrooms. Unique bonding events like Fine Dining with Parents and clay modeling sessions build life skills, etiquette, and warm relationships in informal interactive spaces.',
        img: '/7C1A1951-Enhanced-NR.jpg',
        caption: 'Fine Dining and Culinary Sessions — cultivating real-world life-skill learning alongside parents.'
      },
      {
        id: 'init-3',
        title: 'Student-Led Conferences (SLC)',
        icon: 'Users',
        desc: 'Nurturing self-governance, responsibility, and confidence. Our learners present their own portfolios, outline academic and personal targets, and coordinate directly with parents and mentors on their development.',
        img: '/7C1A1797.jpg',
        caption: 'Student-Led Conferences — empowering students to evaluate and present their learning pathways.'
      },
      {
        id: 'init-4',
        title: 'Margdarshak, Shubhakansha & Recognition',
        icon: 'Compass',
        desc: 'Guiding future steps. Through Margdarshak career seminars, annual milestones, and Shubhakansha graduation coordinates, we ensure parents and students transition confidently into new horizons.',
        img: '/7C1A1764.jpg',
        caption: 'Milestones & Career Orientation — charting prospective futures in close coordination with parents.'
      }
    ]
  },

  // ── 2l. AWARDS ────────────────────────────────────────────────────────────
  awards: {
    heroLabel: 'Legacy of Excellence',
    heroTitle: 'School Awards & Recognition',
    heroSubtitle: 'Two decades of consistent recognition from global and national bodies — a testament to our unwavering commitment to excellence.',
    categories: ['All', 'Ranking', 'Sustainability', 'International', 'Academic', 'Innovation', 'Sports'],
    hallOfFame: [
      {
        id: 'hof-1',
        title: 'International Dimension in Schools (2025-2028)',
        by: 'British Council',
        img: '/RIDS.JPG',
        year: '2025-26',
        desc: 'Awarded for outstanding integration of international learning experiences and global citizenship in the curriculum.'
      },
      {
        id: 'hof-2',
        title: 'Wipro Earthian Award for Sustainability',
        by: 'Wipro',
        img: '/Wipro Earthian Award for Sustainability.jpeg',
        year: '2025-26',
        desc: 'National recognition for institutional leadership and student initiatives in ecological conservation.'
      },
      {
        id: 'hof-3',
        title: 'Go Sharpener Sustainability Superstar',
        by: 'Go Sharpener',
        img: '/Sustainability Superstar Award.jpg',
        year: '2025-26',
        desc: 'Recognized for consecutive years of outstanding contributions to environment conservation and climate action.'
      },
      {
        id: 'hof-4',
        title: 'First Plastic Neutral School in Delhi-NCR',
        by: 'WMARS',
        img: '/WMARS.jpeg',
        year: '2024-25',
        desc: 'Pioneering environmental milestone awarded by the Waste Management and Recycling Society.'
      },
      {
        id: 'hof-5',
        title: 'Top 2 Day Co-Ed School in Ghaziabad',
        by: 'Education World',
        img: '/Consistently number 2.jpeg',
        year: '2025-26',
        desc: 'Consistently ranked among the city\'s absolute best day co-ed schools for decades.'
      },
      {
        id: 'hof-6',
        title: 'Top Rankings for Leadership & Academic Rigour',
        by: 'CFORE',
        img: '/C Fore Ranking.jpg',
        year: '2025-26',
        desc: 'Ranked #5 in India for Leadership & Governance and #8 in India for Academic Rigour.'
      },
      {
        id: 'hof-7',
        title: 'Skill Builder Silver Award Certificate',
        by: 'Go Sharpener',
        img: '/the Silver Award.jpeg',
        year: '2024-25',
        desc: 'Conferred for outstanding success and leadership in student-led skill acquisition programs.'
      },
      {
        id: 'hof-8',
        title: 'Skill Builder Institutional Merit Certificate',
        by: 'Go Sharpener',
        img: '/Skillbuilder Certificate.jpeg',
        year: '2024-25',
        desc: 'Recognizing excellence in collaborative design thinking, innovation, and sustainability.'
      }
    ],
    timeline: [
      { id: 'aw-1',  year: '2025-26', award: 'Recognition of International Dimension in Schools (2025-2028)', by: 'British Council', cat: 'International' },
      { id: 'aw-2',  year: '2025-26', award: 'Wipro Earthian Award for Sustainability', by: 'Wipro', cat: 'Sustainability' },
      { id: 'aw-3',  year: '2025-26', award: 'Ranked in Top 2 Schools in Ghaziabad – Education World India School Survey 2025–26', by: 'Education World', cat: 'Ranking' },
      { id: 'aw-4',  year: '2025-26', award: 'Amongst the Top 2 schools of Ghaziabad (for decades), #5 in India for Leadership & Governance, #8 in Academic Rigour, Top 42 Best Day Co-Ed Schools in India', by: 'CFORE', cat: 'Ranking' },
      { id: 'aw-5',  year: '2025-26', award: 'Go Sharpener Sustainability Superstar (For two Consecutive Years)', by: 'Go Sharpener', cat: 'Sustainability' },
      { id: 'aw-6',  year: '2024-25', award: 'First Plastic Neutral School in Delhi-NCR', by: 'WMARS (Waste Management and Recycling Society)', cat: 'Sustainability' },
      { id: 'aw-7',  year: '2024-25', award: 'Go Sharpener Sustainability Superstar', by: 'Go Sharpener', cat: 'Sustainability' },
      { id: 'aw-8',  year: '2023-24', award: 'ET Tech X School Excellence Award', by: 'Brainfeed', cat: 'Academic' },
      { id: 'aw-9',  year: '2023-24', award: 'Ranked in Top 2 Schools in Ghaziabad – Education World India School Survey 2023–24', by: 'Education World', cat: 'Ranking' },
      { id: 'aw-10', year: '2022-23', award: 'School Excellence Recognition', by: 'National Forums', cat: 'Academic' },
      { id: 'aw-11', year: '2020-21', award: 'Brainfeed School Excellence Award 2020 in 4 Prominent Categories', by: 'Brainfeed', cat: 'Academic' },
      { id: 'aw-12', year: '2019-20', award: 'Ranked Among the Top 2 Schools of the City in Education World India School Rankings', by: 'Education World', cat: 'Ranking' },
      { id: 'aw-13', year: '2018-19', award: 'British Council International School Award (consecutively for the third term)', by: 'British Council', cat: 'International' },
      { id: 'aw-14', year: '2018-19', award: 'Top 3 School of the City', by: 'Education World School Rankings by C Fore survey', cat: 'Ranking' },
      { id: 'aw-15', year: '2018-19', award: 'Roll of Honour Award for outstanding class X and XII board result', by: 'National Telecom Academy', cat: 'Academic' },
      { id: 'aw-16', year: '2017-18', award: '1st Rank Across India in \'Leadership & Management Quality\'', by: 'Education World School Rankings by C-Fore', cat: 'Ranking' },
      { id: 'aw-17', year: '2017-18', award: 'Best Infrastructure & Best ICT Implementation in India', by: 'Brainfeed School Excellence Awards', cat: 'Academic' },
      { id: 'aw-18', year: '2017-18', award: 'Top 3 Schools of India', by: 'Digital Learning, Asia\'s Premier education magazine', cat: 'Ranking' },
      { id: 'aw-19', year: '2017-18', award: 'The School Leadership Award for Principal Seema Jerath', by: 'Awarded by Mr. N. Narayan Murthy, founder of Infosys', cat: 'Academic' },
      { id: 'aw-20', year: '2017-18', award: 'Microsoft Entrepreneurship & Innovation Challenge across India - for self-sufficient hospital bed design', by: 'Microsoft', cat: 'Innovation' },
      { id: 'aw-21', year: '2017-18', award: '3rd Prize at the INSPIRE Awards for Automated Pendulum Pump', by: 'INSPIRE Awards', cat: 'Innovation' },
      { id: 'aw-22', year: '2016-17', award: 'Best Website / Design, Best academic pedagogy & Alumni Relations', by: 'Parakh Awards', cat: 'Academic' },
      { id: 'aw-23', year: '2016-17', award: 'Jury Special Mention Award – Disney friends for change, conserving green spaces for revamping Ekta Park', by: 'Disney / WMARS', cat: 'Sustainability' },
      { id: 'aw-24', year: '2015-16', award: 'British Council International School Award', by: 'British Council', cat: 'International' },
      { id: 'aw-25', year: '2015-16', award: 'Ranked No. 1 across India for \'Individual Attention to students\'', by: 'Merit awards by EducationToday.co.in', cat: 'Ranking' },
      { id: 'aw-26', year: '2015-16', award: 'Asia\'s Top 100 Best & Fastest Growing Educational Institutes', by: 'WCRC by IBRANDA 360', cat: 'Ranking' },
      { id: 'aw-27', year: '2015-16', award: 'Awarded \'Atal Tinkering Laboratories\' for Research', by: 'Niti Aayog, Govt. of India', cat: 'Innovation' },
      { id: 'aw-28', year: '2014-15', award: 'Ranked No.1 across Ghaziabad City', by: 'Times of India School Survey', cat: 'Ranking' },
      { id: 'aw-29', year: '2014-15', award: 'Awarded the Delhi Gaurav Samman for Education', by: 'Delhi State Committee', cat: 'Academic' },
      { id: 'aw-30', year: '2013-14', award: 'Top 10 Most Respected Schools in India', by: 'Education World C Fore Survey', cat: 'Ranking' },
      { id: 'aw-31', year: '2013-14', award: 'Top 3 schools of Ghaziabad', by: 'Hindustan Times C Fore Survey', cat: 'Ranking' },
      { id: 'aw-32', year: '2013-14', award: 'Business Development prize of $2000', by: 'UK based Teach a Man to Fish Enterprise', cat: 'Academic' },
      { id: 'aw-33', year: '2013-14', award: 'International School Award (2nd time in a row)', by: 'University of Cambridge', cat: 'International' },
      { id: 'aw-34', year: '2012-13', award: 'Top Global Award of $5000', by: 'School Enterprise challenge, UK', cat: 'Academic' },
      { id: 'aw-35', year: '2012-13', award: 'CSIR Innovation Award of Rs 50000 – Students topped at all India Level', by: 'CSIR, Govt. of India', cat: 'Innovation' },
      { id: 'aw-36', year: '2012-13', award: 'Tony Blair Face to Faith Outstanding School Award', by: 'Tony Blair Faith Foundation, UK', cat: 'International' },
      { id: 'aw-37', year: '2012-13', award: 'International School Award', by: 'University of Cambridge, UK', cat: 'International' },
      { id: 'aw-38', year: '2012-13', award: 'National Award to Teachers by the Hon\'ble President of India Mr. Pranab Mukherjee', by: 'President of India', cat: 'Academic' },
      { id: 'aw-39', year: '2012-13', award: 'Lokman Lal Excellence Award for Lifetime Achievement in Education', by: 'Lokmanilal Foundation', cat: 'Academic' },
      { id: 'aw-40', year: '2012-13', award: 'Dr. Radha Krishnan Excellence Award', by: 'Pratibha Jagran Samiti', cat: 'Academic' },
      { id: 'aw-41', year: '2012-13', award: 'Global Teacher Accreditation Award', by: 'Cambridge', cat: 'Academic' },
      { id: 'aw-42', year: '2011-12', award: 'British Council International School Award', by: 'British Council', cat: 'International' },
      { id: 'aw-43', year: '2011-12', award: 'Top 10 Most Respected Schools in India', by: 'Education World C Fore Survey', cat: 'Ranking' },
      { id: 'aw-44', year: '2010-11', award: 'Hindustan Pratibha Samman for Best CBSE Board Class X and XII Result in Delhi-NCR', by: 'Hindustan Media', cat: 'Academic' },
      { id: 'aw-45', year: '2010-11', award: 'Top 3 Schools in Ghaziabad Region', by: 'C Fore School Survey', cat: 'Ranking' },
      { id: 'aw-46', year: '2010-11', award: 'Hindustan Times C-Fore School Survey Award', by: 'Hindustan Times', cat: 'Ranking' },
      { id: 'aw-47', year: '2005-09', award: 'Best School in Ghaziabad – Rashtriya Shiksha Shiromani Award', by: 'All India Achievers Conference', cat: 'Academic' },
      { id: 'aw-48', year: '2005-09', award: 'Top 3 School in the Ghaziabad Region', by: 'Hindustan Times C-Fore School Survey Award', cat: 'Ranking' },
      { id: 'aw-49', year: '2005-09', award: 'South East Asia Yoga Cup for Consecutive Three Years (2007-09)', by: 'SE Asia Yoga Council', cat: 'Sports' },
      { id: 'aw-50', year: '2005-09', award: 'Yoga World cup for India for Consecutive Five Years from 2005-09', by: 'World Yoga Federation', cat: 'Sports' }
    ]
  },

  // ── 2m. NEWS / PRESS ROOM ──────────────────────────────────────────────────
  news: {
    sectionLabel: 'Press Room',
    sectionTitle: 'DLF in the News',
    sectionSubtitle: 'Media coverage, national rankings, and institutional recognitions.',
    articles: [
      {
        id: 'news-1',
        source: 'Times of India Rankings',
        title: 'Ranked #1 School in Ghaziabad for 2026',
        desc: 'DLF Public School, Sahibabad has been ranked as the #1 School in Ghaziabad by Times School Rankings, honoring educational excellence.'
      },
      {
        id: 'news-2',
        source: 'EducationWorld India',
        title: 'Co-Ed Day School National Top 100',
        desc: "DLF schools are recognized among India's top progressive co-educational day schools for excellence in pedagogy and leadership."
      }
    ]
  },

  // ── 2n. PHILOSOPHY (commonData — legacy) ──────────────────────────────────
  philosophy: {
    title: 'Our Philosophy',
    subtitle: 'A Thinking School with a Soul',
    vision: 'To cultivate a scientific temperament, social responsibility, and the courage to build an eco-friendly tomorrow.',
    sections: [
      {
        id: 'soul',
        title: 'A Thinking School with a Soul',
        desc: 'We focus on sculpting minds that are intellectually sharp, yet emotionally grounded, socially responsible, and deeply aware of their environment.'
      },
      {
        id: 'vision-mission',
        title: 'Vision & Mission',
        desc: 'To provide child-centric experiential learning that fosters critical thinking, problem-solving, self-governance, and ecological stewardship.'
      },
      {
        id: 'management',
        title: 'Our Management',
        desc: 'Led by visionaries and educationists committed to redefining school education through progressive pedagogies, modern infrastructure, and strong academic standards.'
      },
      {
        id: 'recognition',
        title: 'Institutional Recognition',
        desc: 'Consistently recognized as a benchmark for educational innovation, community building, and ecological consciousness in the NCR region.'
      }
    ]
  },

  // ── 2n. PEDAGOGY ──────────────────────────────────────────────────────────
  pedagogy: {
    title: 'Our Pedagogy',
    subtitle: 'Experiential & Developmental learning at every step',
    stages: [
      { id: 'early',   title: 'Early Years',   desc: 'Sensory integration, play-way modules, and language discovery through storytelling, theatre, and interactive arts.' },
      { id: 'primary', title: 'Primary Years', desc: 'Foundation of critical analysis, logic, and mathematics taught through hands-on project work and outdoor nature studies.' },
      { id: 'middle',  title: 'Middle Years',  desc: 'Intellectual exploration, robotics, coding, scientific experiments, and community service projects.' },
      { id: 'senior',  title: 'Senior Years',  desc: 'Advanced scholastic courses, deep stream selection, and dynamic preparation for competitive college admissions.' }
    ]
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// LEGACY EXPORT — kept for backward compatibility with existing imports
// New code should use globalData instead
// ─────────────────────────────────────────────────────────────────────────────
export const commonData = {
  philosophy: globalData.philosophy,
  pedagogy: globalData.pedagogy
}
