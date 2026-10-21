/**
 * DLPS Sahibabad & Group Counselling and Wellness Data
 */
import { Heart, Award, ShieldAlert, Compass } from 'lucide-react'

export const counsellingPillars = [
  {
    title: 'Social–Emotional Learning & Counselling',
    desc: 'Providing a safe, confidential space where students can express themselves and seek guidance. Helps students build emotional intelligence, resilience, and self-awareness.',
    details: [
      'Individual counseling',
      'Peer support groups',
      'Meditation & mindfulness practices',
      'Structured SEL programs',
    ],
    icon: Heart,
  },
  {
    title: 'Values & Character Education',
    desc: 'Character formation woven into the student experience. Programs focus on empathy, integrity, respect, responsibility, and ethical decision-making.',
    details: [
      'Awakening program (Classes I–V)',
      "Awakened Citizen's program (Classes VI–VIII) by RK Mission",
      'AACT (Class IX)',
      'Happy Fridge, Goodwill Piggy Bank & Birthday Hawan',
    ],
    icon: Award,
  },
  {
    title: 'Digital & Cyber Wellbeing',
    desc: 'Preparing students to navigate the digital world with awareness and responsibility. Focuses on cyber safety, healthy screen habits, online boundaries, digital identity, and responsible social media use.',
    details: ["Peer educators' sessions", 'Parent awareness initiatives'],
    icon: ShieldAlert,
  },
  {
    title: 'Peer Support & Student Leadership',
    desc: 'Empowering students as wellbeing ambassadors. Strengthening belonging, peer care, and student voice within the school community.',
    details: [
      'Peer educator programs',
      'Buddy systems',
      'Empathy manager leadership roles',
    ],
    icon: Compass,
  },
  {
    title: 'Inclusion & Diverse Learning Support',
    desc: 'Committed to an inclusive learning environment. Our support includes learning plans, classroom accommodations, collaborative teacher support, and sensitization initiatives.',
    details: [
      'Individualized learning plans',
      'Classroom accommodations & teacher support',
      'Sensorium & Cosmosium support for CWSN',
    ],
    icon: Heart,
  },
  {
    title: 'Health & Holistic Lifestyle',
    desc: 'Promoting healthy routines through programs on nutrition and healthy eating, fitness, sleep hygiene, emotional health, and preventive awareness.',
    details: [
      'Thursday special: Fitness, yoga, & sports exposure',
      'Regular health check-ups',
      'Holistic lifestyle education',
    ],
    icon: ShieldAlert,
  },
  {
    title: 'Safe & Supportive School Climate',
    desc: 'Maintaining safety and respect through strong anti-bullying frameworks, safety protocols, restorative practices, and positive behavior systems.',
    details: [
      'Anti-bullying peer education sessions',
      'POCSO awareness sessions',
      'Juvenile Justice (JJ) Act sessions',
    ],
    icon: ShieldAlert,
  },
  {
    title: 'Parent Partnership & Outreach',
    desc: 'Collaborative school–home programs that support families in navigating adolescence, mental health, and digital challenges.',
    details: [
      'Induction sessions',
      'Listening Circle sessions',
      'Mother-daughter program',
    ],
    icon: Compass,
  },
  {
    title: 'Career Guidance & Life Readiness',
    desc: 'Supporting students in discovering their strengths and future pathways through assessments, expert interactions, university guidance, and life skills education.',
    details: [
      'Margdarshak and Townhall sessions',
      'Career sessions & career fairs',
      'Alumni career sessions, institute visits, & internships',
    ],
    icon: Compass,
  },
]

export const childProtectionSections = [
  {
    title: '1. Scope & Legal Compliance',
    desc: 'This CPP is guided by ratified international conventions and conforms strictly to child protection laws in force in India. The school maintains a zero-tolerance approach to physical violence, mental harassment, cyber bullying, ragging, or abuse in school premises, school buses, or any extended learning environment.',
    details: [
      'Conformity with Protection of Children from Sexual Offences (POCSO) Act, 2012.',
      'Conformity with the Juvenile Justice (Care and Protection of Children) Act, 2015.',
      'Conformity with the Indian Penal Code (IPC) and the Information Technology Act, 2000.',
      'Applies to all school staff, teachers, visitors, parents, visiting faculty, and third-party vendors.',
    ],
  },
  {
    title: '2. Key Definitions & Covered Offenses',
    desc: 'The policy establishes clear legal definitions of behaviors that are strictly prohibited and subject to immediate disciplinary and penal action:',
    details: [
      "Child Abuse: Physical, emotional, online, or sexual abuse resulting in actual or potential harm to a child's dignity.",
      'Ragging / Bullying: Disorderly conduct causing teasing, psychological harm, embarrassment, or fear.',
      'Cyber Bullying & Stalking: Harassment, intimidation, or tracking using electronic devices, social media, or networks.',
      'Physical Violence: Any act causing bodily pain, injury, or impairing the development of the child.',
    ],
  },
  {
    title: '3. Complaint & Redressal Mechanism',
    desc: 'Any staff member, parent, or student can report safety incidents. The school ensures complete confidentiality and protection for the complainant.',
    details: [
      'Complaints can be handed in writing to any teacher, counselor, Principal, or Child Protection Officer.',
      'POCSO cases are immediately routed to the Student Safety Committee (SSC) and reported to local police/Special Juvenile Police Unit within 24 hours.',
      'Mandatory reporting of suspected child abuse (failure to report is a criminal offense).',
      'Direct line to national Child Helpline: 1098.',
    ],
  },
  {
    title: "4. Code of Conduct for Staff (Do's & Don'ts)",
    desc: 'All staff members are bound by strict behavioral guidelines to maintain professional boundaries:',
    details: [
      "DO: Respect child privacy; remain visible in classrooms/workplaces; report suspicious behavior immediately.",
      "DON'T: Spend excessive time alone with children in secluded areas; use language that is shaming, belittling, or discriminatory.",
      'DO: Treat all students with equal dignity regardless of race, gender, background, or ability.',
      "DON'T: Interact with students over personal social media platforms (only official channels allowed).",
    ],
  },
  {
    title: '5. Safety Guidelines for Online Learning',
    desc: 'Ensuring digital classrooms remain safe and professional spaces for both teachers and students:',
    details: [
      'Teachers must broadcast from professional environments, use full display names, and set secure meeting rooms.',
      'Students must use full names, appropriate profile pictures, and keep parents informed of all online sessions.',
      "Strict prohibition on sharing students' work, opinions, or images without explicit consent.",
      'No sharing of personal contact credentials or private messaging in school virtual spaces.',
    ],
  },
  {
    title: '6. Recruitment Safeguards & Annual Audits',
    desc: 'We screen and train all individuals who interact with our students to enforce institutional accountability:',
    details: [
      'Mandatory background checks, police verification, and character certificates for all new employees.',
      'Signed affidavits certifying that the candidate has no pending accusations under the POCSO or JJ Acts.',
      'Bi-annual collective meetings of teachers, parents, and students to spread awareness on child safety.',
      "Annual safety audit resulting in a 'Child Safety Checklist' report published by school management.",
    ],
  },
]
