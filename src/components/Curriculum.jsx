import React, { useState, useRef } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import {
  Sparkles,
  BookOpen,
  CheckCircle,
  Compass,
  Cpu,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  Globe,
  Award,
} from "lucide-react";
import gsap from "gsap";
import { useSiteData } from "../hooks/useSiteData";
import ImageWithLoader from "./ImageWithLoader";
import CbseResults from "./CbseResults";

export default function Curriculum() {
  const { schoolId, pathway: urlPathway } = useParams();
  const location = useLocation();
  const isCurriculumPage = location.pathname.includes("/curriculum");
  const { schools } = useSiteData();
  const activeBranch =
    schoolId && schools[schoolId]
      ? schoolId
      : "dlf-sahibabad";
  const currentSchool = schools[activeBranch];
  const isDLWS = activeBranch === "dlf-greater-noida";

  const theme = currentSchool?.theme || {
    primary: "brand-greenDeep",
    vibrant: "brand-greenVibrant",
    accent: "brand-gold",
    accentHex: "#C59B27",
  };

  const [pathway, setPathway] = useState(
    isDLWS ? "cbse" : (urlPathway === "cambridge" ? "cambridge" : "cbse")
  );
  const [activeTab, setActiveTab] = useState("primary");
  const panesRef = useRef({});

  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;

    const currentPane = panesRef.current[activeTab];
    const targetPane = panesRef.current[newTab];

    if (currentPane && targetPane) {
      gsap.to(currentPane, {
        opacity: 0,
        y: 10,
        duration: 0.25,
        onComplete: () => {
          setActiveTab(newTab);
          gsap.fromTo(
            targetPane,
            { opacity: 0, y: -10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
          );
        },
      });
    } else {
      setActiveTab(newTab);
    }
  };

  const tabs = [
    { id: "primary", label: "Early Years", Icon: Sparkles },
    { id: "middle", label: "Primary Years", Icon: Compass },
    { id: "secondary", label: "Middle Years", Icon: Cpu },
    { id: "senior", label: "Senior Years", Icon: GraduationCap },
  ];

  return (
    <section
      id="curriculum"
      className="py-16 sm:py-24 bg-transparent relative overflow-hidden text-brand-charcoal selection:bg-brand-gold/30"
    >
      {/* Background ambient glows */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] ambient-glow-2 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-1/4 w-[450px] h-[450px] ambient-glow-1 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 space-y-12">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-gold">
            Academic Excellence &amp; Pathways
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-masterDeep">
            Academic Curriculum &amp; Pathways
          </h1>
          <div className="w-16 h-[2px] bg-brand-gold mx-auto"></div>
          <p className="text-base text-brand-muted leading-relaxed font-sans max-w-xl mx-auto">
            {isDLWS
              ? "Comprehensive CBSE Board Curriculum designed for experiential learning, analytical thinking, and future readiness."
              : "Dual Academic Curriculum offering CBSE Board Pathway and Cambridge International Board Pathway."}
          </p>
        </div>

        {/* Pathway Switcher Buttons (DLPS gets CBSE + Cambridge; DLWS gets CBSE only) */}
        {!isDLWS ? (
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setPathway("cbse")}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
                pathway === "cbse"
                  ? `bg-${theme.primary} text-white shadow-md`
                  : "bg-white text-brand-charcoal border border-gray-150 hover:bg-gray-50"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>CBSE Pathway</span>
            </button>
            <button
              onClick={() => setPathway("cambridge")}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
                pathway === "cambridge"
                  ? `bg-${theme.primary} text-white shadow-md`
                  : "bg-white text-brand-charcoal border border-gray-150 hover:bg-gray-50"
              }`}
            >
              <Globe className="w-4 h-4 text-brand-gold" />
              <span>Cambridge Pathway</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-${theme.primary}/10 text-${theme.primary} font-bold text-xs uppercase tracking-wider border border-${theme.primary}/20`}>
              <BookOpen className="w-4 h-4" />
              <span>CBSE Curriculum Pathway — {currentSchool?.name}</span>
            </div>
          </div>
        )}

        {/* Stats Ribbon (4 cards preserved as requested) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            {
              val: "2500+",
              label: "Enrolled Students",
              desc: "Nurtured across progressive learning programs.",
            },
            {
              val: "1:17",
              label: "Teacher Student Ratio",
              desc: "Ensuring personal attention & mentor focus.",
            },
            {
              val: "CBSE Board",
              label: "Foundation to Class XII",
              desc: "Fully aligned to CBSE & NEP 2020 guidelines.",
            },
            {
              val: "Cambridge Board",
              label: "Class-I Onwards",
              desc: "Globally recognised International pathway.",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <span
                className={`font-serif text-2xl font-extrabold text-${theme.primary}`}
              >
                {stat.val}
              </span>
              <h4 className="text-[11px] font-bold text-brand-charcoal mt-1">
                {stat.label}
              </h4>
              <p className="text-[9px] text-brand-muted font-inter leading-relaxed mt-0.5">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* TAB SELECTOR HEADER (Pill style with icons) */}
        <div className="flex flex-wrap items-center justify-center gap-3 pb-3 max-w-5xl mx-auto px-4">
          {tabs.map((tab) => {
            const Icon = tab.Icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer whitespace-nowrap ${
                  isActive
                    ? `bg-brand-greenDeep text-white border-brand-greenDeep shadow-md`
                    : `bg-white text-brand-charcoal hover:bg-brand-greenDeep/5 border-gray-200 shadow-sm`
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* CURRICULAR DETAIL BOARD */}
        <div
          id="curriculum-content"
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-gray-100 min-h-[350px] transition-all duration-500 relative"
        >
          {/* Tab Panel: Early Years */}
          <div
            ref={(el) => (panesRef.current["primary"] = el)}
            id="tab-primary"
            className={`tab-pane grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === "primary" ? "active" : "hidden"}`}
          >
            <div className="space-y-4">
              <div
                className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />{" "}
                Foundational Stage
              </div>
              <h4
                className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}
              >
                Early Years Pedagogy
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                Aligned with the vision of NEP 2020 and NCF-FS principles, our Foundation Stage pedagogy is child-centric, play-based, inclusive, and experiential.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  { title: "Play-Based Exploration", desc: "Free & guided play in curated Discovery Dens." },
                  { title: "Story & Toy Pedagogy", desc: "Puppetry, role-play & tactile building blocks." },
                  { title: "Art & Sports Integrated", desc: "Music, dance, yoga & motor skill drills." },
                  { title: "Multilingual & Inclusive", desc: "Multisensory corners where every child thrives." }
                ].map((card, idx) => (
                  <div key={idx} className="bg-gray-50/80 p-3 rounded-xl border border-gray-100 hover:border-brand-gold/40 transition-colors space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle className={`w-3.5 h-3.5 text-${theme.accent} shrink-0`} />
                      <h5 className="text-[11px] font-bold text-brand-charcoal leading-snug">{card.title}</h5>
                    </div>
                    <p className="text-[10px] text-brand-muted font-inter leading-relaxed pl-5.5">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative group mt-4 lg:mt-0">
              <ImageWithLoader
                src="/pedagogy/pictures/Discovery Den.jpg"
                alt="DLF Early Years Pedagogy - Discovery Den"
                loading="lazy"
                imgClassName="object-cover"
                style={{ objectPosition: "center 25%" }}
              />
            </div>
          </div>

          {/* Tab Panel: Primary Years */}
          <div
            ref={(el) => (panesRef.current["middle"] = el)}
            id="tab-middle"
            className={`tab-pane grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === "middle" ? "active" : "hidden"}`}
          >
            <div className="space-y-4">
              <div
                className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}
              >
                <Compass className="w-3.5 h-3.5" /> Primary Stage
              </div>
              <h4
                className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}
              >
                Primary Years Pedagogy
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                The Primary Years mark the transition from foundational exploration to structured discovery toward independent thinking and authentic application.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  { title: "Inquiry & THOTS Lab", desc: "Curiosity & higher-order problem solving." },
                  { title: "Competency-Based", desc: "Hands-on field tasks & active application." },
                  { title: "Tech & Story Integrated", desc: "Interactive digital tools & real-life narratives." },
                  { title: "DEAR Reading Modules", desc: "Dedicated reading periods fostering love for books." }
                ].map((card, idx) => (
                  <div key={idx} className="bg-gray-50/80 p-3 rounded-xl border border-gray-100 hover:border-brand-gold/40 transition-colors space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle className={`w-3.5 h-3.5 text-${theme.accent} shrink-0`} />
                      <h5 className="text-[11px] font-bold text-brand-charcoal leading-snug">{card.title}</h5>
                    </div>
                    <p className="text-[10px] text-brand-muted font-inter leading-relaxed pl-5.5">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative group mt-4 lg:mt-0">
              <ImageWithLoader
                src="/pedagogy/primary-years/7C1A0167.jpg"
                alt="DLF Primary Years Classroom"
                loading="lazy"
                imgClassName="object-cover"
                style={{ objectPosition: "center 25%" }}
              />
            </div>
          </div>

          {/* Tab Panel: Middle Years */}
          <div
            ref={(el) => (panesRef.current["secondary"] = el)}
            id="tab-secondary"
            className={`tab-pane grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === "secondary" ? "active" : "hidden"}`}
          >
            <div className="space-y-4">
              <div
                className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}
              >
                <Cpu className="w-3.5 h-3.5" /> Middle Stage
              </div>
              <h4
                className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}
              >
                Middle Years Pedagogy
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                Aligned with NEP 2020 and NCF-SE 2023, Delfites transition to abstract concepts in science, math, arts, and humanities through Innovation Hubs and skill domains.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  { title: "APJ Abdul Kalam Tinkering", desc: "Tinkering & design thinking in Innovation Hub." },
                  { title: "Life Forms & Agriculture", desc: "Biodiversity registers, plant nursery & microgreens." },
                  { title: "Machines & Materials", desc: "3D printing, robotics, automation & maker skills." },
                  { title: "Human Services", desc: "Healthcare, family health & culinary arts." }
                ].map((card, idx) => (
                  <div key={idx} className="bg-gray-50/80 p-3 rounded-xl border border-gray-100 hover:border-brand-gold/40 transition-colors space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle className={`w-3.5 h-3.5 text-${theme.accent} shrink-0`} />
                      <h5 className="text-[11px] font-bold text-brand-charcoal leading-snug">{card.title}</h5>
                    </div>
                    <p className="text-[10px] text-brand-muted font-inter leading-relaxed pl-5.5">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative group mt-4 lg:mt-0">
              <ImageWithLoader
                src="/pedagogy/middle-years/7C1A1782.jpg"
                alt="Middle School STEM &amp; Innovation Lab"
                loading="lazy"
                imgClassName="object-cover"
                style={{ objectPosition: "center 25%" }}
              />
            </div>
          </div>

          {/* Tab Panel: Senior Years */}
          <div
            ref={(el) => (panesRef.current["senior"] = el)}
            id="tab-senior"
            className={`tab-pane grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${activeTab === "senior" ? "active" : "hidden"}`}
          >
            <div className="space-y-4">
              <div
                className={`inline-flex items-center gap-1.5 bg-${theme.primary}/5 text-${theme.primary} px-3 py-1 rounded-full text-xs font-bold`}
              >
                <GraduationCap className="w-3.5 h-3.5" /> Secondary &amp; Senior Stage
              </div>
              <h4
                className={`font-serif text-xl sm:text-2xl font-bold text-${theme.primary}`}
              >
                Senior Years Pedagogy
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium">
                Focusing on multidisciplinary study, flexibility, and future readiness across Science, Commerce, and Humanities streams.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  { title: "Multidisciplinary Streams", desc: "Flexibility across Science, Commerce & Humanities." },
                  { title: "Case & Problem Research", desc: "Real-world case analysis & decision-making." },
                  { title: "Corporate Internships", desc: "Field exposure, internships & innovation challenges." },
                  { title: "University & Career Prep", desc: "AI, computational thinking & competitive exam prep." }
                ].map((card, idx) => (
                  <div key={idx} className="bg-gray-50/80 p-3 rounded-xl border border-gray-100 hover:border-brand-gold/40 transition-colors space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle className={`w-3.5 h-3.5 text-${theme.accent} shrink-0`} />
                      <h5 className="text-[11px] font-bold text-brand-charcoal leading-snug">{card.title}</h5>
                    </div>
                    <p className="text-[10px] text-brand-muted font-inter leading-relaxed pl-5.5">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-md relative group mt-4 lg:mt-0">
              <ImageWithLoader
                src="/pedagogy/senior-years/7C1A0335.jpg"
                alt="DLF Senior Years Classroom"
                loading="lazy"
                imgClassName="object-cover"
                style={{ objectPosition: "center 25%" }}
              />
            </div>
          </div>
        </div>

        {/* Embedded CBSE Results Showcase (rendered on dedicated Curriculum page) */}
        {isCurriculumPage && (
          <div className="pt-8">
            <CbseResults isEmbedded={true} />
          </div>
        )}

        {/* CTA Redirect Button */}
        <div className="text-center pt-4">
          <Link
            to="/pedagogy/early-years"
            className="inline-flex items-center gap-3 bg-brand-masterDeep hover:bg-brand-masterVibrant text-white px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-xl shadow-brand-masterDeep/20 hover:scale-105"
          >
            <span>Explore Our Stage-wise Pedagogy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
