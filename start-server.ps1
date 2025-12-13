# PowerShell script to start the portfolio server
Set-Location $PSScriptRoot
Write-Host "Starting portfolio server..." -ForegroundColor Green
Write-Host ""
Write-Host "Your portfolio will be available at:" -ForegroundColor Yellow
Write-Host "http://localhost:8080/preview.html" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
python -m http.server 8080

