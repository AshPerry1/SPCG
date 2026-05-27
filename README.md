# SP Construction Group (SPCG)

**Live site:** [https://ashperry1.github.io/SPCG/](https://ashperry1.github.io/SPCG/)

This markdown file is for GitHub only — not the public homepage.

## GitHub Pages (pick one)

| Source | Settings |
|--------|----------|
| **Recommended** | **GitHub Actions** — workflow *Deploy site to GitHub Pages* |
| **Also works** | **Deploy from branch** → `main` → **`/docs`** or **`/` (root)** |
| **Also works** | **Deploy from branch** → `gh-pages` → **`/` (root)** |

Do **not** expect this README to appear at the live URL. Pushes to `main` rebuild the site into `docs/`, the repo root, and the `gh-pages` branch.

## Local build

```bash
npm run build:pages
```

## Edit content

| What | File |
|------|------|
| Contact, services, careers | `src/lib/site.ts` |
| Sam’s bio | `src/lib/sam.ts` |
| Photos | `public/images/` |
| Chat | `src/lib/chat-knowledge.ts` |
