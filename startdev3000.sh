#!/bin/bash
echo "Stopping existing Next.js..."
pkill -f "next dev" 2>/dev/null
pkill -f "next-server" 2>/dev/null
sleep 2
echo "Starting dev server on port 3000..."
cd /Users/user/Desktop/AI/sentients
rm -rf .next
PORT=3000 npm run dev
