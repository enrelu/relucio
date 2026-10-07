import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=process.cwd();
const map=JSON.parse(fs.readFileSync(path.join(root,'src/i18n/blog-map.json'),'utf8'));
function readRoute(route){return fs.readFileSync(path.join(root,'dist',decodeURI(route).replace(/^\//,''),'index.html'),'utf8')}
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)])}
const esFiles=fs.readdirSync(path.join(root,'src/content/blog')).filter(x=>x.endsWith('.md'));
const enFiles=fs.readdirSync(path.join(root,'src/content/blog-en')).filter(x=>x.endsWith('.md'));
assert.equal(map.length,esFiles.length,'Every original article needs an explicit locale pair');
assert.equal(map.length,enFiles.length,'Every English article needs an explicit locale pair');
assert.equal(new Set(map.map(x=>x.es)).size,map.length,'Duplicate Spanish article IDs');
assert.equal(new Set(map.map(x=>x.en)).size,map.length,'Duplicate English article IDs');
for(const row of map){
 const es=readRoute(`/blog/${row.es}/`),en=readRoute(`/en/blog/${row.en}/`);
 assert.match(es,/<html[^>]*lang="es"/);assert.match(en,/<html[^>]*lang="en"/);
 assert(en.includes(`translation`)||en.includes('Read the original in Spanish'),'Original article link absent');
 assert(en.includes(row.es)||en.includes(encodeURI(row.es)),'Original article URL absent');
 const content=fs.readFileSync(path.join(root,'src/content/blog-en',row.en+'.md'),'utf8');
 assert(!/ZXQPROTECTED|ZXQSEG|\uFFFD/.test(content),'Unresolved translation token');
 assert(content.includes('translationKey: '+row.es),'Translation key mismatch');
 const original=fs.readFileSync(path.join(root,'src/content/blog',row.es+'.md'),'utf8');
 const date=s=>s.match(/pubDate:\s*['"]?([^'"\r\n]+)/)?.[1].trim();
 assert.equal(date(content),date(original),'Original publication date must be preserved');
 for(const [a,b] of Object.entries(row.anchorsEsToEn)){assert(es.includes(`id="${a}"`));assert(en.includes(`id="${b}"`))}
}
let pageCount=0;
for(const file of walk(path.join(root,'dist/en')).filter(x=>x.endsWith('.html'))){
 const html=fs.readFileSync(file,'utf8');if(/http-equiv="refresh"/.test(html))continue;
 pageCount++;assert.match(html,/<html[^>]*lang="en"/);assert.match(html,/hreflang="es"/);assert.match(html,/hreflang="en"/);assert.match(html,/hreflang="x-default"/);
 assert.match(html,/rel="canonical"[^>]*href="https:\/\/relucio\.es\/en\//);
 for(const link of html.matchAll(/(?:href|data-url)="([^"]+)"/g)){
  let target=link[1].replaceAll('&amp;','&');if(target.startsWith('https://relucio.es'))target=target.slice('https://relucio.es'.length);
  if(!target.startsWith('/')||target.startsWith('//'))continue;
  const route=decodeURI(target.split(/[?#]/)[0]);const resolved=path.join(root,'dist',route);
  assert(fs.existsSync(resolved)||fs.existsSync(path.join(resolved,'index.html')),`Missing local route: ${target}`);
 }
}
const home=readRoute('/en/');assert(home.includes('I bring structure to your sales.'));
assert(!home.includes('El trabajo se plantea como un proyecto.'));
assert(readRoute('/en/tools/').includes('value="Click Generate"'));
assert(!readRoute('/en/tools/').includes('Haga clic en Generar'));
assert(readRoute('/en/contact/').includes('locale=en'));
const sitemap=fs.readFileSync(path.join(root,'dist/sitemap-0.xml'),'utf8');for(const row of map){assert(sitemap.includes('/en/blog/'+row.en+'/'))}
console.log(`i18n checks passed: ${map.length} complete article pairs, ${pageCount} English pages, route links, metadata, anchors, dates and sitemap.`);
