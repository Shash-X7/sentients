#!/bin/bash
cd /Users/user/Desktop/AI/sentients
git add -A
git commit -m "fix: split CONTENT into pure data file, no client boundary at generateStaticParams"
git push
echo "✅ Pushed"
