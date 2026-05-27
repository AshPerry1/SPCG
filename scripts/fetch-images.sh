#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)/public"

dlimg() {
  local path="$1" url="$2"
  curl -sSL -A "Mozilla/5.0" -L "$url" -o "$ROOT$path"
  local sz
  sz=$(wc -c < "$ROOT$path" | tr -d ' ')
  if [ "$sz" -gt 1000 ]; then
    echo "OK $path (${sz}b)"
  else
    rm -f "$ROOT$path"
    echo "FAIL $path"
    return 1
  fi
}

dlimg "/images/gallery/03-commercial.jpg" "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200"
dlimg "/images/audiences/developers.jpg" "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
dlimg "/images/services/commercial.jpg" "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=900"
dlimg "/images/services/renovations.jpg" "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900"
dlimg "/images/projects/home-lakefront.jpg" "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=85"
dlimg "/images/projects/retail-buildout.jpg" "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85"
dlimg "/images/projects/whole-home.jpg" "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1400"
dlimg "/images/projects/office-ti.jpg" "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=85"
dlimg "/images/projects/addition.jpg" "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85"
dlimg "/images/projects/restoration.jpg" "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=85"
dlimg "/images/testimonials/client-1.jpg" "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
dlimg "/images/testimonials/client-2.jpg" "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
