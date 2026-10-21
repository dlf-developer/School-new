import React from "react";
import { CheckCircle2, Maximize2 } from "lucide-react";
import { getDlpsCardPhoto } from "../../../data/schools/dlps/holisticData";
import { getDlwsCardPhoto } from "../../../data/schools/dlws/holisticData";
import { getObjectPosition } from "../../../data/schools/shared/holisticConfig";

export default function HolisticHighlightCard({
  feat,
  idx,
  activeBranch,
  activeSub,
  theme,
  onOpenLightbox,
}) {
  const match = feat.match(/^([^(—–]+)(.*)$/);
  const title = match ? match[1].trim() : feat;
  const details = match ? match[2].trim() : "";

  const cardPhoto =
    activeBranch === "dlf-greater-noida"
      ? getDlwsCardPhoto(activeSub, title, idx)
      : getDlpsCardPhoto(activeSub, title, idx);

  return (
    <div className="bg-white rounded-2xl border border-gray-150 p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-3 group">
      {/* Picture Slot / Thumbnail with increased height, matched picture, and dynamic framing */}
      <div
        onClick={() =>
          onOpenLightbox({
            src: cardPhoto.src,
            title: title,
            caption: cardPhoto.caption || details,
          })
        }
        className="w-full h-56 sm:h-64 md:h-72 aspect-[16/11] rounded-2xl overflow-hidden bg-gray-100 relative border border-gray-100 shadow-inner flex items-center justify-center cursor-pointer group/img"
      >
        <img
          src={cardPhoto.src}
          alt={title}
          className={`w-full h-full object-cover ${getObjectPosition(cardPhoto.src)} group-hover/img:scale-105 transition-transform duration-500`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover/img:opacity-95 transition-opacity" />
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/25 shadow-sm truncate max-w-[80%]">
            {cardPhoto.caption || title}
          </span>
          <span className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 group-hover/img:text-white group-hover/img:bg-black/70 transition-all shadow">
            <Maximize2 className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Highlighted Bold Title & Text */}
      <div className="space-y-1">
        <div className="flex items-start gap-2">
          <CheckCircle2
            className={`w-4 h-4 text-${theme.accent} shrink-0 mt-0.5`}
          />
          <h5
            className={`font-bold text-xs text-${theme.primary} font-serif leading-tight`}
          >
            {title}
          </h5>
        </div>
        {details && (
          <p className="text-[11px] text-brand-muted font-inter leading-relaxed pl-6">
            {details}
          </p>
        )}
      </div>
    </div>
  );
}
