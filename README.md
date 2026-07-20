# Kshitiz Raj — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

- `lib/content.ts` — every piece of copy on the site (experience, projects,
  skills, contact info). Edit this file first for content changes.
- `components/` — one component per section (Hero, Experience, Domains,
  Projects, Process, Skills, Education, Contact) plus `Nav.tsx` and the
  shared `Reveal.tsx` scroll-animation wrapper.
- `app/page.tsx` — assembles the sections in order.
- `app/layout.tsx` — fonts (Fraunces / Inter / JetBrains Mono) and metadata.
- `public/Kshitiz_Raj_Resume.pdf` — swap this file to update the downloadable
  resume; the download links already point at `/Kshitiz_Raj_Resume.pdf`.

## Deploy

Push to a GitHub repo and import it on [Vercel](https://vercel.com/new) —
zero config needed, it's a standard Next.js app.

## Design tokens

Colors, fonts, and spacing live in `tailwind.config.ts`:

- `ink` `#0A0E12` — background
- `amber` `#E8A33D` — primary accent
- `signal` `#4FBE8E` — secondary accent (tags)
- Fonts: Fraunces (display), Inter (body), JetBrains Mono (labels/tags)
