import React from 'react'
import { Globe, ArrowRight, ChevronDown, TrendingUp, GraduationCap } from 'lucide-react'

export default function CurriculumCambridgePathway({ theme, currentSchool }) {
  const activeSchoolId = currentSchool?.id || 'dlf-sahibabad'

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* ── 1. HERO ETHOS BLOCK WITH CAMBRIDGE BADGE & 'RATTA NAHI, REASONING' ── */}
      <div className="bg-white rounded-3xl border border-gray-150 shadow-lg p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className={`absolute top-0 left-0 w-full h-1.5 bg-${theme.primary}`} />

        <div className="space-y-4 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 bg-${theme.primary}/10 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}
            >
              <Globe className="w-3.5 h-3.5" /> Authorised Cambridge International School
            </span>
            <span className="inline-flex items-center gap-1 bg-brand-gold/20 text-brand-charcoal px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border border-brand-gold/30">
              Cambridge International &bull; S-KG to Class IX
            </span>
          </div>

          <h4 className="font-serif text-2xl sm:text-4xl font-black text-brand-charcoal tracking-tight">
            The World's Gold Standard for Education
          </h4>

          {/* Ethos Callout Quote (Item 5) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border-l-4 border-brand-gold text-brand-charcoal space-y-1">
            <p className="font-serif text-base sm:text-lg font-bold italic text-brand-charcoal">
              &ldquo;Cambridge, at the school with a soul. Children learn by doing: they question, investigate and explain their ideas. Ratta nahi, reasoning.&rdquo;
            </p>
          </div>

          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
            We offer the globally recognised Cambridge Assessment International Education curriculum from S-KG through
            Class IX, with higher grades being added progressively each year. Through enquiry-based learning and
            international benchmarks, students develop confidence, creativity, critical thinking, and a global outlook.
            Here, learners are not just prepared for examinations — they are prepared for the world beyond classrooms.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm shrink-0 flex items-center justify-center">
          <img
            src="/cambridge/image1.png"
            alt="Cambridge Assessment International Education - Cambridge International School"
            className="h-16 sm:h-22 object-contain"
          />
        </div>
      </div>

      {/* ── 2. WHY NOW? & 3 PROVEN CAMBRIDGE BENEFITS (Item 5) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Why Now? 2030 Future of Jobs */}
        <div className="lg:col-span-5 bg-gradient-to-br from-brand-charcoal to-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/30">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Future of Work &bull; WEF Report</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-white">
              Why Now? Preparing for the 2030 Paradigm
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-inter">
              The World Economic Forum's Future of Jobs research highlights an urgent transformation in career readiness:
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-1">
              <span className="font-serif text-3xl font-black text-brand-gold block">7 in 10</span>
              <p className="text-xs font-bold text-white">Employers See Analytical Thinking as Essential</p>
              <p className="text-[11px] text-slate-300">
                Cognitive agility, hypothesis testing, and original problem solving outrank pure memory recall in every global industry.
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-1">
              <span className="font-serif text-3xl font-black text-brand-gold block">39%</span>
              <p className="text-xs font-bold text-white">Core Job Skills Changing by 2030</p>
              <p className="text-[11px] text-slate-300">
                Traditional board syllabi struggle to keep pace; Cambridge is built around adaptive, durable inquiry frameworks.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Key Proven Benefits */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-150 shadow-md p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-2">
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
              Measurable Advantages
            </span>
            <h3 className={`font-serif text-2xl sm:text-3xl font-black text-${theme.primary}`}>
              The 3 Proven Cambridge Advantages
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-inter font-medium">
              Documented global outcomes for children enrolled in Cambridge International pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-150 space-y-2 text-center flex flex-col justify-between">
              <span className={`font-serif text-3xl sm:text-4xl font-black text-${theme.primary} block`}>
                +25%
              </span>
              <h5 className="font-bold text-xs uppercase tracking-wider text-brand-charcoal">
                Higher Acceptance
              </h5>
              <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                Higher admissions acceptance rate at top-tier UK, US, and Canadian universities.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-150 space-y-2 text-center flex flex-col justify-between">
              <span className="font-serif text-3xl sm:text-4xl font-black text-brand-gold block">
                50%
              </span>
              <h5 className="font-bold text-xs uppercase tracking-wider text-brand-charcoal">
                Practical Assessment
              </h5>
              <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                Balanced between coursework, scientific inquiry, and presentations, rather than high-stakes rote exams.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-150 space-y-2 text-center flex flex-col justify-between">
              <span className={`font-serif text-3xl sm:text-4xl font-black text-${theme.vibrant} block`}>
                -25%
              </span>
              <h5 className="font-bold text-xs uppercase tracking-wider text-brand-charcoal">
                Exam Anxiety
              </h5>
              <p className="text-[11px] text-brand-muted font-inter leading-relaxed">
                Reported by students accustomed to continuous formative mastery and inquiry routines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. WHY PARENTS ACROSS THE WORLD CHOOSE CAMBRIDGE? ── */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
            Global Excellence
          </span>
          <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
            Why Parents Across the World Choose Cambridge?
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Globally Recognised Qualifications',
              desc: 'Recognised by top universities and educational institutions across India and 160+ countries worldwide.',
            },
            {
              title: 'International Mindset',
              desc: 'Develops global perspectives, cross-cultural understanding, and open-minded enquiry.',
            },
            {
              title: 'Enquiry-Based Learning',
              desc: 'Encourages students to ask questions, explore concepts deeply, and think critically.',
            },
            {
              title: 'Personalised Subject Choices',
              desc: 'Offers flexible subject combinations tailored to student interests, strengths, and career goals.',
            },
            {
              title: 'International Benchmarking',
              desc: 'Evaluated independently by Cambridge UK with transparent global standard performance.',
            },
            {
              title: 'Future-Ready Skills',
              desc: 'Builds problem-solving, collaboration, digital literacy, and research capabilities.',
            },
            {
              title: 'Seamless Learning Pathway',
              desc: 'Structured progression from Primary → Lower Secondary → IGCSE → AS & A Levels.',
            },
            {
              title: 'Holistic Development',
              desc: 'Focuses on developing confident, responsible, reflective, innovative, and engaged individuals.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-2"
            >
              <div
                className={`w-7 h-7 rounded-xl bg-${theme.primary}/10 text-${theme.primary} flex items-center justify-center font-bold text-xs`}
              >
                0{idx + 1}
              </div>
              <h5 className="font-serif text-xs sm:text-sm font-bold text-brand-charcoal">{item.title}</h5>
              <p className="text-[11px] text-brand-muted leading-relaxed font-inter font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. THE CAMBRIDGE PATHWAY AT SCHOOL ── */}
      <div className="space-y-4 sm:space-y-5">
        <div className="text-center space-y-2">
          <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
            Academic Journey
          </span>
          <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>
            The Cambridge Pathway at {currentSchool?.name || 'DLF Public School'}
          </h4>
          <p className="text-xs sm:text-sm text-brand-muted font-medium">
            A seamless, progressive academic journey — Class S-KG through A Levels
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              stage: 'Cambridge Primary',
              grades: 'Classes S-KG – V',
              focus: 'Foundations in literacy, numeracy, and active inquiry',
              desc: 'Focuses on developing foundational literacy, numeracy, and scientific curiosity in young learners.',
            },
            {
              stage: 'Cambridge Lower Secondary',
              grades: 'Classes VI – VIII',
              focus: 'Deepening analytical skills across core disciplines',
              desc: 'Prepares students for the first international benchmark: the Cambridge Checkpoint.',
            },
            {
              stage: 'Cambridge IGCSE*',
              grades: 'Classes IX – X',
              focus: 'Broad, flexible subject choices with global benchmarking',
              desc: 'A comprehensive two-year program with IGCSE board examinations at the end of Class X.',
            },
            {
              stage: 'Cambridge AS & A Levels*',
              grades: 'Classes XI – XII',
              focus: 'Specialised pathways for university and career readiness',
              desc: 'Deep study and university credit options, highly recognized by universities worldwide.',
            },
          ].map((p, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-3 hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-${theme.primary}`} />
              <div className="space-y-2">
                <span
                  className={`text-[9px] uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-full bg-${theme.primary}/10 text-${theme.primary}`}
                >
                  {p.grades}
                </span>
                <h4 className="font-serif text-base font-bold text-brand-charcoal mt-2">{p.stage}</h4>
                <p className="text-[11px] text-brand-charcoal font-semibold leading-relaxed font-inter">{p.focus}</p>
                <p className="text-[10px] text-brand-muted leading-relaxed font-inter font-medium">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[9.5px] text-brand-muted italic text-center">
          *Higher grades are being added progressively each year.
        </p>
      </div>

      {/* ── 5. WORLDWIDE CAMBRIDGE NETWORK & UNIVERSITY CREDITS (Item 5) ── */}
      <div
        className={`bg-gradient-to-br from-${theme.primary}/5 via-white to-brand-gold/5 rounded-3xl border border-gray-150 p-6 sm:p-8 space-y-6`}
      >
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
            Global Footprint
          </span>
          <h4 className={`font-serif text-2xl sm:text-3xl font-bold text-${theme.primary}`}>Worldwide Cambridge Network</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-inter font-medium text-brand-charcoal">
          <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1 shadow-sm">
            <strong className={`block text-base font-serif font-bold text-${theme.primary}`}>2,500+ Schools</strong>
            <p className="text-brand-muted text-[11px]">
              Cambridge Primary is taught in over 120 countries with over 130,000 Checkpoint entries annually.
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1 shadow-sm">
            <strong className={`block text-base font-serif font-bold text-${theme.primary}`}>4,000+ Schools</strong>
            <p className="text-brand-muted text-[11px]">
              Cambridge Lower Secondary is taught across nearly 140 countries globally.
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1 shadow-sm">
            <strong className={`block text-base font-serif font-bold text-${theme.primary}`}>6,000+ Schools</strong>
            <p className="text-brand-muted text-[11px]">
              Cambridge IGCSE is the world's most popular qualification for 14 to 16-year-olds in 150+ countries.
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1 shadow-sm">
            <strong className={`block text-base font-serif font-bold text-${theme.primary}`}>130+ Countries</strong>
            <p className="text-brand-muted text-[11px]">
              Cambridge AS &amp; A Levels are taken by hundreds of thousands of students each year.
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1 shadow-sm">
            <strong className={`block text-base font-serif font-bold text-${theme.primary}`}>2,220+ Universities</strong>
            <p className="text-brand-muted text-[11px]">
              Officially recognised by higher education institutions across 90+ countries worldwide.
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-gray-100 space-y-1 shadow-sm">
            <strong className="block text-base font-serif font-bold text-brand-gold">90+ Countries</strong>
            <p className="text-brand-muted text-[11px]">
              Global university transferability and seamless recognition for undergraduate admissions.
            </p>
          </div>
        </div>

        {/* Start College One Year Ahead Banner (Item 5) */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-brand-gold/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold px-2.5 py-0.5 rounded-full bg-brand-gold/15 inline-block">
              University Credit Transfer
            </span>
            <h5 className="font-serif text-lg sm:text-xl font-black text-brand-charcoal">
              Start College One Year Ahead — Earn University Credits in US &amp; Canada
            </h5>
            <p className="text-xs text-brand-muted font-inter leading-relaxed">
              Top universities in the United States and Canada grant up to a full year of university academic credits for Cambridge AS &amp; A Level grades, allowing students to fast-track degree completion and save significant tuition fees.
            </p>
          </div>
          <GraduationCap className="w-12 h-12 text-brand-gold shrink-0 hidden md:block" />
        </div>

        <div className="text-center pt-1">
          <a
            href="https://www.cambridgeinternational.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-xs font-bold text-${theme.primary} hover:underline`}
          >
            Visit Official Cambridge International Website <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* ── 6. CHECKPOINT RESULTS TABLE ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch pt-1">
        <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
              Global Benchmarking
            </span>
            <h4 className={`font-serif text-xl font-bold text-${theme.primary}`}>
              Cambridge Lower Secondary Checkpoint Results
            </h4>
            <p className="text-xs text-brand-muted leading-relaxed font-inter font-medium">
              At the end of Classes V and VIII, students appear for the internationally benchmarked Cambridge Checkpoint
              Assessments in English, Mathematics, and Science. These assessments are independently set, administered &amp;
              evaluated by Cambridge UK, offering parents a transparent and authentic measure of student progress against
              global standards.
            </p>
            <p className="text-xs text-brand-muted leading-relaxed font-inter font-medium">
              Below is the Checkpoint Result of the last three years showing that every single one of them has scored
              above the international average in all subjects (Checkpoint scores of 21 to 30 consistently correspond to the{' '}
              <strong className="text-brand-charcoal">Good</strong> performance band) at the Cambridge Assessment.
            </p>
          </div>
          <p className="text-[10px] text-brand-muted italic border-t border-gray-100 pt-2">
            *Each learner receives a personalised Statement of Achievement from Cambridge International, highlighting
            strengths, areas of growth, and readiness for future academic pathways.
          </p>
        </div>

        <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 space-y-3 overflow-x-auto">
          <h4 className={`font-serif text-sm font-bold text-${theme.primary}`}>3-Year Checkpoint Performance Trend</h4>
          <table className="w-full text-[11px] text-left border-collapse font-inter">
            <thead>
              <tr className="border-b border-gray-100 text-brand-charcoal font-bold bg-gray-50/50">
                <th className="py-2.5 px-3">Subject</th>
                <th className="py-2.5 px-3">2021–22</th>
                <th className="py-2.5 px-3">2022–23</th>
                <th className="py-2.5 px-3">2023–24</th>
              </tr>
            </thead>
            <tbody className="text-brand-muted font-medium divide-y divide-gray-50">
              <tr>
                <td className="py-2.5 px-3 font-semibold text-brand-charcoal">English</td>
                <td className="py-2.5 px-3 font-bold text-brand-charcoal">36/50</td>
                <td className="py-2.5 px-3 font-bold text-brand-charcoal">35/50</td>
                <td className="py-2.5 px-3 font-bold text-brand-charcoal">34/50</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-brand-charcoal">Mathematics</td>
                <td className="py-2.5 px-3 font-bold text-brand-charcoal">47/50</td>
                <td className="py-2.5 px-3 font-bold text-brand-charcoal">42/50</td>
                <td className="py-2.5 px-3 font-bold text-brand-charcoal">44/50</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-semibold text-brand-charcoal">Science</td>
                <td className="py-2.5 px-3 font-bold text-brand-charcoal">42/50</td>
                <td className="py-2.5 px-3 font-bold text-brand-charcoal">41/50</td>
                <td className="py-2.5 px-3 font-bold text-brand-charcoal">37/50</td>
              </tr>
            </tbody>
          </table>
          <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-[10px] text-brand-muted font-inter leading-relaxed text-center">
            Results marked and benchmarked by Cambridge International, UK. Scores reported on the standardised 0–50
            Cambridge Checkpoint scale.
          </div>
        </div>
      </div>

      {/* ── 7. ASSET EXAM PERFORMANCE ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-3">
            <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>
              National Benchmarking
            </span>
            <h4 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
              ASSET Exam Performance &amp; Year-on-Year Growth
            </h4>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
              Similarly, Cambridge Students year after year have also scored above the national benchmarking in ASSET
              Exam.
            </p>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
              <strong className="text-brand-charcoal">ASSET</strong> is a skill-based diagnostic assessment that
              evaluates students' conceptual understanding and critical thinking in core subjects like English,
              Mathematics, Science, and Social Studies.
            </p>
          </div>
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-sm border border-gray-150 p-2 bg-gray-50">
            <img
              src="/cambridge/image2.png"
              alt="Ei ASSET Management Year-on-Year Growth Maths"
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </div>
      </div>

      {/* ── 8. SUBJECTS OFFERED BOARD ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 space-y-4">
        <div className="space-y-1">
          <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>IGCSE Options</span>
          <h3 className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}>
            Subjects Offered — Cambridge IGCSE | Class IX Onwards
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
            Our flexible subject combinations allow learners to personalise their academic journey based on their
            interests, abilities, and future aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-1">
          {[
            {
              grp: 'Languages',
              compulsory: 'English as a First Language (Compulsory)',
              subjects: ['Hindi', 'French', 'German'],
            },
            {
              grp: 'Humanities & Social Sciences',
              compulsory: '',
              subjects: ['Global Perspectives', 'History', 'Geography', 'Sociology'],
            },
            { grp: 'Sciences', compulsory: '', subjects: ['Physics', 'Chemistry', 'Biology'] },
            {
              grp: 'Commerce & Technology',
              compulsory: '',
              subjects: ['Economics', 'Business Studies', 'Computer Science'],
            },
            { grp: 'Mathematics', compulsory: '', subjects: ['Mathematics Core', 'Mathematics Extended'] },
          ].map((group, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-4 rounded-xl border border-gray-150/50 space-y-2 flex flex-col justify-between"
            >
              <div>
                <h5 className={`font-serif text-xs font-bold text-${theme.primary} border-b border-gray-200 pb-1.5 mb-1.5`}>
                  {group.grp}
                </h5>
                {group.compulsory && (
                  <p className="text-[10px] font-extrabold text-brand-charcoal bg-white border border-gray-100 p-1.5 rounded-lg mb-1.5 leading-relaxed">
                    {group.compulsory}
                  </p>
                )}
                <ul className="space-y-1 text-[10px] text-brand-muted font-inter font-semibold">
                  {group.subjects.map((sub, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-1.5 leading-relaxed">
                      <span className={`w-1 h-1 rounded-full bg-${theme.accent} mt-1.5 shrink-0`} />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 9. CALL TO ACTION: SEE A CAMBRIDGE THINK ROOM IN ACTION (Item 5) ── */}
      <div className={`bg-gradient-to-br from-${theme.primary} to-brand-charcoal text-white rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6`}>
        <div className="space-y-2 max-w-2xl">
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold bg-white/10 px-3 py-1 rounded-full border border-white/15 inline-block">
            Campus Experience
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-black text-white">
            Ask to see a Cambridge Think room in action.
          </h3>
          <p className="text-xs sm:text-sm text-white/80 font-inter leading-relaxed">
            Witness how our students formulate inquiry questions, conduct experiential lab demonstrations, and articulate reasoning without fear of judgment. Book your guided campus walk-through today.
          </p>
        </div>

        <a
          href={`/school/${activeSchoolId}/admissions?tab=enquiry`}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-black text-xs uppercase tracking-wider shadow-lg transition-all shrink-0 cursor-pointer"
        >
          <span>Schedule Think Room Visit</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* ── 10. FAQS ACCORDION ── */}
      <div className="space-y-3 pt-2 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}>Got Questions?</span>
          <h3 className={`font-serif text-2xl font-bold text-${theme.primary}`}>Frequently Asked Questions</h3>
          <p className="text-xs text-brand-muted font-medium">You Asked. We Answered.</p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: '1. Is Cambridge accepted in India?',
              a: 'Yes. Cambridge IGCSE is recognised by the Association of Indian Universities (AIU) and accepted by CBSE, ISC, State Boards, and universities across India and abroad.',
            },
            {
              q: '2. Can Cambridge students prepare for JEE or NEET?',
              a: 'Absolutely. Students can pursue JEE, NEET, CUET, UPSC, NDA, and other competitive examinations with the right subject choices and academic planning.',
            },
            {
              q: '3. What is the Cambridge Checkpoint?',
              a: 'Checkpoint is an internationally benchmarked assessment conducted in Classes V and VIII that evaluates student understanding in English, Mathematics, and Science.',
            },
            {
              q: '4. How is Cambridge different from traditional boards?',
              a: 'Cambridge focuses on conceptual understanding, application, research, analysis, discussion, and real-world problem-solving rather than rote learning.',
            },
            {
              q: '5. How many subjects does a student study in IGCSE?',
              a: 'Typically, students opt for 7–9 subjects, including core and elective choices tailored to their interests and future goals.',
            },
            {
              q: '6. Are Cambridge classrooms more interactive?',
              a: 'Yes. Students actively participate through discussions, presentations, experiments, collaborative projects, and inquiry-driven learning experiences.',
            },
            {
              q: '7. Can students shift to another board later?',
              a: 'Yes. Students can smoothly transition to CBSE, ISC, State Boards, or continue with Cambridge AS & A Levels.',
            },
            {
              q: '8. Is Cambridge suitable for students moving abroad?',
              a: 'Absolutely. Cambridge qualifications are internationally portable and recognised in over 160 countries worldwide.',
            },
            {
              q: '9. Are examinations conducted in school?',
              a: 'Yes. As an authorised Cambridge examination centre, all Cambridge examinations are conducted at our campus under international standards and protocols.',
            },
            {
              q: '10. What kind of learner does Cambridge develop?',
              a: 'Cambridge nurtures learners who are confident, responsible, reflective, innovative, and engaged — young people prepared not only for examinations, but for life itself.',
            },
          ].map((faq, fIdx) => (
            <details
              key={fIdx}
              className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden hover:shadow-md transition-shadow duration-300"
            >
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h5 className="font-serif text-sm font-bold text-brand-charcoal pr-4">{faq.q}</h5>
                <span className={`text-${theme.primary} shrink-0 transition-transform duration-300 group-open:rotate-180`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </summary>
              <p className="text-xs text-brand-muted leading-relaxed font-inter font-medium mt-3 pt-3 border-t border-gray-50">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
