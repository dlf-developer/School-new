# DLF Schools Workspace Customization Rules

## Rule 1: Three-Way Strict Site & Data Isolation
The workspace contains 3 completely separate and isolated websites/portals:
1. **Master Group Website** (Routes: `/`, `/thinking-school`, `/vision-mission`, `/management`, `/pedagogy`, `/awards`, etc.)
2. **DLF Public School (DLPS Sahibabad)** (Routes: `/school/dlf-sahibabad/*`)
3. **DLF World School (DLWS Greater Noida)** (Routes: `/school/dlf-greater-noida/*`)

- **Strict Isolation Policy**:
  - All three websites are strictly isolated from each other.
  - School websites MUST NOT access, import, or display data, management profiles, or content from the Master website (e.g. Master Executive Director / Management profiles must not bleed into individual school pages).
  - Individual school websites must use only their own branch-specific leadership (e.g., Principal Dr. Seema Jerath for DLPS, Principal for DLWS), achievements, and campus content.
  - No website can access or share another website's content without explicit user confirmation and password verification.

## Rule 2: Master Group Website Password Protection
- **Master Site Security Lock**:
  - The **Master Group Website** (components, sections, pages, routes, and shared group logic) is **LOCKED**.
  - To make ANY modifications to the Master Group Website, the user MUST provide the authorization password: `dlf-master`.
  - If the user asks to edit the Master website without providing this password, the agent MUST refuse to make changes and ask for the password first.
