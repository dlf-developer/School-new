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
  Sparkles,
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
                    <Sparkles className="w-3.5 h-3.5" /> Key Highlights &amp; Offerings
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
