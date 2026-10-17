"""Loopback preview server for site/public that tells browsers not to cache.

Plain `python3 -m http.server` sends no Cache-Control, so a browser kept showing yesterday's
screenshot after the file under the same name was replaced (Marc, 2026-10-17).

    python3 serve.py [PORT]      # default 18910, binds 127.0.0.1 only
"""
import functools
import http.server
import sys
from pathlib import Path

PUBLIC = Path(__file__).resolve().parent / 'site' / 'public'


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, max-age=0')
        super().end_headers()


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 18910
    handler = functools.partial(NoCacheHandler, directory=str(PUBLIC))
    with http.server.ThreadingHTTPServer(('127.0.0.1', port), handler) as httpd:
        print(f'Serving {PUBLIC} at http://127.0.0.1:{port}/en/ (no-store)')
        httpd.serve_forever()
