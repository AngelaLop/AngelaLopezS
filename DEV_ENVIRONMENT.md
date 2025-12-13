# 🛠️ Development Environment Setup

## Quick Start (No Ruby Required!)

### Option 1: Python Dev Server (Simplest)
```powershell
python dev-server.py
```
- Opens automatically at http://localhost:4000/preview.html
- Basic preview of your portfolio
- No installation needed (uses Python you already have)

### Option 2: Full Jekyll Server (Best Experience)
```powershell
# First time setup
.\setup-dev.ps1

# Then run
bundle exec jekyll serve
```
- Full Jekyll features
- Auto-reload on file changes
- Complete theme functionality

### Option 3: GitHub Pages (Live Preview)
1. Push your changes: `git push origin main`
2. Wait 2-5 minutes for GitHub Actions to build
3. Visit: `https://AngelaLop.github.io/AngelaLopezS/`

## Installing Ruby (for Full Jekyll)

### Windows - RubyInstaller (Recommended)
1. Download: https://rubyinstaller.org/downloads/
2. Choose: **Ruby+Devkit 3.3.x** (64-bit)
3. Run installer, check "Add Ruby executables to PATH"
4. Restart PowerShell
5. Run: `.\setup-dev.ps1`

### Windows - Chocolatey
```powershell
choco install ruby
```

## Development Workflow

1. **Edit files** in your editor
2. **Preview locally**:
   - Quick: `python dev-server.py`
   - Full: `bundle exec jekyll serve`
3. **Push to GitHub** when ready
4. **View live** on GitHub Pages

## File Structure

```
├── _config.yml          # Site configuration
├── _pages/
│   └── about.md         # Your homepage/bio
├── _projects/           # Your project pages
├── assets/
│   ├── img/            # Images
│   ├── video/          # Videos
│   └── pdf/            # PDFs (like CV)
└── _data/
    └── socials.yml     # Social media links
```

## Common Commands

```powershell
# Start Python dev server
python dev-server.py

# Start Jekyll server (if Ruby installed)
bundle exec jekyll serve

# Build site locally
bundle exec jekyll build

# Check for issues
bundle exec jekyll doctor
```

## Troubleshooting

### Port Already in Use
```powershell
# Find what's using port 4000
netstat -ano | findstr :4000

# Or use a different port in dev-server.py
```

### Jekyll Not Found
```powershell
# Install dependencies
gem install bundler
bundle install
```

### Changes Not Showing
- Hard refresh browser: `Ctrl+Shift+R`
- Clear browser cache
- Restart dev server

## Tips

- **Edit `_config.yml`** for site-wide changes
- **Edit `_pages/about.md`** for your bio
- **Edit `_projects/*.md`** for project pages
- **Edit `_data/socials.yml`** for social links
- Changes to most files auto-reload in Jekyll dev server

