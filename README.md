# Shivam Ingle Portfolio

A responsive personal portfolio, an AI and full-stack developer building production-minded LLM systems, data workflows, and web products.

The site uses an editorial dark theme, custom project visualizations, active-section navigation, accessible motion, and a generated Open Graph image.

## Tech Stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.com/) and Radix UI
- [Lucide React](https://lucide.dev/) icons
- Geist Sans and Geist Mono through `next/font`

## Features

- Responsive single-page portfolio
- Active navigation based on the visible section
- Mobile navigation with body-scroll locking
- Reusable ShadCN-based buttons, badges, and cards
- Custom visuals for featured projects
- Scroll-reveal animations with reduced-motion support
- SEO metadata and generated social sharing image
- Centralized portfolio content for easier updates

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone https://github.com/shivamingle/shivam-portfolio.git
cd shivam-portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run build
```

Creates and type-checks the production build.

```bash
npm run start
```

Runs the generated production build.

## Project Structure

```text
app/
  globals.css          Global theme, typography, and reusable visual styles
  layout.tsx           Fonts, metadata, viewport settings, and navigation
  opengraph-image.tsx  Generated social sharing image
  page.tsx             Main portfolio page and section composition
components/
  ui/                  Customized ShadCN UI primitives
  AnimateOnScroll.tsx  Accessible scroll-reveal behavior
  Navbar.tsx           Desktop and mobile navigation
  ProjectVisual.tsx    Project-specific visual illustrations
  SectionHeading.tsx   Shared section heading layout
data/
  portfolio.ts         Portfolio content, links, experience, and projects
lib/
  utils.ts             Shared class-name utility
```

## Customizing the Portfolio

Most portfolio content is stored in [`data/portfolio.ts`](data/portfolio.ts). Update this file to change:

- Email and social links
- Navigation items
- Capabilities and technologies
- Projects and project descriptions
- Experience and education
- Homepage proof points

The main page layout is composed in [`app/page.tsx`](app/page.tsx).

Global colors, typography, spacing, and shared CSS utilities are defined in [`app/globals.css`](app/globals.css). ShadCN component variants are customized in [`components/ui`](components/ui).

## Environment Variables

Set the public production URL so Next.js can generate absolute metadata and social image URLs:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Without this variable, the project uses `http://localhost:3000`.

## Deployment

The project can be deployed directly to [Vercel](https://vercel.com/):

1. Import the GitHub repository into Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
3. Deploy.

Before deploying, verify the project locally:

```bash
npm run lint
npm run build
``
```
