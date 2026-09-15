# ADMIN_SCHEMA.md — DLF Schools: Dynamic Data Contract

> **⚠️ MANDATORY READ FOR ALL AI MODELS AND DEVELOPERS**
> Any time you create or modify a page/component in this project, you MUST read this file first.
> It defines which data is admin-managed, where it lives, and how to wire up new dynamic fields.

---

## Architecture Overview

```
siteData.js          ← Static baseline defaults (version-controlled, safe to edit directly)
     │
     ▼
useSiteData()        ← React hook that merges defaults + localStorage overrides
     │
     ├──► Components  ← All consume data ONLY via this hook (never hardcode)
     │
     └──► Admin Panel ← Writes overrides back to localStorage via saveGlobal() / saveSchool()
```

**Rule**: Components MUST NOT contain hardcoded arrays, objects, or text strings that represent content (not structure). All such content belongs in `siteData.js` and must be read via `useSiteData()`.

---

## How to Add a New Dynamic Section (Step-by-Step)

### Step 1 — Add data to `siteData.js`
```js
// In globalData or a specific school object:
export const globalData = {
  // ... existing sections ...
  myNewSection: {
    title: 'My Title',
    items: [
      { id: 'item-1', text: 'First item' }
    ]
  }
}
```
**Rules for data fields:**
- Every array item must have a unique `id` field (used as React key and admin identifier).
- String fields hold text content. Image fields hold a URL string (starting with `/` for public assets or `https://` for external).
- Do NOT store React components, JSX, or function references in siteData.

### Step 2 — Read it in your component via the hook
```jsx
import { useSiteData } from '../hooks/useSiteData'

export default function MyComponent() {
  const { global } = useSiteData()
  const { title, items } = global.myNewSection

  return (
    <section>
      <h2>{title}</h2>
      {items.map(item => (
        <p key={item.id}>{item.text}</p>
      ))}
    </section>
  )
}
```

### Step 3 — Create an admin editor in `src/admin/sections/`
```jsx
// src/admin/sections/MyNewSectionEditor.jsx
import { useSiteData } from '../../hooks/useSiteData'

export default function MyNewSectionEditor() {
  const { global, saveGlobal } = useSiteData()
  const [data, setData] = useState(global.myNewSection)

  const handleSave = () => saveGlobal('myNewSection', data)

  return (/* form UI */)
}
```

### Step 4 — Register in `AdminApp.jsx` sidebar nav
Add your section to the `sections` array in `AdminApp.jsx`.

---

## Complete Field Registry

### `schoolsData[schoolId]` — Per-School Fields

| Field | Type | Admin Section | Description |
|---|---|---|---|
| `name` | string | Schools Editor | Full school name |
| `shortLocation` | string | Schools Editor | Short city label for nav |
| `cbseInfo` | string | Schools Editor | CBSE affiliation text |
| `phone` | string | Schools Editor | Contact phone number |
| `active` | boolean | Schools Editor | Show in mega menu? |
| `coverImage` | string (url) | Schools Editor | Optional hero cover override |
| `theme.accentHex` | string (hex) | Schools Editor | Accent color hex |
| `hero.image` | string (url) | Schools Editor | Hero background image |
| `hero.legacy` | string | Schools Editor | Badge text ("28+ Years...") |
| `hero.titleLine1` | string | Schools Editor | First word of title |
| `hero.italicWord1` | string | Schools Editor | Italic word after line 1 |
| `hero.underlineWord` | string | Schools Editor | Underlined word |
| `hero.vibrantWord` | string | Schools Editor | Colored word in line 3 |
| `hero.subtitle` | string | Schools Editor | Hero paragraph text |
| `hero.stats[]` | array | Schools Editor | Accolade strip items (value + label) |
| `admissions.guide` | string | Schools Editor | Intro admissions text |
| `admissions.steps[]` | array | Schools Editor | 3-step process (title, desc) |
| `curriculum.info` | string | Schools Editor | Curriculum intro text |
| `curriculum.stages[]` | array | Schools Editor | 4 stages (title, desc) |
| `holistic.performingArts` | string | Schools Editor | Arts program description |
| `holistic.sports` | string | Schools Editor | Sports program description |
| `campus.description` | string | Schools Editor | Campus page intro |
| `campus.images[]` | string[] | Schools Editor | Campus photo URLs |

---

### `globalData.ticker` — Marquee Items

| Field | Type | Admin Section |
|---|---|---|
| `items[].id` | string | Ticker Editor |
| `items[].icon` | string (lucide name) | Ticker Editor |
| `items[].text` | string | Ticker Editor |

---

### `globalData.stats` — Stats Strip

| Field | Type | Admin Section |
|---|---|---|
| `counters[].id` | string | Stats Editor |
| `counters[].target` | number | Stats Editor |
| `counters[].suffix` | string | Stats Editor |
| `counters[].label` | string | Stats Editor |
| `counters[].color` | string (tailwind class) | Stats Editor |

---

### `globalData.pillars` — "What Sets Us Apart" Cards

| Field | Type | Admin Section |
|---|---|---|
| `sectionLabel` | string | Pillars Editor |
| `sectionTitle` | string | Pillars Editor |
| `sectionSubtitle` | string | Pillars Editor |
| `cards[].id` | string | Pillars Editor |
| `cards[].icon` | string (lucide name) | Pillars Editor |
| `cards[].title` | string | Pillars Editor |
| `cards[].desc` | string | Pillars Editor |

---

### `globalData.curriculum` — Academic Progression Tabs

| Field | Type | Admin Section |
|---|---|---|
| `sectionLabel` | string | Curriculum Editor |
| `sectionTitle` | string | Curriculum Editor |
| `tabs[].id` | string (fixed: primary/middle/secondary/senior) | Curriculum Editor |
| `tabs[].label` | string | Curriculum Editor |
| `tabs[].title` | string | Curriculum Editor |
| `tabs[].desc` | string | Curriculum Editor |
| `tabs[].highlights[]` | string[] | Curriculum Editor |
| `tabs[].image` | string (url) | Curriculum Editor |

---

### `globalData.holistic` — Sports & Arts

| Field | Type | Admin Section |
|---|---|---|
| `sectionLabel` | string | Holistic Editor |
| `heroImage` | string (url) | Holistic Editor |
| `heroTitle` | string | Holistic Editor |
| `heroDesc` | string | Holistic Editor |
| `centers[].id` | string | Holistic Editor |
| `centers[].icon` | string (lucide name) | Holistic Editor |
| `centers[].title` | string | Holistic Editor |
| `centers[].desc` | string | Holistic Editor |

---

### `globalData.testimonials` — Testimonial Cards

| Field | Type | Admin Section |
|---|---|---|
| `sectionLabel` | string | Testimonials Editor |
| `sectionTitle` | string | Testimonials Editor |
| `cards[].id` | string | Testimonials Editor |
| `cards[].quote` | string | Testimonials Editor |
| `cards[].name` | string | Testimonials Editor |
| `cards[].role` | string | Testimonials Editor |
| `cards[].initials` | string | Testimonials Editor |

---

### `globalData.management` — Leadership Profiles

| Field | Type | Admin Section |
|---|---|---|
| `leaders[].id` | string | Management Editor |
| `leaders[].name` | string | Management Editor |
| `leaders[].role` | string | Management Editor |
| `leaders[].badge` | string | Management Editor |
| `leaders[].bio` | string (long text) | Management Editor |
| `leaders[].highlights[]` | string[] | Management Editor |
| `leaders[].icon` | string (lucide name) | Management Editor |

---

### `globalData.thinkingSchool` — Thinking School Page

| Field | Type | Admin Section |
|---|---|---|
| `heroTitle` | string | Thinking School Editor |
| `heroQuote` | string | Thinking School Editor |
| `heroIntro` | string | Thinking School Editor |
| `pillars[].id` | string | Thinking School Editor |
| `pillars[].title` | string | Thinking School Editor |
| `pillars[].desc` | string | Thinking School Editor |
| `gallery[].id` | string | Thinking School Editor |
| `gallery[].src` | string (url) | Thinking School Editor |
| `gallery[].title` | string | Thinking School Editor |
| `closingTitle` | string | Thinking School Editor |
| `closingText` | string | Thinking School Editor |
| `closingQuote` | string | Thinking School Editor |

---

### `globalData.visionMission` — Vision & Mission Page

| Field | Type | Admin Section |
|---|---|---|
| `heroTitle` | string | Vision Editor |
| `heroSubtitle` | string | Vision Editor |
| `vision.title` | string | Vision Editor |
| `vision.quote` | string | Vision Editor |
| `mission.title` | string | Vision Editor |
| `mission.text` | string | Vision Editor |
| `galleryImage` | string (url) | Vision Editor |
| `publications[].title` | string | Vision Editor |
| `publications[].url` | string | Vision Editor |

---

### `globalData.parentPartners` — Parents as Partners

| Field | Type | Admin Section |
|---|---|---|
| `heroTitle` | string | Parent Partners Editor |
| `playlist[].id` | string | Parent Partners Editor |
| `playlist[].title` | string | Parent Partners Editor |
| `playlist[].filename` | string (public path) | Parent Partners Editor |
| `playlist[].desc` | string | Parent Partners Editor |
| `initiatives[].id` | string | Parent Partners Editor |
| `initiatives[].title` | string | Parent Partners Editor |
| `initiatives[].desc` | string | Parent Partners Editor |
| `initiatives[].img` | string (public path) | Parent Partners Editor |
| `initiatives[].caption` | string | Parent Partners Editor |

---

### `globalData.awards` — Awards Page

| Field | Type | Admin Section |
|---|---|---|
| `heroTitle` | string | Awards Editor |
| `heroSubtitle` | string | Awards Editor |
| `categories[]` | string[] | Awards Editor |
| `hallOfFame[].id` | string | Awards Editor |
| `hallOfFame[].title` | string | Awards Editor |
| `hallOfFame[].by` | string | Awards Editor |
| `hallOfFame[].img` | string (public path) | Awards Editor |
| `hallOfFame[].year` | string | Awards Editor |
| `hallOfFame[].desc` | string | Awards Editor |
| `timeline[].id` | string | Awards Editor |
| `timeline[].year` | string | Awards Editor |
| `timeline[].award` | string | Awards Editor |
| `timeline[].by` | string | Awards Editor |
| `timeline[].cat` | string (must match categories[]) | Awards Editor |
| `timeline[].img` | string (public path, optional) | Awards Editor |

---

### `globalData.news` — DLF in the News

| Field | Type | Admin Section |
|---|---|---|
| `sectionLabel` | string | News Editor |
| `sectionTitle` | string | News Editor |
| `sectionSubtitle` | string | News Editor |
| `articles[].id` | string | News Editor |
| `articles[].source` | string | News Editor |
| `articles[].title` | string | News Editor |
| `articles[].desc` | string | News Editor |

---

## Persistence Model

| Phase | Storage | Scope |
|---|---|---|
| Phase 1 (current) | `siteData.js` (file) | Developer-only via code |
| Phase 2 | `localStorage` | Browser-local admin panel changes |
| Phase 3 | Supabase/Firebase | Real-time, cross-device persistent |

**localStorage keys used:**
- `dlf_admin_global` — JSON blob of global section overrides
- `dlf_admin_schools` — JSON blob of per-school section overrides

---

## Icon Name Reference

Components render icons by name (string). Valid icon names come from the `lucide-react` library. Common icons used in this project:

| String Value | Icon |
|---|---|
| `Award` | Trophy/award badge |
| `Leaf` | Nature/eco |
| `Globe` | International |
| `Users` | People/group |
| `Brain` | Intelligence |
| `Sparkles` | Innovation |
| `Heart` | Care |
| `GraduationCap` | Education |
| `Music` | Performing arts |
| `Palette` | Visual arts |
| `Terminal` | Technology |
| `Sprout` | Growth |
| `Shield` | Protection |
| `Calendar` | Events |
| `Compass` | Guidance |

To add a new icon, add the name string to siteData and import it in the component dynamically.

---

## Rules for New Pages

1. **All text content → siteData.js `globalData`** section (or school-specific in `schoolsData`).
2. **All image URLs → siteData.js** (public assets as `/filename.ext`, externals as full URL).
3. **Use `useSiteData()` hook** — never import siteData directly in components.
4. **Give every array item a unique `id`** (e.g., `'my-section-1'`).
5. **Create a matching editor** in `src/admin/sections/` for any new section.
6. **Register the editor** in `AdminApp.jsx`'s sidebar.
7. **Document new fields** in this file under a new table.

---

*Last updated: June 2026 | Version: 1.0.0 (Phase 1)*
