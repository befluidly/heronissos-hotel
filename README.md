# Heronissos Hotel — Website

Next.js 15 · next-intl · Tailwind CSS · TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en` automatically.

## Languages

| URL | Language |
|-----|----------|
| `/en` | English |
| `/nl` | Nederlands |
| `/pl` | Polski |
| `/de` | Deutsch |
| `/fr` | Français |
| `/it` | Italiano |

All translations live in `/messages/*.json`.

## Replacing placeholder images

All images currently load from the old website. Replace with local files:

1. Copy your photos into `/public/images/`:
   - `exterior/drone-facade.jpg` — drone shot gevel
   - `rooms/room-superior.jpg`
   - `rooms/room-standard.jpg`
   - `rooms/room-promo.jpg`
   - `pool/pool-day.jpg`
   - `pool/pool-evening.jpg`
   - `dining/poolbar-evening.jpg`
   - `dining/restaurant.jpg`

2. Search for `// TODO: replace with` in the codebase — every image has a comment.

3. Swap the remote URL for the local path, e.g.:
   ```tsx
   src="/images/exterior/drone-facade.jpg"
   ```

4. Remove `www.heronissoshotel.gr` from `remotePatterns` in `next.config.ts` once all images are local.

## Booking

Booking links point to: `https://hersonissosbeach.reserve-online.net/` (WebHotelier).
No changes needed — just keep the link as is.

## Deployment

Easiest: [Vercel](https://vercel.com) — connect GitHub repo, deploy in 2 minutes.
Domain: point `heronissoshotel.gr` DNS to Vercel.

## Project structure

```
src/
  app/[locale]/      # Pages per language
  components/
    sections/        # Hero, Rooms, AllInclusive, etc.
    ui/              # Navbar, Footer
  i18n/              # Routing + request config
  middleware.ts      # Locale detection
messages/            # en.json, nl.json, pl.json, de.json, fr.json, it.json
public/images/       # → put your photos here
```
