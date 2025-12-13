# Angela Lopez - Portfolio Setup Instructions

Your portfolio website has been set up using the al-folio Jekyll template!

## Current Status

✅ **Completed:**
- Template structure set up
- Your bio and personal information configured
- Three project pages created with your work:
  - Poverty Predictor
  - Interactive Data Dashboard
  - Statistical Analysis Reports
- Your images and videos copied to assets folder
- Configuration customized for your portfolio

## What You Need to Do Next

### Option 1: Using Docker (Recommended)

1. **Install Docker Desktop**
   - Download from: https://www.docker.com/products/docker-desktop/
   - Install Docker Desktop for Windows
   - Restart your computer if prompted

2. **Start the Development Server**
   ```powershell
   docker-compose up
   ```

3. **View Your Site**
   - Open browser to: http://localhost:8080
   - The site will automatically reload when you make changes

4. **Stop the Server**
   ```powershell
   docker-compose down
   ```

### Option 2: Using Ruby (Alternative)

1. **Install Ruby**
   - Download from: https://rubyinstaller.org/
   - Install Ruby+Devkit 3.1.X (x64)
   - During installation, check "Add Ruby to PATH"

2. **Install Dependencies**
   ```powershell
   gem install bundler
   bundle install
   ```

3. **Start the Development Server**
   ```powershell
   bundle exec jekyll serve
   ```

4. **View Your Site**
   - Open browser to: http://localhost:4000

## Your Portfolio Structure

```
angelaLopezs/
├── _config.yml           # Main configuration (your name, description, etc.)
├── _pages/
│   └── about.md         # Your bio page (homepage)
├── _projects/           # Your project pages
│   ├── 1_poverty_predictor.md
│   ├── 2_interactive_dashboard.md
│   └── 3_static_analysis.md
├── assets/
│   ├── img/
│   │   ├── angela_pic.svg          # Your profile photo
│   │   └── poverty_predictor.png   # Project image
│   └── video/
│       ├── dash_1.mp4              # Dashboard demo
│       ├── dinamic_ex.mp4          # Dynamic viz demo
│       └── static_ex.mp4           # Static analysis demo
└── images/              # Original image folder (can be deleted)
```

## Customizing Your Portfolio

### 1. Update Social Media Links

Edit `_config.yml` and add your social media at the bottom (search for "social" section)

### 2. Add More Projects

Create new files in `_projects/` folder following this template:

```markdown
---
layout: page
title: Your Project Title
description: Brief description
img: assets/img/your-image.png
importance: 1  # Lower numbers appear first
category: work
tags: [education, inequality, data-viz]
---

Your project content here...
```

### 3. Update Your CV

- Add your CV PDF to `assets/pdf/`
- Update the link in `_pages/about.md`

### 4. Configure Theme Colors

Edit `_sass/_variables.scss` to change colors

### 5. Add Your GitHub/LinkedIn

In `_config.yml`, search for the social media section and add:
- github_username: your-username
- linkedin_username: your-username

## Project Tags Explained

Your projects use these thematic tags:
- `inequality` - Work on social/economic inequalities
- `education` - Education-related analysis
- `labor-markets` - Labor market studies
- `poverty` / `income` - Poverty and income dynamics
- `territorial-disparities` - Geographic analysis
- `data-visualization` - Visualization projects
- `dashboard` - Interactive dashboards
- `statistics` - Statistical analysis

Add these tags to your projects to categorize them properly!

## Publishing to GitHub Pages

Once you're happy with your local preview:

1. **Create GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it: `yourusername.github.io`

2. **Push Your Code**
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`

4. **View Your Live Site**
   - After 2-5 minutes: `https://yourusername.github.io`

## Next Steps

1. ✅ Install Docker or Ruby (choose one)
2. ✅ Run the local server
3. ✅ View your site in browser
4. ✅ Add your social media links
5. ✅ Review and update project descriptions
6. ✅ Add your CV
7. ✅ Publish to GitHub Pages when ready!

## Need Help?

- Jekyll Documentation: https://jekyllrb.com/docs/
- al-folio Theme: https://github.com/alshedivat/al-folio
- Bootstrap Grid: https://getbootstrap.com/docs/5.0/layout/grid/

## Important Files to Edit

- `_config.yml` - Site-wide settings
- `_pages/about.md` - Your bio/homepage
- `_projects/*.md` - Your project pages
- `_data/cv.yml` - Optional: structured CV data

Your portfolio is ready to go! Just install Docker or Ruby and run the server to see it live locally.


