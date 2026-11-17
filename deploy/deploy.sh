#!/usr/bin/env bash
# Server-side deploy step for the PAIR website (https://pair-hud.com). Runs as
# the `pair` user on the production server with a tarball of the static export
# (`next build` -> out/):
#
#   bash deploy.sh /var/www/pair-website/incoming.tgz
#
# Unpacks it into /var/www/pair-website/releases/<timestamp>, checks the key
# pages are there, points `current` at it (Nginx serves `current` directly, so
# there is nothing to restart) and keeps the last 5 releases.
#
# Roll back by pointing `current` at an earlier release:
#   ln -sfn /var/www/pair-website/releases/<timestamp> /var/www/pair-website/current
set -euo pipefail

TARBALL="${1:?usage: deploy.sh <site.tgz>}"
BASE=/var/www/pair-website
RELEASES="$BASE/releases"

umask 022  # Nginx (www-data) must be able to read every file
mkdir -p "$RELEASES"
STAMP="$(date +%Y%m%d%H%M%S)"
TARGET="$RELEASES/$STAMP"
mkdir -p "$TARGET"
tar -xzf "$TARBALL" -C "$TARGET" --no-same-owner --no-same-permissions
REVISION="$(cat "$TARGET/REVISION" 2>/dev/null || echo unknown)"

for page in index.html 404.html robots.txt sitemap.xml; do
  if [ ! -s "$TARGET/$page" ]; then
    echo "Release $REVISION is missing $page - not deploying it" >&2
    rm -rf "$TARGET"
    exit 1
  fi
done

ln -sfn "$TARGET" "$BASE/current.new" && mv -T "$BASE/current.new" "$BASE/current"

# Keep the 5 newest releases.
ls -1dt "$RELEASES"/*/ | tail -n +6 | xargs -r rm -rf
echo "Website deployed ($REVISION) -> $TARGET"
