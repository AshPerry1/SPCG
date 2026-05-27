#!/bin/bash
# Fire-and-forget wrapper so hooks return immediately.
REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0
SCRIPT="$REPO_ROOT/.cursor/hooks/git-sync.sh"
[ -x "$SCRIPT" ] || chmod +x "$SCRIPT" 2>/dev/null || true
nohup "$SCRIPT" >/dev/null 2>&1 &
exit 0
