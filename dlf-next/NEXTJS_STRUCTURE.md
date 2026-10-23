# DLF Schools — Next.js Application Architecture & Project Structure

Please refer to the comprehensive structural documentation in:
- [STRUCTURE.md](file:///Users/mohd2002monish/Desktop/DLF-school/dlf-next/STRUCTURE.md)

---

## Quick Reference Summary

- **Framework**: Next.js 15.2.0 (App Router) + React 19 + MongoDB (Mongoose 8.12.0)
- **Styling**: TailwindCSS v4 (`@tailwindcss/postcss`)
- **Key Directories & Files**:
  - `src/app/`: Next.js 15 App Router pages and layouts
  - `src/app/school/[schoolId]/`: Dynamic branch routes (`academic-results/`, `admissions/`, `campus/`, `curriculum/`, `holistic-learning/`, `winning-school/`, etc.)
  - `src/app/api/`: REST APIs (`auth/`, `sections/`, `schools/`)
  - `src/lib/router-compat.jsx`: Router compatibility shim converting `react-router-dom` to Next.js App Router
  - `src/lib/mongodb.js`: Cached Mongoose connection handler
  - `src/models/`: `AdminUser.js`, `GlobalSection.js`, `School.js`
  - `src/middleware.js`: Edge JWT protection for `/admin` routes
  - `scripts/seed.mjs`: Database seeding script
- **Three-Way Strict Isolation**: Master Group Portal vs DLPS Sahibabad vs DLWS Greater Noida
- **Master Group Password Protection**: `dlf-master` required for Master site changes and administrative setup.

For full architectural breakdown, API schemas, route tables, and workflows, read [STRUCTURE.md](file:///Users/mohd2002monish/Desktop/DLF-school/dlf-next/STRUCTURE.md).
