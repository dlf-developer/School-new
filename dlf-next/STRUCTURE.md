# DLF Schools — Next.js Application Architecture & Project Structure

Comprehensive technical documentation and architectural reference for the DLF Schools Next.js 15 (App Router) full-stack application.

---

## 1. Executive Summary & Tech Stack

The `dlf-next` application is a modern full-stack web application built on **Next.js 15 (App Router)** and **React 19**, backed by **MongoDB**. It powers the DLF Schools digital presence across three strictly isolated portals:
1. **Master Group Portal** — Central corporate identity, Group Leadership, Thinking School Pedagogy, Accolades, Admissions, and Multi-Campus Gateway.
2. **DLF Public School (DLPS Sahibabad)** — Dynamic branch portal with campus details, CBSE/Cambridge pathways, branch leadership, and student life.
3. **DLF World School (DLWS Greater Noida)** — Dynamic branch portal with campus features, holistic curriculum, and admissions.

### Core Technology Stack
- **Framework**: [Next.js 15](https://nextjs.org) (App Router, Server Components & Client Components)
- **UI Library**: React 19 (`react` 19.0.0, `react-dom` 19.0.0)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com) via `@tailwindcss/postcss` and `postcss`
- **Database & ODM**: [MongoDB](https://www.mongodb.com) via [Mongoose 8.12.0](https://mongoosejs.com)
- **Authentication**: `bcryptjs` (password hashing) + `jsonwebtoken` (HTTP-only JWT session cookies)
- **Motion & Smooth Scrolling**: [GSAP 3.15](https://greensock.com/gsap) and [Lenis 1.3](https://lenis.darkroom.engineering)
- **Iconography**: [Lucide React](https://lucide.dev)
- **Compatibility Layer**: Custom `router-compat.jsx` with Webpack resolution alias for drop-in `react-router-dom` interoperability.

---

## 2. Directory Tree & File Organization

```
dlf-next/ (Next.js Application Root)
├── next.config.mjs              # Next.js configuration, react-router-dom alias, unoptimized images
├── postcss.config.mjs           # PostCSS configuration for TailwindCSS v4
├── jsconfig.json                # Compiler options & path alias (@/* -> ./src/*)
├── package.json                 # Next.js scripts and backend dependencies
├── .env.example                 # Template for MongoDB URI, JWT secret, and admin credentials
├── .env.local                   # Local environment variable configuration
│
├── scripts/
│   └── seed.mjs                 # Database seeding script (populates MongoDB from siteData.js)
│
├── public/                      # Static assets (images, crest, favicon)
│
└── src/
    ├── middleware.js            # Edge Middleware for admin route protection & JWT verification
    │
    ├── lib/                     # Server & Client Infrastructure
    │   ├── mongodb.js           # Cached MongoDB connection handler for Mongoose
    │   ├── auth.js              # JWT sign, verify, token cookie helpers
    │   └── router-compat.jsx    # Client compatibility layer replicating react-router-dom APIs
    │
    ├── models/                  # Mongoose Database Models
    │   ├── AdminUser.js         # CMS Admin accounts (email, hashed password, role)
    │   ├── GlobalSection.js     # Master group dynamic CMS sections (key, data, updatedBy)
    │   └── School.js            # Branch dynamic CMS data (schoolId, name, data, updatedBy)
    │
    ├── hooks/
    │   └── useSiteData.js       # Dynamic data bridge fetching from /api/sections & /api/schools
    │
    ├── app/                     # Next.js 15 App Router
    │   ├── layout.jsx           # Root layout HTML shell, fonts, metadata & AppShell wrapper
    │   ├── globals.css          # TailwindCSS v4 @theme tokens, custom scrollbar, noise overlay
    │   ├── page.jsx             # Master Homepage (/)
    │   │
    │   ├── (Master Group Routes)
    │   │   ├── thinking-school/page.jsx       # /thinking-school
    │   │   ├── vision-mission/page.jsx        # /vision-mission
    │   │   ├── management/page.jsx            # /management
    │   │   ├── pedagogy/                      # /pedagogy & /pedagogy/[stageId]
    │   │   │   ├── page.jsx
    │   │   │   └── [stageId]/page.jsx
    │   │   ├── awards/page.jsx                # /awards
    │   │   ├── what-sets-us-apart/page.jsx    # /what-sets-us-apart
    │   │   ├── alumni/page.jsx                # /alumni
    │   │   ├── parent-partners/page.jsx       # /parent-partners
    │   │   ├── counselling/page.jsx           # /counselling
    │   │   ├── admissions/page.jsx            # /admissions
    │   │   ├── admission-enquiry/page.jsx     # /admission-enquiry
    │   │   ├── mandatory-disclosures/page.jsx # /mandatory-disclosures
    │   │   ├── useful-links/page.jsx          # /useful-links
    │   │   ├── virtual-tour/page.jsx          # /virtual-tour
    │   │   ├── sports-arena/page.jsx          # /sports-arena
    │   │   ├── careers/page.jsx               # /careers
    │   │   ├── contact/page.jsx               # /contact
    │   │   └── news/page.jsx                  # /news
    │   │
    │   ├── school/                            # Dynamic School Branch Routes
    │   │   └── [schoolId]/                    # /school/:schoolId
    │   │       ├── page.jsx                   # School Homepage
    │   │       ├── campus/page.jsx            # /school/:schoolId/campus
    │   │       ├── leadership/page.jsx        # /school/:schoolId/leadership
    │   │       ├── principal-desk/page.jsx    # /school/:schoolId/principal-desk
    │   │       ├── admissions/page.jsx        # /school/:schoolId/admissions
    │   │       ├── curriculum/                # /school/:schoolId/curriculum
    │   │       │   ├── page.jsx
    │   │       │   └── [pathway]/page.jsx     # /school/:schoolId/curriculum/:pathway
    │   │       ├── academic-results/page.jsx  # /school/:schoolId/academic-results
    │   │       ├── holistic-learning/page.jsx # /school/:schoolId/holistic-learning
    │   │       ├── winning-school/page.jsx    # /school/:schoolId/winning-school
    │   │       ├── editorials/page.jsx        # /school/:schoolId/editorials
    │   │       ├── disclosures/page.jsx       # /school/:schoolId/disclosures
    │   │       ├── useful-links/page.jsx      # /school/:schoolId/useful-links
    │   │       ├── virtual-tour/page.jsx      # /school/:schoolId/virtual-tour
    │   │       └── contact/page.jsx           # /school/:schoolId/contact
    │   │
    │   ├── admin/                             # CMS Administrative Interface
    │   │   ├── page.jsx                       # /admin dashboard
    │   │   └── login/page.jsx                 # /admin/login gate
    │   │
    │   └── api/                               # REST API Endpoints
    │       ├── auth/                          # Authentication Endpoints
    │       │   ├── login/route.js             # POST /api/auth/login
    │       │   ├── logout/route.js            # POST /api/auth/logout
    │       │   └── me/route.js                # GET /api/auth/me
    │       ├── sections/                      # Master CMS Dynamic Sections
    │       │   ├── route.js                   # GET /api/sections, PUT /api/sections
    │       │   └── [key]/route.js             # GET & PUT /api/sections/:key
    │       └── schools/                       # Branch CMS Dynamic Data
    │           ├── route.js                   # GET /api/schools, PUT /api/schools
    │           └── [schoolId]/route.js        # GET & PUT /api/schools/:schoolId
    │
    ├── components/              # UI Components (Matching React Vite App)
    │   ├── AppShell.jsx         # Layout wrapper: Header, Footer, Top Progress Loader, Lenis
    │   ├── Header.jsx           # Mega menu, school switcher, mobile navigation
    │   ├── Footer.jsx           # Multi-column group footer & campus links
    │   ├── Hero.jsx             # Video Hero banner with title typography & action buttons
    │   ├── Ticker.jsx           # Animated announcement ticker
    │   ├── Stats.jsx            # Dynamic stats counter
    │   ├── PortalHome.jsx       # Campus gateway cards
    │   ├── WhatSetsUsApart.jsx  # Differentiators & interactive pillars
    │   ├── MasterPedagogy.jsx   # 5-stage pedagogy overview
    │   ├── Pedagogy.jsx         # Detailed interactive pedagogy framework
    │   ├── ThinkingSchool.jsx   # Dedicated Thinking School page
    │   ├── VisionMission.jsx    # Vision, Mission, and Motto
    │   ├── Management.jsx       # Executive leadership profiles
    │   ├── Awards.jsx           # Honors and awards gallery
    │   ├── Alumni.jsx           # Alumni network & showcase
    │   ├── ParentPartners.jsx   # Parent partnership programs
    │   ├── SchoolWinning.jsx    # Sports and academic trophies
    │   ├── VideoTestimonials.jsx# Video modal carousel
    │   ├── CbseResults.jsx      # Class X & XII board topper cards
    │   ├── SchoolAcademicResults.jsx # Board results & gazette modal
    │   ├── OurCampus.jsx        # Campus facilities and labs
    │   ├── SchoolLeadership.jsx # Branch leadership & faculty heads
    │   ├── SchoolPrincipalDesk.jsx # Principal desk editorial message
    │   ├── Admissions.jsx       # Admissions overview section
    │   ├── AdmissionEnquiry.jsx # Admission registration form
    │   ├── SchoolAdmissions.jsx # Branch-specific admission steps
    │   ├── Curriculum.jsx       # CBSE & Cambridge pathways
    │   ├── Holistic.jsx         # Holistic overview section
    │   ├── SchoolHolistic.jsx   # Multi-pillar holistic activities
    │   ├── SchoolCounselling.jsx# Mental health, pastoral care & child safety
    │   ├── SchoolEditorials.jsx # Student articles & publications
    │   ├── SchoolNews.jsx       # Press releases & school events
    │   ├── SchoolVirtualTour.jsx# 360 degree virtual tour player
    │   ├── Disclosures.jsx      # Branch mandatory CBSE public disclosure tables
    │   ├── MandatoryDisclosures.jsx # Group statutory CBSE disclosures
    │   ├── UsefulLinks.jsx      # Fee structures & circulars
    │   ├── CommonPages.jsx      # Careers, sports arena, and contact views
    │   ├── ContactHome.jsx      # Interactive contact form & maps
    │   ├── SubtleGradientBackground.jsx # Ambient gradient background layer
    │   ├── InteractiveBackground.jsx # WebGL/2D canvas particle effect
    │   ├── ScrollToTop.jsx      # Route-change auto-scroller
    │   ├── SmoothScroll.jsx     # Lenis smooth-scroll wrapper
    │   ├── ImageWithLoader.jsx  # Image loader with blur skeleton
    │   ├── Icons.jsx            # Vector SVG icons
    │   └── school/              # Modularized branch subcomponents
    │       ├── academic-results/
    │       ├── admissions/
    │       ├── counselling/
    │       ├── curriculum/
    │       ├── holistic/
    │       └── news/
    │
    ├── admin/                   # Full CMS Editor Panels
    │   ├── AdminLogin.jsx       # Password authentication form
    │   ├── AdminApp.jsx         # Live CMS dashboard with MongoDB persistence
    │   ├── components/          # Reusable editor controls (CardRepeater, FieldEditor, SaveBar)
    │   └── sections/            # Visual editors for all 13 dynamic CMS models
    │
    ├── data/                    # Static Baseline Data & Schemas
    │   ├── siteData.js          # Master static fallback data
    │   ├── schoolsData.js       # Branch static configurations
    │   ├── ADMIN_SCHEMA.md      # Field contracts for CMS
    │   └── schools/             # Modular branch data (dlps/, dlws/, shared/)
    │
    └── utils/
        └── videoHelper.js       # Video URL parser (YouTube/Vimeo embeds & thumbnails)
```

---

## 3. Router Compatibility Layer Deep Dive

One of the key architectural innovations in `dlf-next` is the **Router Compatibility Layer** located at `src/lib/router-compat.jsx`.

### Webpack Alias Resolution (`next.config.mjs`)
```javascript
webpack: (config) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-router-dom': path.resolve(__dirname, 'src/lib/router-compat.jsx'),
  };
  return config;
}
```

### How It Works
Any component importing from `react-router-dom` is transparently routed to `src/lib/router-compat.jsx`:
- `<Link to="/path">` is mapped to `<NextLink href="/path">`.
- `useLocation()` uses `usePathname()` from `next/navigation` to return `{ pathname, search, hash, state }`.
- `useParams()` delegates to `useParams()` from `next/navigation`.
- `useNavigate()` wraps `useRouter()` (`router.push()`, `router.replace()`, `router.back()`).
- `useSearchParams()` maps to `useSearchParams()` from `next/navigation`.
- `<Navigate to="..." replace />` performs an imperative programmatic navigation via `useRouter()`.

**Benefit**: Over 50+ rich components and 13 CMS section editors can be used without modifying routing imports or rewriting JSX links!

---

## 4. Backend Architecture, Database & REST APIs

### 1. Database Connection (`src/lib/mongodb.js`)
Maintains a global connection cache (`global.mongoose`) to reuse connections across serverless API invocations and edge requests:
```javascript
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dlf_schools'
// Cached connection logic prevents connection exhaustion during HMR and serverless scaling
```

### 2. Mongoose Schemas & Models (`src/models/`)
- **`AdminUser`**:
  - `email`: Unique lowercase email string (e.g. `admin@dlfschools.com`)
  - `password`: Bcrypt-hashed password (default password `dlf-master`)
  - `name`: Admin display name
  - `role`: Role string (`superadmin`, `editor`)
  - `createdAt`, `updatedAt`: Timestamps
- **`GlobalSection`**:
  - `key`: Unique section key (`hero`, `ticker`, `stats`, `management`, `awards`, `pedagogy`, etc.)
  - `data`: Arbitrary JSON object storing dynamic section data
  - `updatedBy`: User email or `'system-seed'`
  - `updatedAt`: Timestamp
- **`School`**:
  - `schoolId`: Unique slug (`dlf-sahibabad`, `dlf-greater-noida`)
  - `name`: School display name
  - `data`: Complete isolated branch JSON object (hero, admissions, campus, etc.)
  - `updatedBy`: User email or `'system-seed'`
  - `updatedAt`: Timestamp

### 3. API Endpoints Matrix

| HTTP Method | Route | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/auth/login` | Authenticates admin using bcrypt; sets HTTP-only `token` cookie | No |
| `POST` | `/api/auth/logout` | Clears authentication cookie | No |
| `GET` | `/api/auth/me` | Validates JWT from cookie and returns current user info | Yes |
| `GET` | `/api/sections` | Fetches all global CMS sections as key-value pairs | No |
| `PUT` | `/api/sections` | Updates multiple global sections in MongoDB | Yes |
| `GET` | `/api/sections/[key]` | Fetches a single section by key | No |
| `PUT` | `/api/sections/[key]` | Updates a single section by key | Yes |
| `GET` | `/api/schools` | Fetches all branch configurations keyed by `schoolId` | No |
| `PUT` | `/api/schools` | Updates multiple schools in MongoDB | Yes |
| `GET` | `/api/schools/[schoolId]` | Fetches data for a specific school | No |
| `PUT` | `/api/schools/[schoolId]` | Updates data for a specific school | Yes |

---

## 5. Client Data Bridge & Synchronization (`src/hooks/useSiteData.js`)

In `dlf-next`, `useSiteData()` acts as a real-time reactive bridge:
1. **Initial Load**: Runs `fetchData()` on mount to query `/api/sections` and `/api/schools` simultaneously.
2. **Graceful Fallback**: If MongoDB or the API is unavailable (e.g. during offline development), it automatically falls back to the static `siteData.js` dataset.
3. **Optimistic Updates**: Calling `saveGlobalSection(key, data)` or `saveSchool(schoolId, data)` immediately updates the client React state for instant UI feedback, and persists the payload to MongoDB via a `PUT` request.

---

## 6. Edge Middleware & Security Architecture (`src/middleware.js`)

- Inspects incoming requests to `/admin/*` and protected `/api/admin/*` routes.
- Checks for the presence of the signed HTTP-only JWT token (`req.cookies.get('token')`).
- If unauthenticated and accessing `/admin`, redirects the user to `/admin/login`.
- If already authenticated and accessing `/admin/login`, redirects directly to `/admin`.

---

## 7. Strict Site Isolation & Master Site Security Lock

1. **Three-Way Strict Isolation Policy**:
   - Master Group Website, DLPS Sahibabad, and DLWS Greater Noida are completely isolated.
   - Dynamic school routes (`/school/[schoolId]/*`) only load data belonging to that specific branch.
   - Master leadership and Executive Director bios never bleed into branch leadership views.
2. **Master Site Password Lock**:
   - Modifying Master Group sections requires the authorization password `dlf-master`.
   - Seeding and initial superadmin user setup default to `dlf-master`.

---

## 8. Developer Commands & Workflows

### Setup Environment
Create a `.env.local` file based on `.env.example`:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/dlf_schools
JWT_SECRET=dlf_schools_jwt_secret_key_2026_super_secure
ADMIN_DEFAULT_EMAIL=admin@dlfschools.com
ADMIN_DEFAULT_PASSWORD=dlf-master
```

### Run Seeding Script
Populate MongoDB with default accounts and content from `siteData.js`:
```bash
npm run seed
```

### Development & Production Commands
```bash
# Start Next.js development server on port 3000
npm run dev

# Build production bundle with Next.js App Router optimizations
npm run build

# Start Next.js production server on port 3000
npm run start

# Run ESLint checks
npm run lint
```
