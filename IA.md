# Foxdocs public site IA

Prototype map for a root-based GitHub Pages site (and, later, foxdocs.com). Relative links only.

## What this site is for

Foxdocs is an AI policy and compliance document platform (app.foxdocs.com, BETA). The public site has to explain the real loop, the real tariff, and how staff acknowledgements differ from app seats. It is not a second copy of the app.

## Primary nav (every page)

- Product → `product.html`
- How it works → `how-it-works.html`
- Pricing → `pricing.html`
- Example → `examples/harbor-care.html`
- Sign in → `https://app.foxdocs.com`
- Book a demo → `book-a-demo.html`

Secondary, not in the bar: Analyse a document → `https://www.foxdocs.com/upload-a-document` (existing public tool).

Footer on every page: © 2026 Foxdocs Limited · Jersey · Privacy and Cookies on the live site · contact@foxdocs.com.

## Page map

| URL | File | Job |
| --- | --- | --- |
| `/` | `index.html` | Hero, CSS product preview, short loop, link to Harbor Care, CTA |
| `/product.html` | `product.html` | Reviews, plans, overhauls, playbooks, knowledge, staff vs seats, export |
| `/how-it-works.html` | `how-it-works.html` | Five-step editorial timeline with app UI language |
| `/pricing.html` | `pricing.html` | Starter, Growth, Business, Enterprise. Monthly £. No invented discount |
| `/examples/harbor-care.html` | `examples/harbor-care.html` | Labelled EXAMPLE. Multi-site fictional rollout |
| `/book-a-demo.html` | `book-a-demo.html` | Mailto form to contact@foxdocs.com |
| (missing path) | `404.html` | GitHub Pages not-found |

No `CNAME` in this prototype.

## Home

- Headline: “See what’s wrong. Fix it. Prove it was read.”
- Sub: scores, plans edits with you, publishes a classified version, tracks who acknowledged.
- CTAs: Book a demo, Sign in. Secondary: Analyse a document.
- Product preview is CSS (folio + stamp). Not a screenshot of the real app.
- Loop teaser (vertical spine, not five equal cards) links to How it works.
- Harbor Care is linked and described as a worked example, not a customer.

## Product (deep)

Anchors:

- `#reviews` Fidelity, Completeness, Mechanics, Style (Integrity / Language groups as in org settings)
- `#plans` Scope, then accept or reject. Saves as a version
- `#overhauls` Full rewrite against the document type template
- `#playbooks` Flowchart builder
- `#knowledge` URL crawl / sync. Business: custom knowledge, horizon scanning, Policy Co-Pilot
- `#staff` Employees register vs Users / seats
- `#export` Content, Activity, Versions, Timeline, Distributions, Shares, Export

Also named, without a fake screenshot: Folders, org switcher, dark mode in the app, Chat to Edit, document scores.

## How it works

Long spine:

1. Review (Start Analysis, default sub-agents, score)
2. Improvement plan (Improve document, accept / reject, new version)
3. Overhaul (Start Overhaul)
4. Publish (Versions, Timeline, Activity, Shares, Export, classification)
5. Distribute (Distributions, Employees, acknowledgements, signatures invalidated on a later publish)

## Pricing (real tiers)

| Tier | Price | Scope |
| --- | --- | --- |
| Starter | £65 / month | 1 seat |
| Growth | £145 / month | 5 seats, 30 staff |
| Business | £475 / month | 10 seats, 150 staff, horizon scanning, custom knowledge base, Policy Co-Pilot |
| Enterprise | Talk to sales | SSO, BYO keys, self-host, unlimited seats and staff |

No annual prices. Features listed are from the current public tariff, not invented add-ons.

## Example: Harbor Care

Clearly labelled **Example** / **Fictional care group** / **Not a customer**.

Fictional operator with three homes (Seaview House, Oak Lodge, The Willows) sharing one register. One Safeguarding Adults Policy: scored review, improvement plan with accept/reject, published version 2, then three distributions to Employees at each site.

Do not present this as a live customer, testimonial, or result.

## Shared chrome

Identical header and footer markup on every page (path prefixes adjusted on the example page). Shared `css/site.css` and `js/site.js`. No build step, no framework.

## What we did not invent

- Customers, quotes, metrics, or “N policies processed”
- Annual discounts
- Classification level names beyond “classification sits on the published copy”
- Purple product UI, neon mint marketing, or a screenshot of app.foxdocs.com
