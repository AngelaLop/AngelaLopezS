# Portfolio Setup Checklist ✅

## Phase 1: View Your Portfolio (Do This First!)

### Quick Preview (No Setup)
- [ ] Open `preview.html` in your web browser
  - Shows a basic version of your portfolio
  - No installation required!

### Full Preview (Requires Docker)
- [ ] Install Docker Desktop
  - Download: https://www.docker.com/products/docker-desktop/
  - Follow installation wizard
  - Restart computer if prompted
  
- [ ] Start the server
  ```powershell
  docker-compose up
  ```
  
- [ ] Open browser to http://localhost:8080
  - See your full portfolio with all features
  - Videos, images, interactive elements

## Phase 2: Essential Customization

### Add Your Contact Info
- [ ] Open `_data/socials.yml`
- [ ] Add your email address
- [ ] Add your GitHub username
- [ ] Add your LinkedIn username
- [ ] Save file and refresh browser

### Add Your CV
- [ ] Save your CV as: `assets/pdf/Angela_Lopez_CV.pdf`
- [ ] Update path in `_data/socials.yml` if using different name

### Review Your Bio
- [ ] Open `_pages/about.md`
- [ ] Read your bio
- [ ] Make any edits/additions
- [ ] Save and refresh browser

## Phase 3: Update Project Content

### Project 1: Poverty Predictor
- [ ] Open `_projects/1_poverty_predictor.md`
- [ ] Add detailed description of your work
- [ ] Add methodology details
- [ ] Add results/findings
- [ ] Add GitHub link (if applicable)
- [ ] Add more images if available

### Project 2: Interactive Dashboard
- [ ] Open `_projects/2_interactive_dashboard.md`
- [ ] Describe your dashboard features
- [ ] Add link to live dashboard (if applicable)
- [ ] Verify video demos work
- [ ] Add technical stack details

### Project 3: Statistical Analysis
- [ ] Open `_projects/3_static_analysis.md`
- [ ] Add specific analysis examples
- [ ] Describe your methodology
- [ ] Add findings/insights
- [ ] Link to reports (if applicable)

### Add More Projects (Optional)
- [ ] Create new files in `_projects/` folder
- [ ] Follow the template format
- [ ] Add project images to `assets/img/`
- [ ] Use consistent tags

## Phase 4: Polish & Customize

### Visual Customization (Optional)
- [ ] Review color scheme
- [ ] Customize in `_sass/_variables.scss` if desired
- [ ] Test dark mode
- [ ] Check mobile responsiveness

### Additional Sections (Optional)
- [ ] Add publications (if applicable)
- [ ] Add blog posts in `_posts/`
- [ ] Add news items in `_news/`
- [ ] Update CV data in `_data/cv.yml`

### SEO & Analytics (Optional)
- [ ] Update keywords in `_config.yml`
- [ ] Add Google Analytics ID
- [ ] Add meta description
- [ ] Verify social media preview images

## Phase 5: Pre-Publication Check

### Content Review
- [ ] Read through entire site
- [ ] Check for typos/grammar
- [ ] Verify all links work
- [ ] Test all videos play
- [ ] Check images load correctly

### Technical Check
- [ ] Test site on different browsers
- [ ] Test on mobile device
- [ ] Verify dark mode works
- [ ] Check page load speed
- [ ] Test all navigation links

### Final Updates
- [ ] Update `_config.yml` with final URL
- [ ] Remove example/template content
- [ ] Add final version of CV
- [ ] Double-check contact information

## Phase 6: Publish to GitHub Pages

### Setup GitHub Repository
- [ ] Create GitHub account (if needed)
- [ ] Create new repository: `yourusername.github.io`
- [ ] Make repository public

### Push Your Code
```powershell
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

- [ ] Push code to GitHub
- [ ] Verify files uploaded correctly

### Enable GitHub Pages
- [ ] Go to repository Settings
- [ ] Click on "Pages" in left sidebar
- [ ] Source: Deploy from branch
- [ ] Branch: main
- [ ] Folder: / (root)
- [ ] Click "Save"

### Verify Publication
- [ ] Wait 2-5 minutes for build
- [ ] Visit: https://yourusername.github.io
- [ ] Test entire site on live URL
- [ ] Share with colleagues for feedback

## Phase 7: Ongoing Maintenance

### Regular Updates
- [ ] Add new projects as completed
- [ ] Update CV regularly
- [ ] Add blog posts (if desired)
- [ ] Keep contact info current

### Promotion
- [ ] Add portfolio URL to LinkedIn
- [ ] Add to email signature
- [ ] Share on social media
- [ ] Include in job applications
- [ ] List on personal business cards

## 📝 Quick Reference

### Start Server
```powershell
docker-compose up
```

### Stop Server
```powershell
docker-compose down
```

### View Site Locally
http://localhost:8080

### Main Files to Edit
- `_pages/about.md` - Your bio
- `_projects/*.md` - Your projects
- `_data/socials.yml` - Social links
- `_config.yml` - Site settings

### Get Help
- `README.md` - Overview
- `QUICK_START.md` - Fast setup
- `SETUP_INSTRUCTIONS.md` - Detailed guide
- `PORTFOLIO_SUMMARY.md` - What's included
- `SOCIAL_LINKS_GUIDE.md` - Adding social media

---

## Current Status

✅ Template set up
✅ Your bio added
✅ 3 projects created
✅ Images & videos copied
✅ Configuration customized

📋 Next: Install Docker and view your site!

---

**Tip**: You can complete these phases over several days. Start with Phase 1 to see what you have, then customize at your own pace!


