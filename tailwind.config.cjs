/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Raleway', 'sans-serif'],
			serif: ['Bitter', 'serif']
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
