# Reusing this template for a new client

This project is built so a new client project = **copy this folder, edit 2 files**,
no component code should need to change for a normal rebrand.

## 1. Copy the folder

```bash
cp -r freelance-agency-demo <client-name>-site
cd <client-name>-site
npm install
npm run dev
```

## 2. Edit `src/content.js`

This is the **only** place that holds text/data: brand name, nav links, hero copy,
services list, work/portfolio items, about text + stats, CTA copy, footer + socials.
Every component reads from this file — none of them hardcode copy.

- To add/remove a service or work item, just add/remove an object in the
  `services.items` / `work.items` arrays — the grid and cards adapt automatically.

## 3. Edit `src/theme.css`

Only 5 CSS variables control the whole color scheme:

| Variable | What it controls |
|---|---|
| `--bg` | page background |
| `--fg` | primary text / headings |
| `--muted` | secondary text |
| `--accent` | buttons, highlights, animated dot, marquee separator |
| `--line` | hairline borders / dividers |

Change these 5 values and the entire site re-skins — no component touches a color
literal directly.

## 4. Optional: swap fonts

`body { font-family: ... }` lives in `src/index.css`. Swap it there; everything
inherits from `body`.

## 5. What NOT to hardcode when extending this template

- New sections: put their copy in `content.js`, not inline JSX strings.
- New reusable visual elements (another kind of card, another kind of grid): add
  them to `src/components/ui/`, not directly inside a `sections/*.jsx` file — that
  keeps them reusable across future sections/clients too.
- Section-specific one-off markup stays in `src/components/sections/*.jsx`.

## Folder map

```
src/
  content.js        <- ALL text/data — edit this per client
  theme.css          <- ALL brand colors — edit this per client
  index.css          <- base reset + typography (rarely needs editing)
  App.css            <- shared component styling (rarely needs editing)
  components/
    ui/              <- generic, content-agnostic building blocks
      Reveal.jsx        (scroll-in animation wrapper)
      SectionHead.jsx   (index label + heading + description)
      Card.jsx          (generic number/title/text card)
      Marquee.jsx        (infinite scroll ticker, takes any word list)
    sections/        <- page sections, each wires content.js -> ui/
      Nav.jsx, Hero.jsx, Services.jsx, Work.jsx, About.jsx, CTA.jsx, Footer.jsx
  App.jsx            <- composes sections in order
```
