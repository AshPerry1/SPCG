# SP Construction Group (SPCG)

## Live website

### [https://ashperry1.github.io/SPCG/](https://ashperry1.github.io/SPCG/)

---

### If the site looks broken, shows README text, or keeps glitching

GitHub must serve the **built site**, not the markdown README.

1. Open **[github.com/AshPerry1/SPCG/settings/pages](https://github.com/AshPerry1/SPCG/settings/pages)**
2. **Build and deployment** → Source: **GitHub Actions** (not “Deploy from branch”)
3. Save, then open **Actions** → run **Deploy site to GitHub Pages** if needed
4. Wait 2–3 minutes, hard-refresh the site (`Cmd+Shift+R` / `Ctrl+Shift+R`)

The repo also includes a root `index.html` redirect and `.nojekyll` so the README is not used as the homepage when branch deploy is misconfigured.

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

Repo: [github.com/AshPerry1/SPCG](https://github.com/AshPerry1/SPCG)
