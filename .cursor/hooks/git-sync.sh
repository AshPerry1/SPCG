#!/bin/bash
# Debounced commit + push for SP Construction Group site.
# Called from Cursor hooks after file edits and when the agent stops.

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0
cd "$REPO_ROOT"

git rev-parse --git-dir >/dev/null 2>&1 || exit 0

LOCKDIR=".cursor/git-sync.lockdir"
DEBOUNCE_SECONDS=12

mkdir -p .cursor

# Debounce: only the last trigger within the window runs sync.
if ! mkdir "$LOCKDIR" 2>/dev/null; then
  exit 0
fi

cleanup() {
  rmdir "$LOCKDIR" 2>/dev/null || true
}
trap cleanup EXIT

sleep "$DEBOUNCE_SECONDS"

# Skip if another sync started after us.
if [ ! -d "$LOCKDIR" ]; then
  exit 0
fi

git add -A

if git diff --cached --quiet; then
  exit 0
fi

TIMESTAMP="$(date -u +"%Y-%m-%d %H:%M UTC")"
git commit -m "Auto-sync: site updates (${TIMESTAMP})"

BRANCH="$(git branch --show-current)"
REMOTE="$(git remote | head -n 1)"

if [ -z "$REMOTE" ]; then
  echo "git-sync: no git remote configured; committed locally only." >&2
  exit 0
fi

git push "$REMOTE" "$BRANCH" 2>&1 || {
  echo "git-sync: push failed (check auth and remote)." >&2
  exit 0
}
