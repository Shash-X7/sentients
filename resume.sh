#!/bin/bash
set -e

PROJECT_DIR="/Users/user/Desktop/AI/sentients"
GITHUB_USER="shaash-X7"
REPO_NAME="sentients"

cd "$PROJECT_DIR"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  SENTIENTS — Resuming from build"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "▸ Running production build (static export)..."
npm run build
echo "  ✓ Build passed"
echo ""

echo "▸ Initialising git..."
git init
git add -A
git commit -m "feat: initial sentients.in build"
echo "  ✓ Committed"
echo ""

echo "▸ Pushing to GitHub..."
if command -v gh &> /dev/null; then
  echo "  GitHub CLI found — creating repo and pushing..."
  gh repo create "${GITHUB_USER}/${REPO_NAME}" --public --source=. --remote=origin --push 2>&1 || {
    echo "  Repo may exist — trying push..."
    git remote add origin "https://github.com/${GITHUB_USER}/${REPO_NAME}.git" 2>/dev/null || true
    git branch -M main
    git push -u origin main
  }
else
  echo "  No GitHub CLI — using git remote..."
  git remote add origin "https://github.com/${GITHUB_USER}/${REPO_NAME}.git" 2>/dev/null || true
  git branch -M main
  git push -u origin main
fi
echo "  ✓ Pushed to GitHub"
echo ""

echo "▸ Enabling GitHub Pages via API..."
if command -v gh &> /dev/null; then
  gh api --method POST -H "Accept: application/vnd.github+json" \
    "/repos/${GITHUB_USER}/${REPO_NAME}/pages" \
    -f build_type="workflow" 2>/dev/null && echo "  ✓ Pages enabled" || echo "  Pages may already be enabled — skipping"
fi
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✓ DONE — deployment triggered"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  GitHub Actions: https://github.com/${GITHUB_USER}/${REPO_NAME}/actions"
echo "  DNS A records needed:"
echo "    185.199.108.153"
echo "    185.199.109.153"
echo "    185.199.110.153"
echo "    185.199.111.153"
echo "  CNAME www → ${GITHUB_USER}.github.io"
echo ""
echo "▸ Starting local dev server at http://localhost:3000 ..."
npm run dev
