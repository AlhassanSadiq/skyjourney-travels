# SkyJourney Travels - Premium Travel & Tours Website

A production-ready, fully responsive, and premium travel agency website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Project Overview

**SkyJourney Travels** is a modern, luxury travel agency website designed for real-world deployment. It features stunning animations, dark mode support, comprehensive travel services, and an elegant user experience suitable for high-end travel agencies.

## Tech Stack

- **Next.js 15** (App Router) - React framework with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **next-themes** - Dark mode support
- **react-hook-form** - Form handling
- **zod** - Schema validation
- **react-countup** - Animated counters
- **react-intersection-observer** - Scroll-triggered animations

## Features

### Core Features
- **Responsive Design** - Mobile-first, works on all devices
- **Dark Mode** - Toggle between light and dark themes
- **Smooth Animations** - Scroll-triggered reveals, hover effects, transitions
- **SEO Optimized** - Meta tags, Open Graph, sitemap, robots.txt
- **Loading States** - Beautiful loading spinner
- **Sticky Navigation** - Fixed navbar with scroll effects
- **Mobile Menu** - Animated hamburger menu for mobile
- **Currency & Language Selectors** - Dropdown selectors in top bar

### Pages
1. **Home** - Hero, search form, featured destinations, popular packages, why choose us, testimonials, partners, newsletter, contact CTA
2. **About Us** - Company story, mission/vision, team members, statistics with animated counters
3. **Services** - Flight booking, hotel reservations, visa assistance, holiday packages, airport transfers, travel insurance
4. **Destinations** - Dubai, London, Istanbul, Kigali, Zanzibar, Cairo with detail pages
5. **Tour Packages** - Grid layout with filtering, pricing, duration, included services
6. **Blog** - Travel articles, tips, guides with category filtering
7. **Contact** - Contact form, WhatsApp integration, map placeholder, FAQ accordion

### Bonus Features
- Flight search UI mockup
- Hotel search UI mockup
- Package inquiry form
- Newsletter subscription
- Testimonials slider with auto-play
- FAQ section with animated accordion
- Social media links
- Emergency support section
- 404 error page
- Open Graph image generation
- Dynamic icon generation

## Project Structure

```
skyjourney-travels/
├── app/                          # Next.js App Router pages
│   ├── about/                   # About Us page
│   ├── services/                # Services page
│   ├── destinations/            # Destinations listing + dynamic detail pages
│   ├── tour-packages/           # Tour packages listing
│   ├── blog/                    # Blog listing + dynamic detail pages
│   ├── contact/                 # Contact page with FAQ
│   ├── globals.css              # Global styles + Tailwind directives
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── loading.tsx              # Loading state component
│   ├── not-found.tsx            # 404 error page
│   ├── sitemap.ts               # Dynamic sitemap generation
│   ├── robots.ts                # Robots.txt generation
│   ├── manifest.ts              # PWA manifest
│   ├── opengraph-image.tsx      # Dynamic OG image
│   └── icon.tsx                 # Dynamic favicon
├── components/                   # Reusable components
│   ├── ui/                      # UI primitives
│   │   ├── AnimatedSection.tsx  # Scroll-triggered animation wrapper
│   │   ├── CountUp.tsx          # Animated counter
│   │   ├── StarRating.tsx       # Star rating display
│   │   └── Toaster.tsx          # Toast notification system
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx      # Hero with search form
│   │   ├── FeaturedDestinations.tsx
│   │   ├── PopularPackages.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Partners.tsx
│   │   ├── NewsletterCTA.tsx
│   │   └── ContactCTA.tsx
│   ├── Navbar.tsx               # Sticky navigation with mobile menu
│   └── Footer.tsx               # Footer with newsletter + links
├── hooks/                        # Custom React hooks
│   └── useScrollAnimation.ts    # Intersection Observer hook
├── lib/                          # Utilities and data
│   ├── utils.ts                 # Helper functions (cn, formatPrice, etc.)
│   └── data.ts                  # All static data (destinations, packages, etc.)
├── types/                        # TypeScript types
│   └── index.ts                 # All interface definitions
├── public/                       # Static assets
│   └── images/                  # Image directories
├── tailwind.config.ts           # Tailwind configuration with custom colors
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/skyjourney-travels.git
cd skyjourney-travels

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Design System

### Colors
- **Primary**: Sky Blue (#0ea5e9) to Ocean Cyan (#06b6d4)
- **Dark**: Slate 900 for dark mode backgrounds
- **Light**: White with subtle sky tints
- **Accents**: Emerald, Amber, Violet, Rose, Cyan

### Typography
- **Font**: Geist Sans (Next.js built-in)
- **Display**: Bold headings with gradient text effects
- **Body**: Clean, readable with good line-height

### Animations
- **Fade In**: Elements fade in on scroll
- **Slide Up**: Content slides up from below
- **Scale**: Hover effects with subtle scaling
- **Stagger**: Sequential animations for lists
- **Parallax**: Floating particles in hero section

## SEO & Performance

- Server-side rendering with Next.js App Router
- Optimized images with Next.js Image component
- Meta tags for all pages
- Open Graph and Twitter card support
- Structured sitemap.xml
- robots.txt configuration
- PWA manifest for installability
- Core Web Vitals optimized

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

MIT License - feel free to use for personal or commercial projects.

## Credits

- Images: Unsplash (free stock photos)
- Icons: Lucide React
- Fonts: Geist (by Vercel)

---

Built with passion for travel and excellence in web development.
