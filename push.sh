#!/bin/bash
cd /Users/user/Desktop/AI/sentients
git add -A
git commit -m "revert: remove SmoothScroller, restore native scroll-behavior smooth"
git push
echo "✅ Pushed"
