#!/bin/bash
cd /Users/user/Desktop/AI/sentients
echo "🧹 Clearing .next cache..."
rm -rf .next
echo "🚀 Starting Sentients dev server..."
npm run dev 2>&1 | tee /Users/user/Desktop/AI/sentients/dev.log
