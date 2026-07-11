# Jay Parmar — Portfolio

A warm, editorial coding portfolio. React + Vite + Tailwind CSS.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Where things live

```
index.html                 # fonts + root
src/
  main.jsx                 # entry
  App.jsx                  # layout + scroll-reveal observer
  index.css                # Tailwind layers + grain / sticky-note / reveal CSS
  data.js                  # ← edit ALL content + links here
  components/
    Nav.jsx                # sticky nav, smooth-scroll, mobile menu
    Ticker.jsx
    Hero.jsx               # about
    Experience.jsx
    Projects.jsx           # GitHub + live-demo links, per-card hover color
    Human.jsx              # YouTube + photography
    Footer.jsx
    ScrollProgress.jsx
    BackToTop.jsx
    BuildNotes.jsx         # sticky-note modal
```

## Edit me

Everything content-related is in `src/data.js`:

- `LINKS` — GitHub handle, LinkedIn, email, resume path, YouTube, photography
- `PROJECTS` — each has `repo`, `demo` (leave `""` to hide the demo link), `color` (hover accent) and `gradient` (top bar)
- `XP` — experience rows
- `NOTES` — the "off the clock" cards
- `LAST_UPDATED`

Hero/about copy lives in `src/components/Hero.jsx`.

## Still placeholder

`your-handle` (GitHub/LinkedIn), `you@email.com`, `/resume.pdf`, the project `demo` URLs,
the photo block in Hero, and the TrustBin / AI Jurist / WeatherHub blurbs.
