# The Trust Group Solutions — Component-by-Component UI Refactor Plan

## Objective
Refactor the existing frontend into a **world-class, enterprise-grade AI & Software Engineering website** that communicates:
- Authority
- Trust
- Technical excellence
- Calm confidence

Every component must feel intentional, minimal, and engineered.

---

## Global UI System (Before Touching Components)

### Layout System
- Use a **12-column grid** (max-width: 1200–1320px)
- Consistent vertical rhythm (8px or 12px scale)
- Generous whitespace between sections
- Avoid full-bleed clutter unless intentional

### Design Tokens
Define and reuse:
- Colors (primary, secondary, accent, background)
- Typography scale (H1–H6, body, caption)
- Spacing units
- Border radius (subtle, consistent)
- Shadows (soft, low contrast)

---

## 1. Header / Navigation Bar

### Current Issues (Typical)
- Feels basic or template-like
- Lacks visual hierarchy
- CTA blends in

### Refactor Plan
**Component:** `<Header />`

**Structure:**
- Logo (left)
- Navigation links (center or right)
- Primary CTA (far right)

**Navigation Items:**
- Solutions
- Industries
- Case Studies
- Insights
- Company
- Contact (CTA)

**Design Enhancements:**
- Sticky on scroll (subtle background blur)
- Slight shadow or border when scrolling
- Clean hover states (underline or opacity shift)
- CTA button slightly elevated

**Success Signal:**  
Navigation feels stable, confident, and enterprise-grade.

---

## 2. Hero Section (Most Important Component)

### Component: `<Hero />`

### Purpose
Immediately answer:
- What do you do?
- Who is it for?
- Why should I trust you?

### Structure
- Left: Text content
- Right or background: Abstract tech visual / motion
- Primary CTA + Secondary CTA

### Content Guidelines
**Headline:**  
Outcome-focused, authoritative, not hype.

**Subheadline:**  
Explain the value in one calm sentence.

**CTAs:**
- Primary: “Request a Consultation”
- Secondary: “View Our Work”

### Visual Enhancements
- Subtle animated background (mesh grid, neural lines, particles)
- Avoid stock images
- Motion must feel *slow and deliberate*

**Success Signal:**  
Visitor understands the company in under 5 seconds.

---

## 3. Trust & Credibility Strip

### Component: `<TrustBar />`

### Purpose
Instant credibility reinforcement

### Structure
- Horizontal strip below hero
- Logos, stats, or credentials

### Possible Content
- “Trusted by enterprise & high-stakes organizations”
- Metrics (years experience, systems deployed, uptime, etc.)
- Security-first language

**Design Notes:**
- Muted colors
- Small typography
- Clean separators

---

## 4. Services / Solutions Section

### Component: `<Solutions />`

### Structure
- Section header
- 3–5 solution cards

### Each Card Contains
- Title
- Short description
- Optional icon or abstract graphic

### Example Solutions
- Artificial Intelligence Systems
- Software Engineering
- Secure Infrastructure
- Digital Platforms
- Systems Integration

### Design Rules
- Cards should feel modular and engineered
- Hover interaction: slight elevation or border highlight
- Avoid long paragraphs

**Success Signal:**  
Solutions feel structured, capable, and scalable.

---

## 5. How We Work (Process Section)

### Component: `<Process />`

### Purpose
Demonstrate thinking, not just output.

### Structure
- Step-based layout (3–5 steps)
- Horizontal or vertical timeline

### Example Steps
1. Problem Framing
2. System Design
3. Engineering & Validation
4. Deployment & Scaling
5. Continuous Improvement

### Visual Style
- Thin lines
- Icons or numbered markers
- Subtle animation on scroll

**Success Signal:**  
Company feels methodical and dependable.

---

## 6. Case Studies / Proof of Work

### Component: `<CaseStudies />`

### Structure
- Section intro
- 2–3 featured case study cards

### Each Card
- Problem
- Solution
- Outcome (metrics if possible)
- “View Case Study” link

### Design Notes
- Dark background or contrast section
- Strong typography
- Focus on outcomes, not fluff

**Success Signal:**  
Visitor trusts your execution ability.

---

## 7. AI / Innovation Highlight Section

### Component: `<Innovation />`

### Purpose
Differentiate as a true AI & software company.

### Structure
- Split layout
- Left: Vision & capabilities
- Right: Interactive or animated visual

### Content Focus
- AI systems
- Automation
- Intelligence-driven decisions
- Secure architectures

**Design Notes**
- Abstract visuals over literal illustrations
- Calm but futuristic tone

---

## 8. Call to Action Section

### Component: `<PrimaryCTA />`

### Structure
- Strong headline
- Supporting text
- Single dominant CTA

### Copy Style
- Direct
- Confident
- No pressure language

### Example
“Let’s build systems that matter.”

**Design Notes**
- High contrast
- Centered layout
- Large, confident typography

---

## 9. Footer

### Component: `<Footer />`

### Structure
- Company description
- Navigation links
- Contact information
- Legal / copyright

### Design Notes
- Clean grid
- Muted colors
- No clutter

**Success Signal:**  
Footer feels complete and professional, not forgotten.

---

## 10. Micro-Interactions & Polish

### Apply Globally
- Button hover transitions
- Link underline animations
- Section fade-ins on scroll

### Avoid
- Over-animation
- Flashy effects
- Unnecessary loaders

---

## Final Quality Checklist
Before considering the refactor complete:
- Does every component feel intentional?
- Is anything decorative without purpose?
- Would this design fit a defense or enterprise client?
- Does it feel calm, intelligent, and confident?

If not — simplify and refine.

---

## Final Directive to Cursor
Implement this refactor **component by component**, validating:
- Visual clarity
- Layout consistency
- Performance
- Accessibility

Build like this site represents a company trusted with critical systems.
