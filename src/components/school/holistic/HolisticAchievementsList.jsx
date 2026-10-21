import React from "react";

export default function HolisticAchievementsList({ achievementsList, theme }) {
  return (
    <div className="space-y-6 pt-2">
      <div className="space-y-1">
        <span
          className={`text-xs uppercase tracking-widest font-extrabold text-${theme.vibrant}`}
        >
          Delfite Trailblazers
        </span>
        <h4 className={`font-serif text-xl font-bold text-${theme.primary}`}>
          Hall of Fame & Multi-Dimensional Achievers
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievementsList.map((p, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-3 items-center"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-14 h-14 rounded-xl object-cover shrink-0 border border-gray-150"
            />
            <div className="space-y-0.5">
              <span
                className={`text-[8px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-${theme.primary}/10 text-${theme.primary}`}
              >
                {p.achievement}
              </span>
              <h5 className="font-serif text-sm font-bold text-brand-charcoal pt-0.5">
                {p.name}
              </h5>
              <p className="text-[10px] text-brand-muted leading-tight line-clamp-2">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
