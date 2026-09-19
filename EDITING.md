# How to edit this website (for Pahal)

You do **not** need a developer for small changes. Edit the text files and re-upload (or commit on GitHub).

## Easiest ways to edit

### A) GitHub website (no software)

1. Open your GitHub repo in the browser.
2. Click a file (e.g. `index.html`) → pencil icon **Edit**.
3. Change the text carefully → **Commit changes**.
4. GitHub Pages / Cloudflare Pages will republish automatically (usually within a minute).

### B) Cursor or any code editor

1. Open the `site/` folder.
2. Edit the HTML / CSS files.
3. Save, then push to GitHub (or re-upload to your host).

### C) Preview on your phone/laptop before publishing

Open `index.html` in a browser, or run:

```bash
cd site
python3 -m http.server 8080
```

Visit `http://localhost:8080`.

---

## Which file has what?

| What you want to change | File |
|-------------------------|------|
| Home page text, ₹18 banner, services, testimonials | `index.html` |
| Founder story / About | `about.html` |
| Phone, emails, address, social links, contact form | `contact.html` |
| Colours, fonts, spacing, mobile layout | `assets/styles.css` |
| Mobile menu behaviour, contact form → email | `assets/script.js` |
| Logo image | `assets/logo.jpeg` (replace file; keep same name) |

Header navigation and footer exist **on each HTML page** — if you change a menu label, update all three: `index.html`, `about.html`, `contact.html`.

---

## Important contacts (keep exact)

When editing, search the page for these strings and replace carefully:

| Item | Exact value |
|------|-------------|
| Phone (display) | `+91 70204 24247` |
| Phone (link) | `tel:+917020424247` |
| WhatsApp | `https://wa.me/917020424247` |
| Demat / Open Account | `https://signup.definedgesecurities.com/mobemail?fr=7pw8lhW9xZk` |
| Business email | `pahalinvestment@outlook.com` |
| Secondary email | `pahalj20@gmail.com` |
| Hindi tagline | `एक बेहतर कल की पहल` |

**Do not** add the old number `8149945914` anywhere.

Tip in GitHub: press `Ctrl+F` / `Cmd+F` and search for `70204` or `wa.me` to find every place a phone/WhatsApp link appears (nav CTA, footer, floating button, banners).

---

## Change the logo

1. Export a square JPEG or PNG of the new logo.
2. Name it exactly `logo.jpeg`.
3. Replace `assets/logo.jpeg` (upload overwrite on GitHub).
4. Keep dimensions reasonable (under ~300 KB is ideal for speed).

---

## Change the ₹18 offer text

On `index.html`, find the green/teal band with class `flash-banner` (search for `₹18`).  
Update the price text there **and** any other “₹18 per order” mentions on About / Contact if the offer changes.

---

## Change testimonials

On `index.html`, search for `Suyash`, `Vardhaman`, or `Yash`.  
Each testimonial is an `<article class="testimonial">` block — edit the quote and the name/role under `<cite>` and `.role`.

---

## Contact form

The form on `contact.html` does **not** save messages on a server.  
It opens the visitor’s email app addressed to `pahalinvestment@outlook.com` with subject and body filled in.

To change the destination email, edit **both**:

1. The visible email text on `contact.html`
2. The address inside `assets/script.js` (`mailto:pahalinvestment@outlook.com`)

---

## Social media links

All social buttons are on `contact.html` (and can be added to the footer if you wish).  
Links open in a new tab:

- LinkedIn, X, Instagram, Facebook, YouTube

Edit the `href="..."` on each `<a class="social-btn">`.

---

## Colours (brand teal)

In `assets/styles.css`, at the top:

```css
--teal: #4B8B82;
```

Change that one value (and related `--teal-dark` / `--teal-deep` if needed) to restyle the whole site.

---

## Disclaimer

The markets disclaimer is in the footer of every page. Keep it.  
Do **not** invent SEBI registration numbers or guaranteed returns.

---

## After you edit

1. Preview locally.
2. Commit / upload.
3. Visit the live site and click: Home, About, Contact, Open Account, WhatsApp, phone, emails.

If something looks broken on mobile, open the site on your phone and check the menu (☰) and floating WhatsApp button.
