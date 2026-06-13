#!/bin/bash
# Save the new B&W car photo as the founder image
SRC="$1"
DEST="/Users/user/Desktop/AI/sentients/public/images/shaashwath.jpg"
if [ -z "$SRC" ]; then echo "Usage: bash savephoto.sh /path/to/photo.jpg"; exit 1; fi
EXT="${SRC##*.}"
if [[ "$EXT" =~ ^(jpg|jpeg|JPG|JPEG)$ ]]; then cp "$SRC" "$DEST"
else sips -s format jpeg "$SRC" --out "$DEST" 2>/dev/null || cp "$SRC" "$DEST"; fi
echo "✓ Photo saved to $DEST"
