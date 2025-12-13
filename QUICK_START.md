# Quick Start Guide

## Fastest Way to See Your Portfolio

### Step 1: Install Docker Desktop
Download and install: https://www.docker.com/products/docker-desktop/

### Step 2: Start the Server
```powershell
docker-compose up
```

### Step 3: View Your Site
Open: http://localhost:8080

That's it! Your portfolio is now running locally.

## What You'll See

- **Homepage**: Your bio describing your work as a data and social scientist
- **Projects Section**: Three projects showcasing your work:
  1. Poverty Predictor (ML analysis)
  2. Interactive Data Dashboard (with your video demos)
  3. Statistical Analysis Reports
- **Clean, Professional Design**: Academic theme perfect for data science portfolios

## Making Changes

All changes are automatically reflected (just refresh your browser):

- Edit `_pages/about.md` to update your bio
- Edit files in `_projects/` to update project descriptions
- Edit `_config.yml` to change site-wide settings

## Stop the Server

```powershell
docker-compose down
```

For detailed instructions, see `SETUP_INSTRUCTIONS.md`


