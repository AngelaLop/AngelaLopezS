# Angela Lopez - Portfolio Website Summary

## ✅ What's Been Completed

Your personal portfolio website has been successfully set up with the al-folio Jekyll template!

### 1. Personal Information Configured
- **Name**: Angela Lopez
- **Title**: Data & Social Scientist
- **Bio**: Your full bio text has been added to the homepage
- **Profile Picture**: `angela_pic.svg` is configured

### 2. Projects Created (3 Projects)

All projects are tagged with thematic categories:

#### Project 1: Poverty Predictor
- **Tags**: poverty, income, machine-learning, inequality
- **Image**: poverty_predictor.png
- **Focus**: Machine learning model to predict poverty levels

#### Project 2: Interactive Data Dashboard
- **Tags**: data-visualization, dashboard, education, labor-markets
- **Videos**: dinamic_ex.mp4, dash_1.mp4
- **Focus**: Dynamic visualization dashboard for social indicators

#### Project 3: Statistical Analysis Reports
- **Tags**: statistics, analysis, education, territorial-disparities
- **Video**: static_ex.mp4
- **Focus**: Comprehensive statistical analysis and visualization

### 3. Thematic Tags System

Your work is organized by these themes (as recommended):
- **inequality** - Social and economic inequalities
- **education** - Education inequality and access
- **labor-markets** - Employment patterns and wage dynamics
- **poverty / income** - Income dynamics and poverty analysis
- **territorial-disparities** - Geographic analysis
- **data-visualization** - Visualization projects
- **statistics** - Statistical analysis work
- **dashboard** - Interactive dashboards

### 4. Assets Organized
```
assets/
├── img/
│   ├── angela_pic.svg
│   └── poverty_predictor.png
└── video/
    ├── dash_1.mp4
    ├── dinamic_ex.mp4
    └── static_ex.mp4
```

## 🚀 Next Steps - TO DO

### Immediate (Before Viewing)
1. **Install Docker Desktop** - Required to run the local server
   - Download: https://www.docker.com/products/docker-desktop/
   - Or install Ruby: https://rubyinstaller.org/

2. **Run the Server**
   ```powershell
   docker-compose up
   ```
   Then visit: http://localhost:8080

### Customization (While Viewing)

#### A. Add Your Social Media
Edit `_config.yml` (around line 640+) and add:
```yaml
# Social media links
github_username: your-username
linkedin_username: your-username
twitter_username: your-username  # optional
orcid_id: your-orcid  # optional
```

#### B. Update Projects with Real Details
Each project file in `_projects/` needs:
- Detailed descriptions of your actual work
- Methods and findings
- Links to GitHub repos (if applicable)
- More images/visualizations

#### C. Add Your CV
- Place your CV PDF in: `assets/pdf/Angela_Lopez_CV.pdf`
- Or use the structured CV in `_data/cv.yml` (edit with your info)

#### D. Customize Colors (Optional)
Edit `_sass/_variables.scss` to change the site's color scheme

### Before Publishing

1. **Review all content** - Check spelling, descriptions, links
2. **Add more projects** - Create additional project pages if needed
3. **Test all links** - Make sure GitHub/LinkedIn links work
4. **Add Google Analytics** (optional) - Track site visits
5. **Create GitHub repo** named: `yourusername.github.io`
6. **Push code and enable GitHub Pages**

## 📝 Files You'll Want to Edit

### Essential
- `_pages/about.md` - Your homepage bio
- `_config.yml` - Site configuration, name, social links
- `_projects/*.md` - Your project pages
- `_data/cv.yml` - Structured CV data (optional alternative to PDF)

### Optional
- `_sass/_variables.scss` - Colors and styling
- `_news/*.md` - News/updates section (currently disabled)
- `_posts/*.md` - Blog posts (if you want to add a blog)

## 🎨 Design Features

Your portfolio includes:
- **Responsive Design** - Works on all devices
- **Dark Mode** - Automatic light/dark theme switching
- **Project Cards** - Beautiful grid layout for projects
- **Video Support** - Embedded project demos
- **Clean Typography** - Professional, academic aesthetic
- **Fast Performance** - Optimized images and code

## 📊 Recommended Content Additions

Based on your work focus, consider adding:

1. **Selected Work Section**
   - "Selected work on inequality"
   - "Education analysis"
   - "Labor market studies"
   - "Income dynamics research"

2. **Data Visualization Gallery**
   - Showcase your best visualizations
   - Interactive dashboards
   - Infographics

3. **Publications** (if applicable)
   - Research papers
   - Reports
   - Blog posts

4. **About Page Enhancements**
   - Timeline of your work
   - Skills/tools you use (Python, R, Tableau, etc.)
   - Research interests

## 🔗 Important Links

- **Local Preview**: http://localhost:8080 (after starting Docker)
- **Template Docs**: https://github.com/alshedivat/al-folio
- **Jekyll Docs**: https://jekyllrb.com/docs/
- **Deployment Guide**: See SETUP_INSTRUCTIONS.md

## ⚠️ Important Notes

1. **Don't commit yet** - Review everything locally first
2. **Original images folder** - Can be deleted after confirming site works
3. **URL Configuration** - Currently set to localhost; update in `_config.yml` before publishing
4. **Docker/Ruby required** - Need one of these to view the site

## 📞 When You're Ready to Publish

See detailed publishing instructions in `SETUP_INSTRUCTIONS.md`

The fastest path:
1. Review locally
2. Make customizations
3. Create GitHub repo: `yourusername.github.io`
4. Push code
5. Enable GitHub Pages in settings
6. Site goes live in 2-5 minutes!

---

**Your portfolio is ready!** Just install Docker and run `docker-compose up` to see it. 🎉


