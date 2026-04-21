# Case Study System — Dead Link & Route Audit

## 1. Dead case study routes (FIXED)

All of the following previously pointed to `/portfolio/[slug]`, for which **no route existed** (404).

| # | Broken URL | Resolution |
|---|------------|------------|
| 1 | `/portfolio/ai-customer-analytics` | → `/case-studies/ai-customer-analytics` (redirect + real page) |
| 2 | `/portfolio/enterprise-saas` | → `/case-studies/enterprise-saas` |
| 3 | `/portfolio/mobile-banking` | → `/case-studies/mobile-banking` |
| 4 | `/portfolio/ecommerce-ai` | → `/case-studies/ecommerce-ai` |
| 5 | `/portfolio/healthcare-management` | → `/case-studies/healthcare-management` |
| 6 | `/portfolio/real-estate-platform` | → `/case-studies/real-estate-platform` |
| 7 | `/portfolio/velora` | → `/case-studies/velora` |
| 8 | `/portfolio/wellness-tracker` | → `/case-studies/wellness-tracker` |
| 9 | `/portfolio/chez-amis` | → `/case-studies/chez-amis` |
| 10 | `/portfolio/extreme-dept-kidz` | → `/case-studies/extreme-dept-kidz` |

**Root cause:** `caseStudyUrl` in `data/projects.json` used `/portfolio/*` while the app only defined `app/case-studies/[slug]`. No `app/portfolio/[slug]` existed.

**Fix applied:** Redirect `/portfolio/:slug` → `/case-studies/:slug` in `next.config.mjs`. All project `caseStudyUrl` values updated to `/case-studies/[slug]`. Every slug has a corresponding entry in `data/case-studies.json` with a generated page (Tier A, B, or C).

---

## 2. Modals / links that led nowhere

- **Project modal** did not link to the full case study; it only showed in-modal content. A “Read full case study →” link has been added, pointing to `project.caseStudyUrl` (now `/case-studies/[slug]`).
- **SelectedWork** (AppleCaseStudyCard) uses `onViewDetails` → opens modal. The modal now includes the case study link, so the flow is valid.

---

## 3. Placeholder / “coming soon” (out of scope for case studies)

- `app/companies/ai-innovations`, `cloud-dynamics`, `digital-ventures`: “Coming Soon” copy. **Recommendation:** Replace with restrained, non-promise copy or remove; human review.
- `components/about/ecosystem-section.tsx`: “Coming Soon” / “More innovative companies coming soon”. **Recommendation:** Same as above.

---

## 4. Guarantees after rebuild

- Every `caseStudyUrl` in the codebase resolves to a **real** case study page (Tier A, B, or C).
- No case study link targets an empty page, a 404, or a stub.
- New case studies **must** include a `confidentiality` flag (`public` | `limited` | `confidential`). Omission throws at load in `lib/case-studies.ts` and requires human review.

---

## 5. Edge cases — human review recommended

- **New case study without `confidentiality`:** Build will fail with a clear error; add the field and re-run.
- **New slug linked from UI but missing from `case-studies.json`:** Link will 404 until an entry is added. Prefer adding the case study record before linking.
- **Companies / ecosystem “Coming Soon”:** Outside case study system; replace with restrained copy or remove (see §3).
