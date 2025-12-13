# How to Add Your Social Media Links

Your portfolio is configured to show social media links on your homepage. Here's how to add yours:

## Quick Setup

Edit the file `_data/socials.yml` and uncomment/add your information:

### Essential Links to Add

```yaml
# Your Email (REQUIRED)
email: your.email@example.com

# GitHub (Highly Recommended for data science portfolio)
github_username: yourusername

# LinkedIn (Highly Recommended for professional portfolio)
linkedin_username: your-linkedin-username

# Your CV PDF
cv_pdf: /assets/pdf/Angela_Lopez_CV.pdf  # Add your CV to assets/pdf/ folder
```

### Optional but Recommended

```yaml
# Google Scholar (if you have publications)
scholar_userid: your-google-scholar-id

# ORCID (for academic work)
orcid_id: 0000-0000-0000-0000

# Research Gate
research_gate_profile: your-profile

# Twitter/X
x_username: yourusername

# Kaggle (for data science)
kaggle_id: yourusername
```

## Complete Example for a Data Scientist

Here's what your `_data/socials.yml` could look like:

```yaml
# Core Professional Links
email: angela.lopez@example.com
github_username: angelalopez
linkedin_username: angela-lopez-data-scientist
cv_pdf: /assets/pdf/Angela_Lopez_CV.pdf

# Academic/Research Links (if applicable)
# scholar_userid: your-google-scholar-id
# orcid_id: 0000-0000-0000-0000
# research_gate_profile: Angela-Lopez

# Data Science Platforms
# kaggle_id: angelalopez

# Social Media (optional)
# x_username: angelalopez
# medium_username: angelalopez

# RSS Feed
rss_icon: true
```

## Step-by-Step Instructions

### 1. Open the file
Open `_data/socials.yml` in any text editor

### 2. Find the platforms you use
Scroll through the file and find the social media platforms you use

### 3. Uncomment and add your username
Remove the `#` at the start of the line and add your username:

**Before:**
```yaml
# github_username: # your GitHub user name
```

**After:**
```yaml
github_username: angelalopez
```

### 4. Add your email (Required!)
```yaml
email: your.email@example.com
```

### 5. Add your CV
1. Place your CV PDF in: `assets/pdf/Angela_Lopez_CV.pdf`
2. Update the line:
```yaml
cv_pdf: /assets/pdf/Angela_Lopez_CV.pdf
```

### 6. Save the file

### 7. Restart your server (if running)
```powershell
# Stop with Ctrl+C, then restart:
docker-compose up
```

## Finding Your IDs

### Google Scholar ID
1. Go to your Google Scholar profile
2. Look at the URL: `scholar.google.com/citations?user=XXXXXXXXXX`
3. Copy the part after `user=`

### ORCID ID
1. Go to orcid.org and sign up (free)
2. Your ID looks like: `0000-0000-0000-0000`

### LinkedIn Username
Your LinkedIn URL is: `linkedin.com/in/your-username`
Use the part after `/in/`

## What It Looks Like

The social icons will appear:
- At the bottom of your homepage (below your bio)
- As clickable icons for each platform
- In a clean, horizontal row
- With hover effects

## Common Mistakes

❌ **Wrong:**
```yaml
email: # your email address
```

✅ **Correct:**
```yaml
email: angela.lopez@example.com
```

❌ **Wrong:**
```yaml
github_username: https://github.com/angelalopez
```

✅ **Correct:**
```yaml
github_username: angelalopez
```

## Supported Social Platforms

The template supports 50+ platforms including:
- GitHub, GitLab
- LinkedIn
- Google Scholar, ORCID, ResearchGate
- Twitter/X
- Kaggle, LeetCode
- Medium, Blogger
- Instagram, Facebook
- YouTube
- And many more!

See the complete list in `_data/socials.yml`

## Custom Social Links

You can also add custom links:

```yaml
custom_social:
  logo: assets/img/my-logo.png
  title: My Portfolio
  url: https://mywebsite.com/
```

## Priority Recommendations for Data Science Portfolio

1. **Must Have:**
   - Email
   - GitHub
   - LinkedIn

2. **Should Have:**
   - CV PDF
   - Google Scholar (if you have publications)

3. **Nice to Have:**
   - Kaggle
   - Medium (if you write)
   - Twitter/X
   - Personal website

## After Adding Your Links

1. Save the file
2. Restart the server
3. Refresh your browser
4. Check that icons appear at the bottom of your homepage
5. Click each icon to verify the links work

---

**Need help?** The icons use Font Awesome and Academicons, so they'll look professional and consistent with your site design.


