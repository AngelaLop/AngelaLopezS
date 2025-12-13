#!/usr/bin/env python3
"""
Simple development server for Jekyll site preview
Watches for file changes and provides a basic preview
"""
import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

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

def main():
    os.chdir(DIRECTORY)
    
    print("=" * 60)
    print("🚀 Portfolio Development Server")
    print("=" * 60)
    print(f"\n📁 Serving directory: {DIRECTORY}")
    print(f"🌐 Server running at: http://localhost:{PORT}")
    print(f"\n📝 Note: This is a basic preview.")
    print("   For full Jekyll features, install Ruby and run:")
    print("   bundle install && bundle exec jekyll serve")
    print("\n💡 Quick preview files:")
    print("   - http://localhost:4000/preview.html")
    print("   - http://localhost:4000/index.html")
    print("\n⏹️  Press Ctrl+C to stop the server")
    print("=" * 60)
    print()
    
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            # Auto-open browser
            url = f"http://localhost:{PORT}/preview.html"
            print(f"🌐 Opening {url} in your browser...")
            webbrowser.open(url)
            
            print(f"\n✅ Server started! Visit http://localhost:{PORT}")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n👋 Server stopped. Goodbye!")
    except OSError as e:
        if "Address already in use" in str(e) or "Only one usage" in str(e):
            print(f"\n❌ Port {PORT} is already in use!")
            print(f"   Try: netstat -ano | findstr :{PORT}")
            print(f"   Or change PORT in this script")
        else:
            raise

if __name__ == "__main__":
    main()

