/** @type {import('tailwindcss').Config} */
export default {
	// Importante: Esto le dice a Tailwind dónde buscar tus clases
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media', // O 'class' si prefieres control manual
	theme: {
		extend: {
			fontFamily: {
				// Reemplazamos la sans por defecto con Inter
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				// Definimos explícitamente la paleta Zinc para asegurar el tono frío
				zinc: {
					50: '#fafafa',
					100: '#f4f4f5',
					200: '#e4e4e7',
					300: '#d4d4d8',
					400: '#a1a1aa',
					500: '#71717a',
					600: '#52525b',
					700: '#3f3f46',
					800: '#27272a',
					900: '#18181b',
					950: '#09090b',
				}
			},
			// Ajustes finos para replicar la sensación de "aire"
			letterSpacing: {
				tight: '-0.02em',
				tighter: '-0.04em',
			}
		},
	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
}