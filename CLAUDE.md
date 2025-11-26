# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is Felix Peng's personal portfolio website featuring a retro beach/boardwalk aesthetic inspired by vintage surf posters. The site is currently in pre-development phase with content and assets prepared but no HTML/CSS/JS implementation yet.

## Design Philosophy

**Core Aesthetic:** 1970s beach boardwalk with warm sunset gradients (coral, orange, yellow), cool ocean blues, sandy tones, and grainy/textured overlays. Physical metaphors include wooden boardwalk signs and Polaroid frames for projects.

**Visual Style:**
- Grainy, textured, hand-placed feel (no glassmorphism)
- Warm sunset gradients (coral, orange, yellow) with cool ocean blues and sandy tones
- Beach-weathered textures
- Imperfect alignments (slight rotations)
- Vintage color palettes
- Unique, personality-driven design

**Typography:**
- **Neon** (`fonts/Neon.ttf`) - Display font for large headings and project titles
- **Overpass** (`fonts/overpass font/`) - Body text, based on Highway Gothic (road signs), perfect for boardwalk aesthetic and highly readable

**Design Anti-Patterns to Avoid:**

DON'T:
- Glassmorphism / blur effects
- Modern gradient overlays
- Generic sans-serifs (Inter, Poppins, DM Sans)
- Perfectly centered layouts
- Floating shadows
- Generic AI aesthetics

DO:
- Textured, grainy overlays
- Imperfect alignments (slight rotations)
- Physical object metaphors
- Hand-placed feel
- Vintage color palettes
- Unique, personality-driven design

**Design references:**
- `images/textures/background.png` - Sunset/palm aesthetic reference
- `images/textures/tijuana.png` - Tijuana design aesthetic inspiration

## Content Structure

**CONTENT.md** contains all website copy, including:
- Hero section (name, status, location)
- About section (bio, hobbies, interests, favorites)
- 10 featured projects with detailed descriptions, tech stacks, timelines, and impact metrics
- Leadership roles and community involvement
- Contact links (LinkedIn, GitHub, email)

**Images organization:**
- `images/felix/` - Personal photos for about section (chatting.JPG, dancing.jpg, dino.png, eating.JPG, milling.JPG, rainbow.jpg, rocket.JPG, speaking.JPG, submarine.JPG, turbine.png, welding.png)
- `images/textures/` - Background and design reference images (background.png, favicon.png, tijuana.png)
- `images/projects/` - Project thumbnails (to be created):
  - ladwp-chatbot.jpg
  - claremont-accelerator.jpg
  - doe-solar-prize.jpg
  - ibm-instructlab.jpg
  - gridcare-model.jpg
  - swarm-sparkathon.jpg
  - yis-global.jpg
  - marc-rocket.jpg
  - logicforge-board.jpg
  - alpha-edison.jpg

**resume.pdf** - Current resume for download/embed

## File Structure

```
portfolio/
├── CONTENT.md              # All copy, project details, and metadata
├── CLAUDE.md               # Development guidance for Claude Code
├── README.md               # Public-facing repository description
├── fonts/                  # Custom fonts
│   ├── Neon.ttf           # Display font for headings
│   └── overpass font/     # Body text font (multiple weights)
├── images/
│   ├── felix/             # Personal photos
│   ├── projects/          # Project thumbnails (to be created)
│   └── textures/          # Design reference images
├── resume.pdf
└── [source code files - TBD]
```

## Site Structure

### Hero Section
- Name: Felix Peng
- Current status: Sophomore at Harvey Mudd College, Class of 2028
- No separate tagline or dedicated headshot display

### Projects (Polaroid Grid)
10 featured projects displayed as clickable Polaroids that expand into detailed modals:
1. LADWP - AI chatbot + revenue recovery
2. Claremont Accelerator - Student startup accelerator
3. DOE EnergyTech Prize - Solar panel safety commercialization
4. IBM InstructLab - Data review interface
5. GridCARE - Data center power prediction
6. SWARM Sparkathon - E-waste to distributed compute
7. Young Investors Society - Global financial literacy nonprofit
8. MARC Rocketry - Competition rocket systems
9. LogicForge - Logic gate demonstration board
10. Alpha Edison - VC diligence tool

### About Section
Bio paragraph + hobbies/interests with personal photos

### Resume
Link to PDF or embedded viewer

### Top-Right Navigation
LinkedIn and GitHub icon links

## Responsive Design Requirements

- **Mobile-first approach**
- Polaroid grid: 3 columns → 2 → 1 based on viewport
- Touch-friendly buttons on mobile
- Images should be WebP format where possible
- Lazy load project thumbnails
- Minimal JavaScript for core experience

## Tech Stack

- **Framework:** Static HTML/CSS/JS (React optional if needed for modal interactivity)
- **Deployment:** Vercel
- **Domain:** TBD

## Performance Goals

- Load time under 3 seconds
- Optimized images (WebP, lazy loading)
- Minimal JavaScript footprint

## Success Criteria

A successful v1 should:
1. ✅ Capture retro beach aesthetic (no AI-generic vibes)
2. ✅ Showcase 10 projects with clear impact metrics
3. ✅ Tell Felix's story authentically (not just resume bullets)
4. ✅ Be mobile responsive
5. ✅ Load fast (<3s)
6. ✅ Feel unique and memorable

## Future Enhancements (Post-v1)

- Project detail pages with full case studies
- Animated transitions between sections
- Easter eggs (hidden puzzle hunt references?)
- Dark mode toggle
- Blog section (if desired later)

## Git Workflow

- **Main branch:** `main`
- **Remote:** https://github.com/felixpeng24/personalwebsite.git
- Standard commit/push workflow to main branch
