# EID Growth Opportunity — Deck

17-slide interactive pitch deck for **EID Ltd.** — diagnoses the current
brochure-site footprint, frames the dental-market opportunity, and lands
on a $5K build + $1K/mo growth-engine proposal.

Built with Next.js 16, React 19, Tailwind v4, framer-motion. Dark UI on the
Marc Friedman design system (Oswald + Poppins, `#A3D1FF` accent).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the deck mounts at root.

## Deploy

Connect this repo to Vercel. No env vars required. Build command is the
default `next build`.

## Controls

| Key | Action |
| --- | --- |
| `→` `↓` `Space` `PgDn` | Next slide |
| `←` `↑` `PgUp` | Previous slide |
| `Home` / `End` | First / last slide |
| `1`–`9` | Jump to that slide |
| `F` | Toggle fullscreen |

Bottom dots and arrow buttons also navigate.

## Structure

```
src/app/
├── layout.tsx        Root layout — Oswald + Poppins, dark canvas
├── page.tsx          Mounts <Deck />
├── globals.css       Design tokens (colors, typography, animations)
├── Deck.tsx          Shell — progress bar, keyboard nav, transitions
└── slides/
    ├── registry.ts        Slide order + metadata
    ├── _primitives.tsx    Shared building blocks (titles, eyebrows, glow, stats)
    └── Slide01–17*.tsx    17 slide components
```

## Editing the deck

Change copy or visuals inside any `SlideNN*.tsx`. Reorder or rename slides
in `slides/registry.ts`. New slides only need to be (a) added to that
registry and (b) exported as a default React component.

The design tokens live at the top of `globals.css` under `@theme` — colors,
font families, spacing, and the radius / shadow scales are all there.

---

Prepared by Marc Friedman · [marcfriedmanportfolio.com](https://marcfriedmanportfolio.com)
