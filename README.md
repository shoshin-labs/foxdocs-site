# Foxdocs homepage redesign (prototype)

Static, multi-page marketing site. It is a redesign prototype for [foxdocs.com](https://www.foxdocs.com), not the live Webflow site and not the app at [app.foxdocs.com](https://app.foxdocs.com).

The look is an **editorial registry**: a policy register redesigned as a magazine. Shared CSS and JS, no framework, no build step.

## Open locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open http://127.0.0.1:8080/

You can also open `index.html` directly in a browser. Relative links still work.

## GitHub Pages

Serve from the **repository root** (these files at `/`). Do not point Pages at `/docs`.

- `index.html` is the home page
- `404.html` is the Pages not-found document
- No `CNAME` yet

Links are relative (`product.html`, `examples/harbor-care.html`), so the same files work on a project Pages URL or a custom domain later.

## Files

| Path | Role |
| --- | --- |
| `IA.md` | Information architecture |
| `css/site.css` | Shared styles |
| `js/site.js` | Menu state + demo form (mailto) |
| `favicon.svg` | Stamp mark |
| `index.html` | Home |
| `product.html` | Product |
| `how-it-works.html` | The five-step loop |
| `pricing.html` | Real monthly tiers |
| `book-a-demo.html` | Form to contact@foxdocs.com |
| `examples/harbor-care.html` | Labelled fictional example |
| `404.html` | Not found |

Header and footer markup is copied into each HTML file on purpose (no includes).

## Product facts this prototype uses

- Loop: Review, Improvement plan, Overhaul, Publish, Distribute
- Sub-agents: Fidelity, Completeness, Mechanics, Style
- Employees are not Users
- Pricing: Starter £65, Growth £145, Business £475, Enterprise talk to sales
- Existing upload tool: https://www.foxdocs.com/upload-a-document
- Privacy and cookies stay on the live site

Harbor Care is a **worked example**, not a customer.
