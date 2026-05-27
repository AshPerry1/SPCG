# SP Construction Group (SPCG)

**Live site:** [https://ashperry1.github.io/SPCG/](https://ashperry1.github.io/SPCG/)

This file is for developers on GitHub. It is **not** the public website.

## GitHub Pages setup (one time)

1. [Settings → Pages](https://github.com/AshPerry1/SPCG/settings/pages)
2. **Source:** **GitHub Actions** (recommended), **or** **Deploy from a branch** → `main` → **`/docs`**
3. Do **not** use **`/` (root)** — that shows this README instead of the site.

Pushes to `main` run **Deploy site to GitHub Pages**, which builds the Next.js export and updates `docs/`.

## Local build

```bash
npm run build:pages   # output in out/
```

## Edit site content

| What | File |
|------|------|
| Contact, services, careers | `src/lib/site.ts` |
| Sam’s bio | `src/lib/sam.ts` |
| Photos | `public/images/` |
| Chat | `src/lib/chat-knowledge.ts` |
