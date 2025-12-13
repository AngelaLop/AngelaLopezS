#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Simple development server for Jekyll site preview
Watches for file changes and provides a basic preview
"""
import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

# Fix Windows console encoding
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except AttributeError:
        # Python < 3.7
        import codecs
        sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'strict')

PORT = 4000
DIRECTORY = Path(__file__).parent

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def log_message(self, format, *args):
        # Custom log format
        print(f"[{self.log_date_time_string()}] {args[0]}")

def safe_print(text):
    """Print text, handling encoding errors gracefully"""
    try:
        print(text)
    except UnicodeEncodeError:
        # Fallback to ASCII-safe version
        safe_text = text.encode('ascii', 'replace').decode('ascii')
        print(safe_text)

def main():
    os.chdir(DIRECTORY)
    
    safe_print("=" * 60)
    safe_print("Portfolio Development Server")
    safe_print("=" * 60)
    safe_print(f"\nServing directory: {DIRECTORY}")
    safe_print(f"Server running at: http://localhost:{PORT}")
    safe_print(f"\nNote: This is a basic preview.")
    safe_print("   For full Jekyll features, install Ruby and run:")
    safe_print("   bundle install && bundle exec jekyll serve")
    safe_print("\nQuick preview files:")
    safe_print("   - http://localhost:4000/preview.html")
    safe_print("   - http://localhost:4000/index.html")
    safe_print("\nPress Ctrl+C to stop the server")
    safe_print("=" * 60)
    safe_print("")
    
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            # Auto-open browser
            url = f"http://localhost:{PORT}/preview.html"
            safe_print(f"Opening {url} in your browser...")
            webbrowser.open(url)
            
            safe_print(f"\nServer started! Visit http://localhost:{PORT}")
            httpd.serve_forever()
    except KeyboardInterrupt:
        safe_print("\n\nServer stopped. Goodbye!")
    except OSError as e:
        if "Address already in use" in str(e) or "Only one usage" in str(e):
            safe_print(f"\nPort {PORT} is already in use!")
            safe_print(f"   Try: netstat -ano | findstr :{PORT}")
            safe_print(f"   Or change PORT in this script")
        else:
            raise

if __name__ == "__main__":
    main()

