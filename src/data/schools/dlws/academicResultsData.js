/**
 * DLWS Greater Noida Academic Board Examination Results Dataset
 * Session: 2026 Official Declaration
 */

export const dlwsBoardResults2026 = [
  {
    id: 'class-x',
    grade: 'Class X',
    label: 'Class X Boards 2026',
    shortLabel: 'Class X (2026)',
    tag: 'CBSE GRADE X BOARD RESULT 2026',
    headline: 'Powered By Consistency. Defined By Excellence.',
    description: 'DLF World School, Greater Noida celebrates stellar academic triumph in the CBSE Secondary School Examinations with 100% pass result and multiple perfect centums in Artificial Intelligence.',
    image: '/images/dlws/dlws-grade-x-result-2026.jpg',
    downloadName: 'DLWS-CBSE-Grade-X-Result-2026.jpg',
    topper: {
      name: 'Jayant Kumar Singh',
      score: '96.20%',
      role: 'School Topper',
      highlight: 'School Topper & AI High Achiever'
    },
    metrics: [
      { label: 'Pass Rate', value: '100%', sub: 'Batch Pass Result' },
      { label: 'Score >90%', value: '31%', sub: 'Of Students' },
      { label: 'Score >=92%', value: '5 Students', sub: 'Star Achievers' },
      { label: 'Perfect 100s', value: 'Multiple', sub: 'Artificial Intelligence' },
    ],
    roster: [
      { name: 'Udit Chauhan', score: '94.40%' },
      { name: 'Ankur Yadav', score: '93.20%' },
      { name: 'Ishir Sharma', score: '92.80%' },
      { name: 'Krishna Singh', score: '92.20%' },
    ],
    extraBadge: '100% Pass Percentage & Multiple Centums'
  },
  {
    id: 'class-xii',
    grade: 'Class XII',
    label: 'Class XII Boards 2026',
    shortLabel: 'Class XII (2026)',
    tag: 'CBSE GRADE XII BOARD RESULT 2026',
    headline: 'Powered By Consistency. Defined By Excellence.',
    description: 'DLF World School, Greater Noida marks exceptional distinction in the CBSE Senior School Certificate Examinations, inspiring future leaders through relentless commitment and academic mastery.',
    image: '/images/dlws/dlws-grade-xii-result-2026.jpg',
    downloadName: 'DLWS-CBSE-Grade-XII-Result-2026.jpg',
    topper: {
      name: 'Karishma Chaunan',
      score: '91.00%',
      role: 'Senior School Topper',
      highlight: 'Exceptional Academic Consistency & Persistence'
    },
    metrics: [
      { label: 'Pass Rate', value: '100%', sub: 'Full Batch Qualified' },
      { label: 'Top Score', value: '91.00%', sub: 'Karishma Chaunan' },
      { label: 'Distinctions', value: '100%', sub: 'Stream Distinction' },
      { label: 'First Division', value: '100%', sub: 'Academic Milestone' },
    ],
    roster: [
      { name: 'Karishma Chaunan', score: '91.00%' },
      { name: 'Bhavya Tripathi', score: '83.00%' },
    ],
    extraBadge: '100% Pass Result Across All Streams'
  }
]

export const dlwsBoardResultsMap = dlwsBoardResults2026.reduce((acc, curr) => {
  acc[curr.id] = curr
  return acc
}, {})
