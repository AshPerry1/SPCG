# SP Construction Group (SPCG)

## Live website

### [https://ashperry1.github.io/SPCG/](https://ashperry1.github.io/SPCG/)

---

### If you see this markdown, a “Loading…” page, or 404

GitHub must serve the **built static site**, not the repo root or this file.

1. Open **[github.com/AshPerry1/SPCG/settings/pages](https://github.com/AshPerry1/SPCG/settings/pages)**
2. **Build and deployment** → **Source: GitHub Actions** (recommended)
3. Click **Save**, then **Actions** → run **Deploy site to GitHub Pages** (or push to `main`)
4. Wait 2–3 minutes, hard-refresh (`Cmd+Shift+R` / `Ctrl+Shift+R`)

**Branch fallback:** Source → **Deploy from a branch** → branch **`main`** → folder **`/docs`** only. Never **`/` (root)** on `main` — that publishes this README.

`.nojekyll` is in the repo root and in `docs/` so GitHub does not run Jekyll on the export.

---

| Page | URL |
|------|-----|
| Home | [/SPCG/](https://ashperry1.github.io/SPCG/) |
| About Sam | [/SPCG/about/](https://ashperry1.github.io/SPCG/about/) |

| Edit | File |
|------|------|
| Contact, services, careers | `src/lib/site.ts` |
| Sam’s bio | `src/lib/sam.ts` |
| Photos | `public/images/` |
| Chat answers | `src/lib/chat-knowledge.ts` |

**Local Pages build:** `npm run build:pages` → `out/`. Refresh `docs/` fallback: `rm -rf docs/* && cp -a out/. docs/`

Repo: [github.com/AshPerry1/SPCG](https://github.com/AshPerry1/SPCG)
