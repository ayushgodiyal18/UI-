# Nova Rane — Portfolio

A static one-page portfolio for a product/UX designer, built with plain HTML, CSS, and JavaScript (no build step, no dependencies). Ready to push straight to GitHub Pages.

## Structure

```
.
├── index.html        # all page content and sections
├── css/style.css      # design system: colors, type, layout, components
├── js/script.js        # nav toggle, meter/ring animations, contact form
└── assets/              # put real images here if you add any
```

## Customize it

Everything is placeholder content — swap it out in `index.html`:

- **Name, title, bio** — hero section and `#about`
- **Case studies** — each `.channel` article in `#work`; the thumbnails are inline SVGs, replace with real screenshots inside `assets/` if you have them
- **Skill levels** — the `--pct` values on `.ring` elements in `#panel`
- **Contact links** — email address and social URLs in `#contact`
- **Colors/fonts** — all defined as CSS variables at the top of `css/style.css` under `:root`

## Deploy with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under "Build and deployment," set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.

No build tools required — it's plain static files.
