/**
 * DLPS Sahibabad Academic Board Examination Results Dataset
 * Session: 2026 Official Declaration
 */

export const dlpsBoardResults2026 = [
  {
    id: 'class-xii',
    grade: 'Class XII',
    label: 'Class XII Boards 2026',
    shortLabel: 'Class XII (2026)',
    tag: 'CBSE GRADE XII BOARD RESULT 2026',
    headline: 'Powered By Consistency. Defined By Excellence.',
    description: 'DLF Public School sets another historic benchmark in the CBSE Senior School Certificate Examinations, demonstrating unprecedented mastery across Science, Commerce & Humanities.',
    image: '/images/dlps-grade-xii-result-2026.jpg',
    downloadName: 'DLPS-CBSE-Grade-XII-Result-2026.jpg',
    topper: {
      name: 'Riddhima Tyagi',
      score: '98.40%',
      role: 'School Topper',
      highlight: 'Exceptional Performance Across All Academic Disciplines'
    },
    metrics: [
      { label: 'School Average', value: '81.24%', sub: 'Batch Average' },
      { label: 'Perfect 100s', value: '26', sub: 'In Various Subjects' },
      { label: '>90% Aggregate', value: '37/170', sub: 'Students' },
      { label: '>85% Aggregate', value: '69/170', sub: 'Students' },
    ],
    roster: [
      { name: 'Janya Babbar', score: '98.00%' },
      { name: 'Anya Chugh', score: '97.00%' },
      { name: 'Anushka Dhama', score: '96.00%' },
      { name: 'Aishi', score: '95.80%' },
      { name: 'Dhriti Ahuja', score: '95.60%' },
      { name: 'Sanchhi Sehdev', score: '95.20%' },
      { name: 'Palaksh Singh', score: '95.00%' },
      { name: 'Anish Lahori', score: '95.00%' },
    ],
    extraBadge: '168/170 students scored aggregate > 60%'
  },
  {
    id: 'class-x',
    grade: 'Class X',
    label: 'Class X Boards 2026',
    shortLabel: 'Class X (2026)',
    tag: 'CBSE GRADE X BOARD RESULT 2026',
    headline: 'Powered By Consistency. Defined By Excellence.',
    description: 'DLF Public School sets another historic benchmark in the CBSE Secondary School Board Examinations, demonstrating unprecedented mastery across all subjects.',
    image: '/images/dlps-grade-x-result-2026.jpg',
    downloadName: 'DLPS-CBSE-Grade-X-Result-2026.jpg',
    topper: {
      name: 'Kavya Bhardwaj',
      score: '99.40%',
      role: 'School Topper',
      highlight: '100% in English | Sanskrit | Artificial Intelligence | Social Science'
    },
    metrics: [
      { label: 'School Average', value: '88.4%', sub: 'Highest Ever' },
      { label: 'Perfect 100s', value: '53', sub: 'In Various Subjects' },
      { label: '>95% Aggregate', value: '41', sub: 'Students' },
      { label: '>90% Aggregate', value: '54%', sub: 'Of Batch' },
    ],
    roster: [
      { name: 'Bhavya Goyal', score: '98.40%' },
      { name: 'Raghav Suri', score: '98.40%' },
      { name: 'Aarjav Jain', score: '98.20%' },
      { name: 'Dhairya Killa', score: '98.00%' },
      { name: 'Garima Walia', score: '98.00%' },
      { name: 'Rajshree', score: '98.00%' },
      { name: 'Anirudh M.M', score: '97.80%' },
    ],
    extraBadge: '100% students scored aggregate > 60%'
  }
]

export const dlpsBoardResultsMap = dlpsBoardResults2026.reduce((acc, curr) => {
  acc[curr.id] = curr
  return acc
}, {})
