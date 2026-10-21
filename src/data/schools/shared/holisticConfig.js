// holisticConfig.js - Shared routing, title mappings and visual presets for Student Life & Holistic Learning

export const sectionTitles = {
  performingArts: "Performing Arts (Dance, Music, Theatre & Stagecraft)",
  sports: "Sports Development & Athletic Facilities",
  visualArts: "Visual Arts, Clay Modeling & Design Studio",
  scholastic: "Scholastic Learning Spaces, Labs & Library",
  schoolExcursions: "School Excursions & Experiential Learning Journeys",
  studentAchievements: "Student Achievements & Delfite Trailblazers",
};

export const sectionKeyMap = {
  "performing-arts": "performingArts",
  performingArts: "performingArts",
  "sports-development": "sports",
  sports: "sports",
  "visual-arts": "visualArts",
  visualArts: "visualArts",
  scholastic: "scholastic",
  "skill-enrichment": "scholastic",
  skillEnrichment: "scholastic",
  "school-excursions": "schoolExcursions",
  schoolExcursions: "schoolExcursions",
  "student-achievements": "studentAchievements",
  studentAchievements: "studentAchievements",
};

export const subRouteMap = {
  performingArts: "performing-arts",
  sports: "sports-development",
  visualArts: "visual-arts",
  scholastic: "scholastic",
  schoolExcursions: "school-excursions",
  studentAchievements: "student-achievements",
};

export const holisticKeys = [
  "performingArts",
  "sports",
  "visualArts",
  "scholastic",
  "schoolExcursions",
  "studentAchievements",
];

export const getObjectPosition = (src) => {
  if (!src) return "object-center";
  if (src.includes("instrumental")) return "object-[center_15%]";
  if (
    src.includes("art-design") ||
    src.includes("dance") ||
    src.includes("vocal") ||
    src.includes("clay") ||
    src.includes("sketching") ||
    src.includes("theatre-drama") ||
    src.includes("canvas-painting")
  ) {
    return "object-[center_20%]";
  }
  if (
    src.includes("football") ||
    src.includes("skating") ||
    src.includes("pickleball") ||
    src.includes("tennis") ||
    src.includes("badminton")
  ) {
    return "object-[center_35%]";
  }
  if (src.includes("auditorium") || src.includes("swimming-pool")) {
    return "object-center";
  }
  return "object-center";
};
