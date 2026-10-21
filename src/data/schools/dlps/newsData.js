import { Award, Sparkles, Newspaper } from 'lucide-react'

export const newsStats = [
  { value: '#1 Ranked', label: 'School in Ghaziabad (Times Survey)', icon: Award },
  { value: 'Top 100', label: 'Co-Ed Day Schools in India', icon: Sparkles },
  { value: '5+ National', label: 'Innovation & Eco Awards', icon: Award },
  { value: '50+ Features', label: 'National & Regional Press Coverage', icon: Newspaper },
]

export const newsCategories = [
  { id: 'all', label: 'All Media Coverage' },
  { id: 'rankings', label: 'National Rankings' },
  { id: 'stem', label: 'STEM & Innovation' },
  { id: 'sustainability', label: 'Sustainability & Eco' },
  { id: 'sports', label: 'Sports & Cultural' },
]

export const newsArticles = [
  {
    id: 'news-1',
    title: 'Times School Rankings 2026: DLF Public School Ranked #1 in Ghaziabad for Academic Excellence',
    source: 'The Times of India',
    sourceBadge: 'Times School Survey',
    date: 'January 2026',
    category: 'rankings',
    image: '/C Fore Ranking.jpg',
    excerpt:
      'DLF Public School, Sahibabad has secured the top rank in Ghaziabad in the annual Times School Survey, evaluated across academic rigour, individual attention, co-curricular infrastructure, and futuristic pedagogy.',
    fullText: `In the comprehensive Times School Survey 2026, DLF Public School (DLPS), Sahibabad emerged as the undisputed Number 1 School in Ghaziabad. The institutional audit comprehensively assessed over 150 schools across Delhi-NCR based on rigorous benchmarks including CBSE academic outcomes, experiential learning practices, faculty qualifications, sports infrastructure, mental wellness systems, and global citizenship curricula.

Principal Seema Jerath remarked: "This recognition reflects our 30-year steadfast commitment to sculpting thinkers rather than rote memorizers. We dedicate this achievement to our passionate educators, resilient learners, and deeply supportive parent partners."`,
    tags: ['Times Ranking', '#1 In Ghaziabad', 'Academic Excellence'],
    externalLink: 'https://timesofindia.indiatimes.com',
  },
  {
    id: 'news-2',
    title: 'DLF Young Innovators Triumph at CSIR National Innovation Hackathon 2024–25',
    source: 'The Hindu Education',
    sourceBadge: 'National STEM Spotlight',
    date: 'November 2025',
    category: 'stem',
    image: '/achievements/CSIR 2024 -1.jpeg',
    excerpt:
      'Students of DLF Public School were conferred the prestigious CSIR Innovation Award for School Children for their automated sustainable tech project, presented by Union Ministers in New Delhi.',
    fullText: `The Council of Scientific and Industrial Research (CSIR), Ministry of Science and Technology, Government of India, presented its prestigious CSIR Innovation Award to students of DLF Public School. The students designed an automated water conservation and energy recapture mechanism tested under rigorous laboratory simulations.

The jury singled out DLF learners for their scientific temperament, design-thinking approach, and ability to formulate scalable answers to community environmental challenges. The school received a national citation, commemorative memento, and research grant.`,
    tags: ['CSIR National Award', 'Youth Innovation', 'STEM'],
    externalLink: 'https://www.csir.res.in',
  },
  {
    id: 'news-3',
    title: 'EducationWorld India School Rankings: DLF Schools Named in National Top 100 Progressive Schools',
    source: 'EducationWorld India',
    sourceBadge: 'National Education Survey',
    date: 'October 2025',
    category: 'rankings',
    image: '/images/home-hero.jpg',
    excerpt:
      'Recognized for pedagogical innovation, teacher development, and inclusive value systems, DLF Group of Schools earned high honors among India’s top progressive co-ed institutions.',
    fullText: `In the EducationWorld India School Rankings (EWISR) — the world’s most extensive survey of primary-secondary schools — DLF Public School maintained its standing within the coveted National Top 100 Co-Ed Day Schools of India.

Over 14 parameters of educational excellence were evaluated by a sample respondent database of over 12,000 educators, parents, and senior education leaders. DLF schools scored exceptionally high in "Competence of Faculty", "Value for Money", and "Life Skills & Leadership Education".`,
    tags: ['EducationWorld', 'Top 100 Schools', 'Pan-India Ranking'],
    externalLink: 'https://www.educationworld.in',
  },
  {
    id: 'news-4',
    title: 'Wipro Earthian Award for Sustainability: DLF Conferred Consecutive Zero-Waste Stewardship Honor',
    source: 'Hindustan Times',
    sourceBadge: 'Environmental Leadership',
    date: 'December 2025',
    category: 'sustainability',
    image: '/Wipro Earthian Award for Sustainability.jpeg',
    excerpt:
      'Honoring exceptional community-driven environmental stewardship, zero-waste campus management, and biodiversity preservation initiatives lead by DLF eco-warriors.',
    fullText: `DLF Public School has once again been crowned a national winner of the prestigious Wipro Earthian Sustainability Award. The school’s student-led Green Brigade implemented an exhaustive campus-wide waste segregation audit, solar thermal energy harvesting, rainwater recharge wells, and native biodiversity conservation zones.

The national citation lauded DLF for seamlessly infusing climate education and SDG goals into daily school habits.`,
    tags: ['Wipro Earthian', 'Green Campus', 'Sustainability Award'],
    externalLink: 'https://wiproearthian.com',
  },
  {
    id: 'news-7',
    title: 'Inter-School Cultural & Literary Conclave: DLWS Clinches Overall Champion Rolling Trophy',
    source: 'Dainik Jagran',
    sourceBadge: 'Inter-School Championship',
    date: 'September 2025',
    category: 'sports',
    image: '/dlws.jpeg',
    excerpt:
      'DLF World School students clinched the Overall Champion Rolling Trophy at Kalamanjusha, securing Gold, Silver, and Bronze across 15 out of 17 artistic and literary categories.',
    fullText: `At the inter-school cultural and academic festival Kalamanjusha hosted by KC International School, DLF World School bagged the prestigious Overall Rolling Trophy. Over 36 students won top honors across debating, Sanskrit shloka recitation, digital art design, robotics, and classical dance competitions, highlighting the rich multi-disciplinary learning fabric of DLF schools.`,
    tags: ['Kalamanjusha', 'Rolling Trophy', '36 Medals'],
    externalLink: 'https://jagran.com',
  },
  {
    id: 'news-8',
    title: 'CBSE North Zone & National Championships: DLF Athletes Bag Gold in Yogasana & Lawn Tennis',
    source: 'Sportstar',
    sourceBadge: 'Sports Excellence',
    date: 'August 2025',
    category: 'sports',
    image: '/achievements/gold-yogasana.jpg',
    excerpt:
      'DLF Public School athletes demonstrated supremacy at the CBSE North Zone and National Tournaments, clinching multiple gold medals and qualifying for Khelo India Games.',
    fullText: `Demonstrating sportsmanship of the highest calibre, DLF student-athletes dominated the CBSE North Zone-1 Championships in both Yogasana and Lawn Tennis. The school’s dedicated athletic infrastructure, professional turf fields, and national-level coaches have consistently nurtured state and national sports champions who maintain parallel academic distinction.`,
    tags: ['CBSE North Zone', 'Gold Medal', 'Yogasana & Tennis'],
    externalLink: 'https://sportstar.thehindu.com',
  },
]
