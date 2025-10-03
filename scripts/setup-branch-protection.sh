#!/bin/bash

# Script to set up branch protection for main branch
# This script requires GitHub CLI (gh) to be installed and authenticated

set -e

REPO="danielafgsilva/dogwarts-website"
BRANCH="main"

echo "🔒 Setting up branch protection for $BRANCH branch..."

# Check if gh is authenticated
if ! gh auth status >/dev/null 2>&1; then
    echo "❌ GitHub CLI not authenticated. Please run 'gh auth login' first."
    exit 1
fi

# Check if repository exists
if ! gh repo view "$REPO" >/dev/null 2>&1; then
    echo "❌ Repository $REPO not found or not accessible."
    exit 1
fi

echo "✅ Repository found: $REPO"

# Set up branch protection rules
echo "🔧 Configuring branch protection rules..."

# Enable branch protection with required status checks
gh api repos/$REPO/branches/$BRANCH/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["ci/cd","test"]}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true,"require_code_owner_reviews":false,"require_last_push_approval":true}' \
  --field restrictions='{"users":[],"teams":[],"apps":[]}' \
  --field allow_force_pushes=false \
  --field allow_deletions=false \
  --field block_creations=false \
  --field required_conversation_resolution=true \
  --field lock_branch=false \
  --field allow_fork_syncing=true

echo "✅ Branch protection rules configured successfully!"

# Verify the protection rules
echo "🔍 Verifying branch protection rules..."
gh api repos/$REPO/branches/$BRANCH/protection | jq '{
  required_status_checks: .required_status_checks,
  enforce_admins: .enforce_admins,
  required_pull_request_reviews: .required_pull_request_reviews,
  restrictions: .restrictions,
  allow_force_pushes: .allow_force_pushes,
  allow_deletions: .allow_deletions
}'

echo ""
echo "🎉 Branch protection setup complete!"
echo ""
echo "📋 Summary of protection rules:"
echo "   • Direct pushes to main are blocked"
echo "   • Pull requests must pass all CI/CD checks"
echo "   • At least 1 approval required for PRs"
echo "   • Stale reviews are dismissed"
echo "   • Force pushes are not allowed"
echo "   • Branch deletion is not allowed"
echo "   • Conversation resolution is required"
echo ""
echo "🔄 To merge changes to main:"
echo "   1. Create a feature branch from dev"
echo "   2. Make your changes"
echo "   3. Create a PR to main"
echo "   4. Wait for CI/CD checks to pass"
echo "   5. Get required approval"
echo "   6. Merge the PR"
