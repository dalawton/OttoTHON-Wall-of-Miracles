# OTTOTHON Website — Local Project

A multi-page static site for OTTOTHON, styled after the "Wall of Miracles" daisy/blue design.

## Structure

```
ottothon-site/
├── index.html                    Home
├── pages/
│   ├── events.html                Events (upcoming + past)
│   ├── wall-of-miracles.html      Miracle Kids, Success Stories, Why Wednesdays, Impact
│   ├── get-involved.html          Register, committees, donate, FAQ
│   └── about.html                 Mission, Eboard, hospital partner
└── assets/
    ├── styles.css                 Shared design system (colors, type, components)
    └── main.js                    Carousel arrows + active nav highlighting
```

## Running it locally

No build tools needed — it's plain HTML/CSS/JS. Two easy options:

**Option 1 — just open it**
Double-click `index.html` and it'll open in your browser. (A couple of things, like the carousel arrows, work best if served rather than opened directly — see Option 2 if something looks off.)

**Option 2 — serve it (recommended)**
From inside the `ottothon-site` folder, run one of:

```bash
# Python 3 (usually pre-installed on Mac)
python3 -m http.server 8000

# or, if you have Node installed
npx serve .
```

Then visit `http://localhost:8000` in your browser.

If you use VS Code, the **Live Server** extension also works great — right-click `index.html` → "Open with Live Server."

## What still needs your real content

Everything in `[brackets]` is a placeholder:
- Eboard names, roles, and Why Wednesday quotes (`about.html`, `wall-of-miracles.html`)
- Miracle Kid and Success Story photos + names (only add these with the family's permission)
- Event names, dates, and descriptions (`events.html`, `index.html`)
- FAQ answers (`get-involved.html`)
- Real donate/register links — currently placeholder `#` links. Point these at your actual BetterWorld donation page or registration form.

## Customizing the look

All colors, fonts, and spacing live in `assets/styles.css` under the `:root { ... }` block at the top — change a value there and it updates across every page.
