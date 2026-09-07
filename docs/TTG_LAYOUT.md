# TTG layout (nav + footer)

Single chrome system: TTGNav + TTGFooter (Cormorant Garamond + Jost). No alternate Header/Footer path.

## Components

- **`components/ttg-nav.tsx`** — Fixed nav: logo, links (Capabilities, Work, Company, Insights), pill CTA “Private Briefing →”, mobile menu.
- **`components/ttg-footer.tsx`** — Brand, socials, Quick Links, Services (`siteConfig`), Contact, legal bar.

## Styles

- **`app/ttg-design.css`** — `--ttg-*` tokens, nav/footer, shared section utilities. Imported in `app/layout.tsx`.
- **`app/globals.css`** — Base tokens and typography aliased to the same Jost/Cormorant stack.

## Data

Nav/footer content from `data/config.json` via `siteConfig`.
