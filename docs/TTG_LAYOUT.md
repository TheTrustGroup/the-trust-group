# TTG layout (nav + footer)

Design-system nav and footer matching the live site (Cormorant Garamond + Jost, navy CTA, newsletter strip, config-driven services/contact).

## Components

- **`components/ttg-nav.tsx`** — Fixed nav: logo, centred links (Capabilities, Work, Company, Insights), pill CTA “Private Briefing →”, mobile hamburger with scroll lock. Uses `app/ttg-design.css`.
- **`components/ttg-footer.tsx`** — Footer: newsletter form, brand + socials, Quick Links, Services (from `siteConfig.navigation.footer.services`), Contact (from `siteConfig.contact`), legal bar. Client component (form state).

## Toggle

- **`lib/layout-feature.ts`** — `USE_TTG_LAYOUT = true` → use TTGNav + TTGFooter. `false` → use existing Header + EditorialFooter.
- **Rollback:** Set `USE_TTG_LAYOUT = false` and deploy. No other code changes required.

## Styles

- **`app/ttg-design.css`** — Scoped to `.ttg-nav` and `.ttg-footer*`. CSS variables under `--ttg-*`. Imported in `app/layout.tsx` (always; unused when layout is editorial).

## Data

Nav and footer content comes from `data/config.json` via `siteConfig` (company, contact, navigation.footer.services, socialLinks). Quick Links and Legal are constants in the components.
