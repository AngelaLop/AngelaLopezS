# 🚀 Push Your Portfolio to GitHub Pages

## Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** (top right) → **"New repository"**
3. **Repository name**: `YOUR_USERNAME.github.io` 
   - ⚠️ **IMPORTANT**: Replace `YOUR_USERNAME` with your actual GitHub username
   - Example: If your username is `angelalopez`, name it: `angelalopez.github.io`
4. **Description**: "Personal portfolio website"
5. **Visibility**: Choose **Public** (required for free GitHub Pages)
6. **DO NOT** check "Initialize with README" (we already have files)
7. **Click "Create repository"**

---

## Step 2: Update Your Config

Before pushing, update `_config.yml`:

1. Open `_config.yml` in your editor
2. Find the line: `url: https://YOUR_USERNAME.github.io`
3. Replace `YOUR_USERNAME` with your actual GitHub username
4. Save the file

---

## Step 3: Push to GitHub

**Copy and paste these commands** (replace `YOUR_USERNAME` with your GitHub username):

```powershell
# Set your GitHub username (replace with yours!)
$username = "YOUR_USERNAME"

# Add the remote repository
git remote add origin https://github.com/$username/$username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Or if you prefer HTTPS with authentication:**

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git branch -M main
git push -u origin main
```

You'll be prompted for your GitHub username and password (use a Personal Access Token if 2FA is enabled).

---

## Step 4: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** (top menu)
3. **Scroll down to "Pages"** (left sidebar)
4. **Under "Source"**:
   - Select: **"Deploy from a branch"**
   - Branch: **`main`**
   - Folder: **`/ (root)`**
5. **Click "Save"**

---

## Step 5: Wait for Build (2-5 minutes)

1. **Go to "Actions" tab** in your repository
2. You'll see a workflow building your site
3. Wait until you see a green checkmark ✅

---

## Step 6: View Your Live Site!

**Your portfolio will be live at:**
### `https://YOUR_USERNAME.github.io`

Replace `YOUR_USERNAME` with your actual GitHub username!

---

## Troubleshooting

### If push fails:
- Make sure you've created the repository first
- Check that the repository name matches: `username.github.io`
- Verify your GitHub credentials

### If site doesn't build:
- Check the "Actions" tab for error messages
- Make sure `Gemfile.lock` is committed (it should be)
- Wait a few more minutes - first build takes longer

### If site is blank:
- Wait 5-10 minutes for GitHub to finish building
- Check Actions tab to see build status
- Make sure you updated `_config.yml` with your username

---

## After It's Live

Once your site is live, you can:
- ✅ Share the URL with anyone
- ✅ Add it to your LinkedIn, email signature, etc.
- ✅ Make changes locally and push to update the site
- ✅ Customize colors, add more projects, etc.

**Your beautiful portfolio will be live for the world to see!** 🎉

