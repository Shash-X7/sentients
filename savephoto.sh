#!/bin/bash
# Saves the photo you shared to the correct public path.
# Run: bash /Users/user/Desktop/AI/sentients/savephoto.sh /path/to/your/photo.jpg

SRC="$1"
DEST="/Users/user/Desktop/AI/sentients/public/images/shaashwath.jpg"

if [ -z "$SRC" ]; then
  echo "Usage: bash savephoto.sh /path/to/photo.jpg"
  echo ""
  echo "Your photo is likely in ~/Downloads or ~/Desktop."
  echo "Find it in Finder, right-click → Get Info to see the full path."
  exit 1
fi

cp "$SRC" "$DEST"
echo "✓ Photo saved to $DEST"
echo "Ready to build and push."
