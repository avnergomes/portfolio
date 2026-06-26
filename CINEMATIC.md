# CINEMATIC.md — Project Bible

The direction document for turning this portfolio into a **cinematic web** experience:
scroll as camera movement, intentional motion, premium restraint. Read this before
touching any animation code. Every rule here is binding.

---

## 0. Ground truth (read first — the original brief was wrong about the stack)

| Assumed in brief | Actual repo |
|---|---|
| React 18 + Vite SPA | **Vanilla static site.** Plain `index.html` (120 KB of real HTML), `css/styles.css`, `js/main.js`, `js/translations.js`. |
| npm build / `vite.config.js` | **No build step.** `.github/workflows/deploy.yml` uploads the repo root (`path: .`) as-is to GitHub Pages. |
| Bundled npm deps | Deps must be **vendored as local static files** (`js/vendor/*.min.js`) or CDN. We vendor. |
| Base path via Vite | Project page served at base **`/portfolio/`**. Asset refs are relative (`css/…`, `js/…`, `assets/…`) — keep them relative. |

**Implication that turns a constraint into a win:** because content is real HTML (not JS-rendered),
the site is *already* crawler-safe. The job is to add motion **without** regressing that.

### Existing foundation we keep and build on
- **Theme:** "Hallmark · Midnight" — dark, oklch tokens, already defined in `css/styles.css` `:root`.
- **Type:** Fraunces (display, italic 300) · Inter (body) · JetBrains Mono (mono). Loaded via Google Fonts.
- **i18n:** `data-i18n` attributes + `js/translations.js` (EN/PT/ES). English text lives in the DOM as default.
- **Sections (current story order):** `#home` (hero) → `#about` → `#services` → `#projects` → `#articles` → `#clients` → `#testimonials` → `#contact`.
- **JS wiring:** `js/main.js` handles nav, language, scroll-spy, project filters, scroll-listener reveals, tracking. Loaded at end of `<body>`.

### SEO / GEO surface that MUST survive untouched (or be adapted, never broken)
- 7× JSON-LD blocks (`Person`, `WebSite`, `ProfessionalService`, 4× `CreativeWork`) in `<head>`.
- Full meta set: description, keywords, robots, geo, canonical, `hreflang` (en/pt-BR/es/x-default), OpenGraph, Twitter card.
- `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`, `.well-known/security.txt`, Google verification file.
- **Rule:** no change to `<head>` metadata, no removal of any `data-i18n` node, no moving text into JS-only render paths.

---

## 1. Animation stack

| Concern | Tool | Rule of thumb |
|---|---|---|
| Smooth scrolling | **Lenis** | *All* scroll smoothing goes through Lenis. Remove CSS `scroll-behavior:smooth` and the JS `window.scrollTo({behavior:'smooth'})` so they don't fight Lenis. |
| Element motion | **GSAP** | *All* element movement is GSAP. No more raw scroll-listener `.reveal` toggling. |
| Scroll-driven motion | **GSAP ScrollTrigger** | Pin, scrub, and reveal-on-enter. Lenis drives the scroll position; ScrollTrigger reads it via `lenis.on('scroll', ScrollTrigger.update)` + `gsap.ticker`. |

### Delivery: vendored, not npm (because there's no bundler)
Download pinned UMD/min builds into `js/vendor/`, load them with plain `<script defer>` before `js/main.js`:
```
js/vendor/gsap.min.js
js/vendor/ScrollTrigger.min.js
js/vendor/lenis.min.js
```
- Pin exact versions (GSAP 3.x latest stable, Lenis 1.x latest stable). Verify against React-free vanilla usage (we use neither `@gsap/react` nor `lenis/react`).
- Same-origin = one less DNS/preconnect, better LCP, deploy stays self-contained. Combined weight ≈ 70 KB min (well under the 500 KB script budget; see §5).
- Compatibility: GSAP + ScrollTrigger + Lenis are framework-agnostic UMD globals (`window.gsap`, `window.ScrollTrigger`, `window.Lenis`). No React 18 concern because there is no React. Works on GitHub Pages static hosting with no server config.

### The SEO-safe gating pattern (non-negotiable)
Reveal "from" states (opacity:0, translateY) must **never** be the default in CSS, or a JS-less /
LLM crawler sees blank content. Gate every hidden-start state behind a class JS adds to `<html>`:
```js
document.documentElement.classList.add('cinematic'); // added only after GSAP inits
```
```css
/* visible by default; only hidden when JS+motion are active */
.cinematic .reveal-item { opacity: 0; }
@media (prefers-reduced-motion: reduce) { .cinematic .reveal-item { opacity: 1; } }
```
No JS → no `.cinematic` class → everything visible. Crawler-safe by construction.

---

## 2. Motion language — palette, type, rhythm

We are **not** adding a template's default motion. The visual direction is the existing Midnight
theme; the *motion* direction is "slow cinema": deliberate, weighted, never bouncy.

### Timing law (enforced in Phase 5 audit)
- **Minimum duration 0.6s.** Anything authored below 0.6s is extended to ≥ 0.6s. (Micro-hover feedback ≤ 0.2s is exempt — it's UI, not cinema.)
- **Eases: `power3` or `expo` only** for *entrances and camera moves*. No `back`, `elastic`, `bounce`, `sine` for content. Default `power3.out` for entrances, `expo.inOut` for camera moves. **Exempt:** ambient infinite loops (hero Ken Burns) use `power1.inOut`; scrubbed parallax uses `ease:'none'` (linear is correct when motion is tied 1:1 to scroll position).
- **Stagger 0.2s** between elements in *narrative sequences* (hero reveal, DataGeo pinned beat — matches the Phase 2 brief). Large content grids (project/service cards) use a tighter **0.12s** so a long grid doesn't drag; this is intentional and documented, not a violation.
- **No motion under 0.6s, no ease outside power3/expo** — this is the rule the final pass greps for.

### Palette (already in tokens — do not introduce new hues)
- Paper (bg): `--color-paper` dusk-blue near-black · Ink (text): `--color-ink`.
- Accent: warm amber `--color-accent` + ember `--color-accent-2`. Motion highlights use accent, sparingly.

### Type in motion
- Hero `h1` (Fraunces italic) is the one display moment — it gets the signature reveal.
- Body/labels use Inter; mono labels (JetBrains Mono) are good for "camera HUD" section markers.

---

## 3. Story arc (the cut list)

The site reads as a short film about who Avner is. Section order stays, but each gets a camera beat:

1. **Hero — `#home`** *(Phase 1)*. Fullscreen. Cinematic background = **satellite "Earth at night"** image (`assets/images/hero-geo.jpg`, Unsplash License, free/commercial) — dark navy field with golden city-light networks that read as geospatial data nodes, matching the Midnight palette (`--color-paper` dusk-blue) and amber accent exactly. Slow Ken Burns zoom, divergent scroll parallax, a cinematic colour-grade/legibility wash, and the canvas **data-mesh** layered on top (screen blend) so it reads as a live data overlay on the remote-sensing imagery — directly evoking the GIS / remote-sensing / data-science work. `h1` "Avner Gomes" + role reveal via GSAP. Scroll indicator that fades on first scroll. (`assets/images/hero-forest.jpg` kept in repo as an alternate.)
2. **Quem sou — `#about`** *(Phase 2 transition target)*. Hero → about is the first camera move: a pinned hand-off, not a jump cut. Stat cards (`11+`, `50+`, `8+`, `100%`) count/reveal in sequence.
3. **Carro-chefe — DataGeo Paraná** *(Phase 2)*. The hero project beat. Pinned ScrollTrigger sequence: elements enter at 0.2s intervals, `power3.out`, reading like a slow dolly across the 9-dashboard ecosystem. (Currently lives inside `#projects`; we elevate it to its own narrative beat.)
4. **Projetos — `#projects`** *(Phase 3)*. Reveal-on-scroll grid, cohesive. Reuse existing project cards + `projects/*.html` case studies. No invented content.
5. **Resultados / métricas** *(Phase 3)*. Verifiable, dated, concrete numbers pulled from existing copy: `50,000+ views` (DataGeo), `100% JSS`, `399 municípios`, `23 regional offices`, `8+ countries`, `50+ projects`, `27,338 buildings` (LiDAR London), `100,000+ ha` (IoF EUDR), `1.3M ha` (RESEX). Stays factual and LLM-citable.
6. **Contato — `#contact`** *(closing frame)*. Calm landing.

(`#articles` + `#testimonials` keep their place with the standard reveal-on-scroll treatment. `#clients` ("Trusted By") runs as an **infinite logo marquee**: JS clones the set once and glides the track `-50%` forever, `ease:'none'`, hover-slows, idles off-screen; without JS / reduced-motion it falls back to a static wrapped panel — fully crawlable. Each logo starts as a **text wordmark** and is upgraded to its official logo only if a file exists at `assets/clients/<slug>.(svg|png)` (probe-then-swap → no broken images, names stay crawlable). Logos render as uniform white silhouettes (`filter: brightness(0) invert(1)`) and reveal full colour on hover. See `assets/clients/README.md` for filenames. The hero background also gets a **divergent parallax**: on scroll the canopy sinks (`yPercent +24`) while the content rises and fades (`yPercent -16`, `opacity→0.15`), so foreground and background move on different vectors — a camera-dolly feel rather than a flat scroll.)

---

## 4. Performance & accessibility budget (inegociável)

- **60 fps on a mid-range phone.** Animate only `transform` and `opacity` (GPU-cheap). Never animate `width`, `top`, `box-shadow`, `filter` on scroll.
- **Lighthouse budget (`.github/lighthouse-budget.json`):** script ≤ 500 KB, total ≤ 3000 KB, FCP ≤ 5s, TTI ≤ 8s. Vendored libs must keep us inside this.
- **`prefers-reduced-motion: reduce`** is a first-class path, not an afterthought: Lenis disabled (native scroll), all GSAP entrances resolved to final state instantly, scroll-indicator/decoration animations off. The existing `@media (prefers-reduced-motion)` block in `css/styles.css` is extended, never removed.
- **Mobile (Phase 4):** simplify or drop heavy beats (pin/scrub) on small screens via `ScrollTrigger.matchMedia()` — *without* changing the desktop aesthetic. Verify Lenis ↔ ScrollTrigger don't conflict (single rAF loop, `ScrollTrigger.update` bound to Lenis).
- **No layout shift:** reserve space for the hero background; never inject motion that reflows.

---

## 5. Risk register

| Risk | Mitigation |
|---|---|
| Lenis vs ScrollTrigger double-rAF / jitter | One ticker: `lenis.on('scroll', ScrollTrigger.update)`, `gsap.ticker.add(t => lenis.raf(t*1000))`, `gsap.ticker.lagSmoothing(0)`. |
| Reveal states hide content from LLM crawlers | `.cinematic` gating class (§1). Default = visible. |
| Heavy hero background tanks mobile LCP | Phase 1 proposes options by weight; gate by `matchMedia` + `prefers-reduced-motion`. |
| Smooth-scroll fights (CSS + JS + Lenis) | Remove CSS `scroll-behavior:smooth` and `window.scrollTo({behavior})`; route anchors through `lenis.scrollTo`. |
| Vendored lib drift | Pin versions, note them here once installed. |
| Breaking i18n | Reveal wrappers must not remove or relocate `data-i18n` nodes. |

---

## 6. Phase map (gate: show locally before each commit; no push)

- **Phase 0** — this file + plan. *(awaiting OK)*
- **Phase 1** — cinematic hero (background options by weight, GSAP reveal, fading scroll cue).
- **Phase 2** — hero→about camera transition + DataGeo pinned sequence.
- **Phase 3** — projects reveal grid + metrics, reusing existing data.
- **Phase 4** — mobile audit, 60 fps, reduced-motion verified.
- **Phase 5** — artistic pass (enforce timing law), prod build check, base-path/deploy sanity, QA checklist (Lighthouse, mobile, reduced-motion, crawlability).
