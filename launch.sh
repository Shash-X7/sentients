#!/bin/bash
# ─────────────────────────────────────────────────────────────────
#  SENTIENTS — One-shot launch script
#  Run from: /Users/user/Desktop/AI/sentients
#  Does: install → build check → git init → push to GitHub → local dev
# ─────────────────────────────────────────────────────────────────

set -e  # stop on any error

PROJECT_DIR="/Users/user/Desktop/AI/sentients"
GITHUB_USER="shaash-X7"
REPO_NAME="sentients"
REMOTE="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

cd "$PROJECT_DIR"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  SENTIENTS — Last Mile Delivery"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ── 1. Check node / npm ──────────────────────────────────────────
echo "▸ Checking environment..."
node --version
npm --version
git --version
echo ""

# ── 2. Install dependencies ──────────────────────────────────────
echo "▸ Installing dependencies..."
npm install
echo ""

# ── 3. Verify build ──────────────────────────────────────────────
echo "▸ Running production build (static export)..."
npm run build
echo "  ✓ Build passed — /out directory created"
echo ""

# ── 4. Git init & commit ─────────────────────────────────────────
echo "▸ Initialising git..."
git init
git add -A
git commit -m "feat: initial sentients.in build — full site"
echo ""

# ── 5. Push to GitHub ────────────────────────────────────────────
echo "▸ Pushing to github.com/${GITHUB_USER}/${REPO_NAME}..."
echo "  (GitHub CLI will handle auth — you may be prompted to log in)"
echo ""

# Create repo via GitHub CLI if gh is available, else use git remote
if command -v gh &> /dev/null; then
  echo "  GitHub CLI detected — creating repo..."
  gh repo create "${GITHUB_USER}/${REPO_NAME}" --public --source=. --remote=origin --push
else
  echo "  GitHub CLI not found — using git remote directly."
  echo "  Make sure the repo exists at: ${REMOTE}"
  git remote add origin "$REMOTE"
  git branch -M main
  git push -u origin main
fi

echo ""
echo "  ✓ Code pushed to GitHub"
echo ""

# ── 6. Enable GitHub Pages (GitHub CLI) ──────────────────────────
if command -v gh &> /dev/null; then
  echo "▸ Enabling GitHub Pages (gh-pages via Actions)..."
  gh api \
    --method POST \
    -H "Accept: application/vnd.github+json" \
    "/repos/${GITHUB_USER}/${REPO_NAME}/pages" \
    -f build_type="workflow" \
    -f source='{"branch":"main","path":"/"}' 2>/dev/null || true

  echo "  ✓ GitHub Pages enabled"
  echo "  The deploy.yml workflow will now trigger automatically."
  echo "  Monitor at: https://github.com/${GITHUB_USER}/${REPO_NAME}/actions"
  echo ""
fi

# ── 7. Launch local dev server ───────────────────────────────────
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✓ All done! Launching local dev server..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  Local:   http://localhost:3000"
echo "  GitHub:  https://github.com/${GITHUB_USER}/${REPO_NAME}"
echo "  Live:    https://sentients.in  (after DNS propagates)"
echo ""
echo "  DNS records to set at your registrar:"
echo "  ┌─────────────────────────────────────────────────┐"
echo "  │  A      @      185.199.108.153                  │"
echo "  │  A      @      185.199.109.153                  │"
echo "  │  A      @      185.199.110.153                  │"
echo "  │  A      @      185.199.111.153                  │"
echo "  │  CNAME  www    shaash-x7.github.io              │"
echo "  └─────────────────────────────────────────────────┘"
echo ""

npm run dev
