# 🌿 Branch Strategy

## Branches

### `main` branch
- **Purpose**: Production-ready code
- **Deployment**: Live site at `https://AngelaLop.github.io/AngelaLopezS/`
- **When to use**: Only push stable, tested changes

### `dev` branch
- **Purpose**: Development and testing
- **Deployment**: Preview site (same URL, but from dev branch)
- **When to use**: Test changes before merging to main

## Workflow

### Making Changes

1. **Work on dev branch:**
   ```powershell
   git checkout dev
   # Make your changes
   git add .
   git commit -m "Your changes"
   git push origin dev
   ```

2. **Test on dev branch:**
   - GitHub Actions will build and deploy from dev
   - Wait 2-5 minutes
   - Check your site to see changes

3. **Merge to main when ready:**
   ```powershell
   git checkout main
   git merge dev
   git push origin main
   ```

### Quick Commands

```powershell
# Switch to dev branch
git checkout dev

# Switch to main branch
git checkout main

# Create a new feature branch from dev
git checkout dev
git checkout -b feature/my-feature

# Push dev branch
git push origin dev

# Merge dev into main
git checkout main
git merge dev
git push origin main
```

## GitHub Pages Setup

The deployment workflow automatically builds from:
- `main` branch → Production site
- `dev` branch → Preview/testing

Both deploy to the same GitHub Pages URL, but you can see the latest from whichever branch was last pushed.

## Best Practices

1. ✅ Always test on `dev` first
2. ✅ Only merge to `main` when changes are ready
3. ✅ Use descriptive commit messages
4. ✅ Push `dev` frequently to see changes live

