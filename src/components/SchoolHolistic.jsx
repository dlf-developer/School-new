import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { useSiteData } from "../hooks/useSiteData";
import {
  Music,
  Trophy,
  Palette,
  BookOpen,
  Compass,
  Award,
  ArrowLeft,
} from "lucide-react";

import {
  sectionTitles,
  sectionKeyMap,
  subRouteMap,
  holisticKeys,
} from "../data/schools/shared/holisticConfig";
import {
  dlpsHolisticEthos,
  dlpsSubsectionFeatures,
  dlpsCategoryThumbnails,
  dlpsAchievementsList,
} from "../data/schools/dlps/holisticData";
import {
  dlwsHolisticEthos,
  dlwsSubsectionFeatures,
  dlwsCategoryThumbnails,
  dlwsAchievementsList,
} from "../data/schools/dlws/holisticData";

import HolisticPillarsNav from "./school/holistic/HolisticPillarsNav";
import HolisticHeroBanner from "./school/holistic/HolisticHeroBanner";
import HolisticHighlightCard from "./school/holistic/HolisticHighlightCard";
import HolisticAchievementsList from "./school/holistic/HolisticAchievementsList";
import HolisticLightbox from "./school/holistic/HolisticLightbox";

const iconMap = {
  performingArts: Music,
  sports: Trophy,
  visualArts: Palette,
  scholastic: BookOpen,
  schoolExcursions: Compass,
  studentAchievements: Award,
};

export default function SchoolHolistic() {
  const { schoolId, sectionId } = useParams();
  const [searchParams] = useSearchParams();
  const { schools } = useSiteData();

  const activeBranch =
    schoolId && schools[schoolId] ? schoolId : "dlf-sahibabad";
  const currentSchool = schools[activeBranch];

  const theme = currentSchool?.theme || {
    primary: "brand-greenDeep",
    vibrant: "brand-greenVibrant",
    accent: "brand-gold",
    accentHex: "#C59B27",
  };

  const rawSectionParam = sectionId || searchParams.get("section");
  const initialSection =
    rawSectionParam && sectionKeyMap[rawSectionParam]
      ? sectionKeyMap[rawSectionParam]
      : "performingArts";

  const [activeSub, setActiveSub] = useState(initialSection);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    if (rawSectionParam && sectionKeyMap[rawSectionParam]) {
      setActiveSub(sectionKeyMap[rawSectionParam]);
    }
  }, [rawSectionParam]);

  const isDlws = activeBranch === "dlf-greater-noida";
  const ethos = isDlws ? dlwsHolisticEthos : dlpsHolisticEthos;
  const features = isDlws ? dlwsSubsectionFeatures : dlpsSubsectionFeatures;
  const thumbnails = isDlws ? dlwsCategoryThumbnails : dlpsCategoryThumbnails;
  const achievements = isDlws ? dlwsAchievementsList : dlpsAchievementsList;

  const ActiveIcon = iconMap[activeSub];

  return (
    <div className="pt-28 pb-16 min-h-screen text-brand-charcoal selection:bg-brand-gold/30">
      <div className="w-[96%] max-w-[1600px] mx-auto px-4 md:px-12 space-y-12">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <span
              className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}
            >
              School Life & Wings
            </span>
            <h2
              className={`font-serif text-3xl sm:text-4xl font-bold text-${theme.primary}`}
            >
              Student Life
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-1 font-inter font-medium">
              At DLF Schools, physical stamina, scholastic inquiry, and artistic
              expression are sculpted equally to nurture well-rounded global
              citizens.
            </p>
          </div>
          <Link
            to={`/school/${activeBranch}`}
            className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-${theme.primary} hover:opacity-80 transition-opacity shrink-0`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to School Home
          </Link>
        </div>

        {/* Holistic Layout: Left Menu / Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation Sidebar (Sticky on scroll) */}
          <HolisticPillarsNav
            activeBranch={activeBranch}
            activeSub={activeSub}
            setActiveSub={setActiveSub}
            theme={theme}
            thumbnailsToRender={thumbnails}
            iconMap={iconMap}
            subRouteMap={subRouteMap}
            keys={holisticKeys}
          />

          {/* Right Detailed Content Panel */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-150 shadow-xl overflow-hidden min-h-[450px] flex flex-col justify-between">
            <div className="p-6 sm:p-8 space-y-6">
              {/* Category Cover Image Banner with increased height and smart focal point */}
              <HolisticHeroBanner
                activeSub={activeSub}
                thumbnailsToRender={thumbnails}
                sectionTitles={sectionTitles}
                ActiveIcon={ActiveIcon}
                onOpenLightbox={setLightboxImage}
              />

              {/* Ethos Description */}
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-inter font-medium bg-gray-50/50 p-6 rounded-2xl border border-gray-100/50">
                {ethos[activeSub]}
              </p>

              {/* Highlighted Bullets List formatted into cards with picture slots */}
              {activeSub !== "studentAchievements" && (
                <div className="space-y-4 pt-2">
                  <h4
                    className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant} font-inter flex items-center gap-1.5`}
                  >
                    Key Highlights &amp; Offerings
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features[activeSub]?.map((feat, idx) => (
                      <HolisticHighlightCard
                        key={idx}
                        feat={feat}
                        idx={idx}
                        activeBranch={activeBranch}
                        activeSub={activeSub}
                        theme={theme}
                        onOpenLightbox={setLightboxImage}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Render Custom Student Life & DLF Student Guild Showcase */}
              {activeSub === 'studentLife' && (
                <div className="space-y-8 pt-4">
                  {/* Mission Quote Banner */}
                  <div className="bg-gradient-to-r from-emerald-900 via-brand-greenDeep to-emerald-950 text-white rounded-3xl p-8 shadow-lg space-y-4 relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 opacity-10 text-white pointer-events-none">
                      <Sparkles className="w-64 h-64" />
                    </div>
                    <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
                      <span>Sanctimonious Mission for 22+ Years</span>
                    </div>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                      "Transforming the World One Child at a Time"
                    </h4>
                    <p className="text-xs sm:text-sm text-white/85 font-inter leading-relaxed font-medium">
                      We believe that education should not confine learners to a syllabus but expose them to life. To be the individuals who will take charge of the world tomorrow, our children have to have the necessary <strong>Life Skills</strong> and the right <strong>Attitude</strong>. We offer numerous opportunities so Delfites not only discover themselves but also create themselves.
                    </p>
                  </div>

                  {/* Leadership & Entrepreneurship Pillars */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Box 1: DLF Student Guild */}
                    <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-150 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold">
                        <Award className="w-5 h-5" />
                      </div>
                      <h5 className="font-serif text-base font-bold text-brand-charcoal">DLF Student Guild &amp; Peer Educators</h5>
                      <p className="text-xs text-brand-muted font-inter leading-relaxed">
                        Comprising Peer Educators and Student Leaders, the Guild puts leadership into practice, inculcating a deep sense of responsibility and ownership. Chosen through a month-long arduous screening and sifting process by the school committee and outgoing Guild, members run House and School assemblies, promote mental health, self-esteem, integrity, and peer synergy.
                      </p>
                    </div>

                    {/* Box 2: Job Creators vs Job Seekers */}
                    <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-150 space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h5 className="font-serif text-base font-bold text-brand-charcoal">Class XI &amp; XII Entrepreneurial Cultivation</h5>
                      <p className="text-xs text-brand-muted font-inter leading-relaxed">
                        Opportunities to rub shoulders with real life are significantly greater for Class XI &amp; XII learners. Through high-level leadership roles and inculcating entrepreneurial skills, our young learners cultivate themselves to be <strong>job creators rather than job seekers</strong>.
                      </p>
                    </div>
                  </div>

                  {/* The 4 Planet Houses Showcase */}
                  <div className="bg-white rounded-3xl border border-gray-150 p-6 sm:p-8 space-y-6 shadow-xs">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">House Governance System</span>
                      <h4 className="font-serif text-lg font-bold text-brand-charcoal">The 4 Planet Houses</h4>
                      <p className="text-xs text-brand-muted font-inter mt-1">
                        Each student is allocated to one of four planet houses. Houses earn points throughout the year for academic success, team participation, and pastoral leadership, culminating in the Annual House Trophy.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Mercury */}
                      <div className="bg-amber-50/50 rounded-2xl p-5 border border-amber-200/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-[#f6f646] px-3 py-1 rounded-full border border-amber-300">Mercury</span>
                          <span className="text-[10px] font-bold text-amber-700">Yellow House</span>
                        </div>
                        <p className="text-[11px] text-brand-charcoal font-inter leading-relaxed pt-1">
                          Fostering intellect, rapid problem solving, inter-house debating, and academic excellence.
                        </p>
                      </div>

                      {/* Venus */}
                      <div className="bg-sky-50/50 rounded-2xl p-5 border border-sky-200/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider text-sky-950 bg-[#00b0f0] text-white px-3 py-1 rounded-full">Venus</span>
                          <span className="text-[10px] font-bold text-sky-700">Blue House</span>
                        </div>
                        <p className="text-[11px] text-brand-charcoal font-inter leading-relaxed pt-1">
                          Championing creative expression, fine arts, cultural events, and stagecraft mastery.
                        </p>
                      </div>

                      {/* Mars */}
                      <div className="bg-rose-50/50 rounded-2xl p-5 border border-rose-200/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider bg-[#eb2525] text-white px-3 py-1 rounded-full">Mars</span>
                          <span className="text-[10px] font-bold text-rose-700">Red House</span>
                        </div>
                        <p className="text-[11px] text-brand-charcoal font-inter leading-relaxed pt-1">
                          Embodying courage, high-intensity athletic fixtures, track events, and Sports Day triumphs.
                        </p>
                      </div>

                      {/* Jupiter */}
                      <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-200/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black uppercase tracking-wider bg-[#92d050] text-emerald-950 px-3 py-1 rounded-full font-bold">Jupiter</span>
                          <span className="text-[10px] font-bold text-emerald-700">Green House</span>
                        </div>
                        <p className="text-[11px] text-brand-charcoal font-inter leading-relaxed pt-1">
                          Nurturing wisdom, environmental sustainability drives, community outreach, and team synergy.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Student Manifesto Download Banner */}
                  <div className="bg-gradient-to-r from-brand-gold/10 via-amber-500/10 to-brand-gold/10 border border-brand-gold/30 rounded-2xl p-6 text-center space-y-3">
                    <h5 className="font-serif text-base font-bold text-brand-charcoal">Student Guild Manifesto &amp; Guidelines (2026-27)</h5>
                    <p className="text-xs text-brand-muted font-inter max-w-xl mx-auto">
                      Learners aiming for Student Guild leadership roles can access the official manifesto guidelines and application criteria for session 2026-27.
                    </p>
                    <button 
                      onClick={() => alert("Downloading official Student Manifesto Form 2026-27")}
                      className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-md cursor-pointer hover:scale-105"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Click here to Download Student Manifesto Form 2026-27</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Render Student Achievements Cards inside Student Achievements tab */}
              {activeSub === "studentAchievements" && (
                <HolisticAchievementsList
                  achievementsList={achievements}
                  theme={theme}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Resolution Photo Inspection */}
      <HolisticLightbox
        lightboxImage={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}
