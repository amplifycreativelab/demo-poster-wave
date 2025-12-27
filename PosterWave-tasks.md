# Development Tasks - PosterWave (Riso Poster Festival / Living Wall)

Source docs:

- `PosterWave/PosterWave.md`
- Reference format: `cafe-restaurant-demo/Demo 1 - Cafe - Restaurant - Tasks.md`

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; later phases depend on earlier setup.

## Phase 0 - Project Decisions

- [ ] Confirm GitHub Pages repo name for Astro `base` (must be `"/<repo>/"`).
- [ ] Confirm festival/event series placeholders (name, city, venues, dates, contact).
- [ ] Confirm primary conversions and routes: Buy tickets, View lineup.
- [ ] Confirm whether the optional lineup filter island is included (and choose Solid/Preact if yes).
- [ ] Confirm visual rules for chaos vs structure:
  - [ ] Poster overlap/rotation limit (max ~2 degrees)
  - [ ] No infinite scroll poster wall
  - [ ] No Tailwind utility soup approach (keep styling disciplined)

## Phase 1 - Astro Setup (SSG + GitHub Pages)

- [ ] Create Astro 4 project (static output / SSG).
- [ ] Configure `astro.config.mjs` with `site` + `base` placeholders for GitHub Pages.
- [ ] Ensure internal links and asset URLs work under the base path (no hard-coded `/`).
- [ ] Add/verify scripts: `dev`, `build`, `preview`.
- [ ] Add `src/assets/` placeholders:
  - [ ] poster images (events)
  - [ ] tape/stamp textures (if used)
  - [ ] OG image
- [ ] Keep JS minimal (no heavy canvas/WebGL).

## Phase 2 - Design System (Riso Ink)

- [ ] Implement tokens with hard limit: 3 inks + paper:
  - [ ] Paper `#F7F2E8`
  - [ ] Ink A `#1B1B1D` (text/outlines)
  - [ ] Ink B `#FF4D6D` (dates/CTAs/emphasis)
  - [ ] Ink C `#2D6BFF` (secondary emphasis/links)
  - [ ] Optional highlight `#FFE45C` (badges/sold-out labels only)
- [ ] Enforce color rules:
  - [ ] Never use more than 2 inks + paper per section
  - [ ] Avoid opacity stacking that muddies colors
  - [ ] White text discouraged unless required for contrast
- [ ] Texture/print effects:
  - [ ] Paper grain overlay (CSS background/pseudo-element)
  - [ ] Misregistration on headings via subtle text-shadow offsets (static, not animated)
  - [ ] Torn edges via clip-path + irregular borders (no rounded corners)
- [ ] Typography:
  - [ ] Headings: Bebas Neue OR Anton (all caps encouraged, tight tracking, large scale)
  - [ ] Body: Inter (calm and structured)
  - [ ] Optional accent font for dates/tags (mono/handwritten) sparingly
  - [ ] Max 2 font families total (if accent font is used, keep it extremely limited)
- [ ] Implement focus-visible styles and ensure contrast-safe ink combinations.
- [ ] Implement `prefers-reduced-motion` baseline (disable tearing/parallax effects).

## Phase 3 - Layout System (Collage Discipline)

- [ ] Implement an invisible 12-column grid scaffold.
- [ ] Allow posters to overlap/rotate/break edges, but keep internal alignment grid-snapped.
- [ ] Spacing rules:
  - [ ] Inconsistent outer spacing allowed
  - [ ] Internal spacing must remain predictable
- [ ] Ensure no poster obscures critical CTAs or key info (dates, venue, price).

## Phase 4 - Data Layer (Data-First, Poster-Second)

- [ ] Create `src/data/events.ts` (typed): date, venue, city, poster image, slug/id.
- [ ] Create `src/data/artists.ts` (typed): name, genre, day, priority/order.
- [ ] Create `src/data/tickets.ts` (typed): tier, price, availability (sold out, limited, available).
- [ ] Add enough sample data to validate hierarchy and scanning (lineup, schedule, ticket tiers).

## Phase 5 - Components (Deliverables)

- [ ] Build core components:
  - [ ] `PosterLayer.astro` (layered poster logic; overlap/rotation constraints)
  - [ ] `StampButton.astro` (physical CTA behavior; stamp press)
  - [ ] `LineupGrid.astro` (readable chaos; hierarchy-driven, not alphabetical)
  - [ ] `TicketStub.astro` (perforated ticket UI; tear-off stub styling)
- [ ] Optional:
  - [ ] `LineupFilterIsland.tsx` (progressive enhancement only; degrades gracefully without JS)

## Phase 6 - Pages (IA + Conversion)

### Home (`src/pages/index.astro`) (Poster wall overview)

- [ ] Poster hero section:
  - [ ] Layered poster cards (tape/stamps/torn edges)
  - [ ] Festival name dominates visually
  - [ ] Key info scannable: date range + primary venue/city
  - [ ] Primary CTAs: Buy tickets + View lineup
- [ ] Latest/featured events module (render from `events.ts`).

### Lineup (`src/pages/lineup/index.astro`) (core page)

- [ ] Lineup grid with large artist names and genre chips (ink-only badges).
- [ ] Visual hierarchy > alphabetical order (use `priority`/day grouping).
- [ ] If island exists, add genre/day filter with graceful no-JS fallback.

### Schedule (`src/pages/schedule/index.astro`)

- [ ] Render schedule view grouped by day/time from `events.ts`/`artists.ts`.
- [ ] Ensure date/time readability in under 3 seconds.

### Tickets (`src/pages/tickets/index.astro`) (core conversion page)

- [ ] Ticket tiers styled as tear-off stubs with perforation illusion.
- [ ] Sold out uses stamped overlay (not disabled UI).
- [ ] Tickets CTA always obvious and not obscured by collage layers.

### Info (`src/pages/info/index.astro`)

- [ ] Venue info, rules, and FAQ content (structured and scannable).

### Contact (`src/pages/contact/index.astro`)

- [ ] Contact/enquiry UI (non-functional OK) with accessible labels.

## Phase 7 - Motion (Stamp & Tear) + Reduced Motion

- [ ] Section reveals: mask/clip-path tear-in (fast, sharp).
- [ ] CTA interaction: stamp press effect (scale + slight offset on click).
- [ ] Collage depth: subtle parallax between layers (only if it does not harm readability).
- [ ] Motion rules:
  - [ ] Fast, sharp, purposeful (avoid "app-like" easing)
  - [ ] No heavy JS animation libs
- [ ] Reduced motion behavior (`prefers-reduced-motion: reduce`):
  - [ ] Disable tearing/parallax/clip-path effects
  - [ ] Use simple opacity/translate only where needed

## Phase 8 - UX & Conversion Checks

- [ ] Tickets CTA is visually obvious on every page (especially mobile).
- [ ] Dates, venue, and price are scannable in under 3 seconds.
- [ ] Decorative chaos never hides meaning or actions.
- [ ] Keyboard navigation works across posters, grids, and ticket tiers.

## Phase 9 - Performance, SEO & Deployment

- [ ] Performance:
  - [ ] Keep JS minimal; no canvas/WebGL
  - [ ] Use `astro:assets` for responsive images (lazy-load, formats, sizing)
- [ ] SEO:
  - [ ] Page titles + meta descriptions (conversion-focused, not generic)
  - [ ] Canonical URLs respect `site` + `base`
  - [ ] OpenGraph + Twitter meta with placeholder OG image
- [ ] Verify build works under GitHub Pages base path (no broken links/assets).
- [ ] Add `README.md` with install/dev/build/preview + GH Pages base path notes + reduced motion notes.

## Optional / Bonus

- [ ] Add print stylesheet for schedule/tickets (clean, ink-friendly).
