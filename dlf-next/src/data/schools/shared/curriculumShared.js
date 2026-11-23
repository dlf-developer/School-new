import { Cpu, Lightbulb, Target, Compass, Users, TrendingUp, ShieldCheck, Award, BookOpen, BookOpenCheck, Globe } from 'lucide-react'

export const cbseTabs = [
  { id: 'skill-overview', label: 'Skill Education' },
  { id: 'kaushal-bodh', label: 'Kaushal Bodh (VI-VIII)' },
  { id: 'kaushal-vikas', label: 'Kaushal Vikas (IX-X)' },
  { id: 'streams', label: 'Streams Offered (XI-XII)' },
]

export const homeCbsePointerData = {
  'skill-overview': {
    badge: '21st Century Capabilities',
    title: 'NEP 2020 Skill Integration',
    summary:
      'Aligned with NEP 2020 and CBSE initiatives, DLF embeds capability building and logical inquiry across all stages of schooling.',
    pointers: [
      {
        title: 'Computational Thinking & AI',
        desc: 'Class III onwards fostering algorithm design, digital fluency, and logical problem solving.',
        icon: Cpu,
      },
      {
        title: 'Experiential Maker Studios',
        desc: 'Dedicated tinkering and robotics spaces translating classroom theory into real-world prototypes.',
        icon: Lightbulb,
      },
      {
        title: 'Life & Vocational Readiness',
        desc: 'Age-appropriate hands-on modules nurturing critical thinking, adaptability, and leadership.',
        icon: Target,
      },
    ],
  },
  'kaushal-bodh': {
    badge: 'Grades VI–VIII',
    title: 'Kaushal Bodh (Middle Years)',
    summary:
      'Skill discovery curriculum allowing middle-schoolers to explore machine tools, ecological agriculture, and creative design systems.',
    pointers: [
      {
        title: 'Work with Machines & Materials',
        desc: 'AI assistants, 3D printing, animation, robotics, and applied maker craft.',
        icon: Cpu,
      },
      {
        title: 'Work with Agriculture & Food',
        desc: 'Organic food preservation, sustainable gardening, and food chemistry techniques.',
        icon: Compass,
      },
      {
        title: 'Work with Human Services',
        desc: 'Health and wellness portfolios, design thinking, and communication studios.',
        icon: Users,
      },
    ],
  },
  'kaushal-vikas': {
    badge: 'Grades IX–X',
    title: 'Kaushal Vikas (Secondary Years)',
    summary:
      'Application-based skill projects fostering conceptual depth, research inquiry, and vocational capability in national board classes.',
    pointers: [
      {
        title: 'Artificial Intelligence & Coding',
        desc: 'Machine learning fundamentals, algorithm modeling, and ethical technology.',
        icon: Cpu,
      },
      {
        title: 'Financial Literacy & Marketing',
        desc: 'Practical economics, financial planning, and entrepreneurial startup concepts.',
        icon: TrendingUp,
      },
      {
        title: 'Information Technology',
        desc: 'Advanced software tools, digital publishing, and collaborative workflows.',
        icon: ShieldCheck,
      },
    ],
  },
  streams: {
    badge: 'Grades XI–XII',
    title: 'Specialized Senior Secondary Streams',
    summary:
      'Flexible academic choices across Science, Commerce, and Humanities preparing students for premier universities and global careers.',
    pointers: [
      {
        title: 'Science Stream (Med & Non-Med)',
        desc: 'Physics, Chemistry, Math/Bio, Computer Science, and Artificial Intelligence with research labs.',
        icon: Award,
      },
      {
        title: 'Commerce Stream',
        desc: 'Accountancy, Business Studies, Economics, Applied Math, and Entrepreneurship.',
        icon: TrendingUp,
      },
      {
        title: 'Humanities Stream',
        desc: 'Political Science, Psychology, Sociology, History, Mass Media, and Fine Arts.',
        icon: BookOpen,
      },
    ],
  },
}

export const homeCambridgePointerData = {
  badge: 'Cambridge International (Classes I–VIII)',
  title: 'Global Curriculum & Inquiry Pathways',
  summary:
    'Globally recognized curriculum preparing learners to be confident, responsible, reflective, innovative, and engaged thinkers.',
  pointers: [
    {
      title: 'Cambridge Primary (Grades I–V)',
      desc: 'Foundational English, Mathematics, and Science rooted in active, joyful inquiry.',
      icon: BookOpenCheck,
    },
    {
      title: 'Cambridge Lower Secondary (VI–VIII)',
      desc: 'Rigorous conceptual frameworks preparing students for Cambridge Checkpoint assessments.',
      icon: Target,
    },
    {
      title: 'Global Perspectives & Attributes',
      desc: 'Cross-disciplinary research, analysis, and global citizenship skills.',
      icon: Globe,
    },
  ],
}
