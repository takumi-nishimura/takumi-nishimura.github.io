// Pre-render each route of the SPA to a static HTML file so GitHub Pages serves
// real, crawlable HTML (content + per-route <title>/meta from react-helmet) at
// clean URLs, with no redirect. Routes are discovered from posts/index.json.
//
// Uses the Playwright Chromium that is already available locally. Run via
// `npm run prerender` (the deploy pipeline runs build then prerender).
import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.join(root, '..', 'build');
const PORT = 45987;

const MIME = {
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.md': 'text/plain; charset=utf-8',
  '.txt': 'text/plain',
  '.webmanifest': 'application/manifest+json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

// The clean CRA shell (empty #root + boot scripts). Every route boots from this
// so BrowserRouter renders the correct route; we then snapshot the result.
const shell = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const ext = path.extname(urlPath);
  if (ext) {
    const filePath = path.join(buildDir, urlPath);
    if (filePath.startsWith(buildDir) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
    res.writeHead(404);
    res.end('not found');
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(shell);
});

await new Promise((r) => server.listen(PORT, r));

const postsIndex = JSON.parse(fs.readFileSync(path.join(buildDir, 'posts', 'index.json'), 'utf8'));
const routes = ['/', '/blog', ...postsIndex.map((p) => `/blog/${p.slug}`)];

// Seed payload injected into every page so the client renders content
// synchronously (no fetch/loading flash on a direct landing).
const bodies = {};
for (const p of postsIndex) {
  bodies[p.slug] = fs.readFileSync(path.join(buildDir, 'posts', `${p.slug}.md`), 'utf8');
}
const seedScript =
  `<script>window.__PRERENDER__=` +
  JSON.stringify({ index: postsIndex, bodies }).replace(/</g, '\\u003c') +
  `</script>`;

const browser = await chromium.launch();
const page = await browser.newPage();
let ok = 0;
for (const route of routes) {
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle' });
  // let async content settle (markdown fetch, Mermaid render, helmet head)
  await page.waitForTimeout(1200);
  let html = '<!DOCTYPE html>\n' + (await page.evaluate(() => document.documentElement.outerHTML));
  html = html.replace('</body>', `${seedScript}</body>`);
  const outDir = route === '/' ? buildDir : path.join(buildDir, route);
  await fsp.mkdir(outDir, { recursive: true });
  await fsp.writeFile(path.join(outDir, 'index.html'), html, 'utf8');
  console.log(`prerendered ${route} -> ${path.relative(buildDir, path.join(outDir, 'index.html'))} (${html.length} bytes)`);
  ok += 1;
}
await browser.close();
server.close();

// 404.html boots the SPA from the clean shell so any non-prerendered path still
// renders client-side (no redirect, no flash).
await fsp.writeFile(path.join(buildDir, '404.html'), shell, 'utf8');
console.log(`wrote 404.html; prerendered ${ok} route(s)`);
