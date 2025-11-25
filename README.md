# Felix Peng - Personal Portfolio Website

A retro beach-themed portfolio website showcasing projects, experience, and personality.

## 🎨 Design Philosophy

This site draws inspiration from vintage surf posters and boardwalk aesthetics:
- **Visual Style:** Grainy, textured, hand-placed feel (no glassmorphism)
- **Color Palette:** Warm sunset gradients (coral, orange, yellow) with cool ocean blues and sandy tones
- **Typography:** Neon (display/headings) + Overpass (body text)
- **Physical Metaphors:** Wooden boardwalk signs, Polaroid project frames, beach-weathered textures

## 🏗️ Structure

```
personal-website/
├── CONTENT.md              # All copy, project details, and metadata
├── README.md               # This file
├── fonts/                  # Custom fonts
│   ├── Neon/              # Display font for headings
│   └── Overpass/          # Body text font
├── images/
│   ├── hero/
│   │   └── headshot.jpg
│   ├── projects/          # One thumbnail per project
│   │   ├── ladwp-chatbot.jpg
│   │   ├── claremont-accelerator.jpg
│   │   ├── doe-solar-prize.jpg
│   │   ├── ibm-instructlab.jpg
│   │   ├── gridcare-model.jpg
│   │   ├── swarm-sparkathon.jpg
│   │   ├── yis-global.jpg
│   │   ├── marc-rocket.jpg
│   │   ├── logicforge-board.jpg
│   │   └── alpha-edison.jpg
│   └── textures/
│       └── tijuana.png    # Reference image for design aesthetic
├── resume.pdf
└── [source code files - TBD]
```

## 🎯 Key Sections

### Hero
- Name: Felix Peng
- Current status: Sophomore at Harvey Mudd College
- No tagline, no separate headshot display (integrated naturally)

### Projects (Polaroid Grid)
10 featured projects, each clickable to expand into detailed modal:
1. **LADWP** - AI chatbot + revenue recovery ($370K+/year)
2. **Claremont Accelerator** - Raised $84K+, 16 startups supported
3. **DOE EnergyTech Prize** - 1st Place ($20K), solar panel safety
4. **IBM InstructLab** - WatsonX data review interface (3x faster)
5. **GridCARE** - Data center power prediction (0.79 accuracy)
6. **SWARM Sparkathon** - 1st Place, e-waste → distributed compute
7. **Young Investors Society** - Global President, 2,300+ schools
8. **MARC Rocketry** - 99.95% accuracy, 3rd place nationally
9. **LogicForge** - Logic gate demo board (30+ year lifespan)
10. **Alpha Edison** - VC diligence tool (70% time reduction)

### About
- Bio paragraph
- Hobbies: Breakdancing, puzzle hunts, cooking, hiking
- Interests: Film, books, food

### Resume
- Link to PDF or embedded view

### Top-Right Nav
- LinkedIn icon + link
- GitHub icon + link

## 🚀 Tech Stack

- **Framework:** Static HTML/CSS/JS (or React if needed for interactivity)
- **Deployment:** Vercel
- **Domain:** Custom domain (TBD)

## 📝 Content Reference

All project descriptions, timelines, tech stacks, and impact metrics are documented in `CONTENT.md`.

## 🎨 Design Anti-Patterns to Avoid

**DON'T:**
- Glassmorphism / blur effects
- Modern gradient overlays
- Generic sans-serifs (Inter, Poppins, DM Sans)
- Perfectly centered layouts
- Floating shadows
- Generic AI aesthetics

**DO:**
- Textured, grainy overlays
- Imperfect alignments (slight rotations)
- Physical object metaphors
- Hand-placed feel
- Vintage color palettes
- Unique, personality-driven design

## 🔧 Development Notes

### Fonts
- **Neon:** Display font for large headings, project titles
- **Overpass:** Based on Highway Gothic (road signs), perfect for boardwalk aesthetic and highly readable

### Responsive Design
- Mobile-first approach
- Polaroid grid adjusts from 3 columns → 2 → 1
- Touch-friendly buttons on mobile

### Performance
- Optimize images (WebP format where possible)
- Lazy load project thumbnails
- Minimal JavaScript for core experience

## 📚 References

- Design inspiration: `images/textures/tijuana.png`
- All content: `CONTENT.md`
- Fonts located in: `fonts/Neon/` and `fonts/Overpass/`

## 🎯 Success Criteria

A successful v1 should:
1. ✅ Capture retro beach aesthetic (no AI-generic vibes)
2. ✅ Showcase 10 projects with clear impact metrics
3. ✅ Tell Felix's story authentically (not just resume bullets)
4. ✅ Be mobile responsive
5. ✅ Load fast (<3s)
6. ✅ Feel unique and memorable

## 🚧 Future Enhancements (Post-v1)

- Project detail pages with full case studies
- Animated transitions between sections
- Easter eggs (hidden puzzle hunt references?)
- Dark mode toggle
- Blog section (if desired later)

---

**Built with ☀️ by Felix Peng**  
Sophomore @ Harvey Mudd College | Class of 2028
