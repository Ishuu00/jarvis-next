# Brainwave

A modern, opinionated Next.js app showcasing a creative UI/UX system for a small product site called Brainwave. It includes an interactive hero with background/particle effects, and a small component library of SVG assets.

---

## Highlights

- Next.js (App Router) + React 19
- Hero section with a background image, chip illustration, and a WebGL particle system
- Asset index for SVG and raster images in `src/asset/assets`
- Tailwind CSS utilities (via PostCSS) for styling

---

## Quick start (dev)

From the project root (Windows PowerShell examples):

```powershell
npm install
npm run dev

Notes:
- The site uses modern Next.js features; run `npm run dev` and visit http://localhost:3000 to view.

---

## Scripts

- `npm run dev` — start the Next.js dev server
- `npm run build` — build for production
- `npm start` — run the production server after build
- `npm run lint` — run ESLint (project configured with `eslint-config-next`)

---

## Important project files

- `src/components/HeroSection.tsx` — hero layout, background, robot and particle layer
- `src/asset/assets/index.js` — imports and re-exports all images / svg assets

---

## Assets & images

The repository keeps image and SVG assets in `src/asset/assets`. The file `src/asset/assets/index.js` collects all exports so components can import `asset.brainwave`, `asset.robot`, `asset.heroBackground`, etc.

---

## Particles and WebGL

There is an in-repo particles component in `src/components/ui/dotted-background.tsx` that uses `ogl` (a lightweight WebGL helper). If you use the hero particle effect and see a runtime error like "Cannot find module 'ogl'", install it:

If you prefer not to use WebGL, I can replace it with a canvas fallback (no extra deps) — just ask.

---

## Tailwind / Styling notes

- This project uses Tailwind-like utilities via PostCSS. You may see linter suggestions about shorthand classes (for example `bg-gradient-to-r` vs `bg-linear-to-r`) — these are style suggestions and not breaking changes.
- Global CSS is in `src/app/globals.css`.

---