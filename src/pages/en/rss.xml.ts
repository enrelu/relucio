import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blogEn');
  const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Enrique Relucio — Blog (English)',
    description: 'Articles on cybersecurity, technology risk management, ROI, and B2B sales strategy.',
    site: context.site || 'https://relucio.es',
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/en/blog/${post.id}/`,
      categories: [post.data.category, ...(post.data.tags || [])],
    })),
    customData: `<language>en-US</language>`,
  });
}
