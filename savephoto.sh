#!/bin/bash
# ─────────────────────────────────────────────────────────────
#  SENTIENTS — Save founder photo
#  Usage: bash savephoto.sh /full/path/to/your/photo.jpg
#
#  Quick way to find your photo path:
#  1. Open Finder
#  2. Find the photo (Image 1 — the night bench shot in Europe)
#  3. Right-click → Get Info → expand "Where" to see the path
#  4. Or drag the file into Terminal to get the path
#
#  Example:
#  bash /Users/user/Desktop/AI/sentients/savephoto.sh ~/Desktop/shaashwath.jpg
# ─────────────────────────────────────────────────────────────

SRC="$1"
DEST="/Users/user/Desktop/AI/sentients/public/images/shaashwath.jpg"

if [ -z "$SRC" ]; then
  echo ""
  echo "No path provided. Usage:"
  echo "  bash savephoto.sh /path/to/your/photo.jpg"
  echo ""
  echo "To find the photo path, drag the image file into this Terminal window."
  exit 1
fi

if [ ! -f "$SRC" ]; then
  echo "File not found: $SRC"
  exit 1
fi

# Convert to JPEG if needed (handles PNG, HEIC etc.)
EXT="${SRC##*.}"
if [[ "$EXT" =~ ^(jpg|jpeg|JPG|JPEG)$ ]]; then
  cp "$SRC" "$DEST"
else
  # Try sips (macOS built-in) for format conversion
  sips -s format jpeg "$SRC" --out "$DEST" 2>/dev/null || cp "$SRC" "$DEST"
fi

echo ""
echo "✓ Photo saved to public/images/shaashwath.jpg"
echo ""
echo "Now push to deploy:"
echo "  cd /Users/user/Desktop/AI/sentients && git add -A && git commit -m 'feat: add founder photo' && git push"
echo ""
