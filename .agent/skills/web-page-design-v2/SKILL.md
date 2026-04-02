---
name: web-page-design
description: Design and build complete, production-ready web pages with strong visual hierarchy, UX best practices, responsive layouts, and a distinctive aesthetic. Use this skill whenever the user asks to create a landing page, home page, about page, product page, portfolio page, pricing page, blog page, or any full-page web design. Also triggers when the user wants to redesign an existing page, improve a page's layout, add sections to a page, or asks for help with page structure, visual hierarchy, above-the-fold design, hero sections, CTAs, or page flow. If the user mentions "page", "site", "website", "landing", "homepage", or asks about converting a design into code, use this skill.
license: MIT
compatibility: No external dependencies required. Outputs plain HTML/CSS/JS or React/JSX. Works in any environment with a browser preview.
---

## Platform Compatibility

This skill follows the [Agent Skills open spec](https://agentskills.io) and works across:

| Platform | Skill Path | Notes |
|---|---|---|
| **Google Antigravity** | `.agents/skills/web-page-design/` | Use Manager View to dispatch design tasks; agents can preview output in the built-in browser |
| **Trae IDE** | `.agents/skills/web-page-design/` | Use Builder Mode for full-page scaffolding; multimodal chat accepts screenshots/mockups as input |
| **Claude Code** | `.claude/skills/web-page-design/` | Invoke via `/web-page-design` or automatic trigger |
| **Claude.ai** | Install as `.skill` file via Settings | Works in chat interface |

### Antigravity-specific tips
- In **Manager View**, dispatch a design agent with a high-level goal: *"Build a landing page for [product]. Use the web-page-design skill."*
- The built-in **Browser Agent** can render and screenshot the output automatically — ask it to validate the result visually.
- Use **Artifacts** (task list + screenshots) to review before accepting.
- Prefer **Gemini 3 Pro** or **Claude Opus 4.6** for complex multi-section pages.

### Trae-specific tips
- Use **Builder Mode** for full project scaffolding from a natural language description.
- Paste a screenshot or Figma mockup directly into the chat — Trae's multimodal input will use it as a visual reference.
- Configure a `.rules` file in your project to lock in preferred stack (e.g., always use Tailwind, always dark mode) across all sessions.
- Use `@Agent` to invoke this skill explicitly from the chat panel.

---

# Web Page Design Skill

This skill guides the design and implementation of complete, visually distinctive, production-ready web pages. It covers the full process: from understanding purpose and audience to outputting polished, responsive HTML/CSS/JS (or React).

---

## Phase 1 — Discovery & Strategy

Before writing a single line of code, answer these questions:

### 1. Purpose
- What is this page trying to accomplish? (sell, inform, convert, showcase, recruit?)
- What is the **primary call to action**?
- Who is the audience? (age range, technical level, tone expectations)

### 2. Content Inventory
List every section the page needs. Common patterns:
- **Landing/Hero**: Headline + subheadline + CTA + visual
- **Social proof**: Testimonials, logos, stats
- **Feature/benefit blocks**: What they get, why they care
- **How it works**: Steps, process, timeline
- **Pricing**: Tiers, comparison
- **FAQ**: Accordion or grid
- **Footer**: Links, legal, social

Ask the user if they haven't provided content. Never invent placeholder content unless they explicitly request it.

### 3. Inspiration & Reference
Ask if they have visual references or brand guidelines. If not, you choose a bold aesthetic direction (see Phase 2).

---

## Phase 2 — Design Direction

**Before coding**, commit to a clear aesthetic. Pick one that fits the brand/purpose:

| Direction | When to use |
|---|---|
| Editorial / Magazine | Content-heavy, journalism, publishing |
| Luxury / Refined | High-end products, finance, fashion |
| Brutalist / Raw | Creative agencies, art, music |
| Soft / Organic | Wellness, food, personal brands |
| Tech / Minimal | SaaS, developer tools, startups |
| Retro / Nostalgic | Heritage brands, indie projects |
| Maximalist / Rich | E-commerce, events, entertainment |
| Playful / Toy-like | Kids, games, community products |

Document your direction in a comment at the top of the code: aesthetic, font pairing, color rationale.

### Typography Rules
- Choose a distinctive **display font** (headlines): look at Google Fonts for characterful options — Playfair Display, Clash Display, Fraunces, Cabinet Grotesk, Syne, DM Serif Display, etc.
- Pair with a **readable body font**: Lato, Source Serif, DM Sans, Instrument Sans, etc.
- Scale: use a clear type scale (e.g., 12/14/16/20/28/40/64px). Never guess sizes randomly.
- **Never use**: Inter, Roboto, Arial as display fonts. They lack personality.

### Color System
- Pick 1–2 **dominant colors** + 1 **accent** + neutrals
- Use CSS variables: `--color-primary`, `--color-accent`, `--color-bg`, `--color-text`
- Dark backgrounds with light text, or very light backgrounds with dark type — avoid medium grays everywhere

### Layout Philosophy
- **Above the fold is sacred**: the first 100vh must communicate the value proposition instantly
- Use **visual rhythm**: alternate between full-width, contained, and split layouts
- Break the grid intentionally at least once — diagonal, overlap, or an asymmetric hero
- Generous whitespace OR controlled density — commit to one

---

## Phase 3 — Page Structure Template

Every page should have this hierarchy:

```
<nav>         — Logo + links + CTA button (sticky or fixed)
<hero>        — H1 + subtext + CTA + visual/image
<section 1>   — First proof point or feature
<section 2>   — Social proof, stats, or testimonials  
<section 3>   — How it works / process
<section 4>   — Deeper features or benefit breakdown
<section 5>   — Pricing or offer
<section 6>   — Final CTA / newsletter
<footer>      — Links + legal + socials
```

Adjust based on page type. For portfolio pages, hero → work grid → about → contact is natural.

---

## Phase 4 — Implementation Standards

### HTML Structure
- Use semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Every section needs an `id` for anchor navigation
- Images: always include `alt` text, use `loading="lazy"` on non-hero images
- Meta tags: include `<meta name="viewport">` and a `<title>`

### CSS Best Practices
```css
/* Always start with CSS reset + variables */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --color-primary: /* your choice */;
  --color-accent: /* your choice */;
  --color-bg: /* your choice */;
  --color-text: /* your choice */;
  --font-display: 'YourDisplayFont', serif;
  --font-body: 'YourBodyFont', sans-serif;
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 8rem;
  --max-width: 1200px;
}
```

### Responsive Design
- **Mobile-first**: write base styles for mobile, add `@media (min-width: 768px)` for tablet, `@media (min-width: 1200px)` for desktop
- Navigation: must collapse to hamburger on mobile
- Hero: font sizes must scale down gracefully
- Grid columns: use `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` for card grids

### Animations & Motion
- Page load: fade-in + subtle translate-y for hero elements (stagger with `animation-delay`)
- Scroll: use `IntersectionObserver` to trigger `.visible` classes on sections
- Hover: smooth transitions (0.2s–0.3s ease) on buttons, links, cards
- Never animate everything — pick 3–5 high-impact moments

### Buttons & CTAs
- Primary CTA: bold, high contrast, stands out against background
- Secondary: ghost/outline style
- Always include `hover` and `focus` states
- Size: minimum 44px height for touch targets

---

## Phase 5 — Delivering the Output

### For Single-File Output (HTML artifact)
Bundle everything in one `.html` file:
- Google Fonts via `<link>` in `<head>`
- All CSS in `<style>` tag
- All JS in `<script>` at bottom of `<body>`
- Use placeholder images from `https://picsum.photos/` or SVG illustrations

### For React Output
- Single `.jsx` file with Tailwind utility classes
- Import fonts via CDN or assume they're configured
- Use `useState`/`useEffect` for interactivity
- Default export the page component

### Quality Checklist (run mentally before finishing)
- [ ] Does the hero communicate the value prop in under 5 seconds?
- [ ] Is there a clear primary CTA above the fold?
- [ ] Does the page work on mobile (320px–768px)?
- [ ] Are font sizes readable (min 16px body)?
- [ ] Is color contrast accessible (WCAG AA: 4.5:1 for text)?
- [ ] Are all interactive elements keyboard-accessible?
- [ ] Does the aesthetic feel intentional and consistent throughout?
- [ ] Is there at least one visually memorable moment?

---

## Reference: Section Patterns

Read `references/section-patterns.md` for copy-paste patterns for common sections: hero variants, testimonial grids, pricing tables, feature blocks, footers.

---

## Common Mistakes to Avoid

- **Generic hero**: "Welcome to our website" is not a headline. Push for specificity.
- **Too many CTAs**: One primary action per section maximum.
- **No visual anchor**: Every section needs a dominant visual element (image, stat, icon, illustration).
- **Flat layouts**: Add depth with shadows, overlapping elements, or background texture.
- **Ignoring mobile**: Test every layout at 375px width mentally.
- **Fonts without personality**: If the font could be on any site, it's the wrong font.

---

## Quick Install Guide

### Google Antigravity
```bash
# No seu projeto, crie a estrutura:
mkdir -p .agents/skills/web-page-design
cp -r <skill-folder>/* .agents/skills/web-page-design/

# Copie o sidecar de configuração:
cp assets/antigravity.yaml .agents/skills/web-page-design/agents/antigravity.yaml

# No Manager View, inicie uma missão:
# "Build a [tipo] page using the web-page-design skill"
```

### Trae IDE
```bash
# No seu projeto, crie a estrutura:
mkdir -p .agents/skills/web-page-design
cp -r <skill-folder>/* .agents/skills/web-page-design/

# Adicione as regras ao .rules do projeto:
cat assets/trae.rules >> .rules

# No Builder Mode ou chat, chame com:
# @Agent web-page-design: build a landing page for [produto]
# Ou cole um screenshot do design para usar como referência visual.
```

### Claude Code
```bash
mkdir -p .claude/skills/web-page-design
cp -r <skill-folder>/* .claude/skills/web-page-design/
# Invoke: /web-page-design
```
