# Angela Lopez - Personal Portfolio Website

A professional portfolio website showcasing data science and social science work, built with the al-folio Jekyll template.

## 🎉 Your Portfolio is Ready!

Everything has been set up with your bio, projects, and assets. You just need to:

1. **Install Docker Desktop** (5 minutes)
2. **Run the server** (`docker-compose up`)
3. **View your site** (http://localhost:8080)

## 🚀 Quick Start

### Option 1: Docker (Recommended)

```powershell
# 1. Install Docker Desktop from: https://www.docker.com/products/docker-desktop/

# 2. Start the server
docker-compose up

# 3. Open browser to: http://localhost:8080
```

### Option 2: Ruby

```powershell
# 1. Install Ruby from: https://rubyinstaller.org/

# 2. Install dependencies
gem install bundler
bundle install

# 3. Start server
bundle exec jekyll serve

# 4. Open browser to: http://localhost:4000
```

## 📂 Documentation Files

- **QUICK_START.md** - Fastest way to get started
- **SETUP_INSTRUCTIONS.md** - Complete setup guide
- **PORTFOLIO_SUMMARY.md** - What's been set up and what to customize
- **SOCIAL_LINKS_GUIDE.md** - How to add your social media links
- **preview.html** - Basic HTML preview (open in browser, no setup needed!)

## 📊 What's Included

### Your Bio
Professional bio highlighting your work in:
- Data and social science
- Computational analysis
- Policy analysis and visualization
- Inequality research

### Your Projects (3)
1. **Poverty Predictor** - ML model for poverty prediction
2. **Interactive Data Dashboard** - Dynamic visualizations with video demos
3. **Statistical Analysis Reports** - Comprehensive statistical analysis

### Organized by Themes
- Education inequality
- Labor markets
- Poverty & income dynamics
- Territorial disparities
- Data visualization

### Your Assets
- Profile photo (angela_pic.svg)
- Project images (poverty_predictor.png)
- Video demos (3 MP4 files)

## 🎨 Key Features

- ✨ **Modern Design** - Clean, professional academic theme
- 📱 **Responsive** - Works perfectly on all devices
- 🌓 **Dark Mode** - Automatic light/dark theme switching
- 🎬 **Video Support** - Embedded project demonstrations
- 🏷️ **Tagged Projects** - Organized by thematic areas
- ⚡ **Fast** - Optimized performance
- 🔍 **SEO Ready** - Search engine optimized

## ✏️ Customization Checklist

### Before Viewing
- [ ] Install Docker Desktop
- [ ] Run `docker-compose up`
- [ ] Open http://localhost:8080

### Essential Updates
- [ ] Add your email in `_data/socials.yml`
- [ ] Add your GitHub username in `_data/socials.yml`
- [ ] Add your LinkedIn username in `_data/socials.yml`
- [ ] Add your CV PDF to `assets/pdf/`

### Project Updates
- [ ] Review and enhance project descriptions
- [ ] Add GitHub repo links to projects
- [ ] Add more project images/visualizations
- [ ] Create additional project pages if needed

### Optional Enhancements
- [ ] Customize colors in `_sass/_variables.scss`
- [ ] Add Google Scholar ID (if applicable)
- [ ] Add blog posts in `_posts/`
- [ ] Add news items in `_news/`
- [ ] Set up Google Analytics

## 📁 Important Files to Edit

```
Your Portfolio/
├── _config.yml                  # Site configuration (name, description, URL)
├── _data/
│   ├── socials.yml             # Social media links (TODO: Add yours!)
│   └── cv.yml                  # Optional: Structured CV data
├── _pages/
│   └── about.md                # Your homepage bio
├── _projects/
│   ├── 1_poverty_predictor.md  # Project 1
│   ├── 2_interactive_dashboard.md  # Project 2
│   └── 3_static_analysis.md    # Project 3
└── assets/
    ├── img/
    │   ├── angela_pic.svg      # Your photo
    │   └── poverty_predictor.png
    ├── video/
    │   ├── dash_1.mp4
    │   ├── dinamic_ex.mp4
    │   └── static_ex.mp4
    └── pdf/
        └── (Add your CV here)
```

## 🌐 Publishing to GitHub Pages

Once you're happy with your local preview:

```powershell
# 1. Create a new repository on GitHub named: yourusername.github.io

# 2. Initialize and push your code
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main

# 3. Enable GitHub Pages in repository Settings > Pages
#    - Source: Deploy from branch
#    - Branch: main
#    - Folder: / (root)

# 4. Your site will be live at: https://yourusername.github.io (in 2-5 minutes)
```

### Before Publishing - Update URL
Edit `_config.yml`:
```yaml
# Change from:
url: http://localhost:4000
baseurl:

# To:
url: https://yourusername.github.io
baseurl: # leave empty for root
```

## 🛠️ Development

### Making Changes

All changes are automatically reflected (just refresh browser):

```yaml
# Edit your bio
_pages/about.md

# Update projects
_projects/*.md

# Change site settings
_config.yml

# Update social links
_data/socials.yml
```

### Stop Server

```powershell
# Docker:
docker-compose down

# Ruby:
Ctrl+C
```

## 🆘 Troubleshooting

### Port Already in Use
```powershell
docker-compose down
# Wait a few seconds
docker-compose up
```

### Changes Not Showing
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Restart Docker: `docker-compose restart`
3. Check for syntax errors in YAML files

### Docker Issues
```powershell
docker-compose down
docker-compose build --no-cache
docker-compose up
```

## 📚 Resources

- **al-folio Theme**: https://github.com/alshedivat/al-folio
- **Jekyll Documentation**: https://jekyllrb.com/docs/
- **Bootstrap Grid**: https://getbootstrap.com/docs/5.0/layout/grid/
- **Font Awesome Icons**: https://fontawesome.com/icons
- **Markdown Guide**: https://www.markdownguide.org/

## 🎯 Next Steps

1. **Right Now**: Open `preview.html` in your browser for a basic preview
2. **Next 10 Minutes**: Install Docker and see the full site
3. **This Week**: Customize content, add social links, update projects
4. **When Ready**: Publish to GitHub Pages!

## 💡 Tips

- Start by viewing `preview.html` - no setup needed!
- Use `QUICK_START.md` for fastest setup
- Read `PORTFOLIO_SUMMARY.md` for complete overview
- Check `SOCIAL_LINKS_GUIDE.md` for adding social media

## 📧 Support

For questions about:
- **Template**: See al-folio documentation
- **Jekyll**: See Jekyll documentation
- **Your setup**: Check the documentation files in this repo

---

**Built with ❤️ using the al-folio Jekyll theme**

Your professional portfolio is ready to showcase your work in data science and social policy analysis!
