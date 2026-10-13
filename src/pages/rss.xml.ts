import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Enrique Relucio — Blog',
    description: 'Artículos sobre ciberseguridad, gestión del riesgo tecnológico, ROI y estrategia comercial B2B.',
    site: context.site || 'https://relucio.es',
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      categories: [post.data.category, ...(post.data.tags || [])],
    })),
    customData: `<language>es-ES</language>`,
  });
}
