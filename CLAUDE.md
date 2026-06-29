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

- Fixed header with **language toggle on the left** and **hamburger menu (☰) on the right**.
- The hamburger opens a full-screen overlay with links to Home, About Me, and Contact Me.
- A fun hand-drawn "click me" doodle (Caveat font + SVG wobbly arrow) points at the menu button and disappears after first click.

## Pages

### Main Page (`/`)

- **Layout (mobile)**: photo stacked on top, bio content below.
- **Layout (desktop)**: photo fills the left half (sticky, with margin/border-radius), bio on the right.
- **Content**:
  - Name: Ting-Chen Chen
  - Title: Cellist
  - Intro bio paragraph
  - Two pill buttons: About Me, Contact Me

### About Me (`/about`)

Placeholder — content TBD.

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
- **Fonts**: Caveat (Google Fonts) for doodle text

## Color Palette — Air Force Blue

| Variable    | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| `--color-1` | `#5d8aa8` | Darkest — text, accents      |
| `--color-2` | `#7da1b9` | Subtitle, borders, socials   |
| `--color-3` | `#9eb9cb` | Button borders, header btns  |
| `--color-4` | `#bed0dc` | Hover fills, dividers        |
| `--color-5` | `#dfe8ee` | Background                   |

## Notes

- The site must support English and Mandarin throughout.
- Additional pages beyond About and Contact are TBD.
