import React from "react";
import { Link } from "react-router-dom";

export default function HolisticPillarsNav({
  activeBranch,
  activeSub,
  setActiveSub,
  theme,
  thumbnailsToRender,
  iconMap,
  subRouteMap,
  keys,
}) {
  return (
    <div className="lg:col-span-4 lg:sticky lg:top-32 z-10 bg-white rounded-3xl border border-gray-150 shadow-md p-5 space-y-3">
      <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 block px-2 mb-1">
        Student Life Wings
      </span>
      <div className="space-y-2">
        {keys.map((key) => {
          const Icon = iconMap[key];
          const isActive = activeSub === key;
          const label =
            key === "performingArts"
              ? "Performing Arts"
              : key === "sports"
                ? "Sports Development"
                : key === "visualArts"
                  ? "Visual Arts"
                  : key === "scholastic"
                    ? "Scholastic"
                    : key === "schoolExcursions"
                      ? "School Excursions"
                      : "Student Achievements";

          return (
            <Link
              key={key}
              to={`/school/${activeBranch}/holistic-learning/${subRouteMap[key]}`}
              onClick={() => setActiveSub(key)}
              className={`w-full text-left flex items-center gap-3.5 p-3 rounded-2xl transition-all border cursor-pointer ${
                isActive
                  ? `bg-${theme.primary} text-white shadow-md border-transparent`
                  : "bg-white hover:bg-gray-50 text-brand-charcoal border-gray-100"
              }`}
            >
              <div className="w-14 h-12 rounded-xl overflow-hidden shrink-0 relative bg-gray-100 shadow-inner flex items-center justify-center">
                <img
                  src={thumbnailsToRender[key]}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <span className="font-bold text-xs uppercase tracking-wider leading-snug">
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
