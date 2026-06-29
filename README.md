# Runway — tingcellostudio.org

Personal website for **Ting-Chen Chen**, cellist and interdisciplinary artist.

Built with SvelteKit + TypeScript. Deployed to GitHub Pages at [tingcellostudio.org](https://tingcellostudio.org).

---

## Tech Stack

- **Framework**: SvelteKit (static export)
- **Language**: TypeScript
- **Package manager**: Yarn
- **Hosting**: GitHub Pages
- **Domain**: Porkbun → tingcellostudio.org
- **CI/CD**: GitHub Actions (auto-deploys on push to `main`)

---

## Local Development

```bash
yarn install
yarn dev --host
```

The `--host` flag makes it accessible on your local network (useful for testing on phone).

---

## Project Structure

```
src/
  lib/
    i18n.ts          # All English & Mandarin translations
  routes/
    +layout.svelte   # Shared layout: header, language toggle, menu
    +page.svelte     # Main landing page
    about/
      +page.svelte   # About Me page
    contact/
      +page.svelte   # Contact page (Instagram + email)
  app.css            # Global styles and color palette
static/
  portrait.jpg       # Main photo — replace with real image
  CNAME              # Custom domain for GitHub Pages
```

---

## Updating Content

### Name, title, bio, button labels
Edit `src/lib/i18n.ts` — all English and Mandarin text lives here.

### Photo
Replace `static/portrait.jpg` with the new image (keep the same filename, or update the `src` in `src/routes/+page.svelte`).

### Social links
Edit `src/routes/contact/+page.svelte` — Instagram handle and email are hardcoded there.

### Adding a new page
1. Create `src/routes/your-page/+page.svelte`
2. Add a link in the menu in `src/routes/+layout.svelte`
3. Add translated label to `src/lib/i18n.ts`

---

## Color Palette — Air Force Blue

| Variable    | Hex       | Usage                      |
|-------------|-----------|----------------------------|
| `--color-1` | `#5d8aa8` | Text, headings, accents    |
| `--color-2` | `#7da1b9` | Subtitles, borders         |
| `--color-3` | `#9eb9cb` | Button borders, header     |
| `--color-4` | `#bed0dc` | Hover fills, dividers      |
| `--color-5` | `#dfe8ee` | Background                 |

---

## Deployment

Deployments are automatic — push to `main` and GitHub Actions builds and deploys the site.

To deploy manually:
```bash
yarn build
```
Output goes to the `build/` folder.

---

## DNS Setup (Porkbun → GitHub Pages)

These records are set in Porkbun under DNS for `tingcellostudio.org`:

| Type | Host | Value |
|------|------|-------|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `pinkoa2.github.io` |

In GitHub → repo Settings → Pages:
- Source: **GitHub Actions**
- Custom domain: `tingcellostudio.org`
- Enforce HTTPS: **enabled**
