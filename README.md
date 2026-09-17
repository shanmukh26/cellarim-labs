# Cellarim Labs — Website (Next.js)

A real Next.js 16 + React 19 + Tailwind CSS v4 build of the Cellarim Labs homepage, using Framer Motion for animation and content pulled from the live cellarim.com site, reworked into a dark, deep-tech visual system built from Cellarim's actual logo colors.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy

This is a standard Next.js app — it deploys as-is to Vercel, Netlify, or any Node host. On Vercel: push to a GitHub repo and import it, or run `npx vercel`.

## Project structure

```
app/
  layout.tsx       — fonts (Plus Jakarta Sans + IBM Plex Sans), metadata
  page.tsx          — assembles all homepage sections
  globals.css       — brand color tokens (Tailwind v4 @theme)
components/
  Nav.tsx           — scroll-aware nav bar
  Hero.tsx          — headline, orchestrated reveal animation
  Lattice.tsx       — canvas dot-lattice background (the molecular/kolam motif)
  AmbientOrb.tsx    — drifting blurred glow, used behind a couple of sections
  Approach.tsx      — "What we do" three-way comparison
  Product.tsx       — NeuHyal™ star product + format cards
  Marquee.tsx        — reusable infinite scroll ticker
  Statement.tsx     — "Pure. Rapid. Safe." band
  Process.tsx       — "A recipe of perfection" section
  Team.tsx          — real team members with LinkedIn links
  Contact.tsx       — contact details + CTA
  Footer.tsx
lib/
  content.ts        — all copy/data in one place — edit this file to change text
public/
  logo-dark.jpg, logo-green.jpg, wordmark-white.jpg — real Cellarim logo assets
```

## Editing content

Almost all copy (formats, team, contact info, stats) lives in `lib/content.ts` — change it there rather than hunting through components.

## Colors (from the real logo)

| Token | Hex | Use |
|---|---|---|
| `--charcoal` | `#1c1c1c` | page background |
| `--charcoal-2` | `#242424` | cards, exact match to logo's dark background |
| `--green` | `#25b458` | primary accent, from the logo mark |
| `--sage` | `#40745d` | secondary accent, from the two-tone icon |

## What's not built yet

This is the homepage only (single scrolling page, matching how the real cellarim.com is structured). If you want Platform, Pipeline, About etc. as separate routes later, each can become its own `app/<route>/page.tsx` reusing the same components and design tokens.
