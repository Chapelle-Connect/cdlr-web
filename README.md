# Chapelle Connect

Chapelle Connect is the bilingual digital front door for Chapelle de la
Résurrection in Gatineau. The public website introduces a connected church
experience for announcements, events, media and member communication, while
giving ministry teams direct access to the separate staff dashboard.

The site is designed for English- and French-speaking members, works across
mobile, tablet and desktop, and is ready for native deployment on Vercel.

## Features

- Complete English and French presentation with a persistent language choice
- Responsive layouts optimized for phones, tablets and desktop screens
- Direct, locale-aware links to the Chapelle Connect staff dashboard
- Keyboard navigation, visible focus states and reduced-motion support
- Privacy, accessibility, error and branded page-not-found experiences
- Search-engine, Open Graph, Twitter card and crawler metadata
- Production security headers and static route generation
- Automated linting, type-checking, regression tests and production builds

## Technology

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- TypeScript
- Native CSS
- Vercel

## Getting started

### Requirements

- Node.js 22.x
- npm

Install the locked dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js development server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Validate TypeScript without emitting files |
| `npm test` | Run deployment and navigation regression tests |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run check` | Run every required production check |

Run the complete validation suite before deploying:

```bash
npm run check
```

## Environment variables

The application does not require secrets or a database.

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Final public origin used for canonical and social metadata |
| `VERCEL_PROJECT_PRODUCTION_URL` | Automatic | Vercel-provided fallback when the custom site URL is not set |

Use an origin without a trailing path, such as
`https://connect.example.org`, for `NEXT_PUBLIC_SITE_URL`.

## Deploying to Vercel

1. Import this GitHub repository into Vercel.
2. Keep the automatically detected framework preset set to **Next.js**.
3. Select Node.js 22.x.
4. Add `NEXT_PUBLIC_SITE_URL` with the final production origin.
5. Deploy.

The project uses the standard Next.js lifecycle:

- Install command: `npm ci` or the Vercel default
- Build command: `npm run build`
- Output directory: Next.js default

No custom `vercel.json` file is required.

## Routes

| Route | Description |
| --- | --- |
| `/` | Bilingual Chapelle Connect landing page |
| `/privacy` | Public privacy information |
| `/accessibility` | Accessibility commitment and support information |
| `/robots.txt` | Search-crawler policy |
| `/opengraph-image` | Generated social-sharing image |

Unknown routes use the custom Chapelle Connect page-not-found experience.

## Staff dashboard

Staff calls to action open the separate
[Chapelle Connect dashboard](https://cdlr-admin.vercel.app/en/login). The
selected website language is carried into the corresponding `/en/login` or
`/fr/login` route.
