#!/usr/bin/env bash
# Copy static export from out/ to repo root for GitHub Pages "Deploy from branch / (root)".
# Safe: only touches known export paths, not src/ or package.json.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/out"

if [[ ! -f "$OUT/index.html" ]]; then
  echo "Missing $OUT/index.html — run npm run build:pages first" >&2
  exit 1
fi

cd "$ROOT"
while IFS= read -r -d '' item; do
  name="$(basename "$item")"
  rm -rf "$name"
  cp -a "$item" "$name"
done < <(find "$OUT" -mindepth 1 -maxdepth 1 -print0)

touch .nojekyll
echo "Synced $(find "$OUT" -mindepth 1 -maxdepth 1 | wc -l | tr -d ' ') items from out/ to repo root."
