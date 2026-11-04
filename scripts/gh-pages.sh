#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
REMOTE="$(git remote get-url origin)"
SLUG="$(printf '%s' "$REMOTE" | sed -E 's#^.*github\.com[:/]+##; s#\.git$##')"
OWNER="${PAGES_OWNER:-${SLUG%%/*}}"
REPO="${SLUG##*/}"
BASE="/$REPO"
if [[ "$REPO" == *.github.io ]]; then BASE=""; fi
ORIGIN="https://$(printf '%s' "$OWNER" | tr '[:upper:]' '[:lower:]').github.io"
NEXT_PUBLIC_BASE_PATH="$BASE" NEXT_PUBLIC_SITE_URL="$ORIGIN" SITE_NOINDEX=0 npm run export
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
cp -a out/. "$TMP/"
touch "$TMP/.nojekyll"
git -C "$TMP" init -q -b gh-pages
git -C "$TMP" add -A
git -C "$TMP" -c user.name="$(git config user.name)" -c user.email="$(git config user.email)" commit -q -m "Статическая сборка Livadia для GitHub Pages"
PUSH_CONFIG=()
if [[ "$(git config --get url.git@github.com:.insteadOf || true)" == "https://github.com/" ]]; then
    PUSH_CONFIG=(-c "url.git@github.com:.insteadOf=https://github.com/")
fi
git -C "$TMP" "${PUSH_CONFIG[@]}" push -q -f "$REMOTE" gh-pages
printf 'Опубликовано: %s%s/\n' "$ORIGIN" "$BASE"
