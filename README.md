# SP Construction Group (SPCG)

## Live website

### [https://ashperry1.github.io/SPCG/](https://ashperry1.github.io/SPCG/)

---

### If you see README text, a “Loading…” page, or a broken site

GitHub must serve the **built static site**, not the repo root or this markdown file.

1. Open **[github.com/AshPerry1/SPCG/settings/pages](https://github.com/AshPerry1/SPCG/settings/pages)**
2. **Build and deployment** → **Source: GitHub Actions** (not “Deploy from a branch”)
3. Click **Save**
4. Open **Actions** → run **Deploy site to GitHub Pages** (or push to `main` and wait for the workflow)
5. After it finishes, hard-refresh the site (`Cmd+Shift+R` / `Ctrl+Shift+R`)

**Fallback (branch deploy):** If you cannot use Actions, set Source to **Deploy from a branch**, branch **`main`**, folder **`/docs`** only — never **`/` (root)**. The `docs/` folder holds the full static export.

The repo includes **`.nojekyll`** at the root and in `docs/` so GitHub does not run Jekyll on the export.

---

| Page | URL |
|------|-----|
| Home | [/SPCG/](https://ashperry1.github.io/SPCG/) |
| About Sam | [/SPCG/about/](https://ashperry1.github.io/SPCG/about/) |

| Edit | File |
|------|------|
| Contact, services, careers | `src/lib/site.ts` |
| Sam’s bio | `src/lib/sam.ts` |
| Photos | `public/images/` (see `public/images/README.md`) |
| Chat answers | `src/lib/chat-knowledge.ts` |

**Build locally for Pages:** `npm run build:pages` → output in `out/`. To refresh the `docs/` fallback: `rm -rf docs/* && cp -a out/. docs/`

Repo: [github.com/AshPerry1/SPCG](https://github.com/AshPerry1/SPCG)
