/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				//* Primary
				'dark-blue': 'hsl(233, 26%, 24%)',
				'lime-green': 'hsl(136, 65%, 51%)',
				'bright-cyan': 'hsl(192, 70%, 51%)',
				//* Neutral
				'grayish-blue': 'hsl(233, 8%, 62%)',
				'light-grayish-blue': 'hsl(220, 16%, 96%)',
				'very-light-gray': 'hsl(0, 0%, 98%)',
			},
			fontFamily: {
				customFont: ['Public Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
