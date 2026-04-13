import { getCollection } from 'astro:content';
export async function GET() {
  const posts = await getCollection('blog');
  return new Response(JSON.stringify(posts.map(p => p.id)));
}
