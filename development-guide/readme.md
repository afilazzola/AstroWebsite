# Readme.md

## Project Overview

This is a personal portfolio website for Alessandro Filazzola, built with Astro v1.9. The site showcases projects, publications, and professional information for a data scientist/quantitative ecologist.

## Development Commands

All commands must be run from the `website/` directory:

```bash
cd website

# Development server (port 3000 by default)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI directly
npm run astro
```

## Architecture

### Framework Stack

- **Astro 1.9.2**: Static site generator with islands architecture
- **Preact**: Used for interactive components (via `@astrojs/preact`)
- **Tailwind CSS**: Utility-first CSS framework (via `@astrojs/tailwind`)
- **SCSS**: For component-specific styles with CSS modules
- **TypeScript**: Strict mode enabled (`astro/tsconfigs/strict`)

### Directory Structure

```
website/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── *.astro        # Astro components (Nav, MainHead)
│   │   ├── *.jsx          # Preact components (Button, Footer, PortfolioPreview)
│   │   ├── *.tsx          # TypeScript Preact components (Citations, Skills, AnimateScroll, Analytics)
│   │   └── */styles.module.scss  # CSS modules per component
│   ├── layouts/           # Page layouts
│   │   └── project.astro  # Layout for project detail pages
│   ├── pages/             # File-based routing
│   │   ├── *.astro       # Top-level pages (index, about, contact, projects, publications, 404)
│   │   └── project/      # Project detail pages (Markdown files)
│   └── styles/
│       └── global.scss   # Global styles, CSS variables, design tokens
├── public/               # Static assets served as-is
│   ├── *.jpg, *.png      # Images
│   ├── publications.json # Publication data consumed by Citations component
│   └── favicon.svg, mountain.ico
└── astro.config.mjs      # Astro configuration
```

### Key Patterns

#### Component Types

- **Astro components** (`.astro`): Server-rendered, zero JS by default (Nav, MainHead)
- **Preact components** (`.jsx/.tsx`): Client-side interactive components
  - Use `client:load` directive when importing into Astro (e.g., GoogleAnalytics)
  - CSS modules for styling (`import Styles from './styles.module.scss'`)

#### Project Content

- Projects are authored as Markdown files in `src/pages/project/**/*.md`
- Use frontmatter with layout, title, client, publishDate, img, description, tags
- Rendered using `project.astro` layout
- Retrieved via `Astro.glob("./project/**/*.md")` in index.astro

#### Publications System

- Publications stored as JSON in `public/publications.json`
- Schema: `{ Authors, Year, Title, Journal, Link }`
- Rendered by `Citations` Preact component which imports the JSON directly

#### Styling

- Global design tokens in `src/styles/global.scss` (colors: `--c-*`, font sizes: `--f-u*`, `--f-d*`)
- Component styles use SCSS modules for scoping
- Tailwind available for utility classes
- Inter font loaded from Google Fonts

#### SEO & Analytics

- `astro-seo` package for OpenGraph metadata
- Custom `MainHead.astro` component for common meta tags
- Google Analytics via `Analytics` component with `client:load`

## Common Workflows

### Adding a New Project

1. Create new `.md` file in `src/pages/project/` (can be nested in subdirectories)
2. Add required frontmatter:
   ```yaml
   ---
   layout: ../../layouts/project.astro
   title: Project Title
   client: Client Name
   publishDate: YYYY-MM-DD HH:MM:SS
   img: https://image-url.com/image.jpg
   description: |
     Short description
   tags:
     - tag1
     - tag2
   ---
   ```
3. Write content in Markdown below frontmatter
4. Project automatically appears on projects page via `Astro.glob()`

### Adding Publications

1. Edit `website/public/publications.json`
2. Add new entry with: `Authors`, `Year`, `Title`, `Journal`, `Link`
3. Changes reflected automatically on `/publications` page

### Adding Interactive Components

1. Create `.jsx` or `.tsx` file in `src/components/ComponentName/`
2. Create corresponding `styles.module.scss` if needed
3. Import into Astro pages with client directive:
   ```astro
   import Component from "../components/Component"
   <Component client:load />
   ```

## Important Notes

- Working directory is repository root, but all npm commands run from `website/`
- The site uses older Astro v1.9 - syntax differs from v2+
- Preact integration allows React-style JSX with smaller bundle size
- CSS variables in `global.scss` define the entire design system
- Images in `public/` referenced with absolute paths (e.g., `/image.jpg`)
