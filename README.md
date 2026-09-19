# Pahal Investment — static website

Production-ready static marketing site for **Pahal Investment** (Durg, Chhattisgarh).  
Pure HTML / CSS / JS — no Node build, no paid hosting required.

**Tagline:** एक बेहतर कल की पहल

## Quick start (local)

1. Open the `site/` folder on your computer.
2. Double-click `index.html`, **or** from a terminal:

```bash
cd site
# Python 3
python3 -m http.server 8080
# then visit http://localhost:8080
```

Relative paths work when opening files directly; a local server is nicer for testing.

## What’s included

| File | Purpose |
|------|---------|
| `index.html` | Home — 3D hero, ₹18 banner, full services, stats |
| `about.html` | Founder story (Pahal Jain) |
| `contact.html` | Contacts, socials, mailto form, demat CTA |
| `assets/styles.css` | Shared styles (brand teal `#4B8B82`) |
| `assets/script.js` | Mobile menu + contact form → mailto + hero particles |
| `assets/logo.jpeg` | Brand logo |
| `EDITING.md` | Plain-language edit guide for Pahal |

## Key links (do not change casually)

- **Phone:** +91 70204 24247 (`tel:+917020424247`)
- **WhatsApp:** https://wa.me/917020424247
- **Demat / Open Account:** https://signup.definedgesecurities.com/mobemail?fr=7pw8lhW9xZk
- **Official email:** pahalinvestment42@gmail.com
- **Personal email:** pahalj20@gmail.com

## Deploy free — GitHub Pages

1. Create a GitHub repository (e.g. `pahal-investment`).
2. Upload **everything inside `site/`** as the repo root (or put `site/` contents in a `docs/` folder / `gh-pages` branch).
3. GitHub → **Settings → Pages**.
4. Source: Deploy from branch → `main` (or `gh-pages`), folder `/` (or `/docs`).
5. Save. Site will be at `https://YOURUSER.github.io/REPO/`.

If the repo is named `YOURUSER.github.io`, Pages serves from the root automatically.

**Do not add a `CNAME` file** until your custom domain DNS is ready.

## Deploy free — Cloudflare Pages

1. Push the same files to GitHub/GitLab (contents of `site/` as project root).
2. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo.
4. **Build settings:** leave Build command empty; Output directory = `/` (or `.`).
5. Deploy. You get a `*.pages.dev` URL instantly.

Netlify works the same way: drag-and-drop the `site/` folder, or connect Git with no build command.

## Custom domain later: pehalinvestment.co.in

> Note: spelling is **pehal** (as registered) — keep DNS consistent with the domain you own.

### When ready

1. Buy/point the domain at your registrar.
2. In GitHub Pages or Cloudflare Pages, add custom domain `pehalinvestment.co.in` (and optionally `www`).
3. At the DNS provider, add records they show (usually CNAME to `YOURUSER.github.io` or Cloudflare Pages target, plus any A records for apex).
4. Only then add a `CNAME` file in the repo root with:

```
pehalinvestment.co.in
```

5. Wait for DNS + HTTPS (often 5–60 minutes). Enable “Enforce HTTPS” in Pages settings.

## Brand notes

- Primary teal: `#4B8B82` (from logo)
- Hindi tagline appears in header and footer on every page
- Markets disclaimer is in the footer on every page
- Home hero uses CSS 3D floating cards + lightweight canvas particles; copy sits on an opaque panel above the decoration

## Support

For content edits, see **EDITING.md**.
