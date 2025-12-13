@echo off
cd /d "%~dp0"
echo Starting portfolio server...
echo.
echo Your portfolio will be available at:
echo http://localhost:8080/preview.html
echo.
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8080

