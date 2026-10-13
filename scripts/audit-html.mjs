import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`Auditing ${htmlFiles.length} HTML files in dist/...`);

let issues = 0;
let warnings = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(distDir, file);

  // Skip Astro redirect stubs
  if (/http-equiv=["']refresh["']/i.test(content) && /content=["']noindex["']/i.test(content)) {
    continue;
  }

  if (!/<!doctype html>/i.test(content)) {
    console.error(`[ERROR] ${relPath}: Missing <!doctype html>`);
    issues++;
  }
  if (!/<meta[^>]*charset=["']?utf-8/i.test(content)) {
    console.warn(`[WARN] ${relPath}: Missing or non-UTF-8 charset`);
    warnings++;
  }
  if (!/<meta[^>]*name=["']viewport["']/i.test(content)) {
    console.error(`[ERROR] ${relPath}: Missing viewport meta tag`);
    issues++;
  }
  if (!/<html[^>]*lang=["'][a-z]{2}/i.test(content)) {
    console.error(`[ERROR] ${relPath}: Missing or invalid lang attribute on <html>`);
    issues++;
  }
  if (!/<title>[^<]+<\/title>/i.test(content)) {
    console.error(`[ERROR] ${relPath}: Missing or empty <title> tag`);
    issues++;
  }

  // Check <img> without alt
  const imgTags = content.match(/<img[^>]*>/gi) || [];
  for (const img of imgTags) {
    if (!/alt=["']/i.test(img)) {
      console.warn(`[WARN] ${relPath}: <img> tag without alt attribute: ${img.slice(0, 50)}...`);
      warnings++;
    }
  }

  // Check non-HTTPS URLs
  const httpLinks = content.match(/href=["']http:\/\/[^"']+/gi) || [];
  for (const link of httpLinks) {
    if (!link.includes('localhost') && !link.includes('127.0.0.1')) {
      console.warn(`[WARN] ${relPath}: Non-HTTPS link found: ${link}`);
      warnings++;
    }
  }
}

console.log(`\nAudit completed: ${issues} errors, ${warnings} warnings across ${htmlFiles.length} pages.`);
