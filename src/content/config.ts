import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        
        // --- NUEVAS PROPIEDADES ---
        // 1. Categoría: Cadena de texto obligatoria
        category: z.string(), 
        
        // 2. Etiquetas: Array de cadenas (lista)
        tags: z.array(z.string()), 
    }),
});

export const collections = { blog };