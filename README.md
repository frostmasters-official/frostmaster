# ServiceCo – Service-Based Website

A Next.js 16 project for a professional service business website, with App Router, TypeScript, and Tailwind CSS.

## Getting started

```bash
# Install dependencies (already done if you used create-next-app)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

- **`src/app/`** – App Router pages and layout
  - `page.tsx` – Home (hero, services preview, CTA)
  - `services/` – Services listing
  - `about/` – About page
  - `contact/` – Contact form and careers
  - `privacy/`, `terms/` – Placeholder legal pages
- **`src/components/`** – Reusable UI
  - `Header.tsx` – Sticky nav with mobile menu
  - `Footer.tsx` – Site footer and links
  - `ServiceCard.tsx` – Service preview cards

## Scripts

| Command   | Description              |
|----------|--------------------------|
| `npm run dev`   | Start dev server (Turbopack) |
| `npm run build` | Production build          |
| `npm run start` | Start production server   |
| `npm run lint`  | Run ESLint                |

## Customization

- **Branding**: Update "ServiceCo" in `Header.tsx`, `Footer.tsx`, and `layout.tsx` metadata.
- **Services**: Edit the `services` array in `src/app/services/page.tsx` and the featured list in `src/app/page.tsx`.
- **Contact**: Replace the form `action="#"` in `src/app/contact/page.tsx` with your backend or form service (e.g. Formspree, API route).
- **Legal**: Replace placeholder content in `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`.
