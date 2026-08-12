# Saikat — Personal Portfolio

A premium, performance-focused personal portfolio built with **React 19**, **TypeScript**, **Vite 6**, and **Tailwind CSS v4**. Deploys as a fully static site to either **GitHub Pages** or **Vercel** — no backend required.

**Live demo:** `https://<your-username>.github.io/portfolio-saikat/` (after deployment — see below)

---

## Features

- Hero with typewriter role animation and animated count-up stats
- About, Skills, Education timeline, searchable/filterable Projects grid
- Certificates gallery with modal viewer, Leadership timeline, masonry Gallery with keyboard-navigable lightbox
- Testimonials carousel, Contact form wired to EmailJS (no backend needed)
- Dark/light mode with system-preference detection and persisted choice
- Premium motion: loading screen, scroll progress bar, scroll-reveal animations, cursor-spotlight cards, subtle parallax — all built with Framer Motion and tuned for 60fps
- Fully respects `prefers-reduced-motion` throughout
- WCAG-conscious: semantic landmarks, keyboard support, focus states, labeled controls
- SEO-complete: Open Graph, Twitter Card, JSON-LD `Person` schema, sitemap, robots.txt

---

## Tech Stack

| Category | Tools |
|---|---|
| Framework | React 19 + Vite 6 + TypeScript |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first `@theme` tokens) |
| Animation | Framer Motion (`LazyMotion` + `domAnimation` for a smaller bundle) |
| Routing | React Router v7 |
| Icons | lucide-react + react-icons |
| Forms | EmailJS (`@emailjs/browser`) |
| Tooling | ESLint (flat config) + Prettier + `prettier-plugin-tailwindcss` |
| Deployment | GitHub Actions -> GitHub Pages, or Vercel |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your EmailJS credentials
cp .env.example .env
# then edit .env with your real Service ID / Template ID / Public Key

# 3. Run the dev server
npm run dev
```

Visit `http://localhost:5173`.

### All scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check + production build (base path `/`, e.g. for Vercel) |
| `npm run build:gh-pages` | Production build with the GitHub Pages sub-path base |
| `npm run preview` | Preview the production build locally |
| `npm run lint` / `lint:fix` | Run ESLint |
| `npm run format` / `format:check` | Run Prettier |
| `npm run deploy` | Build for GitHub Pages and publish the `dist/` folder via `gh-pages` |

---

## Project Structure

```
portfolio-saikat/
├── .github/workflows/deploy.yml   # CI: build + auto-deploy to GitHub Pages
├── public/                        # Static assets served as-is
│   ├── favicon.ico / favicon-32x32.png / apple-touch-icon.png / icon-512.png
│   ├── og-image.png               # Open Graph share image
│   ├── site.webmanifest, robots.txt, sitemap.xml
│   └── 404.html                   # GitHub Pages SPA-routing fallback
├── src/
│   ├── assets/                    # Images, organized by section (add your own here)
│   │   ├── images/{hero,about}/
│   │   ├── projects/, certificates/, gallery/, logos/tech-stack/
│   ├── components/
│   │   ├── ui/                    # Reusable atoms: Button, Card, Modal, LazyImage,
│   │   │                          #   Skeleton, ScrollProgressBar, LoadingScreen, ...
│   │   ├── layout/                # Navbar, MobileMenu, Footer
│   │   └── sections/              # One folder per page section (Hero, About, Skills,
│   │                               #   Education, Projects, Certificates, Leadership,
│   │                               #   Gallery, Testimonials, Contact)
│   ├── context/ThemeContext.tsx   # Dark/light mode provider
│   ├── data/                      # All site content as typed constants, edit these,
│   │                               #   not the components, to update your info
│   ├── hooks/                     # useCounter, useCarousel, useActiveSection,
│   │                               #   useSpotlight, useMediaQuery, useLockBodyScroll...
│   ├── lib/emailjs.ts             # EmailJS send wrapper
│   ├── pages/Home.tsx             # Composes all sections
│   ├── types/index.ts             # Shared TypeScript interfaces
│   ├── App.tsx, main.tsx, index.css
├── vite.config.ts                 # Deploy-target-aware base path (see below)
├── vercel.json                    # SPA rewrite + cache headers for Vercel
├── tsconfig*.json, eslint.config.js, .prettierrc
└── package.json
```

---

## Editing Your Content

Every piece of visible text lives in `src/data/*.ts` — **you should never need to edit a component file to update your info.**

| To change... | Edit this file |
|---|---|
| Name, bio, mission/vision/goals | `src/data/about.ts` |
| Skills & categories | `src/data/skills.ts` |
| Education history | `src/data/education.ts` |
| Projects | `src/data/projects.ts` |
| Certificates | `src/data/certificates.ts` |
| Leadership/volunteering | `src/data/leadership.ts` |
| Gallery photos | `src/data/gallery.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Nav links | `src/data/navigation.ts` |
| Social links, email, phone, location | `src/data/social.ts` |
| Hero stats | `src/data/stats.ts` |

Image paths currently point at placeholder files under `src/assets/...` — drop your real photos in the matching folder (see the tree above) with the same filenames, or update the paths in the data files.

---

## EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an Email Service (e.g. Gmail) and note the **Service ID**.
3. Create an Email Template with `from_name`, `from_email`, and `message` variables, and note the **Template ID**.
4. Copy your **Public Key** from Account -> API Keys.
5. Put all three into `.env` (local dev) — see `.env.example`.
6. For deployment, add the same three as **secrets** (GitHub) or **environment variables** (Vercel) — instructions below.

---

## Deployment

### Option A — GitHub Pages (via GitHub Actions, recommended)

1. **Push to GitHub.**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio-saikat.git
   git push -u origin main
   ```

2. **Check the repo name matches `REPO_NAME` in `vite.config.ts`.** It's currently set to `'portfolio-saikat'`. If your GitHub repo has a different name, update that constant — otherwise assets will 404 in production.

3. **Add EmailJS secrets:** repo -> **Settings -> Secrets and variables -> Actions -> New repository secret**, add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.

4. **Enable Pages:** repo -> **Settings -> Pages -> Source -> GitHub Actions**.

5. **Push to `main`.** The included workflow (`.github/workflows/deploy.yml`) lints, type-checks, builds with the correct GitHub Pages sub-path, and deploys automatically. Watch progress under the **Actions** tab.

6. Your site will be live at `https://<your-username>.github.io/portfolio-saikat/`.

**Manual alternative** (without CI): `npm run deploy` builds with the GitHub Pages base path and pushes `dist/` to a `gh-pages` branch via the `gh-pages` package. Requires **Settings -> Pages -> Source -> Deploy from a branch -> `gh-pages`** instead of step 4 above.

### Option B — Vercel

1. Push the repo to GitHub (steps 1–3 above, including the EmailJS secrets — but as Vercel **environment variables** instead of GitHub secrets).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite. Confirm: **Build Command** `npm run build`, **Output Directory** `dist`.
4. Under **Environment Variables**, add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.
5. Click **Deploy**. `vercel.json` (included) handles SPA routing and asset caching automatically.
6. Your site is live at `https://<project-name>.vercel.app` (or your custom domain).

> **Why two build scripts?** GitHub Pages serves this project from a sub-path (`/portfolio-saikat/`), while Vercel serves it from the domain root (`/`). `vite.config.ts` sets the correct base path automatically based on a `DEPLOY_TARGET` environment variable — `npm run build` (root, for Vercel) vs `npm run build:gh-pages` (sub-path, for GitHub Pages / used by CI and `npm run deploy`). You don't need to change anything by hand.

### After deploying to a custom domain or a different platform

Update these placeholder URLs to match your real deployed URL:
- `index.html` — `<link rel="canonical">`, `og:url`, `og:image`, `twitter:image`, and the JSON-LD `url`
- `public/robots.txt` — the `Sitemap:` line
- `public/sitemap.xml` — the `<loc>` value

---

## Production Checklist

**Before you deploy:**
- [ ] Replace placeholder images in `src/assets/` with real photos/screenshots (hero portrait, about photo, project thumbnails, certificates, gallery, testimonial avatars)
- [ ] Update all content in `src/data/*.ts` with your real information
- [ ] Set up EmailJS and add real credentials to `.env` (local) and repo secrets / Vercel env vars (production)
- [ ] Update `SOCIAL_LINKS` in `src/data/social.ts` with your real GitHub/LinkedIn/email
- [ ] Add your real resume PDF at `public/resume/Saikat_Resume.pdf` (referenced by the Hero's "Download Resume" button)
- [ ] Confirm `REPO_NAME` in `vite.config.ts` matches your actual GitHub repo name (GitHub Pages only)
- [ ] Update canonical/OG URLs in `index.html` + `robots.txt` + `sitemap.xml` once you know your final domain
- [ ] Swap `public/og-image.png` / favicons for your own branding if desired (placeholders included)

**Quality gates (run locally before pushing):**
- [ ] `npm run lint` passes with no errors
- [ ] `npm run format:check` passes
- [ ] `npm run build` completes with no TypeScript errors
- [ ] `npm run preview` — manually click through every section, every link, the contact form, and the theme toggle
- [ ] Test on an actual mobile device (or Chrome DevTools device mode) at 375px, 768px, and 1440px widths
- [ ] Test with **Reduce Motion** enabled at the OS level — animations should be minimal/instant
- [ ] Tab through the entire page with a keyboard only — every interactive element should be reachable and show a focus ring
- [ ] Run a Lighthouse audit (Chrome DevTools -> Lighthouse) — target 95+ on Performance, Accessibility, Best Practices, and SEO

**After deploying:**
- [ ] Visit the live URL and confirm images, fonts, and the contact form all work (a sub-path/base-path mistake is the most common GitHub Pages issue)
- [ ] Share a link in Slack/Twitter/LinkedIn once to confirm the Open Graph preview card renders correctly
- [ ] Submit `sitemap.xml` to Google Search Console (optional, speeds up indexing)

---

## Troubleshooting

| Problem | Likely Cause |
|---|---|
| Blank page / 404s for JS+CSS on GitHub Pages | `REPO_NAME` in `vite.config.ts` doesn't match your repo name, or Pages wasn't set to "GitHub Actions" as the source |
| Contact form always fails | Missing/incorrect EmailJS env vars, or the EmailJS template's variable names don't match `from_name` / `from_email` / `message` |
| Refreshing a deep link 404s on GitHub Pages | Expected for pure static hosting without SPA fallback — `public/404.html` already handles this; make sure it deployed |
| Dark mode flashes light on load | Expected on first-ever visit before `localStorage` is set; subsequent loads respect the saved preference |

---

## License

Personal project — feel free to fork and adapt the structure for your own portfolio.
