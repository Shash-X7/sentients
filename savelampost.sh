#!/bin/bash
# Usage: bash savelampost.sh /path/to/lampost/photo.jpg
# Drag the lamppost photo into Terminal to get its path, then run this.
if [ -z "$1" ]; then
  echo "Usage: bash savelampost.sh /path/to/photo.jpg"
  exit 1
fi
cp "$1" /Users/user/Desktop/AI/sentients/public/images/lampost.jpg
echo "✅ Saved to public/images/lampost.jpg — refresh http://localhost:3001/about to see it"
