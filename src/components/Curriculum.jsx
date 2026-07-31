import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  BookOpen,
  Globe,
  GraduationCap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useSiteData } from "../hooks/useSiteData";
import CbseResults from "./CbseResults";

export default function Curriculum({ isHomePage = false }) {
  const { schoolId, pathway } = useParams();
  const { schools } = useSiteData();
  const activeBranch =
    schoolId && schools[schoolId] ? schoolId : "dlf-sahibabad";
  const currentSchool = schools[activeBranch];
  const isDLWS = activeBranch === "dlf-greater-noida";

  const theme = currentSchool?.theme || {
    primary: "brand-greenDeep",
    vibrant: "brand-greenVibrant",
    accent: "brand-gold",
    accentHex: "#C59B27",
  };

  const [activeTab, setActiveTab] = useState(
    pathway === "cambridge" && !isDLWS ? "cambridge" : "cbse"
  );

  const tabs = isDLWS
    ? [{ id: "cbse", label: "CBSE Pathway", Icon: BookOpen }]
    : [
        { id: "cbse", label: "CBSE Pathway", Icon: BookOpen },
        { id: "cambridge", label: "Cambridge Pathway", Icon: Globe },
      ];

  const cbseContent = {
    badge: "Central Board of Secondary Education",
    title: "CBSE Academic Pathway",
    subtitle:
      "A structured, nationally recognised curriculum aligned with NEP 2020 that builds rigorous academic foundations from Foundation through Class XII.",
    stats: [
      { val: isDLWS ? "2131920" : "2130384", label: "CBSE Affiliation No.", desc: "Fully affiliated and compliant with CBSE norms." },
      { val: "Foundation–XII", label: "Grade Coverage", desc: "Continuous academic pathway from early years to board exams." },
      { val: "100%", label: "Board Pass Rate", desc: "Consistent board exam excellence over the last decade." },
      { val: "NEP 2020", label: "Aligned Curriculum", desc: "Redesigned to meet National Education Policy guidelines." },
    ],
    stages: [
      {
        grade: "Foundation & Pre-Primary",
        classes: "Foundation · Pre-KG · JKG · SKG",
        color: "bg-emerald-50 border-emerald-200",
        titleColor: "text-emerald-700",
        subjects: ["Language & Literacy", "Numeracy & Logical Thinking", "Environmental Awareness", "Art, Music & Movement", "Social & Emotional Learning"],
        desc: "Play-based, child-centric learning aligned with NCF-FS and NEP 2020 Foundational Stage guidelines.",
      },
      {
        grade: "Primary Years",
        classes: "Class I – V",
        color: "bg-blue-50 border-blue-200",
        titleColor: "text-blue-700",
        subjects: ["English & Hindi Language", "Mathematics", "Environmental Studies (EVS)", "General Knowledge", "Computer Science", "Art & Craft / Physical Education"],
        desc: "Competency-based learning with NCERT-aligned textbooks fostering inquiry, reading, and foundational skills.",
      },
      {
        grade: "Middle Years",
        classes: "Class VI – VIII",
        color: "bg-violet-50 border-violet-200",
        titleColor: "text-violet-700",
        subjects: ["English & Second Language", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Science", "Computer Science / IT", "Sanskrit / French (Optional)"],
        desc: "Transition to abstract learning with NEP 2020 skill domains — tinkering, vocational exposure, and integrated STEM.",
      },
      {
        grade: "Secondary",
        classes: "Class IX – X",
        color: "bg-amber-50 border-amber-200",
        titleColor: "text-amber-700",
        subjects: ["English (Core)", "Mathematics (Standard / Basic)", "Science (Physics, Chemistry, Biology)", "Social Science", "Information Technology / IT", "Third Language"],
        desc: "Board-aligned curriculum preparing students for CBSE Class X examinations with continuous internal assessments.",
      },
      {
        grade: "Senior Secondary",
        classes: "Class XI – XII",
        color: "bg-rose-50 border-rose-200",
        titleColor: "text-rose-700",
        subjects: ["Science Stream: Physics, Chemistry, Biology / Mathematics", "Commerce Stream: Accountancy, Business Studies, Economics", "Humanities Stream: History, Geography, Political Science", "English Core (All Streams)", "Electives: Computer Science, Physical Education, Fine Arts"],
        desc: "Multidisciplinary senior school offering Science, Commerce, and Humanities streams with full board exam preparation.",
      },
    ],
    cta: { label: "Apply for CBSE Admissions", to: `/school/${activeBranch}/admissions` },
  };

  const cambridgeContent = {
    badge: "Cambridge Assessment International Education",
    title: "Cambridge International Pathway",
    subtitle:
      "A globally recognised international curriculum from Class I onwards, preparing students for Cambridge IGCSE and A-Level examinations accepted by universities worldwide.",
    stats: [
      { val: "Cambridge", label: "CAIE Affiliated", desc: "Recognised by 160+ countries and leading global universities." },
      { val: "Class I+", label: "Entry Point", desc: "International curriculum begins from Class I onwards." },
      { val: "IGCSE", label: "Global Qualification", desc: "World's most popular international qualification." },
      { val: "AS/A Level", label: "Senior Pathway", desc: "Advanced qualifications for global university admissions." },
    ],
    stages: [
      {
        grade: "Cambridge Primary",
        classes: "Class I – V",
        color: "bg-sky-50 border-sky-200",
        titleColor: "text-sky-700",
        subjects: ["Cambridge Primary English", "Cambridge Primary Mathematics", "Cambridge Primary Science", "ICT & Digital Literacy", "Creative Arts & Physical Education"],
        desc: "Internationally benchmarked primary learning with Cambridge Primary Checkpoint assessments and project-based inquiry.",
      },
      {
        grade: "Cambridge Lower Secondary",
        classes: "Class VI – VIII",
        color: "bg-indigo-50 border-indigo-200",
        titleColor: "text-indigo-700",
        subjects: ["Cambridge English", "Cambridge Mathematics", "Cambridge Science", "Global Perspectives", "ICT / Computer Science", "Second Language"],
        desc: "Lower Secondary Checkpoint assessments provide international benchmarking and smooth transition to IGCSE.",
      },
      {
        grade: "Cambridge IGCSE",
        classes: "Class IX – X",
        color: "bg-teal-50 border-teal-200",
        titleColor: "text-teal-700",
        subjects: ["English Language & Literature", "Mathematics (Core / Extended)", "Sciences: Physics, Chemistry, Biology", "Geography / History", "Computer Science", "Business Studies / Global Perspectives"],
        desc: "Cambridge IGCSE — the world's most popular international qualification for 14–16 year olds.",
      },
      {
        grade: "Cambridge AS & A Level",
        classes: "Class XI – XII",
        color: "bg-orange-50 border-orange-200",
        titleColor: "text-orange-700",
        subjects: ["AS & A Level Mathematics / Further Mathematics", "AS & A Level Sciences (Physics, Chemistry, Biology)", "AS & A Level Economics / Business", "AS & A Level English Language", "AS & A Level Computer Science"],
        desc: "Advanced qualifications providing direct entry to leading universities in the UK, US, Canada, Australia, and India.",
      },
    ],
    cta: { label: "Enquire for Cambridge Pathway", to: `/school/${activeBranch}/admissions?tab=enquiry` },
  };

  const content = activeTab === "cambridge" ? cambridgeContent : cbseContent;

  return (
    <section
      id="curriculum"
      className="py-16 sm:py-24 bg-transparent relative overflow-hidden text-brand-charcoal selection:bg-brand-gold/30"
    >
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] ambient-glow-2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-[450px] h-[450px] ambient-glow-1 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 space-y-12">

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className={`text-xs uppercase tracking-widest font-extrabold text-${theme.accent}`}>
            Academic Curriculum
          </span>
          <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-${theme.primary}`}>
            Academic Pathways
          </h1>
          <div className={`w-16 h-[2px] bg-${theme.accent} mx-auto`} />
          <p className="text-base text-brand-muted leading-relaxed font-sans max-w-xl mx-auto">
            {isDLWS
              ? "DLF World School delivers a CBSE-aligned, nationally recognised academic programme from Foundation through Class XII."
              : "DLF Public School offers two globally recognised academic pathways — CBSE and Cambridge International — providing families the freedom to choose."}
          </p>
        </div>

        {/* Tab Selector (hidden for DLWS) */}
        {!isDLWS && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {tabs.map(({ id, label, Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer whitespace-nowrap ${
                    isActive
                      ? `bg-${theme.primary} text-white border-${theme.primary} shadow-md`
                      : "bg-white text-brand-charcoal hover:bg-gray-50 border-gray-200 shadow-sm"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {label}
                </button>
              );
            })}
          </div>
        )}

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {content.stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <span className={`font-serif text-xl font-extrabold text-${theme.primary}`}>{stat.val}</span>
              <h4 className="text-[11px] font-bold text-brand-charcoal mt-1">{stat.label}</h4>
              <p className="text-[9px] text-brand-muted font-inter leading-relaxed mt-0.5">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* If rendered on Home Page, only show the header, tabs & stats cards */}
        {!isHomePage && (
          <>
            {/* Pathway Header Card */}
            <div className={`bg-${theme.primary} rounded-3xl p-8 sm:p-10 text-white`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-brand-gold bg-brand-gold/20 px-3 py-1 rounded-full">
                    {content.badge}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold">{content.title}</h2>
                  <p className="text-sm text-white/80 leading-relaxed font-inter">{content.subtitle}</p>
                </div>
                <Link
                  to={content.cta.to}
                  className="inline-flex items-center gap-2 bg-white text-brand-charcoal font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-lg shrink-0"
                >
                  {content.cta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Grade Stages */}
            <div className="space-y-5">
              <h3 className={`font-serif text-xl font-bold text-${theme.primary}`}>Grade-wise Curriculum Overview</h3>
              {content.stages.map((stage, idx) => (
                <div key={idx} className={`rounded-2xl border p-6 sm:p-8 ${stage.color} hover:shadow-md transition-all duration-300`}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <span className={`text-[10px] font-extrabold uppercase tracking-widest ${stage.titleColor}`}>{stage.classes}</span>
                      <h4 className={`font-serif text-lg sm:text-xl font-bold ${stage.titleColor}`}>{stage.grade}</h4>
                    </div>
                    <GraduationCap className={`w-6 h-6 ${stage.titleColor} opacity-40 shrink-0`} />
                  </div>
                  <p className="text-xs sm:text-sm text-brand-muted font-inter leading-relaxed mb-4">{stage.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {stage.subjects.map((subj, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 bg-white/70 rounded-xl px-3 py-2 border border-white/80">
                        <CheckCircle className={`w-3.5 h-3.5 ${stage.titleColor} shrink-0`} />
                        <span className="text-[11px] font-semibold text-brand-charcoal">{subj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CBSE Results Section */}
            <CbseResults theme={theme} schoolName={currentSchool?.name} />

            {/* Bottom CTAs */}
            <div className="text-center pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={`/school/${activeBranch}/admissions`}
                className={`inline-flex items-center gap-3 bg-${theme.primary} hover:bg-${theme.vibrant} text-white px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-105`}
              >
                <span>Begin Admissions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pedagogy"
                className="inline-flex items-center gap-3 bg-white border border-gray-200 text-brand-charcoal px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              >
                <span>Explore Our Pedagogy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
