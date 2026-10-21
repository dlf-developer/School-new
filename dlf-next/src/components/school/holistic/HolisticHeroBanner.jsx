import React from "react";
import { Maximize2 } from "lucide-react";
import { getObjectPosition } from "../../../data/schools/shared/holisticConfig";

export default function HolisticHeroBanner({
  activeSub,
  thumbnailsToRender,
  sectionTitles,
  ActiveIcon,
  onOpenLightbox,
}) {
  const currentThumbnail = thumbnailsToRender[activeSub];
  const currentTitle = sectionTitles[activeSub];

  return (
    <div
      onClick={() =>
        onOpenLightbox({
          src: currentThumbnail,
          title: currentTitle,
          caption: "Student Life Pillar • DLF Schools",
        })
      }
      className="w-full h-64 sm:h-80 md:h-[400px] rounded-3xl overflow-hidden relative shadow-lg cursor-pointer group"
    >
      <img
        src={currentThumbnail}
        alt={currentTitle}
        className={`w-full h-full object-cover ${getObjectPosition(currentThumbnail)} group-hover:scale-105 transition-transform duration-700 ease-out`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
      <div className="absolute bottom-5 left-6 right-6 text-white flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/20 shadow-md">
            <ActiveIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-serif text-lg sm:text-2xl font-bold leading-tight drop-shadow-md">
              {currentTitle}
            </h3>
            <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest drop-shadow-sm">
              Student Life Pillar • DLF Schools
            </span>
          </div>
        </div>
        <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white/90 group-hover:text-white group-hover:bg-white/30 transition-all border border-white/20 shadow-md shrink-0">
          <Maximize2 className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
}
