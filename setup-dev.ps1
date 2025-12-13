# PowerShell script to set up development environment
Write-Host "🔧 Setting up Portfolio Development Environment" -ForegroundColor Cyan
Write-Host ""

# Check for Ruby
Write-Host "Checking for Ruby..." -ForegroundColor Yellow
$rubyInstalled = Get-Command ruby -ErrorAction SilentlyContinue

if (-not $rubyInstalled) {
    Write-Host "❌ Ruby is not installed" -ForegroundColor Red
    Write-Host ""
    Write-Host "To install Ruby on Windows:" -ForegroundColor Yellow
    Write-Host "  1. Download RubyInstaller: https://rubyinstaller.org/downloads/" -ForegroundColor White
    Write-Host "  2. Run the installer (recommended: Ruby+Devkit 3.3.x)"
    Write-Host "  3. Restart PowerShell after installation"
    Write-Host ""
    Write-Host "Or use Chocolatey (if installed):" -ForegroundColor Yellow
    Write-Host "  choco install ruby" -ForegroundColor White
    Write-Host ""
    Write-Host "📝 For now, you can:" -ForegroundColor Cyan
    Write-Host "  - Use the Python dev server: python dev-server.py" -ForegroundColor White
    Write-Host "  - Push to GitHub and view on GitHub Pages" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host "✅ Ruby is installed: $(ruby --version)" -ForegroundColor Green
    Write-Host ""
    Write-Host "Installing Jekyll dependencies..." -ForegroundColor Yellow
    gem install bundler
    bundle install
    Write-Host ""
    Write-Host "✅ Setup complete! Run: bundle exec jekyll serve" -ForegroundColor Green
}

Write-Host ""
Write-Host "🚀 Quick Start Options:" -ForegroundColor Cyan
Write-Host "  1. Python dev server:  python dev-server.py" -ForegroundColor White
Write-Host "  2. Full Jekyll server: bundle exec jekyll serve" -ForegroundColor White
Write-Host "  3. View on GitHub:     Push to GitHub and visit your Pages URL" -ForegroundColor White

