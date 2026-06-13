#!/bin/bash
cd /Users/user/Desktop/AI/sentients
npm run dev > /Users/user/Desktop/AI/sentients/dev.log 2>&1 &
echo $! > /Users/user/Desktop/AI/sentients/dev.pid
echo "Dev server starting... PID: $!"
