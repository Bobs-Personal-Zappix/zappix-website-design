# Zappix — Marketing Site Prototype

Static one-page prototype of the new Zappix brand site, based on the design canvas from Claude Design. Built as a pure HTML/CSS/JS site for fast iteration and easy deploy to Cloudflare Pages via GitHub.

This is a **prototype for leadership review**. Nav links (Platform / Products / Outcomes / Resources / Company) are `#` placeholders for now — the linked pages will be built out in a follow-up pass once leadership signs off on the homepage.

---

## File structure

```
zappix-site/
├── index.html      ← the single page
├── styles.css      ← all styling (responsive: desktop / tablet / mobile)
├── script.js       ← mobile nav toggle + sticky header
├── _headers        ← Cloudflare Pages cache + security headers
├── .gitignore
└── README.md
```

No build step. No dependencies. Drop it in a repo and ship it.

---

## Local preview

Just open `index.html` in a browser — it works.

For a more faithful preview (proper relative paths, no `file://` quirks), run a one-line local server from the project folder:

```bash
# Python 3
python3 -m http.server 8000

# Node (if you have npx)
npx serve .
```

Then open `http://localhost:8000`.

---

## Deploy: GitHub → Cloudflare Pages

The same pattern as your Allnighters site.

### 1. Push to GitHub

```bash
cd zappix-site
git init
git add .
git commit -m "Initial commit — Zappix prototype site"
git branch -M main

# Create a new repo on github.com (e.g. zappix-prototype), then:
git remote add origin https://github.com/<your-username>/zappix-prototype.git
git push -u origin main
```

### 2. Connect Cloudflare Pages

1. Go to **Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git**.
2. Authorize and pick the `zappix-prototype` repo.
3. **Project name:** `zappix-prototype` (this becomes `zappix-prototype.pages.dev`).
4. **Production branch:** `main`.
5. **Framework preset:** None.
6. **Build command:** *(leave empty — no build step)*.
7. **Build output directory:** `/` (root).
8. Click **Save and Deploy**.

First build takes ~30 seconds. Your preview URL will be `https://zappix-prototype.pages.dev`.

### 3. (Optional) Custom domain

Once leadership is happy, in the Pages project go to **Custom domains → Set up a custom domain** and point e.g. `preview.zappix.com` (or a path on your existing domain) to the project. Cloudflare will issue an SSL cert automatically.

### 4. Iterate

Every `git push` to `main` triggers a new deploy. For experimental changes, push to any other branch and Cloudflare will give you a unique preview URL per branch — handy for sharing variants with leadership without disturbing the main preview.

---

## Editing the content

All copy lives in `index.html` and is plain HTML — no templating, no CMS. Search for the headline ("Stop buying AI software") to find the hero; sections are clearly marked with HTML comments like `<!-- ============ §02 TWO GAPS ============ -->`.

Italic accent words (the editorial serif emphasis) are wrapped in `<em>` tags — e.g. `<em>outcomes</em>` renders in Instrument Serif italic.

### Design tokens

All colors, fonts, and spacing are defined as CSS variables at the top of `styles.css` under `:root { … }`. To rebrand a section quickly, change tokens there rather than hunting through the file.

### Fonts

The site uses three Google Fonts (loaded from `fonts.googleapis.com`):
- **Geist** — primary sans
- **Geist Mono** — section markers, eyebrows, monospace labels
- **Instrument Serif** — italic accent words

These match the look of the Claude Design canvas. To swap fonts, edit the `<link>` in `index.html` and the `--font-*` variables in `styles.css`.

---

## What's not in this prototype (intentional, for phase two)

- **Linked nav pages** (Platform / Products / Outcomes / Resources / Company) — all `href="#"` for now.
- **Discovery call flow** — both CTAs and the email link use `mailto:hello@zappix.com`. Easy to swap for a Calendly/HubSpot scheduler URL later.
- **Customer logos / testimonials** — section can be inserted between Trust and Final CTA when you're ready.
- **Case study cards** — same.
- **CMS** — currently raw HTML editing. If marketing needs to update copy without touching code, we can wire up Decap CMS (same pattern as allnighterssoftball.com) in phase two.
- **Analytics** — no tracking installed. Add Cloudflare Web Analytics or your tag of choice when going live.

---

## Notes on the design

The Claude Design export was a fixed 1440px desktop canvas. This prototype reconstructs the same aesthetic (editorial Swiss minimalism, Geist + Instrument Serif italic, §-section markers, hairline rules, monospace labels) as a **fully responsive** layout — desktop, tablet, and mobile all work. The visual mockups in the multimodal section, the product mockups, and the multi-touch sequence diagram are reproduced as CSS / HTML so they're editable in place rather than baked into images.

---

© 2026 Zappix, Inc.
