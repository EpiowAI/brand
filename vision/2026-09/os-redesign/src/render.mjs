// Render every NN-*.html here to ../NN-*.png at 1600x1000 @2x (same size and scale as the vision images).
const { chromium } = await import(process.env.PLAYWRIGHT || 'playwright');
import fs from 'fs'; import path from 'path';
const dir = path.dirname(new URL(import.meta.url).pathname);
const only = process.argv[2];
const files = fs.readdirSync(dir).filter(f => /^\d\d-.*\.html$/.test(f) && (!only || f.startsWith(only))).sort();
for (const f of files) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    const b = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined, args: ['--no-sandbox', '--disable-gpu'] });
    try {
      const p = await (await b.newContext({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 2 })).newPage();
      await p.goto('file://' + path.join(dir, f), { waitUntil: 'networkidle' });
      await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
      await p.screenshot({ path: path.join(dir, '..', f.replace('.html', '.png')) });
      console.log('rendered', f.replace('.html', '.png')); break;
    } catch (e) { console.log('retry', f, attempt, e.message.split('\n')[0]); }
    finally { await b.close().catch(() => {}); }
  }
}
