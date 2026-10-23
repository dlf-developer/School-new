# DLF Schools — React (Vite) Application Architecture & Project Structure

Please refer to the comprehensive structural documentation in:
- [STRUCTURE.md](file:///Users/mohd2002monish/Desktop/DLF-school/STRUCTURE.md)

---

## Quick Reference Summary

- **Framework**: Vite 8 + React 19 + React Router v7
- **Styling**: TailwindCSS v4 (`@tailwindcss/vite`)
- **Key Directories**:
  - `src/components/`: Master Group components (`Hero.jsx`, `Header.jsx`, `Footer.jsx`, `WhatSetsUsApart.jsx`, `ThinkingSchool.jsx`, etc.)
  - `src/components/school/`: Sub-modularized branch components (`academic-results/`, `admissions/`, `counselling/`, `curriculum/`, `holistic/`, `news/`)
  - `src/admin/`: Visual CMS with dedicated section editors
  - `src/data/`: Single Source of Truth (`siteData.js`, `schoolsData.js`, `ADMIN_SCHEMA.md`)
  - `src/hooks/`: Data bridge hook `useSiteData.js` with `localStorage` deep-merge overrides
- **Three-Way Strict Isolation**: Master Group Website vs DLPS Sahibabad vs DLWS Greater Noida
- **Master Group Password Protection**: `dlf-master` required for changes to Master site.

For full architectural breakdown, route tables, component trees, and workflows, read [STRUCTURE.md](file:///Users/mohd2002monish/Desktop/DLF-school/STRUCTURE.md).
