# Content Management System (CMS) Guide

Website copy and structure are driven by JSON under `/data` and `data/engagements.manifest.ts`. Update content there — not in scattered component files.

## Data files

```
data/
├── config.json              # Site config (contact, navigation)
├── services.json            # Service cards (marketing)
├── service-pages/           # Full service page definitions
├── engagements.manifest.ts    # /work grid + homepage selected work (source of truth)
├── case-studies.json        # Case study pages (/case-studies/[slug])
├── testimonials.json        # Legacy CMS export (homepage uses TrustTestimonialsSection)
├── team.json
├── technologies.json
├── blog.json
└── jobs.json
```

## Work & case studies

1. **`data/engagements.manifest.ts`** — Each engagement: title, disclosure (`live` | `limited` | `classified` | `pipeline`), optional `liveUrl`, `caseStudySlug`, `previewImage`, homepage flags.
2. **`data/case-studies.json`** — Narrative for case study pages. Slug must match `caseStudySlug` when linked.

Do not maintain a separate `projects.json`; it was removed to avoid duplicate, stale portfolio data.

## Testimonials

Homepage: `components/testimonials/TrustTestimonialsSection.tsx` (role + organization, paraphrased quotes).

`testimonials.json` is optional for future CMS use; keep aligned if you edit it.

## Services, team, blog, jobs

- **services.json** — Service grid content
- **team.json** — Team / about
- **blog.json** — Blog index metadata
- **jobs.json** — Careers

See existing JSON shapes in each file for field names.

## After editing

Restart the dev server if running. Production builds read JSON at build time.
