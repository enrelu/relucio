import blogMap from './blog-map.json';
export type Locale = 'es' | 'en';
const pages: Record<string, string> = {
  '/': '/en/', '/contacto/': '/en/contact/', '/sobre-mi/': '/en/about/',
  '/herramientas/': '/en/tools/', '/blog/': '/en/blog/',
  '/proyectos/': '/en/projects/', '/trayectoria/': '/en/experience/', '/fotografia/': '/en/photography/',
};
function normalized(path: string) {
  try { path = decodeURIComponent(path); } catch {}
  return path === '/' ? '/' : '/' + path.split('/').filter(Boolean).join('/') + '/';
}
export function localeFor(path: string): Locale { return path.startsWith('/en/') || path === '/en' ? 'en' : 'es'; }
export function localeRoutes(path: string): { es: string; en?: string } {
  const current = normalized(path);
  for (const [es, en] of Object.entries(pages)) if (current === es || current === en) return { es, en };
  for (const post of blogMap) {
    const es = `/blog/${post.es}/`, en = `/en/blog/${post.en}/`;
    if (current === es || current === en) return { es, en };
  }
  for (const kind of ['category', 'tag'] as const) for (const post of blogMap) {
    const pairs = kind === 'category' ? [[post.categoryEs, post.categoryEn]] : post.tagsEs.map((tag, i) => [tag, post.tagsEn[i]]);
    for (const [a, b] of pairs) {
      const es = `/blog/${kind}/${a}/`, en = `/en/blog/${kind}/${b}/`;
      if (current === es || current === en) return { es, en };
    }
  }
  return { es: current };
}
export function localizedPath(path: string, locale: Locale): string {
  const [base, hash] = path.split('#');
  const routes = localeRoutes(base || '/');
  return (locale === 'en' ? routes.en || routes.es : routes.es) + (hash ? '#' + hash : '');
}
