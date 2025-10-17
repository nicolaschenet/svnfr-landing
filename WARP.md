# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Development Commands

### Development Server
- `npm run dev` - Start local development server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview the built site locally
- `npm install` - Install dependencies

### Astro CLI
- `npm run astro -- --help` - Get help with Astro CLI
- `npm run astro add [integration]` - Add integrations
- `npm run astro check` - Run type checking

## Project Architecture

### Technology Stack
- **Framework**: Astro 5.7+ with SSG (Static Site Generation)
- **Styling**: Tailwind CSS 4.1+ with custom CSS
- **Analytics**: Vercel Analytics & Speed Insights
- **Build**: Vite with Terser minification
- **TypeScript**: Strict mode enabled

### Site Configuration
- Production site URL: `https://svnfr.com`
- Build format: `file` (generates individual HTML files)
- Image optimization: Sharp service
- Code splitting enabled for CSS

### Directory Structure
```
src/
├── components/          # Astro components
│   ├── HeroSection.astro    # Landing hero with featured release
│   ├── MusicSection.astro   # Music releases display
│   ├── AboutSection.astro   # About content
│   └── Navbar.astro        # Navigation header
├── layouts/
│   └── Layout.astro        # Base HTML layout with analytics
├── pages/
│   └── index.astro         # Main landing page
├── data/
│   └── releases.ts         # Music releases data structure
├── images/                 # Optimized images/assets
└── styles/                # Global CSS files

public/
├── scripts/               # Client-side JS (particles, glitch effects)
├── assets/               # Static assets
└── favicon.png           # Site favicon
```

### Key Components

**releases.ts Data Structure**:
- Centralizes music release information
- Includes metadata: title, release date, cover art, streaming links
- Supports featured/non-featured release categorization
- Dynamic accent color theming per release

**Layout.astro**:
- Base HTML structure with meta tags for mobile optimization
- Loads Google Fonts (IBM Plex Mono, Inter)
- Includes Font Awesome for icons
- Integrates particles.js for background effects
- Contains Vercel analytics tracking

**MusicSection.astro**:
- Complex color computation functions for theming
- Dynamic Spotify embed generation
- Responsive layout with mobile optimizations
- Platform-specific link styling (Spotify, Apple Music, Bandcamp)

### Visual Effects & Styling
- Custom particle system background (particles.js)
- Glitch effects on text elements
- Dynamic color theming based on album artwork
- Responsive design with mobile-first approach
- Synthwave aesthetic with neon accents

### Content Management
Music releases are managed through `src/data/releases.ts`. To add new releases:
1. Import cover art image
2. Add release object with required fields
3. Set `featured: true` for hero display
4. Update links once released

### Performance Optimizations
- CSS code splitting enabled
- Terser minification
- Image optimization with Sharp
- Sourcemaps disabled in production
- Font preloading for critical fonts
- Lazy loading for Spotify embeds