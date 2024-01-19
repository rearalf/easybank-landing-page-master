import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	head: {
		links: [
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap',
			},
		],
	},
})