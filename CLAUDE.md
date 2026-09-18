## Project Configuration

- **Language**: TypeScript
- **Package Manager**: yarn
- **Add-ons**: none

---

# Runway

Runway is a landing page website for musicians, primarily built for a cellist.

## Concept

A polished, professional web presence for Ting-Chen Chen — a cellist and interdisciplinary artist. The site should feel elegant and personal, appropriate for a classical/contemporary musician.

## Design Philosophy

- **Mobile-first**: The primary render target is the phone. All layouts, typography, and interactions should look great on mobile before being adapted for larger screens.
- **Browser-friendly**: The desktop experience should still be beautiful and intentional — not just a stretched mobile layout.

## Internationalization

- A toggle in the top-left switches the entire site between **English** and **Mandarin**.
- All user-facing text lives in `src/lib/i18n.ts` as a derived Svelte store.
- Mandarin name: 陳婷辰

## Layout & Navigation

- Fixed header with **language toggle on the left** and **hamburger menu (☰) on the right**. Buttons have a translucent `--color-5` fill with backdrop blur so they stay readable over photos.
- The hamburger opens a full-screen overlay with links to Home, About Me, Educator, Contact Me, and QR Code.
- A fun hand-drawn "click me" doodle (Caveat font + SVG wobbly arrow) points at the menu button and disappears after first click.

## Pages

### Main Page (`/`)

- **Layout (mobile)**: photo stacked on top, bio content below.
- **Layout (desktop)**: photo fills the left half (sticky, with margin/border-radius), bio on the right.
- **Content**:
  - Name: Ting-Chen Chen
  - Title: Cellist
  - Intro bio paragraph
  - Three pill buttons: About Me, Educator, Contact Me

### About Me (`/about`)

Placeholder — content TBD.

### Educator (`/educator`)

Teaching page. Single scrolling column (max 640px mobile / 860px desktop). Sections in order:

1. **Banner** — one teaching photo (`static/teaching.jpg`, currently a stock placeholder — replace with a real one) across the top. Full-bleed 2:1 on mobile; on desktop it sits in the content column (764px wide) at 5:2 with rounded corners and the card shadow, below the fixed header, matching the home page photo treatment.
2. **Teaching Philosophy** — eyebrow, headline ("Music, woven into the fabric of life."), tagline.
3. **Core Values** — four cards (2×2 grid on desktop). Each card shows a number, title, and the *short* blurb; tapping expands it in place to reveal the *long* paragraph. One card open at a time. Cards are `<button>`s with `aria-expanded`.
4. **Lessons** — intro line ("I teach beginners, advanced students, and adults." — the brief's "Who I Teach" list, folded into a sentence), then two columns on desktop: Private Cello Lessons (all levels) and Cello Ensembles, each with a bullet list.
5. **CTA** — links to `/contact`. A trial-lesson / scheduling sign-up is a possible future addition.

Sections from the original brief with no copy yet are intentionally not rendered: Teaching Approach, Musical Exploration, Audition & Performance Preparation, Student Experience, FAQ.

All copy lives under `t.edu` in `src/lib/i18n.ts`.

### QR Code (`/qr`)

Displays a QR code linking to the site.

### Contact Me (`/contact`)

- Displays social links:
  - Instagram: [@tingzhen0518](https://instagram.com/tingzhen0518)
  - Email: tingcellostudio@gmail.com

## Tech Stack

- **Framework**: SvelteKit
- **Rendering**: Static site generation (SSG)
- **Language**: TypeScript
- **Package manager**: Yarn
- **Styling**: Plain CSS with CSS custom properties
- **Fonts**: Georgia for body; Noto Serif TC (Google Fonts) as the CJK fallback so Mandarin renders in a matching serif; Caveat (Google Fonts) for doodle text
- **Shared styles**: `.btn` pill button and `--text` / `--text-soft` colors live in `src/app.css`
- **`<html lang>`** is synced to the language toggle (`en` / `zh-Hant`) from `+layout.svelte`

## Color Palette — Air Force Blue

| Variable    | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| `--color-1` | `#5d8aa8` | Darkest — text, accents      |
| `--color-2` | `#7da1b9` | Subtitle, borders, socials   |
| `--color-3` | `#9eb9cb` | Button borders, header btns  |
| `--color-4` | `#bed0dc` | Hover fills, dividers        |
| `--color-5` | `#dfe8ee` | Background                   |

## Hosting

- **Platform**: GitHub Pages (free)
- **Domain**: tingcellostudio.org (purchased on Porkbun)
- **CI/CD**: GitHub Actions — auto-deploys on every push to main
- **DNS**: Porkbun nameservers pointed to GitHub Pages

## Notes

- The site must support English and Mandarin throughout.
- Additional pages beyond About and Contact are TBD.
